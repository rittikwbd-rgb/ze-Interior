import React from 'react';
import { LocationPage } from '../types';
import { MapPin, ArrowRight, Sparkles, Clock, Compass } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface LocationsViewProps {
  locations: LocationPage[];
  onSelectLocation: (slug: string) => void;
  onNavigateToContact: () => void;
}

export const LocationsView: React.FC<LocationsViewProps> = ({
  locations,
  onSelectLocation,
  onNavigateToContact
}) => {
  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1B1A]/5 text-[#8C827A] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#B39266]" />
            Local Hub & Regional Service Network
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B1A] tracking-tight mb-5">
            Interior Design Studios & Service Areas
          </h1>

          <p className="text-base sm:text-xl text-[#1C1B1A]/80 leading-relaxed font-light">
            Headquartered in Preston, Lancashire, ZEDesign Interiors designs restaurants, bars, commercial kitchens, and high-end residences across the North West and throughout the United Kingdom.
          </p>
        </div>

        {/* Studio Hub Feature Card */}
        <div className="mb-16 p-8 sm:p-10 bg-white border border-[#1C1B1A]/15 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266]">
                Studio Headquarters & Primary Workshop
              </span>
              <h2 className="font-serif text-3xl text-[#1C1B1A]">
                Preston, Lancashire — Serving the North West & UK
              </h2>
              <p className="text-xs sm:text-sm text-[#1C1B1A]/75 leading-relaxed">
                Our central Preston base allows us to provide rapid site surveys, contractor meetings, and build supervision throughout Lancashire (Ribble Valley, Fylde, Lancaster), the Lake District, Manchester, and Liverpool.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => onSelectLocation('preston')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1C1B1A] hover:bg-[#343230] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Preston Hub Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B39266]" />
              </button>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {locations.map((loc) => (
            <article
              key={loc.id}
              className="bg-white border border-[#1C1B1A]/10 shadow-xs overflow-hidden flex flex-col justify-between group hover:border-[#B39266] transition-colors"
            >
              <div>
                <div className="relative aspect-16/10 max-h-[220px] overflow-hidden bg-[#1C1B1A]/5">
                  <OptimizedImage
                    src={loc.heroImage}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    maxWidth={800}
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1B1A]/85 text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 pointer-events-none">
                    {loc.name}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-2xl text-[#1C1B1A] group-hover:text-[#B39266] transition-colors">
                    {loc.title || loc.name}
                  </h3>
                  <p className="text-xs text-[#1C1B1A]/75 line-clamp-3 leading-relaxed">
                    {loc.intro || loc.overview}
                  </p>
                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-mono text-[#8C827A] block mb-1">
                      Key Towns & Districts:
                    </span>
                    <p className="text-xs text-[#8C827A] line-clamp-1">
                      {(loc.keyAreas || loc.servicesAvailable).join(', ')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#1C1B1A]/10 mt-4">
                <button
                  onClick={() => onSelectLocation(loc.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1B1A] group-hover:text-[#B39266] transition-colors"
                >
                  <span>Explore {loc.name} Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* UK-wide Commission Banner */}
        <div className="p-8 sm:p-12 bg-[#24211E] text-white flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#B39266]">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Based outside the North West?
            </h3>
            <p className="text-xs sm:text-sm text-[#DCD7D0]">
              From private residential commissions in Monaco to hospitality roll-outs in London and the Scottish Borders, we accept selected commissions nationwide and internationally.
            </p>
          </div>

          <button
            onClick={onNavigateToContact}
            className="shrink-0 px-8 py-3.5 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
          >
            Enquire for Your Region
          </button>
        </div>
      </div>
    </div>
  );
};
