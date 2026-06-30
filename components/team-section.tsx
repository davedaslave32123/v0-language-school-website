import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const tutors = [
  {
    name: "Imię Nazwisko",
    photo: "/placeholder-user.jpg",
    description: "[Krótki opis lektora]",
  },
  {
    name: "Imię Nazwisko",
    photo: "/placeholder-user.jpg",
    description: "[Krótki opis lektora]",
  },
  {
    name: "Imię Nazwisko",
    photo: "/placeholder-user.jpg",
    description: "[Krótki opis lektora]",
  },
]

export function TeamSection() {
  return (
    <section id="zespol" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-secondary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">Poznaj nasz zespół</h2>
          </div>
          <p className="text-xl text-muted-foreground mt-4">
            Poznaj lektorów, którzy pomogą Ci przełamać barierę i swobodnie mówić po angielsku.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tutors.map((tutor, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg h-full">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="relative w-32 h-32 overflow-hidden rounded-full shadow-md ring-4 ring-secondary/15">
                  <Image
                    src={tutor.photo}
                    alt={tutor.name}
                    fill
                    loading="lazy"
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
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
