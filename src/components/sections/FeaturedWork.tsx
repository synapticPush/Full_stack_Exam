"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { ProjectCard } from "../work/ProjectCard";
import { PROJECTS } from "@/lib/data/projects";

export function FeaturedWork() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="work" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-ember/10 blur-[140px] pointer-events-none rounded-full" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Selected Case Studies"
              title="Proof in Production"
              gradientWord="Production"
              subtitle="Explore real systems we've architected, shipped, and scaled for enterprise clients."
              className="mb-0"
            />
          </Reveal>

          <Reveal delay={0.2} className="mt-6 md:mt-0">
            <Button
              href="/work"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View All 6 Case Studies
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={0.1 * idx}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
