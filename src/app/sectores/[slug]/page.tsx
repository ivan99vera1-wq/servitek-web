import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { sectors } from '@/data/sectors';
import { services } from '@/data/services';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';

interface SectorPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return sectors.map((sector) => ({
    slug: sector.slug,
  }));
}

export async function generateMetadata({ params }: SectorPageProps): Promise<Metadata> {
  const sector = sectors.find((s) => s.slug === params.slug);
  if (!sector) return {};

  return generatePageMetadata({
    title: sector.shortTitle,
    description: sector.description,
    path: `/sectores/${sector.slug}`,
  });
}

export default function SectorPage({ params }: SectorPageProps) {
  const sector = sectors.find((s) => s.slug === params.slug);

  if (!sector) {
    notFound();
  }

  const relatedServices = services.slice(0, 3);
  const sectorIndex = sectors.findIndex((s) => s.id === sector.id);

  return (
    <>
      <PageHero
        eyebrow={`SECTOR ${String(sectorIndex + 1).padStart(2, '0')}`}
        title={sector.shortTitle}
        subtitle={sector.description}
        animatedVariant={sectorIndex}
      />

      <Breadcrumbs
        items={[
          { label: 'Sectores', href: '/sectores' },
          { label: sector.shortTitle, href: `/sectores/${sector.slug}` },
        ]}
      />

      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contenido principal */}
            <ScrollReveal>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
                  SECTOR INDUSTRIAL
                </span>
                <h2 className="mt-2 text-h3 font-bold text-white">Qué resolvemos en este sector</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/65">{sector.description}</p>

                {/* Problemas comunes */}
                <div className="mt-8">
                  <div className="mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-blue-text" />
                    <h3 className="text-h4 font-semibold text-white">
                      Problemas comunes en este sector
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {sector.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[11px] h-px w-4 shrink-0 bg-accent/60"
                        />
                        <span className="text-white/65">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button href="/contacto" size="lg">
                    SOLICITAR EVALUACIÓN
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Soluciones */}
            <ScrollReveal delay={200}>
              <div className="card-dark p-8">
                <h3 className="mb-6 text-h4 font-semibold text-white">
                  Soluciones SERVITEK para este sector
                </h3>
                <ul className="space-y-4">
                  {sector.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-text" />
                      <span className="text-white/65">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Servicios relacionados */}
          <ScrollReveal>
            <div className="mt-16 border-t border-line pt-12">
              <h3 className="mb-8 text-h4 font-semibold text-white">Servicios relacionados</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/servicios/${service.slug}`}
                    className="card-dark group relative block overflow-hidden p-6"
                  >
                    <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-text">
                      {service.shortTitle}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-sm text-white/60">{service.description}</p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-white/70 transition-colors group-hover:text-blue-text">
                      Conocer servicio
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
