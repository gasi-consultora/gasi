import {
  FileCheck2,
  ClipboardList,
  Microscope,
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
  phone: "+56 9 1234 5678",
  whatsappNumber: "56912345678",
  email: "contacto@gasi.cl",
  address: "Santiago, Chile",
};

export const whatsappLink = (message = "Hola, quisiera solicitar una asesoría ambiental.") =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Declaraciones ambientales",
    description:
      "Elaboración y presentación de Declaraciones de Impacto Ambiental (DIA) ajustadas a la normativa vigente.",
    icon: FileCheck2,
  },
  {
    title: "Permisos sectoriales",
    description:
      "Gestión integral de permisos ambientales sectoriales (PAS) para acelerar la puesta en marcha de tu proyecto.",
    icon: ClipboardList,
  },
  {
    title: "Estudios ambientales",
    description:
      "Estudios de línea base, caracterización y evaluación de impactos con equipos técnicos especializados.",
    icon: Microscope,
  },
  {
    title: "Seguimiento de RCA",
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
};

export const projects: Project[] = [
  {
    sector: "Energía",
    title: "Parque de generación renovable",
    description:
      "Tramitación de permisos sectoriales y seguimiento ambiental durante la etapa de construcción.",
  },
  {
    sector: "Inmobiliario",
    title: "Desarrollo urbano habitacional",
    description:
      "Declaración de Impacto Ambiental y gestión de permisos ante organismos municipales y sectoriales.",
  },
  {
    sector: "Industria",
    title: "Planta de procesos productivos",
    description:
      "Auditoría de cumplimiento ambiental y plan de seguimiento de la Resolución de Calificación Ambiental.",
  },
];
