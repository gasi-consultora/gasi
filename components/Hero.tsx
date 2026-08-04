import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="bg-background pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
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

        <div className="hidden justify-center lg:col-span-5 lg:flex">
          <BranchIllustration className="h-auto w-full max-w-[280px] text-primary" />
        </div>
      </div>
    </section>
  );
}

function BranchIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 360"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M130 350C122 280 142 230 118 170C98 122 132 90 122 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M122 150C100 138 78 142 58 122"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M124 230C146 218 164 222 186 202"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M119 280C98 272 84 280 64 268"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <ellipse
        cx="52"
        cy="112"
        rx="22"
        ry="12"
        transform="rotate(-28 52 112)"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <ellipse
        cx="192"
        cy="192"
        rx="24"
        ry="13"
        transform="rotate(18 192 192)"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <ellipse
        cx="58"
        cy="260"
        rx="22"
        ry="12"
        transform="rotate(-16 58 260)"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <ellipse
        cx="122" cy="34" rx="15" ry="18"
        className="text-terracotta"
        fill="currentColor"
        fillOpacity="0.85"
      />
    </svg>
  );
}
