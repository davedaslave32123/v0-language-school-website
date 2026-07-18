import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SpanishLeadEvents } from "./spanish-lead-events"

export const metadata: Metadata = {
  title: "Dziękujemy — Aga od Języków",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SpanishThankYouPage() {
  return (
    <main className="min-h-screen spanish-theme">
      <SpanishLeadEvents />
      <section className="relative min-h-screen bg-background grid-pattern overflow-hidden flex items-center">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24 relative z-10">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-8">
            <div className="relative w-full max-w-[220px]">
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-brand-terracotta rounded-full transform rotate-12 opacity-30"></div>
              <div className="relative z-10 bg-card rounded-2xl p-2.5 shadow-xl border border-border/50">
                <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl">
                  <Image
                    src="/images/hiszpanski/hero-aga-espanol.jpg"
                    alt="Aga - lektorka języka hiszpańskiego"
                    fill
                    priority
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="relative inline-block">
              <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
              <div className="absolute -bottom-3 -left-6 w-20 h-10 border-3 border-secondary rounded-full transform -rotate-6 opacity-40"></div>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance">
                ¡Gracias! Dziękujemy za zgłoszenie 🎉
              </h1>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Skontaktujemy się z Tobą wkrótce, aby ustalić dogodny termin Twojej bezpłatnej
              lekcji próbnej hiszpańskiego. ¡Hasta pronto!
            </p>

            <div className="flex flex-row items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6"
              >
                <Link href="/hiszpanski">Wróć na stronę główną</Link>
              </Button>
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
          </div>
        </div>
      </section>
    </main>
  )
}
