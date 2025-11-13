import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body || {}

    if (!email || !message) {
      return res.status(400).json({ success: false, error: 'Email i Wiadomość są wymagane' })
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ success: false, error: 'Brak RESEND_API_KEY w środowisku' })
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

    if (error) return res.status(502).json({ success: false, error })
    return res.status(200).json({ success: true, data })
  } catch (e: any) {
    return res.status(500).json({ success: false, error: e?.message ?? 'Unexpected error' })
  }
}
