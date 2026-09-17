export type ViewRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'projects'
  | 'project-detail'
  | 'kitchens'
  | 'sustainability'
  | 'locations'
  | 'location-detail'
  | 'toolkit'
  | 'blog'
  | 'blog-detail'
  | 'contact'
  | 'privacy'
  | 'cookies'
  | 'seo-admin';

export type ProjectSector =
  | 'Hospitality'
  | 'Restaurants'
  | 'Bars'
  | 'Cafés'
  | 'Hotels'
  | 'Commercial'
  | 'Residential'
  | 'Kitchens';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  sector: ProjectSector;
  subCategory?: string;
  location: string;
  area: string; // e.g. "Preston, Lancashire"
  year: string;
  heroImage: string;
  gallery: {
    url: string;
    caption: string;
    aspect?: 'landscape' | 'portrait' | 'wide';
  }[];
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  designDetails: string[];
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel: string;
    afterLabel: string;
    note: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
  tags?: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  h1: string;
  headline: string;
  tagline?: string;
  shortDesc: string;
  shortDescription?: string;
  overview: string;
  iconName: string;
  heroImage: string;
  sectorCategory: 'Commercial & Hospitality' | 'Technical & Planning' | 'Luxury Residential';
  keyBenefits: string[];
  deliverables: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  featuredProjects: string[]; // project slugs
}

export type Service = ServiceItem;

export interface LocationData {
  id: string;
  slug: string;
  name: string;
  title?: string;
  tagline: string;
  region: string;
  heroImage: string;
  distanceFromStudio: string;
  overview: string;
  intro?: string;
  description?: string;
  localContext: string;
  servicesAvailable: string[];
  servicesHighlighted?: string[];
  keyAreas?: string[];
  localProjects: string[]; // project slugs
  faqs: {
    question: string;
    answer: string;
  }[];
}

export type LocationPage = LocationData;

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  h1: string;
  category: 'Hospitality Design' | 'Restaurant Design' | 'Commercial Kitchens' | 'Sustainability' | 'Design Strategy';
  excerpt: string;
  author: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  heroImage: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    callout?: string;
    list?: string[];
  }[];
  relatedArticles: string[]; // blog slugs
}

export interface SeoMetadata {
  route: string;
  title: string;
  metaDescription: string;
  h1: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  robots: string;
  schemaType: string;
  primaryKeywords: string[];
}

export interface ToolkitSubmission {
  name: string;
  businessName: string;
  location: string;
  email: string;
  projectType: 'New Hospitality Venue' | 'Restaurant/Bar Refurbishment' | 'Commercial Kitchen Fitout' | 'Boutique Hotel / B&B' | 'Café Launch';
  phone?: string;
  status: 'planning' | 'secured-site' | 'active-refurbishment' | 'concept-stage';
  consent: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  service: string;
  location: string;
  stage: 'Initial Inspiration' | 'Secured Site / Pre-Lease' | 'Planning & CAD Required' | 'Ready to Build / Immediate';
  approxBudget?: string;
  message: string;
  preferredContact: 'Phone' | 'Email' | 'Video Call';
  gdprConsent: boolean;
}
