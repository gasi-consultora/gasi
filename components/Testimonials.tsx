import Image from "next/image";
import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Testimonials() {
  return (
    <section id="proyectos" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
            Casos
          </span>
          <h2 className="mt-4 font-heading text-4xl font-normal text-foreground sm:text-5xl">
            Proyectos realizados
          </h2>
          <p className="mt-5 text-muted-foreground">
            Algunos de los tipos de proyectos en los que hemos apoyado la gestión
            ambiental.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60">
            Fotografías referenciales.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 100}
              className={`overflow-hidden rounded-lg border border-border bg-card ${
                index % 2 === 1 ? "sm:translate-y-8 sm:rotate-1" : "sm:-rotate-1"
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                  {project.sector}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
