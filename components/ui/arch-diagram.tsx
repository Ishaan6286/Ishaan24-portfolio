"use client";

import { motion } from "framer-motion";
import { Server, Database, Globe, Cloud, Bot, Code } from "lucide-react";

export interface ArchDiagramProps {
  nodes: {
    label: string;
    sublabel?: string;
    type: "client" | "api" | "db" | "ai" | "cloud" | "logic";
  }[];
}

const iconMap = {
  client: Globe,
  api: Server,
  db: Database,
  ai: Bot,
  cloud: Cloud,
  logic: Code,
};

export function ArchDiagram({ nodes }: ArchDiagramProps) {
  return (
    <div className="py-8">
      <div className="relative mx-auto flex max-w-sm flex-col items-center gap-10">
        {/* Animated Connecting Line */}
        <div className="absolute top-8 bottom-8 left-1/2 w-px -translate-x-1/2 overflow-hidden bg-white/[0.05]">
          <motion.div
            className="h-full w-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"
            initial={{ y: "-100%" }}
            whileInView={{ y: "100%" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>

        {nodes.map((node, i) => {
          const Icon = iconMap[node.type] || Server;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              className="relative z-10 flex w-full flex-col items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111113] p-5 shadow-xl transition-colors hover:border-white/[0.15] hover:bg-[#151517]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-[#09090b] shadow-inner">
                <Icon size={18} className="text-zinc-300" />
              </div>
              <div className="text-center">
                <h4 className="text-sm font-semibold text-zinc-100">{node.label}</h4>
                {node.sublabel && (
                  <p className="mt-0.5 text-xs text-zinc-500">{node.sublabel}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
