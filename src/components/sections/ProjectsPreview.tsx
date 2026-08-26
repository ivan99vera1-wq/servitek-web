import Link from 'next/link';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { projects } from '@/data/projects';

export function ProjectsPreview() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeader
            title="Proyectos destacados"
            subtitle="Soluciones ejecutadas para la industria paraguaya."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div className="card-industrial overflow-hidden h-full flex flex-col">
                {/* Placeholder para imagen */}
                <div className="h-40 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="label-engineering text-white/60">PROYECTO</span>
                    <p className="mt-1 text-sm font-semibold">{project.sector}</p>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-primary">{project.title}</h3>

                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-text-muted">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-text-muted line-clamp-2 flex-1">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <Link
              href="/proyectos"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Ver todos los proyectos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
