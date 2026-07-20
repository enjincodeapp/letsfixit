export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Luxury Home' | 'Property Development' | 'Architectural Extension' | 'Heritage Renovation' | 'Commercial';
  location: string;
  projectValue: string;
  completionDate: string;
  sqFt: string;
  shortStory: string;
  description: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  architect: string;
  highlights: { label: string; value: string }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'st-andrews-cliffside',
    title: 'The St. Andrews Cliffside Estate',
    subtitle: 'Bespoke Ultra-Modern Coastal Sanctuary',
    category: 'Luxury Home',
    location: 'St Andrews, Fife',
    projectValue: '£8.5 Million',
    completionDate: 'Q4 2025',
    sqFt: '11,200 sq ft',
    shortStory: 'Perched on the rugged coastal cliffs of Fife, this cantilevered glass and Scottish larch residence seamlessly blends minimalist Scandinavian architecture with raw Scottish stone.',
    description: 'Designed in collaboration with award-winning architects, The St. Andrews Cliffside Estate represents the pinnacle of modern luxury living. Featuring triple-glazed floor-to-ceiling curtain walls, geothermal heating, an infinity lap pool overlooking the North Sea, and hand-carved local sandstone columns.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Cantilevered infinity pool with marine glass',
      'Subterranean 6-car subterranean showroom',
      'Bespoke oak & brass kitchen by Bulthaup',
      'Passivhaus certified thermal performance',
      'Direct private access to coastal path'
    ],
    architect: 'Macleod & Partners Architecture',
    highlights: [
      { label: 'Energy Rating', value: 'A+ Net Zero' },
      { label: 'Build Time', value: '18 Months' },
      { label: 'Glazing Surface', value: '450m²' }
    ]
  },
  {
    id: 'edinburgh-georgian-pavilion',
    title: 'The New Town Georgian Glass Pavilion',
    subtitle: 'Heritage Conservation Meets Ultra-Modern Glass Architecture',
    category: 'Heritage Renovation',
    location: 'New Town, Edinburgh',
    projectValue: '£4.2 Million',
    completionDate: 'Q2 2025',
    sqFt: '6,800 sq ft',
    shortStory: 'A sympathetic full-restoration of an 1820s Category-A listed townhouse coupled with a frameless structural glass rear extension floating over landscaped gardens.',
    description: 'Blending 200-year-old plaster moldings and restored pitch-pine shutters with structural glass beams, subterranean wine cellar, and intelligent home automation. Restored to preserve Edinburgh’s UNESCO heritage while defining 21st-century opulence.',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Frameless structural glass box extension',
      'Restored Georgian cornicing & marble fireplaces',
      'Climate-controlled subterranean wine room',
      'Custom brass & micro-cement spa bathroom',
      'Lutron Homeworks QSX lighting integration'
    ],
    architect: 'Caledonia Heritage & Modern Practice',
    highlights: [
      { label: 'Heritage Grade', value: 'Category A Listed' },
      { label: 'Build Time', value: '14 Months' },
      { label: 'Glass Thickness', value: '42mm Triple Structural' }
    ]
  },
  {
    id: 'loch-lomond-timber-manor',
    title: 'Loch Lomond Eco Timber Manor',
    subtitle: 'Highland Architectural Landmark in Charred Larch',
    category: 'Property Development',
    location: 'Loch Lomond & The Trossachs',
    projectValue: '£6.8 Million',
    completionDate: 'Q3 2025',
    sqFt: '9,400 sq ft',
    shortStory: 'Framed in mass timber and clad in traditional Shou Sugi Ban charred Scottish larch, this Lochside sanctuary merges seamlessly into the ancient Highland pine forest.',
    description: 'Set within 15 acres of private Highland woodland on the shores of Loch Lomond. Constructed with precision Glulam timber beams, custom green roof, and expansive cantilevered timber decks extending out over private waterside docks.',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Off-grid hydro & solar power system',
      'Charred Scottish larch external rainscreen cladding',
      'Double-height great room with 8-meter granite fireplace',
      'Private deep-water yacht pontoon',
      'Wellness spa with cedar sauna & outdoor hot tub'
    ],
    architect: 'Highland Form & Space Architects',
    highlights: [
      { label: 'Carbon Footprint', value: 'Negative Embodied Carbon' },
      { label: 'Estate Area', value: '15 Acres' },
      { label: 'Decking', value: '300m² Siberian Larch' }
    ]
  },
  {
    id: 'gleneagles-contemporary-villa',
    title: 'The Gleneagles Fairway Villa',
    subtitle: 'Private Golf Estate Residence with Sculptural Steel Architecture',
    category: 'Luxury Home',
    location: 'Auchterarder, Perthshire',
    projectValue: '£7.5 Million',
    completionDate: 'Q1 2025',
    sqFt: '10,500 sq ft',
    shortStory: 'Overlooking the championship fairways of Gleneagles, this residence combines sharp geometric concrete forms with warm oak panelling and automated bronze louvers.',
    description: 'Designed for effortless indoor-outdoor entertainment, featuring a sunken fire pit terrace, indoor heated wellness suite, motorized sliding glass doors opening 12 meters wide, and a private simulator lounge.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '12-meter pocketing glass door systems',
      'TrackMan golf simulator suite & wine gallery',
      'Anodized bronze acoustic louvers',
      'Hand-cast board-marked concrete feature walls',
      'Automated smart security & bio-metric access'
    ],
    architect: 'Studio Zaha-Caledonia',
    highlights: [
      { label: 'Site View', value: 'Gleneagles King’s Course' },
      { label: 'Bedrooms', value: '6 En-suite Suites' },
      { label: 'Garage', value: '4-Car Heated' }
    ]
  },
  {
    id: 'glasgow-west-end-penthouse',
    title: 'The Park Circus Glass Penthouse',
    subtitle: 'Floating Duplex Penthouse Overlooking Kelvingrove Park',
    category: 'Architectural Extension',
    location: 'West End, Glasgow',
    projectValue: '£3.8 Million',
    completionDate: 'Q4 2024',
    sqFt: '5,400 sq ft',
    shortStory: 'An engineering feat adding a rooftop steel and glass duplex penthouse atop a Victorian sandstone crescent in Glasgow’s prestigious Park District.',
    description: 'Constructed using precision tower crane lift logistics over historic rooftops, this penthouse offers 360-degree panoramic views of Glasgow with a wraparound quartz terrace, private hydraulic elevator, and bespoke Italian kitchens.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Private internal hydraulic glass elevator',
      '360° wraparound granite terrace with fire table',
      'Double-height ceiling voids with floating staircase',
      'Acoustic triple-glazing with privacy tinting'
    ],
    architect: 'Strathclyde Structural Design',
    highlights: [
      { label: 'Terrace Size', value: '180m²' },
      { label: 'Lift Height', value: '25 Meters' },
      { label: 'Completion', value: 'Record 10 Months' }
    ]
  }
];

