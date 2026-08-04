import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
              Qué hacemos
            </span>
            <h2 className="mt-4 font-heading text-4xl font-normal text-foreground sm:text-5xl">
              Servicios
            </h2>
            <p className="mt-5 max-w-sm text-muted-foreground">
              Soluciones ambientales completas para acompañar tu proyecto en cada
              etapa, desde la tramitación hasta el seguimiento en terreno.
            </p>
          </div>

          <div className="divide-y divide-border lg:col-span-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group grid grid-cols-[3rem_auto_1fr] items-start gap-x-5 gap-y-1 py-7 first:pt-0 sm:grid-cols-[4rem_auto_1fr]"
                >
                  <span className="font-heading text-3xl font-medium text-terracotta/50 sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mt-1 size-5 text-primary" strokeWidth={1.75} />
                  <div>
                    <h3 className="font-heading text-xl font-medium text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
