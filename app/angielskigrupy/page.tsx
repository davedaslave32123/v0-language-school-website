import type { Metadata } from "next"
import { GroupsHeroSection } from "@/components/angielskigrupy/groups-hero-section"
import { GroupsPainSection } from "@/components/angielskigrupy/groups-pain-section"
import { GroupsChooseSection } from "@/components/angielskigrupy/groups-choose-section"
import { GroupsMethodSection } from "@/components/angielskigrupy/groups-method-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { GroupsRulesSection } from "@/components/angielskigrupy/groups-rules-section"
import { GroupsTrialSection } from "@/components/angielskigrupy/groups-trial-section"
import { GroupsContactSection } from "@/components/angielskigrupy/groups-contact-section"

export const metadata: Metadata = {
  title: "Kameralne Grupy Językowe — Aga od Języków",
  description:
    "Dołącz do ultra-kameralnej grupy językowej (2-3 osoby). Odblokuj angielski bez stresu – od zera do swobodnej konwersacji B1. Zapisz się na bezpłatną lekcję próbną!",
}

export default function EnglishGroupsLandingPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <GroupsHeroSection />
      <GroupsPainSection />
      <GroupsChooseSection />
      <GroupsMethodSection />
      <AboutSection />
      <TeamSection />
      <GroupsRulesSection />
      <GroupsTrialSection />
      <GroupsContactSection />
    </main>
  )
}
