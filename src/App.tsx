import React, { useState, useEffect } from 'react';
import { ViewRoute, SeoMetadata } from './types';
import { INITIAL_SEO_CONFIG } from './data/seoConfig';
import { PROJECTS_DATA } from './data/projectsData';
import { SERVICES_DATA } from './data/servicesData';
import { LOCATIONS_DATA } from './data/locationsData';
import { BLOG_DATA } from './data/blogData';

// Core Layout & Shared Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CookieBanner } from './components/CookieBanner';
import { motion, AnimatePresence } from 'motion/react';

// Views
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { ServiceDetailView } from './components/ServiceDetailView';
import { ProjectsView } from './components/ProjectsView';
import { ProjectDetailView } from './components/ProjectDetailView';
import { KitchensView } from './components/KitchensView';
import { SustainabilityView } from './components/SustainabilityView';
import { ToolkitView } from './components/ToolkitView';
import { LocationsView } from './components/LocationsView';
import { LocationDetailView } from './components/LocationDetailView';
import { BlogView } from './components/BlogView';
import { BlogDetailView } from './components/BlogDetailView';
import { ContactForm } from './components/ContactForm';
import { PrivacyView } from './components/PrivacyView';
import { CookiesView } from './components/CookiesView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<ViewRoute>('home');
  const [activeSlug, setActiveSlug] = useState<string | undefined>(undefined);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [seoStore] = useState<Record<string, SeoMetadata>>(INITIAL_SEO_CONFIG);

  // Sync document title and meta whenever route or slug updates
  useEffect(() => {
    let key = currentRoute;
    if (currentRoute === 'service-detail' || currentRoute === 'project-detail' || currentRoute === 'location-detail' || currentRoute === 'blog-detail') {
      key = currentRoute.split('-')[0] as ViewRoute;
    }

    const meta = seoStore[key] || seoStore['home'];
    if (meta) {
      document.title = meta.title;

      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', meta.metaDescription);
      }

      // Update canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('content', meta.canonical);
    }
  }, [currentRoute, activeSlug, seoStore]);

  const navigate = (route: ViewRoute, slug?: string) => {
    setCurrentRoute(route);
    setActiveSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active items for detail views
  const currentProject = PROJECTS_DATA.find((p) => p.slug === activeSlug) || PROJECTS_DATA[0];
  const currentService = SERVICES_DATA.find((s) => s.slug === activeSlug) || SERVICES_DATA[0];
  const currentLocation = LOCATIONS_DATA.find((l) => l.slug === activeSlug) || LOCATIONS_DATA[0];
  const currentBlogPost = BLOG_DATA.find((b) => b.slug === activeSlug) || BLOG_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1B1A] font-sans selection:bg-[#B39266]/30 selection:text-[#1C1B1A]">
      {/* Top Refined Sticky Header */}
      <Navbar
        currentRoute={currentRoute}
        navigate={navigate}
        openBookingModal={() => setBookingModalOpen(true)}
      />

      {/* Main View Router Stage */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute + (activeSlug || '')}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {currentRoute === 'home' && (
              <HomeView
                navigate={navigate}
                openBookingModal={() => setBookingModalOpen(true)}
                projects={PROJECTS_DATA}
                services={SERVICES_DATA}
                blogPosts={BLOG_DATA}
                locations={LOCATIONS_DATA}
              />
            )}

        {currentRoute === 'about' && (
          <AboutView
            onNavigateToContact={() => navigate('contact')}
            onNavigateToProjects={() => navigate('projects')}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesView
            services={SERVICES_DATA}
            onSelectService={(slug) => navigate('service-detail', slug)}
            onNavigateToContact={() => navigate('contact')}
            onNavigateToKitchens={() => navigate('kitchens')}
          />
        )}

        {currentRoute === 'service-detail' && (
          <ServiceDetailView
            service={currentService}
            onBack={() => navigate('services')}
            onNavigateToContact={() => navigate('contact')}
            onSelectProject={(slug) => navigate('project-detail', slug)}
            relatedProjects={PROJECTS_DATA.filter((p) =>
              p.sector.toLowerCase().includes(currentService.slug.split('-')[0])
            )}
          />
        )}

        {currentRoute === 'projects' && (
          <ProjectsView
            projects={PROJECTS_DATA}
            onSelectProject={(slug) => navigate('project-detail', slug)}
            onNavigateToContact={() => navigate('contact')}
          />
        )}

        {currentRoute === 'project-detail' && (
          <ProjectDetailView
            project={currentProject}
            onBack={() => navigate('projects')}
            onNavigateProject={(slug) => navigate('project-detail', slug)}
            onNavigateToContact={() => navigate('contact')}
            allProjects={PROJECTS_DATA}
            onOpenVideoStudio={openVeoModal}
          />
        )}

        {currentRoute === 'kitchens' && (
          <KitchensView
            onNavigateToContact={() => navigate('contact')}
            onNavigateToToolkit={() => navigate('toolkit')}
          />
        )}

        {currentRoute === 'sustainability' && (
          <SustainabilityView
            onNavigateToContact={() => navigate('contact')}
            onNavigateToProjects={() => navigate('projects')}
          />
        )}

        {currentRoute === 'toolkit' && (
          <ToolkitView
            onSuccessNavigateToContact={() => navigate('contact')}
          />
        )}

        {currentRoute === 'locations' && (
          <LocationsView
            locations={LOCATIONS_DATA}
            onSelectLocation={(slug) => navigate('location-detail', slug)}
            onNavigateToContact={() => navigate('contact')}
          />
        )}

        {currentRoute === 'location-detail' && (
          <LocationDetailView
            location={currentLocation}
            onBack={() => navigate('locations')}
            onNavigateToContact={() => navigate('contact')}
            onSelectProject={(slug) => navigate('project-detail', slug)}
            localProjects={PROJECTS_DATA.filter(
              (p) =>
                p.location.toLowerCase().includes(currentLocation.name.toLowerCase()) ||
                (p.tags && p.tags.some((t) => t.toLowerCase().includes(currentLocation.name.toLowerCase())))
            )}
          />
        )}

        {currentRoute === 'blog' && (
          <BlogView
            posts={BLOG_DATA}
            onSelectPost={(slug) => navigate('blog-detail', slug)}
            onNavigateToContact={() => navigate('contact')}
          />
        )}

        {currentRoute === 'blog-detail' && (
          <BlogDetailView
            post={currentBlogPost}
            onBack={() => navigate('blog')}
            onNavigateToContact={() => navigate('contact')}
            onSelectPost={(slug) => navigate('blog-detail', slug)}
            recentPosts={BLOG_DATA.filter((b) => b.id !== currentBlogPost.id)}
          />
        )}

        {currentRoute === 'contact' && (
          <div className="py-16 sm:py-24 bg-[#FAF8F5]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <ContactForm openBookingModal={() => setBookingModalOpen(true)} />
            </div>
          </div>
        )}

        {currentRoute === 'privacy' && (
          <PrivacyView onBack={() => navigate('home')} />
        )}

        {currentRoute === 'cookies' && (
          <CookiesView onBack={() => navigate('home')} />
        )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Primary Studio Footer */}
      <Footer
        navigate={navigate}
        openBookingModal={() => setBookingModalOpen(true)}
      />

      {/* Global Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <CookieBanner
        onOpenPreferences={() => navigate('cookies')}
      />
    </div>
  );
}
