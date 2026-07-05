# Instagram Buttons + GDPR (RODO) Consent Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Instagram links, a consent-gated cookie banner (blocking GTM/Meta Pixel/Microsoft Clarity until opt-in), a required consent checkbox + info clause on the contact form, a Privacy Policy page, and a new site footer.

**Architecture:** A small `lib/consent.ts` module owns `localStorage`-backed consent state and fires a `window` `CustomEvent` on change. A client component `AnalyticsScripts` renders GTM/Clarity/Meta-Pixel `<Script>` tags only when consent is `"granted"`, replacing the scripts currently inlined in `app/layout.tsx`. A `CookieConsentBanner` client component shows/hides based on the same consent state. A new `Footer` (mostly server-rendered, with one small client sub-component for the reset link) is mounted once in the root layout so it appears on every route. The contact form and hero get small additive changes; a new static route holds the privacy policy.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4 (CSS-variable theme tokens `--primary`/`--secondary`/etc.), `lucide-react` icons, `next/script`.

## Global Constraints

- Meta Pixel ID: `5590292397743929` (exact value, hardcode as a constant).
- Instagram URL: `https://instagram.com/aga_od_jezykow`, always `target="_blank" rel="noopener noreferrer"`.
- Consent storage key: `"cookie-consent"`; values: `"granted" | "denied"`; event name: `"cookie-consent-changed"`.
- GTM/Clarity/Meta Pixel must render nothing at all (no `<Script>` mounted) unless consent === `"granted"`. This is a hard requirement — verify via DOM/network inspection, not just "the banner looks right".
- No automated test framework exists in this repo (no jest/vitest in `package.json`). Verification per task uses `npx tsc --noEmit`, `npm run build`, and explicit manual browser steps in place of automated tests — do not add a test framework as part of this work.
- Business info for the privacy policy page: "Szkoła Muzyczno-Lingwistyczna Akademia Kreatywności Agnieszka Stokłosa, ul. Miedziana 12/28, 53-441 Wrocław, NIP 7521430296"; contact email `kontakt@agaodjezykow.com`.
- Match existing site conventions: Tailwind utility classes only (no new CSS files), `@/` import alias, PL copy exactly as specified in the spec (`docs/superpowers/specs/2026-07-05-instagram-gdpr-design.md`) — do not paraphrase the required Polish text.
- Commit after each task.

---

### Task 1: Consent storage module

**Files:**
- Create: `lib/consent.ts`

**Interfaces:**
- Produces: `type ConsentValue = "granted" | "denied"`; `CONSENT_EVENT: string`; `getConsent(): ConsentValue | null`; `setConsent(value: ConsentValue): void`; `clearConsent(): void`. All later tasks (`AnalyticsScripts`, `CookieConsentBanner`, `CookieSettingsLink`) import from this exact module.

- [ ] **Step 1: Write `lib/consent.ts`**

```ts
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
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors mentioning `lib/consent.ts`.

- [ ] **Step 3: Commit**

```bash
git add lib/consent.ts
git commit -m "Add consent storage module for cookie/analytics gating"
```

---

### Task 2: Analytics scripts gated behind consent

**Files:**
- Create: `components/analytics-scripts.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `CONSENT_EVENT`, `getConsent`, `ConsentValue` from `lib/consent.ts` (Task 1).
- Produces: `AnalyticsScripts` component (default export style: named export `AnalyticsScripts`), used by `app/layout.tsx` and no other task.

- [ ] **Step 1: Write `components/analytics-scripts.tsx`**

```tsx
"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { CONSENT_EVENT, getConsent, type ConsentValue } from "@/lib/consent"

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const META_PIXEL_ID = "5590292397743929"

export function AnalyticsScripts() {
  const [consent, setConsentState] = useState<ConsentValue | null>(null)

  useEffect(() => {
    setConsentState(getConsent())

    const handleConsentChange = (event: Event) => {
      setConsentState((event as CustomEvent<ConsentValue | null>).detail)
    }

    window.addEventListener(CONSENT_EVENT, handleConsentChange)
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange)
  }, [])

  if (consent !== "granted") return null

  return (
    <>
      {GTM_ID && (
        <>
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}

      <Script id="ms-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "xfat4c5w68");`}
      </Script>

      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
