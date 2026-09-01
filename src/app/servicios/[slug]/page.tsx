import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, AlertTriangle, Settings } from 'lucide-react';
import { services } from '@/data/services';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { generatePageMetadata } from '@/lib/seo';
import { generateServiceSchema } from '@/lib/schema';
import { ServiceIcon } from '@/lib/icons';

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return generatePageMetadata({
    title: service.shortTitle,
    description: service.description,
    path: `/servicios/${service.slug}`,
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema([{
    name: service.shortTitle,
    description: service.fullDescription || service.description,
    url: `/servicios/${service.slug}`,
  }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        title={service.shortTitle}
        subtitle={service.description}
      />

      <Breadcrumbs
        items={[
          { label: 'Servicios', href: '/servicios' },
          { label: service.shortTitle, href: `/servicios/${service.slug}` },
        ]}
      />

      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contenido principal */}
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue/10 text-blue-text rounded-lg">
                    <ServiceIcon name={service.icon} className="h-12 w-12" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
                      UNIDAD DE NEGOCIO
                    </span>
                    <h2 className="text-h3 font-bold text-white">En qué consiste</h2>
                  </div>
                </div>

                {service.fullDescription && (
                  <p className="text-lg text-white/65 leading-relaxed">
                    {service.fullDescription}
                  </p>
                )}

                {/* Problemas que resuelve */}
                {service.problemsSolved && service.problemsSolved.length > 0 && (
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="h-5 w-5 text-blue-text" />
                      <h3 className="text-h4 font-semibold text-white">
                        Problemas que resolvemos
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {service.problemsSolved.map((problem) => (
                        <li key={problem} className="flex items-start gap-3">
                          <span className="text-blue-text mt-1">•</span>
                          <span className="text-white/65">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8">
                  <Button href="/contacto" size="lg">
                    SOLICITAR PRESUPUESTO
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Soluciones y alcance técnico */}
            <div className="space-y-8">
              {/* Soluciones */}
              <ScrollReveal delay={200}>
                <div className="card-dark p-8">
                  <h3 className="text-h4 font-semibold text-white mb-6">
                    Soluciones que ofrecemos
                  </h3>
                  <ul className="space-y-4">
                    {service.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-text shrink-0 mt-0.5" />
                        <span className="text-white/65">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Alcance técnico */}
              {service.technicalScope && service.technicalScope.length > 0 && (
                <ScrollReveal delay={300}>
                  <div className="bg-navy-light text-white rounded-[14px] p-8 border border-line">
                    <div className="flex items-center gap-2 mb-6">
                      <Settings className="h-5 w-5 text-blue-text" />
                      <h3 className="text-h4 font-semibold">
                        Alcance técnico
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {service.technicalScope.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-blue-text font-mono text-sm mt-0.5">→</span>
                          <span className="text-white/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>

          {/* Clientes */}
          {service.clients && service.clients.length > 0 && (
            <ScrollReveal>
              <div className="mt-16 pt-12 border-t border-line">
                <h3 className="text-h4 font-semibold text-white mb-6">
                  Sectores que atendemos
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.clients.map((client) => (
                    <span
                      key={client}
                      className="px-4 py-2 bg-white/5 text-white/70 rounded-full text-sm"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  );
}
