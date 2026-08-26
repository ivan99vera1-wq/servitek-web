export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'contact_whatsapp',
    });
  }
};

export const trackFormSubmit = (formType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
    });
  }
};

export const trackServiceView = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_view', {
      event_category: 'content',
      event_label: serviceName,
    });
  }
};

export const trackCtaClick = (ctaLabel: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: ctaLabel,
    });
  }
};
