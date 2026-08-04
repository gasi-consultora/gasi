# Próximos pasos — Formulario de contacto

## Estado actual

El sitio ya está listo y el formulario de contacto ya está **integrado con tu Gmail**
vía SMTP (`lib/actions.ts` + `components/ContactForm.tsx`), usando la librería
`nodemailer`. No depende de ningún servicio externo nuevo — solo de tu cuenta de
Gmail. Puede enviar a cualquier destinatario (tu correo personal, `ccontreras@gasi.cl`,
o el que sea) sin necesidad de verificar ningún dominio.

## Qué falta (una sola vez)

1. Entra a tu cuenta de Google que va a **enviar** los correos (`tomasurizark@gmail.com`):
   [myaccount.google.com/security](https://myaccount.google.com/security)
2. Activa **"Verificación en 2 pasos"** si no la tienes activada (Google la exige para
   poder generar contraseñas de aplicación).
3. Busca **"Contraseñas de aplicaciones"** (o entra directo a
   [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)),
   crea una nueva (puedes llamarla "GASI web") y copia el código de 16 letras que te da.
4. Abre el archivo `.env.local` (raíz del proyecto) y complétalo así:
   ```
   GMAIL_USER=tomasurizark@gmail.com
   GMAIL_APP_PASSWORD=el_código_de_16_letras_sin_espacios
   CONTACT_EMAIL_TO=tomasurizark@gmail.com
   ```
5. Corre `npm run dev`, llena el formulario de la web y revisa la bandeja de entrada
   (y spam, por si acaso, las primeras veces) de `CONTACT_EMAIL_TO`.

`CONTACT_EMAIL_TO` puede ser cualquier correo — por ejemplo `ccontreras@gasi.cl` —
sin ningún paso adicional. `GMAIL_USER`/`GMAIL_APP_PASSWORD` es solo el remitente
técnico que manda el correo; el destinatario es libre.

## Desplegar en Vercel

1. Sube el proyecto a un repositorio (GitHub/GitLab) o corre `npx vercel` directo
   desde la carpeta.
2. En el proyecto de Vercel: **Settings → Environment Variables**, agrega las mismas
   tres variables: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_EMAIL_TO`.
3. Deploy. Listo.

Para cambiar a qué correo llegan las consultas (por ejemplo pasar de tu Gmail a
`ccontreras@gasi.cl`), solo editas `CONTACT_EMAIL_TO` en Vercel y vuelves a
desplegar — no se toca código.

## Dominio propio (ej. www.gasi-consultora-ambiental.cl)

Por defecto Vercel te da una URL tipo `gasi-website.vercel.app`. Para usar un dominio
`.cl` propio son dos pasos separados: **comprarlo** y **conectarlo**.

### 1. Comprar el dominio

Los dominios `.cl` los administra **NIC Chile**, así que no se compran igual que un
`.com`. Dos formas:

- **Directo en [nic.cl](https://www.nic.cl)**: buscas disponibilidad de
  `gasi-consultora-ambiental.cl`, te registras como "usuario registrante" (con RUT,
  tuyo o de la empresa) y pagas la cuota anual ahí mismo.
- **A través de un proveedor/revendedor** (muchos hostings chilenos y algunos
  internacionales gestionan `.cl` por ti, cobrando un poco más por el trámite).

Cualquiera de las dos formas te deja siendo el dueño registrado del dominio.

### 2. Conectarlo a Vercel

1. En el dashboard de Vercel → tu proyecto → **Settings → Domains**.
2. Agrega `gasi-consultora-ambiental.cl` y `www.gasi-consultora-ambiental.cl` (Vercel
   te va a sugerir que uno redirija al otro — normalmente se deja `www` como principal
   y el dominio raíz redirige hacia él, o viceversa, como prefieras).
3. Vercel te muestra qué registros DNS configurar. Dos caminos:
   - **Más simple**: cambiar los *nameservers* del dominio (en NIC Chile o donde lo
     compraste) a los que te indique Vercel (`ns1.vercel-dns.com`,
     `ns2.vercel-dns.com`) — Vercel pasa a administrar todo el DNS.
   - **Alternativa**: si quieres mantener el DNS donde lo compraste (por ejemplo para
     tener correos `@gasi-consultora-ambiental.cl` en otro proveedor), en vez de
     cambiar nameservers agregas manualmente un registro **A** apuntando a la IP que
     te da Vercel para el dominio raíz, y un registro **CNAME** apuntando a
     `cname.vercel-dns.com` para `www`.
4. Espera la propagación DNS (de minutos a ~24-48 horas). Vercel emite automáticamente
   el certificado SSL (candado/https) sin costo, apenas detecta el DNS correcto.

Una vez el dominio esté funcionando, avísame para actualizar la metadata del sitio
(`app/layout.tsx`) con la URL final — mejora cómo se ve el link al compartirlo en
WhatsApp/redes.

## ¿Esto va a seguir funcionando para siempre, sin problema?

**Sí**, de forma gratuita e indefinida, con estas condiciones (normales para cualquier
cuenta de Gmail, no son "trucos" frágiles):

- **Límite de envío de Gmail**: ~500 correos salientes por día por cuenta. Un
  formulario de contacto de una consultora recibe consultas ocasionales, muy lejos de
  ese límite.
- **La contraseña de aplicación no caduca sola** — sigue siendo válida hasta que tú la
  revoques manualmente desde la configuración de Google, o desactives la verificación
  en 2 pasos.
- **El destinatario (`CONTACT_EMAIL_TO`) es completamente libre**: no hay restricción
  de "solo puedes enviarte a ti mismo" como pasaba con Resend — puedes apuntar a
  `ccontreras@gasi.cl` o a cualquier otra dirección desde el día uno.

**Lo único que podría romperlo:**
- Que revoques la contraseña de aplicación o desactives la verificación en 2 pasos en
  esa cuenta de Google → los correos empiezan a fallar hasta generar una nueva.
- Que Google cambie sus políticas de SMTP para cuentas gratuitas en el futuro (riesgo
  bajo, pero es un servicio externo).
- Si Gmail alguna vez marca el envío como sospechoso (poco probable con este volumen),
  revisa la bandeja de "Actividad reciente" en la cuenta de Google.

En resumen: sin cuentas nuevas, sin dominios que verificar, sin tarjeta de crédito —
solo tu Gmail. Es la opción más simple posible dado que cualquier envío de correo
automático necesita autenticarse contra algún servidor.
