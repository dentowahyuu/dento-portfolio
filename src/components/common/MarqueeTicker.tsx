import React from "react";
import { MARQUEE_ITEMS } from "@/constants/projects";
import { cn } from "@/lib/utils";

export interface MarqueeTickerProps {
  items?: string[];
  className?: string;
  speed?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = MARQUEE_ITEMS,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full bg-primary-container text-surface-bright py-3 overflow-hidden shadow-inner flex select-none border-y border-primary-container",
        className
      )}
    >
      <div className="flex gap-8 whitespace-nowrap animate-marquee font-label-code text-label-code tracking-widest uppercase items-center flex-shrink-0">
        {items.map((item, idx) => (
          <React.Fragment key={`marquee-1-${idx}`}>
            <span>{item}</span>
            <span className="text-secondary-container">✦</span>
          </React.Fragment>
        ))}
        {items.map((item, idx) => (
          <React.Fragment key={`marquee-2-${idx}`}>
            <span>{item}</span>
            <span className="text-secondary-container">✦</span>
          </React.Fragment>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="flex gap-8 whitespace-nowrap animate-marquee font-label-code text-label-code tracking-widest uppercase items-center flex-shrink-0"
      >
        {items.map((item, idx) => (
          <React.Fragment key={`marquee-3-${idx}`}>
            <span>{item}</span>
            <span className="text-secondary-container">✦</span>
          </React.Fragment>
        ))}
        {items.map((item, idx) => (
          <React.Fragment key={`marquee-4-${idx}`}>
            <span>{item}</span>
            <span className="text-secondary-container">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
