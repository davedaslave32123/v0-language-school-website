import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Prywatności — Aga od Języków",
  description: "Polityka prywatności Szkoły Muzyczno-Lingwistycznej Akademia Kreatywności.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <h1 className="mb-10 font-serif text-3xl font-bold text-foreground lg:text-4xl">
          Polityka Prywatności
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              1. Administrator danych
            </h2>
            <p>
              Administratorem danych osobowych jest Szkoła Muzyczno-Lingwistyczna Akademia
              Kreatywności Agnieszka Stokłosa, ul. Miedziana 12/28, 53-441 Wrocław, NIP
              7521430296, e-mail: kontakt@agaodjezykow.com.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              2. Jakie dane zbieramy
            </h2>
            <p>
              Poprzez formularz zbieramy: imię, adres e-mail i numer telefonu. Dodatkowo, za
              Twoją zgodą, zbieramy dane analityczne przez pliki cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              3. Cel i podstawa prawna
            </h2>
            <p>
              Dane z formularza przetwarzamy w celu kontaktu i umówienia lekcji próbnej (art. 6
              ust. 1 lit. a RODO — zgoda). Dane analityczne przetwarzamy na podstawie Twojej
              zgody (cookies).
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              4. Pliki cookies i narzędzia
            </h2>
            <p>
              Za Twoją zgodą używamy: Meta Pixel (Meta Platforms), Google Tag Manager (Google),
              Microsoft Clarity (Microsoft) — w celach analitycznych i marketingowych. Możesz w
              każdej chwili wycofać zgodę.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              5. Czas przechowywania
            </h2>
            <p>
              Dane z formularza przechowujemy do czasu zakończenia kontaktu lub wycofania zgody.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              6. Twoje prawa
            </h2>
            <p>
              Masz prawo do: dostępu do danych, ich poprawiania, usunięcia, ograniczenia
              przetwarzania, wycofania zgody oraz wniesienia skargi do Prezesa UODO.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              7. Kontakt
            </h2>
            <p>
              W sprawach dotyczących danych osobowych napisz na adres e-mail:
              kontakt@agaodjezykow.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
