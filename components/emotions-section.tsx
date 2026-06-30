import { Card, CardContent } from "@/components/ui/card"

const points = [
  {
    title: "Jesteś zblokowana/y?",
    description:
      "Rozumiesz, co ktoś mówi, w głowie znasz słówka, ale gdy masz się odezwać – pojawia się paraliż?",
    color: "primary",
  },
  {
    title: "Chcesz ruszyć z miejsca?",
    description:
      "Uczysz się od lat, znasz gramatykę, ale wciąż brakuje Ci płynności i swobody w rozmowie?",
    color: "secondary",
  },
  {
    title: "Chcesz zacząć od zera?",
    description:
      "Nigdy nie było Ci po drodze z angielskim i potrzebujesz bezpiecznego startu bez oceniania?",
    color: "primary",
  },
]

export function EmotionsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">
              Masz wrażenie, że Twój angielski „utknął"?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg h-full">
              <CardContent className="p-8 space-y-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    point.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                  }`}
                >
                  <span
                    className={`text-2xl font-bold ${
                      point.color === "primary" ? "text-primary" : "text-secondary"
                    }`}
                  >
                    ?
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
