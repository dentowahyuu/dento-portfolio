import { Project, ArchitecturalPillar } from "@/types/project";

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    systemCode: "SYS-01 • POINT OF SALE",
    version: "v2.1",
    title: "Point of Sales Matcha",
    description:
      "A streamlined Point of Sale system designed for cafes, managing real-time inventory and seamless sales transactions.",
    image: "/projects/Project-POS.png",
    metric: {
      icon: "⚡",
      label: "Real-Time Inventory",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "https://github.com/dentowahyuu/pos-matcha",
  },
  {
    id: 2,
    systemCode: "SYS-02 • GUEST ATTENDANCE",
    version: "v1.4",
    title: "Digital Wedding Invitation",
    description:
      "Digital invitation system with automated RSVP and QR-based guest attendance management.",
    image: "/projects/Project-Wedding.png",
    metric: {
      icon: "🎟️",
      label: "QR-Based Attendance",
    },
    tags: ["Node.js", "Express.js", "Firebase", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/dentowahyuu/yeay-wedding",
  },
  {
    id: 3,
    systemCode: "SYS-03 • AUTOMOTIVE E-COMMERCE",
    version: "v1.8",
    title: "Gojira Tuners E-Commerce",
    description:
      "A high-speed digital marketplace for premium tuning components like turbos and performance exhausts.",
    image: "/projects/Project-Gojira.png",
    metric: {
      icon: "🏎️",
      label: "Performance Catalog",
    },
    tags: ["HTML", "JavaScript", "Java", "MySQL", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/dentowahyuu/Web-Tuners",
  },
  {
    id: 4,
    systemCode: "SYS-04 • FLEET MANAGEMENT",
    version: "v2.0",
    title: "Rental Car UI Design",
    description:
      "Digital car rental platform featuring real-time fleet management and seamless booking for MPVs and SUVs.",
    image: "/projects/Project-Rental.png",
    metric: {
      icon: "🎨",
      label: "Design System in Figma",
    },
    tags: ["Figma"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    systemCode: "SYS-05 • CROSS-PLATFORM MOBILE",
    version: "v1.2",
    title: "Quran-Qu — Mobile Digital Quran App",
    description:
      "Cross-platform mobile Al-Quran application featuring real-time surah search, Indonesian translation, transliteration, and verse-by-verse audio recitation playback.",
    image: "/projects/Project-Quran.jpg",
    metric: {
      icon: "🎧",
      label: "Recitation Playback",
    },
    tags: ["React Native", "Expo", "TypeScript", "REST API"],
    demoUrl: "#",
    githubUrl: "https://github.com/dentowahyuu/quran-qu",
  },
  {
    id: 6,
    systemCode: "SYS-06 • ATTENDANCE & AI",
    version: "v2.0",
    title: "HadirYuk — Smart Attendance & Dashboard",
    description:
      "Enterprise employee attendance system featuring an AI-powered face verification engine, GPS geofencing, real-time logging, and an executive admin analytics dashboard.",
    image: "/projects/Project-Absen.png",
    metric: {
      icon: "👁️",
      label: "AI Face & Geofence Verification",
    },
    tags: ["Next.js 15", "FastAPI", "Python AI", "PostgreSQL", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/dentowahyuu/absen-application",
  },
  {
    id: 7,
    systemCode: "SYS-07 • 3D WEBGL ENGINE",
    version: "v1.2",
    title: "Planefury — 3D Procedural Flight Shooter",
    description:
      "High-octane 3D aerial combat runner with procedural biplane physics, dynamic vertex-wave ocean, real-time Web Audio synthesizer, enemy squad formations, and multi-phase dreadnought boss battle.",
    image: "/projects/Project-Planefury.jpg",
    metric: {
      icon: "✈️",
      label: "Procedural 3D & Web Audio",
    },
    tags: ["Three.js", "WebGL", "Web Audio API", "Vite", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/dentowahyuu/planefury",
  },
];

export const ARCHITECTURAL_PILLARS: ArchitecturalPillar[] = [
  {
    number: "01",
    title: "Full-Stack Engineering",
    description:
      "Architecting resilient end-to-end systems, integrating scalable back-end services with high-performance, responsive front-end applications.",
    tags: ["GOLANG", "NODE.JS", "NEXT.JS"],
    accentColor: "primary",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Crafting intuitive, accessible interfaces through user research, wireframing, and interactive design systems in Figma.",
    tags: ["FIGMA", "WIREFRAMING", "DESIGN SYSTEMS"],
    accentColor: "secondary",
  },
  {
    number: "03",
    title: "System & Product Delivery",
    description:
      "Guiding digital products from ideation to production with agile workflows, clean code standards, and reliable deployments.",
    tags: ["AGILE WORKFLOWS", "CLEAN CODE", "DEPLOYMENTS"],
    accentColor: "primary",
  },
];

export const MARQUEE_ITEMS = [
  "SCALABLE SYSTEMS",
  "POLISHED UI",
  "TYPESCRIPT",
  "NEXT.JS",
  "DOCKER",
  "DISTRIBUTED SYSTEMS",
  "TAILWIND",
  "GO & POSTGRESQL",
  "GRAPHQL",
  "CI/CD EXCELLENCE",
];
