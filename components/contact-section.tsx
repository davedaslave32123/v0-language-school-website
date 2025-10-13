import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">Skontaktuj się z nami</h2>
          </div>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Masz pytania? Chcesz zapisać się na kurs? Napisz do nas!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-foreground">Napisz do nas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Imię" className="bg-background" />
                <Input placeholder="Nazwisko" className="bg-background" />
              </div>
              <Input placeholder="Email" type="email" className="bg-background" />
              <Input placeholder="Telefon" type="tel" className="bg-background" />
              <Textarea placeholder="Twoja wiadomość..." rows={5} className="bg-background resize-none" />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Wyślij wiadomość
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Instagram</h3>
                    <p className="text-muted-foreground">@aga_od_jezykow</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Śledź nas na Instagramie, aby być na bieżąco z naszymi kursami i metodami nauczania!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">kontakt@agaodjezykow.pl</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Napisz do nas email z pytaniami o kursy lub zapisz się na konsultację.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefon</h3>
                    <p className="text-muted-foreground">+48 723 009 938  </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Zadzwoń do nas w godzinach 9:00-18:00, od poniedziałku do piątku.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
