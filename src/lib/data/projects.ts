export interface ProjectData {
  id: string;
  title: string;
  slug: string;
  industry: "REAL_ESTATE" | "CAFE" | "CLOTHING" | "HEALTHCARE" | "CRM" | "ECOMMERCE" | "AI_SYSTEMS" | "OTHER";
  industryLabel: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string; change?: string }[];
  coverImage: string;
  gallery: string[];
  techStack: string[];
  clientName: string;
  liveUrl: string;
  year: number;
  featured: boolean;
  order: number;
}

export const PROJECTS: ProjectData[] = [
  {
    id: "proj-1",
    title: "Solena Luxury Atelier",
    slug: "solena-luxury-jewelry",
    industry: "ECOMMERCE",
    industryLabel: "Luxury E-Commerce",
    tagline: "High-end bespoke jewelry ecommerce platform with 3D product showcase",
    summary:
      "Engineered an ultra-premium digital boutique for Solena with smooth WebGL product rendering, dynamic ring customizers, and sub-second checkout velocity.",
    problem:
      "Solena's legacy boutique struggled with slow 3D loading times (6.8s LCP), cart drop-offs above 72%, and an outdated visual aesthetic that failed to convey their $15,000+ haute joaillerie craftsmanship.",
    solution:
      "We rebuilt the entire digital storefront with Next.js 14, three.js for real-time ring configuration, micro-animations via Framer Motion, and edge-cached headless commerce architecture.",
    result:
      "Slashed page load times to 0.8s, drove a 4.8x boost in high-ticket checkout conversions, and won Awwwards Mobile Site of the Day.",
    metrics: [
      { label: "Conversion Lift", value: "+380%", change: "4.8x jump" },
      { label: "LCP Load Time", value: "0.8s", change: "88% faster" },
      { label: "Average Order Value", value: "$4,250", change: "+42%" },
      { label: "Mobile Engagement", value: "4.2m", change: "+140%" },
    ],
    coverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    ],
    techStack: ["Next.js 14", "TypeScript", "Three.js", "Tailwind CSS", "Stripe API", "Framer Motion", "MongoDB"],
    clientName: "Solena Jewelry Group (Geneva & Mumbai)",
    liveUrl: "https://theangaarlabs-solena.netlify.app/",
    year: 2025,
    featured: true,
    order: 1,
  },
  {
    id: "proj-2",
    title: "IntelliOps AI Autonomous Cloud",
    slug: "intelliops-ai",
    industry: "AI_SYSTEMS",
    industryLabel: "Enterprise AI & Observability",
    tagline: "Autonomous multi-agent cloud observability and self-healing infrastructure",
    summary:
      "A next-gen enterprise dashboard integrating autonomous LLM agents that monitor Kubernetes clusters, predict outages 15 minutes before onset, and self-heal production pipelines.",
    problem:
      "Fortune 500 DevOps teams were drowning in 10,000+ daily noisy alerts across AWS and GCP, resulting in 45-minute average MTTR (Mean Time to Resolution) during critical incidents.",
    solution:
      "Architected an agentic supervisor pipeline that correlates logs via RAG vector search, synthesizes root cause explanations in natural language, and executes rollback runbooks autonomously.",
    result:
      "Reduced alert fatigue by 91%, lowered MTTR from 45 minutes to 3.2 minutes, and protected over $120M in annualized uptime for enterprise clients.",
    metrics: [
      { label: "Alert Noise Reduction", value: "91%", change: "Instant triage" },
      { label: "Incident MTTR", value: "3.2m", change: "From 45m" },
      { label: "Cluster Coverage", value: "2,500+", change: "Kubernetes nodes" },
      { label: "Autonomous Actions", value: "98.4%", change: "Accuracy rate" },
    ],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
    ],
    techStack: ["Next.js 14", "Python Agent Engine", "FastAPI", "Tailwind CSS", "ClickHouse", "Docker", "WebSockets"],
    clientName: "IntelliOps Cloud Inc.",
    liveUrl: "https://labs.theangaarbatch.in/",
    year: 2025,
    featured: true,
    order: 2,
  },
  {
    id: "proj-3",
    title: "Vaultify Smart Wealth",
    slug: "vaultify-smart-finance",
    industry: "CRM",
    industryLabel: "FinTech & Wealth Intelligence",
    tagline: "AI-powered personal finance & automated portfolio rebalancing app",
    summary:
      "Modern financial intelligence web app featuring multi-bank Plaid sync, predictive cashflow forecasting, and algorithmic tax-loss harvesting for young professionals.",
    problem:
      "Existing banking interfaces were fragmented, complex to navigate, and offered zero proactive predictive advice, leaving users reactive rather than intentional with wealth building.",
    solution:
      "Built a dark-mode first, glassmorphic financial dashboard with real-time charting, bank-grade 256-bit encryption, and personalized AI spending insights powered by fine-tuned models.",
    result:
      "Achieved 120,000 active users within 90 days of launch with 84% daily retention and zero security vulnerabilities reported in third-party audits.",
    metrics: [
      { label: "Active Users", value: "120K+", change: "90 days post-launch" },
      { label: "Daily Retention", value: "84%", change: "Industry top 1%" },
      { label: "Average Savings", value: "+$410/mo", change: "Per user" },
      { label: "Plaid Sync Latency", value: "<150ms", change: "Real-time" },
    ],
    coverImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Plaid API", "PostgreSQL", "Mongoose"],
    clientName: "Vaultify Technologies",
    liveUrl: "https://labs.theangaarbatch.in/",
    year: 2024,
    featured: true,
    order: 3,
  },
  {
    id: "proj-4",
    title: "LexAgent Legal Intelligence",
    slug: "lexagent-legal-ai",
    industry: "AI_SYSTEMS",
    industryLabel: "LegalTech & Document AI",
    tagline: "Autonomous legal contract review and risk compliance multi-agent system",
    summary:
      "High-security legal platform that ingests 500-page enterprise vendor contracts and outputs redlined risks, compliance mismatches, and clause suggestions in under 30 seconds.",
    problem:
      "Top-tier legal firms spent 14+ billable hours per complex MSA contract review, bottlenecking enterprise deals and costing corporate clients tens of thousands in manual fees.",
    solution:
      "Implemented a custom RAG architecture with dense retrieval, hierarchical legal document chunking, and strict hallucination guardrails verifying against jurisdiction statutes.",
    result:
      "Reduced contract review turnaround time by 93% while achieving a 99.4% agreement rate with senior legal counsel review benchmarks.",
    metrics: [
      { label: "Review Speedup", value: "93%", change: "30s vs 14 hrs" },
      { label: "Accuracy vs Counsel", value: "99.4%", change: "Benchmark verified" },
      { label: "Pages Analyzed", value: "1.4M+", change: "In 2025" },
      { label: "Firm Cost Savings", value: "68%", change: "Per engagement" },
    ],
    coverImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    ],
    techStack: ["Next.js 14", "FastAPI", "LangChain", "Qdrant Vector DB", "Tailwind CSS", "TypeScript"],
    clientName: "LexAgent Global LLP",
    liveUrl: "https://labs.theangaarbatch.in/",
    year: 2025,
    featured: false,
    order: 4,
  },
  {
    id: "proj-5",
    title: "Skillpath Adaptive Cohort SaaS",
    slug: "skillpath-learning-platform",
    industry: "OTHER",
    industryLabel: "EdTech & Learning Platforms",
    tagline: "Adaptive AI-driven technical curriculum with real-time code evaluation",
    summary:
      "End-to-end interactive learning SaaS tailored for engineering bootcamps and enterprise upskilling with dynamic sandbox code execution and AI mentor guidance.",
    problem:
      "Static video courses had an abysmal 6% completion rate due to lack of personalization, delayed feedback on coding exercises, and zero community accountability.",
    solution:
      "Engineered an interactive browser IDE with WebAssembly sandbox execution, real-time AI code reviewer bot, and automated cohort leaderboard gamification.",
    result:
      "Course completion jumped from 6% to 64%, with over 45,000 developers certified across 32 enterprise corporate training accounts.",
    metrics: [
      { label: "Course Completion", value: "64%", change: "From 6% benchmark" },
      { label: "Developers Upskilled", value: "45,000+", change: "Across 32 orgs" },
      { label: "AI Code Reviews", value: "2.8M+", change: "Instant feedback" },
      { label: "NPS Score", value: "89", change: "Top quartile" },
    ],
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    ],
    techStack: ["Next.js 14", "WebAssembly", "Docker Engine", "Tailwind CSS", "Redis", "Node.js"],
    clientName: "Skillpath Academy Inc.",
    liveUrl: "https://labs.theangaarbatch.in/",
    year: 2024,
    featured: false,
    order: 5,
  },
  {
    id: "proj-6",
    title: "MedFlow Clinical Decision Assistant",
    slug: "medflow-clinical-ai",
    industry: "HEALTHCARE",
    industryLabel: "Healthcare & MedTech",
    tagline: "HIPAA-compliant clinical decision support and EHR workflow accelerator",
    summary:
      "AI clinical copilot that transcribes physician-patient consultations, generates structured FHIR records, and flags drug interaction contraindications in real time.",
    problem:
      "Doctors were spending 2.5 hours per shift on administrative EHR data entry, causing clinical burnout and reducing quality physician face-time with patients.",
    solution:
      "Deployed an edge-transcription pipeline with clinical NLP entity extraction, FHIR schema validation, and automated SOAP note generation with physician one-click approvals.",
    result:
      "Saved 1.8 hours per physician per day, eliminated charting backlog across 14 hospital networks, and achieved 100% HIPAA and SOC2 Type II compliance.",
    metrics: [
      { label: "Time Saved / Doctor", value: "1.8 hrs/day", change: "Zero charting backlog" },
      { label: "Hospitals Deployed", value: "14 Networks", change: "Over 800 beds" },
      { label: "SOAP Note Accuracy", value: "98.9%", change: "Physician verified" },
      { label: "Compliance Rating", value: "100%", change: "HIPAA & SOC2" },
    ],
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    ],
    techStack: ["Next.js 14", "Python", "FastAPI", "FHIR / HL7 APIs", "Whisper Clinical", "Tailwind CSS", "PostgreSQL"],
    clientName: "MedFlow Health Systems",
    liveUrl: "https://labs.theangaarbatch.in/",
    year: 2025,
    featured: false,
    order: 6,
  },
];
