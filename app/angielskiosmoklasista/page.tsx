import type { Metadata } from "next"
import Image from "next/image"
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  Clock,
  CreditCard,
  Handshake,
  Monitor,
  Target,
  Users,
} from "lucide-react"
import { OsmoklasistaLeadForm } from "@/components/osmoklasista/osmoklasista-lead-form"
import { TeamSection } from "@/components/team-section"
import { TrialCtaButton } from "@/components/trial-cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Egzamin Ósmoklasisty z Angielskiego — Aga od Języków",
  description:
    "Kameralne grupy online (2-3 osoby), które przygotowują dziecko do egzaminu ósmoklasisty bez stresu i bez dojazdów. Zacznijcie od darmowej lekcji próbnej.",
}

const RESULTS_MEDIA = [
  {
    image: "/images/osmoklasista/wynik-100.jpg",
    alt: "Wynik 100% z angielskiego",
    width: 817,
    height: 1024,
    previewHeightClass: "h-44 sm:h-52",
  },
  {
    image: "/images/osmoklasista/wynik-93.jpg",
    alt: "Wynik 93% z angielskiego",
    width: 968,
    height: 179,
    previewHeightClass: "h-24 sm:h-28",
  },
  {
    image: "/images/osmoklasista/wynik-91.jpg",
    alt: "Wynik 91% z angielskiego",
    width: 1024,
    height: 314,
    previewHeightClass: "h-28 sm:h-32",
  },
  {
    image: "/images/osmoklasista/wynik-84.jpg",
    alt: "Wynik 84% z angielskiego",
    width: 966,
    height: 180,
    previewHeightClass: "h-24 sm:h-28",
  },
] as const

const BENEFITS = [
  {
    title: "Ultra-kameralne grupy (2-3 osoby)",
    description:
      "Gwarancja, że dziecko będzie aktywnie mówić, a nie tylko słuchać. Lektor ma czas dla każdego ucznia.",
    icon: Users,
    color: "primary" as const,
  },
  {
    title: "Grupy idealnie dobrane poziomem",
    description:
      "Uczniowie są dobierani na podstawie bezpłatnych zajęć próbnych, dzięki czemu pracują w komfortowym dla siebie tempie.",
    icon: Target,
    color: "secondary" as const,
  },
  {
    title: "Stały i wygodny grafik (90 minut)",
    description: "Spotykamy się raz w tygodniu na 90 minut - zawsze w ten sam dzień i o tej samej porze.",
    icon: Clock,
    color: "primary" as const,
  },
  {
    title: "100% Online - zero dojazdów",
    description: "Dziecko uczy się ze swojego pokoju, a Ty oszczędzasz czas i paliwo.",
    icon: Monitor,
    color: "secondary" as const,
  },
  {
    title: "Materiały i notatki w cenie",
    description:
      "Nie musisz kupować dodatkowych książek. Notatki po zajęciach wysyłamy na skrzynkę - uczeń skupia się na rozmowie, a nie na przepisywaniu.",
    icon: BookOpen,
    color: "primary" as const,
  },
  {
    title: "Stały wgląd w postępy",
    description:
      "Po każdym spotkaniu lektor przesyła krótkie podsumowanie i uwagi, więc zawsze wiesz, nad czym pracujemy.",
    icon: BarChart3,
    color: "secondary" as const,
  },
]

const RULES = [
  {
    title: "Wsparcie do samego końca",
    description:
      "Uczymy się regularnie od połowy września i kończymy zajęcia dokładnie na tydzień przed egzaminem majowym, aby uczeń wszedł na salę bez luk w wiedzy i bez stresu.",
    icon: CalendarDays,
    color: "primary" as const,
  },
  {
    title: "Miesięczne płatności, nie z góry",
    description:
      "Płacisz co miesiąc na podstawie wystawionej faktury z terminem do 12. dnia każdego miesiąca (możesz spokojnie poczekać na wypłatę!).",
    icon: CreditCard,
    color: "secondary" as const,
  },
  {
    title: "Brak długich lojalek",
    description: "Możesz zrezygnować w dowolnym momencie - obowiązuje Cię tylko miesięczny okres wypowiedzenia.",
    icon: Handshake,
    color: "primary" as const,
  },
]

const OSMOKLASISTA_ABOUT_POINTS = [
  "z osobami wyjątkowo zdolnymi, które potrzebowały skrzydeł,",
  "z dziećmi z wyzwaniami w przyswajaniu wiedzy,",
  "oraz z uczniami bardzo nieśmiałymi, dla których przełamanie bariery językowej było największym wyzwaniem.",
]

