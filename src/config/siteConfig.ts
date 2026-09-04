export const siteConfig = {
  businessName: "Miller Glazing Ltd",
  legalBusinessName: "Miller Glazing Ltd",
  tagline: "Premium Glazing Solutions",
  primaryCategory: "Glass & Glazing Contractor",
  secondaryCategories: ["Window Installation Service", "Conservatory Installers"],
  phone: "01234 567 890",
  whatsapp: "01234567890",
  email: "info@millerglazing.co.uk",
  website: "https://miller-glazing.vercel.app",
  streetAddress: "49 Hedingham Road",
  city: "Dagenham",
  state: "Essex",
  postalCode: "RM8 2NA",
  country: "UK",
  latitude: 51.564,
  longitude: 0.134,
  openingHours: [
    { day: "Monday", open: "08:00", close: "17:00" },
    { day: "Tuesday", open: "08:00", close: "17:00" },
    { day: "Wednesday", open: "08:00", close: "17:00" },
    { day: "Thursday", open: "08:00", close: "17:00" },
    { day: "Friday", open: "08:00", close: "17:00" },
    { day: "Saturday", open: "09:00", close: "13:00" },
    { day: "Sunday", open: "Closed", close: "Closed" }
  ],
  serviceAreas: [
    { name: "[CITY]", slug: "city" },
    { name: "[SUBURB]", slug: "suburb" },
    { name: "[TOWN]", slug: "town" }
  ],
  logo: "/logo.png",
  favicon: "/favicon.ico",
  heroImage: "/images/hero-placeholder.svg",
  aboutImage: "/images/about-placeholder.svg",
  socialProfiles: [
    { platform: "facebook", url: "https://facebook.com/PROFILE" },
    { platform: "instagram", url: "https://instagram.com/PROFILE" },
    { platform: "linkedin", url: "https://linkedin.com/company/PROFILE" },
    // To add more, simply add new objects here: { platform: "youtube", url: "..." }, { platform: "twitter", url: "..." }
  ],
  reviews: {
    // If you leave this empty (""), the entire Testimonial section and Google Badges will be hidden.
    googleBusinessProfileUrl: "https://g.page/GBP_LINK",
    aggregateRating: "4.9",
    totalReviews: "124",
    // Paste your Elfsight, Trustindex, or GHL Review Widget code here.
    reviewWidgetEmbedCode: `<!-- Paste your Google Reviews Widget Embed Code Here -->`
  },
  trustBadges: [
    // Add paths to any trust badges here. They will appear in the footer/homepage.
    // { name: "GGF Member", image: "/images/badges/ggf.png" },
    // { name: "FENSA Registered", image: "/images/badges/fensa.png" }
  ] as Array<{name: string, image: string}>,
  companyRegistrationNumber: "12345678",
  yearEstablished: 2000,
  founder: "[FOUNDER NAME]",
  description: "Elite architectural glass installation and replacement solutions for commercial properties across London. Structural glazing and high-quality workmanship.",
  emergencyService: true,
  certifications: ["[CERTIFICATION 1]", "[CERTIFICATION 2]"],
  brands: ["[BRAND 1]", "[BRAND 2]"],
  services: [
    {
      id: "glass-replacement",
      name: "Glass Replacement",
      slug: "glass-replacement",
      shortDescription: "Fast, reliable glass replacement for broken or damaged windows and doors.",
      longDescription: "We provide professional glass replacement services for all types of residential and commercial properties. Whether you have a broken window, a shattered glass door, or need upgraded glass for better energy efficiency, our experts ensure a safe and perfect fit.",
      image: "/images/service-placeholder.svg",
      applications: ["Residential windows", "Commercial shopfronts", "Glass doors"],
    },
    {
      id: "commercial-glazing",
      name: "Commercial Glazing",
      slug: "commercial-glazing",
      shortDescription: "Premium commercial glazing solutions including shopfronts, office partitions, and curtain walling.",
      longDescription: "Our commercial glazing services cover a wide range of applications from modern office glass partitions to high-street shopfronts. We focus on safety, security, and architectural aesthetics.",
      image: "/images/commercial-glazing-placeholder.svg",
      applications: ["Shopfronts", "Office partitions", "Curtain walls"],
    },
    {
      id: "residential-glazing",
      name: "Residential Glazing",
      slug: "residential-glazing",
      shortDescription: "Custom residential glass services including mirrors, shower enclosures, and window upgrades.",
      longDescription: "Enhance your home with our residential glazing solutions. We supply and install bespoke mirrors, frameless shower enclosures, glass balustrades, and energy-efficient double glazing.",
      image: "/images/residential-glazing-placeholder.svg",
      applications: ["Shower enclosures", "Mirrors", "Glass balustrades"],
    },
    {
      id: "emergency-glazing",
      name: "Emergency Glass Replacement",
      slug: "emergency-glazing",
      shortDescription: "Rapid response emergency glass replacement to secure your property quickly.",
      longDescription: "When glass breaks unexpectedly, security is the top priority. We offer rapid emergency glass replacement to ensure your home or business is safe and secure as quickly as possible.",
      image: "/images/emergency-glazing-placeholder.svg",
      applications: ["Broken windows", "Vandalized shopfronts", "Shattered doors"],
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "[CUSTOMER NAME]",
      text: "Excellent service. They replaced our broken shopfront glass the same day. Highly recommended.",
      date: "2023-10-15",
      service: "Commercial Glazing"
    },
    {
      id: 2,
      name: "[CUSTOMER NAME 2]",
      text: "Very professional team. The new shower enclosure looks fantastic and the installation was spotless.",
      date: "2023-11-02",
      service: "Residential Glazing"
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Commercial Shopfront Upgrade",
      type: "Commercial Glazing",
      location: "[CITY]",
      service: "commercial-glazing",
      description: "Complete removal of old framework and installation of new toughened glass shopfront.",
      image: "/images/project-1-placeholder.svg"
    },
    {
      id: "project-2",
      title: "Frameless Shower Enclosure",
      type: "Residential Glazing",
      location: "[SUBURB]",
      service: "residential-glazing",
      description: "Custom cut and installed frameless glass shower enclosure for a master bathroom.",
      image: "/images/project-2-placeholder.svg"
    }
  ],
  faqs: [
    {
      question: "How quickly can you replace broken glass?",
      answer: "We offer an emergency response service and aim to attend urgent callouts on the same day. For standard replacements, we typically complete the job within 2-3 working days depending on the type of glass."
    },
    {
      question: "What is the difference between toughened and laminated glass?",
      answer: "Toughened glass crumbles into small granular chunks when broken, reducing the risk of injury. Laminated glass holds together when shattered because of a plastic interlayer. Both are types of safety glass."
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free, no-obligation quotes. We can often provide an estimate over the phone if you have the approximate measurements, but we will always conduct a professional site survey before finalizing the cost."
    },
    {
      question: "Do you service commercial properties?",
      answer: "Absolutely. We handle a wide range of commercial glazing projects, including office partitions, shopfronts, and commercial door repairs."
    }
  ],
  ghl: {
    enableChatWidget: true,
    chatWidgetEmbedCode: `<!-- Paste your GHL Chat Widget Code Here -->`,
    heroFormEmbedCode: `<!-- Paste your GHL Hero Form Embed Code Here -->`,
    contactFormEmbedCode: `<!-- Paste your GHL Contact Page Form Embed Code Here -->`
  }
};
