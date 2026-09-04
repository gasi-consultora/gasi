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
};

export const projects: Project[] = [
  {
    sector: "Avícola",
    title: "Avícola Eduardo Reinero",
    description:
      "DIA de regularización de plantel de aves, Región del Maule.",
  },
  {
    sector: "Inmobiliario",
    title: "Cacique Sur",
    description:
      "Seguimiento e implementación de RCA en DIA del proyecto inmobiliario, Región Metropolitana.",
  },
  {
    sector: "Energía",
    title: "Parque fotovoltaico Sol de Algarrobal",
    description:
      "Participación en la elaboración del Estudio de Impacto Ambiental (EIA) del proyecto, IV Región de Atacama.",
  },
  {
    sector: "Sanitario",
    title: "Planta Desaladora \"Enapac\"",
    description:
      "Participación en la elaboración del Estudio de Impacto Ambiental (EIA) del proyecto, IV Región de Atacama.",
  },
];
