'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, pageview } from '@/lib/analytics';

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    pageview(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.gtag?.('js', new Date());
      // eslint-disable-next-line prefer-rest-params
      window.gtag?.('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    };
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return null;
}
