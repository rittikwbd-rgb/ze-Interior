import React from 'react';
import { ViewRoute } from '../types';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  ChefHat
} from 'lucide-react';

interface FooterProps {
  navigate: (route: ViewRoute, slug?: string) => void;
  openBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, openBookingModal }) => {
  return (
    <footer id="main-footer" className="bg-[#1C1B1A] text-[#FAF8F5] pt-14 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Studio Identity & Direct Contact (lg:col-span-4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-white font-semibold block">
                ZE<span className="font-light italic text-[#C5A880]">Design</span>
              </span>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#A69E97] mt-1 font-medium">
                Interiors • Preston, Lancashire & UK
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#DCD7D0] leading-relaxed max-w-md">
              <strong className="text-white font-medium">"Interiors that look exceptional and work brilliantly."</strong>
              <br className="hidden sm:inline" />
              Bespoke hospitality, restaurant, commercial kitchen, and luxury residential interior design led by Zoe Nicola Greenwood with 23+ years of spatial intelligence.
            </p>

            {/* Direct Contact Points */}
            <div className="space-y-2 pt-2 text-xs text-[#A69E97]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-[#DCD7D0]">Preston & Lancashire, United Kingdom</span>
              </div>
              <div>
                <a 
                  href="tel:+447792562692" 
                  className="inline-flex items-center gap-2.5 py-1 text-xs text-[#DCD7D0] hover:text-[#C5A880] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>+44 7792 562692</span>
                </a>
              </div>
              <div>
                <a 
                  href="mailto:info@zedesign.co.uk" 
                  className="inline-flex items-center gap-2.5 py-1 text-xs text-[#DCD7D0] hover:text-[#C5A880] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>info@zedesign.co.uk</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#A69E97] pt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>Mon – Fri: 08:30 – 18:00 (By Appointment)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Design Services (lg:col-span-3) */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Design Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-[#DCD7D0]">
              <li>
                <button
                  onClick={() => navigate('service-detail', 'hospitality-interior-design')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Hospitality & Restaurant Interiors
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('kitchens')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>Commercial Kitchen & Bar Design</span>
                  <span className="text-[9px] bg-[#C5A880]/20 text-[#C5A880] px-1.5 py-0.5 font-mono">
                    15+ Yrs
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('service-detail', 'bar-interior-design')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Bars, Taprooms & Cocktail Lounges
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('service-detail', 'cad-drawings')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  CAD Spatial Plans & Regs
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('service-detail', '3d-interior-design')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  3D Visualisation & CGI Renders
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('service-detail', 'luxury-residential-design')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  High-End Residential Interiors
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Selected Work & Service Areas (lg:col-span-2) */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Selected Work
            </h4>
            <ul className="space-y-2 text-xs text-[#DCD7D0]">
              <li>
                <button
                  onClick={() => navigate('project-detail', 'scotts-bistro-kirkham')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Scotts Bistro, Kirkham
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('project-detail', 'harleys-bistro-grasmere')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Harleys Bistro, Lake District
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('project-detail', 'the-angel-preston')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  The Angel Pub, Preston
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('project-detail', 'the-explorer-garstang')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  The Explorer, Garstang
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('location-detail', 'preston')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer text-[#A69E97]"
                >
                  Preston & Lancashire
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('location-detail', 'lake-district')}
                  className="w-full text-left py-1 hover:text-[#C5A880] transition-colors cursor-pointer text-[#A69E97]"
                >
                  Lake District & Cumbria
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Action & Operator Resources (lg:col-span-3) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Operator Resources
            </h4>
            
            <div className="p-4 bg-white/5 border border-white/10 space-y-2.5">
              <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-mono block">
                Free Download
              </span>
              <p className="text-xs text-[#DCD7D0] leading-relaxed">
                Hospitality Start-Up & Spatial Planning Toolkit for independent operators.
              </p>
              <button
                onClick={() => navigate('toolkit')}
                className="w-full min-h-[42px] py-2 px-3 bg-[#C5A880] hover:bg-[#B39266] text-[#1C1B1A] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Download Toolkit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={openBookingModal}
              className="w-full min-h-[44px] py-2.5 px-4 border border-white/20 hover:border-[#C5A880] text-xs font-medium text-white hover:text-[#C5A880] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Studio Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>

        {/* Streamlined Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A69E97] text-center sm:text-left">
          <p>© {new Date().getFullYear()} ZEDesign Interiors Ltd. All rights reserved. Preston, Lancashire, UK.</p>

          <div className="flex items-center justify-center gap-6 text-xs">
            <button
              onClick={() => navigate('privacy')}
              className="hover:text-white transition-colors py-2 cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => navigate('cookies')}
              className="hover:text-white transition-colors py-2 cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
