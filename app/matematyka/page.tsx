import type { Metadata } from "next"
import Image from "next/image"
import { BookOpen, FileX, Gift, Smartphone } from "lucide-react"
import { AboutSection, type AboutPoint } from "@/components/about-section"
import { MatematykaLeadForm } from "@/components/matematyka/matematyka-lead-form"
import { TeamSection, type Tutor } from "@/components/team-section"
import { TrialCtaButton } from "@/components/trial-cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Korepetycje z matematyki online — Aga od Języków",
  description:
    "Matematyka tłumaczona krok po kroku, bez „pamięciówki\" i bez presji. Zajęcia online dla dzieci i młodzieży. Zacznijcie od darmowej lekcji próbnej.",
}

const PAIN_POINTS = [
  {
    title: "Frustracja i brak pewności siebie?",
    description:
      "Dziecko spędza godziny nad zadaniami, a przed sprawdzianem i tak pojawia się paraliżujący stres oraz myślenie: „Ja po prostu nie jestem ścisłym umysłem\"?",
    color: "primary" as const,
  },
  {
    title: "Nauczanie na „pamięć\", a nie na rozumienie?",
    description:
      "W szkole brakuje czasu na wyjaśnienie, skąd co się bierze. Dziecko uczy się wzorów jak wierszyków, a wystarczy zmiana treści zadania, by straciło grunt pod nogami?",
    color: "secondary" as const,
  },
  {
    title: "Oceny nie oddają potencjału Twojego dziecka?",
    description:
      "Wiesz, że stać je na wiele więcej, ale zaległości z poprzednich klas urosły jak kula śnieżna i nie wiecie, od czego zacząć?",
    color: "primary" as const,
  },
  {
    title: "Logistyczny maraton dla rodzica?",
    description:
      "Masz dość bycia „taksówkarzem\" i dowożenia dziecka na korepetycje po mieście po godzinach własnej pracy?",
    color: "secondary" as const,
  },
]

const ABOUT_INTRO =
  "Od ponad 10 lat pracuję z dziećmi i młodzieżą. Z wykształcenia i pasji jestem poliglotką, a od lat prowadzę kameralną szkołę językową online. Doskonale znam potrzeby młodych ludzi i wiem, jak kluczowa w edukacji jest atmosfera bezpieczeństwa, zrozumienia i braku oceniania. Rodzice moich uczniów od dawna dziękowali mi za to, że ich dzieci wreszcie przestały bać się zajęć."

const ABOUT_POINTS_HEADING = "Dlaczego wprowadzam matematykę do mojej szkoły?"

const ABOUT_POINTS: AboutPoint[] = [
  {
    title: "Z potrzeby rodziców:",
    description:
      "To Wy – rodzice naszych uczniów – wielokrotnie pytaliście, czy nie mamy w zespole kogoś od matematyki, komu można zaufać tak samo jak naszym lektorom językowym.",
    color: "primary",
  },
  {
    title: "Z pasji do ludzi (mam nosa do talentów!):",
    description:
      "Dobry korepetytor to nie tylko ktoś, kto zna wzory. To przede wszystkim osoba empatyczna, cierpliwa i potrafiąca nawiązać relację z młodym człowiekiem.",
    color: "secondary",
  },
  {
    title: "Przekonanie, że matematyka jest dla każdego:",
    description:
      "Przedmiot ten bywa trudny, ale odpowiednio wytłumaczony staje się po prostu logiczną układanką. Nie musisz szukać losowych korepetytorów z ogłoszeń – weryfikuję korepetytorów osobiście.",
    color: "primary",
  },
]

const ABOUT_CLOSING =
  "W pakiecie otrzymujecie wygodę nauki online z własnego pokoju oraz pełne zaopiekowanie Waszego dziecka. Lekcja próbna jest po to, aby samo przekonało się, że matematyka da się lubić, a pierwsze spotkanie jest w 100% bezstresowe."

