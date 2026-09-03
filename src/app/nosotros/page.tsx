import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { StatCard } from '@/components/ui/StatCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { company } from '@/data/company';
import { aboutContent, whyServitek } from '@/data/company-content';
import { FounderCard } from '@/components/about/FounderCard';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nosotros',
  description:
    'Conozca a SERVITEK E.A.S., empresa paraguaya de electromecánica industrial y servicios eléctricos de alta exigencia.',
  path: '/nosotros',
});

export default function NosotrosPage() {
  return (
    <>
      <PageHero eyebrow="NOSOTROS" title={aboutContent.title} subtitle={aboutContent.subtitle} />

      {/* Cifras. Solo datos verificables: no hay años de experiencia ni número
          de proyectos porque la empresa todavía no los ha facilitado. */}
      <section className="relative border-b border-line bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {aboutContent.stats.map((stat, index) => (
              <StatCard key={stat.label} index={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión — composición editorial a dos columnas, con los
          revelados entrando desde lados opuestos. */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal direction="left">
              <article className="group">
                <span className="inline-flex items-center gap-3">
                  <span className="index-number">01</span>
                  <span className="eyebrow">MISIÓN</span>
                </span>
                <div aria-hidden="true" className="mt-5 h-px w-full bg-line-strong" />
                <span
                  aria-hidden="true"
                  className="-mt-px block h-px w-12 bg-accent transition-[width] duration-slow ease-out-expo group-hover:w-full"
                />
                <p className="mt-8 text-lg leading-relaxed text-white/70">{company.mission}</p>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <article className="group">
                <span className="inline-flex items-center gap-3">
                  <span className="index-number">02</span>
                  <span className="eyebrow">VISIÓN</span>
                </span>
                <div aria-hidden="true" className="mt-5 h-px w-full bg-line-strong" />
                <span
                  aria-hidden="true"
                  className="-mt-px block h-px w-12 bg-accent transition-[width] duration-slow ease-out-expo group-hover:w-full"
                />
                <p className="mt-8 text-lg leading-relaxed text-white/70">{company.vision}</p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="section-padding border-y border-line bg-surface">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading
              eyebrow="QUIÉN LIDERA SERVITEK"
              title="Dirección"
              className="mb-14 md:mb-20"
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <FounderCard />
          </ScrollReveal>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading
              eyebrow="VALORES"
              title="Nuestros Valores"
              description="Los principios que guían cada proyecto y cada relación comercial."
              className="mb-14 md:mb-20"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {company.values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 90} fullHeight>
                <div className="card-dark group relative h-full overflow-hidden p-6">
                  <div className="tech-frame" aria-hidden="true" />
                  <span aria-hidden="true" className="index-watermark -top-3 right-1 text-[72px]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="index-number relative">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="relative mt-4 font-semibold text-white">{value.title}</h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-white/65">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section-padding relative bg-navy">
        <div className="rule-accent absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading
              eyebrow="PILARES"
              title={whyServitek.title}
              className="mb-14 md:mb-20"
            />
          </ScrollReveal>

          <ol className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {whyServitek.pillars.map((pillar, index) => (
              <li key={pillar.number}>
                <ScrollReveal delay={index * 90} fullHeight>
                  <article className="group relative h-full pt-6">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-line-strong"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-px w-6 bg-accent transition-[width] duration-slow ease-out-expo group-hover:w-full"
                    />
                    <span aria-hidden="true" className="index-watermark -top-1 right-0 text-[76px]">
                      {pillar.number}
                    </span>
                    <span className="relative block font-mono text-4xl font-bold tabular-nums text-white/35 transition-colors duration-base group-hover:text-accent">
                      {pillar.number}
                    </span>
                    <h3 className="relative mt-5 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-white">
                      {pillar.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/65">
                      {pillar.description}
                    </p>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
