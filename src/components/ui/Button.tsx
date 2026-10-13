import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "surface" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
  const baseClasses =
    "inline-flex items-center justify-center font-headline-sm uppercase tracking-wider transition-all select-none cursor-pointer";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs rounded-full",
    md: "px-6 py-2.5 text-sm rounded-full",
    lg: "px-8 py-3.5 text-headline-sm rounded-full",
  };

  const variantClasses = {
    primary:
      "bg-secondary text-on-secondary border-[1.5px] border-primary-container shadow-[4px_4px_0px_#1a3a2f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#1a3a2f] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    surface:
      "bg-surface-bright text-primary-container border-[1.5px] border-primary-container shadow-[4px_4px_0px_#1a3a2f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#1a3a2f] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    dark:
      "bg-primary-container text-surface-bright border-[1.5px] border-primary-container shadow-[4px_4px_0px_#ff6e41] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#ff6e41] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    outline:
      "bg-transparent text-primary-container border-[1.5px] border-primary-container shadow-[3px_3px_0px_#1a3a2f] hover:bg-surface-container-high hover:translate-x-[1px] hover:translate-y-[1px]",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
