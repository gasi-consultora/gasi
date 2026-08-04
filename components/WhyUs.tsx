import { whyUsItems } from "@/lib/data";

export function WhyUs() {
  return (
    <section id="nosotros" className="bg-secondary py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
              Nuestro equipo
            </span>
            <h2 className="mt-4 font-heading text-4xl font-normal text-foreground sm:text-5xl">
              Por qué elegirnos
            </h2>
            <p className="mt-5 max-w-sm text-muted-foreground">
              Un equipo técnico comprometido con que tu proyecto avance sin
              contratiempos.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {whyUsItems.map((item) => (
              <div key={item.title} className="border-t border-foreground/15 pt-5">
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
