"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToForm = () => {
    setTimeout(() => {
      const formSection = document.getElementById("formularz")
      if (formSection) {
        formSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }

  return (
    <section className="relative min-h-screen bg-background grid-pattern overflow-hidden flex items-center">
      <div className="dynamic-shape dynamic-shape-1"></div>
      <div className="dynamic-shape dynamic-shape-2"></div>

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-4 -left-6 w-32 h-16 border-3 border-primary rounded-full transform -rotate-6 opacity-40"></div>
              <h1 className="font-serif font-bold leading-snug text-foreground text-[clamp(1.375rem,1.05rem+1.9vw,2.125rem)]">
                Chcesz w końcu zacząć mówić po angielsku, ale czujesz, że{" "}
                <span className="text-primary">stoisz w miejscu?</span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Przełam barierę językową na własnych warunkach. Bez stresu, bez podpisywania długich umów i bez ryzyka.
              Zacznij od bezpłatnej, luźnej lekcji próbnej.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6"
                onClick={scrollToForm}
              >
                Chcę darmową lekcję próbną
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-32 border-4 border-primary rounded-full transform rotate-12 opacity-30 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-3 border-secondary rounded-full transform -rotate-45 opacity-40 bg-gradient-to-tl from-secondary/10 to-primary/10"></div>
            <div className="relative z-10 bg-card rounded-2xl p-6 lg:p-8 shadow-2xl border border-border/50">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/hero-aga.jpg"
                  alt="Aga - lektorka języka angielskiego"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 92vw, 40vw"
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
