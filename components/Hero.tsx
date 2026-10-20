import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[560px] items-center overflow-hidden sm:min-h-[640px]">
      <Image
        src="/images/hero.jpg"
        alt="Volcán nevado reflejado en un lago del sur de Chile, con bosque nativo de araucarias"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
          Consultora ambiental
        </span>

        <h1 className="mt-5 font-heading text-6xl font-normal leading-[0.95] text-white sm:text-7xl">
          {siteConfig.name}
          <span className="mt-2 block font-heading text-2xl font-normal italic text-white/85 sm:text-3xl">
            Consultora Ambiental
          </span>
        </h1>

        <p className="mt-7 max-w-md text-lg leading-relaxed text-white/80">
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
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/85 hover:text-terracotta"
          >
            Ver servicios
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
