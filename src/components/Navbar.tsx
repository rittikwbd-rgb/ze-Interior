import React, { useState, useEffect } from 'react';
import { ViewRoute } from '../types';
import { 
  Menu, 
  X, 
  Phone, 
  ArrowUpRight, 
  Sparkles, 
  BookOpen, 
  ChefHat, 
  Layers, 
  MapPin, 
  Calendar 
} from 'lucide-react';

interface NavbarProps {
  currentRoute: ViewRoute;
  navigate: (route: ViewRoute, slug?: string) => void;
  openBookingModal?: () => void;
  openSeoDrawer?: () => void;
  openVeoModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  navigate,
  openBookingModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (route: ViewRoute, slug?: string) => {
    navigate(route, slug);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-3.5 shadow-xs border-b border-[#1C1B1A]/8'
            : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNav('home')}
            className="text-left group cursor-pointer focus-ring shrink-0 whitespace-nowrap"
            aria-label="ZEDesign Interiors Home"
          >
            <span className="block font-serif text-2xl sm:text-3xl tracking-tight text-[#1C1B1A] font-semibold leading-none">
              ZE<span className="font-light italic text-[#B39266]">Design</span>
            </span>
            <span className="block text-[10px] sm:text-[11px] tracking-[0.22em] text-[#8C827A] uppercase font-medium mt-1">
              Interiors • Preston & UK
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap" aria-label="Main menu">
            <button
              id="nav-link-about"
              onClick={() => handleNav('about')}
              className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#B39266] ${
                currentRoute === 'about' ? 'text-[#B39266] font-semibold' : 'text-[#1C1B1A]/80'
              }`}
            >
              About
            </button>

            <button
              id="nav-link-services"
              onClick={() => handleNav('services')}
              className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#B39266] ${
                currentRoute === 'services' || currentRoute === 'service-detail'
                  ? 'text-[#B39266] font-semibold'
                  : 'text-[#1C1B1A]/80'
              }`}
            >
              Services
            </button>

            <button
              id="nav-link-projects"
              onClick={() => handleNav('projects')}
              className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#B39266] ${
                currentRoute === 'projects' || currentRoute === 'project-detail'
                  ? 'text-[#B39266] font-semibold'
                  : 'text-[#1C1B1A]/80'
              }`}
            >
              Projects
            </button>

            <button
              id="nav-link-kitchens"
              onClick={() => handleNav('kitchens')}
              className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#B39266] flex items-center gap-1 ${
                currentRoute === 'kitchens' ? 'text-[#B39266] font-semibold' : 'text-[#1C1B1A]/80'
              }`}
            >
              Kitchens
              <span className="w-1.5 h-1.5 rounded-full bg-[#B39266]" />
            </button>

            <button
              id="nav-link-toolkit"
              onClick={() => handleNav('toolkit')}
              className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#B39266] ${
                currentRoute === 'toolkit' ? 'text-[#B39266] font-semibold' : 'text-[#1C1B1A]/80'
              }`}
            >
              Toolkit
            </button>

            <button
              id="nav-link-locations"
              onClick={() => handleNav('locations')}
              className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#B39266] ${
                currentRoute === 'locations' || currentRoute === 'location-detail'
                  ? 'text-[#B39266] font-semibold'
                  : 'text-[#1C1B1A]/80'
              }`}
            >
              Locations
            </button>

            <button
              id="nav-link-blog"
              onClick={() => handleNav('blog')}
              className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#B39266] ${
                currentRoute === 'blog' || currentRoute === 'blog-detail'
                  ? 'text-[#B39266] font-semibold'
                  : 'text-[#1C1B1A]/80'
              }`}
            >
              Journal
            </button>

            <button
              id="nav-link-contact"
              onClick={() => handleNav('contact')}
              className={`text-[13px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#B39266] ${
                currentRoute === 'contact' ? 'text-[#B39266] font-semibold' : 'text-[#1C1B1A]/80'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Primary CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              id="header-primary-cta"
              onClick={() => handleNav('contact')}
              className="relative inline-flex items-center justify-center px-5 xl:px-6 py-2.5 bg-[#1C1B1A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#343230] group cursor-pointer focus-ring shadow-xs whitespace-nowrap"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B39266]" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1B1A] focus-ring"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-50 bg-[#1C1B1A] text-[#FAF8F5] flex flex-col justify-between p-6 sm:p-10 lg:hidden animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <span className="block font-serif text-2xl tracking-tight text-white font-semibold">
                ZE<span className="font-light italic text-[#C5A880]">Design</span>
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#A69E97] uppercase">
                Interiors • Preston & UK
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 py-6 overflow-y-auto">
            <button
              onClick={() => handleNav('home')}
              className="text-left font-serif text-2xl hover:text-[#C5A880] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="text-left font-serif text-2xl hover:text-[#C5A880] transition-colors"
            >
              About Zoe & Studio
            </button>
            <button
              onClick={() => handleNav('services')}
              className="text-left font-serif text-2xl hover:text-[#C5A880] transition-colors"
            >
              Services & Spatial Planning
            </button>
            <button
              onClick={() => handleNav('projects')}
              className="text-left font-serif text-2xl hover:text-[#C5A880] transition-colors"
            >
              Portfolio & Projects
            </button>
            <button
              onClick={() => handleNav('kitchens')}
              className="text-left font-serif text-2xl hover:text-[#C5A880] transition-colors flex items-center justify-between"
            >
              <span>Commercial Kitchens & Bars</span>
              <span className="text-xs tracking-wider px-2 py-0.5 bg-[#C5A880]/20 text-[#C5A880] uppercase">
                Specialist
              </span>
            </button>
            <button
              onClick={() => handleNav('sustainability')}
              className="text-left font-serif text-2xl hover:text-[#C5A880] transition-colors"
            >
              Sustainability & Reclaimed
            </button>
            <button
              onClick={() => handleNav('toolkit')}
              className="text-left font-serif text-2xl text-[#C5A880] transition-colors flex items-center gap-2"
            >
              <span>Free Hospitality Toolkit</span>
              <BookOpen className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNav('locations')}
              className="text-left font-serif text-2xl hover:text-[#C5A880] transition-colors"
            >
              Locations (Preston, Lancs, UK)
            </button>
            <button
              onClick={() => handleNav('blog')}
              className="text-left font-serif text-2xl hover:text-[#C5A880] transition-colors"
            >
              Journal & Practical Guides
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="text-left font-serif text-2xl hover:text-[#C5A880] transition-colors"
            >
              Contact & Consultations
            </button>
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNav('contact');
              }}
              className="w-full py-3.5 bg-[#C5A880] text-[#1C1B1A] font-semibold text-xs uppercase tracking-[0.2em] text-center"
            >
              Discuss Your Project
            </button>
            <div className="flex items-center justify-between text-xs text-[#A69E97] pt-2">
              <a href="tel:+447792562692" className="flex items-center gap-1.5 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>+44 7792 562692</span>
              </a>
              <span>Preston, Lancashire</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
