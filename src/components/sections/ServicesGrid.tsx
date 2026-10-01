"use client";

import React from "react";
import Link from "next/link";
import { Bot, Code2, Layers, BarChart3, Smartphone, Cpu, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Card3D } from "../ui/Card3D";

const SERVICES_PREVIEW = [
  {
    id: "agentic-ai",
    icon: Bot,
    number: "01",
    title: "Agentic AI Systems",
    desc: "Autonomous multi-agent pipelines, LLM tool-use orchestration, and custom RAG memory layers that execute without human latency.",
    tags: ["LangChain", "Multi-Agent", "FastAPI", "Vector RAG"],
    highlight: "Autonomous Tool-Use",
  },
  {
    id: "full-stack",
    icon: Code2,
    number: "02",
    title: "Full-Stack Web Engineering",
    desc: "Production-grade Next.js systems engineered for sub-second speeds, 60fps micro-animations, and high checkout conversion.",
    tags: ["Next.js 14", "TypeScript", "Tailwind", "PostgreSQL"],
    highlight: "Sub-Second LCP",
  },
  {
    id: "saas-platforms",
    icon: Layers,
    number: "03",
    title: "SaaS Platform Engineering",
    desc: "Multi-tenant architectures with automated Stripe billing, granular RBAC permissions, and frictionless onboarding workflows.",
    tags: ["Multi-Tenant", "Stripe Billing", "RBAC", "Mongoose"],
    highlight: "Turnkey Billing",
  },
  {
    id: "enterprise-dashboards",
    icon: BarChart3,
    number: "04",
    title: "Enterprise Dashboards & BI",
    desc: "Real-time WebSocket streaming analytics, interactive visual heatmaps, and AI-augmented natural language data summaries.",
    tags: ["WebSockets", "ClickHouse", "Tremor", "Real-Time"],
    highlight: "Zero Browser Lag",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    number: "05",
    title: "Mobile App Development",
    desc: "React Native and cross-platform apps with 60fps native performance, offline database sync, and biometric authentication.",
    tags: ["React Native", "Expo", "Offline Sync", "iOS/Android"],
    highlight: "Offline-First",
  },
  {
    id: "ai-automation",
    icon: Cpu,
    number: "06",
    title: "AI Automation Systems",
    desc: "Intelligent OCR, automatic document triage, CRM synchronization, and multi-step pipeline automation.",
    tags: ["OCR Vision", "Celery", "Workflows", "Error Retries"],
    highlight: "Cut 80% Manual Ops",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ember/10 blur-[130px] pointer-events-none rounded-full" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Engineered for Scalability & Conversion"
            gradientWord="Scalability & Conversion"
            subtitle="From AI-native backends to pixel-perfect frontends — we own every layer of your digital product."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_PREVIEW.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} delay={0.08 * idx} className="h-full">
                <Card3D intensity={9} className="h-full">
                  <div className="group h-full flex flex-col justify-between p-8 rounded-2xl glass-panel glass-panel-hover relative overflow-hidden">
                    {/* Subtle top ember glow line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-surface-subtle border border-surface-border flex items-center justify-center text-ember group-hover:border-ember group-hover:bg-ember/10 group-hover:shadow-ember transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-ash-dark group-hover:text-ember transition-colors">
                          {s.number}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-smoke-white mb-3 group-hover:text-ember-light transition-colors">
                        {s.title}
                      </h3>

                      <p className="text-sm text-ash leading-relaxed mb-6 font-sans">
                        {s.desc}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-4">
                        {s.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-[11px] font-mono text-ash-light"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/services#${s.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-ember hover:text-gold transition-colors group/link"
                      >
                        <span>Explore Deliverables</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card3D>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="md">
            View All 8 Engineering Services & Specs
          </Button>
        </div>
      </Container>
    </section>
  );
}
