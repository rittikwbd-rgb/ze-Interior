import React from 'react';
import { Project, Service, BlogPost, LocationPage, ViewRoute } from '../types';
import { ProjectCard } from './ProjectCard';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ContactForm } from './ContactForm';
import { OptimizedImage } from './OptimizedImage';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChefHat, 
  CheckCircle2, 
  Sparkles, 
  Ruler, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Quote, 
  Leaf, 
  BookOpen, 
  Phone, 
  Calendar,
  Film
} from 'lucide-react';

interface HomeViewProps {
  navigate: (route: ViewRoute, slug?: string) => void;
  openBookingModal: () => void;
  openVeoModal?: (initialImg?: string) => void;
  projects: Project[];
  services: Service[];
  blogPosts: BlogPost[];
  locations: LocationPage[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  navigate,
  openBookingModal,
  openVeoModal,
  projects,
  services,
  blogPosts,
  locations
}) => {
  const featuredProjects = projects.slice(0, 4);
  const beforeAfterProject = projects.find((p) => p.beforeAfter);

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Feasibility',
      desc: 'On-site survey, lease appraisal, covers yield modelling, and initial budget benchmarking in Preston or UK-wide.'
    },
    {
      num: '02',
      title: 'Spatial Planning & CAD',
      desc: 'Precision 2D technical blueprints mapping back-of-house workflow, front-of-house sightlines, and Building Regs.'
    },
    {
      num: '03',
      title: '3D CGI & Mood Boards',
      desc: 'Photorealistic investor renders, custom lighting layouts, and tactile material boards specified with British makers.'
    },
    {
      num: '04',
      title: 'Kitchen & DW/172 Engineering',
      desc: 'Heavy-duty cookline specification, canopy extraction sizing, odour abatement, and equipment trade discounts.'
    },
    {
      num: '05',
      title: 'Turnkey Site Delivery',
      desc: 'Contractor tendering, trade supervision, bespoke joinery fitting, and snagging through to successful launch day.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* ============================================================
          SECTION 1: EDITORIAL HERO
      ============================================================ */}
      <section id="hero-section" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1C1B1A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.22em] font-medium"
              >
                <Sparkles className="w-3 h-3 text-[#B39266]" />
                <span>Preston, Lancashire & UK Studio • Est. 2002</span>
              </motion.div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1C1B1A] tracking-tight font-normal leading-[1.08]">
                INTERIORS THAT LOOK <span className="italic font-light">EXCEPTIONAL.</span> AND WORK <span className="text-[#B39266]">BRILLIANTLY.</span>
              </h1>

              <p className="text-base sm:text-xl text-[#1C1B1A]/80 leading-relaxed font-light max-w-2xl">
                Award-winning hospitality, commercial kitchen, and luxury residential interior design. Founded by <strong className="font-semibold text-[#1C1B1A]">Zoe Nicola Greenwood</strong> with 23+ years of spatial intelligence across Lancashire and the UK.
              </p>

              {/* Triple CTA Group */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="hero-cta-discuss"
                  onClick={() => navigate('contact')}
                  className="px-7 py-3.5 bg-[#1C1B1A] hover:bg-[#343230] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 shadow-xs cursor-pointer group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B39266] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  id="hero-cta-projects"
                  onClick={() => navigate('projects')}
                  className="px-6 py-3.5 bg-white border border-[#1C1B1A]/20 hover:border-[#1C1B1A] text-[#1C1B1A] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer"
                >
                  View Selected Work
                </button>

                {openVeoModal && (
                  <button
                    id="hero-cta-animate"
                    onClick={() => openVeoModal()}
                    className="px-4 py-3.5 text-xs text-[#B39266] hover:text-[#1C1B1A] uppercase tracking-[0.14em] font-medium flex items-center gap-1.5 transition-colors border border-[#B39266]/30 hover:border-[#B39266] bg-[#C5A880]/10"
                    title="Animate interior photos into cinematic walkthrough videos with Veo 3.1"
                  >
                    <Film className="w-4 h-4 text-[#B39266]" />
                    <span>Animate Space (Veo)</span>
                  </button>
                )}

                <button
                  id="hero-cta-kitchens"
                  onClick={() => navigate('kitchens')}
                  className="px-4 py-3.5 text-xs text-[#8C827A] hover:text-[#1C1B1A] uppercase tracking-[0.14em] font-medium flex items-center gap-1.5 transition-colors"
                >
                  <ChefHat className="w-4 h-4 text-[#B39266]" />
                  <span>Commercial Kitchens</span>
                </button>
              </div>

              {/* Fast trust micro-stats */}
              <div className="pt-8 border-t border-[#1C1B1A]/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] font-semibold block">23+</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C827A]">Years Experience</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] font-semibold block">2002</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C827A]">Studio Founded</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] font-semibold block">15+</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C827A]">Yrs Kitchens</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] font-semibold block">UK</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C827A]">Nationwide</span>
                </div>
              </div>
            </motion.div>

            {/* Right Featured Imagery Stack */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg aspect-16/11 sm:aspect-4/3 max-h-[340px] overflow-hidden bg-[#1C1B1A]/5 border border-[#1C1B1A]/15 shadow-lg">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Scotts Bistro Kirkham dining room by ZEDesign"
                  className="w-full h-full object-cover"
                  priority={true}
                  maxWidth={1000}
                />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#1C1B1A]/90 backdrop-blur-xs text-[#FAF8F5] p-3 sm:p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#C5A880] block">Featured Project</span>
                    <span className="font-serif text-sm sm:text-base block font-medium">Scotts Bistro, Kirkham</span>
                  </div>
                  <button
                    onClick={() => navigate('project-detail', 'scotts-bistro-kirkham')}
                    className="p-2 rounded-full bg-white/10 hover:bg-[#B39266] hover:text-[#1C1B1A] transition-colors"
                    aria-label="View Scotts Bistro"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: EDITORIAL INTRO & ZOE'S POSITIONING
      ============================================================ */}
      <section className="py-20 bg-white border-y border-[#1C1B1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266] block">
                The Practical Design Difference
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1B1A] leading-tight">
                “A beautiful restaurant is useless if the kitchen can’t keep up or the tables don’t turn.”
              </h2>
              <div className="pt-2">
                <span className="font-serif text-lg font-semibold text-[#1C1B1A] block">Zoe Nicola Greenwood</span>
                <span className="text-xs uppercase tracking-wider text-[#8C827A]">Founder & Lead Designer</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#1C1B1A]/80 leading-relaxed font-light">
              <p>
                In hospitality, aesthetics alone are a recipe for operational failure. An exquisite bistro with a poorly ventilated cookline, narrow service corridors, or bottlenecked beverage dispensaries burns through staff and loses high-margin covers every Friday evening.
              </p>
              <p>
                At ZEDesign, we marry architectural mood, acoustic warmth, and tactile reclaimed materials with hardcore back-of-house engineering: DW/172 extraction compliance, Environmental Health food flows, and precise cover density formulas.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('about')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#1C1B1A] hover:text-[#B39266] transition-colors"
                >
                  <span>Read Zoe's Story & Studio Background</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: FEATURED PROJECTS PORTFOLIO
      ============================================================ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-[#1C1B1A]/10 pb-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266] block mb-2">
              Portfolio Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1B1A]">
              Spaces Shaped for Human Connection & Commercial Return
            </h2>
          </div>

          <button
            onClick={() => navigate('projects')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#1C1B1A] hover:text-[#B39266] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              onSelect={(slug) => navigate('project-detail', slug)}
              aspect={idx === 0 ? 'wide' : 'square'}
            />
          ))}
        </div>

        {/* Interactive Transformation Showcase Module (Before/After) */}
        {beforeAfterProject && beforeAfterProject.beforeAfter && (
          <div className="p-8 sm:p-12 bg-white border border-[#1C1B1A]/10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#B39266]/15 text-[#B39266] text-[10px] uppercase font-semibold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B39266] animate-ping" />
                  Live Animated Renovation Scanner
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A]">
                  From Derelict Shell to Thriving Regional Destination
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1B1A]/75 leading-relaxed">
                  Watch the automated scanning comparison between the stripped-out brick shell and the completed, award-winning Scotts Bistro in Kirkham. Switch between automated scan wipe, timelapse morph, or manual inspection.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => navigate('project-detail', beforeAfterProject.slug)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#1C1B1A] hover:text-[#B39266] transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {openVeoModal && (
                    <button
                      type="button"
                      onClick={() => openVeoModal(beforeAfterProject.beforeAfter?.beforeImage)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] border border-[#B39266]/50 hover:border-[#B39266] text-[#B39266] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Film className="w-3.5 h-3.5" />
                      <span>Animate to Video</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="lg:col-span-7">
                <BeforeAfterSlider
                  beforeImage={beforeAfterProject.beforeAfter.beforeImage}
                  afterImage={beforeAfterProject.beforeAfter.afterImage}
                  beforeLabel={beforeAfterProject.beforeAfter.beforeLabel}
                  afterLabel={beforeAfterProject.beforeAfter.afterLabel}
                  note={beforeAfterProject.beforeAfter.note}
                  onOpenVideoStudio={openVeoModal}
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ============================================================
          SECTION 4: COMMERCIAL KITCHENS & BARS CALLOUT
      ============================================================ */}
      <section className="py-20 bg-[#24211E] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A880]/20 text-[#C5A880] text-xs uppercase tracking-[0.2em] font-semibold">
                <ChefHat className="w-4 h-4" />
                <span>Specialist Capability • 15+ Years Back-of-House Experience</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
                Commercial Kitchen & Bar Design, Specification & Supply
              </h2>

              <p className="text-sm sm:text-base text-[#DCD7D0] font-light leading-relaxed">
                Most design studios treat the commercial kitchen as an afterthought to be handed to a sub-contractor. We plan the entire operational spine: DW/172 extraction compliance, chef work triangles, waste routing, stainless steel fabrication, and direct equipment trade pricing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#FAF8F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>DW/172 & DEFRA Odour Planning Compliance</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#FAF8F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Chef Workflow & Food Hygiene Standards</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#FAF8F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Heavy-Duty Cooking Suites (Rational, Foster)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#FAF8F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>High-Volume Cocktail Speed Rail Stations</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('kitchens')}
                  className="px-6 py-3.5 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.18em] transition-colors cursor-pointer"
                >
                  Explore Commercial Kitchens
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="px-6 py-3.5 border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.18em] transition-colors cursor-pointer"
                >
                  Request Kitchen Layout Review
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-16/10 max-h-[280px] overflow-hidden bg-white/5 border border-white/10">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                  alt="Stainless steel commercial kitchen pass designed by ZEDesign"
                  className="w-full h-full object-cover"
                  maxWidth={900}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: SERVICES BREAKDOWN
      ============================================================ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266] block mb-2">
            Integrated Design Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1B1A]">
            From Feasibility & Planning to Launch Day
          </h2>
          <p className="text-sm sm:text-base text-[#1C1B1A]/75 mt-3 font-light">
            Every service is engineered to de-risk your investment and create spaces that operate profitably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.slice(0, 6).map((srv) => (
            <div
              key={srv.id}
              onClick={() => navigate('service-detail', srv.slug)}
              className="p-6 bg-white border border-[#1C1B1A]/10 shadow-xs hover:border-[#B39266] transition-colors cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C827A] font-mono">
                  {srv.tagline}
                </span>
                <h3 className="font-serif text-xl text-[#1C1B1A] group-hover:text-[#B39266] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#1C1B1A]/75 line-clamp-3 leading-relaxed">
                  {srv.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C1B1A]/10 mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] group-hover:text-[#B39266]">
                <span>Details & Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('services')}
            className="px-8 py-3.5 bg-[#1C1B1A] hover:bg-[#343230] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
          >
            Explore All Services & Specifications
          </button>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: HOW WE WORK (METHODOLOGY)
      ============================================================ */}
      <section className="py-20 bg-white border-y border-[#1C1B1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266] block mb-2">
              Our Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1B1A]">
              Rigorous, Step-by-Step Delivery
            </h2>
            <p className="text-xs sm:text-sm text-[#8C827A] mt-2">
              We eliminate guesswork with transparent milestones, regulatory checks, and clear budget gates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div key={step.num} className="p-5 bg-[#FAF8F5] border border-[#1C1B1A]/10 space-y-2.5">
                <span className="font-serif text-2xl font-bold text-[#B39266] block">
                  {step.num}
                </span>
                <h3 className="font-serif text-base text-[#1C1B1A] font-semibold">
                  {step.title}
                </h3>
                <p className="text-xs text-[#1C1B1A]/70 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: FREE TOOLKIT LEAD MAGNET HERO
      ============================================================ */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 bg-[#FAF8F5] border border-[#1C1B1A]/15 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#1C1B1A] text-white text-[10px] uppercase tracking-wider font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-[#B39266]" />
                <span>Free Operator Download</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1B1A]">
                Planning a Hospitality Venue?
              </h2>
              <p className="text-sm sm:text-base text-[#1C1B1A]/80 font-light leading-relaxed max-w-2xl">
                Download the free <strong className="font-semibold text-[#1C1B1A]">Hospitality Start-Up Toolkit</strong> and start planning your project with greater clarity. Includes cover calculations, kitchen compliance checklists, budget allocations, and contractor tender questions.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => navigate('toolkit')}
                className="w-full sm:w-auto px-8 py-4 bg-[#B39266] hover:bg-[#A38256] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Download Free Toolkit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: CLIENT TESTIMONIALS & SOCIAL PROOF
      ============================================================ */}
      <section className="py-20 bg-[#24211E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-2">
              Client Endorsements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Trusted by Operators Across the UK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between">
              <Quote className="w-6 h-6 text-[#C5A880]/50" />
              <p className="font-serif italic text-sm sm:text-base text-[#DCD7D0] leading-relaxed">
                “Zoe took a derelict shell and turned it into the beating heart of Kirkham. Our turnover exceeded all first-year projections because the space is as pleasant to work in as it is to dine in.”
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className="font-serif text-sm font-semibold text-white block">David Scott</span>
                <span className="text-xs text-[#A69E97]">Owner, Scotts Bistro, Kirkham</span>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between">
              <Quote className="w-6 h-6 text-[#C5A880]/50" />
              <p className="font-serif italic text-sm sm:text-base text-[#DCD7D0] leading-relaxed">
                “Zoe’s commercial kitchen expertise saved us thousands on extraction headaches. She understands chef workflow better than anyone we’ve worked with in 20 years.”
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className="font-serif text-sm font-semibold text-white block">Marcus Harley</span>
                <span className="text-xs text-[#A69E97]">Managing Director, Harleys Bistro Grasmere</span>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between">
              <Quote className="w-6 h-6 text-[#C5A880]/50" />
              <p className="font-serif italic text-sm sm:text-base text-[#DCD7D0] leading-relaxed">
                “From high-traffic footfall in theme park retail to private bespoke villas, Zoe brings exceptional aesthetic taste without ever losing sight of commercial reality.”
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className="font-serif text-sm font-semibold text-white block">Commercial Client</span>
                <span className="text-xs text-[#A69E97]">Blackpool Pleasure Beach Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: LOCAL SERVICE HUBS
      ============================================================ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#1C1B1A]/10 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266] block mb-2">
              Regional Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1B1A]">
              Service Areas Across Lancashire & The UK
            </h2>
          </div>
          <button
            onClick={() => navigate('locations')}
            className="text-xs uppercase tracking-[0.16em] font-semibold text-[#1C1B1A] hover:text-[#B39266] transition-colors"
          >
            All Locations
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => navigate('location-detail', loc.slug)}
              className="p-4 bg-white border border-[#1C1B1A]/10 hover:border-[#B39266] transition-colors text-center group"
            >
              <MapPin className="w-4 h-4 text-[#B39266] mx-auto mb-1.5" />
              <span className="font-serif text-sm text-[#1C1B1A] font-semibold block group-hover:underline">
                {loc.name}
              </span>
              <span className="text-[10px] text-[#8C827A] block font-mono">Hub Coverage</span>
            </button>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 10: JOURNAL INSIGHTS TEASER
      ============================================================ */}
      <section className="py-20 bg-white border-y border-[#1C1B1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-[#1C1B1A]/10 pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266] block mb-2">
                Operator Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1B1A]">
                Recent Insights & Guides
              </h2>
            </div>
            <button
              onClick={() => navigate('blog')}
              className="text-xs uppercase tracking-[0.16em] font-semibold text-[#1C1B1A] hover:text-[#B39266] transition-colors"
            >
              View All Articles
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((bp) => (
              <article
                key={bp.id}
                onClick={() => navigate('blog-detail', bp.slug)}
                className="group cursor-pointer space-y-3"
              >
                <div className="aspect-16/10 max-h-[200px] overflow-hidden bg-[#1C1B1A]/5 border border-[#1C1B1A]/10">
                  <OptimizedImage
                    src={bp.heroImage}
                    alt={bp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    maxWidth={800}
                  />
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase font-mono text-[#8C827A]">
                  <span>{bp.category}</span>
                  <span>•</span>
                  <span>{bp.readTime}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1B1A] group-hover:text-[#B39266] transition-colors leading-snug">
                  {bp.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11: FINAL CONVERSION & CONTACT FORM
      ============================================================ */}
      <section id="contact-section" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B39266] block">
              Start The Conversation
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1B1A] tracking-tight">
              Let’s Talk About Your Project
            </h2>

            <p className="text-sm sm:text-base text-[#1C1B1A]/80 leading-relaxed font-light">
              Whether you are acquiring a new site, refurbishing an established venue, or planning a luxury residence, Zoe Nicola Greenwood offers practical guidance and creative vision from day one.
            </p>

            <div className="space-y-4 pt-4 text-xs text-[#1C1B1A]/80 border-t border-[#1C1B1A]/10">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#B39266]" />
                <span>Preston Studio, Lancashire, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B39266]" />
                <a href="tel:+447792562692" className="hover:text-[#B39266] font-semibold text-sm">
                  +44 7792 562692
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#B39266]" />
                <button
                  onClick={openBookingModal}
                  className="hover:underline text-[#B39266] font-semibold"
                >
                  Schedule a direct 30-min consultation slot
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm openBookingModal={openBookingModal} />
          </div>
        </div>
      </section>
    </div>
  );
};
