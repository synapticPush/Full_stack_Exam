"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { StatCounter } from "../ui/StatCounter";
import { Card3D } from "../ui/Card3D";
import { CheckCircle2, Shield, Zap, Sparkles } from "lucide-react";

export function StatsSection() {
  const differentiators = [
    {
      icon: Shield,
      title: "Architecture-First, Always",
      desc: "We never write a line of code before system diagrams, schema contracts, and latency budgets are approved.",
    },
    {
      icon: Zap,
      title: "Zero-Handoff Ownership",
      desc: "Our senior engineers own discovery, design, development, deployment, and ongoing observability without intermediaries.",
    },
    {
      icon: Sparkles,
      title: "AI-Native by Default",
      desc: "AI isn't a bolt-on feature. We architect custom multi-agent supervisor layers directly into your application core.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-surface/50 border-y border-white/[0.05] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-ember/10 blur-[120px] pointer-events-none rounded-full" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why The Angaar Labs"
            title="Engineered for Real Metrics, Not Empty Hype"
            gradientWord="Real Metrics"
            subtitle="We don't sell hours. We sell measurable business outcomes and bulletproof engineering execution."
          />
        </Reveal>

        {/* 4 Animated Stat Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Reveal delay={0.05}>
            <StatCounter
              value={40}
              suffix="+"
              label="Systems Shipped"
              sublabel="From zero to production"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <StatCounter
              value={99.9}
              suffix="%"
              decimals={1}
              label="Production Uptime"
              sublabel="Across all deployed cloud clusters"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <StatCounter
              value={100}
              prefix="<"
              suffix="ms"
              label="API Latency"
              sublabel="Edge-optimized Next.js backends"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <StatCounter
              value={4.8}
              suffix="x"
              decimals={1}
              label="Avg Conversion Lift"
              sublabel="In post-launch commerce analytics"
            />
          </Reveal>
        </div>

        {/* 3 Core Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/[0.06]">
          {differentiators.map((d, idx) => {
            const Icon = d.icon;
            return (
              <Reveal key={idx} delay={0.1 * idx} className="h-full">
                <Card3D intensity={8} className="h-full">
                  <div className="h-full flex items-start gap-4 p-6 rounded-2xl bg-surface/60 border border-surface-border">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-ember/30 flex items-center justify-center text-ember shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold text-smoke-white mb-2">
                        {d.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-ash leading-relaxed font-sans">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
