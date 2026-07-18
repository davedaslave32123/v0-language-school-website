import { TrialCtaButton } from "@/components/trial-cta-button"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function SpanishHeroSection() {
  return (
    <section className="relative min-h-screen bg-background grid-pattern overflow-hidden flex items-center">
      <div className="dynamic-shape dynamic-shape-1"></div>
      <div className="dynamic-shape dynamic-shape-2"></div>

      <div className="container mx-auto px-4 py-8 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="lg:hidden relative w-full max-w-[220px] mx-auto">
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary rounded-full transform rotate-12 opacity-30"></div>
              <div className="relative z-10 bg-card rounded-2xl p-2.5 shadow-xl border border-border/50">
                <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl">
                  <Image
                    src="/images/hiszpanski/hero-aga-espanol.jpg"
                    alt="Aga - lektorka języka hiszpańskiego"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 220px, 0px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-6 w-32 h-16 border-3 border-primary rounded-full transform -rotate-6 opacity-40"></div>
              <h1 className="font-serif font-bold leading-snug text-foreground text-[clamp(1.375rem,1.05rem+1.9vw,2.125rem)]">
                Marzy Ci się swobodny hiszpański, luźne rozmowy z native&apos;ami i{" "}
                <span className="text-brand-spanish-yellow">całkowita niezależność w podróży?</span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Odkryj język, który daje czystą radość. Ucz się autentycznego, żywego hiszpańskiego na własnych warunkach
              – dla siebie, bez stresu i bez podpisywania długich umów. Zacznij od bezpłatnej lekcji próbnej!
            </p>

            <div className="flex flex-row items-center gap-4">
              <TrialCtaButton className="bg-brand-spanish-yellow text-foreground hover:bg-brand-spanish-yellow/90" />
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

          <div className="hidden lg:block relative max-w-[220px] sm:max-w-[240px] lg:max-w-[280px] mx-auto lg:mx-0">
            <div className="absolute -top-6 -right-6 w-40 h-20 border-4 border-primary rounded-full transform rotate-12 opacity-30 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-3 border-brand-terracotta rounded-full transform -rotate-45 opacity-40 bg-gradient-to-tl from-brand-terracotta/10 to-primary/10"></div>
            <div className="relative z-10 bg-card rounded-2xl p-3 lg:p-4 shadow-2xl border border-border/50">
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/hiszpanski/hero-aga-espanol.jpg"
                  alt="Aga - lektorka języka hiszpańskiego"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 220px, 280px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
