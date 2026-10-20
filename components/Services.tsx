import Image from "next/image";
import { services } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-lg border border-border p-8 sm:min-h-[480px] sm:p-10 lg:min-h-[600px]">
              <Image
                src="/images/servicios.jpg"
                alt="Mapas topográficos, GPS y planos de un proyecto en evaluación ambiental"
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="scale-110 object-cover blur-[2px]"
              />
              <div className="absolute inset-0 bg-black/55" />

              <span className="relative text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                Qué hacemos
              </span>
              <h2 className="relative mt-4 font-heading text-4xl font-normal text-white sm:text-5xl">
                Servicios
              </h2>
              <p className="relative mt-5 max-w-sm text-white/80">
                Soluciones ambientales completas para acompañar tu proyecto en cada
                etapa, desde la tramitación hasta el seguimiento en terreno.
              </p>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-border lg:col-span-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} delay={index * 80}>
                  <div
                    className={`group grid grid-cols-[3rem_auto_1fr] items-start gap-x-5 gap-y-1 py-7 sm:grid-cols-[4rem_auto_1fr] ${
                      index === 0 ? "pt-0" : ""
                    }`}
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
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
