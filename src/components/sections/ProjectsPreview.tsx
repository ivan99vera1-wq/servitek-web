import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { projects } from '@/data/projects';

export function ProjectsPreview() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
              <span className="w-8 h-[1px] bg-blue" />
              PROYECTOS
              <span className="w-8 h-[1px] bg-blue" />
            </span>
            <h2 className="mt-6 text-h2 lg:text-h1 font-bold text-white text-balance">
              Proyectos destacados
            </h2>
            <p className="mt-4 text-lg text-white/65 max-w-3xl mx-auto">
              Soluciones ejecutadas para la industria paraguaya.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100} fullHeight>
              <div className="card-dark overflow-hidden h-full flex flex-col group">
                {/* Imagen de portada: marcador generado, reemplazable en src/data/projects.ts (campo `image`) */}
                <div className="h-44 bg-gradient-to-br from-navy-light to-navy-lighter flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-muted via-surface-muted/40 to-transparent" />
                  <div className="relative text-center px-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-text/90">PROYECTO</span>
                    <p className="mt-1 text-sm font-semibold text-white/80">{project.sector}</p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-text transition-colors">{project.title}</h3>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-white/60">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-blue-text/70" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-blue-text/70" />
                      {project.year}
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-white/60 line-clamp-2 flex-1 leading-relaxed">
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
              className="inline-flex items-center text-sm font-medium text-white/70 hover:text-blue-text transition-colors"
            >
              Ver todos los proyectos
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
