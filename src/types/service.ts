export interface Service {
  id: string;
  title: string;
  /** Título corto en caja normal: metadatos, breadcrumbs y tarjetas. */
  shortTitle: string;
  slug: string;
  description: string;
  fullDescription?: string;
  icon: string;
  solutions: string[];
  problemsSolved?: string[];
  technicalScope?: string[];
  clients?: string[];
  image: string;
  cta: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isCta?: boolean;
}
