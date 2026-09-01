import { Metadata } from 'next';
import { absoluteUrl, IS_INDEXABLE } from '@/lib/site';

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Fuerza noindex en esta página aunque el sitio sea indexable (contenido provisional). */
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image || '/og-image.jpg';
  const index = IS_INDEXABLE && !noIndex;

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
    robots: {
      index,
      follow: index,
    },
  };
}
