"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const courses = [
  {
    title: "Język angielski",
    subtitle: "English Boost: kariera startuje TERAZ",
    description: "Angielski w biznesie - praktyczne umiejętności dla profesjonalistów",
    image: "/images/english-boost.jpg",
    features: [
      "Small talk, e-mail i pierwsze wrażenie",
      "CV po angielsku i przygotowanie do rozmowy o pracę",
      "Angielski w zespole i na spotkaniu",
      "Klient, prezentacja i 'tough questions'",
    ],
    color: "primary",
  },
  {
    title: "Język francuski",
    subtitle: "matura • studia • rynek pracy • warsztaty",
    description: "Francuski na maturze - jak zdać i zyskać przewagę",
    image: "/images/french-lessons.jpg",
    features: [
      "Francuski na maturze - jak zdać i zyskać przewagę",
      "Studia po francusku - w Polsce i za granicą",
      "Francuski w CV - rynek pracy i realne możliwości",
      "Francuski w praktyce - symulacje, rozmowy, case studies",
    ],
    color: "secondary",
  },
]

export function CoursesSection() {
  const scrollToContact = () => {
    console.log("[v0] Scroll button clicked")

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const contactSection = document.getElementById("kontakt")
      console.log("[v0] Contact section found:", contactSection)

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        console.log("[v0] Scrolling to contact section")
      } else {
        console.error("[v0] Contact section not found")
      }
    }, 100)
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-2 -left-6 w-24 h-12 border-3 border-secondary rounded-full transform -rotate-12 opacity-50"></div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">Nasze kursy</h2>
          </div>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Wybierz kurs dopasowany do Twoich potrzeb i celów
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden bg-card border-0 shadow-lg">
              <div className="relative h-64">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                      course.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {course.title}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{course.subtitle}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">{course.description}</p>

                <div className="space-y-3 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          course.color === "primary" ? "bg-primary" : "bg-secondary"
                        }`}
                      ></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    course.color === "primary"
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  Zapisz się na kurs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
