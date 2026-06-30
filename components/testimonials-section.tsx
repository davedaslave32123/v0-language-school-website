import { Card } from "@/components/ui/card"

// Drop real review screenshots into /public/images/reviews/ and reference them here.
// Each entry: { image: "/images/reviews/<file>", alt: "<short description>" }.
// Images can have ANY aspect ratio — they are shown uncropped at their natural shape.
const reviews: { image: string; alt: string }[] = [
  { image: "/placeholder.svg", alt: "Opinia klienta 1" },
  { image: "/placeholder.svg", alt: "Opinia klienta 2" },
  { image: "/placeholder.svg", alt: "Opinia klienta 3" },
  { image: "/placeholder.svg", alt: "Opinia klienta 4" },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-2 -left-6 w-24 h-12 border-3 border-secondary rounded-full transform -rotate-12 opacity-50"></div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">
              Zobacz, jak inni przełamali swoją blokadę:
            </h2>
          </div>
        </div>

        {/* Masonry-style columns: stacked on mobile, multi-column on larger screens.
            break-inside-avoid keeps each review intact; images keep their natural ratio. */}
        <div className="max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="mb-6 break-inside-avoid bg-card border-0 shadow-lg overflow-hidden"
            >
              <img
                src={review.image || "/placeholder.svg"}
                alt={review.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
