import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { firstName, email, phone, company } = body || {}

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

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Brak RESEND_API_KEY w środowisku' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['kontakt@agaodjezykow.com'],
      replyTo: mail,
      subject: `Nowe zgłoszenie na lekcję próbną od ${name}`,
      text:
`Imię: ${name}
Email: ${mail}
Telefon: ${tel}
-------------------------
Zgłoszenie na bezpłatną lekcję próbną.`,
      html: `
        <h2>Nowe zgłoszenie na bezpłatną lekcję próbną</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${mail}</p>
        <p><strong>Telefon:</strong> ${tel}</p>
      `,
    })

    if (error) return NextResponse.json({ success: false, error }, { status: 502 })
    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: e?.message ?? 'Unexpected error' },
      { status: 500 }
    )
  }
}
