"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glow?: boolean;
}

export function Card3D({
  children,
  className,
  intensity = 15,
  glow = true,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-intensity to +intensity)
    const rY = ((mouseX / width) - 0.5) * intensity * 2;
    const rX = -(((mouseY / height) - 0.5) * intensity * 2);

    setRotateX(rX);
    setRotateY(rY);
    setGlowPos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 260,
          mass: 0.15,
        }}
        className={cn(
          "transform-style-3d relative w-full h-full rounded-2xl transition-shadow duration-300",
          className
        )}
      >
        {/* Dynamic 3D lighting sheen */}
        {glow && isHovered && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl z-20 opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 280px at ${glowPos.x}% ${glowPos.y}%, rgba(255, 138, 30, 0.25), transparent 70%)`,
            }}
          />
        )}

        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
