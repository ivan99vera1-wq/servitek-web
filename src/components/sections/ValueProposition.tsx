import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { aboutContent } from '@/data/company-content';
import { Shield, Clock, Zap } from 'lucide-react';

const icons = [Shield, Clock, Zap];

export function ValueProposition() {
  return (
    <section className="section-padding bg-[#061321]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue/80">
              <span className="w-8 h-[1px] bg-blue" />
              PROPUESTA DE VALOR
              <span className="w-8 h-[1px] bg-blue" />
            </span>
            <h2 className="mt-6 text-h2 lg:text-h1 font-bold text-white text-balance">
              Soluciones diseñadas para mantener tu operación en marcha.
            </h2>
            <p className="mt-4 text-lg text-white/55 max-w-3xl mx-auto">
              Trabajamos en los sectores más exigentes de la industria paraguaya, donde la continuidad operativa no es opcional.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutContent.differentials.map((item, index) => {
            const Icon = icons[index] || Shield;
            return (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-dark p-8 h-full group">
                  <div className="p-3 bg-blue/10 text-blue rounded-lg w-fit mb-5 group-hover:bg-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
