"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-charcoal/30">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-ember via-amber to-flame shadow-[0_0_12px_rgba(242,102,10,0.8),0_0_24px_rgba(250,204,21,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
}
