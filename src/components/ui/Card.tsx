import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "terminal" | "pillar";
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  const variantClasses = {
    default:
      "bg-surface-bright text-on-surface rounded-2xl shadow-[5px_5px_0px_#ff6e41] border border-primary-container/15 hover:-translate-y-1 transition-transform duration-200",
    elevated:
      "bg-surface-bright text-on-surface rounded-2xl shadow-[6px_6px_0px_#1a3a2f] border border-primary-container",
    terminal:
      "bg-primary-container text-surface-bright rounded-2xl shadow-[4px_4px_0px_#1a3a2f] overflow-hidden border border-primary-container",
    pillar:
      "bg-surface-bright text-on-surface rounded-2xl shadow-[3px_3px_0px_#1a3a2f] border border-primary-container/20 hover:-translate-y-1 transition-transform",
  };

  return (
    <div className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
};
