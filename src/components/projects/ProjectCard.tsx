import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  /** Posición en la lista. Alimenta la numeración 01, 02, 03... */
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/proyectos/${project.id}`}
      className="card-dark group relative flex h-full flex-col overflow-hidden"
    >
      <div className="tech-frame" aria-hidden="true" />

      {/* Imagen de portada: marcador generado, reemplazable en
          src/data/projects.ts (campo `image`) */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-navy-light to-navy-lighter">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition-transform duration-slow ease-out-expo group-hover:scale-[1.06]"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-muted/45 to-transparent" />

        {/* Índice sobre la imagen, con filete de acento */}
        <div className="absolute left-5 top-5 flex items-center gap-3">
          <span className="index-number">{number}</span>
          <span
            aria-hidden="true"
            className="h-px w-6 bg-accent/60 transition-[width] duration-base ease-out-expo group-hover:w-12"
          />
        </div>

        <span className="absolute bottom-4 left-5 right-5 font-mono text-eyebrow uppercase text-white/60">
          {project.sector}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-h4 text-white transition-colors duration-base group-hover:text-blue-text">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-white/55">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-accent/70" aria-hidden="true" />
            {project.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-accent/70" aria-hidden="true" />
            {project.year}
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-line bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
          <span className="inline-flex items-center text-sm font-medium text-white/75 transition-colors duration-base group-hover:text-blue-text">
            Ver proyecto
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-base ease-out-expo group-hover:translate-x-1.5" />
          </span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-base group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  );
}
