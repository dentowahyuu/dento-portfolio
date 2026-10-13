import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "stamp" | "pill" | "code" | "tag";
  tone?: "primary" | "secondary" | "neutral" | "dark";
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "pill",
  tone = "neutral",
  icon,
  children,
  ...props
}) => {
  const toneClasses = {
    neutral: "bg-surface-container-high text-primary-container border-primary-container",
    primary: "bg-primary-container text-surface-bright border-primary-container",
    secondary: "bg-secondary text-on-secondary border-primary-container",
    dark: "bg-tertiary-container text-surface-bright border-primary-container",
  };

  if (variant === "stamp") {
    return (
      <span
        className={cn(
          "font-label-stamp text-label-stamp uppercase tracking-widest px-2 py-0.5 border inline-flex items-center gap-1.5",
          toneClasses[tone],
          className
        )}
        {...props}
      >
        {icon && <span className="inline-block">{icon}</span>}
        {children}
      </span>
    );
  }

  if (variant === "code") {
    return (
      <span
        className={cn(
          "font-label-code text-label-code px-3 py-1 rounded-full inline-flex items-center gap-2 shadow-sm",
          toneClasses[tone],
          className
        )}
        {...props}
      >
        {icon && <span className="inline-block">{icon}</span>}
        {children}
      </span>
    );
  }

  if (variant === "tag") {
    return (
      <span
        className={cn(
          "font-label-code text-[11px] px-2 py-0.5 bg-surface-container text-on-surface-variant rounded border border-surface-container-high inline-flex items-center gap-1",
          className
        )}
        {...props}
      >
        {icon && <span className="inline-block">{icon}</span>}
        {children}
      </span>
    );
  }

  // Pill variant
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full shadow-[2px_2px_0px_#1a3a2f] text-xs font-bold",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
