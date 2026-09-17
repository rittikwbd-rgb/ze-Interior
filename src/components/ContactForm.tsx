import React, { useState } from 'react';
import { ContactSubmission } from '../types';
import { analytics } from '../utils/analytics';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  AlertCircle 
} from 'lucide-react';

interface ContactFormProps {
  openBookingModal: () => void;
  preselectedService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ openBookingModal, preselectedService }) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    service: preselectedService || 'Hospitality & Restaurant Interior Design',
    location: '',
    stage: 'Secured Site / Pre-Lease',
    approxBudget: '£50k – £150k',
    message: '',
    preferredContact: 'Phone',
    gdprConsent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.location) {
      setErrorMsg('Please complete all required fields (Name, Email, Phone, Location).');
      return;
    }

    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      analytics.track('contact_enquiry_submitted', 'lead', formData.service, {
        name: formData.name,
        email: formData.email,
        location: formData.location,
        stage: formData.stage,
        budget: formData.approxBudget
      });

      setLoading(false);
      setSubmitted(true);
      setErrorMsg('');
    }, 600);
  };

  return (
    <div className="bg-white border border-[#1C1B1A]/10 shadow-sm p-6 sm:p-10">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#1C1B1A]/10 pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A]">
              Let’s Talk About Your Project
            </h3>
            <p className="text-xs text-[#8C827A] mt-1">
              Tell us about your venue or property. Zoe Nicola Greenwood reviews all enquiries within 24 hours.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Row 1: Name & Business */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="e.g. Marcus Harley"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-xs sm:text-sm focus:border-[#B39266] focus-ring"
              />
            </div>

            <div>
              <label htmlFor="contact-business" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                Business / Venue Name
              </label>
              <input
                id="contact-business"
                type="text"
                placeholder="e.g. Harleys Bistro Ltd"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-xs sm:text-sm focus:border-[#B39266] focus-ring"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="e.g. marcus@harleysbistro.co.uk"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-xs sm:text-sm focus:border-[#B39266] focus-ring"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                Telephone Number *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                placeholder="e.g. 07700 900077"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-xs sm:text-sm focus:border-[#B39266] focus-ring"
              />
            </div>
          </div>

          {/* Row 3: Service Required & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                Service Required *
              </label>
              <select
                id="contact-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-xs sm:text-sm focus:border-[#B39266] focus-ring"
              >
                <option>Hospitality & Restaurant Interior Design</option>
                <option>Commercial Kitchen Design & Specification</option>
                <option>Bar, Pub & Taproom Revitalisation</option>
                <option>CAD Plans & Technical Blueprints</option>
                <option>3D Visualisation & Investor CGI</option>
                <option>Sustainable Interior Design & Reclaimed Strategy</option>
                <option>Turnkey Project Management</option>
                <option>Luxury High-End Residential Design</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-location" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                Project Location / Postcode *
              </label>
              <input
                id="contact-location"
                type="text"
                required
                placeholder="e.g. Preston, PR1 or Grasmere, LA22"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-xs sm:text-sm focus:border-[#B39266] focus-ring"
              />
            </div>
          </div>

          {/* Row 4: Stage & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-stage" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                Project Stage
              </label>
              <select
                id="contact-stage"
                value={formData.stage}
                onChange={(e) => setFormData({ ...formData, stage: e.target.value as ContactSubmission['stage'] })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-xs sm:text-sm focus:border-[#B39266] focus-ring"
              >
                <option value="Initial Inspiration">Initial Inspiration / Feasibility</option>
                <option value="Secured Site / Pre-Lease">Secured Site / Pre-Lease Agreement</option>
                <option value="Planning & CAD Required">Planning & CAD Drawings Required</option>
                <option value="Ready to Build / Immediate">Ready to Build / Immediate Fit-Out</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-budget" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
                Anticipated Fit-Out Budget
              </label>
              <select
                id="contact-budget"
                value={formData.approxBudget}
                onChange={(e) => setFormData({ ...formData, approxBudget: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-xs sm:text-sm focus:border-[#B39266] focus-ring"
              >
                <option>Under £35,000</option>
                <option>£35,000 – £75,000</option>
                <option>£75,000 – £150,000</option>
                <option>£150,000 – £350,000</option>
                <option>£350,000+</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1B1A] mb-1">
              Brief Overview of Your Space & Vision
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Tell us about the property, expected covers, kitchen equipment needs, or timeline constraints..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1C1B1A]/15 text-xs sm:text-sm focus:border-[#B39266] focus-ring"
            />
          </div>

          {/* Consent and Security */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 text-xs text-[#8C827A] cursor-pointer">
              <input
                type="checkbox"
                checked={formData.gdprConsent}
                onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                className="mt-0.5"
              />
              <span>
                I agree to ZEDesign Interiors processing my details to contact me about this project enquiry. (GDPR compliant).
              </span>
            </label>
          </div>

          {/* Submit CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1C1B1A] hover:bg-[#343230] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              {loading ? (
                <span>Sending Enquiry...</span>
              ) : (
                <>
                  <span>Send Project Enquiry</span>
                  <Send className="w-3.5 h-3.5 text-[#B39266]" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={openBookingModal}
              className="text-xs text-[#1C1B1A] hover:text-[#B39266] font-medium flex items-center gap-1.5 underline decoration-[#B39266] underline-offset-4"
            >
              <Calendar className="w-4 h-4 text-[#B39266]" />
              <span>Or book a direct calendar consultation</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-12 px-4 space-y-5 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-[#606D5E]/20 text-[#606D5E] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl text-[#1C1B1A]">
            Thank You, {formData.name}
          </h3>
          <p className="text-sm text-[#8C827A] max-w-md mx-auto leading-relaxed">
            Your enquiry regarding <strong className="text-[#1C1B1A]">{formData.service}</strong> has been received. Zoe Nicola Greenwood will review your details and contact you via {formData.phone} or {formData.email} within 24 hours.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-2.5 border border-[#1C1B1A]/20 text-xs font-semibold uppercase tracking-wider hover:bg-[#1C1B1A] hover:text-white transition-colors"
            >
              Submit Another Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
