/**
 * STELLAR INTERIOR DESIGNS - CLIENT CONFIGURATION FILE
 * Customize this file to personalize the website for a new client.
 * You do NOT need to edit index.html, CSS, or JS rendering files.
 */
window.SITE_CONFIG = {
  // 1. Theme Configuration (Colors & Typography)
  theme: {
    primaryColor: "#f5f2eb",      // Main background and card base colors
    secondaryColor: "#2a2421",    // Font color and secondary accents
    accentColor: "#9c7443",       // Rich gold accent for links, icons, active status
    backgroundColor: "#f5f2eb",   // Global page background
    textColor: "#2a2421",         // Body text color
    headingFont: "'Cormorant Garamond', serif",
    bodyFont: "'Outfit', sans-serif",
    borderRadius: "8px",          // Corner roundness of cards and images
    buttonStyle: "filled",        // Button styles: "filled", "outline", "underline"
    cardStyle: "glassmorphism"    // Card design styles: "plain", "border", "glassmorphism"
  },
  
  // 2. Section visibility toggles (Set to true to show, false to hide)
  sections: {
    hero: true,
    about: true,
    statistics: true,
    services: true,
    portfolio: true,
    team: true,
    testimonials: true,
    faq: true,
    contact: true,
    footer: true
  },
  
  // 3. Brand details
  brand: {
    companyName: "Stellar Interior Designs",
    tagline: "Modern Luxury & Architectural Detail",
    logo: "./assets/logo.png", // Path to logo image, falls back to text if empty
    favicon: "./assets/favicon.ico"
  },
  
  // 4. Contact details & social networks
  contact: {
    phone: "+91 6263952434",
    email: "contactsitesketch@gmail.com",
    address: "this is the sample business adresss",
    whatsapp: "https://wa.me/916263952434",
    instagram: "https://instagram.com/sitesketch.ai",
    facebook: "{{FACEBOOK}}",
    linkedin: "{{LINKEDIN}}",
    googleMap: "https://www.google.com/maps/search/?api=1&query=California"
  },

  // 5. Calls to Action links
  ctas: {
    primaryCta: "Contact Us",
    secondaryCta: "",            // Leave empty to hide secondary button
    bookingLink: "#contact"
  },
  
  // 6. Hero section slideshow and titles
  hero: {
    images: [
      "./assets/hero.jpg",
      "./assets/hero2.jpg",
      "./assets/hero3.jpg"
    ],
    title: "Stellar Interior Designs",
    subtitle: "We Shape the Essence of Modern Living"
  },
  
  // 7. About section (Video/Image + Narrative description)
  about: {
    image: "./assets/about2vid.mp4", // Path to video (.mp4) or image file (.jpg/.png)
    title: "Where Vision Meets Elegant Design",
    description: "From contemporary residences to sophisticated commercial spaces, we transform ideas into beautifully curated interiors. Every project is designed with precision, premium materials, and a commitment to creating spaces that are both visually stunning and effortlessly functional."
  },
  
  // 8. Business performance metrics
  statistics: {
    yearsExperience: "10",
    projectsCompleted: "50+ completed",
    clientsServed: "90+",
    awards: "18"
  },
  
  // 9. Services catalog (Grid elements)
  services: [
    { icon: "✨", title: "Interior Architecture", description: "Bespoke high-end spatial curation tailored exclusively to align with your personal vision and aesthetic values." },
    { icon: "🏛️", title: "Spatial Planning", description: "Comprehensive structural layout coordination, blueprint design, and site design blueprints mapped from sketch to structure." },
    { icon: "🏺", title: "Material Selection", description: "Exquisite selections of refined furniture textures, artisanal materials, lighting fixtures, and custom draperies." },
    { icon: "🪴", title: "Biophilic Design", description: "Curating botanical features, courtyards, and integrated natural elements to blur lines between inside and outside." },
    { icon: "📐", title: "Art & Styling Curation", description: "Strategic styling updates, art curation, and decorative element placement to elevate existing living structures." },
    { icon: "🛡️", title: "Project Supervision", description: "End-to-end site supervisor oversight, contractor synchronization, and schedule compliance to ensure timely handoffs." }
  ],
  
  // 10. Project slideshow cards
  projects: [
    {
      image: "./assets/project2.jpg",
      title: "Modular Kitchen Project",
      category: "Luxury Kitchen",
      description: "A highly functional modular kitchen using premium hardware, integrated appliances, and elegant cabinet finishes."
    },
    {
      image: "./assets/drawingroom.png",
      title: "Aesthetic Drawing Room",
      category: "Residential",
      description: "A serene, light-filled drawing room utilizing premium organic linen textiles, and hidden diffuse lighting profiles."
    },
    {
      image: "./assets/diningroom.png",
      title: "Elegant Dining Hall Project",
      category: "Dining Suite",
      description: "An elegant dining hall featuring a custom stone table, bespoke seating, and custom warm lighting design."
    }
  ],
  
  // 11. Client testimonials cards
  testimonials: [
    {
      name: "Sarah Jenkins",
      role: "Miami Homeowner",
      photo: "{{CLIENT_PHOTO_1}}",
      review: "Stellar Interior Designs completely re-imagined our living space. Their capacity to blend natural light with high-end materials exceeded our highest expectations."
    },
    {
      name: "Marcus Sterling",
      role: "Developer, Sterling Group",
      photo: "{{CLIENT_PHOTO_2}}",
      review: "Their design execution is outstanding. A dedicated, creative team that values schedule compliance and architectural detailing."
    }
  ],

  // 12. Link to Google Business reviews or general reviews directory
  testimonialsLink: "https://www.google.com/maps/search/?api=1&query=Vidhana+Soudha+Bangalore",
  
  // 13. Team catalog
  team: [
    {
      image: "./assets/about.jpg",
      name: "Allen John",
      role: "Principal Designer & Founder"
    }
  ],

  // 14. Frequently Asked Questions
  faqs: [
    { question: "What is your typical project timeline?", answer: "Residential space projects generally take between 8 to 16 weeks depending on scale, custom fabrication details, and material logistics. We provide detailed timelines prior to start." },
    { question: "Do you offer layout consultations before signing?", answer: "Yes, we conduct initial diagnostic walkthroughs to align design preferences and establish preliminary spatial budgets before formalizing a layout contract." },
    { question: "Can you collaborate with our builders/contractors?", answer: "Absolutely. We routinely synchronize details directly with construction managers and site engineers to ensure plan fidelity and seamless execution." }
  ],
  
  // 15. Footer content
  footer: {
    copyrightText: "© 2026 Stellar Interior Designs. All rights reserved."
  }
};
