"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    __thankYouPageViewSent?: boolean
  }
}

export function ThankYouPageViewEvent() {
  useEffect(() => {
    if (window.__thankYouPageViewSent) {
      return
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "thank_you_page_view",
    })
    window.__thankYouPageViewSent = true
  }, [])

  return null
}
