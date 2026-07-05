"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CONSENT_EVENT, getConsent, setConsent, type ConsentValue } from "@/lib/consent"

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getConsent() === null)

    const handleConsentChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentValue | null>).detail
      setVisible(detail === null)
    }

    window.addEventListener(CONSENT_EVENT, handleConsentChange)
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-2xl">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Ta strona używa plików cookies w celach analitycznych i marketingowych (m.in. Meta
          Pixel, Google Tag Manager, Microsoft Clarity). Możesz je zaakceptować lub odrzucić.
          Więcej w{" "}
          <Link href="/polityka-prywatnosci" className="text-primary underline underline-offset-2">
            Polityce Prywatności
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <Button type="button" variant="outline" onClick={() => setConsent("denied")}>
            Odrzucam
          </Button>
          <Button
            type="button"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => setConsent("granted")}
          >
            Akceptuję
          </Button>
        </div>
      </div>
    </div>
  )
}
