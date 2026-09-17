import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hospitality-interior-design',
    slug: 'hospitality-interior-design',
    title: 'Hospitality Interior Design',
    h1: 'Hospitality Interior Design Preston, Lancashire & UK',
    headline: 'Environments engineered to increase customer dwell time, spend, and operational flow.',
    shortDesc:
      'Award-winning interior architecture and design for restaurants, bars, cafés, hotels, and multi-venue hospitality spaces.',
    overview:
      "Hospitality design is never merely decorative—it is an intricate commercial equation. At ZEDesign Interiors, we combine 23+ years of spatial mastery with forensic understanding of covers per hour, bar dispense velocity, kitchen workflow, and emotional atmospheric pacing. We design hospitality destinations that captivate guests on arrival and run effortlessly under pressure on busy Saturday nights.",
    iconName: 'UtensilsCrossed',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85',
    sectorCategory: 'Commercial & Hospitality',
    keyBenefits: [
      'Engineered Cover Optimization: Maximising seating capacity without sacrificing diner intimacy or service corridors.',
      'Acoustic Comfort: Strategic sound damping materials that prevent harsh noise fatigue while preserving lively energy.',
      'Dwell-Time Lighting: Layered architectural illumination shifting effortlessly between bright daytime covers and moody night trading.',
      'Durability Guaranteed: Commercial contract-grade fabrics (Crib 5), impervious worktops, and scrape-resistant wall finishes.'
    ],
    deliverables: [
      'Comprehensive Concept Mood Boards & Material Sample Trays',
      'Millimetre-Accurate 2D CAD Layouts & Seating Plans',
      'Photorealistic 3D CGI Visualisations for Stakeholders & Investors',
      'Complete FF&E Specification Schedules with Trade Sourcing',
      'Reflected Ceiling Plans (Lighting, HVAC, Extract Coordination)',
      'Health & Safety, DDA Access, and Building Control Drawing Sets'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Commercial Brief & Site Diagnostic',
        description:
          'We inspect your venue, analyse footfall patterns, target demographics, spend per head targets, and back-of-house constraints.'
      },
      {
        step: '02',
        title: 'Spatial Zoning & Capacity Modelling',
        description:
          'Developing CAD options testing cover configurations, dispense bar placement, toilets, and kitchen pass circulation.'
      },
      {
        step: '03',
        title: 'Detailed Design, 3D CGI & FF&E Schedules',
        description:
          'Bringing the concept to life with photorealistic renders, bespoke joinery specifications, lighting schedules, and finishes.'
      },
      {
        step: '04',
        title: 'Tender Documentation & Trade Coordination',
        description:
          'Working with your chosen contractors or introducing vetted Lancashire & national shopfitters, overseeing fit-out to launch.'
      }
    ],
    faqs: [
      {
        question: 'How do you balance cover numbers against customer comfort?',
        answer:
          'We use precision spatial planning developed over 23+ years. By combining fixed banquettes, flexible loose tables, and custom-proportioned circulation routes, we routinely achieve 15%–30% higher cover yields than standard generic layouts while actually increasing diner comfort and server speed.'
      },
      {
        question: 'Can you work with our existing builder or main contractor?',
        answer:
          'Absolutely. Zoe regularly collaborates with clients’ trusted builders, mechanical engineers, and joiners. Our detailed drawing packs give trades unambiguous technical instructions, preventing expensive site errors.'
      },
      {
        question: 'Do you assist with planning applications and licensing layouts?',
        answer:
          'Yes. We produce fully compliant CAD drawing packages for local council planning submissions, listed building consents, and premises licensing authorities.'
      }
    ],
    featuredProjects: ['scotts-bistro-kirkham', 'harleys-bistro-grasmere', 'the-angel-preston']
  },
  {
    id: 'commercial-kitchen-design',
    slug: 'commercial-kitchen-design',
    title: 'Commercial Kitchen Design & Specification',
    h1: 'Commercial Kitchen Design, Specification & Supply',
    headline: '15+ years of specialist commercial kitchen planning, ventilation coordination, and chef workflow.',
    shortDesc:
      'High-performance back-of-house commercial kitchens, prep stations, bar dispense runs, and extraction specification.',
    overview:
      "A restaurant's financial success is decided in the kitchen. If the brigade trips over each other or orders bottleneck at the pass, food slows down and margins evaporate. Zoe Nicola Greenwood brings over 15 years of dedicated commercial kitchen design experience, having planned heavy-duty cooking lines, dishwash stations, refrigeration cold-rooms, and extraction systems across the UK.",
    iconName: 'ChefHat',
    heroImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=85',
    sectorCategory: 'Technical & Planning',
    keyBenefits: [
      'Linear Chef Flow: Separation of raw prep, cookline, plating pass, and dirty wash return to avoid cross-contamination.',
      'Defra & DW/172 Ventilation Compliance: Precise extraction hood sizing, make-up air balance, and noise/odour attenuation.',
      'Energy Efficiency: Induction cooktops and demand-controlled extract systems reducing commercial energy overheads by up to 35%.',
      'Hygienic Cladding & Stainless Fabrication: Heavy-duty grade 304 stainless benches, non-slip resin floors, and wipe-clean walls.'
    ],
    deliverables: [
      'Full Commercial Equipment Layout Drawings with Dimensions',
      'M&E (Mechanical & Electrical) Service Connection Schedules (Gas, Water, Single/3-Phase Electric, Drains)',
      'Defra DW/172 Extraction & Canopy Specification Schedules',
      'Walk-In Cold Room, Freezer & Prep Layout Detailing',
      'Supplier Tenders, Competitive Equipment Procurement & Trade Supply',
      'Installation Sign-Off & Environmental Health Compliance Checks'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Menu Audit & Service Volume Analysis',
        description:
          'We dissect your menu, batching demands, peak covers per hour, and dietary separation requirements.'
      },
      {
        step: '02',
        title: 'Zoned Kitchen Engineering',
        description:
          'Drafting CAD layouts separating storage, prep, hot cookline, plating pass, and potwash return loops.'
      },
      {
        step: '03',
        title: 'Technical M&E Points & Equipment Specification',
        description:
          'Specifying exact kilowatt loadings, gas pipe sizing, water inlets, waste traps, and ventilation duct paths.'
      },
      {
        step: '04',
        title: 'Procurement & Site Commissioning',
        description:
          'Leveraging commercial trade partnerships for top-tier discounts on Rational, Foster, Winterhalter, and custom fabrication.'
      }
    ],
    faqs: [
      {
        question: 'What regulations must a UK commercial kitchen meet?',
        answer:
          'UK commercial kitchens must comply with Food Standards Agency hygiene mandates, HSE gas safety regulations, and BESA DW/172 specifications for kitchen ventilation. We design strictly to these standards to pass Environmental Health inspections on the first attempt.'
      },
      {
        question: 'Can you help upgrade an existing kitchen during trading?',
        answer:
          'Yes, we plan phased refurbishments that allow existing venues to remain trading or condense downtime to a single shutdown week.'
      }
    ],
    featuredProjects: ['scotts-bistro-kirkham', 'east-z-east-liverpool']
  },
  {
    id: 'restaurant-interior-design',
    slug: 'restaurant-interior-design',
    title: 'Restaurant Interior Design',
    h1: 'Restaurant Interior Design Specialists Preston & UK',
    headline: 'Atmospheric dining spaces created to elevate your culinary vision and brand reputation.',
    shortDesc:
      'From fine dining establishments to bustling neighborhood bistros and fast-casual dining spaces.',
    overview:
      "A great meal is an all-sensory journey. The weight of the timber table, the flattering glow of amber light, the softness of the seating fabric, and the unobtrusive elegance of the acoustics all contribute to perceived value. ZEDesign creates restaurant interiors that turn first-time diners into passionate brand advocates.",
    iconName: 'Flame',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85',
    sectorCategory: 'Commercial & Hospitality',
    keyBenefits: [
      'Brand Storytelling: Unique architectural motifs and bespoke joinery that reflect your culinary narrative.',
      'Flattering Lighting Schemes: Lighting calibrated to make guests and culinary dishes look gorgeous.',
      'Fast Table Turn Ergonomics: Clear server circulation lanes preventing collision during rush hours.'
    ],
    deliverables: [
      'Spatial Planning & 2D CAD Layouts',
      'Custom Seating & Booth Detailing',
      'Tableware, Uniform & Sensory Styling Recommendations',
      'Acoustic Ceiling & Wall Strategies'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Concept & Cuisine Immersion',
        description: 'Aligning space design with chef philosophy, price point, and dining pacing.'
      },
      {
        step: '02',
        title: 'Circulation & Seating Strategy',
        description: 'Balancing romantic booth seating, open social banquettes, and window visibility.'
      },
      {
        step: '03',
        title: 'Fabrication & Fit-Out Guidance',
        description: 'Overseeing joiners, painters, and tradespeople through to the first service.'
      }
    ],
    faqs: [
      {
        question: 'How long does a restaurant interior design and fit-out take?',
        answer:
          'Typically, design, planning, and 3D visualisations take 3 to 6 weeks. The physical fit-out usually ranges between 4 to 8 weeks depending on the scale and kitchen infrastructure required.'
      }
    ],
    featuredProjects: ['scotts-bistro-kirkham', 'harleys-bistro-grasmere', 'east-z-east-liverpool']
  },
  {
    id: 'bar-interior-design',
    slug: 'bar-interior-design',
    title: 'Bar & Taproom Interior Design',
    h1: 'Bar, Taproom & Cocktail Lounge Interior Design',
    headline: 'High-energy bars engineered for fast drink dispense, high margins, and magnetic atmosphere.',
    shortDesc:
      'Cocktail lounges, craft beer taprooms, historic public houses, and late-night social venues.',
    overview:
      "The bar counter is the theatre of hospitality. Every inch of the front bar, undercounter well, speed rails, and back-bar display must be balanced between visual magnetism and bartender ergonomics. ZEDesign eliminates slow drink service bottlenecks through intelligent underbar design.",
    iconName: 'Wine',
    heroImage: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1800&q=85',
    sectorCategory: 'Commercial & Hospitality',
    keyBenefits: [
      'Bartender Ergonomics: Speed rails, ice chests, cocktail dumps, and glasswashers located within arms reach.',
      'Show-Stopping Back-Bars: Backlit marble, fluted brass, and mirror installations that sell premium spirits.',
      'Durable Counter Tops: Sturdy zinc, aged copper, solid quartz, or seasoned hardwoods.'
    ],
    deliverables: [
      'Bar Ergonomic Elevations & Equipment Integration Plans',
      'Draft Line & Cellar Route Coordination',
      'Feature Lighting & Bottle Display Detailing',
      'High-Footfall Flooring Specifications'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Dispense & Service Velocity Plan',
        description: 'Auditing peak order volume and cocktail/beer dispense station requirements.'
      },
      {
        step: '02',
        title: 'Front & Back-Bar Architecture',
        description: 'Designing custom gantry joinery, brass footrails, and glass storage.'
      },
      {
        step: '03',
        title: 'Material Specification & Fit-out',
        description: 'Selecting stain-proof, waterproof contract surfaces built for busy nights.'
      }
    ],
    faqs: [
      {
        question: 'Do you design underbar stainless steel stations?',
        answer:
          'Yes, we specify and fabricate bespoke stainless steel cocktail wells, drainboards, glasswash runs, and draft beer pythons for rapid service.'
      }
    ],
    featuredProjects: ['the-explorer-garstang', 'the-angel-preston']
  },
  {
    id: 'cad-drawings',
    slug: 'cad-drawings',
    title: 'CAD Plans & Technical Drawings',
    h1: 'Precision CAD Plans, Space Planning & Building Control Packs',
    headline: 'Millimetre-accurate technical blueprints that eliminate on-site ambiguity for contractors.',
    shortDesc:
      'Site surveys, 2D floor plans, sections, elevations, M&E schematics, and local authority submission packs.',
    overview:
      "A creative vision without technical precision leads to costly on-site delays. Zoe Nicola Greenwood produces meticulous CAD drawings that serve as the single source of truth for contractors, joiners, plumbers, electricians, and building control officers.",
    iconName: 'Ruler',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85',
    sectorCategory: 'Technical & Planning',
    keyBenefits: [
      'Zero Site Ambiguity: Exact dimensions, datum heights, and finish schedules.',
      'Regulatory Compliance: Drawing sets prepared to British Standards and local building regulations.',
      'Accurate Tender Pricing: Clear specs prevent builders from inflating contingency quotes.'
    ],
    deliverables: [
      'Laser-Measured As-Built Survey Drawings',
      'Proposed Demolition & Construction Layouts',
      'Reflected Ceiling & Lighting Switching Plans',
      'Plumbing, Drainage & Small Power Schematics',
      'Detailed Joinery & Cabinetry Workshop Drawings'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Laser Survey & Digital Model Setup',
        description: 'Capturing exact building dimensions, ceiling heights, and structural columns.'
      },
      {
        step: '02',
        title: 'Drafting & Layer Coordination',
        description: 'Layering architectural walls, joinery, M&E services, and equipment.'
      },
      {
        step: '03',
        title: 'Tender Issue & Revisions',
        description: 'Supplying high-resolution PDF and DWG drawing sets to contractor teams.'
      }
    ],
    faqs: [
      {
        question: 'Do you provide CAD drawings for planning applications?',
        answer:
          'Yes, we produce fully dimensioned existing and proposed drawings formatted for council planning portals and listed building consent.'
      }
    ],
    featuredProjects: ['scotts-bistro-kirkham', 'the-angel-preston', 'hmo-preston']
  },
  {
    id: '3d-interior-design',
    slug: '3d-interior-design',
    title: '3D Visualisation & Photorealistic CGI',
    h1: '3D Interior Visualisation & CGI Modelling',
    headline: 'Experience your venue before a single wall is demolished or a single tile is laid.',
    shortDesc:
      'High-resolution photorealistic CGI renders, material simulations, lighting studies, and virtual walkthroughs.',
    overview:
      "Visualising how materials, lighting, and spatial volumes interact in real life is difficult from 2D drawings alone. Our 3D visualisation service provides stunning, photorealistic impressions of your finished interior. Crucial for securing investor funding, landlord approvals, and pre-launch marketing imagery.",
    iconName: 'Box',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    sectorCategory: 'Technical & Planning',
    keyBenefits: [
      'De-Risk Your Investment: Confirm finishes, textures, and colours with 100% confidence.',
      'Investor & Landlord Approvals: Persuasive presentation assets that secure commercial leases.',
      'Pre-Launch PR & Social Media: Generate bookings and press hype months before opening day.'
    ],
    deliverables: [
      'Photorealistic Exterior & Interior 4K CGI Renders',
      'Lighting Simulation at Day and Night Modes',
      '360-Degree Panorama Interactive Tours',
      'Fly-Through Video Animations'
    ],
    processSteps: [
      {
        step: '01',
        title: '3D Geometry Modelling',
        description: 'Building exact architectural volume and bespoke joinery in 3D.'
      },
      {
        step: '02',
        title: 'Texture & Material Mapping',
        description: 'Applying real manufacturer textures, fabrics, marbles, and woods.'
      },
      {
        step: '03',
        title: 'Photometric Lighting & High-Res Render',
        description: 'Calculating real-world lumens, Kelvin temperatures, and sun angles.'
      }
    ],
    faqs: [
      {
        question: 'Can 3D renders be used for marketing before we open?',
        answer:
          'Yes! Many of our hospitality clients use our CGI renders on social media, press releases, and websites to generate waiting lists before opening.'
      }
    ],
    featuredProjects: ['scotts-bistro-kirkham', 'luxury-villa-monaco']
  },
  {
    id: 'sustainable-interior-design',
    slug: 'sustainable-interior-design',
    title: 'Sustainable Interior Design',
    h1: 'Sustainable Interior Design & Circular Material Strategy',
    headline: 'Practical, honest environmental stewardship through longevity, reclaimed materials, and low-VOC finishes.',
    shortDesc:
      'Upcycled furniture, reclaimed heritage materials, energy-efficient lighting, and zero-greenwashing design.',
    overview:
      "True sustainability in interior design is not about trendy buzzwords—it is about making durable decisions that withstand decades of heavy use. Zoe Nicola Greenwood champions circular design: salvaging historic architectural elements, specifying carbon-conscious British fabrics, specifying low-energy LED fixtures, and designing joinery that can be maintained rather than dumped in landfill.",
    iconName: 'Leaf',
    heroImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1800&q=85',
    sectorCategory: 'Commercial & Hospitality',
    keyBenefits: [
      'Reclaimed Heritage Character: Infusing authentic warmth with reclaimed timbers, stone, and architectural salvage.',
      'Reduced Operational Carbon: Ultra-low wattage lighting schemes and smart heating zoning that cut energy bills.',
      'Healthier Indoor Air Quality: Non-toxic zero-VOC paints, natural breathable plasters, and formaldehyde-free joinery boards.'
    ],
    deliverables: [
      'Sustainable Materials Specification Schedule',
      'Reclaimed Material Sourcing & Upcycling Protocols',
      'Low-Energy LED Lighting Load Calculations',
      'Lifecycle Assessment & Waste Minimisation Plan'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Existing Asset & Salvage Audit',
        description: 'Assessing what can be refurbished, reupholstered, or re-engineered on site.'
      },
      {
        step: '02',
        title: 'Sustainable Specification',
        description: 'Specifying circular materials certified by FSC, Cradle to Cradle, and OEKO-TEX.'
      },
      {
        step: '03',
        title: 'Longevity Detailing',
        description: 'Detailing components with modular replaceable parts for extended service life.'
      }
    ],
    faqs: [
      {
        question: 'Does sustainable interior design cost more?',
        answer:
          'Often it saves money. Reusing existing building fabric and sourcing reclaimed character pieces frequently costs less than purchasing new disposable furniture, and energy-efficient systems significantly lower utility bills over the venue’s lifetime.'
      }
    ],
    featuredProjects: ['harleys-bistro-grasmere', 'the-explorer-garstang']
  },
  {
    id: 'project-management',
    slug: 'project-management',
    title: 'Project Management & Site Coordination',
    h1: 'Turnkey Project Management & Trade Coordination',
    headline: 'Protecting your budget, programme timeline, and design intent from first demolition to opening night.',
    shortDesc:
      'Contract administration, site inspections, contractor coordination, snagging, and handover management.',
    overview:
      "Even the most beautiful design fails if fit-out schedules spiral out of control. With 23+ years of on-site experience, Zoe Nicola Greenwood acts as your trusted representative on site, coordinating trades, solving unexpected structural anomalies instantly, and holding contractors accountable to strict quality benchmarks.",
    iconName: 'HardHat',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85',
    sectorCategory: 'Technical & Planning',
    keyBenefits: [
      'On-Time Handover: Strict programme management designed around your planned launch date.',
      'Budget Preservation: Preventing contractor variations through rigorous drawing packages.',
      'Design Integrity: Ensuring joinery, tiling, and finishes match the approved design specifications exactly.'
    ],
    deliverables: [
      'Master Fit-Out Programme Timeline & Critical Path',
      'Regular Site Inspection Logs & Photo Quality Audits',
      'Contractor RFI (Request for Information) Management',
      'Final Snagging Inspection & Rectification Sign-Off'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Pre-Construction Briefing',
        description: 'Reviewing all drawings and milestones with main contractors and trades.'
      },
      {
        step: '02',
        title: 'Active Site Supervision',
        description: 'Conducting regular site visits in Preston, Lancashire, and across the UK.'
      },
      {
        step: '03',
        title: 'Commissioning & Snagging',
        description: 'Supervising deep cleans, appliance commissioning, and rectifying any defect before opening.'
      }
    ],
    faqs: [
      {
        question: 'Do you manage trades on-site every day?',
        answer:
          'We provide flexible coordination ranging from key milestone site inspections and contract administration to intensive turnkey management, depending on project scale and client preference.'
      }
    ],
    featuredProjects: ['scotts-bistro-kirkham', 'the-angel-preston', 'spongebob-store-blackpool']
  },
  {
    id: 'luxury-residential-design',
    slug: 'luxury-residential-design',
    title: 'Luxury High-End Residential Design',
    h1: 'Luxury Residential Interior Design Lancashire, UK & Abroad',
    headline: 'Bespoke private residences tailored to your lifestyle, tactile comfort, and architectural elegance.',
    shortDesc:
      'Country estates, seafront homes, city penthouses, and bespoke kitchen/bathroom architecture.',
    overview:
      "Your home should be your personal sanctuary. Drawing on an illustrious portfolio that spans luxury private villas in Monaco to coastal retreats in Abersoch and rural Lancashire barn conversions, ZEDesign crafts bespoke living environments infused with quiet luxury, organic materials, and intuitive flow.",
    iconName: 'Home',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    sectorCategory: 'Luxury Residential',
    keyBenefits: [
      'Tailored to How You Live: Spatial flow configured around your daily rituals and entertaining habits.',
      'Exclusive Materials: Access to private European stone quarries, artisan weavers, and bespoke joiners.',
      'Timeless Balance: Interiors that feel calm, sophisticated, and gracefully age with the home.'
    ],
    deliverables: [
      'Full Residential Spatial Architecture & Layouts',
      'Bespoke Kitchen, Dressing Room & Bathroom Packages',
      'Curated Lighting, Artwork & Accessory Styling',
      'Custom Furniture Design & Fabric Sourcing'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Lifestyle Discovery Session',
        description: 'Exploring your family routines, aesthetic passions, and comfort priorities.'
      },
      {
        step: '02',
        title: 'Concept & Spatial Mastery',
        description: 'Creating cohesive room-by-room architectural concepts and material palettes.'
      },
      {
        step: '03',
        title: 'Turnkey Installation & Dressing',
        description: 'Delivering furniture, bespoke joinery, window treatments, and final styling.'
      }
    ],
    faqs: [
      {
        question: 'Do you design private kitchens as well as commercial kitchens?',
        answer:
          'Yes! In fact, our deep commercial kitchen knowledge allows us to design residential kitchens with superior ergonomic workflow, high-performance extraction, and concealed chef-standard appliances.'
      }
    ],
    featuredProjects: ['luxury-villa-monaco', 'seafront-home-abersoch', 'family-home-inskip']
  }
];
