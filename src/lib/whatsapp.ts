import { company } from '@/data/company';

/** URL de wa.me con el mensaje ya codificado. */
export function generateWhatsAppUrl(customMessage?: string): string {
  const phone = company.contact.whatsapp.replace(/[^0-9]/g, '');
  const message = customMessage || company.contact.whatsappMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
