export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  city: string;
  serviceType: string;
  message: string;
  honeypot?: string; // Campo anti-spam (debe estar vacío)
}

export interface ContactFormSchema {
  name: string;
  company: string;
  phone: string;
  city: string;
  serviceType: string;
  message: string;
  honeypot?: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  formTitle: string;
  infoTitle: string;
}
