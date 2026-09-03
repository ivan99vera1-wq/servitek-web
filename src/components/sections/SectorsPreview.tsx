import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CircuitBackground } from '@/components/ui/CircuitBackground';
import { sectors } from '@/data/sectors';

/**
 * Avance de sectores.
 *
 * Versión compacta de SectorCard: cuatro columnas no admiten la lista de
 * problemas sin apelmazarse, así que aquí solo van índice, título y resumen.
 * El lenguaje visual (numeración, marca de agua, filete rojo, reacción del
 * circuito al hover) es el mismo.
 */
export function SectorsPreview() {
  const featuredSectors = sectors.slice(0, 4);

  return (
    <section className="section-padding bg-navy-light">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            eyebrow="SECTORES"
            title="Sectores que atendemos"
            description="Soluciones especializadas para los sectores industriales más exigentes de Paraguay."
            className="mb-14 md:mb-20"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredSectors.map((sector, index) => {
            const number = String(index + 1).padStart(2, '0');
            return (
              <ScrollReveal key={sector.id} delay={index * 90} fullHeight>
                <Link
                  href={`/sectores/${sector.slug}`}
                  className="card-dark group relative flex h-full flex-col overflow-hidden p-6"
                >
                  <div className="absolute inset-0" aria-hidden="true">
                    <CircuitBackground
                      variant={index}
                      className="opacity-60 transition-opacity duration-slow ease-out-expo group-hover:opacity-95"
                    />
                    <div className="via-surface-card/92 to-surface-card/78 absolute inset-0 bg-gradient-to-t from-surface-card" />
                  </div>

                  <span aria-hidden="true" className="index-watermark -top-3 right-1 text-[84px]">
                    {number}
                  </span>

                  <div className="tech-frame" aria-hidden="true" />

                  <div className="relative flex items-center gap-3">
                    <span className="index-number">{number}</span>
                    <span
                      aria-hidden="true"
                      className="h-px w-5 bg-accent/50 transition-[width] duration-base ease-out-expo group-hover:w-10"
                    />
                  </div>

                  <h3 className="relative mt-5 text-h4 text-white transition-colors duration-base group-hover:text-blue-text">
                    {sector.shortTitle}
                  </h3>
                  <p className="relative mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-white/65">
                    {sector.description}
                  </p>

                  <div className="relative mt-6 flex items-center justify-between border-t border-line pt-4">
                    <span className="inline-flex items-center text-sm font-medium text-white/75 transition-colors duration-base group-hover:text-blue-text">
                      Ver soluciones
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-base ease-out-expo group-hover:translate-x-1.5" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-base group-hover:opacity-100"
                    />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/sectores"
              className="link-underline py-2 text-sm font-medium text-white/75 transition-colors duration-base hover:text-blue-text"
            >
              Ver todos los sectores
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
