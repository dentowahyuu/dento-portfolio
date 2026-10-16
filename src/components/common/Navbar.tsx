"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b-[1.5px] border-primary-container shadow-[0_2px_0px_#1a3a2f]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Side: Brand Logo (Replaces awkward Vol. 24) */}
        <Link
          href="/"
          className="flex items-center gap-3 py-1 group hover:opacity-95 transition-opacity"
        >
          {/* Symbol Mark */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-surface-container-high border-[1.5px] border-primary-container p-1 shadow-[2px_2px_0px_#1a3a2f] flex-shrink-0 group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-transform">
            <Image
              src="/assets/images/brand-symbol.svg"
              alt="Dento Wahyu Brand Mark"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>

          {/* Typography Brand Title */}
          <div className="flex flex-col">
            <span className="font-headline-sm text-lg sm:text-xl uppercase tracking-wider text-primary font-bold leading-tight">
              Dento Wahyu
            </span>
            <span className="font-label-code text-[10px] sm:text-[11px] uppercase tracking-widest text-secondary font-semibold">
              Software Architecture
            </span>
          </div>
        </Link>

        {/* Right Side: Navigation Links & Actions */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-label-stamp text-label-stamp uppercase tracking-wider text-on-surface-variant hover:text-secondary hover:border-b-2 hover:border-secondary transition-all py-1 font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider Dot on Desktop */}
          <span className="hidden md:inline-block text-outline-variant font-bold">
            •
          </span>

          {/* CTA & Profile Avatar */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-secondary text-on-secondary rounded-full border-[1.5px] border-primary-container shadow-[3px_3px_0px_#1a3a2f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#1a3a2f] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all font-label-stamp text-xs sm:text-label-stamp uppercase tracking-wider font-bold"
            >
              Let&apos;s Talk
            </a>

            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-[1.5px] border-primary-container flex-shrink-0 shadow-[1px_1px_0px_#1a3a2f]">
              <Image
                src="/assets/images/denn.webp"
                alt="Dento Wahyu Profile"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-primary-container border-[1.5px] border-primary-container rounded-lg bg-surface-container-high shadow-[2px_2px_0px_#1a3a2f] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (100% Responsive Dropdown) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-bright border-b-2 border-primary-container px-6 py-5 shadow-lg flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2 font-label-stamp text-sm uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded text-on-surface hover:text-secondary hover:bg-surface-container-high transition-colors border-b border-surface-container flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-secondary text-xs">✦</span>
              </a>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 bg-secondary text-on-secondary rounded-full border-[1.5px] border-primary-container shadow-[3px_3px_0px_#1a3a2f] font-headline-sm uppercase tracking-wider text-sm active:translate-x-[2px] active:translate-y-[2px]"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
