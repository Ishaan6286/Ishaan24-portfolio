"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/portfolio-data";
import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

export interface SkillMapProps {
  skills: Record<string, readonly string[]>;
}

export function SkillMap({ skills }: SkillMapProps) {
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(skills)[0]);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // Find projects that use the selected skill
  const relatedProjects = activeSkill
    ? projects.filter((p) => p.techStack.includes(activeSkill))
    : [];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left: Categories & Skills */}
      <div className="flex-1 rounded-2xl border border-white/[0.06] bg-[#111113] overflow-hidden flex flex-col">
        {/* Categories Tab Bar */}
        <div className="flex overflow-x-auto p-2 border-b border-white/[0.06] bg-white/[0.02] scrollbar-hide">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveSkill(null); // Reset selected skill on category change
              }}
              className={`whitespace-nowrap px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeCategory === category
                  ? "bg-zinc-800 text-zinc-100 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.04]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap gap-2.5"
            >
              {skills[activeCategory as keyof typeof skills].map((skill) => (
                <button
                  key={skill}
                  onClick={() => setActiveSkill(skill)}
                  className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
                    activeSkill === skill
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border-white/[0.08] bg-white/[0.03] text-zinc-300 hover:border-white/[0.15] hover:bg-white/[0.06]"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right: Skill Insights Panel */}
      <div className="lg:w-[320px] shrink-0">
        <AnimatePresence mode="wait">
          {activeSkill ? (
            <motion.div
              key={activeSkill}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-2xl border border-white/[0.06] bg-[#0d0d0f] p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                  <Layers size={18} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-100">{activeSkill}</h3>
                  <p className="text-xs text-zinc-500">Skill Insights</p>
                </div>
              </div>

              {relatedProjects.length > 0 ? (
                <div className="space-y-4 flex-1">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Used In Projects
                  </h4>
                  <div className="space-y-2">
                    {relatedProjects.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-white/[0.04] bg-[#111113] p-3 transition-colors hover:border-white/[0.1] hover:bg-[#151517]"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.coverImage}
                            alt=""
                            className="h-8 w-8 rounded bg-zinc-900 object-cover"
                          />
                          <span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100">
                            {p.name}
                          </span>
                        </div>
                        <ArrowRight size={14} className="text-zinc-600 transition-colors group-hover:text-zinc-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center text-zinc-500 space-y-2">
                  <Layers size={24} className="opacity-20" />
                  <p className="text-sm max-w-[200px]">No featured projects showcase this skill directly yet.</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full rounded-2xl border border-dashed border-white/[0.06] bg-transparent flex flex-col items-center justify-center p-8 text-center text-zinc-600"
            >
              <Layers size={24} className="mb-3 opacity-50" />
              <p className="text-sm font-medium text-zinc-400">Select a skill</p>
              <p className="text-xs mt-1">Click any technology to see where it was used.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
