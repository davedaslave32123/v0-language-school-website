import { LeadForm } from "@/components/lead-form"

export function GroupsContactSection() {
  return (
    <section id="formularz" className="py-12 sm:py-16 lg:py-24 bg-background grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative inline-block w-full max-w-3xl">
            <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50 pointer-events-none"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground text-balance break-words">
              Zostaw kontakt. Odezwiemy się, by umówić darmową lekcję!
            </h2>
          </div>
        </div>

        <LeadForm source="english-groups" />
      </div>
    </section>
  )
}
