import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types/service';
import { ServiceIcon } from '@/lib/icons';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="card-dark block p-5 sm:p-8 h-full group"
    >
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="flex-shrink-0 p-3 sm:p-4 bg-blue/10 text-blue-text rounded-lg group-hover:bg-blue-solid group-hover:text-white transition-all duration-300">
          <ServiceIcon name={service.icon} className="h-8 w-8" />
        </div>
        {/* min-w-0: sin él, el ancho min-content de palabras largas
            ("INFRAESTRUCTURA") desbordaba la tarjeta a 320 px. */}
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold text-white group-hover:text-blue-text transition-colors">
            {service.shortTitle}
          </h2>
          <p className="mt-3 text-white/60 leading-relaxed">
            {service.description}
          </p>
          <div className="mt-4 inline-flex items-center text-sm font-medium text-white/70 group-hover:text-blue-text transition-colors">
            {service.cta}
            <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