export const SERVICES_DATA = [
  {
    id: 'luxury-home-construction',
    title: 'Luxury Home Construction',
    category: 'New Build',
    description: 'Ground-up master-crafted bespoke luxury residences built with precision engineering, premium natural stone, mass timber, and cutting-edge Passivhaus energy standards.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    iconName: 'Home',
    features: ['Architectural engineering & foundations', 'Mass timber & steel frame construction', 'Bespoke high-performance glazing', 'Full turnkey luxury interior fit-out']
  },
  {
    id: 'house-extensions',
    title: 'House Extensions',
    category: 'Architectural',
    description: 'Seamless glass pavilions, modern multi-storey rear extensions, and open-plan structural additions that transform classic Scottish properties into modern marvels.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Maximize2',
    features: ['Frameless structural glass boxes', 'Open-plan kitchen-diner extensions', 'Cantilevered roof overhangs', 'Bi-fold & pocketing door installations']
  },
  {
    id: 'kitchen-renovations',
    title: 'Kitchen Renovations',
    category: 'Interiors',
    description: 'Handcrafted architectural kitchens featuring book-matched Italian marble slabs, solid Scottish oak joinery, Gaggenau appliances, and custom bronze accents.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    iconName: 'Utensils',
    features: ['Custom joinery & book-matched stone', 'Integrated smart appliances', 'Architectural task & accent lighting', 'Hidden scullery & pantry rooms']
  },
  {
    id: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    category: 'Interiors',
    description: 'Spa-inspired sanctuaries clad in honed quartz, micro-cement, walk-in rain showers, freestanding cast bathware, and integrated steam rooms.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    iconName: 'Bath',
    features: ['Custom micro-cement & marble finishes', 'Thermostatic multi-jet rain showers', 'Integrated steam & sauna suites', 'Underfloor radiant stone heating']
  },
  {
    id: 'loft-conversions',
    title: 'Loft Conversions',
    category: 'Conversion',
    description: 'Architectural dormers, glass skylight galleries, and penthouse-level primary suites crafted inside historic and contemporary roofscapes.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    iconName: 'Layers',
    features: ['Structural roof truss alterations', 'Full-height structural dormer windows', 'Custom walk-in dressing rooms', 'Acoustic soundproofing barriers']
  },
  {
    id: 'property-development',
    title: 'Property Development',
    category: 'Development',
    description: 'Prime site acquisition, master planning, multi-unit luxury residential schemes, and boutique estate developments across Scotland.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Building2',
    features: ['Site feasibility & zoning navigation', 'Capital expenditure & yield optimization', 'Multi-unit luxury residential schemes', 'Complete estate infrastructure']
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    category: 'Commercial',
    description: 'High-end hospitality venues, boutique hotels, flagship retail showrooms, and corporate headquarter fit-outs delivered to exact specification.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
    iconName: 'Briefcase',
    features: ['Bespoke hospitality fit-outs', 'Acoustic & HVAC environmental control', 'Precision steel frame commercial structures', 'BREEAM Excellent compliance']
  },
  {
    id: 'architecture-planning',
    title: 'Architecture & Planning',
    category: 'Design',
    description: 'Full architectural concept design, 3D photorealistic BIM modeling, planning permission acquisition, and building warrant management.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Compass',
    features: ['Full 3D photorealistic BIM rendering', 'Scottish Planning Authority consent', 'Listed building consent expertise', 'Structural engineer sign-offs']
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    category: 'Design',
    description: 'Curated interior curation blending modern minimalism with timeless materials, custom furniture design, textiles, and art procurement.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    iconName: 'Palette',
    features: ['Bespoke furniture & lighting design', 'Material & textile curation', 'Art procurement & spatial styling', 'Turnkey installation management']
  },
  {
    id: 'project-management',
    title: 'Project Management',
    category: 'Management',
    description: 'End-to-end client representation, transparent cost management, strict timeline control, and white-glove site supervisory services.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    iconName: 'CheckSquare',
    features: ['Real-time digital client portal', 'Fixed-price contract transparent accounting', 'Dedicated senior site project director', 'Rigorous quality assurance auditing']
  }
];

