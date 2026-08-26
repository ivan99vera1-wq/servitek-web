import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Proyectos',
  description: 'Conozca los proyectos ejecutados por SERVITEK en la industria paraguaya.',
  path: '/proyectos',
});

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        title="Nuestros Proyectos"
        subtitle="Soluciones ejecutadas para la industria paraguaya."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Nota sobre proyectos demo */}
          <div className="bg-surface border border-border rounded-lg p-6 mb-8">
            <p className="text-sm text-text-muted">
              <strong className="text-text">Nota:</strong> Los proyectos mostrados son de ejemplo.
              SERVITEK está preparando su portafolio de proyectos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
