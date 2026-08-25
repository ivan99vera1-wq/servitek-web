import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B2342" />
        <link rel="canonical" href="https://servitek.com.py" />
      </head>
      <body className="min-h-screen bg-background font-sans">
        {children}
      </body>
    </html>
  );
}
