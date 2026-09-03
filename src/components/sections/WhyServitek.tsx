import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { whyServitek } from '@/data/company-content';

/**
 * Pilares.
 *
 * Se lee como una escala técnica: cinco columnas colgando de un mismo filete
 * horizontal, cada una con su número en rojo. La marca de agua repite el
 * número a gran tamaño detrás del texto, igual que en las tarjetas, para que
 * el sistema de numeración 01..05 sea reconocible en todo el sitio.
 */
export function WhyServitek() {
  return (
    <section className="section-padding relative bg-navy">
      <div className="rule-accent absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            eyebrow="¿POR QUÉ SERVITEK?"
            title={whyServitek.title}
            className="mb-14 md:mb-20"
          />
        </ScrollReveal>

        <ol className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {whyServitek.pillars.map((pillar, index) => (
            <li key={pillar.number}>
              <ScrollReveal delay={index * 90} fullHeight>
                <article className="group relative h-full pt-6">
                  {/* Filete superior: gris en reposo, rojo y completo al pasar
                      por encima. Marca la columna activa sin moverla. */}
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
  );
}
