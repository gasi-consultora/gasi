"use server";

import nodemailer from "nodemailer";

type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export type SendContactEmailResult = { ok: true } | { ok: false; error: string };

export async function sendContactEmail(
  input: ContactFormInput
): Promise<SendContactEmailResult> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!user || !pass || !to) {
    return {
      ok: false,
      error:
        "El envío de correo no está configurado. Falta GMAIL_USER, GMAIL_APP_PASSWORD o CONTACT_EMAIL_TO en las variables de entorno.",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `GASI Consultora Ambiental <${user}>`,
      to,
      replyTo: input.email,
      subject: `Solicitud de asesoría — ${input.name}`,
      text: [
        `Nombre: ${input.name}`,
        `Correo: ${input.email}`,
        `Teléfono: ${input.phone || "No indicado"}`,
        `Servicio de interés: ${input.service || "No indicado"}`,
        "",
        "Mensaje:",
        input.message,
      ].join("\n"),
    });

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Error desconocido al enviar el correo.",
    };
  }
}
