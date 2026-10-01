"use client";

import React from "react";
import { Building2, Utensils, Shirt, HeartPulse, ShieldAlert, ShoppingBag, Scale, GraduationCap } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const INDUSTRIES = [
  {
    icon: ShoppingBag,
    name: "Luxury E-Commerce",
    desc: "Sub-second product customizers, 3D WebGL showcases, and high-ticket cart conversion engines.",
    metric: "+380% Avg Conversion",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & MedTech",
    desc: "HIPAA-compliant EHR copilots, clinical NLP transcription, and automated patient scheduling.",
    metric: "100% HIPAA Compliant",
  },
  {
    icon: ShieldAlert,
    name: "Enterprise AI & Observability",
    desc: "Autonomous Kubernetes self-healing, real-time alert triage, and executive intelligence dashboards.",
    metric: "91% Alert Noise Drop",
  },
  {
    icon: Scale,
    name: "LegalTech & Document AI",
    desc: "RAG-driven 500-page contract review, automated redlining, and compliance clause auditing.",
    metric: "93% Speedup",
  },
  {
    icon: Building2,
    name: "Real Estate & Architecture",
    desc: "Interactive 3D virtual floorplan tours, lead capture funnels, and CRM property feeds.",
    metric: "3x Qualified Leads",
  },
  {
    icon: Utensils,
    name: "Hospitality & Restaurant Tech",
    desc: "Real-time table reservation systems, digital multi-location menus, and POS sync.",
    metric: "Instant Table Sync",
  },
  {
    icon: Shirt,
    name: "Fashion & Lifestyle Brands",
    desc: "High-fashion lookbooks, dynamic sizing recommenders, and seamless Shopify Plus headless frontends.",
    metric: "Awwwards-Caliber UI",
  },
  {
    icon: GraduationCap,
    name: "EdTech & Interactive SaaS",
    desc: "In-browser code execution sandboxes, adaptive AI mentors, and cohort community management.",
    metric: "64% Course Completion",
  },
];

export function IndustryShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-surface/40 border-y border-white/[0.05] relative">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries We Transform"
            title="Tailored Engineering for High-Stakes Domains"
            gradientWord="High-Stakes Domains"
            subtitle="We don't build generic websites. Every system is architected to address the unique bottlenecks of your vertical."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Reveal key={idx} delay={0.06 * idx}>
                <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-surface/80 border border-surface-border hover:border-ember/40 hover:bg-surface-hover hover:shadow-ember-sm transition-all duration-300 group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-surface-border flex items-center justify-center text-ember mb-4 group-hover:scale-110 group-hover:text-gold transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-display font-bold text-smoke-white mb-2 group-hover:text-ember-light transition-colors">
                      {ind.name}
                    </h3>

                    <p className="text-xs text-ash leading-relaxed font-sans mb-4">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-ash-dark">Benchmark:</span>
                    <span className="text-gold font-semibold">{ind.metric}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
