import { SeoMetadata } from '../types';

export const INITIAL_SEO_CONFIG: Record<string, SeoMetadata> = {
  home: {
    route: '/',
    title: 'ZEDesign Interiors | Luxury & Hospitality Interior Design Preston, Lancashire',
    metaDescription:
      'Interior design that looks exceptional and works brilliantly. Award-winning Preston, Lancashire studio founded by Zoe Nicola Greenwood — specialising in restaurants, bars, commercial kitchens, and luxury homes.',
    h1: 'INTERIORS THAT LOOK EXCEPTIONAL. AND WORK BRILLIANTLY.',
    canonical: 'https://www.zedesign.co.uk/',
    ogTitle: 'ZEDesign Interiors | Interior Design Preston & Lancashire',
    ogDescription:
      'Award-winning hospitality, commercial kitchen, and luxury residential interior design studio with 23+ years experience.',
    ogImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'InteriorDesignStudio, LocalBusiness',
    primaryKeywords: [
      'interior designer Preston',
      'interior design Lancashire',
      'hospitality interior design UK',
      'restaurant interior design Preston',
      'commercial kitchen design UK',
      'bar interior design Lancashire'
    ]
  },
  about: {
    route: '/about',
    title: 'About Zoe Nicola Greenwood | 23+ Years Interior Design Preston & UK',
    metaDescription:
      'Learn about Zoe Nicola Greenwood, founder of ZEDesign Interiors. 23+ years creating high-performing hospitality venues and luxury homes from Monaco to Lancashire.',
    h1: '23+ Years Designing Spaces That Look Exceptional and Work Brilliantly',
    canonical: 'https://www.zedesign.co.uk/about',
    ogTitle: 'About Zoe Nicola Greenwood | ZEDesign Interiors',
    ogDescription:
      'Meet lead designer Zoe Nicola Greenwood. Proven hospitality expertise, commercial kitchen planning, and sustainable interior design across the UK.',
    ogImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'Person, AboutPage',
    primaryKeywords: [
      'Zoe Nicola Greenwood',
      'interior designer Preston Lancashire',
      'commercial interior designer profile',
      'female founder interior design UK'
    ]
  },
  services: {
    route: '/services',
    title: 'Interior Design Services | Hospitality, Commercial & Residential | ZEDesign',
    metaDescription:
      'Explore our full suite of interior design services: hospitality design, commercial kitchen specification, CAD plans, 3D CGI models, and turnkey project management.',
    h1: 'Interior Design Services Engineered for Performance & Aesthetics',
    canonical: 'https://www.zedesign.co.uk/services',
    ogTitle: 'Interior Design Services | ZEDesign Interiors',
    ogDescription:
      'Full-spectrum interior design: Concept, CAD, 3D renders, commercial kitchen planning, bespoke joinery, and site management.',
    ogImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'Service, CollectionPage',
    primaryKeywords: [
      'commercial interior design services',
      'CAD plans Preston',
      '3D interior visualisation Lancashire',
      'restaurant interior designer UK'
    ]
  },
  kitchens: {
    route: '/kitchens',
    title: 'Commercial Kitchen & Bar Design, Specification & Supply | ZEDesign',
    metaDescription:
      '15+ years specialist commercial kitchen design, DW/172 extraction compliance, chef flow planning, and equipment specification in Preston, Lancashire and UK.',
    h1: 'Commercial Kitchen & Bar Design, Specification & Supply',
    canonical: 'https://www.zedesign.co.uk/kitchens',
    ogTitle: 'Commercial Kitchen Design & Specification | ZEDesign Interiors',
    ogDescription:
      'Eliminate kitchen bottlenecks and cut utility bills. Heavy-duty cookline engineering, extraction, and stainless steel fabrication.',
    ogImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'ProfessionalService, Service',
    primaryKeywords: [
      'commercial kitchen design UK',
      'commercial kitchen designer Preston',
      'bar design specification',
      'DW172 extraction compliance',
      'restaurant kitchen layout'
    ]
  },
  projects: {
    route: '/projects',
    title: 'Interior Design Portfolio | Hospitality & Residential Projects | ZEDesign',
    metaDescription:
      'Discover our completed interior projects: Scotts Bistro Kirkham, Harleys Bistro Grasmere, The Angel Preston, East z East Liverpool, and Monaco luxury villa.',
    h1: 'Selected Interior Design Projects & Case Studies',
    canonical: 'https://www.zedesign.co.uk/projects',
    ogTitle: 'Selected Projects | ZEDesign Interiors Portfolio',
    ogDescription:
      'Explore case studies across restaurants, bars, commercial kitchens, retail flagships, and luxury residences.',
    ogImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'CollectionPage',
    primaryKeywords: [
      'hospitality interior design portfolio',
      'restaurant design case studies UK',
      'Scotts Bistro Kirkham design',
      'luxury residential interiors portfolio'
    ]
  },
  sustainability: {
    route: '/sustainability',
    title: 'Sustainable Interior Design & Circular Materials | ZEDesign Interiors',
    metaDescription:
      'Practical, honest sustainable interior design. Reclaimed Lancashire materials, upcycled furniture, low-energy lighting, and zero greenwashing.',
    h1: 'Honest Sustainable Design Rooted in Longevity & Circularity',
    canonical: 'https://www.zedesign.co.uk/sustainability',
    ogTitle: 'Sustainable Interior Design Philosophy | ZEDesign',
    ogDescription:
      'Discover our commitment to reclaimed timber, low-VOC finishes, and designing commercial spaces built to last.',
    ogImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'Article, WebPage',
    primaryKeywords: [
      'sustainable interior design UK',
      'reclaimed materials commercial interior',
      'eco-friendly restaurant design',
      'circular interior design Lancashire'
    ]
  },
  toolkit: {
    route: '/free-toolkit',
    title: 'Free Hospitality Start-Up Toolkit | Launch & Refurbishment Guide | ZEDesign',
    metaDescription:
      'Download the free Hospitality Start-Up Toolkit. Essential checklists for cover planning, commercial kitchen compliance, budgeting, and contractor tenders.',
    h1: 'Planning a Hospitality Venue? Download the Free Hospitality Start-Up Toolkit',
    canonical: 'https://www.zedesign.co.uk/free-toolkit',
    ogTitle: 'Free Hospitality Start-Up Toolkit | ZEDesign Interiors',
    ogDescription:
      'Plan your new restaurant, bar, or café with greater clarity. Instant download of our operator checklist and budget guide.',
    ogImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'DigitalDocument, WebPage',
    primaryKeywords: [
      'hospitality start-up toolkit',
      'restaurant opening checklist UK',
      'commercial kitchen planning guide',
      'free hospitality business download'
    ]
  },
  locations: {
    route: '/locations',
    title: 'Locations Served | Preston, Lancashire, Manchester, Liverpool & Lake District',
    metaDescription:
      'ZEDesign Interiors serves clients in Preston, Lancashire, Manchester, Liverpool, Blackpool, the Lake District, and UK-wide.',
    h1: 'Our Service Areas Across Lancashire & The North West',
    canonical: 'https://www.zedesign.co.uk/locations',
    ogTitle: 'Local Interior Design Hubs | ZEDesign Interiors',
    ogDescription:
      'From our Preston studio, we design hospitality venues and luxury homes throughout Lancashire and the UK.',
    ogImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'Place, WebPage',
    primaryKeywords: [
      'interior designer Preston',
      'interior designer Lancashire',
      'hospitality designer Manchester',
      'restaurant designer Lake District'
    ]
  },
  blog: {
    route: '/blog',
    title: 'Hospitality & Commercial Interior Design Journal | Insights & Costs | ZEDesign',
    metaDescription:
      'Expert advice on restaurant fit-out costs, commercial kitchen planning, hospitality refurbishments, and design ROI by Zoe Nicola Greenwood.',
    h1: 'The Hospitality & Commercial Design Journal',
    canonical: 'https://www.zedesign.co.uk/blog',
    ogTitle: 'The ZEDesign Design Journal | Hospitality & Commercial Insights',
    ogDescription:
      'Practical guides, realistic costings, and operational insights for hospitality owners and investors.',
    ogImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'Blog, CollectionPage',
    primaryKeywords: [
      'restaurant interior design costs UK',
      'hospitality design blog',
      'commercial kitchen design guide',
      'pub refurbishment advice'
    ]
  },
  contact: {
    route: '/contact',
    title: "Discuss Your Project | Contact ZEDesign Interiors | Preston & UK",
    metaDescription:
      'Book a design consultation or discuss your hospitality, commercial, or residential project with Zoe Nicola Greenwood. Based in Preston, serving the UK.',
    h1: "Let's Talk About Your Project",
    canonical: 'https://www.zedesign.co.uk/contact',
    ogTitle: 'Contact ZEDesign Interiors | Start Your Project',
    ogDescription:
      'Arrange an on-site consultation or schedule a direct video call with founder Zoe Nicola Greenwood.',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    robots: 'index, follow',
    schemaType: 'ContactPage',
    primaryKeywords: [
      'contact interior designer Preston',
      'hire hospitality interior designer',
      'interior design consultation Lancashire',
      'ZEDesign phone and email'
    ]
  },
  privacy: {
    route: '/privacy',
    title: 'Privacy Policy | ZEDesign Interiors',
    metaDescription: 'Read the privacy and data protection policy for ZEDesign Interiors Ltd.',
    h1: 'Privacy & Data Protection Policy',
    canonical: 'https://www.zedesign.co.uk/privacy',
    ogTitle: 'Privacy Policy | ZEDesign Interiors',
    ogDescription: 'Information regarding data privacy and GDPR compliance at ZEDesign Interiors.',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    robots: 'noindex, follow',
    schemaType: 'WebPage',
    primaryKeywords: ['privacy policy ZEDesign']
  },
  cookies: {
    route: '/cookies',
    title: 'Cookie Policy | ZEDesign Interiors',
    metaDescription: 'Our cookie policy and guidance on tracking technologies.',
    h1: 'Cookie Policy & Consent Management',
    canonical: 'https://www.zedesign.co.uk/cookies',
    ogTitle: 'Cookie Policy | ZEDesign Interiors',
    ogDescription: 'Details on essential, analytical, and marketing cookies.',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    robots: 'noindex, follow',
    schemaType: 'WebPage',
    primaryKeywords: ['cookie policy']
  }
};
