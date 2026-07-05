# Instagram Buttons + GDPR (RODO) Compliance — Design

Date: 2026-07-05

## Goal

Add Instagram links (hero + footer), a consent-gated cookie banner that blocks GTM/Meta
Pixel/Microsoft Clarity until the user opts in, a required consent checkbox + info clause on
the contact form, and a Privacy Policy page — matching the site's existing visual style.

## Context

- No footer component exists today; `app/page.tsx` renders sections ending at `ContactSection`.
- No Meta Pixel code exists in the repo. GTM is gated only by presence of
  `NEXT_PUBLIC_GTM_ID`; Microsoft Clarity is hardcoded (`xfat4c5w68`) and loads unconditionally.
  Both live as inline `<Script>` tags in `app/layout.tsx`.
- Meta Pixel ID to use: `5590292397743929`.
- Site uses Tailwind CSS variables (`--primary` = brand red, `--secondary` = brand blue),
  shadcn/ui-style components (`Button`, `Card`, `Input`), `lucide-react` already a dependency.
- Contact form (`components/contact-section.tsx`) is a client component with local state,
  a honeypot field, and posts to `/api/send-email`.

## 1. Consent storage + script gating

- `lib/consent.ts`: `type ConsentValue = "granted" | "denied"`; `getConsent()` reads
  `localStorage["cookie-consent"]`; `setConsent(value)` writes it and dispatches a
  `window` CustomEvent (`"cookie-consent-changed"`) so other mounted components react
  without a reload.
- `components/analytics-scripts.tsx` (client component): subscribes to consent state
  (read on mount + event listener). Renders, only when consent === `"granted"`:
  - existing GTM script + noscript iframe (moved here from `app/layout.tsx`, still gated
    on `NEXT_PUBLIC_GTM_ID` being set)
  - existing Microsoft Clarity script (moved here from `app/layout.tsx`)
  - new Meta Pixel script + noscript `<img>` pixel, ID `5590292397743929`
- `app/layout.tsx` no longer contains any inline tracking scripts directly; it renders
  `<AnalyticsScripts />`, `{children}`, and `<Footer />`.

## 2. Cookie consent banner

- `components/cookie-consent-banner.tsx` (client component): on mount, checks
  `getConsent()`. If `undefined` (no prior choice), renders a fixed bottom bar.
- Bar content: the exact Polish copy provided, including a link to
  `/polityka-prywatnosci`, plus two buttons:
  - "Akceptuję" (primary/red, filled) → `setConsent("granted")`, hide banner.
  - "Odrzucam" (outline) → `setConsent("denied")`, hide banner.
- Styled consistent with existing `Card`/`Button` treatments (rounded corners, shadow,
  site fonts), fixed to the bottom of the viewport, above other content, responsive on
  mobile (stacks buttons under text on narrow screens).

## 3. Footer

- `components/footer.tsx`, new file, mounted in `app/layout.tsx` after `{children}` so
  it appears on every route (home page + privacy policy page).
- Minimal content: school name/short line, Instagram icon link
  (`https://instagram.com/aga_od_jezykow`, new tab), "Polityka Prywatności" link,
  "Ustawienia plików cookie" link/button (clears stored consent via `setConsent`
  removal + re-triggers the banner — honors the "withdraw consent anytime" language in
  the privacy policy), and a copyright line with the current year.
- Visual style: muted background, border-top, small/muted text, hover accents in
  primary/secondary brand colors — consistent with rest of site, not a heavy new block.

## 4. Instagram button in hero

- In `components/hero-section.tsx`, add a small circular icon-button next to
  `TrialCtaButton`: outline style with `border-primary`/`text-primary`, filling to
  `bg-primary`/`text-primary-foreground` on hover, `lucide-react` `Instagram` icon,
  `target="_blank" rel="noopener noreferrer"`, `aria-label="Instagram"`.

## 5. Contact form consent

- `components/contact-section.tsx`: add `consentChecked` boolean state and a checkbox
  (native `<input type="checkbox" required>` styled to match `Input`) with the exact
  required-consent wording provided. Submit `Button` is `disabled` when
  `!consentChecked` (in addition to existing `isSubmitting` check); `handleSubmit` also
  short-circuits with an error if unchecked, as defense in depth.
- Below the form (inside the existing `Card`), add the small info-clause paragraph
  (muted, small text) with an inline link to `/polityka-prywatnosci`.

## 6. Privacy Policy page

- New route `app/polityka-prywatnosci/page.tsx`, static server component.
- Renders the provided sections 1–7, styled with the site's existing typography
  (`font-serif` headings, `container mx-auto px-4 py-*`, `text-muted-foreground` body
  copy) so it reads as part of the same site.
- Fills in the two truncated details from the prompt using data given elsewhere in the
  same prompt:
  - Address: "ul. Miedziana 12/28, 53-441 Wrocław, NIP 7521430296"
  - Email: "kontakt@agaodjezykow.com"
- Mentions Meta Pixel, GTM, and Microsoft Clarity by name in section 4, consistent with
  what's actually gated behind consent.

## Data flow summary

1. First visit → no `localStorage["cookie-consent"]` → banner shows, no tracking
   scripts render.
2. "Akceptuję" → consent stored as `"granted"` → `AnalyticsScripts` re-renders and
   injects GTM/Clarity/Pixel → banner hides.
3. "Odrzucam" → consent stored as `"denied"` → no scripts ever render → banner hides.
4. Footer "Ustawienia plików cookie" → clears stored consent → banner reappears on next
   render (no forced reload needed, driven by the same event/listener).
5. Contact form → submit blocked client-side until consent checkbox is checked →
   existing `/api/send-email` flow unchanged otherwise.

## Testing / verification

- Manual: fresh browser profile (or cleared localStorage) → confirm no GTM/Clarity/Pixel
  network requests fire until "Akceptuję" is clicked (check Network tab / no
  `dataLayer`/`clarity`/`fbq` calls before consent).
- Manual: "Odrzucam" → confirm scripts never load, banner doesn't reappear on reload.
- Manual: form submit button stays disabled until checkbox checked; submitting without
  it (if somehow bypassed) still shows a validation error.
- Manual: `/polityka-prywatnosci` loads, and is linked from footer, form, and banner.
- Manual: Instagram links open `instagram.com/aga_od_jezykow` in a new tab from both hero
  and footer.
- `npm run build` passes with no type errors.
- Desktop + mobile viewport check on hero, banner, footer, and form.

## Out of scope

- No consent-management UI beyond binary accept/reject + a footer reset link (no granular
  per-vendor toggles — not requested).
- No server-side/cookie-based consent (client-only `localStorage`, matches the fact that
  gating only affects client-loaded analytics scripts).
- No changes to `/api/send-email` server logic beyond what's already there.
