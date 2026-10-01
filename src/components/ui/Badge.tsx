import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "ember" | "gold" | "surface" | "outline";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "ember",
  dot = false,
  ...props
}: BadgeProps) {
  const variants = {
    ember:
      "bg-ember/10 text-ember-light border border-ember/30 shadow-[0_0_12px_rgba(242,102,10,0.15)]",
    gold: "bg-gold/10 text-gold border border-gold/30 shadow-[0_0_12px_rgba(250,204,21,0.15)]",
    surface: "bg-surface text-ash-light border border-surface-border",
    outline: "bg-transparent text-ash-light border border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide font-medium uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
      )}
      {children}
    </span>
  );
}
