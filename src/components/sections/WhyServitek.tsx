import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { whyServitek } from '@/data/company-content';

export function WhyServitek() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            title={whyServitek.title}
            subtitle="Cinco pilares que definen nuestra forma de trabajar."
            className="[&_h2]:text-white [&_p]:text-white/70"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {whyServitek.pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.number} delay={index * 100}>
              <div className="text-center md:text-left">
                <span className="font-mono text-4xl font-bold text-accent">
                  {pillar.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
