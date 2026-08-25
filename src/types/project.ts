export interface Project {
  id: string;
  title: string;
  sector: string;
  location: string;
  year: string;
  services: string[];
  description: string;
  images: string[];
  featured?: boolean;
}
