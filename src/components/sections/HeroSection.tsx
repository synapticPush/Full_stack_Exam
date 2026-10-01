"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { EmberHeroCanvas } from "../ui/EmberHeroCanvas";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 overflow-hidden">
      {/* 3D Ember Canvas Background */}
      <EmberHeroCanvas />

      {/* Cyber Grid Mask Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-ember/15 blur-[140px] pointer-events-none rounded-full" />

      <Container className="relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow / Studio Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Badge dot variant="ember" className="px-4 py-1.5 text-xs sm:text-sm">
            AI-First Software Engineering Studio
          </Badge>
        </motion.div>

        {/* Kinetic Headline Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-smoke-white leading-[1.08] max-w-5xl"
        >
          We Build Websites <br className="hidden sm:block" />
          <span className="text-gradient-ember drop-shadow-[0_0_35px_rgba(242,102,10,0.4)]">
            That Stop & Sell.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-base sm:text-xl md:text-2xl text-ash max-w-3xl leading-relaxed font-sans"
        >
          From AI-native backends to pixel-perfect frontends — we own every layer of the stack. Zero to 100% product execution for ambitious brands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            href="/contact"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto text-base shadow-ember-lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Project
          </Button>

          <Button
            href="/work"
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto text-base"
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Live Studio Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 w-full max-w-4xl text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface border border-ember/30 flex items-center justify-center text-ember shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-smoke-white">&lt; 1s LCP</div>
              <div className="text-xs text-ash">Sub-second velocity</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-smoke-white">60 FPS Motion</div>
              <div className="text-xs text-ash">Awwwards-grade craft</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface border border-ember/30 flex items-center justify-center text-ember-light shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-smoke-white">Full-Stack AI</div>
              <div className="text-xs text-ash">Agentic orchestration</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-smoke-white">100% Owned</div>
              <div className="text-xs text-ash">No handoff gaps</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
