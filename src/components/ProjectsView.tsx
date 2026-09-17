import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { Search, Filter, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectsViewProps {
  projects: Project[];
  onSelectProject: (slug: string) => void;
  onNavigateToContact: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  projects,
  onSelectProject,
  onNavigateToContact
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    'All',
    'Hospitality',
    'Restaurants',
    'Bars',
    'Cafés',
    'Commercial',
    'Residential',
    'Kitchens'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Sector match
      const matchesFilter =
        selectedFilter === 'All' ||
        project.sector.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(selectedFilter.toLowerCase()));

      // Search query
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesSearch;
    });
  }, [projects, selectedFilter, searchQuery]);

  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1B1A]/5 text-[#8C827A] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B39266]" />
            Selected Works • 2002 – 2025
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B1A] tracking-tight mb-4">
            Interior Design Portfolio
          </h1>

          <p className="text-base sm:text-lg text-[#1C1B1A]/75 leading-relaxed font-light">
            A curated selection of restaurants, bistro dining rooms, taprooms, commercial kitchens, flagship retail spaces, and luxury residences crafted across Lancashire, the Lake District, Liverpool, Manchester, and beyond.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#1C1B1A]/10">
          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#1C1B1A] text-[#FAF8F5] font-semibold'
                    : 'bg-white text-[#1C1B1A]/70 hover:text-[#1C1B1A] border border-[#1C1B1A]/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#8C827A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by venue, town or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#1C1B1A]/15 focus:border-[#B39266] focus-ring"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                aspect={idx % 4 === 0 ? 'wide' : 'square'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-[#1C1B1A]/10 space-y-3">
            <p className="font-serif text-2xl text-[#1C1B1A]">No matching projects found</p>
            <p className="text-xs text-[#8C827A]">
              Try adjusting your filter or search query.
            </p>
            <button
              onClick={() => {
                setSelectedFilter('All');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-[#1C1B1A] text-white text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Direct Project Enquiry CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 bg-[#24211E] text-[#FAF8F5] flex flex-col lg:flex-row items-center justify-between gap-8 border-l-4 border-[#B39266]">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Have a Venue or Property in Mind?
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white">
              Let’s create a space that looks exceptional and works brilliantly.
            </h2>
            <p className="text-xs sm:text-sm text-[#DCD7D0] font-light">
              From site feasibility and concept designs to full commercial kitchen fit-out and on-site build coordination.
            </p>
          </div>

          <button
            onClick={onNavigateToContact}
            className="shrink-0 px-8 py-3.5 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.2em] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
