import type { Metadata } from "next"
import { SpanishHeroSection } from "@/components/hiszpanski/spanish-hero-section"
import { SpanishStartSection } from "@/components/hiszpanski/spanish-start-section"
import { SpanishAboutSection } from "@/components/hiszpanski/spanish-about-section"
import { SpanishTutorSection } from "@/components/hiszpanski/spanish-tutor-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SpanishFlexibilitySection } from "@/components/hiszpanski/spanish-flexibility-section"
import { SpanishContactSection } from "@/components/hiszpanski/spanish-contact-section"

export const metadata: Metadata = {
  title: "Hiszpański z pasją — Aga od Języków",
  description:
    "Ucz się autentycznego, żywego hiszpańskiego na własnych warunkach – bez stresu i bez długich umów. Zacznij od bezpłatnej lekcji próbnej!",
}

export default function SpanishLandingPage() {
  return (
    <main className="min-h-screen">
      <SpanishHeroSection />
      <SpanishStartSection />
      <SpanishAboutSection />
      <SpanishTutorSection />
      <TestimonialsSection />
      <SpanishFlexibilitySection />
      <SpanishContactSection />
    </main>
  )
}
