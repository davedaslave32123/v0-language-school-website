import { HeroSection } from "@/components/hero-section"
import { EmotionsSection } from "@/components/emotions-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PrinciplesSection } from "@/components/principles-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EmotionsSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <PrinciplesSection />
      <ContactSection />
    </main>
  )
}
