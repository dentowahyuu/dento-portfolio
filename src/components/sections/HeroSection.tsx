import React from "react";
import Image from "next/image";
import { CheckerDivider } from "@/components/common/CheckerDivider";
import { MarqueeTicker } from "@/components/common/MarqueeTicker";
import { Button } from "@/components/ui/Button";

interface HeroSectionProps {
  showIllustration?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  showIllustration = true,
}) => {
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
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Button>

            <Button
              href="#story"
              variant="surface"
              size="lg"
              className="gap-2"
            >
              <span>Read Story</span>
              <span className="material-symbols-outlined text-sm">menu_book</span>
            </Button>
          </div>
        </div>

        {/* Focal Workstation Image (Framed cleanly beneath the text, NO overlapping negative margins) */}
        {showIllustration && (
          <div className="mt-12 w-full max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-[6px_6px_0px_#1a3a2f] bg-surface-container-lowest border-2 border-primary-container">
              {/* Retro Window Titlebar */}
              <div className="bg-surface-container-high px-4 py-2.5 border-b-2 border-primary-container flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary-container border border-primary-container/30"></span>
                  <span className="w-3 h-3 rounded-full bg-[#f4b400] border border-primary-container/30"></span>
                  <span className="w-3 h-3 rounded-full bg-[#0f9d58] border border-primary-container/30"></span>
                  <span className="ml-2 font-label-code text-xs text-on-surface-variant font-bold tracking-wide">
                    workstation-topology.sh
                  </span>
                </div>
                <span className="font-label-stamp text-[10px] uppercase tracking-widest text-secondary font-bold bg-surface-bright px-2 py-0.5 rounded border border-primary-container/20">
                  EST. 2024
                </span>
              </div>

              {/* Workstation Illustration Container */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-surface-container">
                <Image
                  src="/assets/images/workstation-hero.png"
                  alt="Isometric developer workstation illustration with retro computer and architecture blocks"
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover transform hover:scale-[1.01] transition-transform duration-500 block"
                  priority
                />

                {/* Active Status Badge Overlay */}
                <div className="absolute bottom-4 left-4 bg-primary-container/95 text-surface-bright px-3 py-1 rounded-full text-label-code font-label-code backdrop-blur-sm flex items-center gap-2 shadow-sm border border-primary-fixed-dim/20">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                  <span>WORKSTATION_STATE: ACTIVE // REMOTE_DEV</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Marquee Ticker */}
      <MarqueeTicker className="mt-16" />
    </section>
  );
};
