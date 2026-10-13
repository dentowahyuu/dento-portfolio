import React from "react";
import Image from "next/image";
import { CheckerDivider } from "@/components/common/CheckerDivider";
import { ARCHITECTURAL_PILLARS } from "@/constants/projects";
import { Button } from "@/components/ui/Button";

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-20 relative" id="story">
      {/* Checkerboard Ribbon Separator */}
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter mb-14">
        <CheckerDivider variant="ribbon" height="h-2" />
      </div>

      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        {/* Two Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest text-primary-container rounded font-label-stamp text-label-stamp uppercase tracking-widest w-fit border border-primary-container/20 shadow-sm">
              <span>[DOSSIER: PROFILE]</span>
              <span>•</span>
              <span className="text-secondary font-bold">ABOUT ME</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-primary-container leading-none text-3xl sm:text-4xl lg:text-5xl">
              Design-Driven Full-Stack Engineer
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              Operating at the intersection of robust system architecture and seamless
              user experiences. Over the past 2+ years, I&apos;ve been engineering
              end-to-end applications from resilient APIs and database structures with
              Golang &amp; Node.js, to high-performance web interfaces with Next.js and
              TypeScript.
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              My focus is simple: writing clean, scalable code that powers reliable
              software without compromising visual elegance, intuitive design, and
              accessibility.
            </p>

            {/* Action Buttons: Get In Touch & Download CV */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#contact" variant="primary" size="md">
                Get In Touch
              </Button>
              <Button
                href="/Resume_Dento_Wahyu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Resume_Dento_Wahyu.pdf"
                variant="surface"
                size="md"
              >
                Download CV
              </Button>
            </div>

            {/* Metrics Pill Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-bright rounded-full shadow-[2px_2px_0px_#1a3a2f] border border-primary-container/20">
                <span className="material-symbols-outlined text-secondary text-lg">
                  history_edu
                </span>
                <span className="font-headline-sm text-headline-sm uppercase text-primary-container text-sm sm:text-base">
                  2+ Years Engineering
                </span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-surface-bright rounded-full shadow-[2px_2px_0px_#1a3a2f] border border-primary-container/20">
                <span className="material-symbols-outlined text-secondary text-lg">
                  terminal
                </span>
                <span className="font-headline-sm text-headline-sm uppercase text-primary-container text-sm sm:text-base">
                  Golang &amp; Node.js
                </span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-surface-bright rounded-full shadow-[2px_2px_0px_#1a3a2f] border border-primary-container/20">
                <span className="material-symbols-outlined text-secondary text-lg">
                  palette
                </span>
                <span className="font-headline-sm text-headline-sm uppercase text-primary-container text-sm sm:text-base">
                  Next.js &amp; Figma
                </span>
              </div>
            </div>
          </div>

          {/* Right System Terminal & Portrait Card */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Portrait Component */}
            <div className="bg-surface-bright p-5 rounded-2xl shadow-[4px_4px_0px_#1a3a2f] border border-primary-container/20 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-36 h-36 flex-shrink-0 rounded-xl overflow-hidden shadow-[2px_2px_0px_#1a3a2f] bg-surface-container border border-primary-container/20">
                <Image
                  src="/assets/images/denn.png"
                  alt="Dento Wahyu portrait"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-1 text-center sm:text-left">
                <span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary font-bold">
                  SPECS • FIELD PROFILE
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-primary-container">
                  Dento Wahyu
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Design-Driven Full-Stack Engineer. Building fast, scalable, and visually intuitive digital products from concept to deployment.
                </p>
                <div className="mt-2 inline-flex items-center justify-center sm:justify-start gap-1.5 text-label-code font-label-code text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>STATUS: BUILDING &amp; DESIGNING</span>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Card */}
            <div className="bg-primary-container text-surface-bright rounded-2xl shadow-[4px_4px_0px_#1a3a2f] border border-primary-container overflow-hidden flex flex-col font-label-code text-label-code">
              {/* Terminal Header */}
              <div className="bg-tertiary-container px-4 py-2.5 flex items-center justify-between border-b border-primary/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
                  <span className="w-3 h-3 rounded-full bg-surface-dim"></span>
                  <span className="w-3 h-3 rounded-full bg-surface-container-high"></span>
                  <span className="ml-2 text-surface-container-high text-xs tracking-wide">
                    dento@workstation ~ /core-values.sh
                  </span>
                </div>
                <span className="text-primary-fixed-dim text-[11px]">
                  zsh (node v22)
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 flex flex-col gap-2 leading-relaxed">
                <div className="text-surface-container-high">
                  <span className="text-secondary-fixed-dim font-bold">const</span>{" "}
                  engineer = &#123;
                </div>
                <div className="pl-4 text-surface-container-low">
                  <span>discipline:</span>{" "}
                  <span className="text-tertiary-fixed">&quot;Design-Driven Full-Stack&quot;</span>,
                </div>
                <div className="pl-4 text-surface-container-low">
                  <span>experience:</span>{" "}
                  <span className="text-secondary-container">&quot;2+ years&quot;</span>,
                </div>
                <div className="pl-4 text-surface-container-low">
                  <span>backend:</span> [<span className="text-tertiary-fixed">&quot;Golang&quot;</span>, <span className="text-tertiary-fixed">&quot;Node.js&quot;</span>, <span className="text-tertiary-fixed">&quot;PostgreSQL&quot;</span>],
                </div>
                <div className="pl-4 text-surface-container-low">
                  <span>frontend:</span> [<span className="text-tertiary-fixed">&quot;Next.js&quot;</span>, <span className="text-tertiary-fixed">&quot;TypeScript&quot;</span>, <span className="text-tertiary-fixed">&quot;Tailwind&quot;</span>],
                </div>
                <div className="pl-4 text-surface-container-low">
                  <span>designEthos:</span> [
                  <span className="text-tertiary-fixed">&quot;clean code&quot;</span>,{" "}
                  <span className="text-tertiary-fixed">&quot;visual elegance&quot;</span>,{" "}
                  <span className="text-tertiary-fixed">&quot;accessibility&quot;</span>]
                </div>
                <div className="text-surface-container-high">&#125;;</div>

                <div className="mt-2 text-primary-fixed-dim flex items-center gap-1">
                  <span>&gt; engineer.buildReliableSystem()</span>
                  <span className="animate-pulse">_</span>
                </div>

                <div className="text-[11px] text-surface-variant bg-tertiary/40 p-2.5 rounded mt-2 border border-primary-fixed-dim/10">
                  [OK] Systems verified. Robust API &amp; seamless UI operational.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Horizontal Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16" id="stack">
          {ARCHITECTURAL_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-surface-bright p-6 rounded-2xl shadow-[3px_3px_0px_#1a3a2f] border border-primary-container/20 flex flex-col gap-3 hover:-translate-y-1 transition-transform"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-headline-sm text-headline-sm shadow-sm ${
                  pillar.accentColor === "secondary"
                    ? "bg-secondary text-on-secondary"
                    : "bg-primary-container text-surface-bright"
                }`}
              >
                {pillar.number}
              </div>

              <h3 className="font-headline-md text-headline-md uppercase text-primary-container">
                {pillar.title}
              </h3>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>

              <div className="mt-auto pt-4 flex items-center gap-1.5 text-secondary font-label-stamp text-label-stamp uppercase tracking-wider font-bold">
                {pillar.tags.join(" • ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
