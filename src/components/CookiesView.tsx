import React, { useState, useEffect } from 'react';
import { ArrowLeft, Cookie, Check } from 'lucide-react';

interface CookiesViewProps {
  onBack: () => void;
}

export const CookiesView: React.FC<CookiesViewProps> = ({ onBack }) => {
  const [consentState, setConsentState] = useState<string>('all');

  useEffect(() => {
    const saved = localStorage.getItem('zedesign_cookie_consent') || 'all';
    setConsentState(saved);
  }, []);

  const handleUpdate = (val: string) => {
    setConsentState(val);
    localStorage.setItem('zedesign_cookie_consent', val);
  };

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
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#B39266] font-semibold mb-2">
            <Cookie className="w-4 h-4" />
            <span>Cookie & Tracking Policy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1C1B1A]">
            Cookie Preferences & Settings
          </h1>
          <p className="text-xs text-[#8C827A] mt-2 font-mono">
            Compliant with UK Privacy and Electronic Communications Regulations (PECR)
          </p>
        </header>

        <div className="bg-white p-8 sm:p-12 border border-[#1C1B1A]/10 space-y-6 text-xs sm:text-sm text-[#1C1B1A]/80 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-[#1C1B1A] font-semibold">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device to enhance your user experience, remember your navigation preferences, and help us analyze how our interior portfolio is accessed.
            </p>
          </section>

          {/* Interactive preference toggles */}
          <section className="p-6 bg-[#FAF8F5] border border-[#1C1B1A]/10 space-y-4">
            <h3 className="font-serif text-lg text-[#1C1B1A]">Your Active Consent Status</h3>
            <p className="text-xs text-[#8C827A]">
              Choose which cookies you permit ZEDesign Interiors to store during your session:
            </p>

            <div className="space-y-3 pt-2">
              <label className="flex items-center justify-between p-3 bg-white border border-[#1C1B1A]/10">
                <div>
                  <span className="font-semibold text-xs text-[#1C1B1A] block">Strictly Necessary Cookies</span>
                  <span className="text-[11px] text-[#8C827A]">Essential for website security, form submission and navigation.</span>
                </div>
                <span className="text-xs font-mono text-[#606D5E] font-semibold">Always Active</span>
              </label>

              <label className="flex items-center justify-between p-3 bg-white border border-[#1C1B1A]/10 cursor-pointer">
                <div>
                  <span className="font-semibold text-xs text-[#1C1B1A] block">Performance & Anonymous Analytics</span>
                  <span className="text-[11px] text-[#8C827A]">Helps us measure page engagement and improve site layout.</span>
                </div>
                <input
                  type="radio"
                  name="cookie-opt"
                  checked={consentState === 'all'}
                  onChange={() => handleUpdate('all')}
                  className="w-4 h-4 text-[#B39266]"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-white border border-[#1C1B1A]/10 cursor-pointer">
                <div>
                  <span className="font-semibold text-xs text-[#1C1B1A] block">Essential Only (Block Analytics)</span>
                  <span className="text-[11px] text-[#8C827A]">Disables all non-essential performance tracking.</span>
                </div>
                <input
                  type="radio"
                  name="cookie-opt"
                  checked={consentState === 'essential_only'}
                  onChange={() => handleUpdate('essential_only')}
                  className="w-4 h-4 text-[#B39266]"
                />
              </label>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
