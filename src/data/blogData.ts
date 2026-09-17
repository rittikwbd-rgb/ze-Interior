import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'restaurant-interior-design-cost-uk',
    slug: 'how-much-does-restaurant-interior-design-cost-uk',
    title: 'How Much Does Restaurant Interior Design Cost in the UK? (2025/2026 Operator Guide)',
    h1: 'How Much Does Restaurant Interior Design Cost in the UK?',
    category: 'Hospitality Design',
    excerpt:
      'A candid, transparent breakdown of design fees, fit-out costs per square foot, commercial kitchen budgets, and how smart space planning pays for itself in extra covers.',
    author: {
      name: 'Zoe Nicola Greenwood',
      role: 'Founder & Lead Designer',
      bio: '23+ years experience in commercial hospitality, restaurant, and bar interior design across the UK.',
      image: '/zee-design-image.jpg'
    },
    publishedDate: '12 January 2025',
    updatedDate: '18 February 2025',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85',
    keyTakeaways: [
      'UK restaurant fit-out costs typically range from £110 to £260 per sq ft depending on extraction and finishes.',
      'Professional interior design fees usually represent 4% to 9% of total capital expenditure, but directly unlock 15% to 30% additional covers.',
      'Commercial kitchen and extraction compliance (DW/172) typically accounts for 25% to 40% of the entire fit-out budget.',
      'Phased ordering and clear technical CAD drawings eliminate costly contractor variation claims on site.'
    ],
    contentSections: [
      {
        heading: 'Understanding the True Cost Spectrum of a UK Restaurant Fit-Out',
        paragraphs: [
          "When opening a new restaurant or taking over an existing leasehold in Preston, Manchester, or London, budgeting is the single greatest risk factor. Operators frequently underestimate the split between front-of-house aesthetics and heavy mechanical back-of-house infrastructure.",
          "Across the UK in 2025, a turnkey restaurant fit-out averages between £110 and £260+ per square foot. For a modest 1,500 sq ft venue (roughly 50 to 65 covers), total capital investment typically sits between £165,000 and £390,000 depending on whether the building is an empty concrete shell or a second-generation hospitality site."
        ],
        callout:
          "Rule of thumb: An empty shell requires extensive HVAC, 3-phase electrical upgrades, grease traps, and extraction routing. Taking over an existing A3/E-class venue with functioning extract can save £50,000+ immediately."
      },
      {
        heading: 'Typical Budget Allocation Breakdown',
        paragraphs: [
          "To avoid running out of capital before opening night, successful hospitality operators structure their budget into four core pillars:"
        ],
        list: [
          "Commercial Kitchen & Extraction (25% – 35%): Cookline, walk-in cold storage, pass, stainless steel fabrication, DW/172 compliant canopies.",
          "Front-of-House Architectural Fit-Out (35% – 45%): Banquette joinery, bar counters, flooring, acoustic plaster, tiling, and lighting.",
          "Mechanical, Electrical & Plumbing (15% – 20%): Power distribution, gas interlock safety valves, accessible customer WCs, fire alarms.",
          "Professional Fees & Statutory Consents (7% – 10%): Interior design, CAD technical packages, structural engineers, building control, and planning submissions."
        ]
      },
      {
        heading: 'How Professional Design Generates Revenue Instead of Cost',
        paragraphs: [
          "Many first-time operators view interior design as an optional styling expense. In reality, expert space planning is a revenue multiplier.",
          "For example, at Scotts Bistro in Kirkham, re-engineering the circulation lines and introducing bespoke fluted banquette seating added 14 extra covers without overcrowding. At an average spend of £38 per diner and 1.5 table turns on a Friday and Saturday night, those 14 extra seats generate over £80,000 in additional annual revenue—paying for the entire design fee within the first three months of trading."
        ]
      },
      {
        heading: 'Three Practical Tips to Protect Your Fit-Out Budget',
        paragraphs: [
          "1. Freeze your design before contractors begin demolition. Changing a light fitting or moving a waste pipe mid-build costs 5x more than doing it in CAD.",
          "2. Specify contract-grade Crib 5 fabrics from day one. Using residential furnishings is not only an insurance and fire violation, but cheap foam collapses within six months of heavy commercial use.",
          "3. Plan your kitchen pass around table clearance paths so waiting staff never wait for food or fight against incoming customer crowds."
        ]
      }
    ],
    relatedArticles: ['commercial-kitchen-design-workflow', 'hospitality-refurbishment-guide']
  },
  {
    id: 'commercial-kitchen-design-workflow',
    slug: 'commercial-kitchen-design-workflow',
    title: 'Commercial Kitchen Design: Planning the Perfect Workflow & Extraction Layout',
    h1: 'Commercial Kitchen Design: Planning the Perfect Workflow',
    category: 'Commercial Kitchens',
    excerpt:
      'How to engineer back-of-house commercial kitchens for peak service velocity, hygiene compliance (DW/172), energy savings, and chef retention.',
    author: {
      name: 'Zoe Nicola Greenwood',
      role: 'Founder & Commercial Kitchen Specialist',
      bio: 'Over 15 years specialist experience specifying and planning heavy-duty commercial kitchens across the UK.',
      image: '/zee-design-image.jpg'
    },
    publishedDate: '24 January 2025',
    updatedDate: '15 February 2025',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=85',
    keyTakeaways: [
      'The linear triangle: Delivery → Cold Storage → Prep → Cookline → Pass → Potwash must never intersect.',
      'Defra DW/172 extraction compliance is essential for planning permission and preventing grease fire hazards.',
      'Induction cooking suites can reduce kitchen heat loads by 40% and slash extract ventilation electricity requirements.',
      'Ergonomic pass height and hot-holding lamps prevent food from cooling while tickets print.'
    ],
    contentSections: [
      {
        heading: 'The Non-Negotiable Flow of a Modern Commercial Kitchen',
        paragraphs: [
          "A chaotic kitchen burns out head chefs and creates long ticket times. The golden rule of commercial kitchen architecture is linear progression without back-tracking.",
          "Deliveries must arrive at dry and refrigerated storage without traversing cooking lines. Raw prep stations must remain separated from cooked holding areas to satisfy Environmental Health Officers. Dirty plates returning from the restaurant floor must enter the wash area without crossing hot plated meals waiting at the pass."
        ],
        callout:
          "If your kitchen staff have to cross paths to grab a refrigerated pan or drop off dirty cutlery, you are losing 15 to 30 seconds on every single order."
      },
      {
        heading: 'Extraction & DW/172: The Critical Engineering Hurdle',
        paragraphs: [
          "Commercial extraction is the most technically regulated component of hospitality. Local authorities strictly scrutinise odour abatement, carbon filtration, noise levels (measured in dBA at nearest residential windows), and discharge plume height.",
          "We specify make-up air systems that replenish the exact volume of air extracted. Without balanced supply air, negative pressure pulls foul sewer smells up drains and makes front entrance doors impossible for customers to push open."
        ]
      },
      {
        heading: 'Induction vs. Traditional Gas in 2025',
        paragraphs: [
          "Gas cooking remains popular, but rising gas safety interlock costs and escalating commercial energy tariffs have made heavy-duty commercial induction the smart choice for forward-thinking operators.",
          "Induction transfers 90% of energy directly to the pan (compared to just 40% with open gas flames). The result is a cooler, quieter kitchen environment that dramatically improves kitchen team retention."
        ]
      }
    ],
    relatedArticles: ['restaurant-interior-design-cost-uk', 'hospitality-refurbishment-guide']
  },
  {
    id: 'hospitality-refurbishment-guide',
    slug: 'hospitality-refurbishment-guide',
    title: 'Hospitality Refurbishment: How to Revitalise Your Venue Without Long Downtime',
    h1: 'Hospitality Refurbishment: A Practical Operator Guide',
    category: 'Hospitality Design',
    excerpt:
      'Proven strategies for phased refits, rapid weekend turnarounds, lighting overhauls, and breathing fresh commercial life into tired pubs and restaurants.',
    author: {
      name: 'Zoe Nicola Greenwood',
      role: 'Founder & Lead Designer',
      bio: '23+ years leading fast-track commercial refits for pubs, bistros, and high-street venues.',
      image: '/zee-design-image.jpg'
    },
    publishedDate: '02 February 2025',
    updatedDate: '10 February 2025',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=85',
    keyTakeaways: [
      'Every lost trading day costs revenue and client habit; pre-fabricating joinery off-site cuts on-site installation by 60%.',
      'Targeted lighting upgrades can completely transform venue atmosphere for a fraction of a structural overhaul.',
      'Re-upholstering existing banquette frames with luxury Crib 5 velvets achieves high-end luxury sustainably.',
      'Announce your refurbishment with progress teasers to build opening-week excitement and booked covers.'
    ],
    contentSections: [
      {
        heading: 'Minimising Lost Trading Days Through Off-Site Manufacture',
        paragraphs: [
          "For an established pub or bistro, shutting doors for six weeks is commercially agonizing. Fixed costs—staff retention, building rent, utilities—continue unabated.",
          "Our approach prioritises off-site joinery fabrication. Custom banquette frames, back-bar gantries, and poseur tables are manufactured in Lancashire workshop conditions while your venue continues serving. When site work begins, trades execute a disciplined 7-to-10 day sprint."
        ]
      },
      {
        heading: 'The Transformative Power of Architectural Lighting',
        paragraphs: [
          "If your budget is tight, do not skimp on lighting. Replacing cold 4000K commercial halogen spotlights with 2200K–2700K dimmable LED architectural warm spots instantly makes patrons look radiant and lingering drinks feel intimate."
        ]
      }
    ],
    relatedArticles: ['restaurant-interior-design-cost-uk', 'sustainable-interior-design-longevity']
  },
  {
    id: 'sustainable-interior-design-longevity',
    slug: 'sustainable-interior-design-reclaiming-materials',
    title: 'Sustainable Interior Design: Reclaimed Materials & Designing for Longevity',
    h1: 'Sustainable Interior Design: Real Practical Impact',
    category: 'Sustainability',
    excerpt:
      'Why genuine sustainable interior design is rooted in durable British craftsmanship, salvage character, and eliminating disposable hospitality trends.',
    author: {
      name: 'Zoe Nicola Greenwood',
      role: 'Founder & Sustainable Interior Specialist',
      bio: 'Advocating circular design, reclaimed timbers, and upcycled furniture across UK venues.',
      image: '/zee-design-image.jpg'
    },
    publishedDate: '15 February 2025',
    updatedDate: '15 February 2025',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1800&q=85',
    keyTakeaways: [
      'Fast-furniture culture in hospitality generates thousands of tonnes of commercial landfill every year.',
      'Reclaimed mill timbers and antique architectural brass age with beauty, gaining patina rather than deteriorating.',
      'Specifying low-VOC mineral paints ensures healthier breathing environments for floor staff and diners.',
      'Designing for disassembly ensures fixtures can be repaired or relocated during future lease renewals.'
    ],
    contentSections: [
      {
        heading: 'Beyond Greenwashing: Authentic Commercial Sustainability',
        paragraphs: [
          "In the design industry, sustainability is too often reduced to marketing slogans. At ZEDesign, our approach is anchored in British architectural reality: we preserve sound structures, celebrate reclaimed Lancashire materials, and specify commercial finishes designed to withstand ten years of busy service."
        ]
      },
      {
        heading: 'Character That Cannot Be Replicated In A Factory',
        paragraphs: [
          "A century-old reclaimed pine or pitch oak beam carries tactile warmth, knotting, and character that sterile synthetic composites cannot match. Guests subconsciously respond to real stone, solid timber, and genuine metals."
        ]
      }
    ],
    relatedArticles: ['restaurant-interior-design-cost-uk', 'commercial-kitchen-design-workflow']
  }
];

export const BLOG_DATA = BLOG_POSTS;
