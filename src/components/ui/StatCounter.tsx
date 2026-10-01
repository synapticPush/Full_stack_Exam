"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Card3D } from "./Card3D";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  label: string;
  sublabel?: string;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
  label,
  sublabel,
  className,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Ease out quartic
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentVal = easeOut * value;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  const formattedValue =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();

  return (
    <Card3D intensity={6} className="h-full">
      <div
        ref={ref}
        className={cn(
          "h-full flex flex-col items-center sm:items-start p-6 rounded-2xl glass-panel glass-panel-hover",
          className
        )}
      >
        <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient-ember tracking-tight">
          <span>{prefix}</span>
          <span>{formattedValue}</span>
          <span>{suffix}</span>
        </div>
        <div className="mt-2 text-base font-semibold text-smoke-white font-sans">
          {label}
        </div>
        {sublabel && (
          <div className="mt-1 text-xs text-ash font-sans">{sublabel}</div>
        )}
      </div>
    </Card3D>
  );
}
