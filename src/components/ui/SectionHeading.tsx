import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  gradientWord?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  // If gradientWord is provided, highlight it in the title
  let renderedTitle: React.ReactNode = title;
  if (gradientWord && title.includes(gradientWord)) {
    const parts = title.split(gradientWord);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="text-gradient-ember">{gradientWord}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignClasses[align],
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4">
          <Badge dot variant="ember">
            {eyebrow}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-smoke-white leading-[1.15]">
        {renderedTitle}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
