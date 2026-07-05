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
