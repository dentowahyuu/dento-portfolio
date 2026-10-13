export interface ProjectMetric {
  icon?: string;
  label: string;
}

export interface Project {
  id: number | string;
  systemCode?: string;
  version?: string;
  title: string;
  description: string;
  image: string;
  metric?: ProjectMetric;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ArchitecturalPillar {
  number: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: "primary" | "secondary";
}

export interface NavigationLink {
  label: string;
  href: string;
  pathId: string;
}
