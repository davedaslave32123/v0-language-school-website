"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram } from "lucide-react"

// Prosty wybór adresu API:
// - lokalnie (localhost) używa względnego /api/send-email
// - na produkcji używa pełnego adresu https://www.agaodjezykow.com/api/send-email
function getApiUrl() {
  if (typeof window !== "undefined" && window.location.hostname.includes("localhost")) {
    return "/api/send-email"
  }
  return "https://www.agaodjezykow.com/api/send-email"
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorText, setErrorText] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorText(null)

    try {
      // krótka walidacja po stronie przeglądarki
      if (!formData.email || !formData.message) {
        setSubmitStatus("error")
        setErrorText("Podaj email i wiadomość.")
        return
      }

      const res = await fetch(getApiUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        cache: "no-store",
      })

      const maybeJson = await res.json().catch(() => null)

      if (!res.ok) {
        setSubmitStatus("error")
        setErrorText(
          (maybeJson && (maybeJson.error || maybeJson.message)) || `Błąd ${res.status}`
        )
        return
      }

      setSubmitStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
    } catch (err: any) {
      setSubmitStatus("error")
      setErrorText(err?.message || "Wystąpił nieoczekiwany błąd.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">
              Skontaktuj się z nami
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Masz pytania? Chcesz zapisać się na kurs? Napisz do nas!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formularz */}
          <Card className="bg-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-foreground">Napisz do nas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="Imię"
                      className="bg-background"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="lastName"
                      placeholder="Nazwisko"
                      className="bg-background"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="bg-background"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="phone"
                    placeholder="Telefon"
                    type="tel"
                    className="bg-background"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <Textarea
                    name="message"
                    placeholder="Twoja wiadomość..."
                    rows={5}
                    className="bg-background resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  {submitStatus === "success" && (
                    <div
                      className="p-4 bg-green-100 text-green-800 rounded-md"
                      role="status"
                      aria-live="polite"
                    >
                      Wiadomość wysłana pomyślnie! Odezwiemy się wkrótce.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div
                      className="p-4 bg-red-100 text-red-800 rounded-md"
                      role="status"
                      aria-live="assertive"
                    >
                      {errorText ?? "Wystąpił błąd. Spróbuj ponownie później."}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Druga kolumna (informacje) */}
          <div className="space-y-8">
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Instagram</h3>
                    <p className="text-muted-foreground">@aga_od_jezykow</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Śledź nas na Instagramie, aby być na bieżąco z naszymi kursami i metodami nauczania!
                </p>
              </CardContent>
            </Card>

            {/* Tu możesz dodać kolejne karty z danymi kontaktowymi, mapą itd. */}
          </div>
        </div>
      </div>
    </section>
  )
}
