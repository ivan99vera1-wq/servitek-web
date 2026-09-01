'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Revelado al hacer scroll.
 *
 * El contenido se renderiza VISIBLE por defecto y solo se oculta una vez que
 * el JavaScript ha arrancado. Antes empezaba en opacity-0 y dependía de JS
 * para mostrarse: si el script fallaba o no llegaba a ejecutarse, secciones
 * enteras quedaban invisibles.
 */
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Se activa tras el montaje, así el HTML servido siempre es visible.
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const element = ref.current;
    if (!element) return;

    // Si ya está en pantalla al cargar, no se oculta: evita el parpadeo del
    // contenido que da el LCP.
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;

    setArmed(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hidden = armed && !shown;

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-out motion-reduce:transition-none',
        hidden ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100',
        className
      )}
      style={hidden ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
