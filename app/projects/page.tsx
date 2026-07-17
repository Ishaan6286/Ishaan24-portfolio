"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/lib/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";

const allTags = ["All", "AI", "Backend", "Full Stack", "Hackathon", "Open Source", "React", "LLM"];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeTag === "All" || p.tags?.includes(activeTag) || p.techStack.includes(activeTag)
  );

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected Projects"
          subtitle="A deeper dive into the systems I've built, the problems they solve, and the lessons learned along the way."
        />
        
        {/* Filter Bar */}
        <div className="mt-10 mb-12 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                activeTag === tag
                  ? "bg-zinc-100 text-zinc-900 shadow-sm"
                  : "border border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/[0.15] hover:text-zinc-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            No projects found matching the selected tag.
          </div>
        )}
      </div>
    </div>
  );
}
