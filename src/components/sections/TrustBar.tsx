import { CheckCircle, Target, Settings, Clock, Users, type LucideIcon } from 'lucide-react';
import { trustSignals } from '@/data/company-content';

const icons: Record<string, LucideIcon> = { CheckCircle, Target, Settings, Clock, Users };

/**
 * Banda de confianza.
 *
 * Solo muestra los sellos que la empresa ha facilitado: no hay cifras,
 * certificaciones ni logotipos de cliente inventados. La sensación de solidez
 * viene de la composición — índice numerado, filete de acento, rejilla de
 * anchos iguales y separadores verticales — y no de datos que no existen.
 */
export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      {/* Filete superior: arranca en el rojo de acento y se disuelve en azul */}
      <div className="rule-accent absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="container-custom py-8 md:py-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
          {trustSignals.map((item, index) => {
            const Icon = icons[item.icon] ?? CheckCircle;
            return (
              <li
                key={item.text}
                className="group relative flex flex-col gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                {/* Separador vertical entre columnas, solo en escritorio */}
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-1 left-0 hidden w-px bg-line lg:block"
                  />
                )}

                <div className="flex items-center gap-2.5">
                  <span className="index-number">{String(index + 1).padStart(2, '0')}</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-4 bg-accent/40 transition-[width] duration-base ease-out-expo group-hover:w-8"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    className="mt-px h-4 w-4 shrink-0 text-blue-text transition-transform duration-base ease-out-expo group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-eyebrow uppercase leading-[1.5] text-white/70 transition-colors duration-base group-hover:text-white">
                    {item.text}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
