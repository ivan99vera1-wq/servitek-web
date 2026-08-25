import { Project } from '@/types/project';

/**
 * PROYECTOS DEMO - PLACEHOLDERS
 *
 * Estos son proyectos de ejemplo para mostrar la estructura.
 * Reemplazar con proyectos reales de SERVITEK cuando estén disponibles.
 *
 * NO afirmar que estos son proyectos realizados por SERVITEK.
 */

export const projects: Project[] = [
  {
    id: "demo-1",
    title: "Auditoría Elétrica Industrial",
    sector: "Frigoríficos",
    location: "Asunción, Paraguay",
    year: "2024",
    services: ["Auditoría y Automatización", "Termografía Infrarroja"],
    description: "Auditoría técnica completa de infraestructura eléctrica con diagnóstico termográfico y propuesta de optimización para planta procesadora.",
    images: ["/images/projects/demo-1.webp"],
    featured: true
  },
  {
    id: "demo-2",
    title: "Sistema de Iluminación Industrial",
    sector: "Agroindustria",
    location: "Región Oriental, Paraguay",
    year: "2024",
    services: ["Iluminación e Ingeniería Ex", "Eficiencia Energética"],
    description: "Diseño e implementación de sistema de iluminación LED de alta eficiencia para naves de procesamiento y almacenamiento.",
    images: ["/images/projects/demo-2.webp"],
    featured: true
  },
  {
    id: "demo-3",
    title: "Mantenimiento de Motores y HVAC",
    sector: "Sanatorios",
    location: "Asunción, Paraguay",
    year: "2024",
    services: ["Motores, Bombas y HVAC", "Mantenimiento Preventivo"],
    description: "Programa de mantenimiento preventivo para sistema de climatización central y motores eléctricos de infraestructura hospitalaria.",
    images: ["/images/projects/demo-3.webp"],
    featured: false
  },
  {
    id: "demo-4",
    title: "Infraestructura de Respaldo Energético",
    sector: "Data Centers",
    location: "Asunción, Paraguay",
    year: "2024",
    services: ["Infraestructura Eléctrica y Respaldo", "Grupos Electrógenos"],
    description: "Implementación de sistema de respaldo energético con grupos electrógenos y transferencia automática para centro de datos.",
    images: ["/images/projects/demo-4.webp"],
    featured: true
  }
];
