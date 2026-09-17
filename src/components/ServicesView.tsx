import React from 'react';
import { Service } from '../types';
import { ArrowRight, CheckCircle2, Sparkles, ChefHat, Ruler, Layers, ShieldCheck } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface ServicesViewProps {
  services: Service[];
  onSelectService: (slug: string) => void;
  onNavigateToContact: () => void;
  onNavigateToKitchens: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  services,
  onSelectService,
  onNavigateToContact,
  onNavigateToKitchens
}) => {
  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1B1A]/5 text-[#8C827A] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B39266]" />
            Complete Spatial Architecture & Execution
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B1A] tracking-tight mb-4">
            Interior Design Services
          </h1>

          <p className="text-base sm:text-lg text-[#1C1B1A]/75 leading-relaxed font-light">
            We deliver the rare intersection of creative atmosphere and rigorous operational compliance. Every space is planned for guest delight, staff efficiency, and commercial profitability.
          </p>
        </div>

        {/* Featured Specialist Banner: Commercial Kitchens */}
        <div className="mb-16 p-8 sm:p-10 bg-[#24211E] text-[#FAF8F5] border-l-4 border-[#B39266] flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold">
              <ChefHat className="w-4 h-4" />
              <span>Specialist Capability • 15+ Years Experience</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Commercial Kitchen & Bar Specification, Layout & Supply
            </h2>
            <p className="text-xs sm:text-sm text-[#DCD7D0] font-light">
              Full DW/172 extraction compliance, heavy cookline engineering, chef workflow ergonomics, and catering equipment trade discounts.
            </p>
          </div>

          <button
            onClick={onNavigateToKitchens}
            className="shrink-0 px-6 py-3.5 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.18em] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Explore Kitchens & Bars</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid of All Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white border border-[#1C1B1A]/10 shadow-xs overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-[#B39266]"
            >
              <div>
                <div className="relative aspect-16/9 max-h-[240px] overflow-hidden bg-[#1C1B1A]/5">
                  <OptimizedImage
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                    maxWidth={1000}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-[#1C1B1A]/90 text-white text-[10px] uppercase tracking-wider font-semibold">
                      {service.tagline}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-serif text-2xl text-[#1C1B1A] group-hover:text-[#B39266] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1C1B1A]/75 leading-relaxed font-light">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-[#1C1B1A]/10">
                    <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#8C827A] mb-2.5">
                      Included Deliverables
                    </h4>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((del, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#1C1B1A]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#606D5E] mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:px-8 pb-8 pt-0 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1B1A] hover:text-[#B39266] transition-colors"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Booking CTA */}
        <div className="text-center max-w-2xl mx-auto py-8">
          <h3 className="font-serif text-2xl text-[#1C1B1A] mb-3">
            Not sure which service fits your project phase?
          </h3>
          <p className="text-xs sm:text-sm text-[#8C827A] mb-6">
            We are always happy to review your lease drawings or discuss your space over a friendly phone call.
          </p>
          <button
            onClick={onNavigateToContact}
            className="px-8 py-3.5 bg-[#1C1B1A] hover:bg-[#343230] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] transition-colors shadow-xs cursor-pointer"
          >
            Discuss Your Space With Zoe
          </button>
        </div>
      </div>
    </div>
  );
};
