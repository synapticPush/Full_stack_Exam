"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "emberGlow";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2 focus:ring-offset-darkbase active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group select-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-ember via-flame to-gold text-darkbase font-bold shadow-ember hover:shadow-ember-lg hover:brightness-110",
    secondary:
      "bg-surface text-smoke hover:bg-surface-hover hover:text-white border border-surface-border hover:border-ember/40",
    outline:
      "bg-transparent text-smoke-white border border-ember/30 hover:border-ember hover:bg-ember/10 hover:shadow-ember-sm",
    ghost: "bg-transparent text-ash-light hover:text-smoke-white hover:bg-surface/50",
    emberGlow:
      "bg-surface text-white border border-ember/50 shadow-ember hover:bg-ember hover:text-darkbase hover:shadow-ember-lg",
  };

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon && <span className="transition-transform group-hover:-translate-x-0.5">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="transition-transform group-hover:translate-x-0.5">{rightIcon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} prefetch={true} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
