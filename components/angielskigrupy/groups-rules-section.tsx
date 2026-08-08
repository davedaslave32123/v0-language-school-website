import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, CreditCard, Handshake } from "lucide-react"

const rules = [
  {
    title: "Czas trwania",
    icon: CalendarDays,
    description:
      "Uczymy się semestralnie (start w połowie września, koniec z ostatnim dniem lutego).",
    color: "primary" as const,
  },
  {
    title: "Miesięczne płatności, nie z góry",
    icon: CreditCard,
    description:
      "Płacisz co miesiąc, do 12-go dnia każdego miesiąca (możesz spokojnie poczekać na wypłatę!).",
    color: "secondary" as const,
  },
  {
    title: 'Brak „lojalki"',
    icon: Handshake,
    description:
      "Możesz zrezygnować w dowolnym momencie, obowiązuje Cię tylko miesięczny okres wypowiedzenia.",
    color: "primary" as const,
  },
]

export function GroupsRulesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-secondary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Jasne zasady bez kruczków.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {rules.map((rule, index) => {
            const Icon = rule.icon
            return (
              <Card key={index} className="bg-card border-0 shadow-lg h-full">
                <CardContent className="p-8 flex flex-col items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                      rule.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${rule.color === "primary" ? "text-primary" : "text-secondary"}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-foreground">{rule.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
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
