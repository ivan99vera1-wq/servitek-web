'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ParallaxLayerProps {
  /**
   * Fracción del scroll que recorre la capa. 0 = fija al contenido,
   * 1 = se mueve con la página. Valores útiles aquí: 0,05–0,30.
   */
  speed: number;
  className?: string;
  children?: ReactNode;
}

/**
 * Capa con desplazamiento diferencial para el hero.
 *
 * Es lo único del sitio que anima desde JavaScript en lugar de con una
 * transición CSS, así que la regla global de `prefers-reduced-motion` de
 * globals.css NO lo cubre: la preferencia se comprueba aquí a mano y, si está
 * activa, no se llega a registrar el listener y la capa queda quieta.
 *
 * El listener es pasivo, agrupa el trabajo en un requestAnimationFrame y solo
 * escribe `transform` (propiedad compuesta): no lee geometría, no fuerza
 * reflow y no bloquea el hilo principal durante el scroll.
 */
export function ParallaxLayer({ speed, className, children }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const element = ref.current;
    if (!element) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      // Pasado el primer viewport el hero ya no se ve: se deja de escribir.
      if (y > window.innerHeight * 1.25) return;
      element.style.transform = `translate3d(0, ${(y * speed).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
