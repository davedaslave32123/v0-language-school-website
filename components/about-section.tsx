import { Card } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="kim-jestesmy" className="py-16 lg:py-24 bg-background grid-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-48 h-24 border-4 border-primary rounded-full transform rotate-6 opacity-40"></div>
            <Card className="relative z-10 bg-card border-0 shadow-lg overflow-hidden">
              <Image
                src="/images/about-us.jpg"
                alt="Agnieszka i David Stoklosa - założyciele AKademii Kreatywności"
                width={500}
                height={400}
                className="w-full h-80 object-cover"
              />
            </Card>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-3 -right-8 w-20 h-10 border-3 border-secondary rounded-full transform rotate-12 opacity-60"></div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">Kim jesteśmy?</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-foreground">
                  <strong>Polsko-amerykańskie małżeństwo</strong> z pasją do języków i kultury
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-foreground">
                  <strong>Rodzice</strong> wychowujący dzieci w środowisku wielojęzycznym
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-foreground">
                  <strong>Korepetytorzy z doświadczeniem</strong> w nauczaniu języków obcych
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-secondary rounded-full"></div>
                <p className="text-foreground">
                  <span className="font-bold text-secondary">Ona</span> - filolożka, 4 języki
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <p className="text-foreground">
                  <span className="font-bold text-primary">On</span> - praktyk biznesu
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground italic">
              Oboje - śpiewacy operowi, miłośnicy Dolnego Śląska i zwierząt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
