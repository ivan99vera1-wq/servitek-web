import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CircuitBackground } from '@/components/ui/CircuitBackground';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  /** Rótulo monoespaciado sobre el título (SERVICIOS, SECTOR 03...). */
  eyebrow?: string;
  /** Imagen de fondo opcional (portada de servicio o proyecto). */
  image?: string;
  /** Fondo animado de circuito opcional (portada de sector), 0-3. Tiene prioridad sobre `image`. */
  animatedVariant?: number;
}

/**
 * Cabecera compartida por todas las páginas internas.
 *
 * Hereda la coreografía del hero de portada — rótulo, titular y bajada entran
 * escalonados — pero en versión corta (sin parallax ni retardos largos): es
 * una cabecera de sección, no una portada, y el visitante ya viene navegando.
 */
export function PageHero({
  title,
  subtitle,
  className,
  eyebrow,
  image,
  animatedVariant,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-line bg-surface',
        'pb-16 pt-14 md:pb-24 md:pt-20',
        className
      )}
    >
      {/* Fondo animado de circuito opcional */}
      {animatedVariant !== undefined && (
        <div className="absolute inset-0" aria-hidden="true">
          <CircuitBackground variant={animatedVariant} className="opacity-70" />
          <div className="via-surface/88 absolute inset-0 bg-gradient-to-r from-surface to-surface/55" />
        </div>
      )}

      {/* Imagen de fondo opcional */}
      {animatedVariant === undefined && image && (
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={image}
            alt=""
            fill
            className="animate-fade-in object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="via-surface/92 absolute inset-0 bg-gradient-to-r from-surface to-surface/70" />
        </div>
      )}

      <div className="tech-grid opacity-70" aria-hidden="true" />

      {/* Filete vertical de acento, alineado con el margen del contenido */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-deep/50 via-blue/25 to-transparent"
      />

      <div className="container-custom relative z-10">
        {eyebrow && (
          <div className="mb-6 flex animate-fade-up items-center gap-3">
            <span className="status-dot" aria-hidden="true" />
            <span className="eyebrow">{eyebrow}</span>
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gradient-to-r from-blue/60 to-transparent"
            />
          </div>
        )}

        <h1
          className="max-w-4xl animate-fade-up text-balance text-display text-white"
          style={{ animationDelay: '70ms' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-6 max-w-3xl animate-fade-up text-lg leading-relaxed text-white/70"
            style={{ animationDelay: '180ms' }}
          >
            {subtitle}
          </p>
        )}

        {/* Filete de cierre: se dibuja de izquierda a derecha al cargar. */}
        <div
          aria-hidden="true"
          className="rule-accent mt-10 origin-left animate-line-grow"
          style={{ animationDelay: '280ms' }}
        />
      </div>
    </section>
  );
}
