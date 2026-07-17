"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { motion } from "framer-motion";
import type { Project } from "@/lib/portfolio-data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="relative group block rounded-2xl border border-white/[0.06] bg-[#111113] overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:bg-[#151517]">
        {/* Absolute overlay link to make the card clickable */}
        <Link
          href={`/projects/${project.slug}`}
          className="absolute inset-0 z-10 rounded-2xl"
          aria-label={`Read case study for ${project.name}`}
        />

        <div className="pointer-events-none relative z-0">
          {/* Cover image — primary visual, slightly taller */}
          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
            <img
              src={project.coverImage}
              alt={`${project.name} project screenshot`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/70 via-transparent to-transparent" />
          </div>

          {/* Card body */}
          <div className="p-5 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors leading-snug">
                  {project.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-zinc-500">
                  {project.tagline}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="mt-0.5 flex-shrink-0 text-zinc-600 transition-all duration-300 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>

            {/* Tech stack — 3 tags max */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 3).map((tech) => (
                <span key={tech} className="tech-tag text-[11px]">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="tech-tag text-[11px] text-zinc-600">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer row — z-20 so links stay clickable through the overlay */}
        <div className="relative z-20 flex items-center gap-3 px-5 py-3 border-t border-white/[0.04]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-300"
          >
            <Github size={13} />
            Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-300"
          >
            <ExternalLink size={13} />
            Live
          </a>
          <span className="pointer-events-none ml-auto text-xs font-medium text-zinc-700 group-hover:text-zinc-400 transition-colors">
            Case Study →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
