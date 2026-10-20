# Próximos pasos

## Estado actual

- **Formulario de contacto**: integrado y probado, envía correos vía Google Workspace
  (`turizar@gasi.cl`) usando `nodemailer` (`lib/actions.ts`). En Vercel,
  `CONTACT_EMAIL_TO` está configurado con 3 destinatarios (Tomás, Christofer y
  Hernán) separados por coma — para agregar o quitar gente, se edita esa variable
  en Vercel y se hace redeploy, no requiere tocar código.
- **Dominio**: `gasi.cl` conectado a Vercel y funcionando.
- **SEO**: código listo (`robots.txt`, `sitemap.xml`, metadata completa, imagen de
  vista previa, datos estructurados). Google Search Console verificado y sitemap
  enviado (2026-10-19), ahora esperando indexación. Falta Google Business Profile
  — ver abajo.

## 1. Aparecer en Google

**Ya implementado en el código** (no requiere que hagas nada ahí):
- `robots.txt` y `sitemap.xml` autogenerados, apuntando a `https://www.gasi.cl`.
- Metadata completa: título, descripción, palabras clave, Open Graph, Twitter card.
- Imagen de vista previa (se ve al compartir el link en WhatsApp/redes).
- Datos estructurados (`ProfessionalService`) para que Google entienda que es una
  consultora ambiental.

**Google Search Console — HECHO, queda esperar:**

- Propiedad `https://www.gasi.cl/` verificada el 2026-10-19, usando el **método del
  archivo HTML** (no el de registro TXT en Cloudflare que se había planteado al
  principio) — el archivo vive en `public/googled914325585da4234.html` y no hay que
  tocarlo ni borrarlo, Google lo vuelve a chequear cada cierto tiempo para confirmar
  que seguís siendo el dueño.
- Sitemap enviado: `https://www.gasi.cl/sitemap.xml`.
- **Ahora toca esperar** a que Google rastree e indexe las páginas — normalmente
  entre 3 y 14 días para un sitio nuevo. Verificar el avance en Search Console →
  **Indexación → Páginas**, o buscando `site:gasi.cl` en Google de vez en cuando.
- **Si después de ~2 semanas sigue sin indexarse nada**, usar el método alternativo
  que se había planteado originalmente: agregar un registro **TXT** en Cloudflare
  (DNS → Add record → tipo TXT, con el valor que te dé Search Console al elegir ese
  método de verificación) — a veces ayuda tener ambos métodos de verificación activos,
  y confirma con otra vía que el dominio es tuyo.

**Google Business Profile — pendiente** ([business.google.com](https://business.google.com)):
crea el perfil de la consultora con dirección, teléfono y horario reales — esto es lo
que hace que aparezca en Google Maps y en el panel lateral cuando alguien busque
"consultora ambiental" cerca de su ubicación. Para un negocio local suele ser más
efectivo que el posicionamiento web tradicional, y es gratis.

**Dos datos de contenido para revisar antes de publicar** (no son técnicos, son
decisiones de negocio):
- El sitio muestra `hernangp@gasi.cl` como correo público de contacto
  (`lib/data.ts` → `siteConfig.email`), que es distinto del correo que recibe los
  envíos del formulario (`turizar@gasi.cl`, vía `CONTACT_EMAIL_TO`) — confirma si
  ambas casillas las revisa la misma persona, o si preferís unificarlas.
- La dirección mostrada es un placeholder genérico ("Santiago, Chile") — para que el
  perfil de Google Business y los datos estructurados sean más efectivos, conviene
  poner la dirección real de la oficina cuando la tengas a mano. Avísame y la actualizo
  en `lib/data.ts`.

## 2. SEO de largo plazo: aparecer entre los primeros resultados

Importante distinguir dos cosas distintas:

- **Que Google encuentre e indexe el sitio** → eso ya está cubierto (sección 1 de
  arriba). Es la base técnica necesaria, pero no garantiza buen ranking.
- **Rankear entre los primeros resultados** para términos competidos como "consultoría
  ambiental" → eso es un esfuerzo de meses, no algo que se resuelva con código, y
  depende sobre todo de estos factores (ninguno implementado aún):

1. **Backlinks** (el factor que más pesa, y el más ausente hoy): que otros sitios con
   autoridad enlacen a `gasi.cl` — directorios de consultoras, asociaciones gremiales,
   menciones en medios, sitios de clientes con los que han trabajado. Sin esto es muy
   difícil competir contra consultoras que llevan años acumulando enlaces.
2. **Profundidad de contenido**: hoy el sitio es una sola página. Páginas dedicadas a
   temas específicos (ej. "¿Qué es una DIA?", "EIA vs DIA en Chile") capturarían
   búsquedas de cola larga que hoy no se capturan en absoluto.
3. **Reseñas en Google Business Profile**: pesan fuerte en el ranking local, y además
   suman a la confianza del sitio (ver el hueco de testimonios/logos de clientes que
   quedó pendiente).
4. **Actualización constante** (blog/noticias): Google favorece sitios "vivos"; uno
   estático de una sola página tiene techo bajo para keywords de cola larga.

**En la práctica**: si la prioridad es que te *encuentren* (alguien busca "consultora
ambiental" cerca de su ubicación y aparece el Google Business Profile / Maps), eso ya
está prácticamente resuelto con lo de la sección 1. Si la prioridad es rankear
orgánico contra consultoras ya posicionadas, hace falta una estrategia de contenido y
enlaces aparte — vale la pena conversarlo cuando quieran invertir tiempo en eso.

## ¿El envío de correo va a seguir funcionando para siempre, sin problema?

**Sí**, de forma gratuita e indefinida, con estas condiciones (normales para cualquier
cuenta de Google, no son "trucos" frágiles):

- **Límite de envío**: ~500 correos salientes por día por cuenta — muy por encima de lo
  que recibe un formulario de contacto de una consultora.
- **La contraseña de aplicación no caduca sola** — sigue siendo válida hasta que se
  revoque manualmente, o se desactive la verificación en 2 pasos de esa cuenta.
- **El destinatario (`CONTACT_EMAIL_TO`) es completamente libre**: puede ser cualquier
  dirección o varias separadas por coma, sin restricciones.

**Lo único que podría romperlo:**
- Que se revoque la contraseña de aplicación o se desactive la verificación en 2 pasos
  de `turizar@gasi.cl` → los correos fallan hasta generar una nueva.
- Que el administrador de Workspace deshabilite las contraseñas de aplicación a nivel
  organización (si eso pasa, hay que pedirle que la habilite para esta cuenta, o migrar
  a OAuth2 — más trabajo pero también posible).
- Que Google cambie sus políticas de SMTP para cuentas gratuitas en el futuro (riesgo
  bajo, pero es un servicio externo).
