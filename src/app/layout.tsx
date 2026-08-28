import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/schema';
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
  metadataBase: new URL('https://servitek.com.py'),
  openGraph: {
    type: 'website',
    locale: 'es_PY',
    url: 'https://servitek.com.py',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
        <link rel="icon" href="/logo-s.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-s.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
