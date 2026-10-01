"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Exact hardware mouse position (ZERO LAG)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-crisp high-stiffness spring for outer halo (zero perceptible drag)
  const auraX = useSpring(mouseX, { damping: 36, stiffness: 850, mass: 0.02 });
  const auraY = useSpring(mouseY, { damping: 36, stiffness: 850, mass: 0.02 });

  useEffect(() => {
    // Only enable on precise pointing devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("custom-cursor-enabled");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("[role='button']") ||
        target.closest(".interactive") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* 1. Fast, responsive flame aura ring (tracks tightly with zero perceptible lag) */}
      <motion.div
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 38 : isClicking ? 18 : 26,
          height: isHovered ? 38 : isClicking ? 18 : 26,
          backgroundColor: isHovered
            ? "rgba(242, 102, 10, 0.18)"
            : "rgba(255, 138, 30, 0.08)",
          borderColor: isHovered
            ? "rgba(250, 204, 21, 0.95)"
            : "rgba(242, 102, 10, 0.55)",
          boxShadow: isHovered
            ? "0 0 16px rgba(250, 204, 21, 0.5)"
            : "0 0 8px rgba(242, 102, 10, 0.25)",
        }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="rounded-full border backdrop-blur-[0.5px] pointer-events-none"
      />

      {/* 2. Instant Zero-Lag Hardware Center Ember Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovered ? 1.3 : 1,
          backgroundColor: isHovered ? "#FACC15" : "#FF8A1E",
        }}
        transition={{ duration: 0.08 }}
        className="w-1.5 h-1.5 rounded-full border border-white shadow-[0_0_8px_#F2660A] pointer-events-none"
      />
    </div>
  );
}
