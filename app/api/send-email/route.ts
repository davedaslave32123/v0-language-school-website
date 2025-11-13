import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { firstName, lastName, email, phone, message } = body || {}

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: 'Email i Wiadomość są wymagane' },
        { status: 400 }
      )
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
      reply_to: email,
      subject: `Nowa wiadomość od ${[firstName, lastName].filter(Boolean).join(' ') || 'Użytkownik'}`,
      text:
`Imię: ${firstName || '-'}
Nazwisko: ${lastName || '-'}
Email: ${email}
Telefon: ${phone || '-'}
-------------------------
Wiadomość:
${message}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię:</strong> ${firstName || '-'}</p>
        <p><strong>Nazwisko:</strong> ${lastName || '-'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || '-'}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${(message || '').toString().replace(/\n/g, '<br/>')}</p>
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
