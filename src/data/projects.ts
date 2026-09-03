export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  year: string;
  stack: string[];
  role: string;
  client: string;
  duration: string;
  problem: string;
  solution: string;
  buildDetails: string;
  results: string[];
  keyFeatures: string[];
  visualIdentity: {
    accentColor: string;
    badgeBg: string;
    bgPattern: string;
    deviceType: 'dashboard' | 'ecommerce' | 'collaboration' | 'finance' | 'creative';
  };
  demoUrl: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    slug: "ai-saas-platform",
    number: "01",
    title: "AI SAAS PLATFORM",
    subtitle: "Enterprise AI Workflow & Analytics Suite",
    shortDescription: "A full-stack SaaS platform with authentication, subscriptions, real-time dashboards, and AI-powered multi-modal workflows.",
    fullDescription: "SynthAI is an end-to-end cloud platform designed for modern growth teams to generate, automate, and analyze high-volume marketing and code content using fine-tuned LLM pipelines. Built with Next.js App Router, Node.js microservices, PostgreSQL, and OpenAI API.",
    category: "AI & SAAS",
    year: "2024",
    stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI API", "Tailwind CSS", "Stripe"],
    role: "Lead Full-Stack Developer",
    client: "SynthAI Corp",
    duration: "4 Months",
    problem: "The client needed a platform capable of handling concurrent prompt generation requests, streaming LLM outputs in real-time without HTTP timeouts, managing granular user token usage quotas, and handling Stripe tier upgrades seamlessly.",
    solution: "I designed a resilient serverless architecture using Next.js Edge Runtime for streaming API responses, paired with a Redis queue worker for long-running batch generations and PostgreSQL for relational user management.",
    buildDetails: "Implemented custom SSE (Server-Sent Events) hooks on the frontend, built dark-mode dashboard UI components, configured Stripe Webhook listeners for subscription lifecycle management, and created automated token tracking middleware.",
    results: [
      "Scaled to 20,000+ registered active users within 60 days of launch.",
      "Achieved average response latency under 350ms for streaming prompt outputs.",
      "Maintained zero downtime through automated AWS ECS multi-zone deployment."
    ],
    keyFeatures: [
      "Real-time streaming AI content generator with live markdown preview",
      "Usage-based token accounting and automated Stripe subscription billing",
      "Interactive data visualization analytics for prompt efficiency",
      "Role-based access control (RBAC) with Google & GitHub OAuth"
    ],
    visualIdentity: {
      accentColor: "#CCFF00",
      badgeBg: "#1F291E",
      bgPattern: "from-lime-900/20 to-neutral-900",
      deviceType: "dashboard",
    },
    demoUrl: "https://synthai-demo.zeeshan.dev",
    githubUrl: "https://github.com/zeeshan-dev/synthai-saas-platform",
  },
  {
    id: "project-02",
    slug: "ecommerce-platform",
    number: "02",
    title: "E-COMMERCE PLATFORM",
    subtitle: "High-Performance Next-Gen Apparel Storefront",
    shortDescription: "A high-performance commerce experience with dynamic product customization, inventory management, checkout and analytics.",
    fullDescription: "Aura Commerce is a headless e-commerce store built for high-end luxury streetwear. Combining sub-second page transitions, dynamic asset previews, instant client-side filtering, and automated cart synchronization across devices.",
    category: "E-COMMERCE",
    year: "2024",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Prisma"],
    role: "Full-Stack Engineer & Architect",
    client: "Aura Luxury Brand",
    duration: "3 Months",
    problem: "Traditional monolithic store setups suffered from slow mobile collection filtering (3+ second reloads), cart drop-offs, and disjointed payment gateways during high-traffic flash sales.",
    solution: "Engineered a headless storefront powered by Next.js Incremental Static Regeneration (ISR) and Edge middleware caching. Built an optimistic cart state manager to deliver zero-latency user interactions.",
    buildDetails: "Constructed custom filter queries in PostgreSQL with multi-column indices, integrated Stripe Elements custom payment flows, built animated slide-out checkout drawers, and implemented WebP dynamic image compression.",
    results: [
      "Reduced collection page load times from 2.8s to 240ms.",
      "Increased mobile checkout conversion rate by 28% after UX overhaul.",
      "Handled 4,500 concurrent visitors during seasonal product drop with 100% success rate."
    ],
    keyFeatures: [
      "Instant client-side multi-attribute product search and filter engine",
      "Optimistic cart state manager with persistent offline storage sync",
      "One-click Stripe & Apple Pay integrated checkout",
      "Admin analytics panel tracking inventory, revenue, and customer LTV"
    ],
    visualIdentity: {
      accentColor: "#38BDF8",
      badgeBg: "#0F2B3C",
      bgPattern: "from-sky-900/20 to-neutral-900",
      deviceType: "ecommerce",
    },
    demoUrl: "https://aura-commerce.zeeshan.dev",
    githubUrl: "https://github.com/zeeshan-dev/aura-ecommerce-platform",
  },
  {
    id: "project-03",
    slug: "realtime-collaboration-app",
    number: "03",
    title: "REAL-TIME COLLABORATION APP",
    subtitle: "Multi-User Workspace & Diagramming Engine",
    shortDescription: "A collaborative application with real-time cursor presence, instant communication channels, and shared visual canvases.",
    fullDescription: "Pulse Canvas is a real-time multiplayer diagramming tool designed for remote engineering teams. Enables multiple users to construct software architecture diagrams concurrently with live cursor tracking.",
    category: "COLLABORATION",
    year: "2023",
    stack: ["React", "Node.js", "WebSockets", "MongoDB", "Tailwind CSS", "Canvas API"],
    role: "Full-Stack Developer",
    client: "Pulse Technologies",
    duration: "3.5 Months",
    problem: "Enabling smooth 60fps multiplayer rendering of thousands of canvas nodes while preventing state conflicts when multiple users edit the exact same object simultaneously.",
    solution: "Implemented Operational Transformation (OT) and Conflict-free Replicated Data Types (CRDT) over WebSocket binary protocol, paired with hardware acceleration.",
    buildDetails: "Designed custom canvas event listeners, built WebSocket room management with automatic reconnect logic in Node.js, and structured MongoDB document diffing.",
    results: [
      "Achieved sub-15ms sync latency between international collaborators.",
      "Successfully rendered over 5,000 vector shapes on a single interactive canvas at 60 FPS.",
      "Adopted by 30+ engineering squads for sprint planning and architectural reviews."
    ],
    keyFeatures: [
      "Live multiplayer cursor presence with color-coded user badges",
      "Infinite vector canvas with zooming, panning, and magnetic grid snapping",
      "Real-time audio room integration and inline comment threads",
      "Export canvas diagrams to SVG, PNG, and architectural code manifests"
    ],
    visualIdentity: {
      accentColor: "#F43F5E",
      badgeBg: "#3B111A",
      bgPattern: "from-rose-900/20 to-neutral-900",
      deviceType: "collaboration",
    },
    demoUrl: "https://pulse-canvas.zeeshan.dev",
    githubUrl: "https://github.com/zeeshan-dev/pulse-collaboration-app",
  },
  {
    id: "project-04",
    slug: "finance-dashboard",
    number: "04",
    title: "FINANCE DASHBOARD",
    subtitle: "High-Frequency Portfolio Analytics & Risk Tracker",
    shortDescription: "A data-heavy financial dashboard with real-time ticker streams, analytics visualizer, and encrypted authentication.",
    fullDescription: "Nexus Wealth is a dark-mode fintech intelligence dashboard providing institutional investors with real-time portfolio performance metrics, risk assessment modeling, and automated ledger reporting.",
    category: "FINTECH",
    year: "2023",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Recharts", "Tailwind CSS"],
    role: "Frontend Lead & API Developer",
    client: "Nexus Capital",
    duration: "4 Months",
    problem: "Aggregating millions of financial tick records into smooth, zero-jank interactive charts without freezing the browser UI loop or causing excessive memory leaks.",
    solution: "Utilized Web Workers to offload heavy financial data parsing and calculation off the main UI thread, coupled with virtualized tables for rendering thousands of transaction rows.",
    buildDetails: "Created responsive custom chart components using Recharts & D3 mathematical utilities, set up JWT & 2FA authentication flows, and implemented memoized data selectors.",
    results: [
      "Rendered 100,000+ data points smoothly with zero frame drops.",
      "Reduced memory consumption by 60% via Web Worker offloading.",
      "Audited and passed SOC2 Security compliance standard guidelines."
    ],
    keyFeatures: [
      "Interactive candlestick & area charts with customizable date ranges",
      "Real-time ticker stream updates via WebSocket feeds",
      "Automated risk ratio calculator (Sharpe ratio, Beta, Volatility)",
      "Dark graphite UI with customizable widget layout drag-and-drop"
    ],
    visualIdentity: {
      accentColor: "#A855F7",
      badgeBg: "#2A133D",
      bgPattern: "from-purple-900/20 to-neutral-900",
      deviceType: "finance",
    },
    demoUrl: "https://nexus-finance.zeeshan.dev",
    githubUrl: "https://github.com/zeeshan-dev/nexus-finance-dashboard",
  },
  {
    id: "project-05",
    slug: "creative-agency-website",
    number: "05",
    title: "CREATIVE AGENCY WEBSITE",
    subtitle: "Award-Winning Experimental Editorial Experience",
    shortDescription: "An experimental marketing website with advanced scroll interactions, custom shaders, and headless CMS integration.",
    fullDescription: "Kinetix is an immersive agency website created to showcase high-impact visual campaigns for global brands. Features 3D background distortions, smooth parallax storytelling, and dynamic CMS content delivery.",
    category: "EXPERIMENTAL WEB",
    year: "2023",
    stack: ["Next.js", "GSAP", "ScrollTrigger", "Sanity CMS", "Tailwind CSS"],
    role: "Creative Developer",
    client: "Kinetix Studio",
    duration: "2.5 Months",
    problem: "Delivering cinematic, fluid scroll animations and graphic reveals while preserving high page performance on mobile devices and low-tier hardware.",
    solution: "Leveraged GSAP ScrollTrigger with hardware-accelerated CSS transforms and responsive shader fallback modes.",
    buildDetails: "Crafted custom clip-path mask reveals, magnetic cursor triggers, parallax typography layers, and Sanity Headless CMS webhook revalidation.",
    results: [
      "Won Site of the Day (SOTD) on international web design awards platform.",
      "Achieved 96/100 Lighthouse performance rating on desktop.",
      "Increased user session duration by 180% compared to legacy agency site."
    ],
    keyFeatures: [
      "Custom fluid distortion animations reacting to scroll speed",
      "Sticky storytelling project stages with clip-path image masks",
      "Headless CMS integration for instantaneous case study publishing",
      "Seamless page transition system with zero white-flash delays"
    ],
    visualIdentity: {
      accentColor: "#F97316",
      badgeBg: "#3A1A07",
      bgPattern: "from-orange-900/20 to-neutral-900",
      deviceType: "creative",
    },
    demoUrl: "https://kinetix-agency.zeeshan.dev",
    githubUrl: "https://github.com/zeeshan-dev/kinetix-agency-website",
  }
];
