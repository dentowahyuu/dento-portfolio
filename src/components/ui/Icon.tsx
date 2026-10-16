import React from "react";
import { cn } from "@/lib/utils";

export type IconName =
  | "arrow_forward"
  | "menu_book"
  | "north_east"
  | "code"
  | "content_copy"
  | "check"
  | "description"
  | "coffee"
  | "history_edu"
  | "terminal"
  | "palette";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  size = "1em",
  ...props
}) => {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("inline-block shrink-0 align-middle", className),
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "arrow_forward":
      return (
        <svg {...commonProps}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );

    case "menu_book":
      return (
        <svg {...commonProps}>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      );

    case "north_east":
      return (
        <svg {...commonProps}>
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      );

    case "code":
      return (
        <svg {...commonProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );

    case "content_copy":
      return (
        <svg {...commonProps}>
          <rect width="13" height="13" x="9" y="9" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      );

    case "check":
      return (
        <svg {...commonProps}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );

    case "description":
      return (
        <svg {...commonProps}>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );

    case "coffee":
      return (
        <svg {...commonProps}>
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      );

    case "history_edu":
      return (
        <svg {...commonProps}>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M12 6l4 4-4 4" />
          <path d="M8 10h8" />
        </svg>
      );

    case "terminal":
      return (
        <svg {...commonProps}>
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );

    case "palette":
      return (
        <svg {...commonProps}>
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.563-5.554C21.992 6.368 17.5 2 12 2Z" />
        </svg>
      );

    default:
      return null;
  }
};
