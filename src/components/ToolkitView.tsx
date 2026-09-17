import React, { useState } from 'react';
import { ToolkitSubmission } from '../types';
import { analytics } from '../utils/analytics';
import { 
  CheckCircle2, 
  Download, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ChefHat, 
  Ruler, 
  Coins, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

interface ToolkitViewProps {
  onSuccessNavigateToContact?: () => void;
}

export const ToolkitView: React.FC<ToolkitViewProps> = ({ onSuccessNavigateToContact }) => {
  const [formData, setFormData] = useState<ToolkitSubmission>({
    name: '',
    businessName: '',
    location: '',
    email: '',
    projectType: 'New Hospitality Venue',
    status: 'planning',
    consent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.businessName) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    analytics.track('toolkit_download_submission', 'conversion', formData.projectType, {
      businessName: formData.businessName,
      location: formData.location
    });

    setSubmitted(true);
    setDownloadReady(true);
    setErrorMsg('');
  };

  const handlePrintDownload = () => {
    analytics.track('toolkit_pdf_download_triggered', 'lead', 'Hospitality Start-Up Toolkit PDF');
    window.print();
  };

  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb / Label */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1B1A]/5 text-[#8C827A] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B39266]" />
            Free Operator Asset • 2025 Edition
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1B1A] mb-5">
            Planning a Hospitality Venue?
          </h1>

          <p className="text-base sm:text-lg text-[#1C1B1A]/75 leading-relaxed">
            Download the free <strong className="font-semibold text-[#1C1B1A]">Hospitality Start-Up Toolkit</strong> and start planning your project with greater operational clarity, accurate cost allowances, and verified compliance benchmarks.
          </p>
        </div>

        {/* Two Column Layout: Value Breakdown vs Form / Download stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: What's inside the toolkit */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-8 border border-[#1C1B1A]/10 shadow-xs">
              <h2 className="font-serif text-2xl text-[#1C1B1A] mb-4">
                What’s Included in the Toolkit
              </h2>
              <p className="text-sm text-[#8C827A] mb-6">
                Created directly by Zoe Nicola Greenwood from 23+ years of designing restaurants, bars, and commercial kitchens across Lancashire and the UK.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-[#FAF8F5] text-[#B39266] border border-[#1C1B1A]/10">
                    <Ruler className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1B1A]">1. Cover Density & Space Planning Matrix</h3>
                    <p className="text-xs text-[#8C827A] mt-0.5">
                      How to calculate sq ft per cover for casual dining (14-16 sq ft) vs fine dining (18-22 sq ft), plus table turn models.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-[#FAF8F5] text-[#B39266] border border-[#1C1B1A]/10">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1B1A]">2. Commercial Kitchen & Bar Flow Checklist</h3>
                    <p className="text-xs text-[#8C827A] mt-0.5">
                      Separation of raw vs cooked, pass heating requirements, DW/172 extraction compliance, and underbar cocktail wells.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-[#FAF8F5] text-[#B39266] border border-[#1C1B1A]/10">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1B1A]">3. Budget Allocation & Cost-per-Sq-Ft Guide</h3>
                    <p className="text-xs text-[#8C827A] mt-0.5">
                      Realistic 2025 UK figures for fit-out, joinery, mechanical extraction, professional fees, and contingency reserves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-[#FAF8F5] text-[#B39266] border border-[#1C1B1A]/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1B1A]">4. 12-Week Hospitality Pre-Launch Critical Path</h3>
                    <p className="text-xs text-[#8C827A] mt-0.5">
                      From lease signing and licensing to contractor tenders, snagging, Environmental Health inspections, and dry runs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1C1B1A]/10 flex items-center gap-3 text-xs text-[#8C827A]">
                <ShieldCheck className="w-4 h-4 text-[#606D5E]" />
                <span>Zero spam. Instant digital access. Complete operator confidentiality.</span>
              </div>
            </div>

            {/* Social Proof Quote */}
            <div className="p-6 bg-[#24211E] text-[#FAF8F5] border-l-2 border-[#B39266]">
              <p className="font-serif italic text-base sm:text-lg mb-3">
                “This single toolkit saved us from signing a commercial lease where the extraction flue would have cost £40,000 more than our total fit-out budget. Essential reading for any new operator.”
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-[#C5A880] font-semibold">
                — Hospitality Operator, Ribble Valley
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form OR Digital Delivery */}
          <div className="lg:col-span-6">
            {!submitted ? (
              <div className="bg-white p-6 sm:p-10 border border-[#1C1B1A]/10 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-[#1C1B1A] mb-2">
                    Request Your Free Copy
                  </h3>
                  <p className="text-xs text-[#8C827A]">
                    Instant digital download delivered to your screen and inbox.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="toolkit-name" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="toolkit-name"
                      type="text"
                      required
                      placeholder="e.g. David Scott"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-sm focus:border-[#B39266] focus-ring"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="toolkit-business" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                        Business / Concept Name *
                      </label>
                      <input
                        id="toolkit-business"
                        type="text"
                        required
                        placeholder="e.g. The Anchor Bistro"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-sm focus:border-[#B39266] focus-ring"
                      />
                    </div>

                    <div>
                      <label htmlFor="toolkit-location" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                        Project Location
                      </label>
                      <input
                        id="toolkit-location"
                        type="text"
                        placeholder="e.g. Preston, Lancashire"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-sm focus:border-[#B39266] focus-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="toolkit-email" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                      Email Address (for download link) *
                    </label>
                    <input
                      id="toolkit-email"
                      type="email"
                      required
                      placeholder="e.g. david@scottsbistro.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-sm focus:border-[#B39266] focus-ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="toolkit-project-type" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                      Project Type
                    </label>
                    <select
                      id="toolkit-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value as ToolkitSubmission['projectType'] })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-sm focus:border-[#B39266] focus-ring"
                    >
                      <option value="New Hospitality Venue">New Hospitality Venue Launch</option>
                      <option value="Restaurant/Bar Refurbishment">Restaurant / Bar Refurbishment</option>
                      <option value="Commercial Kitchen Fitout">Commercial Kitchen & Extraction Fitout</option>
                      <option value="Boutique Hotel / B&B">Boutique Hotel / Coaching Inn</option>
                      <option value="Café Launch">Artisan Café / Bakery</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2 text-xs text-[#8C827A] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5"
                      />
                      <span>
                        I consent to receiving the toolkit and occasional hospitality insights from ZEDesign Interiors. (Unsubscribe anytime).
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 bg-[#1C1B1A] hover:bg-[#343230] text-[#FAF8F5] font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                  >
                    <span>Download Free Toolkit</span>
                    <Download className="w-4 h-4 text-[#B39266]" />
                  </button>
                </form>
              </div>
            ) : (
              /* SUCCESS STATE: INSTANT INTERACTIVE TOOLKIT VIEWER & DOWNLOAD TRIGGER */
              <div className="bg-white p-6 sm:p-10 border border-[#606D5E]/30 shadow-md animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-[#606D5E] mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                  <div>
                    <h3 className="font-serif text-2xl text-[#1C1B1A]">Toolkit Ready for Download</h3>
                    <p className="text-xs text-[#8C827A]">Thank you, {formData.name}. Your copy has been prepared.</p>
                  </div>
                </div>

                {/* Digital Document Preview Card */}
                <div className="p-6 bg-[#FAF8F5] border border-[#1C1B1A]/10 my-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1C1B1A]/10 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#B39266]" />
                      <span className="font-serif font-semibold text-[#1C1B1A]">Hospitality Start-Up Toolkit (PDF)</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8C827A]">16-Page Dossier</span>
                  </div>

                  <div className="text-xs text-[#1C1B1A]/80 space-y-2">
                    <p>✓ <strong>Section 1:</strong> Lancashire & UK Commercial Cover Benchmarks (150 sq ft = 10 covers rule)</p>
                    <p>✓ <strong>Section 2:</strong> Commercial Kitchen Extract Sizing Formula (DW/172)</p>
                    <p>✓ <strong>Section 3:</strong> 2025 Contractor Tender Checklist & Hidden Cost Safeguards</p>
                    <p>✓ <strong>Section 4:</strong> Equipment Procurement Discount Matrix (Rational, Foster, Winterhalter)</p>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={handlePrintDownload}
                      className="w-full py-3 bg-[#B39266] hover:bg-[#A38256] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                    >
                      <Download className="w-4 h-4" />
                      <span>Print or Save as PDF</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#24211E] text-white space-y-3">
                  <h4 className="font-serif text-lg text-[#FAF8F5]">Would you like Zoe to review your floor plan?</h4>
                  <p className="text-xs text-[#DCD7D0] leading-relaxed">
                    We offer a complimentary 20-minute feasibility session for operators holding an active site or planning a refurbishment.
                  </p>
                  {onSuccessNavigateToContact && (
                    <button
                      onClick={onSuccessNavigateToContact}
                      className="inline-flex items-center gap-2 text-xs text-[#C5A880] hover:text-white font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Book a Free Feasibility Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
