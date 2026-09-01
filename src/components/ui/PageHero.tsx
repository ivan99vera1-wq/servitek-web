import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  /** Imagen de fondo opcional (portada de sector, servicio o proyecto). */
  image?: string;
}

export function PageHero({ title, subtitle, className, image }: PageHeroProps) {
  return (
    <section
      className={cn(
        'bg-surface py-16 md:py-24 relative overflow-hidden',
        className
      )}
    >
      {/* Imagen de fondo opcional */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/70" />
        </div>
      )}

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="page-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#page-grid)" />
        </svg>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy to-transparent" />

      <div className="container-custom relative z-10">
        <h1 className="text-h1 md:text-display text-white text-balance">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/65 max-w-3xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
