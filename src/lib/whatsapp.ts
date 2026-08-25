import { company } from '@/data/company';

export function generateWhatsAppUrl(customMessage?: string): string {
  const phone = company.contact.whatsapp.replace(/[^0-9]/g, '');
  const message = customMessage || company.contact.whatsappMessage;
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function openWhatsApp(customMessage?: string): void {
  const url = generateWhatsAppUrl(customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
}
