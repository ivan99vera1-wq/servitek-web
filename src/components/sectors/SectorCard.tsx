import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Sector } from '@/types/sector';

interface SectorCardProps {
  sector: Sector;
}

export function SectorCard({ sector }: SectorCardProps) {
  return (
    <Link
      href={`/sectores/${sector.slug}`}
      className="card-dark block p-8 h-full group"
    >
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
    </Link>
  );
}
