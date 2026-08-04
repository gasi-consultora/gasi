# GASI Consultora Ambiental

Sitio web de una sola página (con scroll) para la consultora ambiental GASI.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui (radix)
- Despliegue en Vercel

## Estructura

```
app/
  page.tsx        → página única con todas las secciones
  layout.tsx       → metadata y fuentes
  servicios/       → redirige a /#servicios (para compartir enlaces directos)
  nosotros/        → redirige a /#nosotros
  contacto/        → redirige a /#contacto

components/
  Navbar.tsx
  Hero.tsx
  Services.tsx
  WhyUs.tsx        → sección "Por qué elegirnos"
  Testimonials.tsx → sección "Proyectos realizados"
  ContactForm.tsx
  Footer.tsx
  WhatsAppButton.tsx

lib/data.ts        → contenido editable: datos de contacto, servicios, proyectos
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Editar contenido

- Datos de contacto (teléfono, WhatsApp, correo), servicios y proyectos: `lib/data.ts`.
- Colores (paleta verde/blanco): `app/globals.css` (variables `--primary`, `--secondary`, `--accent`, etc.).
- Logo: `public/images/gasi_logo.png`.

## Formulario de contacto

El formulario envía un correo real vía SMTP de Gmail (librería `nodemailer`) usando una
Server Action (`lib/actions.ts`). No depende de ningún servicio externo, solo de una
cuenta de Gmail. Configuración necesaria en `.env.local` (copia `.env.example`):

```
GMAIL_USER=            # cuenta de Gmail que envía los correos (remitente)
GMAIL_APP_PASSWORD=    # contraseña de aplicación de esa cuenta (no la normal)
CONTACT_EMAIL_TO=      # correo donde quieres recibir las consultas (puede ser cualquiera)
```

Ver **`NEXT-STEPS.md`** para el paso a paso completo de configuración y despliegue en
Vercel.

## Deploy

```bash
npx vercel
```