export const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Consultation & Vision',
    subtitle: 'Discovering Your Blueprint',
    description: 'We meet in person at your site or our Edinburgh studio to discuss your architectural vision, budget parameters, design aesthetic, and project objectives.',
    details: ['Initial site appraisal & feasibility review', 'Design wish-list & spatial analysis', 'Preliminary budget range evaluation']
  },
  {
    step: '02',
    title: 'Planning & Architecture',
    subtitle: 'Navigating Permissions & Engineering',
    description: 'Our architects develop comprehensive 3D schematics, BIM models, and submit planning permissions to local Scottish councils while securing structural warrants.',
    details: ['Photorealistic 3D virtual walkthroughs', 'Planning Permission & Listed Consent submission', 'Full structural & environmental engineering']
  },
  {
    step: '03',
    title: 'Bespoke Design Curation',
    subtitle: 'Refining Every Detail',
    description: 'We finalize material selections—from Italian marble to Scottish stone, custom cabinetry, smart home systems, glazing systems, and interior finishes.',
    details: ['Material sample presentation', 'Lighting schematics & home automation design', 'Fixed-price transparent contract locking']
  },
  {
    step: '04',
    title: 'Precision Construction',
    subtitle: 'Craftsmanship In Motion',
    description: 'Groundwork, steel framing, timber erection, and master craftsmanship commence under the supervision of your dedicated Project Director with live portal updates.',
    details: ['Dedicated daily site supervision', 'Bi-weekly video progress reports', 'Rigorous ISO-standard quality checks']
  },
  {
    step: '05',
    title: 'Handover & Guarantee',
    subtitle: 'Welcome To Perfection',
    description: 'White-glove deep cleaning, full commissioning of smart home systems, white-glove key handover, and an industry-leading 10-year structural guarantee.',
    details: ['Full smart home system commissioning', '10-Year structural insurance guarantee', 'Post-occupancy 12-month care concierge']
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Sir Alexander & Lady Campbell',
    role: 'Private Estate Owner',
    location: 'St Andrews, Fife',
    project: 'The St. Andrews Cliffside Estate',
    rating: 5,
    quote: 'Let’s Fix It Scotland executed our cliffside modern masterpiece with mathematical precision. Their ability to fuse raw Scottish sandstone with frameless structural glass exceeded every expectation.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Dr. Alistair & Fiona Ramsay',
    role: 'Heritage Property Investors',
    location: 'New Town, Edinburgh',
    project: 'Georgian Glass Pavilion',
    rating: 5,
    quote: 'Working within a Category-A listed building in Edinburgh requires immense expertise. The team navigated complex planning laws while constructing a breathtaking glass pavilion that leaves guests speechless.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Marcus Sterling',
    role: 'Property Developer & Entrepreneur',
    location: 'Loch Lomond',
    project: 'Eco Timber Manor',
    rating: 5,
    quote: 'Their project management is Apple-level refined. Clear milestone tracking, fixed transparent pricing, and craft quality that sets a new benchmark for Scottish luxury construction.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80'
  }
];

