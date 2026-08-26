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
