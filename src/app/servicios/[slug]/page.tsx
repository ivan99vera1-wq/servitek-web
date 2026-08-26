import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Lightbulb, Cog, Wrench, Zap, CheckCircle } from 'lucide-react';
import { services } from '@/data/services';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { generatePageMetadata } from '@/lib/seo';
import { generateServiceSchema } from '@/lib/schema';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-12 w-12" />,
  Cog: <Cog className="h-12 w-12" />,
  Wrench: <Wrench className="h-12 w-12" />,
  Zap: <Zap className="h-12 w-12" />,
};

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
    title: service.title,
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
    name: service.title,
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
        title={service.title}
        subtitle={service.description}
      />

      <Breadcrumbs
        items={[
          { label: 'Servicios', href: '/servicios' },
          { label: service.title, href: `/servicios/${service.slug}` },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contenido principal */}
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/10 text-primary rounded-lg">
                    {iconMap[service.icon] || <Zap className="h-12 w-12" />}
                  </div>
                  <div>
                    <span className="label-engineering text-accent">UNIDAD DE NEGOCIO</span>
                    <h2 className="text-h3 font-bold text-primary">{service.title}</h2>
                  </div>
                </div>

                {service.fullDescription && (
                  <p className="text-lg text-text-muted leading-relaxed">
                    {service.fullDescription}
                  </p>
                )}

                <div className="mt-8">
                  <Button href="/contacto" size="lg">
                    SOLICITAR PRESUPUESTO
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Soluciones */}
            <ScrollReveal delay={200}>
              <div className="bg-surface rounded-lg p-8">
                <h3 className="text-h4 font-semibold text-primary mb-6">
                  Soluciones que ofrecemos
                </h3>
                <ul className="space-y-4">
                  {service.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-text-muted">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Clientes */}
          {service.clients && service.clients.length > 0 && (
            <ScrollReveal>
              <div className="mt-16 pt-12 border-t border-border">
                <h3 className="text-h4 font-semibold text-primary mb-6">
                  Sectores que atendemos
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.clients.map((client) => (
                    <span
                      key={client}
                      className="px-4 py-2 bg-surface text-text rounded-full text-sm"
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
