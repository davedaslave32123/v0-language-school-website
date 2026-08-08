import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, NotebookPen, Clock } from "lucide-react"

const methods = [
  {
    title: "Ultra-małe grupy (2-3 osoby)",
    icon: Users,
    description: "Gwarancja, że będziesz mówić, a nie tylko słuchać.",
    color: "primary" as const,
  },
  {
    title: "Materiały przed zajęciami",
    icon: BookOpen,
    description: "Zawsze wiesz, o czym będziemy rozmawiać.",
    color: "secondary" as const,
  },
  {
    title: "Notatki i feedback po lekcji",
    icon: NotebookPen,
    description: "Nie musisz notować na zajęciach – my robimy to za Ciebie.",
    color: "primary" as const,
  },
  {
    title: "Elastyczność",
    icon: Clock,
    description: "Wybierasz spotkania 1x w tygodniu lub 2x w tygodniu (po 60 minut).",
    color: "secondary" as const,
  },
]

export function GroupsMethodSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Dlaczego nasze zajęcia dają efekty?
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {methods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card key={index} className="bg-card border-0 shadow-lg h-full">
                <CardContent className="p-8 flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                      method.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${method.color === "primary" ? "text-primary" : "text-secondary"}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-foreground">{method.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{method.description}</p>
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
