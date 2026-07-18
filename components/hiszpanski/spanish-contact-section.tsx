import { LeadForm } from "@/components/lead-form"

export function SpanishContactSection() {
  return (
    <section id="formularz" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative inline-block max-w-3xl">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Zrób pierwszy krok do własnej hiszpańskiej przygody. Umów się na darmową lekcję próbną!
            </h2>
          </div>
        </div>

        <LeadForm source="spanish" />
      </div>
    </section>
  )
}
