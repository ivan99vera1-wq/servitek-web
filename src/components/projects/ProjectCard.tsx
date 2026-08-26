import Link from 'next/link';
import { MapPin, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.id}`}
      className="card-industrial overflow-hidden block group h-full"
    >
      {/* Placeholder para imagen */}
      <div className="h-48 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
        <div className="text-center text-white">
          <span className="label-engineering text-white/60">PROYECTO</span>
          <p className="mt-2 text-lg font-semibold">{project.title}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-4 text-sm text-text-muted">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {project.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {project.year}
          </div>
        </div>

        <p className="mt-4 text-text-muted text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="inline-flex items-center gap-1 px-3 py-1 bg-surface text-text rounded-full text-xs"
            >
              <Tag className="h-3 w-3" />
              {service}
            </span>
          ))}
        </div>

        <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
          Ver proyecto
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
