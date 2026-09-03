import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MapPin, Calendar, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
    // PENDIENTE (empresa): proyectos de ejemplo. No indexar hasta tener obra real.
    noIndex: project.isDemo,
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
        eyebrow="PROYECTO"
        title={project.title}
        subtitle={`${project.sector} — ${project.location}`}
        image={project.image}
      />

      <Breadcrumbs
        items={[
          { label: 'Proyectos', href: '/proyectos' },
          { label: project.title, href: `/proyectos/${project.id}` },
        ]}
      />

      <section className="section-padding bg-navy">
        <div className="container-custom">
          {/* Nota sobre proyecto demo */}
          <div className="card-dark mb-8 p-6">
            <p className="text-sm text-white/60">
              <strong className="text-white/70">Nota:</strong> Este es un proyecto de ejemplo.
              SERVITEK está preparando su portafolio de proyectos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contenido principal */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
                  PROYECTO
                </span>
                <h2 className="mt-2 text-h3 font-bold text-white">Alcance del proyecto</h2>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-blue-text/70" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-blue-text/70" />
                    {project.year}
                  </div>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-white/65">{project.description}</p>

                {/* Imagen de portada: marcador generado, reemplazable en src/data/projects.ts (campo `image`) */}
                <div className="relative mt-8 flex h-64 items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br from-navy-light to-navy-lighter">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-muted via-surface-muted/30 to-transparent" />
                  <div className="relative px-4 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-text/90">
                      IMAGEN DEL PROYECTO
                    </span>
                    <p className="mt-2 text-sm font-semibold text-white/80">{project.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              {/* fullHeight: el envoltorio del revelado debe ocupar la columna
                  entera, si no `sticky` no tiene recorrido y no se fija. */}
              <ScrollReveal delay={200} fullHeight>
                <div className="card-dark sticky top-24 p-6">
                  <h3 className="mb-4 text-h4 font-semibold text-white">Detalles del proyecto</h3>

                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-white/70">Sector</span>
                      <p className="text-white/60">{project.sector}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white/70">Ubicación</span>
                      <p className="text-white/60">{project.location}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white/70">Año</span>
                      <p className="text-white/60">{project.year}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white/70">Servicios</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/65"
                          >
                            <Tag className="h-3 w-3" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-line pt-6">
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
            <div className="mt-16 border-t border-line pt-12">
              <h3 className="mb-8 text-h4 font-semibold text-white">Otros proyectos</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/proyectos/${p.id}`}
                      className="card-dark group relative block overflow-hidden p-6"
                    >
                      <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-text">
                        {p.title}
                      </h4>
                      <div className="mt-2 flex items-center gap-2 text-xs text-white/55">
                        <MapPin className="h-3 w-3" />
                        {p.location}
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        {p.year}
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm text-white/60">{p.description}</p>
                      <div className="mt-4 inline-flex items-center text-sm font-medium text-white/70 transition-colors group-hover:text-blue-text">
                        Ver proyecto
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
