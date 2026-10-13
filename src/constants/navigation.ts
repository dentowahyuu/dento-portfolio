import { NavigationLink } from "@/types/project";

export const LEFT_NAV_LINKS: NavigationLink[] = [
  { label: "Story", href: "#story", pathId: "portfolio-story" },
  { label: "Projects", href: "#projects", pathId: "portfolio-projects" },
];

export const RIGHT_NAV_LINKS: NavigationLink[] = [
  { label: "Stack", href: "#stack", pathId: "portfolio-stack" },
  { label: "Contact", href: "#contact", pathId: "portfolio-contact" },
];

export const NAV_LINKS: NavigationLink[] = [
  { label: "Story", href: "#story", pathId: "portfolio-story" },
  { label: "Projects", href: "#projects", pathId: "portfolio-projects" },
  { label: "Stack", href: "#stack", pathId: "portfolio-stack" },
  { label: "Contact", href: "#contact", pathId: "portfolio-contact" },
];

export const FOOTER_ARCHITECTURE_LINKS: NavigationLink[] = [
  { label: "Engineering Dossier", href: "#story", pathId: "dossier" },
  { label: "Production Registry", href: "#projects", pathId: "registry" },
  { label: "Field Specifications", href: "#stack", pathId: "specs" },
  { label: "System Schematics", href: "#specs", pathId: "schematics" },
];

export const SOCIAL_LINKS = [
  { label: "GH-REPO", href: "https://github.com/dentowahyuu", external: true },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/dentowahyu/", external: true },
  { label: "INSTAGRAM", href: "https://www.instagram.com/dentowahyuu/", external: true },
];
