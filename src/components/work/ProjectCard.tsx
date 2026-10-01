"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ProjectData } from "@/lib/data/projects";
import { Badge } from "../ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectData;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div className="group h-full flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover overflow-hidden transition-all duration-300">
      {/* Image Container with Parallax Hover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-subtle">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-80" />

        {/* Floating Industry Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="surface" className="backdrop-blur-md bg-base/80 border-white/10">
            {project.industryLabel}
          </Badge>
        </div>

        {/* Live Status Icon */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-base/80 border border-white/10 flex items-center justify-center text-smoke-white group-hover:bg-ember group-hover:text-base group-hover:border-ember transition-all duration-300 shadow-lg">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Project Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-smoke-white group-hover:text-ember-light transition-colors">
              <Link href={`/work/${project.slug}`} className="focus:outline-none">
                {project.title}
              </Link>
            </h3>
            <span className="font-mono text-xs text-ash-dark shrink-0">
              {project.year}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-ash leading-relaxed line-clamp-2 mb-5 font-sans">
            {project.summary}
          </p>
        </div>

        <div>
          {/* Key Metric Highlight */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-3 rounded-xl bg-surface-subtle/80 border border-white/[0.05] flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-ash uppercase">
                {project.metrics[0].label}
              </span>
              <span className="text-xs font-mono font-bold text-gradient-ember">
                {project.metrics[0].value} ({project.metrics[0].change})
              </span>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
            {project.techStack.slice(0, 4).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-ash-light border border-white/[0.04]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-ash-dark">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
