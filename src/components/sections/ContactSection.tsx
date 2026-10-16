"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@dentowahyu.dev");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="w-full bg-surface py-20 relative" id="contact">
      {/* Tactile Retro Sticker Showcase Banner */}
      <div className="w-full bg-secondary py-12 px-gutter-mobile lg:px-gutter mb-16 relative overflow-hidden shadow-md border-y border-primary-container">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center">
          {/* Sticker 1 */}
          <div className="transform -rotate-3 bg-surface-bright text-primary-container px-6 py-3 rounded-lg shadow-[4px_4px_0px_#1a3a2f] font-headline-sm text-headline-sm uppercase tracking-wider flex items-center gap-2 select-none hover:rotate-0 transition-transform border border-primary-container/20">
            <span className="text-secondary">✦</span>
            <span>100% Type-Safe Guaranteed</span>
            <span className="text-secondary">✦</span>
          </div>

          {/* Sticker 2 */}
          <div className="transform rotate-2 bg-primary-container text-surface-bright px-6 py-3 rounded-full shadow-[4px_4px_0px_#ffdbd1] font-headline-sm text-headline-sm uppercase tracking-wider flex items-center gap-2 select-none hover:rotate-0 transition-transform border border-primary-fixed-dim/20">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
            <span>Available For Select Contracts</span>
          </div>

          {/* Sticker 3 */}
          <div className="transform -rotate-2 bg-surface-container-highest text-primary-container px-5 py-3 rounded-full shadow-[4px_4px_0px_#1a3a2f] font-headline-sm text-headline-sm uppercase tracking-wider flex items-center gap-2 select-none hover:rotate-0 transition-transform border border-primary-container/20">
            <Icon name="coffee" size={20} className="text-secondary" />
            <span>Pour-Over Fuelled</span>
          </div>
        </div>
      </div>

      {/* Main Contact Pitch Block */}
      <div className="max-w-4xl mx-auto px-gutter-mobile lg:px-gutter text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high text-primary-container rounded font-label-stamp text-label-stamp uppercase tracking-widest mb-4 border border-primary-container/20 shadow-sm">
          <span>TRANSMISSION • GET IN TOUCH</span>
        </div>

        <h2 className="font-headline-lg text-headline-lg uppercase text-primary-container tracking-tight leading-none max-w-2xl text-4xl lg:text-5xl">
          Have a project in mind? Let&apos;s build something good.
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-xl leading-relaxed">
          Currently exploring select staff-level roles, technical advisory
          engagements, and bespoke frontend/backend engineering systems.
        </p>

        {/* Primary Action: Interactive Copy/Email Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button
            href="mailto:wahyudento08@gmail.com"
            variant="primary"
            size="lg"
            className="gap-3 group"
          >
            <span>wahyudento08@gmail.com</span>
            <Icon
              name="north_east"
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Button>

          <button
            onClick={handleCopyEmail}
            className="px-5 py-4 bg-surface-bright text-primary-container rounded-full shadow-[3px_3px_0px_#1a3a2f] border border-primary-container hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-label-stamp text-label-stamp uppercase tracking-wider flex items-center gap-2 cursor-pointer active:translate-x-[2px] active:translate-y-[2px]"
          >
            <Icon name={copied ? "check" : "content_copy"} size={16} />
            <span>{copied ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>

        {/* Secondary Quick Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-label-code text-label-code text-on-surface-variant">
          <a
            className="inline-flex items-center gap-1.5 hover:text-secondary transition-colors underline decoration-secondary decoration-2 underline-offset-4"
            href="/Resume_Dento_Wahyu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Resume_Dento_Wahyu.pdf"
          >
            <Icon name="description" size={16} />
            <span>Download Resume (PDF)</span>
          </a>
          {/* <span className="text-outline-variant">•</span>
          <a
            className="inline-flex items-center gap-1.5 hover:text-secondary transition-colors underline decoration-secondary decoration-2 underline-offset-4"
            href="#calendar"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            <span>Schedule 15-min Intro Call</span>
          </a> */}
        </div>

        {/* Dispatch Detail Notice */}
        <div className="mt-14 p-4 rounded-xl bg-surface-container text-on-surface-variant font-label-code text-xs max-w-lg border border-primary-container/20 flex items-center justify-center gap-3 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span>TYPICAL RESPONSE TIME: UNDER 24 HOURS (MON - FRI)</span>
        </div>
      </div>
    </section>
  );
};
