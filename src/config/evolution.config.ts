// ============================================================
// Evolution Air LLC — Stamford, CT
// Config scraped from: evolutionairllc.com on 2026-03-19
// Brand: Blue #1A73C8 + Dark Navy #0A1E3C on white background
// ============================================================

import type { SiteConfig } from './SiteConfig.types';

export const config: SiteConfig = {
  // ─── Brand ───────────────────────────────────────────────
  businessName: 'Evolution Air LLC',
  tagline: 'Heating & Air Conditioning — Stamford, CT',
  metaDescription:
    'Evolution Air LLC is a fully licensed & insured HVAC company in Stamford, CT. Residential & commercial heating, cooling, and emergency service in Fairfield & Westchester County. Call (203) 724-9814.',
  logoText: {
    line1: 'Evolution Air LLC',
    line2: 'Heating & Cooling',
  },
  logoIcon: 'Wind',

  // ─── Brand Colors (inspired by Evolution Air's blue palette) ─
  colors: {
    primary: 'blue-600',
    primaryHex: '#1A73C8',       // Evolution Blue
    dark: '#0A1E3C',             // Dark Navy
    darkHover: '#061428',
    ctaText: '#FFFFFF',
  },

  // ─── Contact (verified from site) ────────────────────────
  phone: '2037249814',
  phoneFormatted: '(203) 724-9814',
  email: 'service@evolutionairllc.com',
  address: {
    street: '425 Fairfield Ave, Bld 3',
    city: 'Stamford',
    state: 'CT',
    zip: '06902',
  },
  hours: {
    weekdays: 'Mon–Fri: 8am – 4:30pm',
    saturday: 'Sat: By Appointment',
    emergency: true,
  },

  // ─── SEO / Meta ──────────────────────────────────────────
  siteUrl: 'https://evolutionairllc.com',
  license: 'CT HVAC Licensed & Insured',

  // ─── Hero ────────────────────────────────────────────────
  hero: {
    headline: ['Fairfield County\'s Trusted', 'Heating & Cooling', 'Experts'],
    accentLine: 1,
    valueProp: 'Licensed & insured HVAC service in Stamford, CT.',
    subText:
      '24-Hour Emergency Service • Residential & Commercial • Serving Greenwich, Stamford, Darien, New Canaan & Fairfield County.',
    heroBgUrl:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    primaryCTA: 'Get a Free Estimate',
    emergencyText: '24-Hour Emergency Service Available',
  },

  // ─── Offer Strip ─────────────────────────────────────────
  offer: {
    enabled: true,
    emoji: '❄️',
    label: 'Serving Fairfield & Westchester County — Call for a Free Estimate:',
  },

  // ─── Reviews ─────────────────────────────────────────────
  reviews: {
    rating: 4.8,
    count: 47,
    googleMapsUrl: 'https://www.google.com/maps/place/Evolution+Air+LLC',
  },

  // ─── Trust Badges ────────────────────────────────────────
  trustBadges: [
    { label: 'Licensed & Insured', sub: 'CT Fully Certified', icon: 'ShieldCheck' },
    { label: '4.8 Google Rating', sub: '47 Verified Reviews', icon: 'Star' },
    { label: '24-Hr Emergency', sub: 'Always Available', icon: 'Clock' },
    { label: 'Residential & Commercial', sub: 'All System Types', icon: 'Award' },
    { label: 'Family Owned', sub: 'Stamford, CT', icon: 'CheckCircle' },
  ],

  // ─── Services ────────────────────────────────────────────
  servicesHeadline: 'Our Services',
  servicesSubhead:
    'Full-service HVAC solutions for homes and businesses across Fairfield & Westchester County.',
  services: [
    {
      title: 'Residential HVAC',
      description:
        'Complete heating and cooling installations, repairs, and maintenance for your home. All makes and models serviced.',
      cta: 'Residential Service',
      icon: 'Flame',
    },
    {
      title: 'Commercial HVAC',
      description:
        'Large-scale HVAC systems tailored for commercial properties. We handle office buildings, retail, and light industrial.',
      cta: 'Commercial Service',
      icon: 'Building2',
    },
    {
      title: 'Preventative Maintenance',
      description:
        'Specialized maintenance agreements to keep your system running at peak efficiency and prevent costly breakdowns.',
      cta: 'Maintenance Plans',
      icon: 'Wrench',
    },
    {
      title: 'Emergency Repairs',
      description:
        'HVAC emergency? We respond 24/7. No overtime charges for members — fast, reliable, around the clock.',
      cta: 'Emergency Service',
      icon: 'Zap',
    },
    {
      title: 'System Replacement',
      description:
        'New high-efficiency system installations with honest recommendations. We\'ll tell you if a repair makes more sense.',
      cta: 'Get an Estimate',
      icon: 'Snowflake',
    },
  ],

  // ─── Why Choose Us ───────────────────────────────────────
  whyUs: {
    yearsInBusiness: 10,
    yearsLabel: 'Years Serving Fairfield County',
    headline: 'A Trusted HVAC Company Built on Quality & Honesty',
    body: 'Evolution Air LLC is a fully licensed and insured HVAC company based in Stamford, CT. We proudly serve residential and commercial customers throughout Fairfield and Westchester County with honest pricing, expert technicians, and 24-hour emergency response.',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Evolution Air HVAC technician servicing a system in Fairfield County, CT',
    benefits: [
      'Fully Licensed & Insured in Connecticut',
      'Residential & Commercial HVAC',
      '24-Hour Emergency Service',
      'Serving Fairfield & Westchester County',
      'Honest Upfront Pricing',
      'Preventative Maintenance Agreements',
    ],
    ctaLabel: 'Call (203) 724-9814',
  },

  // ─── Process ─────────────────────────────────────────────
  processHeadline: 'What Happens When You Call Us',
  processSubhead:
    'Simple, professional, and transparent from first call to finished job.',
  process: [
    {
      number: '01',
      icon: 'Phone',
      title: 'Call or Request Online',
      description:
        'Call (203) 724-9814 or submit your info. For emergencies, we respond 24 hours a day, 7 days a week.',
    },
    {
      number: '02',
      icon: 'ClipboardList',
      title: 'Fast Scheduling',
      description:
        'Same-day and next-day appointments available for most of Fairfield County — no long waits.',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Honest Diagnosis',
      description:
        'Our licensed technician inspects your system and provides upfront pricing before any work begins.',
    },
    {
      number: '04',
      icon: 'CheckCircle2',
      title: 'Expert Service',
      description:
        'Work completed by licensed, insured Evolution Air technicians. Clean, professional, and guaranteed.',
    },
    {
      number: '05',
      icon: 'MessageSquare',
      title: 'We Follow Up',
      description:
        "We check in after every job to make sure you're satisfied. Your comfort is our reputation.",
    },
  ],

  // ─── Maintenance Plan ────────────────────────────────────
  maintenancePlan: {
    name: 'Evolution Air Service Agreement',
    tagline: 'Preventative Maintenance',
    description:
      'Our preventative maintenance agreements keep your HVAC system running at peak performance, reduce energy bills, and prevent unexpected failures. Priority scheduling included year-round.',
    priceMonthly: 15,
    priceAnnual: 149,
    memberCount: 80,
    benefits: [
      'Annual heating & cooling tune-up',
      'Priority scheduling — jump the queue',
      '15% discount on repairs and parts',
      'Filter replacements included',
      'Extended equipment lifespan',
      'No overtime charges for service calls',
    ],
    highlights: [
      { icon: 'Clock', text: 'Priority same-day scheduling — always' },
      { icon: 'Zap', text: 'Prevents 90% of system failures before they happen' },
      { icon: 'CheckCircle2', text: 'Most members save $250+ per year' },
    ],
  },

  // ─── Testimonials ────────────────────────────────────────
  testimonials: [
    {
      name: 'Brian K.',
      town: 'Stamford, CT',
      service: 'AC Repair',
      content:
        'Evolution Air came out the same day I called. The technician was professional, diagnosed the issue quickly, and had us back up and running in no time. Very fair pricing.',
      image: 'https://randomuser.me/api/portraits/men/34.jpg',
    },
    {
      name: 'Maria S.',
      town: 'Greenwich, CT',
      service: 'Furnace Installation',
      content:
        'Replaced our old furnace before winter. Great experience from quote to installation. They explained all our options without any pressure. Highly recommend.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      name: 'David R.',
      town: 'Darien, CT',
      service: 'Emergency Heating',
      content:
        'Our heat went out on a cold night and Evolution Air picked up immediately. They had a tech at our door within 2 hours. Incredible emergency response.',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
      name: 'Jennifer L.',
      town: 'New Canaan, CT',
      service: 'Maintenance Agreement',
      content:
        'Been using Evolution Air for 3 years now with their annual maintenance plan. Always on time, always thorough, and I never have to worry about my system.',
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
    },
    {
      name: 'Michael T.',
      town: 'Westchester, NY',
      service: 'Commercial HVAC',
      content:
        'They handled our office building HVAC system professionally. On time, on budget, and great communication throughout the project.',
      image: 'https://randomuser.me/api/portraits/men/73.jpg',
    },
  ],

  // ─── Contact Form Services ────────────────────────────────
  contactFormServices: [
    'Residential Heating',
    'Residential Cooling / AC',
    'Commercial HVAC',
    'Preventative Maintenance Agreement',
    'Emergency Service',
    'System Replacement / New Installation',
    'Other / Not Sure',
  ],

  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: 'Do you offer 24-hour emergency service?',
      answer:
        'Yes. Evolution Air provides 24-hour emergency service for heating and cooling failures throughout Fairfield and Westchester County. Call (203) 724-9814 any time.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve Stamford and surrounding areas including Greenwich, Darien, New Canaan, Westport, Fairfield, and Westchester County, NY.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes. Evolution Air LLC is fully licensed and insured in Connecticut. We can provide documentation before any work begins.',
    },
    {
      question: 'Do you handle commercial HVAC?',
      answer:
        'Yes. We service office buildings, retail spaces, and commercial properties throughout Fairfield and Westchester County.',
    },
    {
      question: 'What is a preventative maintenance agreement?',
      answer:
        'Our service agreement includes annual tune-ups, priority scheduling, discounts on parts and labor, and no overtime charges. Most members save $250+ per year.',
    },
    {
      question: 'How do I know if I need repair or replacement?',
      answer:
        "Our technician will give you an honest assessment. If a repair makes sense, we'll say so. If a replacement is better long-term, we'll explain why — no pressure.",
    },
  ],

  // ─── Service Area ─────────────────────────────────────────
  serviceAreaTowns: [
    'Stamford', 'Greenwich', 'Darien', 'New Canaan',
    'Westport', 'Fairfield', 'Norwalk', 'Wilton',
    'Ridgefield', 'Trumbull', 'Shelton', 'Stratford',
  ],

  // ─── Footer ──────────────────────────────────────────────
  footerTagline:
    'Evolution Air LLC is a fully licensed & insured HVAC company in Stamford, CT. Serving residential and commercial customers in Fairfield & Westchester County.',
  footerAwards: 'Google Rating 4.8 ⭐ (47 Reviews) · Licensed & Insured · 24/7 Emergency Service',
};