```

- [ ] **Step 2: Replace inline scripts in `app/layout.tsx` with `AnalyticsScripts`**

Current `app/layout.tsx` (for reference, lines 1-68) inlines the GTM script/noscript in `<head>`/`<body>` and the Clarity script at the end of `<body>`. Replace the whole file with:

```tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { AnalyticsScripts } from "@/components/analytics-scripts"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Aga od języków - AKademia Kreatywności",
  description: "Butikowa szkoła językowa oferująca kreatywne podejście do nauki języków obcych",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  )
}
```

(Footer and the consent banner are added to this same file in Tasks 3 and 4 — don't worry about them yet.)

- [ ] **Step 3: Type-check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: build completes with no errors.

- [ ] **Step 4: Manual verification — scripts don't load without consent**

Run `npm run dev`, open the site in a browser with dev tools Network tab open and `localStorage` cleared (Application tab → Local Storage → delete `cookie-consent` if present, or use a private window). Reload the page.
Expected: no requests to `googletagmanager.com`, `clarity.ms`, or `facebook.net`/`facebook.com/tr` appear in the Network tab, and `window.dataLayer`, `window.clarity`, `window.fbq` are all `undefined` in the console.

- [ ] **Step 5: Commit**

```bash
git add components/analytics-scripts.tsx app/layout.tsx
git commit -m "Gate GTM, Clarity, and Meta Pixel behind consent"
```

---

### Task 3: Cookie consent banner

**Files:**
- Create: `components/cookie-consent-banner.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `CONSENT_EVENT`, `getConsent`, `setConsent`, `ConsentValue` from `lib/consent.ts` (Task 1); `Button` from `components/ui/button.tsx`.
- Produces: `CookieConsentBanner` component, used by `app/layout.tsx` only.

- [ ] **Step 1: Write `components/cookie-consent-banner.tsx`**

```tsx
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
```

- [ ] **Step 2: Mount it in `app/layout.tsx`**

Modify the `body` in `app/layout.tsx` (from Task 2) to:

```tsx
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
```

Add that import alongside the `AnalyticsScripts` import, and update the returned JSX to:

```tsx
      <body className="font-sans">
        <AnalyticsScripts />
        {children}
        <CookieConsentBanner />
      </body>
```

- [ ] **Step 3: Type-check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: no errors.

- [ ] **Step 4: Manual verification — banner shows, choices persist**

