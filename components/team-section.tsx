import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const tutors = [
  {
    name: "Lidia",
    photo: "/images/tutors/lidia.jpg",
    description:
      "Specjalistka od „rozgadywania\". Potrafi przełamać lody w kilka minut. Ma ogromne pokłady cierpliwości i potrafi dostosować tempo do każdego, nawet najbardziej zestresowanego ucznia. Z nią zapomnisz, czym jest paraliż przed mówieniem.",
  },
  {
    name: "Kasia",
    photo: "/images/tutors/kasia.jpg",
    description:
      "Mistrzyni praktycznego angielskiego. Skupia się na żywym języku, którego naprawdę potrzebujesz w pracy i w podróży. Pokazuje, że błędy są naturalną częścią nauki, a nie powodem do wstydu. Na jej lekcjach po prostu dobrze się rozmawia.",
  },
  {
    name: "Julia",
    photo: "/images/tutors/julia.jpg",
    description:
      "Wulkan kreatywności i ciepła. Wyróżnia ją ogromna empatia – doskonale rozumie Twoje obawy i dba o to, abyś na lekcji czuła się w 100% bezpiecznie. Dobiera tematy tak, że rozmawiacie o tym, co naprawdę Cię interesuje, a bariera językowa znika sama.",
  },
]

export function TeamSection() {
  return (
    <section id="zespol" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-secondary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">
              Poznaj mój zespół – dzięki niemu polubisz angielski
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mt-4">
            Nie działam sama! Stworzyłam zespół wyjątkowych lektorów, którzy dzielą moją filozofię pracy. To nie są
            surowi nauczyciele z czerwonym długopisem. To empatyczni partnerzy w rozmowie, którzy wiedzą, jak stworzyć
            bezstresową atmosferę i pomóc Ci otworzyć się na język.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tutors.map((tutor, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg h-full overflow-hidden py-0">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-xl">
                <Image
                  src={tutor.photo}
                  alt={tutor.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="font-serif text-xl font-bold text-foreground">{tutor.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{tutor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
