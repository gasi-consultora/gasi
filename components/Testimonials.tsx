import { projects } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="proyectos" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
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
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`rounded-tl-[2.5rem] rounded-tr-md rounded-br-[2.5rem] rounded-bl-md border border-border bg-card p-7 ${
                index % 2 === 1 ? "sm:translate-y-8" : ""
              }`}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
