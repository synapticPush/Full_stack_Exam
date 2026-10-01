import React from "react";
import Image from "next/image";
import { ShieldCheck, Flame, Zap, Target, Award, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TEAM_MEMBERS } from "@/lib/data/team";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "About Us",
  description: "Learn about The Angaar Labs engineering philosophy, core team, and uncompromising mission to build world-class AI software systems.",
};

const VALUES = [
  {
    icon: Flame,
    title: "Relentless Craft",
    desc: "We believe average is failure. From 60fps micro-animations to sub-100ms API endpoints, every line of code must radiate excellence.",
  },
  {
    icon: ShieldCheck,
    title: "Architectural Integrity",
    desc: "No hacks, no hidden technical debt. We architect systems designed to handle 10x traffic spikes on day one with zero breaking changes.",
  },
  {
    icon: Zap,
    title: "Zero-Handoff Velocity",
    desc: "We eliminate bureaucratic agency bloat. You collaborate directly with senior architects who write the code and ship the systems.",
  },
  {
    icon: Target,
    title: "AI-First Pragmatism",
    desc: "We don't chase shiny AI gimmicks. We engineer deterministic, self-healing agent pipelines that solve high-stakes business bottlenecks.",
  },
];

const CULTURE_POINTS = [
  {
    title: "Sprint-Based Transparency",
    desc: "Weekly live demos, Loom walkthroughs, and open GitHub repositories. You always know what is being built in real time.",
  },
  {
    title: "Latency Obsessed",
    desc: "Every database query, bundle chunk, and LLM prompt is profiled to meet strict sub-second performance budgets.",
  },
  {
    title: "Outcome-Driven Ownership",
    desc: "We celebrate conversion jumps, uptime records, and client revenue growth — not billable hours logged.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Who We Are"
            title="We Are The Angaar Labs"
            gradientWord="The Angaar Labs"
            subtitle="An AI-first software engineering studio born to build what others consider impossible or too complex."
          />
        </Reveal>

        {/* Studio Manifesto Banner */}
        <Reveal delay={0.1}>
          <div className="p-8 sm:p-12 rounded-3xl glass-panel relative overflow-hidden mb-24">
            <div className="absolute top-0 right-0 w-80 h-80 bg-ember/10 blur-[100px] pointer-events-none rounded-full" />
            <div className="max-w-3xl">
              <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-3">
                Our Manifesto
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-smoke-white leading-tight mb-6">
                &ldquo;We don&apos;t sell hours. We sell outcomes, architectural speed, and digital products that dominate.&rdquo;
              </h2>
              <p className="text-base sm:text-lg text-ash leading-relaxed font-sans">
                The Angaar Labs was founded on a simple realization: traditional software agencies are slow, bloated, and terrified of deep AI integration. We operate like an elite SWAT team — pairing world-class creative UI motion with battle-hardened distributed backend engineering.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Core Values Grid */}
        <div className="mb-24">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Core Principles"
              title="The Values That Guide Every Commit"
              gradientWord="Every Commit"
              subtitle="Our engineering standards are non-negotiable."
              className="mb-12"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <Reveal key={idx} delay={0.08 * idx}>
                  <div className="h-full p-7 rounded-2xl bg-surface/80 border border-surface-border hover:border-ember/40 hover:bg-surface-hover transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-surface-subtle border border-ember/30 flex items-center justify-center text-ember mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-smoke-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ash leading-relaxed font-sans">
                      {val.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Engineering Team */}
        <div className="mb-24">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership & Architects"
              title="Built by Engineers, Led by Builders"
              gradientWord="Led by Builders"
              subtitle="Meet the core architects behind our flagship client systems."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <Reveal key={idx} delay={0.08 * idx}>
                <div className="h-full flex flex-col justify-between p-6 rounded-2xl glass-panel glass-panel-hover">
                  <div>
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-5 bg-surface-subtle">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-display font-bold text-smoke-white">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-ember mb-3">
                      {member.role}
                    </div>

                    <p className="text-xs text-ash leading-relaxed mb-4 font-sans">
                      {member.bio}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.specialty.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-ash-light"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06] text-ash">
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-smoke-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-smoke-white transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-smoke-white transition-colors"
                      >
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Culture & Standards */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface/50 border border-white/[0.06]">
          <SectionHeading
            align="left"
            eyebrow="Our Culture"
            title="How We Work Together"
            gradientWord="How We Work"
            subtitle="Clear communication, rapid iteration, and zero administrative waste."
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CULTURE_POINTS.map((cp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-subtle/80 border border-white/[0.04]"
              >
                <h4 className="text-base font-display font-bold text-smoke-white mb-2">
                  {cp.title}
                </h4>
                <p className="text-xs sm:text-sm text-ash leading-relaxed font-sans">
                  {cp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <CTASection />
    </div>
  );
}
