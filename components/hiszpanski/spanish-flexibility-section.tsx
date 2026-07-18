import { Card, CardContent } from "@/components/ui/card"
import { Clock, CalendarClock, Smartphone, Users } from "lucide-react"

const items = [
  {
    title: "Długość lekcji pod Twoje tempo",
    icon: Clock,
    description:
      "Nie musisz rezerwować pełnej godziny. U nas to Ty decydujesz! Oferujemy lekcje 30, 45 oraz 60-minutowe. Krótsze spotkania (np. 2 razy w tygodniu po 30 minut) pomagają utrzymać świetną systematyczność bez poczucia zmęczenia i idealnie mieszczą się w napiętym grafiku.",
    color: "primary",
  },
  {
    title: "Pełna swoboda grafiku",
    icon: CalendarClock,
    description:
      "Masz luźniejszy tydzień i chcesz mocniej zanurzyć się w hiszpańskim? Umawiasz dwa spotkania. W kolejnym tygodniu gonią Cię terminy? Zostajesz przy jednej lekcji lub zmieniasz czas jej trwania. W trakcie współpracy możesz dowolnie żonglować częstotliwością i długością zajęć.",
    color: "secondary",
  },
  {
    title: "Płatność BLIK-iem i brak długich umów",
    icon: Smartphone,
    description:
      "Nie wiążesz się żadnymi kontraktami na rok czy semestr. Płacisz wygodnie za pojedyncze lekcje na 24 godziny przed ich terminem. O wszelkich zmianach również wystarczy, że dasz nam znać z 24-godzinnym wyprzedzeniem.",
    color: "terracotta",
  },
  {
    title: "Indywidualnie lub w grupie",
    icon: Users,
    description:
      "Zaczynasz od lekcji 1 na 1, ale z biegiem czasu chcesz sprawdzić się w grupie? W każdej chwili możesz dołączyć do naszych kameralnych grup konwersacyjnych, żeby pogadać z innymi pasjonatami.",
    color: "primary",
  },
]

const iconStyles: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  terracotta: { bg: "bg-brand-terracotta/10", text: "text-brand-terracotta" },
}

export function SpanishFlexibilitySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Zero sztywnych ram. 100% elastyczności.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon
            const styles = iconStyles[item.color]
            return (
              <Card key={index} className="bg-card border-0 shadow-lg h-full">
                <CardContent className="p-8 flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${styles.bg}`}
                  >
                    <Icon className={`w-7 h-7 ${styles.text}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
