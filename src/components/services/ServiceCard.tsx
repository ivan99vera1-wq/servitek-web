import Link from 'next/link';
import { Lightbulb, Cog, Wrench, Zap, ArrowRight } from 'lucide-react';
import { Service } from '@/types/service';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-8 w-8" />,
  Cog: <Cog className="h-8 w-8" />,
  Wrench: <Wrench className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="card-dark block p-8 h-full group"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 p-4 bg-blue/10 text-blue rounded-lg group-hover:bg-blue-solid group-hover:text-white transition-all duration-300">
          {iconMap[service.icon] || <Zap className="h-8 w-8" />}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white group-hover:text-blue transition-colors">
            {service.title}
          </h2>
          <p className="mt-3 text-white/45 leading-relaxed">
            {service.description}
          </p>
          <div className="mt-4 inline-flex items-center text-sm font-medium text-white/60 group-hover:text-blue transition-colors">
            {service.cta}
            <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
