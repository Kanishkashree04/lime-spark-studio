export interface WebsiteContent {
  companyInfo: {
    name: string;
    tagline: string;
    description: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    foundedDate?: string;
  };
  whatWeDo: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    category: 'technical' | 'functional';
  }>;
  coreFocusAreas: Array<{
    id: string;
    text: string;
  }>;
  stats: Array<{
    id: string;
    number: string;
    label: string;
  }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  about: {
    header: {
      title: string;
      subtitle: string;
      foundedDate: string;
    };
    vision: {
      title: string;
      content: string;
    };
    mission: {
      title: string;
      intro: string;
      points: string[];
      conclusion: string;
    };
    focusAreas: Array<{
      id: string;
      icon: string;
      title: string;
      description: string;
    }>;
    location: {
      title: string;
      description: string;
    };
  };
  contact: {
    header: {
      title: string;
      subtitle: string;
    };
    contactInfo: Array<{
      id: string;
      icon: string;
      title: string;
      content: string;
      link: string | null;
    }>;
    form: {
      title: string;
      submitButton: string;
    };
  };
  products?: Array<{
    id: string;
    name: string;
    subtitle: string;
    description: string;
    category: string;
    price?: string;
    icon?: string;
    keyHighlights?: string[];
    technicalStack?: string;
    status: 'active' | 'inactive' | 'draft';
    dateAdded: string;
    dateUpdated?: string;
  }>;
  services: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  technicalServices: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    category: 'technical';
    features?: string[];
    technologies?: string[];
  }>;
  functionalServices: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    category: 'functional';
    modules?: string[];
    businessArea: 'sales' | 'finance' | 'material' | 'other';
  }>;
  team: Array<{
    id: string;
    name: string;
    position: string;
    bio: string;
    image: string;
  }>;
  announcements: Array<{
    id: string;
    title: string;
    content: string;
    date: string;
    active: boolean;
  }>;
  lastUpdated: string;
}

