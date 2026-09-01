import Link from 'next/link';
import { Lightbulb, Cog, Wrench, Zap, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-7 w-7" />,
  Cog: <Cog className="h-7 w-7" />,
  Wrench: <Wrench className="h-7 w-7" />,
  Zap: <Zap className="h-7 w-7" />,
};

export function BusinessUnits() {
  return (
    <section className="section-padding bg-[#0A1F35] relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="bus-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#bus-grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
              <span className="w-8 h-[1px] bg-blue" />
              ÁREAS DE SERVICIO
              <span className="w-8 h-[1px] bg-blue" />
            </span>
            <h2 className="mt-6 text-h2 lg:text-h1 font-bold text-white text-balance">
              Cuatro unidades de negocio
            </h2>
            <p className="mt-4 text-lg text-white/65 max-w-3xl mx-auto">
              Cubrimos toda la cadena de soluciones eléctricas e industriales para operaciones que no pueden parar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <Link
                href={`/servicios/${service.slug}`}
                className="block p-6 h-full group card-dark"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 p-3 bg-blue/10 text-blue-text rounded-lg group-hover:bg-blue-solid group-hover:text-white transition-all duration-300">
                    {iconMap[service.icon] || <Zap className="h-7 w-7" />}
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-xs text-blue-text/90">
                      0{index + 1}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-blue-text transition-colors duration-300">
                      {service.shortTitle}
                    </h3>
                    <p className="mt-2 text-white/60 text-sm line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-white/70 group-hover:text-blue-text transition-colors duration-300">
                      Conocer servicio
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
