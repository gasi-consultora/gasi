"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const top = document.querySelector("#top");
    const sections = [top, ...navLinks.map((link) => document.querySelector(link.href))].filter(
      (el): el is Element => el !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(entry.target.id === "top" ? null : `#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <Image
            src="/images/gasi_logo.png"
            alt={siteConfig.fullName}
            width={178}
            height={80}
            priority
            className="h-10 w-auto rounded-md"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-terracotta ${
                activeHref === link.href
                  ? "font-medium text-terracotta"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full">
            <a href="#contacto">Solicitar asesoría</a>
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-border/70 bg-background px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-md px-2 py-2 text-sm hover:bg-accent hover:text-terracotta ${
                activeHref === link.href
                  ? "font-medium text-terracotta"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 rounded-full">
            <a href="#contacto" onClick={() => setIsOpen(false)}>
              Solicitar asesoría
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
