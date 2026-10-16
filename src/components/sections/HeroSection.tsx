import React from "react";
import { CheckerDivider } from "@/components/common/CheckerDivider";
import { MarqueeTicker } from "@/components/common/MarqueeTicker";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-surface pt-10 pb-16 overflow-hidden">
      {/* Checkerboard Accent Top Track */}
      <CheckerDivider variant="checker" height="h-3" opacity="opacity-40" className="mb-8" />

      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter flex flex-col items-center text-center relative z-10">
        {/* Narrative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary-container shadow-[2px_2px_0px_#1a3a2f] border border-primary-container/20 mb-6">
          <span className="text-secondary text-sm">✦</span>
          <span className="font-label-stamp text-label-stamp tracking-wider uppercase">
            EST. 2024 • INDONESIA &amp; REMOTE — ARCHITECTING SCALE &amp; POLISHING PIXELS
          </span>
          <span className="text-secondary text-sm">✦</span>
        </div>

        {/* Clear, Bold Display Typography */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <h1 className="font-display-hero text-display-hero uppercase tracking-tight text-primary-container text-5xl sm:text-7xl lg:text-[96px] lg:leading-[92px]">
            FULL STACK. DIGITAL CRAFT.
          </h1>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 sm:w-10 bg-secondary"></span>
            <span className="font-headline-sm uppercase tracking-widest text-secondary font-bold text-sm sm:text-lg">
              Dento Wahyu &bull; Design-Driven Engineer
            </span>
            <span className="h-[2px] w-6 sm:w-10 bg-secondary"></span>
          </div>

          {/* Hero Subhead */}
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mt-6">
            Full-Stack Software Engineer bridging robust backend architectures with refined
            UI/UX design. Building fast, scalable, and visually intuitive digital products from
            concept to deployment.
          </p>

          {/* Call-to-Actions (Cleanly placed right under the text) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              className="gap-2"
            >
              <span>View Work</span>
              <Icon name="arrow_forward" size={16} />
            </Button>

            <Button
              href="#story"
              variant="surface"
              size="lg"
              className="gap-2"
            >
              <span>Read Story</span>
              <Icon name="menu_book" size={16} />
            </Button>
          </div>

          {/* Quick Highlight Pills (Clean, crisp, no blurry AI images) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-surface-bright rounded-full border border-primary-container/20 shadow-[2px_2px_0px_#1a3a2f] text-label-code text-xs font-label-code text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>AVAILABLE FOR ROLES &amp; CONTRACTS</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-surface-bright rounded-full border border-primary-container/20 shadow-[2px_2px_0px_#1a3a2f] text-label-code text-xs font-label-code text-on-surface-variant">
              <span className="text-secondary font-bold">⚡</span>
              <span>NEXT.JS • TYPESCRIPT • GOLANG • NODE</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-surface-bright rounded-full border border-primary-container/20 shadow-[2px_2px_0px_#1a3a2f] text-label-code text-xs font-label-code text-on-surface-variant">
              <span className="text-secondary font-bold">📍</span>
              <span>JAKARTA &amp; REMOTE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <MarqueeTicker className="mt-14" />
    </section>
  );
};
