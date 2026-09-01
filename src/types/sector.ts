export interface Sector {
  id: string;
  title: string;
  /** Título corto en caja normal: metadatos y breadcrumbs. */
  shortTitle: string;
  slug: string;
  description: string;
  fullDescription?: string;
  problems: string[];
  solutions: string[];
  image: string;
  cta: string;
}
