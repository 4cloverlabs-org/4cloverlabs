export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  details?: string;
  tags?: string[];
  client?: string;
  duration?: string;
  year?: string;
  industry?: string;
  liveUrl?: string;
  secondaryImages?: string[];
  subservices?: {
    title: string;
    items: string[];
  }[];
  problem?: string;
  whatWeDid?: string;
}

export const products: Product[] = [
  {
    id: "01",
    name: "EXPANTRA",
    slug: "expantra",
    image: "/business/expantra.png",
    description: "Custom websites, SaaS, AI & digital products.",
    details: "Expantra helps businesses transform ideas into scalable digital products. From high-performance websites and SaaS platforms to eCommerce solutions, AI agents, and custom software, we design, build, and launch tailored technology that drives growth.",
    client: "Expantra",
    duration: "2 Months",
    year: "2026",
    industry: "SaaS & AI Development",
    liveUrl: "https://expantra.com",
    tags: ["Web Design", "Development", "AI Integration", "SaaS"],
    secondaryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    ],
    subservices: [
      {
        title: "Digital Strategy",
        items: ["Market Positioning", "Product Architecture", "Growth Planning"]
      },
      {
        title: "Custom Development",
        items: ["High-performance Websites", "SaaS Web Apps", "eCommerce Platforms"]
      },
      {
        title: "AI & Automation",
        items: ["AI Agent Integration", "Workflow Automation", "LLM APIs Integration"]
      }
    ],
    problem: "Many businesses struggle to find a single partner capable of handling both high-performance custom development and cutting-edge artificial intelligence integrations, leading to disjointed products and delayed launches.",
    whatWeDid: "We designed a unified system that bridges custom web development and intelligent agents. By utilizing modern web stacks and seamless AI model integrations, we created scalable digital tools that deliver high performance and real business automation."
  },
  {
    id: "02",
    name: "SALEMAIL",
    slug: "salemail",
    image: "/business/salemail.png",
    description: "AI-powered cold email automation platform.",
    details: "Salemail enables businesses to automate personalized cold outreach without losing control. Create intelligent email sequences, schedule follow-ups, track engagement, and let AI optimize your campaigns—all while keeping every interaction fully customizable and managed by your team.",
    client: "Salemail",
    duration: "3 Months",
    year: "2026",
    industry: "Marketing & Sales Automation",
    liveUrl: "https://salemail.ai",
    tags: ["AI Automation", "Cold Outreach", "Email Marketing", "Lead Generation"],
    secondaryImages: [
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    ],
    subservices: [
      {
        title: "Product Strategy",
        items: ["User Experience Map", "Technical Feasibility Study", "Campaign Automation Workflows"]
      },
      {
        title: "Core Platform",
        items: ["AI Personalization Engine", "Multichannel Sequencing", "Deliverability Guardrails"]
      },
      {
        title: "Analytics & Integration",
        items: ["Bespoke API Connectors", "Real-time Engagement Dashboards", "A/B Testing Framework"]
      }
    ],
    problem: "Cold email campaigns often feel cold and robotic, leading to low response rates, or require tedious manual customization that scales poorly for high-volume sales teams.",
    whatWeDid: "We built a next-generation automation system that uses custom personalization engines to dynamically adjust body copy and follow-ups. The result is a platform that maintains high deliverability while scaling personalized messages to hundreds of leads."
  },
  {
    id: "03",
    name: "PROD3",
    slug: "prod3",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1200",
    description: "",
    details: ""
  },
  {
    id: "04",
    name: "PROD4",
    slug: "prod4",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    description: "",
    details: ""
  },
  {
    id: "05",
    name: "PROD5",
    slug: "prod5",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    description: "",
    details: ""
  },
  {
    id: "06",
    name: "PROD6",
    slug: "prod6",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    description: "",
    details: ""
  }
];
