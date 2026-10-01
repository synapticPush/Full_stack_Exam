export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  specialty: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Aman Sharma",
    role: "Founding Partner & Chief Architect",
    bio: "Ex-Scale AI systems engineer obsessed with sub-second LLM latency, distributed event architectures, and pixel-level motion fidelity.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    specialty: ["Distributed Systems", "Agentic AI", "High-Throughput Next.js"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Rohan Varma",
    role: "Lead Frontend & Creative Technologist",
    bio: "Awwwards-winning motion designer and full-stack engineer bridging 3D WebGL shaders, kinetic typography, and fluid micro-interactions.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    specialty: ["WebGL / Three.js", "Framer Motion", "Design Systems"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Priya Nair",
    role: "Head of AI Engineering",
    bio: "Specialist in autonomous agent coordination, dense vector retrieval pipelines, and domain-adapted LLM fine-tuning.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    specialty: ["Multi-Agent Systems", "LangGraph", "RAG Optimization"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Dev Patel",
    role: "Senior Cloud & Platform Engineer",
    bio: "DevOps and cloud infrastructure lead specialized in multi-cloud Kubernetes architectures, zero-downtime rollouts, and SOC2 compliance.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    specialty: ["Kubernetes", "AWS / GCP", "Terraform & CI/CD"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];
