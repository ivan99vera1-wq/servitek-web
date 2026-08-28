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
      className="card-dark overflow-hidden block group h-full"
    >
      {/* Placeholder para imagen */}
      <div className="h-48 bg-gradient-to-br from-[#0A1F35] to-[#0B2A47] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D30] to-transparent opacity-60" />
        <div className="relative text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue/60">PROYECTO</span>
          <p className="mt-2 text-lg font-semibold text-white/80">{project.title}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white group-hover:text-blue transition-colors">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/40">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-blue/50" />
            {project.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-blue/50" />
            {project.year}
          </div>
        </div>

        <p className="mt-4 text-white/40 text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 text-white/50 rounded-full text-xs"
            >
              <Tag className="h-3 w-3" />
              {service}
            </span>
          ))}
        </div>

        <div className="mt-4 inline-flex items-center text-sm font-medium text-white/60 group-hover:text-blue transition-colors">
          Ver proyecto
          <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
