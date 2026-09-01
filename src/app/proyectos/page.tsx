import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Proyectos',
  description: 'Conozca los proyectos ejecutados por SERVITEK en la industria paraguaya.',
  path: '/proyectos',
  // PENDIENTE (empresa): portafolio de ejemplo. No indexar hasta tener obra real.
  noIndex: projects.some((p) => p.isDemo),
});

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        title="Nuestros Proyectos"
        subtitle="Soluciones ejecutadas para la industria paraguaya."
      />

      <section className="section-padding bg-navy">
        <div className="container-custom">
          <h2 className="sr-only">Listado de proyectos</h2>
          {/* Nota sobre proyectos demo */}
          <div className="card-dark p-6 mb-8">
            <p className="text-sm text-white/60">
              <strong className="text-white/70">Nota:</strong> Los proyectos mostrados son de ejemplo.
              SERVITEK está preparando su portafolio de proyectos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
