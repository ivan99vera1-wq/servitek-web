export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function track(event: string, params: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', event, params);
}

export const pageview = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
};

export const trackWhatsAppClick = () =>
  track('whatsapp_click', { event_category: 'engagement', event_label: 'contact_whatsapp' });

export const trackFormSubmit = (formType: string) =>
  track('form_submit', { event_category: 'engagement', event_label: formType });
