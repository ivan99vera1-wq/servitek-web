import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Sector } from '@/types/sector';
import { CircuitBackground } from '@/components/ui/CircuitBackground';

interface SectorCardProps {
  sector: Sector;
  /** Índice dentro de la lista, para variar la traza animada entre tarjetas. */
  index?: number;
}

export function SectorCard({ sector, index = 0 }: SectorCardProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/sectores/${sector.slug}`}
      className="card-dark group relative flex h-full flex-col overflow-hidden p-6 sm:p-8"
    >
      {/* Fondo animado de circuito (sustituye a las fotografías de sector).
          Reacciona al hover desde el propio CircuitBackground. */}
      <div className="absolute inset-0" aria-hidden="true">
        <CircuitBackground
          variant={index}
          className="opacity-70 transition-opacity duration-slow ease-out-expo group-hover:opacity-100"
        />
        <div className="via-surface-card/88 to-surface-card/68 absolute inset-0 bg-gradient-to-t from-surface-card" />
      </div>

      <span aria-hidden="true" className="index-watermark -top-4 right-1 text-[110px]">
        {number}
      </span>

      <div className="tech-frame" aria-hidden="true" />

      {/* Cabecera */}
      <div className="relative flex items-center gap-3">
        <span className="index-number">{number}</span>
        <span
          aria-hidden="true"
          className="h-px w-6 bg-accent/50 transition-[width] duration-base ease-out-expo group-hover:w-12"
        />
        <span className="eyebrow text-white/55">SECTOR</span>
      </div>

      <div className="relative flex flex-1 flex-col">
        <h3 className="mt-6 text-h3 text-white transition-colors duration-base group-hover:text-blue-text">
          {sector.shortTitle}
        </h3>
        <p className="mt-3 leading-relaxed text-white/65">{sector.description}</p>

        {/* Problemas comunes */}
        <div className="mt-7 flex-1">
          <h4 className="eyebrow text-white/55">PROBLEMAS COMUNES</h4>
          <ul className="mt-4 space-y-2.5">
            {sector.problems.slice(0, 3).map((problem) => (
              <li key={problem} className="flex items-start gap-3 text-sm text-white/65">
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-px w-3 shrink-0 bg-accent/60 transition-[width] duration-base ease-out-expo group-hover:w-5"
                />
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mt-7 flex items-center justify-between border-t border-line pt-5">
        <span className="inline-flex items-center text-sm font-medium text-white/75 transition-colors duration-base group-hover:text-blue-text">
          {sector.cta}
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
