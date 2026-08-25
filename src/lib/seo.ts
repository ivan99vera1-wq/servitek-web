import { Metadata } from 'next';
import { company } from '@/data/company';

export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `https://servitek.com.py${path}`;
  const ogImage = image || '/og-image.jpg';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | SERVITEK`,
      description,
      url,
      siteName: 'SERVITEK',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_PY',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | SERVITEK`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    description: company.description,
    url: 'https://servitek.com.py',
    logo: 'https://servitek.com.py/images/logo/logo2.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.contact.phone,
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asunción',
      addressCountry: 'PY',
    },
    sameAs: Object.values(company.social).filter(Boolean),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    description: company.description,
    url: 'https://servitek.com.py',
    telephone: company.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asunción',
      addressCountry: 'PY',
    },
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
