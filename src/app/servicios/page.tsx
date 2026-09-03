import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { services } from '@/data/services';
import { servicesIntro, workProcess } from '@/data/company-content';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Servicios',
  description:
    'SERVITEK ofrece electromecánica integral: diseño, montaje, automatización, mantenimiento y provisión de materiales certificados.',
  path: '/servicios',
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICIOS"
        title="Nuestros Servicios"
        subtitle="Cinco unidades de negocio que cubren toda la cadena electromecánica: del diagnóstico y el montaje al mantenimiento y la provisión de materiales certificados."
      />

      {/* Introducción */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading
              eyebrow={servicesIntro.eyebrow}
              title={servicesIntro.title}
              description={servicesIntro.body}
              className="mb-14 md:mb-20"
            />
          </ScrollReveal>

          {/* Servicios */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 90} fullHeight>
                <ServiceCard service={service} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading
              eyebrow="PROCESO"
              title="Nuestro proceso de trabajo"
              description="Cada proyecto sigue un proceso estructurado que garantiza resultados confiables."
              className="mb-14 md:mb-20"
            />
          </ScrollReveal>

          {/* Los cuatro pasos cuelgan de un mismo filete horizontal: se leen
              como una secuencia, no como cuatro bloques sueltos. */}
          <ol className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((item, index) => (
              <li key={item.step}>
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
                      {item.step}
                    </span>
                    <span className="relative block font-mono text-4xl font-bold tabular-nums text-white/35 transition-colors duration-base group-hover:text-accent">
                      {item.step}
                    </span>
                    <h3 className="relative mt-5 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-white">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/65">
                      {item.description}
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
