import { Card, CardContent } from "@/components/ui/card"
import { FileX, Smartphone, Gift, ShieldCheck } from "lucide-react"

const principles = [
  {
    title: "Umowa? Brak!",
    icon: FileX,
    description:
      "Nie wiążesz się żadnymi długoterminowymi kontraktami na semestr czy rok. Obowiązuje prosty regulamin, a współpracę możesz zakończyć w każdym momencie.",
    color: "primary",
  },
  {
    title: "Płatność BLIK-iem",
    icon: Smartphone,
    description:
      "Płacisz wygodnie za pojedyncze zajęcia na 24 godziny przed ich planowanym terminem. Żadnych opłat z góry za cały miesiąc.",
    color: "secondary",
  },
  {
    title: "Lekcja próbna 0 zł",
    icon: Gift,
    description:
      "Pierwsze spotkanie jest w 100% bezpłatne i niezobowiązujące. Służy do tego, żeby się poznać, dobrać idealnego lektora i stworzyć plan działania.",
    color: "primary",
  },
  {
    title: "Brak ukrytych kosztów",
    icon: ShieldCheck,
    description:
      "Wszystko jest jasne od początku. Nie ma opłat wpisowych, opłat za materiały czy kar za rezygnację.",
    color: "secondary",
  },
]

export function PrinciplesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Zero haczyków. 100% transparentności.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <Card key={index} className="bg-card border-0 shadow-lg h-full">
                <CardContent className="p-8 flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                      principle.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${principle.color === "primary" ? "text-primary" : "text-secondary"}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-foreground">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
