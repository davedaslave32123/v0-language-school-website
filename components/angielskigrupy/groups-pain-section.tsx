export function GroupsPainSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative inline-block w-full text-center">
            <div className="absolute -top-3 -right-2 sm:-right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Znasz to uczucie, gdy chcesz coś powiedzieć, ale paraliżuje Cię myśl: „Tylko żeby się nie
              zbłaźnić"?
            </h2>
          </div>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-center">
            Większość z nas ma za sobą szkolną traumę – ocenianie za każdy błąd i wkuwanie gramatyki zamiast
            rozmowy. U nas jest inaczej. Zmieniamy sposób myślenia o języku. Skupiamy się na komunikacji od
            pierwszych zajęć (nawet na najprostszych tematach) i czyścimy wymowę, bo wiemy, że to właśnie ona
            często jest powodem blokady. Nie oceniamy. Rozmawiamy.
          </p>
        </div>
      </div>
    </section>
  )
}
