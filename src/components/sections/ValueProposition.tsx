import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { aboutContent } from '@/data/company-content';

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
          {aboutContent.differentials.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <div className="p-6 border-l-2 border-primary">
                <h3 className="text-h4 font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-text-muted">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
