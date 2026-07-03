import { TrialCtaButton } from "@/components/trial-cta-button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background grid-pattern overflow-hidden flex items-center">
      <div className="dynamic-shape dynamic-shape-1"></div>
      <div className="dynamic-shape dynamic-shape-2"></div>

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="relative shrink-0">
                <div className="absolute -top-1.5 -right-1.5 w-7 h-7 border-2 border-primary rounded-full opacity-40"></div>
                <div className="relative z-10 w-16 h-20 bg-card rounded-xl p-1 shadow-lg border border-border/50 overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src="/images/hero-aga.jpg"
                      alt="Aga - lektorka języka angielskiego"
                      fill
                      priority
                      fetchPriority="high"
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Aga, lektorka angielskiego</p>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-6 w-32 h-16 border-3 border-primary rounded-full transform -rotate-6 opacity-40"></div>
              <h1 className="font-serif font-bold leading-snug text-foreground text-[clamp(1.375rem,1.05rem+1.9vw,2.125rem)]">
                Znasz angielski, ale nadal{" "}
                <span className="text-primary">trudno Ci mówić swobodnie?</span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Przełam barierę językową na własnych warunkach. Bez stresu, bez podpisywania długich umów i bez ryzyka.
              Zacznij od bezpłatnej, luźnej lekcji próbnej.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <TrialCtaButton />
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
