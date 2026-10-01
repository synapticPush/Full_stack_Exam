"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-surface/40 border-y border-white/[0.05] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gold/10 blur-[130px] pointer-events-none rounded-full" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Client Testimonials"
            title="What Founders & Tech Leaders Say"
            gradientWord="Tech Leaders"
            subtitle="Real feedback from executive leaders whose systems we've architected and scaled."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.id} delay={0.1 * idx}>
              <div className="h-full flex flex-col justify-between p-8 rounded-2xl glass-panel glass-panel-hover relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-ember/10 border border-ember/30 text-ember-light font-semibold">
                      {t.statsHighlight}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-smoke-white leading-relaxed italic mb-8 font-sans">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-ember/40 bg-surface">
                      <Image
                        src={t.avatar}
                        alt={t.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-smoke-white font-display">
                        {t.author}
                      </div>
                      <div className="text-xs text-ash">
                        {t.role} • {t.company}
                      </div>
                    </div>
                  </div>

                  {t.projectSlug && (
                    <Link
                      href={`/work/${t.projectSlug}`}
                      className="p-2 rounded-xl bg-surface-subtle border border-surface-border text-ash hover:text-ember hover:border-ember transition-colors"
                      title="View Case Study"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
