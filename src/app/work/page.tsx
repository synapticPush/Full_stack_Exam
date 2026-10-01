"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ProjectFilter } from "@/components/work/ProjectFilter";
import { PROJECTS } from "@/lib/data/projects";
import { CTASection } from "@/components/sections/CTASection";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.industry === selectedCategory);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Systems Architected for Market Dominance"
            gradientWord="Market Dominance"
            subtitle="Explore our production case studies spanning agentic AI, luxury ecommerce, fintech wealth engines, and clinical healthcare systems."
          />
        </Reveal>

        {/* Category Chips */}
        <Reveal delay={0.1}>
          <ProjectFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </Reveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={0.08 * idx}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-surface/40 rounded-2xl border border-surface-border">
            <p className="text-ash font-sans">
              No systems found under this category filter.
            </p>
          </div>
        )}
      </Container>

      <CTASection />
    </div>
  );
}
