import { LocationData } from '../types';

export const LOCATIONS_DATA: LocationData[] = [
  {
    id: 'preston',
    slug: 'preston',
    name: 'Preston, Lancashire',
    tagline: 'Our Home Studio Hub & Primary Lancashire Service Area',
    region: 'Central Lancashire',
    distanceFromStudio: '0 miles (Local Studio)',
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=85',
    overview:
      "Preston is where ZEDesign Interiors is proudly based. With its rich architectural heritage from Winckley Square to historic cotton mills and expanding student and professional populations, Preston is currently undergoing an exciting hospitality renaissance. Zoe Nicola Greenwood has designed some of Preston's most characterful dining and pub destinations.",
    localContext:
      "As local residents and practitioners, we have deep connections with Preston City Council planning teams, building control inspectors, and the region's finest independent joiners, electricians, and trades. We understand the footfall dynamics of Fishergate, Friargate, and the university quarter intimately.",
    servicesAvailable: [
      'Hospitality & Restaurant Interior Design',
      'Commercial Kitchen & Bar Design / Specification',
      'Historic Pub & Coaching Inn Refurbishment',
      'Luxury Residential & HMO Conversions',
      'Site Surveys & Fast-Turnaround CAD Drawings'
    ],
    localProjects: ['the-angel-preston', 'hmo-preston', 'billy-bobs-myerscough'],
    faqs: [
      {
        question: 'Are you available for on-site consultations in Preston?',
        answer:
          'Yes, our studio is based in Preston. We can typically visit your venue or property within 24 to 48 hours for an initial feasibility walk-through.'
      },
      {
        question: 'Can you assist with listed building consent in Preston conservation areas?',
        answer:
          'Yes, we have extensive experience liaising with Preston conservation officers for historic listed buildings around Winckley Square, Friargate, and Lancashire heritage properties.'
      }
    ]
  },
  {
    id: 'lancashire',
    slug: 'lancashire',
    name: 'Lancashire & Ribble Valley',
    tagline: 'Destination Dining, Country Inns & Coastal Retreats Across Lancashire',
    region: 'Lancashire County',
    distanceFromStudio: 'Covers entire county',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85',
    overview:
      "Lancashire boasts one of the UK’s most vibrant gastronomic corridors, famed for world-class gastro pubs, artisan taprooms, and luxury country residences across the Ribble Valley, Fylde Coast, and Forest of Bowland. ZEDesign Interiors works across the county creating interiors that honor local stone and timber with contemporary dining ergonomics.",
    localContext:
      "From Kirkham and Garstang to Lytham St Annes and Clitheroe, our Lancashire portfolio includes celebrated community bistros, craft taprooms, destination farm diners, and high-spec rural barn transformations.",
    servicesAvailable: [
      'Country Pub & Gastro Destination Design',
      'Commercial Kitchens for Lancashire Farm Shops & Bistros',
      'Boutique Hotel & Bed and Breakfast Refurbishments',
      'Barn Conversion Architecture & Luxury Living',
      'Full Turnkey Project Coordination'
    ],
    localProjects: ['scotts-bistro-kirkham', 'the-explorer-garstang', 'family-home-inskip'],
    faqs: [
      {
        question: 'Do you work in the Ribble Valley and rural Lancashire?',
        answer:
          'Yes, rural barn conversions, gastro pubs, and destination hospitality throughout the Ribble Valley and Forest of Bowland form a core pillar of our work.'
      }
    ]
  },
  {
    id: 'blackpool',
    slug: 'blackpool',
    name: 'Blackpool & The Fylde Coast',
    tagline: 'High-Volume Tourism, Theme Park Retail & Promenade Hospitality',
    region: 'Fylde Coast',
    distanceFromStudio: '18 miles via M55',
    heroImage: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1800&q=85',
    overview:
      "Blackpool is the UK's tourism capital, requiring spaces engineered to welcome millions of visitors while maintaining pristine operational resilience. Zoe Nicola Greenwood served as Head Designer on the world-famous SpongeBob SquarePants flagship store at Blackpool Pleasure Beach.",
    localContext:
      "Designing on the Fylde Coast requires specialized technical knowledge: salt-air corrosion resistance, heavy-duty commercial floorings capable of absorbing millions of footsteps, and quick-turnover food and beverage queues.",
    servicesAvailable: [
      'High-Footfall Experiential Retail & Theming',
      'Hotel & Bed-and-Breakfast Modernisation',
      'High-Volume Fast-Casual Dining Layouts',
      'Promenade Bar & Entertainment Venue Planning'
    ],
    localProjects: ['spongebob-store-blackpool', 'scotts-bistro-kirkham'],
    faqs: [
      {
        question: 'What made the Blackpool Pleasure Beach SpongeBob Store unique?',
        answer:
          'Zoe was Head Designer, coordinating Nickelodeon global brand custody with extreme-durability materials capable of hosting over 1,000,000 annual theme park visitors without visible wear.'
      }
    ]
  },
  {
    id: 'manchester',
    slug: 'manchester',
    name: 'Greater Manchester',
    tagline: 'Urban Dining, Independent Bars & Boutique City Living',
    region: 'North West England',
    distanceFromStudio: '32 miles via M61/M6',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85',
    overview:
      "Manchester is one of Europe’s most dynamic restaurant and nightlife hubs. From Ancoats and the Northern Quarter to Spinningfields, venues must deliver distinctive aesthetic identity to stand out in a competitive market.",
    localContext:
      "We help independent hospitality entrepreneurs and operators establish high-impact dining venues that maximise revenue per square foot in premium Manchester leasehold properties.",
    servicesAvailable: [
      'Boutique Restaurant & Cocktail Lounge Design',
      'Compact City Centre Commercial Kitchen Planning',
      'Fast-Casual Dining Spatial Efficiency',
      'Acoustic Control in High-Density Urban Units'
    ],
    localProjects: ['scotts-bistro-kirkham', 'the-explorer-garstang'],
    faqs: [
      {
        question: 'How quickly can you attend Manchester site meetings?',
        answer:
          'Manchester is just 40 minutes from our studio. We regularly attend site meetings and survey city-centre units.'
      }
    ]
  },
  {
    id: 'liverpool',
    slug: 'liverpool',
    name: 'Liverpool & Merseyside',
    tagline: 'Waterfront Dining, High-Volume Hospitality & Historic Conversions',
    region: 'Merseyside',
    distanceFromStudio: '35 miles via M58/M6',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85',
    overview:
      "Liverpool's thriving cultural, waterfront, and independent dining scene demands spaces that match the city's legendary warmth and energy. Our work includes large-scale restaurant destinations like East z East at Kings Dock.",
    localContext:
      "Whether revitalising warehouse dock spaces or creating intimate restaurant lounges, we understand the operational logistics of high-volume weekend dining in Merseyside.",
    servicesAvailable: [
      'Grand-Scale Restaurant Planning (100–300 covers)',
      'Waterfront Hospitality Venues',
      'Commercial Kitchens with High-Extraction Tandoor & Grill Lines',
      'Late-Night Social Space Acoustic Management'
    ],
    localProjects: ['east-z-east-liverpool'],
    faqs: [
      {
        question: 'Do you handle large hospitality spaces with 200+ covers in Liverpool?',
        answer:
          'Yes, projects like East z East at Liverpool Kings Dock demonstrate our capability to design multi-level 220+ cover destinations with industrial-capacity commercial kitchens.'
      }
    ]
  },
  {
    id: 'lake-district',
    slug: 'lake-district',
    name: 'The Lake District & Cumbria',
    tagline: 'Boutique Hotels, Fellside Bistros & Luxury Country Retreats',
    region: 'Cumbria National Park',
    distanceFromStudio: '45 miles north via M6',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85',
    overview:
      "The Lake District National Park is a UNESCO World Heritage site where hospitality venues must harmonize with protected landscapes while catering to discerning international and British travellers. Our project Harleys Bistro in Grasmere illustrates our sensitivity to Lakeland stone, slate, and fellside views.",
    localContext:
      "We specify durable, climate-resilient natural materials that welcome muddy boots by day and transform into candlelit romantic dining by night, navigating strict Lake District Planning Authority rules with ease.",
    servicesAvailable: [
      'Lake District Heritage Bistro & Bar Design',
      'Boutique Hotel & Coaching Inn Transformations',
      'Local Slate, Oak & Sustainable Material Curation',
      'Conservation Area & National Park Planning Compliance'
    ],
    localProjects: ['harleys-bistro-grasmere'],
    faqs: [
      {
        question: 'How do you handle Lake District National Park planning constraints?',
        answer:
          'We work with extreme sensitivity to heritage materials, producing contextual planning packages that respect local vernacular stone, slate, and architectural conservation guidelines.'
      }
    ]
  }
];
