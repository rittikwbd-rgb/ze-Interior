import React from 'react';
import { LocationPage, Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { OptimizedImage } from './OptimizedImage';
import { 
  ArrowLeft, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Compass, 
  Phone 
} from 'lucide-react';

interface LocationDetailViewProps {
  location: LocationPage;
  onBack: () => void;
  onNavigateToContact: () => void;
  onSelectProject: (slug: string) => void;
  localProjects: Project[];
}

export const LocationDetailView: React.FC<LocationDetailViewProps> = ({
  location,
  onBack,
  onNavigateToContact,
  onSelectProject,
  localProjects
}) => {
  return (
    <article className="py-14 sm:py-20 bg-[#FAF8F5]">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8C827A] hover:text-[#1C1B1A] transition-colors focus-ring"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Locations</span>
        </button>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1B1A] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#B39266]" />
            <span>Local Studio Coverage</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1B1A] tracking-tight">
            Interior Design in {location.name}
          </h1>

          <p className="text-base sm:text-xl text-[#1C1B1A]/80 leading-relaxed font-light">
            {location.intro || location.overview}
          </p>
        </div>
      </header>

      {/* Hero Image & Map/Distance Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-16/8 sm:aspect-21/9 max-h-[340px] overflow-hidden bg-[#1C1B1A]/10 border border-[#1C1B1A]/10">
          <OptimizedImage
            src={location.heroImage}
            alt={`Interior design projects in ${location.name} by ZEDesign`}
            className="w-full h-full object-cover"
            priority={true}
            maxWidth={1400}
          />
          <div className="absolute top-4 right-4 bg-[#1C1B1A]/90 backdrop-blur-xs text-[#FAF8F5] p-3 text-xs flex items-center gap-2 border border-white/10">
            <Clock className="w-4 h-4 text-[#B39266]" />
            <span>Studio Base: Preston, Lancashire ({location.distanceFromStudio || 'Direct Access'})</span>
          </div>
        </div>
      </div>

      {/* Main Content Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Local Expertise & Sectors */}
          <div className="lg:col-span-7 space-y-8">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A]">
                Local Character & Spatial Context
              </h2>
              <p className="text-sm text-[#1C1B1A]/80 leading-relaxed">
                {location.description || location.localContext}
              </p>
            </section>

            {/* Key Areas Covered */}
            <section className="p-6 bg-white border border-[#1C1B1A]/10 space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266]">
                Neighbourhoods & Key Towns Served
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {(location.keyAreas || location.servicesAvailable).map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#FAF8F5] text-xs font-medium text-[#1C1B1A] border border-[#1C1B1A]/10"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </section>

            {/* Services popular in this area */}
            <section className="space-y-4">
              <h3 className="font-serif text-2xl text-[#1C1B1A]">
                Popular Services in {location.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(location.servicesHighlighted || location.servicesAvailable).map((s, idx) => (
                  <div key={idx} className="p-4 bg-white border border-[#1C1B1A]/10 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#606D5E] shrink-0" />
                    <span className="text-xs sm:text-sm text-[#1C1B1A] font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Local Consultation Trigger */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white border border-[#1C1B1A]/10 shadow-xs space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B39266] font-semibold block">
                Local On-Site Surveys
              </span>
              <h3 className="font-serif text-2xl text-[#1C1B1A]">
                Book an on-site visit in {location.name}
              </h3>
              <p className="text-xs text-[#8C827A] leading-relaxed">
                Whether you have an empty shell unit or are planning a complete refurbishment of an operating venue, Zoe Nicola Greenwood conducts comprehensive on-site spatial evaluations.
              </p>

              <div className="pt-2 border-t border-[#1C1B1A]/10 space-y-3">
                <a
                  href="tel:+447792562692"
                  className="w-full py-3 bg-[#FAF8F5] border border-[#1C1B1A]/20 hover:border-[#1C1B1A] text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B39266]" />
                  <span>Call Direct: 07792 562692</span>
                </a>

                <button
                  onClick={onNavigateToContact}
                  className="w-full py-3 bg-[#1C1B1A] hover:bg-[#343230] text-white text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Enquire for {location.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B39266]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local Projects Showcase */}
      {localProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="border-b border-[#1C1B1A]/10 pb-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A]">
              Selected Projects in or near {location.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localProjects.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
