import { TrialCtaButton } from "@/components/trial-cta-button"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function GroupsHeroSection() {
  return (
    <section className="relative min-h-screen bg-background grid-pattern overflow-hidden flex items-center">
      <div className="dynamic-shape dynamic-shape-1"></div>
      <div className="dynamic-shape dynamic-shape-2"></div>

      <div className="container mx-auto px-4 py-8 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0 space-y-6">
            <div className="lg:hidden relative w-full max-w-[240px] mx-auto">
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary rounded-full transform rotate-12 opacity-30"></div>
              <div className="relative z-10 bg-card rounded-2xl p-2.5 shadow-xl border border-border/50">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero-aga.jpg"
                    alt="Aga - lektorka języka angielskiego"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 240px, 0px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base font-medium text-primary tracking-wide text-pretty">
              Zajęcia grupowe na Twoich zasadach (tylko 2-3 osoby w grupie!)
            </p>

            <div className="relative min-w-0">
              <div className="absolute -top-4 -left-6 w-32 h-16 border-3 border-primary rounded-full transform -rotate-6 opacity-40"></div>
              <h1 className="relative font-serif font-bold leading-snug text-foreground break-words text-[clamp(1.25rem,0.95rem+1.5vw,2.125rem)]">
                Odblokuj swój angielski i zacznij mówić bez stresu. Zapomnij o „szkolnym" wkuwaniu i strachu
                przed błędem.
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              Dołącz do ultra-kameralnej grupy językowej i potraktuj angielski jak codzienne narzędzie –
              dokładnie tak samo jak język polski. Od zera do swobodnej konwersacji na poziomie B1.
            </p>

            <div className="flex w-full min-w-0 items-center gap-3 sm:gap-4">
              <TrialCtaButton className="min-w-0 flex-1 basis-0 !shrink whitespace-normal h-auto min-h-12 text-sm leading-snug text-center px-4 py-4 sm:text-base sm:px-8 sm:py-6 lg:flex-none lg:basis-auto lg:whitespace-nowrap">
                Zapisz się na bezpłatną lekcję próbną
              </TrialCtaButton>
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

          <div className="hidden lg:block relative max-w-[220px] sm:max-w-[260px] lg:max-w-[300px] mx-auto lg:mx-0">
            <div className="absolute -top-6 -right-6 w-40 h-20 border-4 border-primary rounded-full transform rotate-12 opacity-30 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-3 border-secondary rounded-full transform -rotate-45 opacity-40 bg-gradient-to-tl from-secondary/10 to-primary/10"></div>
            <div className="relative z-10 bg-card rounded-2xl p-3 lg:p-4 shadow-2xl border border-border/50">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/hero-aga.jpg"
                  alt="Aga - lektorka języka angielskiego"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 220px, 300px"
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
