'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, pageview } from '@/lib/analytics';

/**
 * Google Analytics 4.
 *
 * No se carga nada si NEXT_PUBLIC_GA_MEASUREMENT_ID está vacío, que es el
 * estado actual: hoy el sitio no instala ninguna cookie.
 *
 * IMPORTANTE antes de activarlo: cargar GA implica cookies de terceros, así
 * que hará falta banner de consentimiento y política de cookies redactada.
 */
export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    pageview(pathname);
  }, [pathname]);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
