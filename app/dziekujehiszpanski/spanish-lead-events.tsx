"use client"

import { useEffect } from "react"
import { CONSENT_EVENT, getConsent, type ConsentValue } from "@/lib/consent"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    __spanishLeadEventsSent?: boolean
  }
}

/**
 * Fires the Meta Pixel standard `Lead` event and a matching GTM dataLayer
 * event once per page view, only after cookie consent has been granted.
 */
export function SpanishLeadEvents() {
  useEffect(() => {
    let cancelled = false
    let pollTimer: ReturnType<typeof setInterval> | null = null

    const fireEvents = () => {
      if (cancelled || window.__spanishLeadEventsSent) return

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "leadFormSubmit",
        formSource: "hiszpanski",
      })

      // The Pixel snippet loads after hydration, so `fbq` may not exist yet;
      // poll briefly until its queue stub is available.
      let attempts = 0
      pollTimer = setInterval(() => {
        attempts += 1
        if (window.fbq) {
          window.fbq("track", "Lead", { content_name: "Hiszpanski" })
          if (pollTimer) clearInterval(pollTimer)
        } else if (attempts >= 50) {
          if (pollTimer) clearInterval(pollTimer)
        }
      }, 200)

      window.__spanishLeadEventsSent = true
    }

    if (getConsent() === "granted") {
      fireEvents()
    }

    const handleConsentChange = (event: Event) => {
      const consent = (event as CustomEvent<ConsentValue | null>).detail
      if (consent === "granted") {
        fireEvents()
      }
    }

    window.addEventListener(CONSENT_EVENT, handleConsentChange)
    return () => {
      cancelled = true
      if (pollTimer) clearInterval(pollTimer)
      window.removeEventListener(CONSENT_EVENT, handleConsentChange)
    }
  }, [])

  return null
}
