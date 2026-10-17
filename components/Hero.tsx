import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="bg-background pt-20 pb-8 sm:pt-28 sm:pb-12">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
            Consultora ambiental
          </span>

          <h1 className="mt-5 font-heading text-6xl font-normal leading-[0.95] text-foreground sm:text-7xl">
            {siteConfig.name}
            <span className="mt-2 block font-heading text-2xl font-normal italic text-primary sm:text-3xl">
              Consultora Ambiental
            </span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
            {siteConfig.tagline}.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button size="lg" className="rounded-full px-7" asChild>
              <a href="#contacto">
                Solicitar asesoría
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <a
              href="#servicios"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-terracotta"
            >
              Ver servicios
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="hidden justify-center lg:col-span-6 lg:flex">
          <div className="relative aspect-[4/3] w-full max-w-[460px] overflow-hidden rounded-tl-[2.5rem] rounded-tr-md rounded-br-[2.5rem] rounded-bl-md border border-border">
            <Image
              src="/images/hero-landscape.jpg"
              alt="Paisaje de cordillera y bosque nativo chileno"
              fill
              priority
              sizes="(min-width: 1024px) 460px, 0px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
