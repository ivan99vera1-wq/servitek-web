import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  /** Posición en la banda, para la numeración 01, 02, 03. */
  index?: number;
  className?: string;
}

/**
 * Dato de la banda de cifras de Nosotros.
 *
 * Los valores no son todos numéricos ("24/7", "Paraguay"), así que el tamaño
 * arranca pequeño y crece con el viewport: con `text-stat` fijo, "Paraguay"
 * desbordaba la celda a 320 px.
 */
export function StatCard({ value, label, index, className }: StatCardProps) {
  return (
    <div
      className={cn('group relative flex flex-col gap-4 px-2 py-10 sm:px-8 md:py-14', className)}
    >
      {/* Separador vertical entre celdas (solo a partir de la segunda). */}
      {index !== undefined && index > 0 && (
        <span
          aria-hidden="true"
          className="absolute inset-y-8 left-0 hidden w-px bg-line sm:block"
        />
      )}

      {index !== undefined && (
        <div className="flex items-center gap-2.5">
          <span className="index-number">{String(index + 1).padStart(2, '0')}</span>
          <span
            aria-hidden="true"
            className="h-px w-5 bg-accent/50 transition-[width] duration-base ease-out-expo group-hover:w-10"
          />
        </div>
      )}

      <span className="break-words font-mono text-3xl font-bold tabular-nums text-white sm:text-4xl md:text-stat">
        {value}
      </span>

      <span className="font-mono text-eyebrow uppercase leading-[1.5] text-white/55">{label}</span>
    </div>
  );
}
