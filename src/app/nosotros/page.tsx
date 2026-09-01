import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { StatCard } from '@/components/ui/StatCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { company } from '@/data/company';
import { aboutContent, whyServitek } from '@/data/company-content';
import { FounderCard } from '@/components/about/FounderCard';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nosotros',
  description: 'Conozca a SERVITEK E.A.S., empresa paraguaya de electromecánica industrial y servicios eléctricos de alta exigencia.',
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
      <section className="bg-[#071827] border-y border-white/[0.06]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {aboutContent.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-[#061321]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
                  <span className="w-6 h-[1px] bg-blue" />
                  MISIÓN
                </span>
                <p className="mt-5 text-lg text-white/65 leading-relaxed">
                  {company.mission}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
                  <span className="w-6 h-[1px] bg-blue" />
                  VISIÓN
                </span>
                <p className="mt-5 text-lg text-white/65 leading-relaxed">
                  {company.vision}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="section-padding bg-[#071827] border-y border-white/[0.06]">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-12 text-center md:mb-16">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
                <span className="h-[1px] w-8 bg-blue" />
                QUIÉN LIDERA SERVITEK
                <span className="h-[1px] w-8 bg-blue" />
              </span>
              <h2 className="text-h2 lg:text-h1 mt-6 font-bold text-white text-balance">
                Dirección
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <FounderCard />
          </ScrollReveal>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-[#0A1F35]">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-12 md:mb-16 text-center">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
                <span className="w-8 h-[1px] bg-blue" />
                VALORES
                <span className="w-8 h-[1px] bg-blue" />
              </span>
              <h2 className="mt-6 text-h2 lg:text-h1 font-bold text-white text-balance">
                Nuestros Valores
              </h2>
              <p className="mt-4 text-lg text-white/65 max-w-3xl mx-auto">
                Los principios que guían cada proyecto y cada relación comercial.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {company.values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="card-dark p-6 h-full">
                  <h3 className="font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section-padding bg-[#061321] relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-12 md:mb-16 text-center">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
                <span className="w-8 h-[1px] bg-blue" />
                PILARES
                <span className="w-8 h-[1px] bg-blue" />
              </span>
              <h2 className="mt-6 text-h2 lg:text-h1 font-bold text-white text-balance">
                {whyServitek.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {whyServitek.pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.number} delay={index * 100}>
                <div className="text-center md:text-left">
                  <span className="font-mono text-4xl font-bold text-blue-text/70">
                    {pillar.number}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white uppercase tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
