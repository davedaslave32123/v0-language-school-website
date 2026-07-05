export type ConsentValue = "granted" | "denied"

const STORAGE_KEY = "cookie-consent"
export const CONSENT_EVENT = "cookie-consent-changed"

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === "granted" || value === "denied" ? value : null
  } catch {
    return null
  }
}

export function setConsent(value: ConsentValue): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Storage unavailable (e.g. blocked/private browsing) — still honor the
    // choice for this session via the event below, just don't persist it.
  }
  window.dispatchEvent(new CustomEvent<ConsentValue | null>(CONSENT_EVENT, { detail: value }))
}

export function clearConsent(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Storage unavailable — still notify listeners so in-memory state clears.
  }
  window.dispatchEvent(new CustomEvent<ConsentValue | null>(CONSENT_EVENT, { detail: null }))
}
