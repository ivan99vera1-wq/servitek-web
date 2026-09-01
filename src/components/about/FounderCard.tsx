import Image from 'next/image';
import { Quote, UserRound } from 'lucide-react';
import { founder } from '@/data/company-content';

/**
 * Ficha del fundador.
 *
 * Para poner la fotografía real basta con:
 *   1. Guardar la imagen en  public/images/equipo/walter-vera.webp
 *      (recomendado: recorte vertical 3:4, mínimo 800×1067 px, < 150 KB)
 *   2. Poner esa ruta en `founder.photo` dentro de src/data/company-content.ts
 *
 * Mientras `founder.photo` esté vacío se muestra un marcador con la
 * proporción final ya reservada, así el diseño no se mueve al sustituirlo.
 */
export function FounderCard() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14">
      {/* Fotografía */}
      <div className="relative mx-auto w-full max-w-[320px]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] border border-line bg-surface-card">
          {founder.photo ? (
            <Image
              src={founder.photo}
              alt={founder.photoAlt}
              fill
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
              <UserRound className="h-14 w-14 text-blue-text/70" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                Fotografía pendiente
              </span>
            </div>
          )}
        </div>
        {/* Línea de acento */}
        <div className="absolute -bottom-3 left-6 right-6 h-[2px] bg-gradient-to-r from-blue via-blue/40 to-transparent" />
      </div>

      {/* Biografía */}
      <div>
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
          <span className="h-[1px] w-6 bg-blue" />
          FUNDADOR
        </span>

        <h3 className="text-h3 mt-4 font-bold text-white">{founder.name}</h3>
        <p className="mt-1 font-mono text-sm uppercase tracking-wide text-white/65">
          {founder.role}
        </p>

        <div className="mt-6 space-y-4">
          {founder.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed text-white/70">
              {paragraph}
            </p>
          ))}
        </div>

        {founder.quote && (
          <figure className="mt-8 border-l-2 border-blue pl-5">
            <Quote className="mb-2 h-5 w-5 text-blue-text" aria-hidden="true" />
            <blockquote className="text-lg italic leading-relaxed text-white/80">
              {founder.quote}
            </blockquote>
            <figcaption className="mt-3 font-mono text-xs uppercase tracking-wide text-white/60">
              {founder.name}
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}
