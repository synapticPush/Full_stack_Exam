import React from "react";
import Link from "next/link";
import { Flame, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center relative py-20">
      <div className="absolute inset-0 bg-radial-ember pointer-events-none" />
      <Container className="relative z-10 text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-surface border border-ember/30 flex items-center justify-center shadow-ember mb-6">
          <Flame className="w-8 h-8 text-ember animate-bounce" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-ember-light mb-2">
          404 — System Out of Bounds
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-bold text-smoke-white tracking-tight mb-4">
          Vector Lost in Space
        </h1>
        <p className="text-ash max-w-md text-base sm:text-lg mb-8">
          The page or system pipeline you are looking for does not exist or has been refactored into a higher dimension.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Return to Mission Control
          </Button>
          <Button href="/work" variant="outline">
            Explore Portfolio
          </Button>
        </div>
      </Container>
    </div>
  );
}
