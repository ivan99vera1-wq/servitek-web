import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

/**
 * Avance de proyectos.
 *
 * PENDIENTE (empresa): la portada no renderiza esta sección hasta que haya
 * obra real que enseñar (ver src/app/page.tsx). El componente se mantiene al
 * día con el resto del sistema visual para que reactivarlo sea descomentar
 * una línea.
 */
export function ProjectsPreview() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            eyebrow="PROYECTOS"
            title="Proyectos destacados"
            description="Soluciones ejecutadas para la industria paraguaya."
            className="mb-14 md:mb-20"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 90} fullHeight>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/proyectos"
              className="link-underline py-2 text-sm font-medium text-white/75 transition-colors duration-base hover:text-blue-text"
            >
              Ver todos los proyectos
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
