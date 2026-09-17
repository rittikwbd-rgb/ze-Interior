import React, { useState, useEffect } from 'react';
import { Shield, Check, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPreferences?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPreferences }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('zedesign_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('zedesign_cookie_consent', 'all');
    setVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('zedesign_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-[#1C1B1A] text-[#FAF8F5] p-5 border border-white/10 shadow-2xl animate-in slide-in-from-bottom duration-300"
      role="region"
      aria-label="Cookie consent banner"
    >
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
            Privacy & Cookie Preferences
          </h4>
          <p className="text-xs text-[#DCD7D0] leading-relaxed">
            We use essential cookies to operate this website and anonymous analytics to understand venue enquiry journeys in Preston and across the UK.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={handleAcceptAll}
              className="px-3 py-1.5 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              Essential Only
            </button>
            {onOpenPreferences && (
              <button
                onClick={onOpenPreferences}
                className="text-[11px] text-[#A69E97] hover:text-white underline ml-1"
              >
                Settings
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
