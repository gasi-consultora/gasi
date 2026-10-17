import {
  FileCheck2,
  ClipboardList,
  Radar,
  Landmark,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "GASI",
  fullName: "GASI Consultora Ambiental",
  tagline: "Asesoría ambiental que le da tranquilidad a tu proyecto",
  description:
    "Acompañamos a empresas y proyectos en toda su gestión ambiental: declaraciones, permisos sectoriales, estudios, seguimiento de RCA y relación con organismos públicos.",
  phone: "+56 9 9215 5960",
  whatsappNumber: "56992155960",
  email: "hernangp@gasi.cl",
  address: "Marcoleta 540, Santiago, Chile",
};

export const whatsappLink = (message = "Hola, quisiera solicitar una asesoría ambiental.") =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
  { label: "FAQ", href: "/faq" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Estudios y declaraciones de impacto ambiental",
    description:
      "Elaboración y presentación de Estudios de Impacto Ambiental (EIA) y Declaraciones de Impacto Ambiental (DIA) ajustadas a la normativa vigente.",
    icon: FileCheck2,
  },
  {
    title: "Permisos sectoriales",
    description:
      "Gestión integral de permisos ambientales sectoriales (PAS) para acelerar la puesta en marcha de tu proyecto.",
    icon: ClipboardList,
  },
  {
    title: "Implementación y seguimiento de RCA",
    description:
      "Monitoreo y control del cumplimiento de las Resoluciones de Calificación Ambiental durante todo el ciclo del proyecto.",
    icon: Radar,
  },
  {
    title: "Gestión con organismos públicos",
    description:
      "Representamos tu proyecto ante SEA, SMA, municipios y demás organismos fiscalizadores.",
    icon: Landmark,
  },
  {
    title: "Auditorías",
    description:
      "Auditorías de cumplimiento ambiental para anticipar riesgos y fortalecer la gestión de tu operación.",
    icon: ShieldCheck,
  },
];

export type WhyUsItem = {
  title: string;
  description: string;
};

export const whyUsItems: WhyUsItem[] = [
  {
    title: "Experiencia",
    description:
      "Años acompañando proyectos de distintos sectores en todas las etapas de su gestión ambiental.",
  },
  {
    title: "Rapidez",
    description:
      "Procesos ágiles y plazos claros, para que tu proyecto no pierda tiempo por trámites.",
  },
  {
    title: "Atención personalizada",
    description:
      "Un equipo cercano que entiende tu proyecto y te acompaña en cada decisión.",
  },
  {
    title: "Ingenieros especializados",
    description:
      "Profesionales con formación técnica específica en normativa y gestión ambiental.",
  },
];

