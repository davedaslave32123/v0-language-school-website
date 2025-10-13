"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    console.log("[v0] Hero button clicked, scrolling to contact section")
    setTimeout(() => {
      const contactSection = document.getElementById("kontakt")
      if (contactSection) {
        console.log("[v0] Contact section found, scrolling...")
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        console.log("[v0] Contact section not found!")
      }
    }, 100)
  }

  const scrollToAbout = () => {
    console.log("[v0] Learn more button clicked, scrolling to about section")
    setTimeout(() => {
      const aboutSection = document.getElementById("kim-jestesmy")
      if (aboutSection) {
        console.log("[v0] About section found, scrolling...")
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        console.log("[v0] About section not found!")
      }
    }, 100)
  }

  return (
    <section className="relative min-h-screen bg-background grid-pattern overflow-hidden">
      <div className="dynamic-shape dynamic-shape-1"></div>
      <div className="dynamic-shape dynamic-shape-2"></div>

      <div className="container mx-auto px-4 py-2 lg:py-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 -mt-8 lg:-mt-12">
            <div className="relative">
              <h1 className="font-sans text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-red-600 text-3d">Aga od języków</span>
                <br />
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Odkryj świat języków w kreatywny sposób! Nasza butikowa szkoła językowa oferuje spersonalizowane podejście
              do nauki, które sprawia, że każda lekcja to przygoda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToContact}
              >
                Zapisz się na kurs
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                onClick={scrollToAbout}
              >
                Dowiedz się więcej
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="flag-heart flag-usa"></div>
                <span className="text-sm text-muted-foreground font-medium">Język angielski</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flag-heart flag-france"></div>
                <span className="text-sm text-muted-foreground font-medium">Język francuski</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flag-heart flag-germany"></div>
                <span className="text-sm text-muted-foreground font-medium">Język niemiecki</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flag-heart flag-spain"></div>
                <span className="text-sm text-muted-foreground font-medium">Język hiszpański</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">B</span>
                </div>
                <span className="text-sm text-muted-foreground font-medium">Kursy biznesowe</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-32 border-4 border-primary rounded-full transform rotate-12 opacity-30 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-3 border-secondary rounded-full transform -rotate-45 opacity-40 bg-gradient-to-tl from-secondary/10 to-primary/10"></div>
            <div className="relative z-10 bg-card rounded-2xl p-8 shadow-2xl border border-border/50">
              <Image
                src="/images/aga-portrait.jpg"
                alt="Aga - założycielka AKademii Kreatywności"
                width={400}
                height={500}
                className="rounded-xl object-cover w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
