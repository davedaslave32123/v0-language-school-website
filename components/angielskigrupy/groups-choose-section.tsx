import { Card, CardContent } from "@/components/ui/card"

const groups = [
  {
    title: '„Ruszam (prawie) od zera"',
    description:
      "dla osób po długiej przerwie, które chcą spokojnie wejść w świat angielskiego od nowa.",
    color: "primary" as const,
  },
  {
    title: '„Coś wiem, ale boję się mówić"',
    description: "dla tych, którzy rozumieją, ale czują blokadę. Przełamujemy lody i budujemy pewność siebie.",
    color: "secondary" as const,
  },
  {
    title: '„Konwersacje B1"',
    description: "spotkania, by rozmawiać o życiu, pracy i świecie w 100% po angielsku.",
    color: "primary" as const,
  },
]

export function GroupsChooseSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-secondary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              W jakiej grupie poczujesz się najlepiej?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {groups.map((group, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg h-full">
              <CardContent className="p-8 space-y-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    group.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      group.color === "primary" ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{group.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{group.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
