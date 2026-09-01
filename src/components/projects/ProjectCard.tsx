import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.id}`}
      className="card-dark overflow-hidden block group h-full"
    >
      {/* Imagen de portada: marcador generado, reemplazable en src/data/projects.ts (campo `image`) */}
      <div className="h-48 bg-gradient-to-br from-navy-light to-navy-lighter flex items-center justify-center relative overflow-hidden">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-muted via-surface-muted/40 to-transparent" />
        <div className="relative text-center px-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-text/90">PROYECTO</span>
          <p className="mt-2 text-lg font-semibold text-white/80">{project.title}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-text transition-colors">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/60">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-blue-text/70" />
            {project.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-blue-text/70" />
            {project.year}
          </div>
        </div>

        <p className="mt-4 text-white/60 text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
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

        <div className="mt-4 inline-flex items-center text-sm font-medium text-white/70 group-hover:text-blue-text transition-colors">
          Ver proyecto
          <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
