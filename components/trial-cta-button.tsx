"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function TrialCtaButton({ className }: { className?: string }) {
  const scrollToForm = () => {
    setTimeout(() => {
      const formSection = document.getElementById("formularz")
      if (formSection) {
        formSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }

  return (
    <Button
      size="lg"
      className={cn("bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6", className)}
      onClick={scrollToForm}
    >
      Chcę darmową lekcję próbną
    </Button>
  )
}
