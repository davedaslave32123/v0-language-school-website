export function GroupsTrialSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-8 w-28 h-14 border-3 border-primary rounded-full transform rotate-12 opacity-50"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground">
              Sprawdźmy, czy do siebie pasujemy – bez opłat i zobowiązań.
            </h2>
          </div>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Zanim zapiszesz się do grupy, spotkajmy się na darmowej lekcji próbnej. Ustalimy Twój cel,
            sprawdzimy poziom i po prostu się poznamy. Zależy nam, aby do 2-3 osobowych grup trafiały osoby,
            które dobrze się ze sobą zgrają i będą czuć się przy sobie swobodnie.
          </p>
        </div>
      </div>
    </section>
  )
}
