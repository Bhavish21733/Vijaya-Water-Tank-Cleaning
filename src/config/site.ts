export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  typicalContext: string;
  enquiryChecklist: string[];
  pricingFactors: string[];
  image: string;
  imageAlt: string;
  representativeCaption: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  phone: {
    display: string;
    tel: string;
    raw: string;
    whatsapp: string;
    whatsappUrl: string;
  };
  address: {
    street: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  openingHours: {
    display: string;
    schema: string;
  };
  googleMaps: {
    listingUrl: string;
    embedUrl: string;
  };
  localFocus: {
    primary: string;
    region: string;
    note: string;
  };
  social: {
    ogImage: string;
  };
  nav: Array<{
    name: string;
    href: string;
  }>;
  services: ServiceItem[];
}

export const siteConfig: SiteConfig = {
  name: 'Vijaya Water Tank Cleaning Services',
  legalName: 'Vijaya Water Tank Cleaning Services',
  shortName: 'Vijaya',
  tagline: 'Water Tank & Sump Cleaning in Champapet',
  description: 'Professional water tank, sump, and Sintex cleaning services in Champapet. Residential, Commercial, Overhead, Underground & Industrial cleaning. Call 082477 35114.',
  siteUrl: 'https://vijayawatertankcleaning.com',
  phone: {
    display: '082477 35114',
    tel: 'tel:+918247735114',
    raw: '+918247735114',
    whatsapp: '918247735114',
    whatsappUrl: 'https://wa.me/918247735114',
  },
  address: {
    street: '1st Floor, H.No: 9, 2-99, Harujanwada',
    landmark: 'Harujanwada',
    locality: 'Champapet',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500059',
    country: 'IN',
    full: '1st Floor, H.No: 9, 2-99, Harujanwada, Champapet, Telangana 500059',
  },
  openingHours: {
    display: 'Open 24 hours',
    schema: 'Mo-Su 00:00-24:00',
  },
  googleMaps: {
    listingUrl: 'https://www.google.com/maps?cid=15895770596333593224',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15233.459056376141!2d78.49797488715821!3d17.3461723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb999bbb8be265%3A0xdc991f2351902288!2sVijaya%20Water%20Tank%20Cleaning%20Services!5e0!3m2!1sen!2sus!4v1790764695917!5m2!1sen!2sus',
  },
  localFocus: {
    primary: 'Champapet',
    region: 'Telangana (PIN 500059)',
    note: 'Based in Harujanwada, Champapet. Serving residential, commercial, and industrial facilities across Champapet and nearby areas.',
  },
  social: {
    ogImage: '/images/og-image.jpg',
  },
  nav: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about/' },
    { name: 'Services', href: '/services/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Gallery', href: '/gallery/' },
    { name: 'Contact Us', href: '/contact/' },
  ],
  services: [
    {
      id: 'residential-water-tank-cleaning',
      slug: 'residential-water-tank-cleaning',
      title: 'Residential Water Tank Cleaning',
      shortDescription: 'Complete hygiene cleaning and silt removal for independent houses, villas, and family homes.',
      fullDescription: 'Clean domestic water is crucial for cooking, bathing, and everyday health. Our residential service covers overhead tanks and ground storage for independent houses with minimal water disruption.',
      typicalContext: 'Ideal for independent houses, villas, and row houses undergoing seasonal maintenance or noticing sediment.',
      enquiryChecklist: [
        'Total number of tanks (overhead, sump, or both)',
        'Approximate tank capacity in litres',
        'Roof ladder or stairs access condition',
        'Preferred date and service time'
      ],
      pricingFactors: [
        'Number and capacity of domestic tanks',
        'Accumulated silt/mud level',
        'Physical access height and roof conditions'
      ],
      image: '/images/services/residential-tank.webp',
      imageAlt: 'Residential household water tank cleaning and maintenance in Champapet',
      representativeCaption: 'Representative service imagery: Residential home water tank maintenance.',
    },
    {
      id: 'commercial-water-tank-cleaning',
      slug: 'commercial-water-tank-cleaning',
      title: 'Commercial Water Tank Cleaning',
      shortDescription: 'Heavy-duty cleaning for offices, hospitals, hotels, shopping complexes, and educational institutions.',
      fullDescription: 'Commercial establishments require high-capacity water maintenance without disrupting business operations. We provide scheduled dewatering, thorough scrubbing, and silt extraction for large commercial tanks.',
      typicalContext: 'Tailored for commercial buildings, schools, hospitals, hotels, and business premises in Champapet.',
      enquiryChecklist: [
        'Building type and tank capacity (in kilolitres or litres)',
        'Operating hours to plan low-occupancy cleaning windows',
        'Electrical point and drainage disposal outlets',
        'Site supervisor contact details'
      ],
      pricingFactors: [
        'Total storage volume and number of compartments',
        'Access complexity and drainage distance',
        'After-hours or weekend scheduling requirements'
      ],
      image: '/images/services/commercial-tank.webp',
      imageAlt: 'Commercial building water reservoir and tank cleaning',
      representativeCaption: 'Representative service imagery: Commercial building water reservoir maintenance.',
    },
    {
      id: 'overhead-tank-cleaning',
      slug: 'overhead-tank-cleaning',
      title: 'Overhead Tank Cleaning',
      shortDescription: 'Specialized cleaning for rooftop Sintex, plastic, and concrete overhead storage units.',
      fullDescription: 'Overhead rooftop tanks accumulate dust, algae, and mineral scale due to direct sunlight and standing water. We perform complete draining, high-pressure washing or scrubbing, and debris clearance.',
      typicalContext: 'Recommended for rooftop tanks on residential and commercial buildings every 6 to 12 months.',
      enquiryChecklist: [
        'Tank material (molded plastic, Sintex, or concrete/RCC)',
        'Storage capacity (500L, 1000L, 2000L, 5000L+)',
        'Rooftop ladder and staging accessibility',
        'Drain-out pipe availability'
      ],
      pricingFactors: [
        'Tank capacity and roof height',
        'Material type and internal wall scaling',
        'Safety and ladder accessibility'
      ],
      image: '/images/services/overhead-tank.webp',
      imageAlt: 'Overhead rooftop water storage tank inspection and cleaning setup',
      representativeCaption: 'Representative service imagery: Overhead rooftop tank cleaning setup.',
    },
    {
      id: 'underground-tank-cleaning',
      slug: 'underground-tank-cleaning',
      title: 'Underground Tank Cleaning',
      shortDescription: 'Deep sludge and mud extraction for underground concrete water sumps and masonry reservoirs.',
      fullDescription: 'Underground tanks receive raw municipal and tanker supply, accumulating heavy silt, sand, and mud at the floor. Sump cleaning includes pumping out standing water, sludge extraction, and floor scrubbing.',
      typicalContext: 'Suited for properties with underground concrete reservoirs receiving tanker water or municipal supply.',
      enquiryChecklist: [
        'Approximate sump dimensions or capacity (in litres)',
        'Depth of sump and manhole opening dimensions',
        'Nearby electrical socket for dewatering pumps',
        'Discharge route for pumped muddy water'
      ],
      pricingFactors: [
        'Sump volume and depth',
        'Volume of bottom sludge and mud',
        'Distance to drainage disposal line'
      ],
      image: '/images/services/underground-tank.webp',
      imageAlt: 'Underground water storage tank cleaning and silt extraction',
      representativeCaption: 'Representative service imagery: Underground tank cleaning and silt removal.',
    },
    {
      id: 'industrial-tank-cleaning',
      slug: 'industrial-tank-cleaning',
      title: 'Industrial Tank Cleaning',
      shortDescription: 'Organized cleaning and maintenance for manufacturing units, industrial plants, and warehouses.',
      fullDescription: 'Industrial water storage systems need thorough maintenance to support production and staff utilities. We provide structured dewatering and tank washing tailored for industrial facilities.',
      typicalContext: 'For factories, warehouses, industrial units, and processing facilities requiring scheduled tank sanitation.',
      enquiryChecklist: [
        'Industrial facility location and tank capacity',
        'Water usage constraints and shutdown windows',
        'Site safety requirements and permit protocols',
        'Pumping and drainage provisions'
      ],
      pricingFactors: [
        'Industrial tank dimensions and structure',
        'Level of sediment and internal deposits',
        'Specialized access and scheduling requirements'
      ],
      image: '/images/services/industrial-tank.webp',
      imageAlt: 'Industrial water reservoir and storage system maintenance',
      representativeCaption: 'Representative service imagery: Industrial tank cleaning setup.',
    },
    {
      id: 'sump-sintex-tank-cleaning',
      slug: 'sump-sintex-tank-cleaning',
      title: 'Sump & Sintex Tank Cleaning',
      shortDescription: 'Dedicated dual-service package for combined underground sumps and plastic/Sintex rooftop units.',
      fullDescription: 'Most urban Hyderabad properties rely on both an underground sump and rooftop Sintex tanks. Our combined package ensures your entire water storage system is cleaned on the same visit for clean water flow from source to tap.',
      typicalContext: 'The most popular choice for Champapet homes with both an underground sump and rooftop plastic tanks.',
      enquiryChecklist: [
        'Number and capacity of Sintex tanks',
        'Underground sump size/capacity',
        'Timing to minimize household water outage',
        'Access to roof and sump location'
      ],
      pricingFactors: [
        'Combined storage capacity (sump + Sintex units)',
        'Overall condition and sediment volume',
        'Site layout and access convenience'
      ],
      image: '/images/services/sintex-tank.webp',
      imageAlt: 'Combined Sump and Sintex water tank cleaning service',
      representativeCaption: 'Representative service imagery: Sump & Sintex tank cleaning service.',
    },
  ],
};
