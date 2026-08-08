"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function TrialCtaButton({
  className,
  children = "Chcę darmową lekcję próbną",
}: {
  className?: string
  children?: ReactNode
}) {
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
      {children}
    </Button>
  )
}
