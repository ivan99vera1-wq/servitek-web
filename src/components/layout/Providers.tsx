'use client';

import { Analytics } from './Analytics';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
      <WhatsAppButton />
    </>
  );
}
