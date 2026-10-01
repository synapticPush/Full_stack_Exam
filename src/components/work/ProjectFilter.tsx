"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const CATEGORIES = [
  { id: "ALL", label: "All Systems" },
  { id: "ECOMMERCE", label: "Luxury E-Commerce" },
  { id: "AI_SYSTEMS", label: "Agentic AI & LLMs" },
  { id: "CRM", label: "FinTech & CRM" },
  { id: "HEALTHCARE", label: "Healthcare & MedTech" },
  { id: "OTHER", label: "EdTech & Platforms" },
];

interface ProjectFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export function ProjectFilter({ selected, onSelect }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
      {CATEGORIES.map((cat) => {
        const isActive = selected === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={cn(
              "px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer focus:outline-none",
              isActive
                ? "bg-gradient-to-r from-ember to-flame text-darkbase font-bold shadow-ember shadow-md scale-105"
                : "bg-surface/80 text-ash-light border border-surface-border hover:border-ember/40 hover:text-smoke-white hover:bg-surface"
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