export const STATS_DATA = [
  { value: 250, suffix: '+', label: 'Completed Projects', subtext: 'Delivered across Scotland' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', subtext: 'Based on 150+ verified reviews' },
  { value: 20, suffix: '+', label: 'Years Experience', subtext: 'Pioneering luxury construction' },
  { value: 120, prefix: '£', suffix: 'M+', label: 'Project Value', subtext: 'In completed luxury developments' }
];

export const DEVELOPMENTS_DATA = [
  {
    id: 'highland-pines-estates',
    title: 'The Highland Pines Estates',
    location: 'Aviemore, Cairngorms National Park',
    type: 'Exclusive Gated Community of 6 Eco-Manors',
    startingPrice: 'From £2.4M',
    completion: 'Q4 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: 'Selling Fast'
  },
  {
    id: 'tay-estuary-residences',
    title: 'Tay Estuary Waterfront Residences',
    location: 'Broughty Ferry, Dundee',
    type: '12 Ultra-Modern Glass Waterfront Villas',
    startingPrice: 'From £1.8M',
    completion: 'Q2 2026',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    status: 'Now Launching'
  },
  {
    id: 'royal-mile-penthouses',
    title: 'The Royal Mile Heritage Penthouses',
    location: 'Old Town, Edinburgh',
    type: 'Restored Historic Landmark & Glass Rooftops',
    startingPrice: 'From £3.1M',
    completion: 'Q1 2027',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    status: 'Pre-Plan Inquiries'
  }
];
