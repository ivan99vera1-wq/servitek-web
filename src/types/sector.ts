export interface Sector {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  problems: string[];
  solutions: string[];
  image: string;
  cta: string;
}
