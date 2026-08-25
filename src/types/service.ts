export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  icon: string;
  solutions: string[];
  clients?: string[];
  image: string;
  cta: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isCta?: boolean;
}