export type Project = {
  sector: string;
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    sector: "Avícola",
    title: "Avícola Eduardo Reinero",
    description:
      "DIA de regularización de plantel de aves, Región del Maule.",
    image: "/images/proyecto-avicola.jpg",
  },
  {
    sector: "Inmobiliario",
    title: "Cacique Sur",
    description:
      "Seguimiento e implementación de RCA en DIA del proyecto inmobiliario, Región Metropolitana.",
    image: "/images/proyecto-inmobiliario.jpg",
  },
  {
    sector: "Energía",
    title: "Parque fotovoltaico Sol de Algarrobal",
    description:
      "Participación en la elaboración del Estudio de Impacto Ambiental (EIA) del proyecto, IV Región de Atacama.",
    image: "/images/proyecto-energia.jpg",
  },
  {
    sector: "Sanitario",
    title: "Planta Desaladora \"Enapac\"",
    description:
      "Participación en la elaboración del Estudio de Impacto Ambiental (EIA) del proyecto, IV Región de Atacama.",
    image: "/images/proyecto-sanitario.jpg",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "¿Qué es el SEIA?",
    answer:
      "El Sistema de Evaluación de Impacto Ambiental (SEIA) es el mecanismo legal, administrado por el Servicio de Evaluación Ambiental (SEA), mediante el cual el Estado de Chile evalúa si los proyectos o actividades que pueden generar impacto ambiental cumplen con la normativa vigente antes de ejecutarse. Está establecido en la Ley 19.300 sobre Bases Generales del Medio Ambiente.",
  },
  {
    question: "¿Qué es una Declaración de Impacto Ambiental (DIA)?",
    answer:
      "Es el instrumento de evaluación ambiental que se presenta cuando un proyecto no genera efectos, características o circunstancias que ameriten la elaboración de un Estudio de Impacto Ambiental. Es un proceso más acotado que un EIA, pero igual requiere cumplir con toda la normativa sectorial aplicable.",
  },
  {
    question: "¿Qué es un Estudio de Impacto Ambiental (EIA)?",
    answer:
      "Es el instrumento de evaluación más completo dentro del SEIA, exigido cuando un proyecto puede generar alguno de los efectos significativos descritos en el artículo 11 de la Ley 19.300 (por ejemplo, riesgo para la salud de la población, afectación de recursos naturales renovables o reasentamiento de comunidades, entre otros). Incluye una Línea de Base ambiental detallada y, por ley, un proceso de participación ciudadana.",
  },
  {
    question: "¿Cuál es la diferencia entre una DIA y un EIA?",
    answer:
      "La principal diferencia es la magnitud de los impactos esperados del proyecto. Una DIA se presenta cuando no hay efectos significativos previstos; un EIA se exige cuando sí los hay. El EIA es un proceso más extenso, con mayor nivel de estudio técnico y participación ciudadana obligatoria, mientras que en la DIA la participación ciudadana es más acotada.",
  },
  {
    question: "¿Qué es la RCA y por qué es importante?",
    answer:
      "La Resolución de Calificación Ambiental (RCA) es el documento que emite la autoridad al aprobar o rechazar un EIA o DIA. Si el proyecto es aprobado, la RCA establece las condiciones, compromisos y medidas ambientales que el titular debe cumplir durante toda la vida del proyecto. Por eso el seguimiento posterior es tan relevante como la tramitación inicial.",
  },
  {
    question: "¿Qué son los Permisos Ambientales Sectoriales (PAS)?",
    answer:
      "Son autorizaciones sectoriales (por ejemplo, de la Dirección General de Aguas, CONAF o la autoridad sanitaria, entre otros organismos) que, cuando corresponde, se tramitan de forma integrada dentro del proceso de evaluación ambiental, evitando que el titular deba gestionarlas por separado ante cada organismo.",
  },
  {
    question: "¿Cuánto dura el proceso de evaluación ambiental?",
    answer:
      "Los plazos los define la ley según el tipo de instrumento (DIA o EIA) y pueden extenderse si la autoridad solicita aclaraciones o ampliaciones (adenda). En general, una DIA tiene un proceso más corto que un EIA, pero el plazo real depende de la complejidad del proyecto y de la calidad de los antecedentes presentados desde el inicio.",
  },
  {
    question: "¿Qué pasa si mi proyecto no cumple con la RCA?",
    answer:
      "El incumplimiento de las condiciones establecidas en la RCA puede derivar en fiscalización y sanciones por parte de la Superintendencia del Medio Ambiente (SMA), que van desde amonestaciones hasta multas o, en casos graves, la revocación de la autorización. Por eso es clave contar con un plan de seguimiento ambiental activo durante toda la operación del proyecto.",
  },
  {
    question: "¿Necesito seguimiento ambiental después de obtener la RCA?",
    answer:
      "Sí. Obtener la RCA no es el final del proceso: la mayoría de los proyectos quedan sujetos a compromisos de monitoreo y reporte periódico ante la autoridad. Un seguimiento ordenado reduce el riesgo de incumplimientos y facilita la relación con los organismos fiscalizadores a lo largo de la vida del proyecto.",
  },
  {
    question: "¿Cómo sé si mi proyecto debe ingresar al SEIA?",
    answer:
      "La Ley 19.300 y su reglamento establecen tipologías de proyectos que deben ingresar al SEIA (ciertos proyectos industriales, inmobiliarios, energéticos o agropecuarios, entre otros). Si tienes dudas sobre si tu proyecto está obligado a ingresar y bajo qué instrumento, lo recomendable es hacer un análisis de pertinencia antes de iniciar. En GASI podemos ayudarte con esa evaluación inicial.",
  },
];
