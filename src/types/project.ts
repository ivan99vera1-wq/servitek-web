export interface Project {
  id: string;
  title: string;
  sector: string;
  location: string;
  year: string;
  services: string[];
  description: string;
  /** Imagen de portada (marcador de posición hasta contar con fotos reales). */
  image: string;
  images: string[];
  featured?: boolean;
  /** Proyecto de ejemplo: no debe indexarse ni presentarse como obra ejecutada. */
  isDemo?: boolean;
}
