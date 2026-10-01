"use client";

import React from "react";
import { Marquee } from "../ui/Marquee";
import { Container } from "../ui/Container";

const PARTNERS_AND_STACK = [
  { name: "Next.js 14", tag: "Frontend Framework" },
  { name: "OpenAI", tag: "Model Intelligence" },
  { name: "Anthropic Claude", tag: "Reasoning Engines" },
  { name: "Three.js / WebGL", tag: "3D Motion" },
  { name: "Tailwind CSS", tag: "Design Systems" },
  { name: "MongoDB Atlas", tag: "Data Persistence" },
  { name: "FastAPI & Python", tag: "Agent Backends" },
  { name: "Kubernetes & AWS", tag: "Cloud Infrastructure" },
  { name: "Stripe", tag: "Fintech & Billing" },
  { name: "Framer Motion", tag: "60fps Micro-Interactions" },
];

const INDUSTRIES_TICKER = [
  "Luxury E-Commerce",
  "Enterprise AI & LLMOps",
  "FinTech & WealthTech",
  "LegalTech & Document AI",
  "Clinical Health & MedTech",
  "Real Estate Portals",
  "Hospitality & Table Tech",
  "EdTech Platforms",
];

export function MarqueeSection() {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-surface/30 relative overflow-hidden">
      <div className="text-center mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-ash">
          Trusted Technology Stack & Industries Engineered
        </span>
      </div>

      {/* Marquee Row 1: Technologies */}
      <Marquee speed="normal" direction="left" className="py-2">
        {PARTNERS_AND_STACK.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-surface border border-surface-border text-smoke-white text-sm font-sans"
          >
            <span className="w-2 h-2 rounded-full bg-ember shadow-ember" />
            <span className="font-semibold">{item.name}</span>
            <span className="text-ash text-xs font-mono">[{item.tag}]</span>
          </div>
        ))}
      </Marquee>

      {/* Marquee Row 2: Industries */}
      <Marquee speed="slow" direction="right" className="py-2 mt-2">
        {INDUSTRIES_TICKER.map((ind, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-subtle border border-white/[0.05] text-ash-light text-xs font-mono tracking-wide"
          >
            <span className="text-gold">✦</span>
            <span>{ind}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
