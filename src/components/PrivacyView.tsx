import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface PrivacyViewProps {
  onBack: () => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onBack }) => {
  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8C827A] hover:text-[#1C1B1A] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <header className="mb-10 pb-6 border-b border-[#1C1B1A]/10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#606D5E] font-semibold mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>UK GDPR & Data Protection Act 2018</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1C1B1A]">
            Privacy & Data Protection Policy
          </h1>
          <p className="text-xs text-[#8C827A] mt-2 font-mono">
            Last Updated: January 2025 • ZEDesign Interiors Ltd, Preston, Lancashire
          </p>
        </header>

        <div className="bg-white p-8 sm:p-12 border border-[#1C1B1A]/10 space-y-6 text-xs sm:text-sm text-[#1C1B1A]/80 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1C1B1A] font-semibold">1. Introduction</h2>
            <p>
              ZEDesign Interiors Ltd ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, store, and process personal information when you visit our website (www.zedesign.co.uk), enquire about our interior design services, or download our digital assets (such as the Hospitality Start-Up Toolkit).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1C1B1A] font-semibold">2. Data We Collect</h2>
            <p>We may collect, use, and store the following types of personal information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Data:</strong> Name, business name, postal address, email address, and telephone numbers.</li>
              <li><strong>Project Data:</strong> Architectural drawings, venue location, project stage, and budget allowances provided during enquiries.</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type, device information, and anonymous usage analytics.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1C1B1A] font-semibold">3. How We Use Your Data</h2>
            <p>We only use your personal data for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To prepare design proposals, feasibility studies, and CAD fee schedules.</li>
              <li>To deliver requested digital guides and toolkit downloads.</li>
              <li>To coordinate trade site appointments, supplier orders, and contractor inspections.</li>
              <li>To comply with statutory UK accounting and HMRC obligations.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1C1B1A] font-semibold">4. Data Security & Storage</h2>
            <p>
              We maintain appropriate technical and organisational safeguards to prevent unauthorized disclosure, loss, or access to your personal data. We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1C1B1A] font-semibold">5. Contact Our Data Controller</h2>
            <p>For any questions regarding this policy or your data subject access rights under UK GDPR:</p>
            <div className="p-4 bg-[#FAF8F5] border border-[#1C1B1A]/10 text-xs space-y-1 mt-2">
              <p><strong>ZEDesign Interiors Ltd</strong></p>
              <p>Attn: Zoe Nicola Greenwood, Data Controller</p>
              <p>Preston, Lancashire, United Kingdom</p>
              <p>Email: <a href="mailto:info@zedesign.co.uk" className="underline">info@zedesign.co.uk</a></p>
              <p>Phone: +44 7792 562692</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