// Fallback content in case API is unavailable
const fallbackContent: WebsiteContent = {
  companyInfo: {
    name: "Slash Labs",
    tagline: "Empowering businesses through innovative SAP solutions and cutting-edge open-source development",
    description: "Based in Sivakasi, Tamil Nadu. Founded on January 16, 2024",
    contact: {
      email: "contact@slashlabs.com",
      phone: "+91-9876543210",
      address: "Sivakasi, Tamil Nadu, India"
    }
  },
  hero: {
    title: "Welcome to Slash Labs",
    subtitle: "Empowering businesses through innovative SAP solutions and cutting-edge open-source development. Based in Sivakasi, Tamil Nadu.",
    foundedDate: "Founded on January 16, 2024",
    backgroundImage: "/images/hero-bg.jpg"
  },
  whatWeDo: [
    {
      id: "1",
      icon: "Database",
      title: "SAP Technical Consulting",
      description: "Enterprise-grade SAP ABAP development, system integration, performance optimization, and S/4HANA readiness assessments",
      category: "technical"
    },
    {
      id: "2",
      icon: "Code2",
      title: "Open Source Development",
      description: "Scalable web and mobile applications using modern frameworks like React, Node.js, Angular, and PostgreSQL",
      category: "technical"
    },
    {
      id: "3",
      icon: "TrendingUp",
      title: "Sales and Distribution",
      description: "Complete SAP SD module implementation including order processing, pricing, delivery management, and billing processes",
      category: "functional"
    },
    {
      id: "4",
      icon: "Target",
      title: "Finance and Control",
      description: "SAP FI/CO module expertise covering financial accounting, controlling, asset management, and management reporting",
      category: "functional"
    },
    {
      id: "5",
      icon: "Users",
      title: "Material Management",
      description: "SAP MM module solutions for procurement, inventory management, vendor management, and purchase-to-pay processes",
      category: "functional"
    }
  ],
  coreFocusAreas: [
    { id: "1", text: "Building scalable web and mobile applications" },
    { id: "2", text: "Enterprise-grade SAP development and integration" },
    { id: "3", text: "Innovation, collaboration, and continuous learning" },
    { id: "4", text: "End-to-end project delivery with quality assurance" },
    { id: "5", text: "Supporting digital transformation journeys" },
    { id: "6", text: "Nurturing rural tech talent for global impact" }
  ],
  stats: [
    { id: "1", number: "4", label: "Major Open Source Projects" },
    { id: "2", number: "7+", label: "Strategic Partners & Clients" },
    { id: "3", number: "2024", label: "Established & Growing" }
  ],
  cta: {
    title: "Ready to Transform Your Business?",
    description: "Let's discuss how Slash Labs can elevate your SAP landscape or build your next digital solution",
    buttonText: "Contact Us Today"
  },
  about: {
    header: {
      title: "About Slash Labs",
      subtitle: "A professional technology solutions company based in Sivakasi, Tamil Nadu, committed to delivering innovative, reliable, and scalable digital solutions.",
      foundedDate: "Founded on January 16, 2024"
    },
    vision: {
      title: "Our Vision",
      content: "To bring rural tech talents to the global technology stage, empowering them to create impactful solutions while delivering innovative SAP and open-source solutions that drive operational efficiency, seamless digital integration, and measurable business value worldwide."
    },
    mission: {
      title: "Our Mission",
      intro: "To harness deep technical expertise and creative problem-solving to deliver high-performance IT solutions, including:",
      points: [
        "Scalable web and mobile applications using open-source frameworks",
        "Custom SAP ABAP development and seamless system integration",
        "Performance optimization and S/4HANA readiness",
        "End-to-end project delivery with strong quality assurance"
      ],
      conclusion: "We are committed to nurturing rural tech talent, fostering innovation, and enabling organizations to achieve sustainable growth, digital coherence, and transformative business outcomes."
    },
    focusAreas: [
      {
        id: "1",
        icon: "Lightbulb",
        title: "Innovation & Collaboration",
        description: "Encouraging innovation, collaboration, and continuous learning in everything we do"
      },
      {
        id: "2",
        icon: "Award",
        title: "Quality Assurance",
        description: "End-to-end project delivery with strong quality assurance and attention to detail"
      }
    ],
    location: {
      title: "Proudly Based in Sivakasi, Tamil Nadu",
      description: "We combine deep local expertise with a global perspective on technical best practices, serving as the technical backbone for businesses worldwide."
    }
  },
  contact: {
    header: {
      title: "Contact Slash Labs",
      subtitle: "Let's discuss how we can elevate your SAP landscape or build your next digital solution. Reach out to our consulting team."
    },
    contactInfo: [
      {
        id: "1",
        icon: "Mail",
        title: "Email",
        content: "contact@slashlabs.in",
        link: "mailto:contact@slashlabs.in"
      },
      {
        id: "2",
        icon: "Globe",
        title: "Website",
        content: "www.slashlabs.com",
        link: "https://www.slashlabs.com"
      },
      {
        id: "3",
        icon: "MapPin",
        title: "Location",
        content: "Sivakasi, Tamil Nadu, India",
        link: null
      }
    ],
    form: {
      title: "Send Us a Message",
      submitButton: "Send Message"
    }
  },
  products: [
    {
      id: "1",
      name: "AutoX",
      subtitle: "Car Service & Workshop Management Platform",
      description: "Comprehensive car service and workshop management system designed to help service centers manage bookings, inventory, and payments efficiently.",
      category: "Management System",
      price: "Contact for pricing",
      icon: "🚗",
      keyHighlights: [
        "Vehicle registration and service tracking",
        "Real-time analytics and revenue reports",
        "Diagnostic reports and pricing management",
        "Payment integration and notifications"
      ],
      technicalStack: "Node.js, Express.js, React.js, PostgreSQL, AWS S3, Firebase",
      status: "active",
      dateAdded: "2024-01-16"
    }
  ],
  services: [
    {
      id: "1",
      title: "SAP Technical Consulting",
      description: "Enterprise SAP solutions and development",
      image: "/images/service1.jpg"
    },
    {
      id: "2",
      title: "Open Source Development",
      description: "Modern web and mobile applications",
      image: "/images/service2.jpg"
    }
  ],
  technicalServices: [
    {
      id: "tech-1",
      title: "SAP ABAP Development",
      description: "Custom ABAP programming, reports, interfaces, conversions, enhancements, and forms development",
      image: "/images/sap-abap.jpg",
      category: "technical",
      features: ["Custom Reports", "Data Migration", "Interface Development", "Performance Optimization"],
      technologies: ["ABAP", "SAP HANA", "ODATA", "CDS Views"]
    },
    {
      id: "tech-2",
      title: "System Integration",
      description: "Seamless integration between SAP and third-party systems using APIs, middleware, and data exchange protocols",
      image: "/images/integration.jpg",
      category: "technical",
      features: ["API Development", "Middleware Solutions", "Real-time Data Sync", "Error Handling"],
      technologies: ["REST API", "SOAP", "PI/PO", "Cloud Platform Integration"]
    },
    {
      id: "tech-3",
      title: "S/4HANA Migration",
      description: "Complete migration services from SAP ECC to S/4HANA including code adaptation and system optimization",
      image: "/images/s4hana.jpg",
      category: "technical",
      features: ["Code Adaptation", "Data Migration", "Testing Support", "Go-live Support"],
      technologies: ["S/4HANA", "SAP HANA DB", "Fiori", "CDS"]
    }
  ],
  functionalServices: [
    {
      id: "func-1",
      title: "SAP Sales & Distribution (SD)",
      description: "Complete SD module implementation including order management, pricing, delivery, and billing processes",
      image: "/images/sap-sd.jpg",
      category: "functional",
      modules: ["Sales Order Processing", "Pricing Configuration", "Delivery Management", "Billing & Invoicing"],
      businessArea: "sales"
    },
    {
      id: "func-2",
      title: "SAP Finance & Controlling (FICO)",
      description: "Financial accounting and controlling module expertise covering GL, AP, AR, asset management, and cost center accounting",
      image: "/images/sap-fico.jpg",
      category: "functional",
      modules: ["Financial Accounting", "Controlling", "Asset Management", "Cost Center Accounting"],
      businessArea: "finance"
    },
    {
      id: "func-3",
      title: "SAP Material Management (MM)",
      description: "Procurement and inventory management solutions including purchase requisitions, PO processing, and goods receipt",
      image: "/images/sap-mm.jpg",
      category: "functional",
      modules: ["Procurement", "Inventory Management", "Vendor Management", "Purchase-to-Pay"],
      businessArea: "material"
    },
    {
      id: "func-4",
      title: "Business Process Optimization",
      description: "Analysis and optimization of existing business processes to improve efficiency and reduce operational costs",
      image: "/images/process-optimization.jpg",
      category: "functional",
      modules: ["Process Analysis", "Workflow Design", "Automation", "KPI Monitoring"],
      businessArea: "other"
    }
  ],
  team: [
    {
      id: "1",
      name: "Team Member 1",
      position: "Position",
      bio: "Bio here",
      image: "/images/team1.jpg"
    }
  ],
  announcements: [
    {
      id: "1",
      title: "Welcome to our new website!",
      content: "We're excited to launch our new website.",
      date: "2024-10-15",
      active: true
    }
  ],
  lastUpdated: new Date().toISOString()
};

class ContentApiService {
  private readonly API_BASE_URL = 'http://localhost:8081/api';

  async getContent(): Promise<WebsiteContent> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/content`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Failed to load content from API, using fallback content:', error);
      return fallbackContent;
    }
  }

  async getActiveProducts(): Promise<WebsiteContent['products']> {
    try {
      const content = await this.getContent();
      return content.products?.filter(product => product.status === 'active') || [];
    } catch (error) {
      console.warn('Failed to load products:', error);
      return fallbackContent.products?.filter(product => product.status === 'active') || [];
    }
  }

  async getActiveAnnouncements() {
    try {
      const content = await this.getContent();
      return content.announcements.filter(announcement => announcement.active);
    } catch (error) {
      console.warn('Failed to load announcements:', error);
      return fallbackContent.announcements.filter(announcement => announcement.active);
    }
  }
}

export const contentApi = new ContentApiService();