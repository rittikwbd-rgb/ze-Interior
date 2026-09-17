import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'scotts-bistro',
    slug: 'scotts-bistro-kirkham',
    title: "Scotts Bistro",
    subtitle: 'Modern British Bistro & Wine Bar',
    sector: 'Restaurants',
    subCategory: 'Hospitality & Commercial Kitchen',
    location: 'Kirkham, Lancashire',
    area: 'Lancashire, UK',
    year: '2023',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
        caption: 'Dining room featuring bespoke banquette seating with acoustic reeded wall panelling.',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Brass-edged bar counter with custom bottle gantry and integrated glass chillers.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
        caption: 'Intimate table settings featuring warm 2400K dimmable pendant lighting.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80',
        caption: 'Back-of-house commercial pass line aligned with chef workflow and pass heating.',
        aspect: 'landscape'
      }
    ],
    overview:
      "Scotts Bistro in Kirkham commissioned ZEDesign Interiors to transform an underutilised high street space into a vibrant 64-cover neighborhood bistro. The brief called for a sophisticated daytime coffee-and-lunch trade transitioning seamlessly into an intimate, warm evening dining experience.",
    challenge:
      "The building had narrow floor dimensions, limited natural daylight to the rear, and required a complete commercial kitchen overhaul within a tight 7-week turnaround while meeting strict local ventilation and acoustic regulations.",
    solution:
      "Zoe Nicola Greenwood created an intelligent zoned floor plan with architectural fluted mirrors to bounce light, custom deep-espresso banquet joinery to maximise cover density without feeling cramped, and an open-concept service pass engineered with hygienic stainless-steel specification.",
    deliverables: [
      'Comprehensive Concept Moodboards & 3D Visualisations',
      'Full CAD Floor Plans, Elevations & Reflected Ceiling Plans',
      'Commercial Kitchen Specification & Extraction Coordination',
      'Bespoke Fluted Leather Banquette Seating Design',
      'Multi-Zone Dimmable Architectural Lighting Scheme',
      'Local Planning and Building Control Submission Support'
    ],
    designDetails: [
      'Warm taupe plaster wall treatments paired with aged brass accents',
      'Reclaimed British oak dining tables finished with water-resistant matte sealant',
      'Low-glare deep recessed LED downlights with CRI 95 for appetizing food presentation',
      'Custom fabricated acoustic ceiling baffles keeping ambient chatter at conversational levels'
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Strip-Out State (Empty Shell)',
      afterLabel: 'Completed Scotts Bistro Dining Room',
      note: 'Transformed an empty, cold commercial unit into a warm 64-cover bistro with seamless day-to-night ambiance.'
    },
    testimonial: {
      quote:
        "Zoe's technical kitchen knowledge and spatial insight were incredible. We achieved 14 more covers than our previous surveyor thought possible, and the atmosphere on Friday evenings is electric.",
      author: 'David Scott',
      role: 'Owner & Head Chef, Scotts Bistro Kirkham'
    },
    metrics: [
      { label: 'Seated Covers', value: '64 covers' },
      { label: 'Programme Length', value: '7 weeks' },
      { label: 'Efficiency Gain', value: '+28% covers' }
    ]
  },
  {
    id: 'harleys-bistro',
    slug: 'harleys-bistro-grasmere',
    title: "Harleys Bistro",
    subtitle: 'Boutique Lake District Dining Destination',
    sector: 'Hospitality',
    subCategory: 'Hospitality & Bar Design',
    location: 'Grasmere, Lake District, Cumbria',
    area: 'Lake District, UK',
    year: '2022',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80',
        caption: 'The central timber and slate cocktail bar with custom brass shelving.',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
        caption: 'Deep moss-green velvet armchairs framing the panoramic fell views.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80',
        caption: 'Stone fireplace inglenook with restored heritage hearth.',
        aspect: 'landscape'
      }
    ],
    overview:
      "Set in the heart of idyllic Grasmere in Cumbria, Harleys Bistro required an interior that celebrated its majestic Lake District surroundings while delivering contemporary gastronomic comfort for walkers, locals, and tourists.",
    challenge:
      "Working within a protected historic Lakeland stone property with uneven floor heights, strict conservation stipulations, and the need for heavy-duty, mud-resistant yet luxury finishes.",
    solution:
      "ZEDesign incorporated honest natural materials: locally sourced Honister slate accents, English wool fabrics, deep forest greens, and blackened steel. Furniture was designed for durability without sacrificing boutique elegance.",
    deliverables: [
      'Heritage Building Sensitive Spatial Strategy',
      'Bar Layout with High-Output Glasswashing Station',
      'Custom Joinery & Display Wine Wall',
      'Sustainable Fabric & Upcycled Timber Specifications',
      'Contract Grade Slip-Resistant Porcelain Floor Specification'
    ],
    designDetails: [
      'Subtle earthy palette drawn directly from the surrounding Grasmere fells',
      'Water-repellent wool upholstery with natural fire retardancy',
      'Bespoke acoustic underlay beneath timber flooring to reduce dining echo'
    ],
    testimonial: {
      quote:
        "ZEDesign managed to capture the soul of the Lake District without resorting to clichés. Guests remark on the warm ambiance every single day.",
      author: 'Marcus Harley',
      role: 'Managing Director, Harleys Bistro'
    },
    metrics: [
      { label: 'Venue Capacity', value: '78 covers' },
      { label: 'Region', value: 'Lake District National Park' }
    ]
  },
  {
    id: 'the-explorer',
    slug: 'the-explorer-garstang',
    title: 'The Explorer',
    subtitle: 'Craft Beer House & Artisan Taproom',
    sector: 'Bars',
    subCategory: 'Bar & Hospitality Interior',
    location: 'Garstang, Lancashire',
    area: 'Lancashire, UK',
    year: '2023',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1400&q=80',
        caption: 'Industrial-luxe tap wall with bespoke exposed copper pipe lines.',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-top poseur tables fabricated from reclaimed shipyard timbers.',
        aspect: 'portrait'
      }
    ],
    overview:
      "A forward-thinking taproom concept in historic Garstang. The clients wanted an adventurous, industrial-heritage feel paying homage to early Lancashire explorers and waterway trading routes.",
    challenge:
      "Integrating a 16-line temperature-controlled draft beer cellar back-bar into a compact footprint without cluttering service lanes.",
    solution:
      "Zoe engineered a flush cold-room viewing portal and an ergonomic U-shaped bar with integrated drip trays, bottle recovery speed-rails, and hidden waste management, boosting bartender speed by 35%.",
    deliverables: [
      'Complete Draft Line & Cellar Route Planning',
      'Bespoke Reclaimed Industrial Furniture Manufacture',
      'Feature LED Signage & Ambient Lighting',
      'Acoustic Control Panelling'
    ],
    designDetails: [
      'Reclaimed Lancashire cotton mill bricks with raw lime pointing',
      'Solid copper tap fonts hand-burnished and sealed',
      'Heavy-duty commercial vinyl seating in antique cognac'
    ],
    metrics: [
      { label: 'Draft Lines', value: '16 Craft Taps' },
      { label: 'Service Speed Gain', value: '+35% Bartender Output' }
    ]
  },
  {
    id: 'east-z-east',
    slug: 'east-z-east-liverpool',
    title: 'East z East',
    subtitle: 'Grand Scale Pan-Asian Fine Dining',
    sector: 'Restaurants',
    subCategory: 'Commercial Restaurant & Kitchen',
    location: 'Kings Dock, Liverpool',
    area: 'Liverpool, UK',
    year: '2021',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80',
        caption: 'Sculptural lighting installations over large banquette dining bays.',
        aspect: 'wide'
      }
    ],
    overview:
      "A flagship multi-level restaurant located near Liverpool's iconic waterfront. Required a dramatic, high-energy dining space accommodating up to 220 guests alongside high-output commercial tandoor kitchens.",
    challenge:
      "Managing sound acoustics in a voluminous cavernous space with concrete ceilings, while orchestrating high-intensity gas extract requirements for tandoori ovens.",
    solution:
      "ZEDesign engineered bespoke curved acoustic ceiling sails, luxury brass laser-cut privacy screens, and integrated high-velocity kitchen extraction hoods that maintain zero odour migration into the luxury dining room.",
    deliverables: [
      'Multi-Level Space Planning (220 covers)',
      'Heavy-duty Commercial Kitchen & Tandoor Station Spec',
      'Custom Geometric Screens & Ambient Backlit Joinery',
      'Full M&E Services Coordination'
    ],
    designDetails: [
      'Smoked oak parquetry paired with rich jewel-toned velvets',
      'Architectural LED cove lighting programmed for dinner-service transitions'
    ],
    metrics: [
      { label: 'Covers', value: '220 Seated' },
      { label: 'Square Footage', value: '4,800 sq ft' }
    ]
  },
  {
    id: 'the-angel',
    slug: 'the-angel-preston',
    title: 'The Angel',
    subtitle: 'Historic Coaching Inn & Gastro Pub Revitalisation',
    sector: 'Hospitality',
    subCategory: 'Pub & Restaurant Refurbishment',
    location: 'Preston, Lancashire',
    area: 'Preston, Lancashire',
    year: '2023',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80',
        caption: 'The restored historic bar front with hand-carved mouldings and burnished brass rails.',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Intimate snug room with deep heritage racing green walls.',
        aspect: 'portrait'
      }
    ],
    overview:
      "The Angel is a storied landmark in central Preston. The client wanted to strip away decades of disjointed 1990s refurbishments and restore the character of a grand English coaching inn with a modern gastro menu focus.",
    challenge:
      "Structural irregularities, low ceilings in the snug, and outdated back-of-house plumbing that bottlenecked peak weekend table turnovers.",
    solution:
      "Zoe redesigned the flow from front bar to dining room, reconfigured the servery to cut service steps by 40%, and created authentic snug zones with restored timber, antique brass fittings, and curated local historic prints.",
    deliverables: [
      'Heritage Listed Property Refurbishment Plan',
      'Ergonomic Bar Dispense Station Remodelling',
      'Full Interior Colour Strategy & Heritage Paint Specification',
      'Contract Carpet & Tile Flooring Strategy'
    ],
    designDetails: [
      'Farrow & Ball deep olive and studio green historical pigments',
      'Subtle brass picture lighting highlighting Lancashire photography'
    ],
    testimonial: {
      quote:
        "Zoe understands both the aesthetic romance of a heritage pub and the brutal commercial reality of cellar logistics and kitchen passes. The Angel is busier now than in the last 25 years.",
      author: 'Jonathan Davies',
      role: 'Proprietor, The Angel Preston'
    },
    metrics: [
      { label: 'Weekly Revenue', value: '+42% post-relaunch' },
      { label: 'Covers Added', value: '+22 snug covers' }
    ]
  },
  {
    id: 'billy-bobs',
    slug: 'billy-bobs-myerscough',
    title: "Billy Bob's Ice Cream Parlour & Diner",
    subtitle: 'High-Volume Family American Diner Experience',
    sector: 'Cafés',
    subCategory: 'High Volume Family Hospitality',
    location: 'Myerscough, Lancashire',
    area: 'Lancashire, UK',
    year: '2022',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
        caption: 'Authentic 1950s style curved booths with commercial grade vinyl.',
        aspect: 'wide'
      }
    ],
    overview:
      "An expansive destination diner and parlour serving hundreds of families daily. The project required playful American-diner nostalgia with unbreakable commercial finishes capable of extreme footfall.",
    challenge:
      "Balancing high-speed queuing and customer order flow with comfortable seated dining and rapid sanitisation between parties.",
    solution:
      "Introduced dual-lane order dispatch, custom ribbed leatherette booths, wipe-clean retro Formica surfaces, and industrial air handling disguised in vintage diner ducting.",
    deliverables: [
      'Customer Flow & Queue Simulation Analysis',
      'High-Footfall Material & Surface Specifications',
      'Custom Milkshake & Ice Cream Servery Station Design',
      'Bespoke Signage & Architectural Branding Integration'
    ],
    designDetails: [
      'Hospitality grade stain-proof vinyls resistant to heavy dairy & food spills',
      'Anti-microbial quartz counter tops at all self-serve stations'
    ],
    metrics: [
      { label: 'Turnover Rate', value: '55 min average table turn' },
      { label: 'Capacity', value: '180 covers' }
    ]
  },
  {
    id: 'spongebob-store',
    slug: 'spongebob-store-blackpool',
    title: 'SpongeBob SquarePants Store',
    subtitle: 'Blackpool Pleasure Beach Experiential Retail Flagship',
    sector: 'Commercial',
    subCategory: 'Commercial & Retail Architecture',
    location: 'Blackpool Pleasure Beach, Lancashire',
    area: 'Blackpool, UK',
    year: '2020',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1400&q=80',
        caption: 'Experiential retail display fixtures engineered for millions of annual theme park visitors.',
        aspect: 'wide'
      }
    ],
    overview:
      "Zoe Nicola Greenwood served as Head Designer on this world-famous licensed retail flagship at the UK's premier amusement park, Blackpool Pleasure Beach. The project demanded complete adherence to Nickelodeon global brand standards while creating a durable, high-converting interactive retail journey.",
    challenge:
      "Extreme foot traffic with millions of visitors annually, stringent international IP brand guidelines, and high-impact children's touchpoints requiring safety and durability.",
    solution:
      "Designed immersive nautical underwater architecture, robust fiberglass display plinths, high-capacity POS cash desks with queue-merchandising, and vibrant LED mood lighting that delighted visitors of all ages.",
    deliverables: [
      'Head Designer Leadership & Brand IP Custody',
      'Full CAD Store Fixture Drawings & Custom Fabrication Specs',
      'High-Volume Retail POS & Crowd Management Architecture',
      'Safety, Fire Compliance & Accessibility (DDA) Audits'
    ],
    designDetails: [
      'Heavy-duty non-scuff commercial resin flooring',
      'Themed 3D sculpted displays with internal structural steel reinforcement'
    ],
    metrics: [
      { label: 'Annual Footfall', value: '1,000,000+ Visitors' },
      { label: 'Retail Conversion', value: '+31% over previous gift store' }
    ]
  },
  {
    id: 'monaco-villa',
    slug: 'luxury-villa-monaco',
    title: 'Private Mediterranean Villa',
    subtitle: 'Ultra-Prime Residence for Formula 1 Racing Driver',
    sector: 'Residential',
    subCategory: 'High-End Luxury Residential',
    location: 'Principality of Monaco',
    area: 'Monaco / Cote d\'Azur',
    year: '2021',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        caption: 'Double-height living pavilion opening onto infinity sea terrace.',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Bespoke marble master kitchen with concealed Gaggenau appliances.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=80',
        caption: 'Private trophy lounge and wellness suite with custom acoustics.',
        aspect: 'landscape'
      }
    ],
    overview:
      "A prestigious private commission for an international racing driver in Monaco. The client sought a sanctuary balancing ultra-luxurious Mediterranean aesthetics with high-performance home gym, recovery facilities, and private entertaining suites.",
    challenge:
      "International freight logistics, strict Monaco apartment syndicate noise limitations during works, and integration of cutting-edge smart home automation across three levels.",
    solution:
      "Zoe delivered a calm, neutral palette of Roman travertine, brushed French oak, Italian leather wall cladding, and bespoke joinery concealing technical equipment and sound systems.",
    deliverables: [
      'Turnkey International Interior Architecture & FF&E',
      'Bespoke Italian Kitchen & Wardrobe Joinery Packages',
      'Full Home Automation & Architectural Lighting Programming',
      'Private Athlete Recovery Suite & Cryo Lounge Planning'
    ],
    designDetails: [
      'Seamless slabs of vein-matched Calacatta Oro marble',
      'Acoustically isolated private cinema and simulator room',
      'Motorised linen solar blinds calibrated to Monaco sun angles'
    ],
    metrics: [
      { label: 'Scope', value: '6-bedroom clifftop villa' },
      { label: 'Execution', value: 'Complete Turnkey Delivery' }
    ]
  },
  {
    id: 'seafront-abersoch',
    slug: 'seafront-home-abersoch',
    title: 'Coastal Seafront Residence',
    subtitle: 'Contemporary Beachfront Sanctuary',
    sector: 'Residential',
    subCategory: 'High-End Luxury Residential',
    location: 'Abersoch, North Wales',
    area: 'Wales, UK',
    year: '2023',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
        caption: 'Open plan living area designed to withstand marine salt air with refined linen and bleached oak.',
        aspect: 'wide'
      }
    ],
    overview:
      "Overlooking the bay in Abersoch, this ground-up coastal property needed interiors that mirrored the horizon while standing up to sandy sea-breeze living.",
    challenge:
      "Harsh coastal marine atmosphere causing corrosion on conventional hardware; ensuring open spaces remained cosy during winter Atlantic gales.",
    solution:
      "Selected marine-grade 316 stainless fittings, lime-washed timber, textured bouclé fabrics, and a double-sided gas stone fireplace acting as an architectural anchor.",
    deliverables: [
      'Full Residential Interior Design & Specification',
      'Custom Island Kitchen with Quartzite Worktops',
      'Bathroom & Ensuite Wetroom Detail Packages'
    ],
    designDetails: [
      'Bleached European white oak wide-plank flooring with UV oil seal',
      'Custom oversized sectional sofa with washable Sunbrella performance linen'
    ],
    metrics: [
      { label: 'Location', value: 'Direct beachfront' }
    ]
  },
  {
    id: 'family-home-inskip',
    slug: 'family-home-inskip',
    title: 'Rural Country Residence',
    subtitle: 'Modern Barn Conversion & Kitchen Extension',
    sector: 'Residential',
    subCategory: 'Luxury Kitchen & Residential',
    location: 'Inskip, Lancashire',
    area: 'Lancashire, UK',
    year: '2022',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
        caption: 'Grand open kitchen-dining hall with exposed king-post roof trusses.',
        aspect: 'wide'
      }
    ],
    overview:
      "A substantial family barn conversion in rural Inskip, Lancashire. The owners required an expansive family entertaining kitchen and snug that honoured the building's agricultural past with contemporary precision.",
    challenge:
      "Massive ceiling volumes that risked feeling cold or uninviting; coordinating underfloor heating across three interconnected split-level barns.",
    solution:
      "Zoe introduced an oversized 3.8m fluted oak kitchen island, tactile limewash plaster, bespoke steel-frame crittall internal doors, and atmospheric layered lighting.",
    deliverables: [
      'Complete Kitchen Design & Appliance Specification',
      'Split-Level Spatial Circulation Strategy',
      'Bespoke Mudroom & Utility Room Planning'
    ],
    designDetails: [
      'Honed Taj Mahal quartzite with leathered finish',
      'Integrated walk-in larder with butcher block preparation station'
    ]
  },
  {
    id: 'hmo-preston',
    slug: 'hmo-preston',
    title: 'Boutique Urban HMO Living',
    subtitle: 'High-Yield Architectural Co-Living Development',
    sector: 'Commercial',
    subCategory: 'Commercial & Property Investment',
    location: 'Preston, Lancashire',
    area: 'Preston, Lancashire',
    year: '2023',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
        caption: 'High-end co-living ensuite bedroom with space-saving integrated study joinery.',
        aspect: 'wide'
      }
    ],
    overview:
      "Transforming a historic Victorian townhouse in central Preston into an 8-bed luxury professional co-living residence. The client targeted premium professional tenants and required maximum room yields without feeling institutional.",
    challenge:
      "Strict HMO fire, acoustic, and room size compliance; creating individual luxury suites with robust, low-maintenance materials.",
    solution:
      "Designed hotel-standard compact ensuites, fitted acoustic headboards with integrated USB/power, and an impressive communal kitchen with duplicate induction cooking hobs.",
    deliverables: [
      'Full HMO Spatial Planning & Compliance Submissions',
      'Communal Kitchen & Dining Hub Design',
      'Durable FF&E Specification for High-Turnover Lettings'
    ],
    designDetails: [
      'Commercial vinyl click flooring with 0.7mm wear layer',
      'Keyless digital smart lock door integration'
    ],
    metrics: [
      { label: 'Rental Premium', value: '+38% above local HMO average' },
      { label: 'Tenancy', value: '100% pre-let prior to completion' }
    ]
  }
];
