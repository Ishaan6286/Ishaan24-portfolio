"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: readonly TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      {/* Timeline track */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/[0.06]">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-zinc-400 to-zinc-600"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Items */}
      <div className="space-y-0">
        {items.map((item, i) => (
          <TimelineEntry key={`${item.year}-${item.title}`} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineEntry({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative pl-12 md:pl-16 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Dot */}
      <div className="absolute left-[11px] md:left-[19px] top-1.5 z-10">
        <motion.div
          className="h-2.5 w-2.5 rounded-full border-2 border-zinc-600 bg-[#09090b]"
          animate={
            isInView
              ? { borderColor: "rgba(161, 161, 170, 0.8)", scale: 1 }
              : { borderColor: "rgba(113, 113, 122, 0.4)", scale: 0.8 }
          }
          transition={{ duration: 0.3, delay: index * 0.05 }}
        />
      </div>

      {/* Year badge */}
      <span className="inline-block mb-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        {item.year}
      </span>

      {/* Content */}
      <h3 className="text-base font-semibold text-zinc-200 tracking-tight">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-zinc-500 leading-relaxed max-w-lg">
        {item.description}
      </p>
    </motion.div>
  );
}