`npm run dev`, open in a private window (clean localStorage). Confirm:
- Banner appears at the bottom on first load with both buttons and the privacy-policy link.
- Clicking "Odrzucam" hides the banner; reload the page — banner stays hidden, and (per Task 2's check) no tracking requests fire.
- Clear `localStorage` (`cookie-consent` key) and reload — banner reappears.
- Click "Akceptuję" — banner hides; reload — banner stays hidden, and GTM/Clarity/Pixel requests now appear in the Network tab.

- [ ] **Step 5: Commit**

```bash
git add components/cookie-consent-banner.tsx app/layout.tsx
git commit -m "Add cookie consent banner"
```

---

### Task 4: Footer with Instagram, privacy link, and cookie settings reset

**Files:**
- Create: `components/cookie-settings-link.tsx`
- Create: `components/footer.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `clearConsent` from `lib/consent.ts` (Task 1).
- Produces: `CookieSettingsLink` component (used only by `Footer`); `Footer` component (used only by `app/layout.tsx`).

- [ ] **Step 1: Write `components/cookie-settings-link.tsx`**

```tsx
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
```

- [ ] **Step 2: Write `components/footer.tsx`**

```tsx
import Link from "next/link"
import { Instagram } from "lucide-react"
import { CookieSettingsLink } from "@/components/cookie-settings-link"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-serif font-bold text-foreground">Aga od Języków — Akademia Kreatywności</p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href="https://instagram.com/aga_od_jezykow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <Link href="/polityka-prywatnosci" className="hover:text-primary transition-colors">
            Polityka Prywatności
          </Link>
          <CookieSettingsLink />
        </div>
      </div>
      <div className="border-t border-border/50 py-4 text-center text-xs text-muted-foreground">
        © {year} Aga od Języków — Akademia Kreatywności. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Mount `Footer` in `app/layout.tsx`**

Add `import { Footer } from "@/components/footer"` and update the body JSX to:

```tsx
      <body className="font-sans">
        <AnalyticsScripts />
        {children}
        <Footer />
        <CookieConsentBanner />
      </body>
```

- [ ] **Step 4: Type-check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: no errors.

- [ ] **Step 5: Manual verification**

`npm run dev`. Confirm the footer renders at the bottom of the home page (below the contact form, above the fixed cookie banner when visible) with correct Instagram link (opens `instagram.com/aga_od_jezykow` in a new tab), a working "Polityka Prywatności" link (will 404 until Task 6 — that's expected for now), and clicking "Ustawienia plików cookie" after having accepted/rejected re-shows the cookie banner.

- [ ] **Step 6: Commit**

```bash
git add components/cookie-settings-link.tsx components/footer.tsx app/layout.tsx
git commit -m "Add site footer with Instagram, privacy link, and cookie settings reset"
```

---

### Task 5: Instagram button in hero

**Files:**
- Modify: `components/hero-section.tsx:1-46` (imports and the CTA row)

**Interfaces:**
- Consumes: `Instagram` icon from `lucide-react`.

- [ ] **Step 1: Add the `Instagram` import**

In `components/hero-section.tsx`, change:

```tsx
import { TrialCtaButton } from "@/components/trial-cta-button"
import Image from "next/image"
```

to:

```tsx
import { TrialCtaButton } from "@/components/trial-cta-button"
import Image from "next/image"
import { Instagram } from "lucide-react"
```

- [ ] **Step 2: Add the Instagram icon-button next to the CTA**

Change:

```tsx
            <div className="flex flex-col sm:flex-row gap-4">
              <TrialCtaButton />
            </div>
```

to:

```tsx
            <div className="flex flex-row items-center gap-4">
              <TrialCtaButton />
              <a
                href="https://instagram.com/aga_od_jezykow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
```

- [ ] **Step 3: Type-check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: no errors.

- [ ] **Step 4: Manual verification**

`npm run dev`, view the hero on desktop and a mobile viewport (browser dev tools device toolbar). Confirm the Instagram icon button sits next to the CTA button, doesn't overflow or wrap awkwardly on narrow screens, and clicking it opens `instagram.com/aga_od_jezykow` in a new tab.

- [ ] **Step 5: Commit**

```bash
git add components/hero-section.tsx
git commit -m "Add Instagram button to hero"
```

---

### Task 6: Privacy Policy page

**Files:**
- Create: `app/polityka-prywatnosci/page.tsx`

- [ ] **Step 1: Write `app/polityka-prywatnosci/page.tsx`**

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Prywatności — Aga od Języków",
  description: "Polityka prywatności Szkoły Muzyczno-Lingwistycznej Akademia Kreatywności.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <h1 className="mb-10 font-serif text-3xl font-bold text-foreground lg:text-4xl">
          Polityka Prywatności
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              1. Administrator danych
            </h2>
            <p>
              Administratorem danych osobowych jest Szkoła Muzyczno-Lingwistyczna Akademia
              Kreatywności Agnieszka Stokłosa, ul. Miedziana 12/28, 53-441 Wrocław, NIP
              7521430296, e-mail: kontakt@agaodjezykow.com.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              2. Jakie dane zbieramy
            </h2>
            <p>
              Poprzez formularz zbieramy: imię, adres e-mail i numer telefonu. Dodatkowo, za
              Twoją zgodą, zbieramy dane analityczne przez pliki cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              3. Cel i podstawa prawna
            </h2>
            <p>
              Dane z formularza przetwarzamy w celu kontaktu i umówienia lekcji próbnej (art. 6
              ust. 1 lit. a RODO — zgoda). Dane analityczne przetwarzamy na podstawie Twojej
              zgody (cookies).
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              4. Pliki cookies i narzędzia
            </h2>
            <p>
              Za Twoją zgodą używamy: Meta Pixel (Meta Platforms), Google Tag Manager (Google),
              Microsoft Clarity (Microsoft) — w celach analitycznych i marketingowych. Możesz w
              każdej chwili wycofać zgodę.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              5. Czas przechowywania
            </h2>
            <p>
              Dane z formularza przechowujemy do czasu zakończenia kontaktu lub wycofania zgody.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              6. Twoje prawa
            </h2>
            <p>
              Masz prawo do: dostępu do danych, ich poprawiania, usunięcia, ograniczenia
              przetwarzania, wycofania zgody oraz wniesienia skargi do Prezesa UODO.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl font-bold text-foreground">
              7. Kontakt
            </h2>
            <p>
              W sprawach dotyczących danych osobowych napisz na adres e-mail:
              kontakt@agaodjezykow.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Type-check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: no errors; build output lists `/polityka-prywatnosci` as a generated route.

- [ ] **Step 3: Manual verification**

`npm run dev`, visit `http://localhost:3000/polityka-prywatnosci` directly. Confirm it renders all 7 sections with correct data, styled consistently with the rest of the site (serif headings, muted body text), and that the footer (Task 4) also appears on this page.

- [ ] **Step 4: Commit**

```bash
git add app/polityka-prywatnosci/page.tsx
git commit -m "Add privacy policy page"
```

---

### Task 7: Contact form consent checkbox + info clause

**Files:**
- Modify: `components/contact-section.tsx`

**Interfaces:**
- No new exports; internal state addition (`consentChecked`) and submit-guard only.

- [ ] **Step 1: Add `consentChecked` state**

In `components/contact-section.tsx`, change:

```tsx
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorText, setErrorText] = useState<string | null>(null)
```

to:

```tsx
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorText, setErrorText] = useState<string | null>(null)
  const [consentChecked, setConsentChecked] = useState(false)
```

- [ ] **Step 2: Guard `handleSubmit` on consent**

Change the top of `handleSubmit`:

```tsx
    try {
      if (!formData.firstName || !formData.email || !formData.phone) {
        setSubmitStatus("error")
        setErrorText("Uzupełnij wszystkie pola.")
        setIsSubmitting(false)
        return
      }
```

to:

```tsx
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
```

- [ ] **Step 3: Add the checkbox and info clause to the JSX**

Change:

```tsx
                {submitStatus === "success" && (
```

to (adding the checkbox immediately before the existing status messages):

```tsx
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

                {submitStatus === "success" && (
```

Then change the submit button:

```tsx
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wysyłanie..." : "Zapisuję się na darmową lekcję"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Wysyłając zgłoszenie, do niczego się nie zobowiązujesz. Skontaktuję się z Tobą, aby ustalić dogodny
                  termin.
                </p>
```

to:

```tsx
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
```

- [ ] **Step 4: Reset consent state on successful submit**

Change:

```tsx
      setSubmitStatus("success")
      setFormData({ firstName: "", email: "", phone: "", company: "" })
```

to:

```tsx
      setSubmitStatus("success")
      setFormData({ firstName: "", email: "", phone: "", company: "" })
      setConsentChecked(false)
```

- [ ] **Step 5: Type-check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: no errors.

- [ ] **Step 6: Manual verification**

`npm run dev`, scroll to the contact form. Confirm: submit button is disabled/greyed out until the checkbox is checked; filling all fields but leaving the checkbox unchecked keeps the button disabled; checking it enables the button; the info-clause paragraph renders below the form with a working link to `/polityka-prywatnosci`; a full successful submission still reaches `/api/send-email` as before (existing behavior, unchanged).

- [ ] **Step 7: Commit**

```bash
git add components/contact-section.tsx
git commit -m "Require consent checkbox on contact form and add info clause"
```

---

### Task 8: Final full-site verification

**Files:** none (verification only)

- [ ] **Step 1: Full build**

Run: `npx tsc --noEmit && npm run build`
Expected: clean build, no type errors, no warnings about the new files.

- [ ] **Step 2: Full manual walkthrough**

`npm run dev`, in a private/incognito window (clean `localStorage`):
1. Load `/` — cookie banner appears; no GTM/Clarity/Pixel network requests fire; `window.dataLayer`/`window.clarity`/`window.fbq` are `undefined`.
2. Click "Odrzucam" — banner hides, no tracking requests on reload.
3. Footer → "Ustawienia plików cookie" — banner reappears.
4. Click "Akceptuję" — banner hides; GTM/Clarity/Pixel requests now appear; reload confirms it stays accepted.
5. Hero Instagram icon and footer Instagram link both open `https://instagram.com/aga_od_jezykow` in a new tab.
6. Footer "Polityka Prywatności" link and the contact-form info-clause link both navigate to `/polityka-prywatnosci`, which renders correctly and still shows the footer.
7. Contact form: submit button stays disabled until the consent checkbox is checked; a full submission (with checkbox checked) still succeeds against `/api/send-email`.
8. Resize to a mobile viewport (e.g. 375px wide) and re-check the banner, footer, hero Instagram button, and form — no overflow or broken layout.

- [ ] **Step 3: Report status**

If all checks in Step 2 pass, the feature is complete — no commit needed for this task (verification only).
