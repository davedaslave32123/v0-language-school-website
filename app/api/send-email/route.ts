import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  LEAD_SOURCES,
  LEAD_SOURCE_LABELS,
  SPANISH_LEVELS,
  type LeadSource,
  type SpanishLevel,
} from '@/lib/leadSource'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { firstName, email, phone, company, source, level } = body || {}

    // Honeypot: real users never see/fill `company`. If it's set, it's a bot.
    // Respond with success so the bot believes it worked, but send nothing.
    if (typeof company === 'string' && company.trim() !== '') {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Server-side validation of all 3 fields.
    const name = typeof firstName === 'string' ? firstName.trim() : ''
    const mail = typeof email === 'string' ? email.trim() : ''
    const tel = typeof phone === 'string' ? phone.trim() : ''
    const digits = tel.replace(/[^\d]/g, '')

    if (!name || name.length > 100) {
      return NextResponse.json({ success: false, error: 'Podaj poprawne imię.' }, { status: 400 })
    }
    if (!mail || !EMAIL_REGEX.test(mail) || mail.length > 254) {
      return NextResponse.json({ success: false, error: 'Podaj poprawny adres e-mail.' }, { status: 400 })
    }
    if (digits.length < 9 || digits.length > 15) {
      return NextResponse.json({ success: false, error: 'Podaj poprawny numer telefonu.' }, { status: 400 })
    }

    if (!LEAD_SOURCES.includes(source)) {
      return NextResponse.json(
        { success: false, error: 'Nieprawidłowe źródło zgłoszenia.' },
        { status: 400 }
      )
    }
    const leadSource = source as LeadSource

    // Spanish leads must declare a learning level (the form enforces this too).
    let spanishLevel: SpanishLevel | null = null
    if (leadSource === 'spanish') {
      if (!SPANISH_LEVELS.includes(level)) {
        return NextResponse.json(
          { success: false, error: 'Zaznacz, na jakim etapie nauki jesteś.' },
          { status: 400 }
        )
      }
      spanishLevel = level as SpanishLevel
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Brak RESEND_API_KEY w środowisku' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const sourceLabel = LEAD_SOURCE_LABELS[leadSource]

    // English keeps its original subject/body; Spanish gets a labelled variant.
    const subject =
      leadSource === 'spanish'
        ? `Nowe zgłoszenie (${sourceLabel}) – lekcja próbna od ${name}`
        : `Nowe zgłoszenie na lekcję próbną od ${name}`

    const levelTextLine = spanishLevel ? `\nPoziom: ${spanishLevel}` : ''
    const levelHtmlLine = spanishLevel ? `<p><strong>Poziom:</strong> ${spanishLevel}</p>` : ''
    const sourceTextLine = leadSource === 'spanish' ? `\nJęzyk: ${sourceLabel}` : ''
    const sourceHtmlLine =
      leadSource === 'spanish' ? `<p><strong>Język:</strong> ${sourceLabel}</p>` : ''

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['kontakt@agaodjezykow.com'],
      replyTo: mail,
      subject,
      text:
`Imię: ${name}
Email: ${mail}
Telefon: ${tel}${sourceTextLine}${levelTextLine}
-------------------------
Zgłoszenie na bezpłatną lekcję próbną.`,
      html: `
        <h2>Nowe zgłoszenie na bezpłatną lekcję próbną</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${mail}</p>
        <p><strong>Telefon:</strong> ${tel}</p>
        ${sourceHtmlLine}${levelHtmlLine}
      `,
      tags: [{ name: 'source', value: leadSource }],
    })

    if (error) {
      console.error('[send-email] Resend error:', error)
      return NextResponse.json(
        { success: false, error: error.message || 'Nie udało się wysłać wiadomości.' },
        { status: 502 }
      )
    }
    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (e: any) {
    console.error('[send-email] Unexpected error:', e)
    return NextResponse.json(
      { success: false, error: e?.message ?? 'Wystąpił nieoczekiwany błąd.' },
      { status: 500 }
    )
  }
}
