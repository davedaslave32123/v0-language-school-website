"use client"

import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CONSENT_EVENT, getConsent, setConsent, type ConsentValue } from "@/lib/consent"

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setVisible(getConsent() === null)

    const handleConsentChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentValue | null>).detail
      setVisible(detail === null)
    }

    window.addEventListener(CONSENT_EVENT, handleConsentChange)
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange)
  }, [])

  useEffect(() => {
    if (!visible) return

    const previousOverflow = document.body.style.overflow
    const previouslyFocusedElement = document.activeElement as HTMLElement | null
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      previouslyFocusedElement?.focus()
    }
  }, [visible])

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )

    if (!focusableElements?.length) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (
      event.shiftKey &&
      (document.activeElement === firstElement || document.activeElement === dialogRef.current)
    ) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  if (!visible) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Zgoda na pliki cookie"
          tabIndex={-1}
          onKeyDown={handleDialogKeyDown}
          className="w-full max-w-2xl rounded-xl border border-border bg-card p-5 shadow-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-6"
        >
          <div className="flex flex-col gap-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ta strona używa plików cookies w celach analitycznych i marketingowych (m.in. Meta
              Pixel, Google Tag Manager, Microsoft Clarity). Możesz je zaakceptować lub odrzucić.
              Więcej w{" "}
              <Link href="/polityka-prywatnosci" className="text-primary underline underline-offset-2">
                Polityce Prywatności
              </Link>
              .
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                className="w-full bg-slate-700 text-white hover:bg-slate-700/90 sm:min-w-36 sm:w-auto"
                onClick={() => setConsent("denied")}
              >
                Odrzucam
              </Button>
              <Button
                type="button"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:min-w-36 sm:w-auto"
                onClick={() => setConsent("granted")}
              >
                Akceptuję
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
