import { Sector } from '@/types/sector';

export const sectors: Sector[] = [
  {
    id: "agroindustria",
    title: "AGROINDUSTRIA Y SILOS",
    shortTitle: "Agroindustria y Silos",
    slug: "agroindustria-y-silos",
    description: "Soluciones eléctricas para plantas de procesamiento agroindustrial, silos de almacenamiento y centros de acopio que requieren alta disponibilidad energética.",
    problems: [
      "Paradas no programadas por fallas eléctricas",
      "Pérdidas de producto por cortes de energía",
      "Equipos obsoletos sin repuestos",
      "Instalaciones que no cumplen normativas"
    ],
    solutions: [
      "Auditoría y modernización de tableros",
      "Sistemas de respaldo energético",
      "Mantenimiento preventivo de motores",
      "Iluminación de naves industriales",
      "Automatización de procesos"
    ],
    image: "/images/sectors/agroindustria.webp",
    cta: "Ver soluciones"
  },
  {
    id: "frigorificos",
    title: "FRIGORÍFICOS Y LOGÍSTICA",
    shortTitle: "Frigoríficos y Logística",
    slug: "frigorificos-y-logistica",
    description: "Infraestructura eléctrica crítica para frigoríficos, centros de distribución y operaciones logísticas donde la temperatura controlada es esencial.",
    problems: [
      "Fallas en sistemas de refrigeración",
      "Pérdidas económicas por rotura de cadena de frío",
      "Sobrecalentamiento de equipos",
      "Infraestructura eléctrica insuficiente"
    ],
    solutions: [
      "Mantenimiento de compresores y motores",
      "Sistemas de transferencia automática (ATS)",
      "Monitoreo termográfico",
      "Corrección del factor de potencia",
      "Grupos electrógenos de respaldo"
    ],
    image: "/images/sectors/frigorificos.webp",
    cta: "Ver soluciones"
  },
  {
    // Sector señalado por la empresa en su referencia visual como "ALCOOLERA".
    // Se usa la grafía castellana ("alcoholera"), que es la habitual en Paraguay.
    id: "alcoholeras",
    title: "ALCOHOLERAS Y DESTILERÍAS",
    shortTitle: "Alcoholeras y Destilerías",
    slug: "alcoholeras-y-destilerias",
    description: "Ingeniería eléctrica para plantas de alcohol y etanol, donde conviven atmósferas explosivas, operación continua de zafra y equipos de proceso que no admiten parada.",
    problems: [
      "Áreas clasificadas por vapores de alcohol sin instalaciones certificadas",
      "Paradas en plena zafra con pérdida directa de producción",
      "Corrosión y humedad degradando tableros y motores",
      "Falta de automatización en fermentación y destilación"
    ],
    solutions: [
      "Iluminación y equipamiento para áreas clasificadas",
      "Automatización de procesos con PLC y variadores",
      "Mantenimiento de bombas, centrífugas y motores de proceso",
      "Tableros para ambientes corrosivos y húmedos",
      "Respaldo energético y transferencia automática"
    ],
    image: "/images/sectors/alcoholeras.webp",
    cta: "Ver soluciones"
  },
  {
    id: "maquilas",
    title: "MAQUILAS Y FÁBRICAS",
    shortTitle: "Maquilas y Fábricas",
    slug: "maquilas-y-fabricas",
    description: "Soluciones integrales para plantas manufactureras, maquiladoras y fábricas que demandan alta eficiencia operativa y continuidad de producción.",
    problems: [
      "Paradas de línea por fallas eléctricas",
      "Equipos con bajo rendimiento energético",
      "Falta de automatización en procesos",
      "Riesgos por instalaciones deficientes"
    ],
    solutions: [
      "Automatización con PLC y variadores",
      "Mantenimiento de motores y bombas",
      "Diseño de tableros industriales",
      "Alineación láser y balanceo",
      "Optimización energética"
    ],
    image: "/images/sectors/maquilas.webp",
    cta: "Ver soluciones"
  },
  {
    id: "edificios",
    title: "EDIFICIOS COMERCIALES Y SANATORIOS",
    shortTitle: "Edificios Comerciales y Sanatorios",
    slug: "edificios-comerciales-y-sanatorios",
    description: "Infraestructura eléctrica para edificios comerciales, centros médicos, sanatorios y espacios que requieren sistemas confiables y seguros.",
    problems: [
      "Sistemas eléctricos obsoletos",
      "Fallas en climatización (HVAC)",
      "Riesgos eléctricos en áreas sensibles",
      "Alto consumo energético"
    ],
    solutions: [
      "Mantenimiento de HVAC y chillers",
      "Infraestructura eléctrica hospitalaria",
      "Sistemas de iluminación de emergencia",
      "Auditorías de eficiencia energética",
      "Tableros de distribución"
    ],
    image: "/images/sectors/edificios.webp",
    cta: "Ver soluciones"
  }
];