const TUTORS: Tutor[] = [
  {
    name: "Lidia",
    photo: "/images/tutors/lidia.jpg",
    bio:
      "Mistrzyni analitycznego myślenia i cierpliwości. Od 3 lat współpracuje ze mną jako lektorka, a na co dzień studiuje Informatykę (jej specjalizacja to sieci komputerowe, a pasją – analiza danych i uczenie maszynowe!). Lidia doskonale wie, jak przełożyć skomplikowane algorytmy i wzory na prosty, żywy język. Dzięki ogromnym pokładom cierpliwości potrafi sprawić, że każdy problem matematyczny przestaje wyglądać strasznie.",
  },
  {
    name: "Ola",
    photo: "/images/matematyka/ola.jpg",
    bio:
      "Praktyk matematyki i pasjonatka inżynierii. Studentka 3. roku Lotnictwa na Politechnice Wrocławskiej oraz członkini koła naukowego PWr in Space, gdzie matematykę i fizykę przekuwa w... budowę rakiet! Ola na co dzień żyje ścisłym myśleniem, a jednocześnie doskonale pamięta własne przygotowania do matur. Wie, z czym uczniowie borykają się najczęściej, i wie, jak w luźnej, sprzyjającej nauce atmosferze pokonać każdy sprawdzian.",
  },
]

const METHOD_STEPS = [
  {
    title: "Najpierw diagnoza (Zrozumieć błąd) 🔍",
    description:
      "Nie narzucamy gotowych szablonów. Zaczynamy od poznania sposobu myślenia ucznia, by wyłapać dokładnie ten moment, w którym pojawia się zaległość lub błędne rozumowanie.",
    color: "primary" as const,
  },
  {
    title: "Nauka krok po kroku 🪜",
    description:
      "Zamiast bezmyślnego wkuwania na pamięć, rozkładamy trudne problemy na mniejsze, zrozumiałe elementy. Gdy uczeń pojmuje „dlaczego\", zadania przestają straszyć.",
    color: "secondary" as const,
  },
  {
    title: "Plan skrojony na miarę 📊",
    description:
      "Tempo, poziom i zakres lekcji dopasowujemy do możliwości oraz celu ucznia – bez pędzenia z materiałem i bez zaległości.",
    color: "primary" as const,
  },
  {
    title: "Nauka pod cel ucznia 🎯",
    description:
      "Pracujemy na bieżących materiałach szkolnych, arkuszach egzaminacyjnych (Egzamin Ósmoklasisty, Matura) lub autorskich zestawach ćwiczeń.",
    color: "secondary" as const,
  },
  {
    title: "Wygoda i pełne zaopiekowanie 🏠",
    description:
      "Nauka odbywa się w 100% online. Dziecko uczy się ze swojego bezpiecznego pokoju, a Ty oszczędzasz czas na dowożeniu go na zajęcia.",
    color: "primary" as const,
  },
]

// Parent/student review screenshots. Uncropped (object-contain) and lazy-loaded,
// so new entries only need their real pixel dimensions to render correctly.
const REVIEWS = [
  {
    image: "/images/matematyka/reviews/opinia-lidia-matematyka-1.jpg",
    alt: "Opinia rodzica o zajęciach z matematyki z Lidią",
    width: 1024,
    height: 515,
  },
  {
    image: "/images/matematyka/reviews/opinia-lidia-matematyka-2.png",
    alt: "Opinia rodzica polecającego zajęcia z Lidią",
    width: 905,
    height: 497,
  },
] as const

const RULES = [
  {
    title: "Umowa? Brak!",
    description:
      "Nie wiążesz się długoterminowymi umowami na cały rok. Obowiązuje prosty regulamin, a z zajęć możesz zrezygnować w dowolnym momencie.",
    icon: FileX,
    color: "primary" as const,
  },
  {
    title: "Wygodna płatność BLIK-iem",
    description:
      "Płacisz wygodnie przed zajęciami. Bez konieczności kupowania drogich pakietów z góry na cały semestr.",
    icon: Smartphone,
    color: "secondary" as const,
  },
  {
    title: "Lekcja próbna 0 zł",
    description:
      "Pierwsze spotkanie jest całkowicie bezpłatne i niezobowiązujące. Poznacie tutora, sprawdzicie poziom i zobaczycie, jak wyglądają zajęcia online.",
    icon: Gift,
    color: "primary" as const,
  },
  {
    title: "Pełna baza materiałów",
    description:
      "W cenie zajęć udostępniamy wszystkie niezbędne materiały do nauki, zestawy zadań i arkusze.",
    icon: BookOpen,
    color: "secondary" as const,
  },
]

