import { Card } from "@/components/ui/card"
import { TrialCtaButton } from "@/components/trial-cta-button"
import Image from "next/image"

const reasons = [
  {
    text: "Język to dla nas styl życia, nie kolejny obowiązek. Dbamy o to, aby każda lekcja była dla Ciebie przyjemnością i resetem po ciężkim dniu.",
    color: "primary",
  },
  {
    text: "Otwieramy drzwi do zupełnie innego doświadczania świata. Kiedy w podróży zamiast angielskiego używasz hiszpańskiego, lokalsi natychmiast otwierają przed Tobą serce. Przestajesz być tylko turystą – stajesz się częścią ich świata.",
    color: "terracotta",
  },
  {
    text: "Stawiamy na 100% autentyczności. Uczymy Cię języka z hiszpańskich ulic, knajpek i popkultury. Bez nadęcia, za to z ogromną dawką energii.",
    color: "secondary",
  },
]

const dotColor: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  terracotta: "bg-brand-terracotta",
}

export function SpanishAboutSection() {
  return (
    <section id="o-mnie" className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative lg:sticky lg:top-12 max-w-md mx-auto lg:mx-0 w-full">
            <div className="absolute -top-6 -left-6 w-48 h-24 border-4 border-primary rounded-full transform rotate-6 opacity-40"></div>
            <Card className="relative z-10 bg-card border-0 shadow-lg overflow-hidden py-0">
              <div className="relative w-full aspect-[2/3]">
                <Image
                  src="/images/hiszpanski/about-aga-poznajmy.jpg"
                  alt="Aga - lektorka języka hiszpańskiego"
                  fill
                  sizes="(max-width: 1024px) 92vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-3 -right-8 w-20 h-10 border-3 border-secondary rounded-full transform rotate-12 opacity-60"></div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
                ¡Hola! Jestem Aga 👋
              </h2>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Od 10 lat pomagam ludziom otwierać się na języki obce i czerpać z tego prawdziwą satysfakcję. Sama uczę
              hiszpańskiego i doskonale wiem, jak to jest zakochać się w tym języku – ale przede wszystkim wiem, jak
              przekazać go dalej, by efekty przyszły naturalnie i bez niepotrzebnego stresu.
            </p>

            <p className="text-lg font-bold text-foreground">Dlaczego robimy to inaczej?</p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${dotColor[reason.color]}`}></div>
                  <p className="text-lg text-foreground">{reason.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-xl p-6">
              <p className="text-lg text-foreground italic leading-relaxed">
                Moje lekcje próbne są po to, abyś w całkowicie bezpiecznej, luźnej i przyjacielskiej atmosferze
                zobaczyła, że mówienie po hiszpańsku to czysta frajda.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <TrialCtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
