import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: "iluminacion",
    title: "ILUMINACIÓN INDUSTRIAL, ÁREAS PÚBLICAS Y ATMÓSFERAS EXPLOSIVAS",
    slug: "iluminacion-e-ingenieria-ex",
    description: "Diseño, cálculo lumínico y montaje de sistemas de iluminación de alta eficiencia para plantas industriales, naves logísticas y centros de distribución.",
    fullDescription: "Ofrecemos soluciones completas de iluminación industrial que optimizan el consumo energético y mejoran las condiciones de trabajo. Nuestro equipo especializado diseña sistemas de iluminación para entornos de alta exigencia, incluyendo áreas clasificadas con riesgo de atmósfera explosiva.",
    icon: "Lightbulb",
    problemsSolved: [
      "Consumo energético excesivo por iluminación obsoleta",
      "Condiciones de trabajo deficientes por mala iluminación",
      "Incumplimiento de normativas de seguridad en áreas clasificadas",
      "Paradas no programadas por fallas en sistemas de iluminación",
      "Falta de iluminación de emergencia en zonas críticas"
    ],
    solutions: [
      "Iluminación de plantas industriales",
      "Iluminación vial y alumbrado público",
      "Iluminación de estadios y parques urbanos",
      "Perímetros de seguridad",
      "Alumbrado público inteligente",
      "Luminarias antiexplosivas para áreas clasificadas",
      "Cálculo lumínico y eficiencia energética"
    ],
    technicalScope: [
      "Estudio lumínico y cálculo de iluminancia",
      "Selección de luminarias y materiales",
      "Diseño de circuitos y protecciones",
      "Instalación y montaje eléctrico",
      "Puesta en marcha y pruebas",
      "Documentación técnica y as-built"
    ],
    clients: [
      "Silos",
      "Plantas químicas",
      "Refinerías",
      "Estaciones de servicio",
      "Municipios",
      "Corporaciones logísticas"
    ],
    image: "/images/services/iluminacion.webp",
    cta: "Conocer servicio"
  },
  {
    id: "auditoria",
    title: "AUDITORÍA Y AUTOMATIZACIÓN DE TABLEROS ELÉCTRICOS",
    slug: "auditoria-y-automatizacion",
    description: "Auditoría técnica, diagnóstico de tableros, termografía infrarroja, diseño, armado y montaje de tableros eléctricos industriales.",
    fullDescription: "Nuestro equipo realiza auditorías técnicas completas de infraestructura eléctrica, identificando puntos críticos y proponiendo soluciones de automatización que mejoran la eficiencia y seguridad de sus operaciones.",
    icon: "Cog",
    problemsSolved: [
      "Tableros eléctricos obsoletos sin mantenimiento",
      "Sobrecalentamiento detectado por termografía",
      "Factor de potencia bajo generando multas y consumo excesivo",
      "Falta de automatización en procesos productivos",
      "Paradas de línea por fallas en tableros de control"
    ],
    solutions: [
      "Auditoría técnica de tableros",
      "Diagnóstico y termografía infrarroja",
      "Diseño y armado de tableros",
      "Bancos de capacitores",
      "Corrección del factor de potencia",
      "Tableros ATS (Transferencia automática)",
      "Variadores de frecuencia",
      "Arrancadores suaves",
      "Programación de PLC"
    ],
    technicalScope: [
      "Inspección visual y termográfica",
      "Diagnóstico de parámetros eléctricos",
      "Diseño de esquemas unifilares",
      "Armado y cableado de tableros",
      "Configuración de PLCs y variadores",
      "Pruebas de funcionalidad",
      "Puesta en marcha",
      "Documentación técnica"
    ],
    clients: [
      "Plantas de alimentos",
      "Silos",
      "Laboratorios",
      "Maquiladoras",
      "Fábricas"
    ],
    image: "/images/services/auditoria.webp",
    cta: "Conocer servicio"
  },
  {
    id: "motores",
    title: "MANTENIMIENTO DE MOTORES, BOMBAS Y HVAC",
    slug: "motores-bombas-hvac",
    description: "Mantenimiento preventivo y correctivo de motores eléctricos, sistemas de bombeo, HVAC, chillers y torres de enfriamiento.",
    fullDescription: "Brindamos servicios especializados de mantenimiento para equipos mecánicos y sistemas de climatización industrial. Nuestro equipo técnico realiza diagnósticos precisos y mantenimiento que prolonga la vida útil de los equipos.",
    icon: "Wrench",
    problemsSolved: [
      "Paradas no programadas por fallas en motores",
      "Degradación prematura de rodamientos y sellos",
      "Sobrecalentamiento en sistemas de bombeo",
      "Falla en sistemas HVAC afectando producción",
      "Alto consumo energético por equipos desalineados"
    ],
    solutions: [
      "Mantenimiento preventivo y correctivo",
      "Motores eléctricos trifásicos",
      "Motorreductores y extractores",
      "Sistemas de bombeo",
      "Alineación láser",
      "Cambio de rodamientos y sellos mecánicos",
      "Limpieza técnica",
      "HVAC, chillers y UMA",
      "Torres de enfriamiento",
      "Megado y resistencia de aislamiento",
      "Termografía y parámetros termodinámicos"
    ],
    technicalScope: [
      "Diagnóstico por vibraciones",
      "Termografía infrarroja",
      "Megado de aislamiento",
      "Alineación láser de ejes",
      "Cambio de rodamientos",
      "Balanceo dinámico",
      "Pruebas de rendimiento",
      "Informe técnico con recomendaciones"
    ],
    clients: [
      "Frigoríficos",
      "Plantas de tratamiento de agua",
      "Industrias metalúrgicas",
      "Laboratorios",
      "Sanatorios y hospitales",
      "Data centers",
      "Complejos comerciales"
    ],
    image: "/images/services/motores.webp",
    cta: "Conocer servicio"
  },
  {
    id: "infraestructura",
    title: "INFRAESTRUCTURA ELÉCTRICA Y RESPALDO DE ENERGÍA",
    slug: "infraestructura-electrica-respaldo",
    description: "Puestos de distribución, transformadores, bandejas portacables, puesta a tierra, cableado de potencia y grupos electrógenos.",
    fullDescription: "Diseñamos e implementamos infraestructura eléctrica completa para industrias que requieren alta disponibilidad energética. Nuestro servicio incluye mantenimiento preventivo de grupos electrógenos y sistemas de respaldo.",
    icon: "Zap",
    problemsSolved: [
      "Falta de respaldo energético ante cortes de energía",
      "Infraestructura eléctrica obsoleta o insuficiente",
      "Paradas de producción por indisponibilidad de energía",
      "Grupos electrógenos sin mantenimiento preventivo",
      "Distribución eléctrica ineficiente en planta"
    ],
    solutions: [
      "Puestos de distribución",
      "Transformadores de potencia",
      "Bandejas portacables",
      "Sistemas de puesta a tierra",
      "Cableado de potencia",
      "Instalaciones de maquinaria pesada",
      "Grupos electrógenos",
      "Mantenimiento preventivo de generadores",
      "Filtros, lubricantes y correas",
      "Baterías de respaldo",
      "Guardia técnica 24/7"
    ],
    technicalScope: [
      "Diseño de distribución eléctrica",
      "Cálculo de cargas y selección de equipos",
      "Instalación de transformadores",
      "Montaje de bandejas portacables",
      "Tendido de cableado de potencia",
      "Pruebas de puesta a tierra",
      "Puesta en marcha de grupos electrógenos",
      "Mantenimiento programado de generadores"
    ],
    clients: [
      "Depósitos logísticos",
      "Frigoríficos",
      "Sanatorios",
      "Supermercados",
      "Data centers",
      "Plantas industriales"
    ],
    image: "/images/services/infraestructura.webp",
    cta: "Conocer servicio"
  }
];
