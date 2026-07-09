"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ContactSection() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    company: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle")
  const [errorText, setErrorText] = useState<string | null>(null)
  const [consentChecked, setConsentChecked] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorText(null)

    try {
      if (!formData.firstName || !formData.email || !formData.phone) {
        setSubmitStatus("error")
        setErrorText("Uzupełnij wszystkie pola.")
        setIsSubmitting(false)
        return
      }

      if (!consentChecked) {
        setSubmitStatus("error")
        setErrorText("Wyrażenie zgody na przetwarzanie danych jest wymagane.")
        setIsSubmitting(false)
        return
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const maybeJson = await res.json().catch(() => null)

      if (!res.ok) {
        const rawError = maybeJson && (maybeJson.error || maybeJson.message)
        setSubmitStatus("error")
        setErrorText(
          typeof rawError === "string" && rawError.trim()
            ? rawError
            : "Coś poszło nie tak. Spróbuj ponownie."
        )
        return
      }

      setFormData({ firstName: "", email: "", phone: "", company: "" })
      setConsentChecked(false)
      router.push("/dziekuje")
      return
    } catch (err: any) {
      setSubmitStatus("error")
      setErrorText(err?.message || "Wystąpił nieoczekiwany błąd.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="formularz" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Zrób pierwszy krok. Umów się na darmową lekcję próbną.
            </h2>
          </div>
        </div>

        <Card className="bg-card border-0 shadow-lg max-w-xl mx-auto">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Honeypot: hidden from real users; bots that fill it are rejected server-side. */}
                <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
                  <label htmlFor="company">Nie wypełniaj tego pola</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  name="firstName"
                  placeholder="Imię"
                  className="bg-background"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <Input
                  name="email"
                  placeholder="Adres e-mail"
                  type="email"
                  className="bg-background"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  name="phone"
                  placeholder="Numer telefonu"
                  type="tel"
                  className="bg-background"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    required
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-1 h-4 w-4 flex-shrink-0 rounded border-input accent-primary"
                  />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych (imię, e-mail,
                    telefon) w celu kontaktu i umówienia bezpłatnej lekcji próbnej.
                  </span>
                </label>

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 text-red-800 rounded-md" role="status" aria-live="assertive">
                    {errorText ?? "Wystąpił błąd. Spróbuj ponownie później."}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-6"
                  disabled={isSubmitting || !consentChecked}
                >
                  {isSubmitting ? "Wysyłanie..." : "Zapisuję się na darmową lekcję"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Wysyłając zgłoszenie, do niczego się nie zobowiązujesz. Skontaktuję się z Tobą, aby ustalić dogodny
                  termin.
                </p>

                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  Administratorem Twoich danych jest Szkoła Muzyczno-Lingwistyczna Akademia
                  Kreatywności Agnieszka Stokłosa, ul. Miedziana 12/28, 53-441 Wrocław, NIP
                  7521430296. Dane przetwarzamy wyłącznie w celu kontaktu w sprawie lekcji
                  próbnej. Masz prawo dostępu, poprawiania i usunięcia danych. Szczegóły w{" "}
                  <a href="/polityka-prywatnosci" className="text-primary underline underline-offset-2">
                    Polityce Prywatności
                  </a>
                  .
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
