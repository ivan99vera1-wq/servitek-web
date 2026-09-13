import { Analytics } from './Analytics';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import Aurora from '@/components/ui/Aurora';

/**
 * Elementos comunes a todas las páginas que van fuera del flujo principal.
 * No necesita 'use client': Analytics, WhatsAppButton y Aurora ya declaran
 * el suyo.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fondo ambiental (React Bits). Una sola instancia WebGL, fija detrás
          de todo el sitio (z-index negativo) y sin pointer-events: se
          entrevé a través de las tarjetas y secciones, a las que se les bajó
          la opacidad un 8% (ver card-dark en globals.css y los fondos de
          sección). Evita instanciar un canvas por tarjeta: los navegadores
          limitan los contextos WebGL simultáneos por pestaña. Aurora pinta
          con alpha: lo que queda detrás es el navy del <body>. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden opacity-40"
      >
        {/* opacity-40 en la capa, no en los colores: Aurora concentra el
            brillo en la franja alta del viewport, que es justo donde cae el
            <h1> blanco de PageHero en las páginas internas. A intensidad
            completa el stop claro (#e7e8ee) quedaba detrás de texto blanco y
            rompía el contraste AA que documenta tailwind.config.ts. Subir
            este valor lo hace más protagonista; bajarlo, más ambiental. */}
        <Aurora colorStops={['#f10404', '#e7e8ee', '#2904cf']} blend={0.32} amplitude={1.0} speed={0.5} />
      </div>

      {children}
      <Analytics />
      <WhatsAppButton />
    </>
  );
}
