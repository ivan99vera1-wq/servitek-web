import { CheckCircle, Target, Settings, Clock, Users, type LucideIcon } from 'lucide-react';
import { trustSignals } from '@/data/company-content';

const icons: Record<string, LucideIcon> = { CheckCircle, Target, Settings, Clock, Users };

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface">
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue/30 to-transparent" />

      <div className="container-custom py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
          {trustSignals.map((item, index) => {
            const Icon = icons[item.icon] ?? CheckCircle;
            return (
              <li key={item.text} className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0 text-blue-text" aria-hidden="true" />
                <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.15em] text-white/65 md:text-xs">
                  {item.text}
                </span>
                {index < trustSignals.length - 1 && (
                  <span className="ml-6 hidden h-4 w-[1px] bg-white/10 md:block" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
