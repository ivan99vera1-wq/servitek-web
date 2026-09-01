import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL, IS_INDEXABLE } from '@/lib/site';
import { Providers } from '@/components/layout/Providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'SERVITEK | Soluciones Eléctricas y Electromecánicas en Paraguay',
    template: '%s | SERVITEK',
  },
  description:
    'SERVITEK ofrece soluciones de ingeniería eléctrica, electromecánica, automatización, mantenimiento, infraestructura y respaldo energético para industrias en Paraguay.',
  keywords: [
    'empresa eléctrica Paraguay',
    'ingeniería eléctrica Paraguay',
    'mantenimiento industrial Paraguay',
    'automatización industrial Paraguay',
    'electromecánica Paraguay',
    'tableros eléctricos Paraguay',
    'grupos electrógenos Paraguay',
    'mantenimiento de motores Paraguay',
    'infraestructura eléctrica Paraguay',
    'HVAC industrial Paraguay',
  ],
  authors: [{ name: 'SERVITEK' }],
  creator: 'SERVITEK',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_PY',
    url: SITE_URL,
    siteName: 'SERVITEK',
    title: 'SERVITEK | Soluciones Eléctricas y Electromecánicas en Paraguay',
    description:
      'Soluciones de ingeniería eléctrica, electromecánica, automatización, mantenimiento, infraestructura y respaldo energético para industrias en Paraguay.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SERVITEK - Soluciones Eléctricas Industriales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SERVITEK | Soluciones Eléctricas y Electromecánicas en Paraguay',
    description:
      'Soluciones de ingeniería eléctrica, electromecánica, automatización, mantenimiento, infraestructura y respaldo energético para industrias en Paraguay.',
    images: ['/og-image.jpg'],
  },
  // Mientras no haya dominio propio el sitio no debe indexarse (ver lib/site.ts).
  robots: {
    index: IS_INDEXABLE,
    follow: IS_INDEXABLE,
    googleBot: {
      index: IS_INDEXABLE,
      follow: IS_INDEXABLE,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#061321" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen font-sans">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-blue-solid focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        <Providers>
          <Navbar />
          <main id="contenido">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
