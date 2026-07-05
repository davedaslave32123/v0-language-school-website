"use client"

import { clearConsent } from "@/lib/consent"

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => clearConsent()}
      className="hover:text-primary transition-colors"
    >
      Ustawienia plików cookie
    </button>
  )
}
