import React from 'react';
import { OptimizedImage } from './OptimizedImage';
import { 
  ChefHat, 
  CheckCircle2, 
  Wind, 
  ShieldCheck, 
  Zap, 
  Utensils, 
  ArrowRight, 
  Sliders, 
  FileCheck, 
  Layers, 
  Sparkles, 
  Ruler, 
  Clock 
} from 'lucide-react';

interface KitchensViewProps {
  onNavigateToContact: () => void;
  onNavigateToToolkit: () => void;
}

export const KitchensView: React.FC<KitchensViewProps> = ({
  onNavigateToContact,
  onNavigateToToolkit
}) => {
  const painPoints = [
    {
      problem: 'Kitchen Bottlenecks & Service Slowdowns',
      solution:
        'Ergonomic zoning separating prep, hot cooklines, plating pass, and warewashing to stop staff cross-traffic during peak 80-cover dinner rushes.'
    },
    {
      problem: 'Council Refusals on Extraction & Odour',
      solution:
        'DW/172 ventilation calculations and DEFRA-compliant filtration specifications designed before planning submission to guarantee Environmental Health sign-off.'
    },
    {
      problem: 'Astronomical Commercial Utility Bills',
      solution:
        'High-efficiency induction suites, demand-controlled variable extract systems, and Energy Star / EcoDesign refrigeration reducing operational power draw by up to 28%.'
    },
    {
      problem: 'Overpaying for Catering Equipment',
      solution:
        'Direct trade relationships with premier manufacturers (Rational, Foster, Winterhalter, Blue Seal) saving thousands off list price with direct warranty backing.'
    }
  ];

  const standardsList = [
    'DW/172 Kitchen Ventilation Standard Specification',
    'Gas Safe & Interlock System Compliance (BS 6173)',
    'Food Hygiene Regulations 2006 (UK Environmental Health)',
    'Separate Cooked & Raw Food Preparation Zones',
    'Grade 304 Stainless Steel Custom Fabrication Plans',
    'Underbar Speed Rails & Cocktail Workstation Ergonomics'
  ];

  const brands = [
    'Rational Combi Ovens',
    'Foster Refrigeration',
    'Winterhalter Warewashers',
    'Blue Seal Cooktops',
    'Lincat Heavy-Duty',
    'Gamko Bar Coolers'
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Ribbon */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1B1A] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <ChefHat className="w-3.5 h-3.5 text-[#B39266]" />
            Specialist Studio Capability • 15+ Years Experience
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B1A] tracking-tight mb-5">
            Commercial Kitchen & Bar Design, Specification & Supply
          </h1>

          <p className="text-base sm:text-xl text-[#1C1B1A]/80 leading-relaxed font-light">
            Most interior designers never step foot behind the service pass. At ZEDesign, lead designer Zoe Nicola Greenwood brings over 15 years of dedicated commercial kitchen planning, ventilation compliance, and heavy-duty equipment specification.
          </p>
        </div>

        {/* Hero Showcase Image */}
        <div className="relative aspect-16/8 sm:aspect-21/9 max-h-[340px] overflow-hidden bg-[#1C1B1A]/10 border border-[#1C1B1A]/10 mb-16">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=80"
            alt="Stainless steel commercial kitchen design and cookline specification by ZEDesign"
            className="w-full h-full object-cover"
            priority={true}
            maxWidth={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B1A]/80 via-transparent to-transparent flex items-end p-6 sm:p-10 pointer-events-none">
            <div className="text-white max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-1">
                Engineered for High-Yield Service
              </span>
              <p className="font-serif text-lg sm:text-2xl font-light">
                “A restaurant lives or dies by its kitchen workflow. When the pass moves effortlessly, tables turn smoothly and profits follow.”
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Common Operator Bottlenecks Solved */}
        <section className="mb-20">
          <div className="border-b border-[#1C1B1A]/10 pb-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A]">
              Operator Bottlenecks We Eliminate
            </h2>
            <p className="text-xs text-[#8C827A] mt-1">
              Preventing costly rework, environmental health delays, and kitchen chaos before contractor boots hit the floor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 border border-[#1C1B1A]/10 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-amber-700">
                  <span>Challenge #{idx + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-[#1C1B1A]">
                  {item.problem}
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1B1A]/75 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DW/172 Ventilation & Technical Compliance Section */}
        <section className="mb-20 p-8 sm:p-12 bg-white border border-[#1C1B1A]/10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B39266] font-semibold">
                <Wind className="w-4 h-4" />
                <span>Ventilation & Hygiene Compliance</span>
              </div>
              <h2 className="font-serif text-3xl text-[#1C1B1A]">
                DW/172 Extraction, Odour Abatement & Building Control
              </h2>
              <p className="text-xs sm:text-sm text-[#1C1B1A]/75 leading-relaxed">
                Commercial kitchen ventilation is the most common reason for planning refusal and Environmental Health closures in Lancashire and the UK. We calculate canopy capture velocities, supply-air induction ratios, electrostatic precipitator (ESP) units, and carbon filtration so your venue opens without regulatory delay.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {standardsList.map((std, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#1C1B1A]/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#606D5E] shrink-0" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#FAF8F5] p-6 sm:p-8 border border-[#1C1B1A]/10 space-y-4">
                <h3 className="font-serif text-xl text-[#1C1B1A]">
                  Equipment Procurement & Direct Supply
                </h3>
                <p className="text-xs text-[#8C827A] leading-relaxed">
                  We don't simply produce CAD plans; we provide full specification schedules with cut sheets, service connection requirements (electric, gas, water, waste), and competitive pricing through vetted commercial catering partners.
                </p>

                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C827A] block mb-2 font-mono">
                    Direct Tier-1 Brand Specifications
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((b, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white border border-[#1C1B1A]/10 text-xs text-[#1C1B1A] font-medium"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C1B1A]/10 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onNavigateToToolkit}
                    className="px-4 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/20 hover:border-[#1C1B1A] text-xs uppercase tracking-wider font-semibold text-[#1C1B1A] transition-colors"
                  >
                    Download Kitchen Checklist
                  </button>
                  <button
                    onClick={onNavigateToContact}
                    className="px-4 py-2.5 bg-[#1C1B1A] hover:bg-[#343230] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    Request Kitchen Layout Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bar & Cocktail Station Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-4/3 max-h-[290px] overflow-hidden bg-[#1C1B1A]/10 border border-[#1C1B1A]/10">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
                  alt="Cocktail bar workstation and underbar speed rails design"
                  className="w-full h-full object-cover"
                  maxWidth={900}
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B39266] font-semibold">
                Front-of-House Integration
              </span>
              <h2 className="font-serif text-3xl text-[#1C1B1A]">
                High-Speed Bar & Cocktail Stations
              </h2>
              <p className="text-xs sm:text-sm text-[#1C1B1A]/75 leading-relaxed">
                A gorgeous bar is useless if bartenders have to take six steps to reach ice, citrus, glassware, and taps. We engineer ergonomic bartender cockpits: integrated speed rails, insulated ice wells, quick-rinse glass sprayers, back-bar bottle display step-downs, and beer pythons integrated invisibly.
              </p>
              <div className="p-4 bg-white border border-[#1C1B1A]/10 text-xs text-[#1C1B1A]/80 italic">
                “Every second saved per serve equals an additional £3,000–£8,000 in gross margin over a busy weekend trading period.”
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-12 bg-[#24211E] text-[#FAF8F5] text-center max-w-4xl mx-auto border-t-2 border-[#B39266] space-y-4">
          <h2 className="font-serif text-2xl sm:text-4xl text-white">
            Ready to design your commercial kitchen or bar?
          </h2>
          <p className="text-xs sm:text-sm text-[#DCD7D0] max-w-xl mx-auto leading-relaxed">
            Send us your architectural shell drawings or book an on-site visit in Preston, Lancashire, or anywhere across the North West.
          </p>
          <div className="pt-2">
            <button
              onClick={onNavigateToContact}
              className="px-8 py-3.5 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              Discuss Your Commercial Kitchen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
