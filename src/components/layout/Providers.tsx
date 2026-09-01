import { Analytics } from './Analytics';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

/**
 * Elementos comunes a todas las páginas que van fuera del flujo principal.
 * No necesita 'use client': Analytics y WhatsAppButton ya declaran el suyo.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
      <WhatsAppButton />
    </>
  );
}
