import { Card } from "@/components/ui/card"
import Image from "next/image"

const reviews: { image: string; alt: string }[] = [
  { image: "/images/reviews/review-1.png", alt: "Opinia klienta Arek" },
  { image: "/images/reviews/review-2.png", alt: "Opinia klienta Gabrysia" },
  { image: "/images/reviews/review-3.png", alt: "Opinia klienta Ania" },
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card border-0 shadow-lg overflow-hidden py-0"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={review.image}
                  alt={review.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 92vw, 30vw"
                  className="object-contain"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
