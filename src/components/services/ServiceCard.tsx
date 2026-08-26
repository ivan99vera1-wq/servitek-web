import Link from 'next/link';
import { Lightbulb, Cog, Wrench, Zap, ArrowRight } from 'lucide-react';
import { Service } from '@/types/service';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-10 w-10" />,
  Cog: <Cog className="h-10 w-10" />,
  Wrench: <Wrench className="h-10 w-10" />,
  Zap: <Zap className="h-10 w-10" />,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="card-industrial block p-8 h-full group"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 p-4 bg-primary/10 text-primary rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
          {iconMap[service.icon] || <Zap className="h-10 w-10" />}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
            {service.title}
          </h2>
          <p className="mt-3 text-text-muted">
            {service.description}
          </p>
          <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
            {service.cta}
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