export default function MatematykaLandingPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <section className="relative min-h-screen bg-background grid-pattern overflow-hidden flex items-center">
        <div className="dynamic-shape dynamic-shape-1" />
        <div className="dynamic-shape dynamic-shape-2" />

        <div className="container mx-auto px-4 py-10 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="min-w-0 space-y-6">
              <p className="text-sm sm:text-base font-medium text-primary tracking-wide text-pretty">
                Korepetycje z matematyki online – dla dzieci i młodzieży
              </p>

              <div className="relative min-w-0">
                <div className="absolute -top-4 -left-6 w-32 h-16 border-3 border-primary rounded-full transform -rotate-6 opacity-40" />
                <h1 className="relative font-serif font-bold leading-tight text-foreground break-words text-[clamp(1.35rem,1.05rem+2.2vw,3rem)]">
                  Matematyka przestała być zrozumiała, a korepetycje kojarzą Wam się ze stresem?
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                Pomagamy dzieciom i młodzieży zrozumieć matematykę krok po kroku, bez „pamięciówki" i bez wywierania
                presji. Wszystko wygodnie, bezpiecznie z domu – na Twoich warunkach.
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
                    alt="Aga - założycielka szkoły"
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
          <div className="text-center mb-12 lg:mb-16">
            <div className="relative inline-block max-w-full">
              <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                Widzisz, że Twoje dziecko męczy się z matematyką?
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PAIN_POINTS.map((point) => (
              <Card key={point.title} className="bg-card border-0 shadow-lg h-full min-w-0">
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      point.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                    )}
                  >
                    <span
                      className={cn(
                        "text-2xl font-bold",
                        point.color === "primary" ? "text-primary" : "text-secondary"
                      )}
                    >
                      ?
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground break-words">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AboutSection
        intro={ABOUT_INTRO}
        pointsHeading={ABOUT_POINTS_HEADING}
        points={ABOUT_POINTS}
        closing={ABOUT_CLOSING}
        imagePriority={false}
      />

      <TeamSection
        heading="Zespół empatii i ścisłych umysłów 🧠✨"
        intro="Nie szukamy surowych nauczycieli z czerwonym długopisem. Stawiamy na młode, pełne pasji osoby, które same niedawno przechodziły przez ścieżkę szkolną i doskonale pamiętają, z czym studenci i uczniowie mają największy problem."
        tutors={TUTORS}
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <div className="relative inline-block max-w-full">
              <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-secondary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                Jak pracujemy z Twoim dzieckiem?
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {METHOD_STEPS.map((step, index) => (
              <Card
                key={step.title}
                className={cn(
                  "bg-card border-0 shadow-lg h-full min-w-0",
                  index === METHOD_STEPS.length - 1 ? "sm:col-span-2 sm:max-w-2xl sm:mx-auto" : ""
                )}
              >
                <CardContent className="p-6 sm:p-8 flex items-start gap-4 sm:gap-5">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-serif text-xl font-bold",
                      step.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                    )}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </div>
                  <div className="space-y-2 min-w-0">
                    <h3 className="font-serif text-xl font-bold text-foreground break-words">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {REVIEWS.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <div className="relative inline-block max-w-full">
                <div className="absolute -top-2 -left-2 sm:-left-6 w-24 h-12 border-3 border-secondary rounded-full transform -rotate-12 opacity-50 pointer-events-none" />
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                  Co mówią o nas rodzice i uczniowie:
                </h2>
              </div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REVIEWS.map((review) => (
                <Card key={review.image} className="bg-card border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-3 sm:p-4">
                    <div className="relative w-full rounded-lg overflow-hidden bg-background/80">
                      <Image
                        src={review.image}
                        alt={review.alt}
                        width={review.width}
                        height={review.height}
                        loading="lazy"
                        sizes="(max-width: 640px) 92vw, 45vw"
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <div className="relative inline-block max-w-full">
              <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                Przejrzyste zasady. Zero haczyków.
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {RULES.map((rule) => {
              const Icon = rule.icon
              return (
                <Card key={rule.title} className="bg-card border-0 shadow-lg h-full min-w-0">
                  <CardContent className="p-6 sm:p-8 flex items-start gap-4 sm:gap-5">
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

      <section id="formularz" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="relative inline-block max-w-full">
              <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
                Pomóż swojemu dziecku polubić matematykę. Umów bezpłatną lekcję próbną.
              </h2>
            </div>
          </div>
          <MatematykaLeadForm />
        </div>
      </section>
    </main>
  )
}
