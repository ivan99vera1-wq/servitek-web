import { company } from '@/data/company';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName || company.name,
    alternateName: company.name,
    description: company.description,
    url: 'https://servitek.com.py',
    logo: 'https://servitek.com.py/images/logo/logo2.png',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'RUC',
      value: company.ruc,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.contact.phone,
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    email: company.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asunción',
      addressCountry: 'PY',
    },
    // TODO: Confirmar URLs reales de redes sociales antes de publicar
    sameAs: [],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.legalName || company.name,
    description: company.description,
    url: 'https://servitek.com.py',
    telephone: company.contact.phone,
    email: company.contact.email,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'RUC',
      value: company.ruc,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asunción',
      addressCountry: 'PY',
    },
    // TODO: Reemplazar con coordenadas reales de la oficina de SERVITEK
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.2637,
      longitude: -57.5759,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  };
}

export function generateServiceSchema(services: Array<{ name: string; description: string; url: string }>) {
  return services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `https://servitek.com.py${service.url}`,
    provider: {
      '@type': 'Organization',
      name: company.legalName || company.name,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Paraguay',
    },
  }));
}
