export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  statsHighlight: string;
  projectSlug?: string;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: "test-1",
    quote:
      "The Angaar Labs completely transformed our online presence. Our previous store took 7 seconds to load 3D assets — they reduced that to under a second while doubling our checkout conversion rate. Their aesthetic obsession is unmatched.",
    author: "Elena Rostova",
    role: "Head of Digital Experience",
    company: "Solena Luxury Group",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    statsHighlight: "+380% Conversion Jump",
    projectSlug: "solena-luxury-jewelry",
  },
  {
    id: "test-2",
    quote:
      "Working with The Angaar Labs was the first time an engineering agency felt like genuine co-founders. They built our autonomous agent supervisor in 4 weeks flat. It now handles 90% of our production cloud alerts without manual intervention.",
    author: "Vikram Singhania",
    role: "VP of Cloud Engineering",
    company: "IntelliOps Cloud",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    statsHighlight: "91% Alert Noise Drop",
    projectSlug: "intelliops-ai",
  },
  {
    id: "test-3",
    quote:
      "The speed and architectural rigor they brought to Vaultify allowed us to acquire 120,000 active users in 90 days. Zero downtime, bank-grade security, and an interface that our users literally rave about on Twitter.",
    author: "Marcus Vance",
    role: "Co-Founder & CEO",
    company: "Vaultify Wealth",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    statsHighlight: "120K Active Users",
    projectSlug: "vaultify-smart-finance",
  },
  {
    id: "test-4",
    quote:
      "Our partners were skeptical about AI contract review until they saw LexAgent in action. The Angaar Labs delivered a system with 99.4% precision that reduced our review time from 14 hours down to 30 seconds.",
    author: "Aarav Deshmukh",
    role: "Managing Partner",
    company: "Deshmukh & Partners Law",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    statsHighlight: "93% Speed Increase",
    projectSlug: "lexagent-legal-ai",
  },
];
