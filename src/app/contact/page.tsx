import React from "react";
import { Mail, Clock, ShieldCheck, MapPin, Sparkles, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact & Project Inquiries",
  description: "Start a project with The Angaar Labs. Fast turnaround, sub-4hr response SLA, and direct collaboration with senior full-stack architects.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ember/15 blur-[140px] pointer-events-none rounded-full" />

      <Container>
        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Start a Project"
            title="Let&apos;s Architect Your Next System"
            gradientWord="Architect Your Next System"
            subtitle="Tell us about your technical vision, constraints, and timeline. We respond to all inquiries within 4 hours with an initial architectural perspective."
          />
        </Reveal>

        {/* 2-Column Split: Info / SLA on left, Form on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct info & SLA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-surface/70 border border-surface-border">
                <span className="font-mono text-xs uppercase tracking-widest text-gold font-semibold block mb-4">
                  Direct Studio Reach
                </span>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-ember/30 flex items-center justify-center text-ember shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-ash uppercase">Email Us</div>
                      <a
                        href="mailto:hello@theangaarlabs.in"
                        className="text-sm sm:text-base font-semibold text-smoke-white hover:text-ember transition-colors"
                      >
                        hello@theangaarlabs.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-gold/30 flex items-center justify-center text-gold shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-ash uppercase">Response SLA</div>
                      <div className="text-sm sm:text-base font-semibold text-smoke-white">
                        Under 4 Hours (Mon – Sat)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-ash uppercase">Studio Headquarters</div>
                      <div className="text-sm font-semibold text-smoke-white">
                        Global AI Engineering Studio
                      </div>
                      <div className="text-xs text-ash">
                        Bengaluru • Mumbai • Remote Worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-surface/50 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-ember" />
                  <h3 className="text-base font-display font-bold text-smoke-white">
                    Our Engagement Guarantee
                  </h3>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-ash font-sans">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                    <span>100% IP & Source Code Ownership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                    <span>No Junior Developer Delegations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                    <span>Fixed Scope Milestones & Weekly Walkthroughs</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
