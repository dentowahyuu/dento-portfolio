import React from "react";
import { cn } from "@/lib/utils";

export interface CheckerDividerProps {
  className?: string;
  variant?: "checker" | "ribbon" | "inverted";
  height?: string;
  opacity?: string;
}

export const CheckerDivider: React.FC<CheckerDividerProps> = ({
  className,
  variant = "checker",
  height = "h-3",
  opacity = "opacity-40",
}) => {
  if (variant === "ribbon") {
    return (
      <div
        aria-hidden="true"
        className={cn("w-full opacity-30 rounded-full", height, className)}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #1a3a2f 0, #1a3a2f 12px, transparent 12px, transparent 24px)",
        }}
      />
    );
  }

  if (variant === "inverted") {
    return (
      <div
        aria-hidden="true"
        className={cn("w-full opacity-20", height, className)}
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fcf9f0 0, #fcf9f0 8px, #1a3a2f 0, #1a3a2f 16px)",
        }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn("w-full flex", height, opacity, className)}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #1a3a2f 0, #1a3a2f 6px, #fcf9f0 0, #fcf9f0 12px)",
        }}
      />
    </div>
  );
};
