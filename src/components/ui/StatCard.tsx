import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn('trust-indicator', className)}>
      {/* El tamaño arranca menor y crece con el viewport: valores de texto
          largos ("Paraguay") desbordaban la celda a 320 px con text-stat fijo. */}
      <span className="trust-indicator-value font-mono text-3xl sm:text-4xl md:text-stat break-words">
        {value}
      </span>
      <span className="trust-indicator-label">{label}</span>
    </div>
  );
}
