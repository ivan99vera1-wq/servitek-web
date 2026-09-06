import { Analytics } from './Analytics';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import SplashCursor from '@/components/ui/SplashCursor';
import GhostFibers from '@/components/ui/GhostFibers';

/**
 * Elementos comunes a todas las páginas que van fuera del flujo principal.
 * No necesita 'use client': Analytics, WhatsAppButton, SplashCursor y
 * GhostFibers ya declaran el suyo.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fondo ambiental (React Bits). Una sola instancia WebGL, fija detrás
          de todo el sitio (z-index negativo) y sin pointer-events: se
          entrevé a través de las tarjetas y secciones, a las que se les bajó
          la opacidad un 8% (ver card-dark en globals.css y los fondos de
          sección). Evita instanciar un canvas por tarjeta: los navegadores
          limitan los contextos WebGL simultáneos por pestaña. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
      >
        <GhostFibers
          lineColor="#0A1F35"
          glowColor="#0878F9"
          speed={0.12}
          scale={2.4}
          rotation={-15}
          rotationSpeed={0.02}
          layers={3}
          waveAmplitude={0.012}
          brightness={1.1}
          glowIntensity={1.1}
          vignette={0.9}
          grain={0.03}
          fps={30}
          dpr={1}
        />
      </div>

      {children}
      <Analytics />
      <WhatsAppButton />
      {/* Efecto decorativo de cursor (React Bits). RAINBOW_MODE en false y
          COLOR en el azul de marca para no introducir tonos fuera de la
          paleta documentada en tailwind.config.ts. pointerEvents: 'none' en
          el propio componente: nunca bloquea clics ni el formulario. */}
      <SplashCursor COLOR="#3D9BFF" RAINBOW_MODE={false} />
    </>
  );
}
