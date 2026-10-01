"use client";

import React from "react";
import { ArrowRight, Flame, Mail } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <Container>
        <Reveal>
          <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-b from-surface to-surface-subtle border border-ember/30 overflow-hidden shadow-ember-lg text-center flex flex-col items-center">
            {/* Background glowing flare */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-ember/25 blur-[90px] rounded-full pointer-events-none" />

            <div className="w-14 h-14 rounded-2xl bg-surface border border-ember/40 flex items-center justify-center text-ember shadow-ember mb-6">
              <Flame className="w-7 h-7 text-ember" />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-gold font-semibold mb-3">
              Ready to Accelerate Your Vision?
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-smoke-white tracking-tight max-w-3xl leading-tight mb-6">
              Let&apos;s Build a System That Sets Your Industry on{" "}
              <span className="text-gradient-ember">Fire.</span>
            </h2>

            <p className="text-base sm:text-lg text-ash max-w-2xl mb-10 leading-relaxed font-sans">
              Whether you need an autonomous agent pipeline, a flagship ecommerce experience, or a scalable SaaS backend — our team is ready to execute.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto shadow-ember-lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Start a Project Inquiry
              </Button>

              <Button
                href="mailto:hello@theangaarlabs.in"
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                leftIcon={<Mail className="w-4 h-4 text-ember" />}
              >
                hello@theangaarlabs.in
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-ash-dark">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Currently accepting select Q4 & 2026 client partnerships</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
