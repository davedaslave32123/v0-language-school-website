import { Card, CardContent } from "@/components/ui/card"
import { TrialCtaButton } from "@/components/trial-cta-button"
import Image from "next/image"

export function SpanishTutorSection() {
  return (
    <section id="zespol" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-secondary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Poznaj Gabi – lektorkę, z którą natychmiast złapiesz hiszpański luz! 💃
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mt-4">
            Bardzo dbam o to, z kim uczysz się hiszpańskiego. Chcę, żeby każda lekcja była dla Ciebie bezpieczną
            przestrzenią, resetem po pracy i czystą frajdą. Dlatego współpracuję wyłącznie z osobami, które dzielą moją
            pasję i energię.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-5 -left-5 w-36 h-18 border-4 border-brand-terracotta rounded-full transform -rotate-6 opacity-40"></div>
          <Card className="relative z-10 bg-card border-0 shadow-lg overflow-hidden py-0">
            <div className="grid md:grid-cols-2 items-center">
              {/* The photo is exactly 3:4, so a matching aspect box shows it whole. */}
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/images/hiszpanski/tutor-gabi.jpg"
                  alt="Gabi - lektorka języka hiszpańskiego"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 92vw, 50vw"
                  className="object-contain"
                />
              </div>
              <CardContent className="p-8 lg:p-10 flex flex-col justify-center space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Gabrysia – Filolożka i pasjonatka Hiszpanii.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mieszkała w Madrycie i Sewilli, a na Półwysep Iberyjski wraca za każdym razem, gdy tylko może – bo
                  Hiszpania to jej absolutne miejsce na ziemi.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Gabi wprowadzi Cię w autentyczny, żywy język, którym lokalsi rozmawiają w kawiarniach i na ulicach.
                  Zapomnij o sztywnych dialogach z podręcznika. Z nią nie tylko zaczniesz mówić naturalnie, ale też od
                  pierwszych minut poczujesz ten unikalny, słoneczny vibe!
                </p>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <TrialCtaButton className="bg-brand-spanish-yellow text-foreground hover:bg-brand-spanish-yellow/90" />
        </div>
      </div>
    </section>
  )
}
