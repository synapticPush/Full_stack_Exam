"use client";

import React from "react";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Card3D } from "../ui/Card3D";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Scoping",
    icon: Search,
    desc: "We dissect your product vision with surgical precision. User flows, API contracts, latency budgets, and delivery roadmaps are defined before coding.",
    deliverable: "Architecture Blueprint & Tech Stack Spec",
  },
  {
    step: "02",
    title: "Design & Motion Prototyping",
    icon: PenTool,
    desc: "A bespoke design system tailored to your brand. 60fps micro-animations, glassmorphic tokens, and responsive wireframes built for high conversion.",
    deliverable: "Figma Component Library & Interactive Prototype",
  },
  {
    step: "03",
    title: "Rapid Sprint Engineering",
    icon: Code,
    desc: "Sprint-based full-stack execution with Next.js, Node.js, and AI pipelines. Weekly live Loom demos and GitHub milestone updates.",
    deliverable: "Production-Grade Codebase with E2E Tests",
  },
  {
    step: "04",
    title: "Deployment & Scaling",
    icon: Rocket,
    desc: "Containerized deployment on AWS/GCP, auto-scaling Kubernetes configuration, continuous monitoring, and post-launch conversion tuning.",
    deliverable: "Zero-Downtime Deployment & Observability",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 sm:py-32 relative">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Engineering Process"
            title="From Idea to Production in 4 Sprints"
            gradientWord="4 Sprints"
            subtitle="A transparent, battle-tested execution pipeline designed to eliminate engineering friction and hit deadlines without failure."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={idx} delay={0.08 * idx} className="h-full">
                <Card3D intensity={10} className="h-full">
                  <div className="h-full flex flex-col justify-between p-7 rounded-2xl glass-panel glass-panel-hover relative overflow-hidden group">
                    {/* Step Watermark */}
                    <span className="absolute -top-4 -right-2 font-display font-extrabold text-7xl text-white/[0.03] group-hover:text-ember/[0.08] transition-colors pointer-events-none select-none">
                      {step.step}
                    </span>

                    <div>
                      <div className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-ember mb-6 group-hover:bg-ember group-hover:text-base group-hover:border-ember transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs font-semibold text-ember">
                          STAGE {step.step}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-smoke-white mb-3">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-ash leading-relaxed font-sans mb-6">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06]">
                      <span className="text-[10px] font-mono uppercase text-ash-dark block mb-1">
                        Deliverable:
                      </span>
                      <span className="text-xs font-mono text-smoke-white font-medium">
                        {step.deliverable}
                      </span>
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
