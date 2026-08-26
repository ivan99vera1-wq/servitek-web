import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatCard } from '@/components/ui/StatCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { company } from '@/data/company';
import { aboutContent, whyServitek } from '@/data/company-content';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nosotros',
  description: 'Conozca a SERVITEK E.A.S., empresa paraguasa de ingeniería eléctrica y electromecánica industrial.',
  path: '/nosotros',
});

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title={aboutContent.title}
        subtitle={aboutContent.subtitle}
      />

      {/* Estadísticas */}
      <section className="bg-surface border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {aboutContent.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <span className="label-engineering text-accent">MISIÓN</span>
                <p className="mt-4 text-lg text-text-muted leading-relaxed">
                  {company.mission}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <span className="label-engineering text-accent">VISIÓN</span>
                <p className="mt-4 text-lg text-text-muted leading-relaxed">
                  {company.vision}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Nuestros Valores"
              subtitle="Los principios que guían cada proyecto y cada relación comercial."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {company.values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-primary">{value.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title={whyServitek.title}
              className="[&_h2]:text-white"
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
    </>
  );
}
