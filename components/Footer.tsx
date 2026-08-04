import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <a href="#top" className="flex items-center">
            <Image
              src="/images/gasi_logo.png"
              alt={siteConfig.fullName}
              width={178}
              height={80}
              className="h-9 w-auto rounded-md"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
            Navegación
          </h3>
          <ul className="mt-5 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary-foreground/85 hover:text-terracotta"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
            Contacto
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/85 hover:text-terracotta"
              >
                <Mail className="size-4" strokeWidth={1.75} />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-primary-foreground/85">
              <Phone className="size-4" strokeWidth={1.75} />
              {siteConfig.phone}
            </li>
            <li className="flex items-center gap-2 text-sm text-primary-foreground/85">
              <MapPin className="size-4" strokeWidth={1.75} />
              {siteConfig.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-6">
        <p className="text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {siteConfig.fullName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
