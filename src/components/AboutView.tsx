import React from 'react';
import { 
  Award, 
  Sparkles, 
  ChefHat, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Compass, 
  HeartHandshake, 
  Leaf, 
  ShieldCheck 
} from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface AboutViewProps {
  onNavigateToContact: () => void;
  onNavigateToProjects: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigateToContact,
  onNavigateToProjects
}) => {
  const milestones = [
    {
      year: '2002',
      title: 'Studio Founded',
      description: 'Zoe Nicola Greenwood establishes ZEDesign Interiors in Preston, focusing on bespoke commercial and residential spaces.'
    },
    {
      year: '2008',
      title: 'Specialist Commercial Kitchen Division',
      description: 'Expanding into full technical commercial kitchen planning, extraction engineering, and catering equipment specification.'
    },
    {
      year: '2014',
      title: 'Monaco Luxury Residential Commission',
      description: 'Appointed as lead interior designer for a high-value Mediterranean villa, fusing British craftsmanship with continental luxury.'
    },
    {
      year: '2018',
      title: 'SpongeBob SquarePants Flagship',
      description: 'Designing the licensed retail immersion store at Blackpool Pleasure Beach, managing huge footfall circulation.'
    },
    {
      year: '2021',
      title: 'Scotts Bistro & Lake District Venues',
      description: 'Acclaimed transformation of Scotts Bistro Kirkham and Harleys Bistro Grasmere, establishing regional culinary benchmarks.'
    },
    {
      year: 'Present',
      title: '23+ Years of Practical Design Excellence',
      description: 'Leading restaurant launches, hotel refurbishments, and high-end residential interiors across Lancashire and the UK.'
    }
  ];

  const values = [
    {
      title: 'Function Dictates Form',
      description: 'A beautiful dining room is an expensive liability if staff struggle to move, the pass is cold, or acoustics make conversation difficult.'
    },
    {
      title: 'Honest Sustainability',
      description: 'We salvage and reclaim authentic Lancashire architectural elements, specifying circular timber, low-VOC finishes, and energy-smart gear.'
    },
    {
      title: 'Zero Studio Conceit',
      description: 'We collaborate directly with chefs, general managers, tradespeople, and clients. Pragmatic, friendly, and completely transparent.'
    },
    {
      title: 'Full Regulatory Rigour',
      description: 'Every CAD blueprint complies strictly with Building Regulations, Fire Safety (Approved Document B), and DW/172 extraction standards.'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1B1A]/5 text-[#8C827A] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B39266]" />
            The Founder & Studio Story
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B1A] tracking-tight mb-5">
            23+ Years Designing Spaces That Look Exceptional & Work Brilliantly
          </h1>

          <p className="text-base sm:text-xl text-[#1C1B1A]/80 leading-relaxed font-light">
            Founded in 2002 by lead interior designer Zoe Nicola Greenwood, ZEDesign Interiors is an established British design studio based in Preston, Lancashire. We create commercial venues and luxury residences defined by atmosphere, durability, and operational intelligence.
          </p>
        </div>

        {/* Founder Editorial Portrait & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-24">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[360px] aspect-square max-h-[360px] overflow-hidden bg-[#1C1B1A]/5 border border-[#1C1B1A]/10 shadow-sm">
              <OptimizedImage
                src="/zee-design-image.jpg"
                fallbackSrc="/Zee Design - Image.jpg"
                alt="Zoe Nicola Greenwood - Founder and Lead Designer of ZEDesign Interiors"
                className="w-full h-full object-cover object-top"
                priority={true}
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#1C1B1A]/90 backdrop-blur-xs text-[#FAF8F5] p-3 sm:p-4">
                <span className="font-serif text-base sm:text-lg block">Zoe Nicola Greenwood</span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#C5A880] block">
                  Founder & Principal Designer • Established 2002
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#1C1B1A]/10 pb-4">
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266] mb-2">
                A Message From The Founder
              </h2>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#1C1B1A] leading-snug">
                “Interior design isn't merely selecting paint chips or ordering furniture. It is the architectural choreography of human movement, kitchen heat, lighting warmth, and financial return.”
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#1C1B1A]/80 leading-relaxed">
              With more than two decades in the design industry, Zoe Nicola Greenwood has overseen dozens of hospitality venues, retail concepts, and prestige residential properties. Her career spans private commissions in the South of France to flagship visitor retail at Blackpool Pleasure Beach, alongside landmark North West restaurants like Scotts Bistro in Kirkham and Harleys Bistro in Grasmere.
            </p>

            <p className="text-xs sm:text-sm text-[#1C1B1A]/80 leading-relaxed">
              Zoe is particularly distinguished by her 15+ years of specialist commercial kitchen and bar engineering experience. While many aesthetic designers hand off the kitchen to third parties, Zoe plans the full technical back-of-house flow herself: DW/172 extraction compliance, chef work triangles, waste routing, and heavy-duty cooking suites.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-3.5 bg-white border border-[#1C1B1A]/10">
                <span className="text-[10px] uppercase font-mono text-[#8C827A] block">Experience</span>
                <span className="font-serif text-2xl text-[#1C1B1A] font-semibold">23+ Years</span>
              </div>
              <div className="p-3.5 bg-white border border-[#1C1B1A]/10">
                <span className="text-[10px] uppercase font-mono text-[#8C827A] block">Commercial Kitchens</span>
                <span className="font-serif text-2xl text-[#1C1B1A] font-semibold">15+ Years</span>
              </div>
              <div className="p-3.5 bg-white border border-[#1C1B1A]/10">
                <span className="text-[10px] uppercase font-mono text-[#8C827A] block">Studio Base</span>
                <span className="font-serif text-xl text-[#1C1B1A] font-semibold">Preston, Lancs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Core Values */}
        <section className="mb-24">
          <div className="border-b border-[#1C1B1A]/10 pb-4 mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A]">
              Our Studio Philosophy & Standards
            </h2>
            <p className="text-xs text-[#8C827A] mt-1">
              Guiding principles behind every blueprint, site inspection, and material specification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 border border-[#1C1B1A]/10 space-y-3">
                <span className="text-xs font-mono font-semibold text-[#B39266]">
                  0{idx + 1}.
                </span>
                <h3 className="font-serif text-xl text-[#1C1B1A]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1B1A]/75 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Studio Milestones / Timeline */}
        <section className="mb-24">
          <div className="border-b border-[#1C1B1A]/10 pb-4 mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A]">
              Two Decades of Proven Delivery
            </h2>
            <p className="text-xs text-[#8C827A] mt-1">
              A brief journey through key commissions and studio milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-6 border border-[#1C1B1A]/10 space-y-2">
                <span className="font-serif text-3xl font-semibold text-[#B39266]">
                  {m.year}
                </span>
                <h3 className="font-serif text-lg text-[#1C1B1A]">
                  {m.title}
                </h3>
                <p className="text-xs text-[#1C1B1A]/75 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Bar */}
        <div className="p-8 sm:p-12 bg-[#24211E] text-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#B39266]">
          <div className="space-y-1 max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Work directly with Zoe on your next space
            </h3>
            <p className="text-xs sm:text-sm text-[#DCD7D0] font-light">
              From an informal coffee in Preston to a comprehensive turnkey site appointment across the UK.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onNavigateToProjects}
              className="px-6 py-3 border border-white/20 hover:border-white text-xs uppercase tracking-wider text-white transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={onNavigateToContact}
              className="px-6 py-3 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
