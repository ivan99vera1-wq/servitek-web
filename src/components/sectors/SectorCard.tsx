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
      className="card-industrial block p-8 h-full group"
    >
      <span className="label-engineering text-accent">SECTOR</span>
      <h2 className="mt-2 text-xl font-bold text-primary group-hover:text-accent transition-colors">
        {sector.title}
      </h2>
      <p className="mt-3 text-text-muted">
        {sector.description}
      </p>

      {/* Problemas comunes */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-text mb-2">Problemas comunes:</h3>
        <ul className="space-y-1">
          {sector.problems.slice(0, 3).map((problem) => (
            <li key={problem} className="text-sm text-text-muted flex items-start gap-2">
              <span className="text-accent">•</span>
              {problem}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
        {sector.cta}
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
