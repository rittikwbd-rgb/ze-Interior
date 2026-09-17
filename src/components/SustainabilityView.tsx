import React from 'react';
import { OptimizedImage } from './OptimizedImage';
import { 
  Leaf, 
  Recycle, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  TreeDeciduous, 
  Hammer, 
  Flame 
} from 'lucide-react';

interface SustainabilityViewProps {
  onNavigateToContact: () => void;
  onNavigateToProjects: () => void;
}

export const SustainabilityView: React.FC<SustainabilityViewProps> = ({
  onNavigateToContact,
  onNavigateToProjects
}) => {
  const commitments = [
    {
      icon: TreeDeciduous,
      title: 'Architectural Salvage & Lancashire Reclaimed Timber',
      description:
        'We source authentic Victorian mill pine, weathered oak joists, and reclaimed church pews from regional reclamation yards across Preston and the North West.'
    },
    {
      icon: Recycle,
      title: 'Upcycled & Restored Contract Seating',
      description:
        'Rather than buying disposable imported flat-pack chairs, we re-upholster commercial frames with Crib 5 fire-retardant British wools and renew solid timber tabletops.'
    },
    {
      icon: Flame,
      title: 'Low-VOC & Breathable Mineral Finishes',
      description:
        'Eliminating harsh synthetic solvent odours from dining areas with plant-based limewashes, water-based varnishes, and breathable silicate coatings.'
    },
    {
      icon: Hammer,
      title: 'Built for 10+ Years of High Footfall',
      description:
        'The greenest interior is the one you do not have to rip out in three years. We design timeless architectural foundations that resist commercial wear and tear.'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#606D5E]/10 text-[#606D5E] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Leaf className="w-3.5 h-3.5" />
            Honest Material Philosophy • Zero Greenwashing
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B1A] tracking-tight mb-5">
            Sustainable Interior Design Rooted in Longevity & Circularity
          </h1>

          <p className="text-base sm:text-xl text-[#1C1B1A]/80 leading-relaxed font-light">
            We reject the disposable “fast-furniture” culture that plagues hospitality. Our approach to sustainable interior design is grounded in authentic reclaimed materials, British craft, and building spaces built to thrive for decades.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {commitments.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="bg-white p-8 border border-[#1C1B1A]/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#606D5E]/15 text-[#606D5E] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1C1B1A]">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1B1A]/75 leading-relaxed">
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Material Showcase in Real Venues */}
        <div className="p-8 sm:p-12 bg-white border border-[#1C1B1A]/10 shadow-xs mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B39266] font-semibold block mb-2">
              Case Study Examples
            </span>
            <h2 className="font-serif text-3xl text-[#1C1B1A]">
              Where Reclaimed Meets High-End Dining
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="aspect-16/10 max-h-[190px] overflow-hidden bg-[#1C1B1A]/10">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Scotts Bistro reclaimed wall cladding"
                  className="w-full h-full object-cover"
                  maxWidth={700}
                />
              </div>
              <h4 className="font-serif text-lg text-[#1C1B1A]">Scotts Bistro, Kirkham</h4>
              <p className="text-xs text-[#8C827A] leading-relaxed">
                Repurposed Lancashire mill boards for feature dining banquette cladding, coupled with LED filament lighting.
              </p>
            </div>

            <div className="space-y-3">
              <div className="aspect-16/10 max-h-[190px] overflow-hidden bg-[#1C1B1A]/10">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                  alt="The Explorer taproom reclaimed timber"
                  className="w-full h-full object-cover"
                  maxWidth={700}
                />
              </div>
              <h4 className="font-serif text-lg text-[#1C1B1A]">The Explorer Taproom, Garstang</h4>
              <p className="text-xs text-[#8C827A] leading-relaxed">
                Salvaged industrial steel pipework and upcycled brewery casks re-engineered into ambient bar lighting and footrails.
              </p>
            </div>

            <div className="space-y-3">
              <div className="aspect-16/10 max-h-[190px] overflow-hidden bg-[#1C1B1A]/10">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80"
                  alt="Lake District natural stone and slate"
                  className="w-full h-full object-cover"
                  maxWidth={700}
                />
              </div>
              <h4 className="font-serif text-lg text-[#1C1B1A]">Harleys Bistro, Grasmere</h4>
              <p className="text-xs text-[#8C827A] leading-relaxed">
                Locally sourced Westmorland green slate bar counter tops and woollen tweed upholstery woven within 20 miles.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 bg-[#24211E] text-white flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#606D5E]">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Planning a conscious commercial or residential fit-out?
            </h3>
            <p className="text-xs sm:text-sm text-[#DCD7D0]">
              Let’s incorporate authentic reclaimed elements and energy-efficient specifications into your next venue.
            </p>
          </div>

          <button
            onClick={onNavigateToContact}
            className="shrink-0 px-8 py-3.5 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
          >
            Discuss Sustainable Fit-Out
          </button>
        </div>
      </div>
    </div>
  );
};
