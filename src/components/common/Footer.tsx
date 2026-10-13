import React from "react";
import Image from "next/image";
import { FOOTER_ARCHITECTURE_LINKS, SOCIAL_LINKS } from "@/constants/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary-container text-surface-container-low border-t-[1.5px] border-primary-container">
      {/* Top Tagline Ribbon */}
      <div className="w-full bg-secondary py-1.5 text-center font-label-code text-label-code text-on-secondary tracking-widest uppercase border-b border-primary-container shadow-inner">
        Craftsmanship • Resilience • Architectural Depth • Est. 2024
      </div>

      <div className="w-full max-w-7xl mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-gutter">
          {/* Identity Column */}
          <div className="md:col-span-6 flex flex-col gap-space-sm">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-surface-container-high p-1 shadow-sm border border-primary-container">
                <Image
                  src="/assets/images/brand-symbol.svg"
                  alt="Dento Wahyu Brand Mark"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-headline-md text-headline-md uppercase tracking-tight text-surface-bright">
                Dento Wahyu
              </span>
              <span className="font-label-stamp text-label-stamp uppercase px-2 py-0.5 bg-surface-container-highest text-primary-container border border-surface-dim shadow-sm">
                Full-Stack
              </span>
            </div>
            <p className="font-body-md text-body-md text-surface-container-high max-w-md leading-relaxed">
              Design-Driven Full-Stack Engineer operating at the intersection of robust system
              architecture with Golang &amp; Node.js, and high-performance interfaces with Next.js.
            </p>
            <div className="font-label-code text-label-code text-primary-fixed-dim mt-space-sm flex items-center">
              <span className="inline-block mr-2">&gt;</span>Available for select
              contract engagements &amp; advisory
            </div>
          </div>

          {/* Architecture Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-label-stamp text-label-stamp uppercase tracking-widest text-surface-container-highest mb-2 border-b border-surface-container-highest/20 pb-1">
              Architecture
            </span>
            {FOOTER_ARCHITECTURE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body-sm text-body-sm text-surface-container-high hover:text-secondary-fixed transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Dispatch Info */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-label-stamp text-label-stamp uppercase tracking-widest text-surface-container-highest mb-2 border-b border-surface-container-highest/20 pb-1">
              Dispatch
            </span>
            <a
              href="mailto:wahyudento08@gmail.com"
              className="font-label-code text-label-code text-secondary-fixed hover:underline"
            >
              wahyudento08@gmail.com
            </a>
            <span className="font-body-sm text-body-sm text-surface-container-high mt-1">
              Indonesia • Remote
            </span>

            <div className="flex items-center gap-4 mt-space-sm">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-stamp text-label-stamp uppercase text-surface-container-highest hover:text-secondary-fixed transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Ref */}
        <div className="mt-space-xl pt-space-lg border-t border-surface-container-highest/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-label-code text-label-code text-surface-container-high">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
            <span>© 2026 Dento Wahyu. Printed in digital medium.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
