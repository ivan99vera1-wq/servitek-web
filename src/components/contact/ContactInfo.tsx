import { Phone, Mail, MapPin, Clock, type LucideIcon } from 'lucide-react';
import { company } from '@/data/company';
import { businessHours } from '@/data/company-content';

/** Fila de la ficha: icono, rótulo monoespaciado y contenido. */
function InfoRow({
  icon: Icon,
  label,
  index,
  children,
}: {
  icon: LucideIcon;
  label: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <li className="group flex items-start gap-4 border-t border-line pt-6 first:border-t-0 first:pt-0">
      <div className="shrink-0 rounded-lg bg-blue/10 p-3 text-blue-text transition-[background-color,color,transform] duration-base ease-out-expo group-hover:-translate-y-0.5 group-hover:bg-blue-solid group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2.5">
          <span className="index-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="eyebrow text-white/55">{label}</span>
        </div>
        <div className="mt-2 text-white/70">{children}</div>
      </div>
    </li>
  );
}

export function ContactInfo() {
  return (
    /* Panel fijo al hacer scroll en escritorio. No usa `.card-dark`: esa
       clase eleva la tarjeta al pasar por encima, y un panel de este tamaño
       moviéndose bajo el cursor distrae en lugar de dar feedback. */
    <div className="relative overflow-hidden rounded-[14px] border border-line bg-surface-card p-7 sm:p-8 lg:sticky lg:top-28">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent-deep via-accent-deep/60 to-blue/50"
      />

      <div className="relative flex items-center gap-3">
        <span className="index-number">02</span>
        <span className="eyebrow">DATOS DIRECTOS</span>
      </div>

      <h2 className="relative mt-5 text-h3 text-white">Información de contacto</h2>

      <ul className="relative mt-8 space-y-6">
        <InfoRow icon={Phone} label="TELÉFONO" index={0}>
          <a
            href={`tel:${company.contact.phone}`}
            className="link-underline font-mono text-lg text-white transition-colors duration-base hover:text-accent"
          >
            {company.contact.phoneFormatted}
          </a>
          <p className="mt-1.5 text-sm text-white/60">
            Desde el exterior:{' '}
            <a
              href={`tel:${company.contact.phone}`}
              className="link-underline font-mono transition-colors duration-base hover:text-accent"
            >
              {company.contact.phoneInternational}
            </a>
          </p>
        </InfoRow>

        <InfoRow icon={Mail} label="EMAIL" index={1}>
          <a
            href={`mailto:${company.contact.email}`}
            className="link-underline break-all transition-colors duration-base hover:text-accent"
          >
            {company.contact.email}
          </a>
        </InfoRow>

        <InfoRow icon={MapPin} label="UBICACIÓN" index={2}>
          <p className="text-white/65">{company.contact.address}</p>
        </InfoRow>

        <InfoRow icon={Clock} label="HORARIO" index={3}>
          <dl className="space-y-1 text-sm text-white/65">
            <div className="flex flex-wrap gap-x-2">
              <dt className="text-white/60">{businessHours.weekdays.label}:</dt>
              <dd className="font-mono">{businessHours.weekdays.value}</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="text-white/60">{businessHours.emergency.label}:</dt>
              <dd className="font-mono">{businessHours.emergency.value}</dd>
            </div>
          </dl>
        </InfoRow>
      </ul>

      <div className="relative mt-8 border-t border-line pt-6">
        <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-white/55">
          {company.legalName}
          <br />
          RUC {company.ruc}
        </p>
      </div>
    </div>
  );
}
