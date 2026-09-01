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
        title={project.title}
        subtitle={`${project.sector} — ${project.location}`}
      />

      <Breadcrumbs
        items={[
          { label: 'Proyectos', href: '/proyectos' },
          { label: project.title, href: `/proyectos/${project.id}` },
        ]}
      />

      <section className="section-padding bg-[#061321]">
        <div className="container-custom">
          {/* Nota sobre proyecto demo */}
          <div className="card-dark p-6 mb-8">
            <p className="text-sm text-white/60">
              <strong className="text-white/70">Nota:</strong> Este es un proyecto de ejemplo.
              SERVITEK está preparando su portafolio de proyectos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contenido principal */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">PROYECTO</span>
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

                <p className="mt-6 text-lg text-white/65 leading-relaxed">
                  {project.description}
                </p>

                {/* Placeholder para imagen */}
                <div className="mt-8 h-64 bg-gradient-to-br from-[#0A1F35] to-[#0B2A47] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D30] to-transparent opacity-60" />
                  <div className="relative text-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-text/90">IMAGEN DEL PROYECTO</span>
                    <p className="mt-2 text-sm font-semibold text-white/80">{project.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={200}>
                <div className="card-dark p-6 sticky top-24">
                  <h3 className="text-h4 font-semibold text-white mb-4">
                    Detalles del proyecto
                  </h3>

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
                            className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 text-white/65 rounded-full text-xs"
                          >
                            <Tag className="h-3 w-3" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/[0.06]">
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
            <div className="mt-16 pt-12 border-t border-white/[0.06]">
              <h3 className="text-h4 font-semibold text-white mb-8">
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
                      className="card-dark block p-6 group"
                    >
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-text transition-colors">
                        {p.title}
                      </h4>
                      <div className="mt-2 flex items-center gap-2 text-xs text-white/55">
                        <MapPin className="h-3 w-3" />
                        {p.location}
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        {p.year}
                      </div>
                      <p className="mt-2 text-sm text-white/60 line-clamp-2">
                        {p.description}
                      </p>
                      <div className="mt-4 inline-flex items-center text-sm font-medium text-white/70 group-hover:text-blue-text transition-colors">
                        Ver proyecto
                        <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
