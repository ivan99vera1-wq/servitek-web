import { NavigationItem } from '@/types/service';

export const navigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sectores", href: "/sectores" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" }
];

export const footerNavigation: NavigationItem[] = [
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
  { label: "Términos y Condiciones", href: "/terminos-y-condiciones" }
];

export const ctaNavigation: NavigationItem = {
  label: "SOLICITAR PRESUPUESTO",
  href: "/contacto",
  isCta: true
};
