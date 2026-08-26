"use client"

import { useEffect } from "react"
import { CONSENT_EVENT, getConsent, type ConsentValue } from "@/lib/consent"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    __osmoklasistaLeadEventsSent?: boolean
    dataLayer?: Record<string, unknown>[]
  }
}

export function OsmoklasistaLeadEvents() {
  useEffect(() => {
    let cancelled = false
    let pollTimer: ReturnType<typeof setInterval> | null = null

    const fireEvents = () => {
      if (cancelled || window.__osmoklasistaLeadEventsSent) return

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "leadFormSubmit",
        formSource: "osmoklasista",
      })

      let attempts = 0
      pollTimer = setInterval(() => {
        attempts += 1
        if (window.fbq) {
          window.fbq("track", "Lead", { content_name: "Osmoklasista" })
          if (pollTimer) clearInterval(pollTimer)
        } else if (attempts >= 50) {
          if (pollTimer) clearInterval(pollTimer)
        }
      }, 200)

      window.__osmoklasistaLeadEventsSent = true
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
