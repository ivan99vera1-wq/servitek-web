import Image from 'next/image';
import { ExternalLink, FileText } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { distributors } from '@/data/distributors';

/**
 * Distribuidor oficial.
 *
 * Sellos de certificación (IP66/IP67/IP69K) en vez de cifras propias: es la
 * prueba de confianza que SERVITEK puede respaldar hoy, tomada tal cual del
 * catálogo del fabricante, sin inventar métricas comerciales.
 */
export function OfficialDistributor() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy">
      <div className="tech-grid opacity-60" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="DISTRIBUIDOR OFICIAL"
            title="Respaldados por fabricantes líderes del sector"
            description="Somos distribuidores oficiales de marcas reconocidas en iluminación industrial, lo que garantiza productos certificados y soporte técnico directo del fabricante."
            className="mb-14 md:mb-16"
          />
        </ScrollReveal>

        <div className="mx-auto max-w-4xl space-y-6">
          {distributors.map((brand, index) => (
            <ScrollReveal key={brand.name} delay={index * 90} fullHeight>
              <article className="card-dark relative overflow-hidden p-8 md:p-12">
                <div className="tech-frame" aria-hidden="true" />

                <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                  <Image
                    src={brand.logo}
                    alt={`Logotipo de ${brand.name}`}
                    width={brand.logoWidth}
                    height={brand.logoHeight}
                    className="h-9 w-auto md:h-10"
                  />

                  <div className="flex flex-wrap gap-2">
                    {brand.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs uppercase tracking-wide text-white/70"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="relative mt-8 max-w-2xl text-base leading-relaxed text-white/70">
                  {brand.description}
                </p>

                <ul className="relative mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {brand.categories.map((category) => (
                    <li key={category} className="flex items-center gap-2 text-sm text-white/65">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {category}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-10 flex flex-col items-start gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-base hover:text-blue-text"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {brand.website.replace('https://', '')}
                  </a>

                  <a
                    href={brand.catalogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-6 py-3 text-sm tracking-[0.06em]"
                  >
                    <FileText className="btn-icon h-4 w-4" aria-hidden="true" />
                    VER CATÁLOGO
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
