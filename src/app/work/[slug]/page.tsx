import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Layers, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS } from "@/lib/data/projects";
import { CTASection } from "@/components/sections/CTASection";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const projectIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <article className="py-12 sm:py-20">
      <Container>
        {/* Breadcrumbs & Back Link */}
        <div className="flex items-center gap-2 text-xs font-mono text-ash mb-8">
          <Link href="/work" className="hover:text-smoke-white transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Portfolio Work</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-ash-dark" />
          <span className="text-ember-light font-semibold">{project.title}</span>
        </div>

        {/* Hero Headline & Metadata */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge dot variant="ember">
              {project.industryLabel}
            </Badge>
            <span className="text-xs font-mono text-ash">Year: {project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-smoke-white tracking-tight leading-[1.1] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-ash leading-relaxed font-sans">
            {project.tagline}
          </p>

          {/* Quick Client Bar */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-ash-dark uppercase block">Client:</span>
              <span className="text-sm font-semibold text-smoke-white">{project.clientName}</span>
            </div>

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="emberGlow"
                size="sm"
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Visit Live Platform
              </Button>
            )}
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-surface-border shadow-2xl mb-16 bg-surface-subtle">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel text-center flex flex-col items-center justify-center"
            >
              <div className="text-2xl sm:text-4xl font-display font-bold text-gradient-ember mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-smoke-white font-sans">
                {metric.label}
              </div>
              {metric.change && (
                <div className="text-[11px] font-mono text-ash mt-1">
                  {metric.change}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Deep Dive: Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-20">
          {/* Problem */}
          <div className="p-8 sm:p-10 rounded-3xl bg-surface/70 border border-surface-border flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-red-400 font-semibold tracking-wider uppercase block mb-2">
                01. The Challenge & Bottlenecks
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-smoke-white mb-4">
                What Was Broken
              </h2>
              <p className="text-sm sm:text-base text-ash leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="p-8 sm:p-10 rounded-3xl bg-surface/70 border border-ember/30 shadow-ember-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-ember/15 border border-ember/40 flex items-center justify-center text-ember mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-ember-light font-semibold tracking-wider uppercase block mb-2">
                02. The Architectural Solution
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-smoke-white mb-4">
                How We Solved It
              </h2>
              <p className="text-sm sm:text-base text-ash leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack & Result */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="font-mono text-xs text-gold font-semibold tracking-wider uppercase block mb-2">
                03. Measurable Production Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-smoke-white mb-4">
                The Final Result
              </h2>
              <p className="text-sm sm:text-base text-ash leading-relaxed font-sans mb-6">
                {project.result}
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-ash-dark uppercase tracking-wider block mb-3">
                Technologies Utilized
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-surface-subtle border border-surface-border text-xs font-mono text-smoke-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-display font-bold text-smoke-white mb-6">
              Visual System & Interfaces
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-surface-border bg-surface"
                >
                  <Image
                    src={img}
                    alt={`${project.title} Interface ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Project Footer Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface/50 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase text-ash-dark block mb-1">
              Next Case Study:
            </span>
            <h4 className="text-xl font-display font-bold text-smoke-white">
              {nextProject.title}
            </h4>
          </div>

          <Button
            href={`/work/${nextProject.slug}`}
            variant="primary"
            size="md"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
          >
            Read Next Case Study
          </Button>
        </div>
      </Container>

      <CTASection />
    </article>
  );
}
