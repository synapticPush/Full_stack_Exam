export interface ServiceData {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  icon: string;
  highlight: string;
}

export const SERVICES: ServiceData[] = [
  {
    id: "agentic-ai",
    number: "01",
    title: "Agentic AI Systems",
    shortDesc: "Autonomous multi-agent pipelines, tool-use orchestration, and RAG systems that execute complex workflows without human bottlenecks.",
    fullDesc: "We design complete intelligence layers — reasoning, persistent memory, tool-calling agents, and supervisor coordination wired directly into your product logic.",
    deliverables: [
      "Multi-Agent Supervisor Architectures",
      "Enterprise RAG & Hybrid Vector Retrieval",
      "Autonomous Tool-Use & API Connectors",
      "LLM Guardrails & Hallucination Defense",
      "Observability & Tracing Dashboards",
    ],
    techStack: ["LangChain", "LlamaIndex", "FastAPI", "Qdrant", "OpenAI", "Anthropic Claude"],
    icon: "Bot",
    highlight: "Autonomous execution with human-in-the-loop oversight",
  },
  {
    id: "full-stack",
    number: "02",
    title: "Full-Stack Web Engineering",
    shortDesc: "Production-grade, pixel-perfect web systems built for scale. Next.js, Node.js, and TypeScript engineered with zero compromises.",
    fullDesc: "From database schema design to 60fps micro-animations, we build mission-critical web platforms that look stunning, load in under a second, and convert visitors into clients.",
    deliverables: [
      "Modern Next.js App Router Platforms",
      "High-Throughput REST & GraphQL APIs",
      "Sub-Second LCP Performance Tuning",
      "Framer Motion & 3D Interactive UI",
      "Comprehensive End-to-End Testing",
    ],
    techStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    icon: "Code2",
    highlight: "Sub-second load times and Awwwards-caliber motion",
  },
  {
    id: "saas-platforms",
    number: "03",
    title: "SaaS Platform Engineering",
    shortDesc: "Multi-tenant SaaS architectures with secure auth, granular RBAC, automated Stripe billing, and frictionless user onboarding.",
    fullDesc: "We build turnkey SaaS platforms from zero to production. We handle the complex plumbing — database isolation, metered billing, organization switching, and webhook resiliency.",
    deliverables: [
      "Multi-Tenant Tenant Isolation",
      "Subscription Billing & Usage Metering",
      "Role-Based Access Control (RBAC)",
      "Automated Onboarding & Team Invites",
      "Webhook & Event Bus Pipelines",
    ],
    techStack: ["Next.js", "Stripe API", "Mongoose", "Supabase", "Redis", "Tailwind CSS"],
    icon: "Layers",
    highlight: "Enterprise security with turnkey self-serve billing",
  },
  {
    id: "enterprise-dashboards",
    number: "04",
    title: "Enterprise Dashboards & BI",
    shortDesc: "Data-rich analytics platforms with real-time streaming charts, custom reporting, and AI-augmented natural language summaries.",
    fullDesc: "Turn complex, fragmented telemetry and business data into high-leverage insights. Real-time WebSocket streaming, interactive filtering, and instant PDF/CSV exports.",
    deliverables: [
      "Real-Time WebSocket Data Streaming",
      "High-Density Interactive Charts & Heatmaps",
      "Natural Language AI Query Engine",
      "Custom Report Builders & Automated Exports",
      "Granular Executive vs Operations Views",
    ],
    techStack: ["React", "ClickHouse", "Tremor", "Chart.js", "WebSockets", "Node.js"],
    icon: "BarChart3",
    highlight: "Real-time metrics with zero browser lag on 1M+ rows",
  },
  {
    id: "mobile-apps",
    number: "05",
    title: "Mobile App Development",
    shortDesc: "Cross-platform mobile applications with 60fps native performance, offline-first sync, push notifications, and hardware integrations.",
    fullDesc: "We deliver iOS and Android apps using React Native and Flutter that feel truly native, maintain instant fluid responsiveness, and work seamlessly in low-connectivity environments.",
    deliverables: [
      "Cross-Platform iOS & Android Apps",
      "Offline SQLite / WatermelonDB Sync",
      "Biometric Auth & Hardware Integrations",
      "Push Notification & Deep Linking Engines",
      "App Store & Google Play Submission",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "GraphQL", "Firebase", "Tailwind"],
    icon: "Smartphone",
    highlight: "60fps animations with reliable offline sync",
  },
  {
    id: "ai-automation",
    number: "06",
    title: "AI Automation & Workflows",
    shortDesc: "Automate complex repetitive business operations. Document extraction, intelligent CRM triage, and automated multi-step actions.",
    fullDesc: "Replace hundreds of hours of manual copy-pasting, document parsing, and invoice reconciliation with reliable, autonomous AI workflow pipelines.",
    deliverables: [
      "Intelligent OCR & Document Parsing",
      "CRM & ERP Bidirectional Sync",
      "Automated Lead Scoring & Email Dispatch",
      "Custom Slack / Discord AI Internal Bots",
      "Error-Tolerant Retry & Fallback Queues",
    ],
    techStack: ["Python", "FastAPI", "Celery", "OpenAI Vision", "LangGraph", "Docker"],
    icon: "Cpu",
    highlight: "Cut 80%+ of manual operational overhead",
  },
  {
    id: "cloud-devops",
    number: "07",
    title: "Cloud Infrastructure & DevOps",
    shortDesc: "Scalable containerized deployments on AWS and GCP. Auto-scaling, zero-downtime CI/CD, and 99.99% uptime guarantees.",
    fullDesc: "We architect resilient cloud foundations with Infrastructure-as-Code (Terraform), Kubernetes cluster orchestration, and automated canary deployments.",
    deliverables: [
      "Terraform Infrastructure as Code",
      "Kubernetes & Docker Cluster Setup",
      "Automated GitHub Actions CI/CD",
      "Distributed Caching with Redis / Cloudflare",
      "24/7 Health Monitoring & PagerDuty Alerting",
    ],
    techStack: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
    icon: "Cloud",
    highlight: "Auto-scaling infrastructure ready for 10x spikes",
  },
  {
    id: "custom-software",
    number: "08",
    title: "Custom Enterprise Software",
    shortDesc: "Bespoke internal tools, inventory engines, and operational platforms architected specifically for how your enterprise operates.",
    fullDesc: "Off-the-shelf software often forces you into clunky workarounds. We build proprietary software tailored to your exact business logic and competitive advantages.",
    deliverables: [
      "Tailored ERP & Operations Engines",
      "Custom CRM & Client Portals",
      "Legacy Database Migrations",
      "High-Security Role Permissioning",
      "Enterprise SLA Support & Maintenance",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Redis", "Tailwind CSS"],
    icon: "ShieldCheck",
    highlight: "Proprietary software tailored to your workflows",
  },
];
