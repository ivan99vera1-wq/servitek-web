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
    title: sector.title,
    description: sector.description,
    path: `/sectores/${sector.slug}`,
  });
}

export default function SectorPage({ params }: SectorPageProps) {
  const sector = sectors.find((s) => s.slug === params.slug);

  if (!sector) {
    notFound();
  }

  // Servicios relacionados (tomamos los primeros 3)
  const relatedServices = services.slice(0, 3);

  return (
    <>
      <PageHero
        title={sector.title}
        subtitle={sector.description}
      />

      <Breadcrumbs
        items={[
          { label: 'Sectores', href: '/sectores' },
          { label: sector.title, href: `/sectores/${sector.slug}` },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contenido principal */}
            <ScrollReveal>
              <div>
                <span className="label-engineering text-accent">SECTOR INDUSTRIAL</span>
                <h2 className="mt-2 text-h3 font-bold text-primary">{sector.title}</h2>
                <p className="mt-4 text-lg text-text-muted leading-relaxed">
                  {sector.description}
                </p>

                {/* Problemas comunes */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-5 w-5 text-accent" />
                    <h3 className="text-h4 font-semibold text-primary">
                      Problemas comunes en este sector
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {sector.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-text-muted">{problem}</span>
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
              <div className="bg-surface rounded-lg p-8">
                <h3 className="text-h4 font-semibold text-primary mb-6">
                  Soluciones SERVITEK para este sector
                </h3>
                <ul className="space-y-4">
                  {sector.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-text-muted">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Servicios relacionados */}
          <ScrollReveal>
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="text-h4 font-semibold text-primary mb-8">
                Servicios relacionados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/servicios/${service.slug}`}
                    className="card-industrial block p-6 group"
                  >
                    <h4 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-sm text-text-muted line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                      Conocer servicio
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 lg:text-h1 font-bold text-white">
                ¿Necesita una solución para su sector?
              </h2>
              <p className="mt-6 text-lg text-white/80">
                Cuéntanos sobre las necesidades de su operación y le propondremos
                la solución técnica adecuada.
              </p>
              <div className="mt-8">
                <Button href="/contacto" size="lg" className="bg-white text-primary hover:bg-white/90">
                  SOLICITAR EVALUACIÓN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
