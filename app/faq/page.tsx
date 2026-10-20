import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Evaluación Ambiental en Chile",
  description:
    "Resolvemos las dudas más comunes sobre el SEIA, la diferencia entre EIA y DIA, la RCA, los permisos ambientales sectoriales y el seguimiento ambiental en Chile.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-background pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                Preguntas frecuentes
              </span>
              <h1 className="mt-4 font-heading text-4xl font-normal text-foreground sm:text-5xl">
                Dudas comunes sobre evaluación ambiental
              </h1>
              <p className="mt-5 text-muted-foreground">
                Respuestas generales sobre el SEIA y los procesos de evaluación ambiental
                en Chile. Si tu proyecto tiene una situación particular, conversemos
                directamente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} className="mt-12">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger className="font-heading text-lg font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>

            <ScrollReveal
              delay={200}
              className="mt-14 rounded-lg border border-border bg-card p-8 text-center sm:p-10"
            >
              <p className="font-heading text-xl font-medium text-foreground">
                ¿Tu proyecto tiene una situación distinta?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Escríbenos y te ayudamos a evaluar qué instrumento y pasos aplican en tu
                caso.
              </p>
              <Button size="lg" className="mt-6 rounded-full px-7" asChild>
                <a href="/#contacto">
                  Solicitar asesoría
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
