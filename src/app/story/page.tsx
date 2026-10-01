import React from "react";
import { Flame, Sparkles, Rocket, Trophy, Cpu, Code2, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Our Story",
  description: "The journey, origins, and bold vision of The Angaar Labs from high-stakes hackathon roots to an AI engineering studio.",
};

const TIMELINE_EVENTS = [
  {
    year: "2023",
    tag: "The Spark & Inception",
    title: "Born in 48-Hour High-Stakes Hackathons",
    icon: Flame,
    desc: "The Angaar Labs was born out of intense competitive hackathons where our founding engineers repeatedly dominated national leaderboards with extreme speed and zero-compromise motion UI.",
    milestone: "Won 3 Consecutive National Full-Stack Hackathons",
  },
  {
    year: "2024",
    tag: "Commercial Transition",
    title: "Taking The Angaar Craft to Enterprise Scale",
    icon: Code2,
    desc: "Startups and venture-backed founders reached out to turn our hackathon velocity into production reality. We shipped our first 15 client systems across SaaS, luxury retail, and fintech.",
    milestone: "15 Systems Shipped & Zero Production Downtime",
  },
  {
    year: "2025",
    tag: "The AI Revolution",
    title: "Pioneering Autonomous Multi-Agent Architectures",
    icon: Cpu,
    desc: "Recognizing that LLMs were shifting from simple text boxes to autonomous operational agents, we re-architected our entire studio stack around agentic supervision, RAG pipelines, and self-healing cloud infrastructure.",
    milestone: "Shipped IntelliOps & LexAgent with 90%+ Automation Rates",
  },
  {
    year: "2026 & Beyond",
    tag: "The Future",
    title: "Zero to 100% Autonomous Product Execution",
    icon: Rocket,
    desc: "Our vision is to build software systems that don't merely assist humans, but autonomously operate, self-tune, and evolve to meet market demands in real time.",
    milestone: "Expanding Global AI Engineering Studio Footprint",
  },
];

export default function StoryPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Our Origins & Vision"
            title="The Story of The Angaar Fire"
            gradientWord="The Angaar Fire"
            subtitle="From late-night code sprints to building mission-critical AI systems for global enterprises."
          />
        </Reveal>

        {/* Narrative Intro */}
        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-base sm:text-lg text-ash leading-relaxed font-sans">
              We started with a fierce belief that software should not be sluggish, generic, or boring. The name <span className="text-ember-light font-semibold">&ldquo;Angaar&rdquo;</span> represents relentless energy, hunger for excellence, and the transformative heat that turns raw code into digital gold.
            </p>
          </div>
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto mb-24">
          {/* Central glowing vertical timeline bar */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-ember via-flame to-gold/30 opacity-40" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {TIMELINE_EVENTS.map((event, idx) => {
              const Icon = event.icon;
              const isEven = idx % 2 === 0;

              return (
                <Reveal key={idx} delay={0.1 * idx}>
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-1/2">
                      <div className="p-8 rounded-3xl glass-panel glass-panel-hover relative overflow-hidden">
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <Badge variant="ember">{event.tag}</Badge>
                          <span className="font-mono text-sm font-bold text-gradient-gold">
                            {event.year}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-display font-bold text-smoke-white mb-3">
                          {event.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-ash leading-relaxed font-sans mb-6">
                          {event.desc}
                        </p>

                        <div className="p-3 rounded-xl bg-surface-subtle/80 border border-white/[0.05] flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-gold shrink-0" />
                          <span className="text-xs font-mono text-smoke-white font-medium">
                            {event.milestone}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Central Icon Node */}
                    <div className="hidden md:flex relative z-10 w-12 h-12 rounded-full bg-surface border-2 border-ember items-center justify-center text-ember shadow-ember shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Empty spacer for grid alignment */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>

      <CTASection />
    </div>
  );
}
