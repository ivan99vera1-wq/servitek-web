import Link from 'next/link';
import { Lightbulb, Cog, Wrench, Zap, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-8 w-8" />,
  Cog: <Cog className="h-8 w-8" />,
  Wrench: <Wrench className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
};

export function BusinessUnits() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            title="Nuestras Unidades de Negocio"
            subtitle="Cuatro áreas especializadas que cubren toda la cadena de soluciones eléctricas e industriales."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <Link
                href={`/servicios/${service.slug}`}
                className="card-industrial block p-6 h-full group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                    {iconMap[service.icon] || <Zap className="h-8 w-8" />}
                  </div>
                  <div className="flex-1">
                    <span className="label-engineering text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="mt-1 text-h4 font-semibold text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-text-muted text-sm line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                      Conocer servicio
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
