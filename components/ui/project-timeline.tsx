"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export interface ProjectTimelineProps {
  timeline: {
    phase: string;
    description: string;
  }[];
}

export function ProjectTimeline({ timeline }: ProjectTimelineProps) {
  return (
    <div className="py-6">
      <div className="relative border-l border-white/[0.08] ml-3 md:ml-4 space-y-8">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="relative pl-8 md:pl-10"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-13px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-[#111113] bg-zinc-800 ring-4 ring-[#09090b]">
              <CheckCircle2 size={12} className="text-zinc-400" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500/80">
                {item.phase}
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
