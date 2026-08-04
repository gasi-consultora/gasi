"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services, siteConfig, whatsappLink } from "@/lib/data";
import { sendContactEmail } from "@/lib/actions";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    const result = await sendContactEmail({
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      service: formData.get("service")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    });

    if (result.ok) {
      form.reset();
      setStatus("success");
    } else {
      setErrorMessage(result.error);
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-secondary py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
            Contacto
          </span>
          <h2 className="mt-4 font-heading text-4xl font-normal text-foreground sm:text-5xl">
            Conversemos sobre tu proyecto
          </h2>
          <p className="mt-5 max-w-sm font-heading text-lg italic leading-relaxed text-foreground/70">
            Escríbenos y te contactaremos a la brevedad para conocer las
            necesidades ambientales de tu proyecto.
          </p>

          <div className="mt-10 space-y-5 border-t border-foreground/15 pt-8">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-foreground hover:text-terracotta"
            >
              <Phone className="size-4 text-primary" strokeWidth={1.75} />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm text-foreground hover:text-terracotta"
            >
              <Mail className="size-4 text-primary" strokeWidth={1.75} />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <MapPin className="size-4 text-primary" strokeWidth={1.75} />
              {siteConfig.address}
            </div>
          </div>
        </div>

        <div className="rounded-tl-[2.5rem] rounded-tr-md rounded-br-[2.5rem] rounded-bl-md border border-border bg-card p-6 sm:p-8 lg:col-span-7">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
              <CheckCircle2 className="size-10 text-primary" strokeWidth={1.5} />
              <p className="font-heading text-lg font-medium text-foreground">
                ¡Gracias por contactarnos!
              </p>
              <p className="text-sm text-muted-foreground">
                Recibimos tu mensaje y te contactaremos a la brevedad. También puedes
                escribirnos por WhatsApp.
              </p>
              <Button
                variant="outline"
                className="mt-2 rounded-full"
                onClick={() => setStatus("idle")}
              >
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "error" && (
                <div className="flex items-start gap-2.5 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                  <AlertCircle className="mt-0.5 size-4 shrink-0" />
                  <p>
                    No pudimos enviar tu mensaje. {errorMessage} Puedes intentar de
                    nuevo o escribirnos directamente por WhatsApp.
                  </p>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" placeholder="+56 9 1234 5678" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo</Label>
                <Input id="email" name="email" type="email" placeholder="tu@correo.cl" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Servicio de interés</Label>
                <Select name="service">
                  <SelectTrigger id="service" className="w-full">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.title} value={service.title}>
                        {service.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto"
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full"
                size="lg"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Enviando..." : "Solicitar asesoría"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
