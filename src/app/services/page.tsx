"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bot, Code2, Layers, BarChart3, Smartphone, Cpu, Cloud, ShieldCheck, CheckCircle2, ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/data/services";
import { CTASection } from "@/components/sections/CTASection";

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Code2,
  Layers,
  BarChart3,
  Smartphone,
  Cpu,
  Cloud,
  ShieldCheck,
};

const FAQS = [
  {
    q: "How fast can The Angaar Labs ship our initial system or MVP?",
    a: "Our typical MVP delivery sprint spans 3 to 5 weeks from initial architecture sign-off. We focus strictly on high-impact core features, sub-second latency, and production-ready deployments.",
  },
  {
    q: "How do you handle multi-agent AI hallucinations and reliability?",
    a: "We implement strict deterministic guardrails, structured JSON output validation via Zod, hierarchical supervisor-agent verifications, and ground truth RAG retrieval checks before executing any action.",
  },
  {
    q: "Do we own 100% of the source code and IP?",
    a: "Yes. All intellectual property, source repositories, deployment scripts, and architectural documentation are fully transferred and owned by your company upon milestone completion.",
  },
  {
    q: "What is your engagement model?",
    a: "We work on fixed-scope, outcome-based project sprints or dedicated monthly engineering retainers with senior architects embedded into your product cycles.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities & Architecture"
            title="8 Core Engineering Disciplines"
            gradientWord="8 Core Engineering"
            subtitle="Explore our comprehensive studio capabilities — from autonomous multi-agent pipelines to distributed high-throughput web backends."
          />
        </Reveal>

        {/* Services List */}
        <div className="flex flex-col gap-12 sm:gap-16 mb-24">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] || Code2;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 p-8 sm:p-12 rounded-3xl glass-panel glass-panel-hover relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Title, Overview */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-surface border border-ember/30 flex items-center justify-center text-ember shadow-ember">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-gold uppercase tracking-widest font-semibold">
                        SERVICE #{service.number}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-display font-bold text-smoke-white mb-4">
                      {service.title}
                    </h2>

                    <p className="text-base text-ash leading-relaxed font-sans mb-6">
                      {service.fullDesc}
                    </p>

                    <div className="p-3.5 rounded-xl bg-ember/10 border border-ember/30 text-xs font-mono text-ember-light mb-6">
                      <span className="font-bold text-gold">Key Advantage:</span> {service.highlight}
                    </div>

                    <Button
                      href="/contact"
                      size="sm"
                      variant="primary"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Inquire About {service.title}
                    </Button>
                  </div>

                  {/* Right Column: Deliverables & Tech Stack */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full bg-surface/50 p-6 sm:p-8 rounded-2xl border border-surface-border">
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-widest text-ash-dark mb-4">
                        Key Deliverables & Specifications
                      </h3>
                      <ul className="flex flex-col gap-3 mb-6">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-sm text-smoke-white font-sans">
                            <CheckCircle2 className="w-4 h-4 text-ember shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06]">
                      <span className="text-[11px] font-mono uppercase text-ash-dark block mb-2">
                        Primary Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] text-smoke-white border border-white/[0.05]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Clear Answers, Zero Jargon"
            gradientWord="Clear Answers"
            subtitle="Everything you need to know about partnering with The Angaar Labs."
            className="mb-10"
          />

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-surface/70 border border-surface-border overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base font-display font-bold text-smoke-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-ember shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-ash leading-relaxed font-sans border-t border-white/[0.04] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <CTASection />
    </div>
  );
}
