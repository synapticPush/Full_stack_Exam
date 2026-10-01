"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
  color: string;
  wobbleSpeed: number;
  wobbleAmp: number;
}

export function EmberHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const colors = [
      "rgba(242, 102, 10, ",  // Primary Ember
      "rgba(255, 138, 30, ",  // Flame
      "rgba(250, 204, 21, ",  // Gold Spark
      "rgba(255, 160, 60, ",  // Bright Amber
    ];

    const particleCount = Math.min(Math.floor(width / 20), 75);
    const particles: Particle[] = [];

    const createParticle = (): Particle => {
      const z = Math.random() * 1.5 + 0.5; // 3D depth layer
      return {
        x: Math.random() * width,
        y: height + Math.random() * 80,
        z,
        size: (Math.random() * 2.2 + 0.8) * z,
        speedX: (Math.random() - 0.5) * 0.6 * z,
        speedY: -(Math.random() * 1.2 + 0.6) * z,
        opacity: Math.random() * 0.6 + 0.3,
        fadeSpeed: (Math.random() * 0.003 + 0.0015) / z,
        color: colors[Math.floor(Math.random() * colors.length)],
        wobbleSpeed: Math.random() * 0.03 + 0.01,
        wobbleAmp: Math.random() * 1.5 + 0.5,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      const p = createParticle();
      p.y = Math.random() * height;
      particles.push(p);
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let tick = 0;
    const render = () => {
      tick++;
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Radial 3D depth lighting following mouse
      const radialGlow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        500
      );
      radialGlow.addColorStop(0, "rgba(242, 102, 10, 0.12)");
      radialGlow.addColorStop(0.5, "rgba(255, 138, 30, 0.03)");
      radialGlow.addColorStop(1, "rgba(12, 10, 9, 0)");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Render 3D embers with depth parallax
      const parallaxOffsetX = ((mouseX / width) - 0.5) * 35;
      const parallaxOffsetY = ((mouseY / height) - 0.5) * 20;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Horizontal sinusoidal wobble for realistic rising ember motion
        p.x += p.speedX + Math.sin(tick * p.wobbleSpeed) * 0.4;
        p.y += p.speedY;
        p.opacity -= p.fadeSpeed;

        if (p.opacity <= 0 || p.y < -30 || p.x < -30 || p.x > width + 30) {
          particles[i] = createParticle();
        }

        const renderX = p.x + parallaxOffsetX * p.z;
        const renderY = p.y + parallaxOffsetY * p.z;

        ctx.beginPath();
        ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(p.opacity, 0)})`;
        ctx.shadowBlur = 12 * p.z;
        ctx.shadowColor = "#F2660A";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-75"
    />
  );
}
