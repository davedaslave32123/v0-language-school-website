import { Card, CardContent } from "@/components/ui/card"

const profiles = [
  {
    number: "1",
    title: "Chcę zacząć od zera (ale bez nudnych podręczników!)",
    description:
      "Od pierwszej lekcji stawiamy na konwersację. Zapomnij o schematach – u nas od razu oswajasz się z żywym językiem i poprawną wymową. Dzięki temu, gdy wyjedziesz do Hiszpanii czy Ameryki Łacińskiej, mówienie nie będzie dla Ciebie szokiem, ale naturalną rzeczą. Od początku chłoniesz kulturę, łapiesz hiszpański vibe i uczysz się tego, co naprawdę usłyszysz na ulicach Madrytu czy w piosenkach Bad Bunny'ego.",
    color: "primary",
  },
  {
    number: "2",
    title: "Mam już za sobą pierwsze kroki (i chcę w końcu zacząć mówić)",
    description:
      "Znasz już podstawy, ale wciąż brakuje Ci płynności? Przełamujemy barierę i wchodzimy na wyższy poziom. Przekładamy Twoją wiedzę na czystą praktykę w mowie, korzystając z autentycznych materiałów. Rozmawiamy na interesujące Cię tematy, rozgryzamy teksty latynoskich hitów, hiszpańskojęzyczne seriale i plotki z Półwyspu Iberyjskiego. Zyskasz pewność siebie, która pozwoli Ci swobodnie dogadać się w każdej sytuacji.",
    color: "secondary",
  },
]

export function SpanishStartSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-brand-terracotta rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Na jakim etapie jest Twoja hiszpańska przygoda?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg h-full">
              <CardContent className="p-8 space-y-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    profile.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                  }`}
                >
                  <span
                    className={`text-2xl font-bold ${
                      profile.color === "primary" ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {profile.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{profile.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{profile.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
