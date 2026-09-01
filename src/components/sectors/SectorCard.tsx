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
  return (
    <Link
      href={`/sectores/${sector.slug}`}
      className="card-dark relative block p-8 h-full group overflow-hidden"
    >
      {/* Fondo animado de circuito (sustituye a las fotografías de sector) */}
      <div className="absolute inset-0">
        <CircuitBackground variant={index} className="opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/85 to-surface-card/65" />
      </div>

      <div className="relative">
        <span className="font-mono text-xs text-blue-text/90">SECTOR</span>
        <h2 className="mt-2 text-xl font-bold text-white group-hover:text-blue-text transition-colors">
          {sector.shortTitle}
        </h2>
        <p className="mt-3 text-white/60">
          {sector.description}
        </p>

        {/* Problemas comunes */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-white/70 mb-2">Problemas comunes:</h3>
          <ul className="space-y-1.5">
            {sector.problems.slice(0, 3).map((problem) => (
              <li key={problem} className="text-sm text-white/60 flex items-start gap-2">
                <span className="text-blue-text mt-0.5">•</span>
                {problem}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 inline-flex items-center text-sm font-medium text-white/70 group-hover:text-blue-text transition-colors">
          {sector.cta}
          <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
