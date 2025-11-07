import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message } = body

    const data = await resend.emails.send({
      from: "Formularz <noreply@agaodjezykow.com>",
      to: ["kontakt@agaodjezykow.com"],
      subject: `Nowa wiadomość od ${firstName} ${lastName}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię:</strong> ${firstName}</p>
        <p><strong>Nazwisko:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      { error: "Błąd wysyłania emaila" },
      {
        status: 500,
      },
    )
  }
}
