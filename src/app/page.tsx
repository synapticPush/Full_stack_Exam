import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { IndustryShowcase } from "@/components/sections/IndustryShowcase";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Signature Kinetic Hero with R3F Ember Canvas */}
      <HeroSection />

      {/* 2. Dual-direction Technologies & Industries Marquee */}
      <MarqueeSection />

      {/* 3. Core Capabilities Bento Grid */}
      <ServicesGrid />

      {/* 4. Industries We Transform Grid */}
      <IndustryShowcase />

      {/* 5. Flagship Production Case Studies */}
      <FeaturedWork />

      {/* 6. Why Us & Animated Stat Counters */}
      <StatsSection />

      {/* 7. 4-Stage Engineering Process Timeline */}
      <ProcessTimeline />

      {/* 8. Verified Client Testimonials */}
      <TestimonialsSection />

      {/* 9. Closing Action Banner */}
      <CTASection />
    </div>
  );
}
