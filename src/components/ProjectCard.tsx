import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface ProjectCardProps {
  project: Project;
  onSelect: (slug: string) => void;
  aspect?: 'tall' | 'wide' | 'square';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, aspect = 'square' }) => {
  const aspectClass =
    aspect === 'tall' ? 'aspect-16/12 max-h-[320px]' : aspect === 'wide' ? 'aspect-16/10 max-h-[290px]' : 'aspect-16/11 max-h-[300px]';

  return (
    <article
      id={`project-card-${project.slug}`}
      onClick={() => onSelect(project.slug)}
      className="group cursor-pointer block text-left"
    >
      {/* Image Frame */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#1C1B1A]/5 border border-[#1C1B1A]/10`}>
        <OptimizedImage
          src={project.heroImage}
          alt={`${project.title} - ${project.subtitle} by ZEDesign Interiors`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          maxWidth={1000}
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B1A]/75 via-[#1C1B1A]/15 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

        {/* Sector Tag & Year */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-2.5 py-1 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#1C1B1A] text-[10px] uppercase font-semibold tracking-[0.18em]">
            {project.sector}
          </span>
          {project.beforeAfter && (
            <span className="px-2 py-0.5 bg-[#B39266] text-[#1C1B1A] text-[9px] uppercase font-semibold tracking-wider">
              Before & After
            </span>
          )}
        </div>

        {/* Quick hover trigger icon */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 text-[#1C1B1A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-1 shadow-md">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Content on Image Bottom */}
        <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F5]">
          <div className="flex items-center gap-1.5 text-[11px] text-[#C5A880] uppercase tracking-[0.14em] font-medium mb-1">
            <MapPin className="w-3 h-3" />
            <span>{project.location}</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-tight group-hover:text-[#C5A880] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-[#DCD7D0] line-clamp-1 mt-0.5 font-light">
            {project.subtitle}
          </p>
        </div>
      </div>
    </article>
  );
};
