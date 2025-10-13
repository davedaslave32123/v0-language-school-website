import { HeroSection } from "@/components/hero-section"
import { CoursesSection } from "@/components/courses-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
