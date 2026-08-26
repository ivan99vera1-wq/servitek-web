import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MapPin, Calendar, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { generatePageMetadata } from '@/lib/seo';

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};

  return generatePageMetadata({
    title: project.title,
    description: project.description,
    path: `/proyectos/${project.id}`,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={`${project.sector} — ${project.location}`}
      />

      <Breadcrumbs
        items={[
          { label: 'Proyectos', href: '/proyectos' },
          { label: project.title, href: `/proyectos/${project.id}` },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Nota sobre proyecto demo */}
          <div className="bg-surface border border-border rounded-lg p-6 mb-8">
            <p className="text-sm text-text-muted">
              <strong className="text-text">Nota:</strong> Este es un proyecto de ejemplo.
              SERVITEK está preparando su portafolio de proyectos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contenido principal */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="label-engineering text-accent">PROYECTO</span>
                <h2 className="mt-2 text-h3 font-bold text-primary">{project.title}</h2>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-text-muted">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </div>
                </div>

                <p className="mt-6 text-lg text-text-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Placeholder para imagen */}
                <div className="mt-8 h-64 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="label-engineering text-white/60">IMAGEN DEL PROYECTO</span>
                    <p className="mt-2 text-sm font-semibold">{project.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={200}>
                <div className="bg-surface rounded-lg p-6 sticky top-24">
                  <h3 className="text-h4 font-semibold text-primary mb-4">
                    Detalles del proyecto
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-text">Sector</span>
                      <p className="text-text-muted">{project.sector}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-text">Ubicación</span>
                      <p className="text-text-muted">{project.location}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-text">Año</span>
                      <p className="text-text-muted">{project.year}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-text">Servicios</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-white text-text rounded-full text-xs border border-border"
                          >
                            <Tag className="h-3 w-3" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Button href="/contacto" className="w-full">
                      SOLICITAR EVALUACIÓN
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Proyectos relacionados */}
          <ScrollReveal>
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="text-h4 font-semibold text-primary mb-8">
                Otros proyectos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/proyectos/${p.id}`}
                      className="card-industrial block p-6 group"
                    >
                      <h4 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                        {p.title}
                      </h4>
                      <div className="mt-2 flex items-center gap-2 text-xs text-text-muted">
                        <MapPin className="h-3 w-3" />
                        {p.location}
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        {p.year}
                      </div>
                      <p className="mt-2 text-sm text-text-muted line-clamp-2">
                        {p.description}
                      </p>
                      <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                        Ver proyecto
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