export default function OsmoklasistaLandingPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <section className="relative min-h-screen bg-background grid-pattern overflow-hidden flex items-center">
        <div className="dynamic-shape dynamic-shape-1" />
        <div className="dynamic-shape dynamic-shape-2" />

        <div className="container mx-auto px-4 py-10 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="min-w-0 space-y-6">
              <p className="text-sm sm:text-base font-medium text-primary tracking-wide text-pretty">
                Zajęcia grupowe na zasadach Twojego dziecka (tylko 2-3 osoby w grupie!)
              </p>

              <div className="relative min-w-0">
                <div className="absolute -top-4 -left-6 w-32 h-16 border-3 border-primary rounded-full transform -rotate-6 opacity-40" />
                <h1 className="relative font-serif font-bold leading-tight text-foreground break-words text-[clamp(1.35rem,1.05rem+2.2vw,3rem)]">
                  Spokój Twojego dziecka i pewność wysokiego wyniku z angielskiego na Egzaminie Ósmoklasisty.
                  <span className="block mt-[1lh]">Zapomnij o dojazdach i stresie.</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                Dołącz do ultra-kameralnej grupy online i przygotuj dziecko do egzaminu bez cotygodniowej gorączki w
                korkach. Uczymy swobody w mówieniu i pewności w rozwiązywaniu arkuszy - krok po kroku, aż do samego
                maja.
              </p>

              <div className="flex justify-start">
                <TrialCtaButton className="w-full sm:w-auto whitespace-normal h-auto min-h-12 text-center px-4 py-4 sm:px-8 sm:py-6">
                  Umów darmową lekcję próbną
                </TrialCtaButton>
              </div>
            </div>

            <div className="relative w-full min-w-0 max-w-[240px] sm:max-w-[260px] lg:max-w-[300px] mx-auto lg:mx-0">
              <div className="absolute -top-6 -right-6 w-40 h-20 border-4 border-primary rounded-full transform rotate-12 opacity-30 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-3 border-secondary rounded-full transform -rotate-45 opacity-40 bg-gradient-to-tl from-secondary/10 to-primary/10" />
              <div className="relative z-10 bg-card rounded-2xl p-3 lg:p-4 shadow-2xl border border-border/50">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/images/hero-aga.jpg"
                    alt="Aga - lektorka języka angielskiego"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 240px, 300px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <div className="relative inline-block max-w-full">
                <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                  Czy wizja nadchodzącego egzaminu ósmoklasisty zaczyna spędzać Wam sen z powiek?
                </h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Ostatnia klasa szkoły podstawowej to ogromne obciążenie - zarówno dla ucznia, jak i dla rodziców.
                Bieganie z korepetycji na korepetycje, strach przed nieznaną formą arkusza i presja czasu potrafią
                wywołać niepotrzebną panikę.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Nie musisz spędzać popołudni w samochodzie, dowożąc dziecko na drugi koniec miasta. Mamy rozwiązanie,
                które godzi najwyższą skuteczność z wygodą całej rodziny. Dajemy Twojemu dziecku kameralne środowisko
                do nauki online, w którym opanuje strukturę egzaminu, przełamie barierę językową i wejdzie na salę
                egzaminacyjną z pełnym spokojem.
              </p>
            </div>

            <div className="relative w-full max-w-3xl mx-auto">
              <Card className="bg-card border-0 shadow-lg overflow-hidden">
                <CardContent className="p-3 sm:p-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted/40">
                    <Image
                      src="/images/osmoklasista/sekcja-2-bol-i-rozwiazanie.jpg"
                      alt="Dziecko przygotowujące się do egzaminu ósmoklasisty online"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="relative inline-block max-w-full">
              <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-secondary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                Przemyślany system, który oszczędza Twój czas i daje wyniki
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="bg-card border-0 shadow-lg h-full min-w-0">
                  <CardContent className="p-6 sm:p-8 flex items-start gap-4 sm:gap-5">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
                        benefit.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                      )}
                    >
                      <Icon className={cn("w-7 h-7", benefit.color === "primary" ? "text-primary" : "text-secondary")} />
                    </div>
                    <div className="space-y-2 min-w-0">
                      <h3 className="font-serif text-xl font-bold text-foreground break-words">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <div className="relative inline-block max-w-full">
                <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                  Wyniki naszych kursantów mówią same za siebie
                </h2>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mt-4">
                Zobacz, jak z naszą pomocą uczniowie radzili sobie na egzaminach w poprzednich latach i co o naszych
                zajęciach mówią ich rodzice.
              </p>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.12),transparent_60%)]" />
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {RESULTS_MEDIA.map((item, index) => (
                  <figure key={item.image} className={cn("self-start", index % 2 === 0 ? "lg:translate-y-1" : "lg:-translate-y-1")}>
                    <div className="rounded-xl bg-background/80 border border-border/45 p-1.5 shadow-[0_12px_24px_-20px_hsl(var(--foreground)/0.9)]">
                      <div className={cn("relative w-full rounded-lg overflow-hidden bg-muted/25", item.previewHeightClass)}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 22vw"
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="o-mnie" className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative lg:sticky lg:top-12">
              <div className="absolute -top-6 -left-6 w-48 h-24 border-4 border-primary rounded-full transform rotate-6 opacity-40" />
              <Card className="relative z-10 bg-card border-0 shadow-lg overflow-hidden">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/images/aga-dots.jpg"
                    alt="Aga - lektorka języka angielskiego"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 92vw, 45vw"
                    className="object-cover object-top"
                  />
                </div>
              </Card>
            </div>

            <div className="space-y-6 sm:space-y-7">
              <div className="relative">
                <div className="absolute -top-3 -right-8 w-20 h-10 border-3 border-secondary rounded-full transform rotate-12 opacity-60" />
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">Cześć! Mam na imię Aga</h2>
              </div>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Od 10 lat z pasją pomagam dzieciom i młodzieży odkrywać, że język angielski wcale nie musi być trudny
                ani stresujący. W tym czasie miałam przyjemność pracować z uczniami w każdym wieku – od maluchów
                stawiających swoje pierwsze kroki w nauce, aż po licealistów.
              </p>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Specjalizuję się m.in. w przygotowaniu do egzaminu ósmoklasisty. Moi kursanci mają na swoim koncie
                naprawdę niesamowite wyniki, ale dla mnie sukces to coś więcej niż tylko punkty na arkuszu. Przez lata
                pracowałam z bardzo różnymi młodymi ludźmi:
              </p>

              <ul className="space-y-3">
                {OSMOKLASISTA_ABOUT_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base sm:text-lg text-foreground leading-relaxed">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Dzięki temu wiem, jak kluczowa jest bezpieczna i przyjazna atmosfera na zajęciach. Kiedy znika stres,
                pojawia się naturalna ciekawość i pewność siebie.
              </p>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Nasze kursy grupowe to wynik nie tylko mojego doświadczenia, ale pracy całego zespołu. Wszyscy lektorzy
                doskonale znają aktualne wymagania egzaminacyjne. Wiemy dokładnie, które zadania sprawiają uczniom
                największą trudność, co pojawia się na egzaminach co roku i jak skutecznie opanować kluczowy materiał
                – bez zbędnego przytłoczenia.
              </p>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Zależy mi, aby każdy uczeń czuł się u nas zaopiekowany, dostrzeżony i zmotywowany do działania.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="relative inline-block max-w-full">
              <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-secondary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                Sprawdźmy, czy nasze grupy to dobre miejsce dla Twojego dziecka
              </h2>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Zostaw kontakt - odezwiemy się w ciągu 24 godzin, aby dobrać wygodny termin darmowej lekcji próbnej.
            </p>
          </div>
          <div className="flex justify-center">
            <TrialCtaButton className="w-full sm:w-auto whitespace-normal h-auto min-h-12 text-center px-4 py-4 sm:px-8 sm:py-6">
              Zapisz dziecko na darmową lekcję
            </TrialCtaButton>
          </div>
        </div>
      </section>

      <TeamSection
        heading="Nauczyciele, z którymi dzieci po prostu chcą się uczyć"
        intro="Zespół naszych doświadczonych lektorów to osoby z pasją, które wiedzą, jak bez stresu i w przyjaznej atmosferze przygotować młodzież do egzaminu państwowego."
        showBios={false}
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="relative inline-block max-w-full">
              <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                A co, jeśli uważasz, że grupa nie jest dla Twojego dziecka?
              </h2>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              Doskonale rozumiemy, że każde dziecko uczy się inaczej. Jeśli uważasz, że zajęcia grupowe online nie
              będą najlepszym rozwiązaniem dla Twojego nastolatka, zawsze możecie umówić się na darmowe zajęcia
              próbne, po których zapiszemy dziecko na indywidualne zajęcia 1 na 1.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="relative inline-block max-w-full">
              <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-secondary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                Jasne zasady bez kruczków
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {RULES.map((rule) => {
              const Icon = rule.icon
              return (
                <Card key={rule.title} className="bg-card border-0 shadow-lg h-full min-w-0">
                  <CardContent className="p-6 sm:p-8 flex flex-col gap-5">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
                        rule.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                      )}
                    >
                      <Icon className={cn("w-7 h-7", rule.color === "primary" ? "text-primary" : "text-secondary")} />
                    </div>
                    <div className="space-y-2 min-w-0">
                      <h3 className="font-serif text-xl font-bold text-foreground break-words">{rule.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="relative inline-block max-w-full">
                <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                  Przetestuj nasze zajęcia bez opłat i zobowiązań
                </h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Zanim zdecydujesz o zapisie na kurs, spotkajmy się na bezpłatnej, 15-20 minutowej lekcji próbnej
                online. Ustalimy cel dziecka, sprawdzimy poziom i po prostu się poznamy. Zależy nam, aby do 2-3
                osobowych grup trafiały osoby, które dobrze się ze sobą zgrają i będą czuć się przy sobie swobodnie.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <Card className="bg-card border-0 shadow-lg overflow-hidden">
                <CardContent className="p-3 sm:p-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted/40">
                    <Image
                      src="/images/osmoklasista/sekcja-10-lekcja-probna.jpg"
                      alt="Darmowa lekcja próbna online przed kursem"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="formularz" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="relative inline-block max-w-full">
              <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                Zostaw kontakt. Odezwiemy się, by umówić darmową lekcję!
              </h2>
            </div>
          </div>
          <OsmoklasistaLeadForm />
        </div>
      </section>
    </main>
  )
}
