export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: "SaaS" | "E-Commerce" | "Web App" | "AI Platform";
  thumbnail: string;
  heroBanner: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
  screenshots: string[];
}

export interface TechItem {
  name: string;
  category: string;
  desc: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Zeeshan",
    role: "Full-Stack Developer & Digital Creative",
    bio: "I'm Zeeshan, a full-stack developer crafting high-performance modern websites, web applications, SaaS platforms, and e-commerce stores that combine rock-solid engineering with thoughtful design.",
    avatar: "/images/hero-portrait.jpg",
    email: "contact@zeeshan.dev",
    location: "Global / Remote",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:contact@zeeshan.dev"
    }
  },
  stats: [
    { label: "YEARS EXPERIENCE", value: "2", prefix: "", suffix: "+" },
    { label: "COMPLETED PROJECTS", value: "30", prefix: "", suffix: "+" },
    { label: "HAPPY CLIENTS", value: "10", prefix: "", suffix: "+" },
  ],
  services: [
    {
      id: "01",
      title: "FULL-STACK WEB APPS",
      description: "End-to-end web applications built with Next.js, React, Node.js, and PostgreSQL. Architected for speed, security, and effortless scaling.",
      tags: ["Next.js 14", "React", "Node.js", "PostgreSQL"]
    },
    {
      id: "02",
      title: "SAAS PLATFORM DEVELOPMENT",
      description: "Custom multi-tenant SaaS products complete with subscription billing, authentication, role-based controls, and analytical dashboards.",
      tags: ["SaaS Architecture", "Stripe", "Prisma", "TypeScript"]
    },
    {
      id: "03",
      title: "CUSTOM E-COMMERCE STORES",
      description: "High-converting online stores engineered for blazing fast load times, seamless checkout flows, and custom admin workflows.",
      tags: ["Shopify Headless", "Next.js", "Tailwind CSS", "REST API"]
    },
    {
      id: "04",
      title: "UI/UX & FRONTEND CREATIVE",
      description: "Interactive visual interfaces with GSAP animations, Framer Motion transitions, and pixel-perfect responsive designs.",
      tags: ["GSAP", "Framer Motion", "Tailwind CSS", "Responsive UI"]
    }
  ],
  techStack: [
    { name: "NEXT.JS 14", category: "FRONTEND FRAMEWORK", desc: "React framework with App Router, Server Components, SSR, and edge API routes." },
    { name: "REACT 18", category: "UI LIBRARY", desc: "Declarative component-driven frontend architecture with hooks and concurrent rendering." },
    { name: "TYPESCRIPT", category: "LANGUAGE", desc: "Strict static typing across frontend components and backend API route payloads." },
    { name: "NODE.JS", category: "BACKEND RUNTIME", desc: "High-concurrency asynchronous JavaScript runtime for scalable REST and GraphQL microservices." },
    { name: "TAILWIND CSS", category: "STYLING", desc: "Utility-first CSS framework for rapid, responsive, design-system-aligned styling." },
    { name: "POSTGRESQL", category: "DATABASE", desc: "Enterprise SQL database with relational integrity, JSONB support, and ACID guarantees." },
    { name: "PRISMA ORM", category: "DATABASE LAYER", desc: "Type-safe ORM for intuitive database querying, migrations, and schema design." },
    { name: "GSAP", category: "ANIMATION", desc: "High-performance JavaScript animation engine for smooth scroll-bound UI choreography." },
    { name: "FRAMER MOTION", category: "ANIMATION", desc: "Production-ready motion library for fluid React layout transitions and gestures." },
    { name: "DOCKER", category: "DEVOPS", desc: "Containerization platform ensuring identical runtime environments across dev and production." },
    { name: "STRIPE", category: "PAYMENTS", desc: "Secure payment gateway integration for subscription billing and e-commerce checkout flows." },
    { name: "REDIS", category: "CACHING", desc: "In-memory key-value data store for high-speed session caching and rate-limiting." }
  ] as TechItem[],
  experience: [
    {
      period: "2023 — PRESENT",
      role: "SENIOR FULL-STACK DEVELOPER",
      company: "Apex Tech Digital Solutions",
      location: "Remote",
      description: "Leading frontend architecture and full-stack SaaS engineering for high-growth client web applications.",
      highlights: [
        "Architected modular micro-frontends reducing bundle size by 42%",
        "Implemented real-time telemetry analytics using WebSockets and Next.js Server Actions",
        "Mentored junior engineers and instituted TypeScript code quality standards"
      ]
    },
    {
      period: "2021 — 2023",
      role: "FULL-STACK SOFTWARE ENGINEER",
      company: "Nexus Creative Lab",
      location: "Remote / Hybrid",
      description: "Engineered headless e-commerce platforms and interactive web applications for global brands.",
      highlights: [
        "Delivered 12+ headless Shopify stores with Next.js and Tailwind CSS",
        "Optimized Lighthouse performance scores from 64 to 98 across core web vitals",
        "Integrated Stripe subscription billing engines for SaaS clients"
      ]
    },
    {
      period: "2020 — 2021",
      role: "FRONTEND DEVELOPER & UI CREATIVE",
      company: "Vanguard Web Studio",
      location: "On-site",
      description: "Built custom interactive web products with rich GSAP animations and responsive UI components.",
      highlights: [
        "Crafted smooth scroll transitions and micro-interactions using GSAP ScrollTrigger",
        "Converted complex Figma designs into pixel-perfect responsive React layouts"
      ]
    }
  ] as ExperienceItem[],
  process: [
    {
      step: "01",
      title: "DISCOVERY & ARCHITECTURE",
      subtitle: "REQUIREMENTS & SCOPE",
      description: "Deep dive into your product goals, target audience, technical stack, and database architecture plan."
    },
    {
      step: "02",
      title: "UI/UX & PROTOTYPING",
      subtitle: "DESIGN SYSTEM",
      description: "Crafting wireframes, component design systems, dark-mode aesthetics, and interactive motion mockups."
    },
    {
      step: "03",
      title: "FULL-STACK ENGINEERING",
      subtitle: "CLEAN CODE PRODUCTION",
      description: "Building production-ready code with Next.js 14, TypeScript, Tailwind CSS, and secure database APIs."
    },
    {
      step: "04",
      title: "QA & DEPLOYMENT",
      subtitle: "LAUNCH & OPTIMIZATION",
      description: "Rigorous testing, Lighthouse performance tuning, SEO meta optimization, and automated CI/CD deployment."
    }
  ] as ProcessStage[],
  projects: [
    {
      id: "p1",
      title: "VORTEX SAAS PLATFORM",
      slug: "vortex-saas",
      subtitle: "AI-Powered Analytics & Workflow Automation Platform",
      category: "SaaS",
      thumbnail: "/images/hero-portrait.jpg",
      heroBanner: "/images/hero-portrait.jpg",
      description: "An enterprise-grade SaaS analytics dashboard with real-time telemetry tracking, automated reporting pipelines, and AI query synthesis.",
      overview: "Vortex was built to streamline complex data visualization for modern product teams, processing millions of events daily.",
      challenge: "Processing high-volume streaming data without latency while providing real-time UI updates on complex charts.",
      solution: "Implemented WebSocket connections combined with optimistic UI updates and server-sent event streaming.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Recharts"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      metrics: [
        { label: "Performance Score", value: "99/100" },
        { label: "Latency Reduction", value: "65%" },
        { label: "Active Users", value: "10k+" }
      ],
      screenshots: ["/images/hero-portrait.jpg", "/images/hero-portrait.jpg"]
    },
    {
      id: "p2",
      title: "AURA HEADLESS E-COMMERCE",
      slug: "aura-ecommerce",
      subtitle: "High-Performance Luxury Fashion E-Commerce Store",
      category: "E-Commerce",
      thumbnail: "/images/hero-portrait.jpg",
      heroBanner: "/images/hero-portrait.jpg",
      description: "A fast headless Shopify store crafted for a premium lifestyle apparel brand with instant page transitions and interactive product customization.",
      overview: "Aura delivers sub-second page loads and seamless checkout experiences across mobile and desktop devices.",
      challenge: "Balancing heavy media assets and high-res video galleries with tight LCP and CLS Lighthouse scores.",
      solution: "Engineered image optimization pipelines, dynamic edge caching, and progressive video streaming.",
      techStack: ["React", "Next.js", "Shopify Storefront API", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      metrics: [
        { label: "Page Load Speed", value: "0.8s" },
        { label: "Conversion Lift", value: "+34%" },
        { label: "Lighthouse Score", value: "98" }
      ],
      screenshots: ["/images/hero-portrait.jpg", "/images/hero-portrait.jpg"]
    },
    {
      id: "p3",
      title: "NEXUS CREATIVE STUDIO",
      slug: "nexus-studio",
      subtitle: "Interactive Portfolio & Digital Experience Website",
      category: "Web App",
      thumbnail: "/images/hero-portrait.jpg",
      heroBanner: "/images/hero-portrait.jpg",
      description: "A dark editorial digital agency website featuring GSAP scroll-triggered animations, interactive 3D WebGL cards, and custom typography.",
      overview: "Nexus Studio showcases cutting-edge web design aesthetics combined with smooth micro-interactions.",
      challenge: "Creating complex scroll-bound physics animations without causing main thread jank on mobile web browsers.",
      solution: "Offloaded heavy matrix calculations to CSS hardware acceleration and used GSAP Context for memory management.",
      techStack: ["Next.js", "GSAP", "Three.js", "Tailwind CSS", "Lenis Scroll"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      metrics: [
        { label: "Smooth Scroll FPS", value: "60 FPS" },
        { label: "Award Nominations", value: "3" },
        { label: "User Engagement", value: "+120%" }
      ],
      screenshots: ["/images/hero-portrait.jpg", "/images/hero-portrait.jpg"]
    }
  ] as Project[]
};
