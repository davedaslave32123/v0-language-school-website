export type ConsentValue = "granted" | "denied"

const STORAGE_KEY = "cookie-consent"
export const CONSENT_EVENT = "cookie-consent-changed"

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return value === "granted" || value === "denied" ? value : null
}

export function setConsent(value: ConsentValue): void {
  window.localStorage.setItem(STORAGE_KEY, value)
  window.dispatchEvent(new CustomEvent<ConsentValue | null>(CONSENT_EVENT, { detail: value }))
}

export function clearConsent(): void {
  window.localStorage.removeItem(STORAGE_KEY)
  window.dispatchEvent(new CustomEvent<ConsentValue | null>(CONSENT_EVENT, { detail: null }))
}
