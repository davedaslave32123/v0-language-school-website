import { Card } from "@/components/ui/card"
import Image from "next/image"

const reasons = [
  {
    title: "Wiesz, co chcesz powiedzieć, ale milczysz?",
    description:
      "Znasz słowa, układasz zdanie w głowie, ale w ostatniej chwili się wycofujesz, bo paraliżuje Cię stres.",
    color: "primary",
  },
  {
    title: "Boisz się, że się zbłaźnisz?",
    description:
      "Strach przed tym, że ktoś wytknie Ci błąd, nie zrozumie Twojej wymowy albo Ty nie zrozumiesz jego, potrafi całkowicie odebrać pewność siebie.",
    color: "secondary",
  },
  {
    title: "Masz dość oceniania?",
    description: "Masz poczucie, że w szkołach zawsze ktoś tylko czyhał na Twoje potknięcie.",
    color: "primary",
  },
]

export function AboutSection() {
  return (
    <section id="o-mnie" className="py-16 lg:py-24 bg-background grid-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative lg:sticky lg:top-12">
            <div className="absolute -top-6 -left-6 w-48 h-24 border-4 border-primary rounded-full transform rotate-6 opacity-40"></div>
            <Card className="relative z-10 bg-card border-0 shadow-lg overflow-hidden">
              <Image
                src="/images/aga-portrait.jpg"
                alt="Aga - lektorka języka angielskiego"
                width={500}
                height={500}
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 45vw"
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-3 -right-8 w-20 h-10 border-3 border-secondary rounded-full transform rotate-12 opacity-60"></div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">Cześć, jestem Aga! 👋</h2>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Od 10 lat pomagam ludziom ruszyć z miejsca i zacząć swobodnie mówić po angielsku. Przez ten czas
              pracowałam w różnych środowiskach i widziałam już chyba każdy rodzaj językowej blokady.
            </p>

            <p className="text-lg font-bold text-foreground">
              Dlaczego robię to inaczej niż tradycyjne szkoły? Bo doskonale wiem, co czujesz:
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                      reason.color === "primary" ? "bg-primary" : "bg-secondary"
                    }`}
                  ></div>
                  <p className="text-lg text-foreground">
                    <strong>{reason.title}</strong> {reason.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-xl p-6">
              <p className="text-lg text-foreground italic leading-relaxed">
                Udowodnię Ci, że na to wszystko jest rada. Moje lekcje próbne są po to, żebyś w 100% bezpiecznej,
                luźnej atmosferze zobaczyła, że mówienie po angielsku może być przyjemnością, a nie egzaminem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
