import React from 'react';
import { Service, Project } from '../types';
import { OptimizedImage } from './OptimizedImage';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  ChefHat, 
  Ruler, 
  Clock 
} from 'lucide-react';

interface ServiceDetailViewProps {
  service: Service;
  onBack: () => void;
  onNavigateToContact: () => void;
  onSelectProject: (slug: string) => void;
  relatedProjects: Project[];
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onNavigateToContact,
  onSelectProject,
  relatedProjects
}) => {
  return (
    <article className="py-14 sm:py-20 bg-[#FAF8F5]">
      {/* Top Back Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8C827A] hover:text-[#1C1B1A] transition-colors focus-ring"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Services</span>
        </button>
      </div>

      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1B1A] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold">
            {service.tagline}
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1B1A] tracking-tight">
            {service.title}
          </h1>
          <p className="text-base sm:text-xl text-[#1C1B1A]/80 leading-relaxed font-light">
            {service.description}
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="aspect-16/8 sm:aspect-21/9 max-h-[340px] overflow-hidden bg-[#1C1B1A]/10 border border-[#1C1B1A]/10">
          <OptimizedImage
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
            priority={true}
            maxWidth={1400}
          />
        </div>
      </div>

      {/* Main Grid: Deliverables & Detailed Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Process & Deep Dive */}
          <div className="lg:col-span-7 space-y-12">
            {/* Process / How it works */}
            {service.process && service.process.length > 0 && (
              <section className="space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A]">
                  Our Structured Methodology
                </h2>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div
                      key={step.step}
                      className="p-6 bg-white border border-[#1C1B1A]/10 flex items-start gap-4"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#1C1B1A] text-[#FAF8F5] flex items-center justify-center font-mono text-sm shrink-0">
                        {step.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg text-[#1C1B1A] font-medium">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#1C1B1A]/75 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="space-y-6 pt-4">
                <div className="border-b border-[#1C1B1A]/10 pb-3">
                  <h2 className="font-serif text-2xl text-[#1C1B1A]">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs text-[#8C827A] mt-1">
                    Clear, transparent operational answers for operators and property owners.
                  </p>
                </div>

                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 bg-white border border-[#1C1B1A]/10 space-y-2">
                      <div className="flex items-start gap-2.5">
                        <HelpCircle className="w-4 h-4 text-[#B39266] shrink-0 mt-0.5" />
                        <h3 className="text-sm font-semibold text-[#1C1B1A]">{faq.question}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1C1B1A]/75 pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right: Deliverables List & CTA Box */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 border border-[#1C1B1A]/10 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1B1A] border-b border-[#1C1B1A]/10 pb-3">
                Key Deliverables & Specifications
              </h3>
              <ul className="space-y-3.5">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1C1B1A]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#606D5E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Consultation Box */}
            <div className="p-6 sm:p-8 bg-[#24211E] text-[#FAF8F5] space-y-4 border-l-2 border-[#B39266]">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold block">
                Have an Active Project?
              </span>
              <h4 className="font-serif text-2xl text-white">
                Book a design consultation with Zoe Nicola Greenwood
              </h4>
              <p className="text-xs text-[#DCD7D0] leading-relaxed">
                We will discuss your layout, regulatory considerations, and fit-out timeline from our Preston studio.
              </p>
              <button
                onClick={onNavigateToContact}
                className="w-full py-3 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Enquire About {service.title.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Related Case Studies */}
            {relatedProjects.length > 0 && (
              <div className="p-6 bg-[#FAF8F5] border border-[#1C1B1A]/10 space-y-4">
                <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1C1B1A]">
                  Related Case Studies
                </h4>
                <div className="space-y-3">
                  {relatedProjects.slice(0, 2).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => onSelectProject(p.slug)}
                      className="w-full flex items-center gap-3 p-2 bg-white border border-[#1C1B1A]/10 hover:border-[#B39266] transition-colors text-left group"
                    >
                      <div className="w-14 h-14 shrink-0 overflow-hidden">
                        <OptimizedImage
                          src={p.heroImage}
                          alt={p.title}
                          className="w-full h-full object-cover"
                          maxWidth={300}
                        />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] uppercase text-[#8C827A] block font-mono">
                          {p.sector} • {p.location}
                        </span>
                        <span className="font-serif text-sm text-[#1C1B1A] font-medium group-hover:underline truncate block">
                          {p.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
