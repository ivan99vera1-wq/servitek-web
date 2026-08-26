import Link from 'next/link';
import { Lightbulb, Cog, Wrench, Zap, ArrowRight } from 'lucide-react';
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
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <span className="label-engineering text-white/40">ÁREAS DE SERVICIO</span>
            <h2 className="mt-4 text-h2 lg:text-h1 font-bold text-white text-balance">
              Cuatro unidades de negocio
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-3xl mx-auto">
              Cubrimos toda la cadena de soluciones eléctricas e industriales para operaciones que no pueden parar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <Link
                href={`/servicios/${service.slug}`}
                className="block p-6 h-full group bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-accent/10 text-accent rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                    {iconMap[service.icon] || <Zap className="h-8 w-8" />}
                  </div>
                  <div className="flex-1">
                    <span className="label-engineering text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-white/60 text-sm line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-white group-hover:text-accent transition-colors">
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
