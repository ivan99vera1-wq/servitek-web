import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types/service';
import { ServiceIcon } from '@/lib/icons';
import { CircuitBackground } from '@/components/ui/CircuitBackground';

interface ServiceCardProps {
  service: Service;
  /** Posición en la lista. Alimenta la numeración 01, 02, 03... */
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="card-dark group relative flex h-full flex-col overflow-hidden p-6 sm:p-8"
    >
      {/* Fondo animado de circuito, el mismo sistema que las tarjetas de
          sector: se "enciende" al pasar por encima (las trazas brillan y los
          nodos crecen desde el propio CircuitBackground). */}
      <div className="absolute inset-0" aria-hidden="true">
        <CircuitBackground
          variant={index}
          className="opacity-70 transition-opacity duration-slow ease-out-expo group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/88 to-surface-card/68" />
      </div>

      {/* Marca de agua con el número de unidad */}
      <span aria-hidden="true" className="index-watermark -top-4 right-1 text-[110px]">
        {number}
      </span>

      <div className="tech-frame" aria-hidden="true" />

      {/* Cabecera: índice + rótulo + filete que se extiende en hover */}
      <div className="relative flex items-center gap-3">
        <span className="index-number">{number}</span>
        <span
          aria-hidden="true"
          className="h-px w-6 bg-accent/50 transition-[width] duration-base ease-out-expo group-hover:w-12"
        />
        <span className="eyebrow text-white/55">UNIDAD DE NEGOCIO</span>
      </div>

      {/* min-w-0: sin él, el ancho min-content de palabras largas
          ("INFRAESTRUCTURA") desbordaba la tarjeta a 320 px. */}
      <div className="relative mt-6 flex min-w-0 flex-1 items-start gap-5 sm:gap-6">
        <div className="shrink-0 rounded-lg bg-blue/10 p-3 text-blue-text transition-[background-color,color,transform] duration-base ease-out-expo group-hover:-translate-y-0.5 group-hover:bg-blue-solid group-hover:text-white sm:p-4">
          <ServiceIcon name={service.icon} className="h-8 w-8" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="text-h3 text-white transition-colors duration-base group-hover:text-blue-text">
            {service.shortTitle}
          </h3>
          <p className="mt-3 leading-relaxed text-white/65">{service.description}</p>
        </div>
      </div>

      {/* Pie: alineado abajo, así las tarjetas de una fila cierran a la misma
          altura aunque las descripciones midan distinto. */}
      <div className="relative mt-7 flex items-center justify-between border-t border-line pt-5">
        <span className="inline-flex items-center text-sm font-medium text-white/75 transition-colors duration-base group-hover:text-blue-text">
          {service.cta}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-base ease-out-expo group-hover:translate-x-1.5" />
        </span>
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-base group-hover:opacity-100"
        />
      </div>
    </Link>
  );
}
