import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { aboutContent } from '@/data/company-content';
import { Shield, Clock, Zap } from 'lucide-react';

const icons = [Shield, Clock, Zap];

export function ValueProposition() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            title="Soluciones diseñadas para mantener tu operación en marcha."
            subtitle="Trabajamos en los sectores más exigentes de la industria paraguaya, donde la continuidad operativa no es opcional."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutContent.differentials.map((item, index) => {
            const Icon = icons[index] || Shield;
            return (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="relative p-6 bg-surface rounded-lg border border-border hover:border-accent/30 transition-colors">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-h4 font-semibold text-primary">{item.title}</h3>
                  <p className="mt-3 text-text-muted">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
