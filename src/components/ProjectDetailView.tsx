import React, { useState } from 'react';
import { Project, ViewRoute } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { LightboxModal } from './LightboxModal';
import { OptimizedImage } from './OptimizedImage';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Tag, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Maximize2, 
  Share2, 
  Quote 
} from 'lucide-react';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
  onNavigateProject: (slug: string) => void;
  onNavigateToContact: () => void;
  allProjects: Project[];
  onOpenVideoStudio?: (initialImg?: string) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
  onNavigateProject,
  onNavigateToContact,
  allProjects,
  onOpenVideoStudio
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Gallery items for lightbox
  const galleryImages = [
    { url: project.heroImage, caption: `${project.title} - Main Perspective` },
    ...project.gallery.map((g) => ({ url: g.url, caption: `${project.title} - ${g.caption}` }))
  ];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Find next project
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <article className="py-12 sm:py-20 bg-[#FAF8F5]">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8C827A] hover:text-[#1C1B1A] transition-colors focus-ring"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Hero Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em]">
              <span className="px-3 py-1 bg-[#1C1B1A] text-white font-semibold">
                {project.sector}
              </span>
              <span className="text-[#8C827A]">•</span>
              <span className="text-[#8C827A] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B39266]" />
                {project.location}
              </span>
              <span className="text-[#8C827A]">•</span>
              <span className="text-[#8C827A] font-mono">{project.year}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1B1A] tracking-tight">
              {project.title}
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#8C827A] italic font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics / Quick Spec Panel */}
          {project.metrics && (
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 w-full max-w-sm">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-3.5 border border-[#1C1B1A]/10">
                    <span className="text-[10px] uppercase tracking-wider text-[#8C827A] block font-mono">
                      {m.label}
                    </span>
                    <span className="font-serif font-semibold text-lg text-[#1C1B1A]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Full-Width Hero Photograph */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div
          onClick={() => handleOpenLightbox(0)}
          className="relative aspect-16/9 sm:aspect-21/9 max-h-[380px] overflow-hidden bg-[#1C1B1A]/10 border border-[#1C1B1A]/10 group cursor-pointer"
        >
          <OptimizedImage
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            priority={true}
            maxWidth={1600}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
          <button
            className="absolute bottom-4 right-4 px-3 py-1.5 bg-[#1C1B1A]/85 text-white text-xs flex items-center gap-1.5 uppercase tracking-wider backdrop-blur-xs group-hover:bg-[#B39266] group-hover:text-[#1C1B1A] transition-colors"
            aria-label="Expand image in lightbox"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>View Fullscreen</span>
          </button>
        </div>
      </div>

      {/* Editorial Case Study Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Narrative (Overview, Challenge, Solution) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266]">
                The Project Brief
              </h2>
              <p className="text-base sm:text-lg text-[#1C1B1A]/85 leading-relaxed font-light">
                {project.overview}
              </p>
            </section>

            {/* Challenge vs Solution side-by-side or stacked */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 bg-white border border-[#1C1B1A]/10 space-y-3">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C827A] block">
                  The Spatial Challenge
                </span>
                <p className="text-xs sm:text-sm text-[#1C1B1A]/80 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#B39266]/30 space-y-3">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B39266] block">
                  ZEDesign Solution
                </span>
                <p className="text-xs sm:text-sm text-[#1C1B1A]/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Before / After Slider (if project has one) */}
            {project.beforeAfter && (
              <section className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-[#1C1B1A]">
                    Transformation Showcase
                  </h3>
                  <span className="text-xs text-[#8C827A] font-mono">Interactive Comparison</span>
                </div>
                <BeforeAfterSlider
                  beforeImage={project.beforeAfter.beforeImage}
                  afterImage={project.beforeAfter.afterImage}
                  beforeLabel={project.beforeAfter.beforeLabel}
                  afterLabel={project.beforeAfter.afterLabel}
                  note={project.beforeAfter.note}
                  onOpenVideoStudio={onOpenVideoStudio}
                />
              </section>
            )}

            {/* Design Details & Materials */}
            <section className="space-y-4 pt-4">
              <h3 className="font-serif text-2xl text-[#1C1B1A]">
                Architectural Detailing & Finishes
              </h3>
              <ul className="space-y-2.5">
                {project.designDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1C1B1A]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B39266] mt-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Deliverables, Testimonial & Contact Trigger */}
          <div className="lg:col-span-5 space-y-8">
            {/* Services Delivered */}
            <div className="bg-white p-6 sm:p-8 border border-[#1C1B1A]/10 space-y-5">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1B1A] border-b border-[#1C1B1A]/10 pb-3">
                Services & Deliverables Provided
              </h3>
              <ul className="space-y-3">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1C1B1A]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#606D5E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Quote if available */}
            {project.testimonial && (
              <div className="bg-[#24211E] text-[#FAF8F5] p-6 sm:p-8 space-y-4 border-l-2 border-[#B39266]">
                <Quote className="w-6 h-6 text-[#C5A880]/40" />
                <p className="font-serif italic text-base sm:text-lg leading-relaxed text-[#FAF8F5]">
                  “{project.testimonial.quote}”
                </p>
                <div className="pt-2 border-t border-white/10">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white">
                    {project.testimonial.author}
                  </span>
                  <span className="block text-xs text-[#A69E97]">
                    {project.testimonial.role}
                  </span>
                </div>
              </div>
            )}

            {/* Direct Project Discussion Card */}
            <div className="p-6 bg-[#FAF8F5] border border-[#1C1B1A]/10 space-y-4">
              <h4 className="font-serif text-xl text-[#1C1B1A]">
                Planning a similar hospitality or residential project?
              </h4>
              <p className="text-xs text-[#8C827A] leading-relaxed">
                Zoe Nicola Greenwood can assess your space, review CAD plans, and discuss cover yields or turnkey fit-out budgets.
              </p>
              <button
                onClick={onNavigateToContact}
                className="w-full py-3 bg-[#1C1B1A] hover:bg-[#343230] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B39266]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {project.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-[#1C1B1A]/10 pb-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A]">
                Project Gallery
              </h2>
              <p className="text-xs text-[#8C827A] mt-0.5">
                Click any photograph to view in high-resolution lightbox
              </p>
            </div>
            <span className="text-xs text-[#8C827A] font-mono">
              {project.gallery.length + 1} Photographs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenLightbox(idx + 1)}
                className="group cursor-pointer space-y-2"
              >
                <div className="relative aspect-16/10 max-h-[220px] overflow-hidden bg-[#1C1B1A]/5 border border-[#1C1B1A]/10">
                  <OptimizedImage
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    maxWidth={900}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="p-2 rounded-full bg-white/90 text-[#1C1B1A]">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#8C827A] font-light line-clamp-2">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#1C1B1A]/10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C827A] hover:text-[#1C1B1A] flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Projects</span>
        </button>

        {nextProject && (
          <button
            onClick={() => onNavigateProject(nextProject.slug)}
            className="text-right group flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#1C1B1A] hover:text-[#B39266]"
          >
            <div>
              <span className="text-[10px] text-[#8C827A] block font-normal">Next Case Study</span>
              <span className="font-serif text-lg font-normal lowercase capitalize group-hover:underline">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#B39266] transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))}
      />
    </article>
  );
};
