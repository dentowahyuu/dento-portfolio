import React from "react";
import Image from "next/image";
import { FEATURED_PROJECTS } from "@/constants/projects";
import { CheckerDivider } from "@/components/common/CheckerDivider";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const ProjectsSection: React.FC = () => {
  return (
    <section
      className="w-full bg-primary-container text-surface-bright py-20 relative overflow-hidden"
      id="projects"
    >
      {/* Top Pattern Bar */}
      <CheckerDivider variant="inverted" height="h-2" className="mb-12" />

      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-label-stamp text-label-stamp tracking-widest text-primary-fixed-dim uppercase mb-2">
              <span>CASE STUDIES</span>
              <span>//</span>
              <span>PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-surface-bright text-4xl lg:text-5xl">
              Selected Work
            </h2>
          </div>

          <Button
            href="https://github.com/dentowahyuu"
            target="_blank"
            rel="noopener noreferrer"
            variant="surface"
            size="md"
            className="gap-2 w-fit"
          >
            <span>View GitHub Profile</span>
            <Icon name="north_east" size={14} />
          </Button>
        </div>

        {/* Responsive Card Grid (3 Columns on Large, 2 on Medium, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <Card
              key={project.id}
              variant="default"
              className="p-6 flex flex-col gap-4 group"
            >
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between pb-2 border-b border-surface-container-high">
                <span className="font-label-stamp text-label-stamp uppercase text-secondary font-bold tracking-wider">
                  {project.systemCode}
                </span>
                <span className="font-label-code text-[11px] text-on-surface-variant font-semibold">
                  {project.version}
                </span>
              </div>

              {/* Project Screenshot Frame in Retro Display Window */}
              <div className="w-full rounded-xl overflow-hidden border border-primary-container/25 bg-surface-container-high shadow-inner flex flex-col">
                {/* Vintage Titlebar */}
                <div className="bg-surface-container-highest px-3 py-1.5 border-b border-primary-container/15 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f4b400]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0f9d58]"></span>
                  </div>
                  <span className="font-label-code text-[10px] text-on-surface-variant truncate max-w-[150px]">
                    {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                  </span>
                </div>

                {/* Screenshot Container */}
                <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-md text-headline-md uppercase text-primary-container leading-tight text-xl sm:text-2xl">
                  {project.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Performance / Highlight Metric Pill */}
              {project.metric && (
                <Badge
                  variant="pill"
                  tone="neutral"
                  className="w-fit"
                  icon={<span className="text-secondary">{project.metric.icon}</span>}
                >
                  <span className="font-label-code text-xs font-bold text-primary-container">
                    {project.metric.label}
                  </span>
                </Badge>
              )}

              {/* Tech Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5 font-label-code text-[11px]">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="tag">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Links */}
              <div className="mt-auto pt-4 border-t border-surface-container-high flex items-center justify-between gap-3">
                {project.githubUrl && project.githubUrl !== "#" ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-headline-sm uppercase tracking-wider text-primary-container hover:text-secondary transition-colors font-bold"
                  >
                    <Icon name="code" size={14} />
                    <span>Source Code</span>
                  </a>
                ) : (
                  <span className="text-[11px] font-label-code text-on-surface-variant italic">
                    Design Concept
                  </span>
                )}

                {project.demoUrl && project.demoUrl !== "#" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-headline-sm uppercase tracking-wider text-secondary hover:underline font-bold"
                  >
                    <span>Live Demo</span>
                    <Icon name="north_east" size={12} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
