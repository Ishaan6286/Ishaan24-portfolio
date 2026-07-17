import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/animations/reveal";
import { philosophy } from "@/lib/portfolio-data";
import { Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Philosophy",
  description: "How I approach software engineering, scalable systems, and continuous learning.",
};

export default function PhilosophyPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-container max-w-3xl">
        <SectionHeader
          eyebrow="Core Values"
          title="Engineering Philosophy"
          subtitle="A collection of thoughts on building software that scales, lasts, and solves real problems."
        />

        <div className="mt-16 space-y-16">
          {philosophy.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group relative">
                {/* Accent line */}
                <div className="absolute -left-4 md:-left-8 top-0 h-full w-px bg-white/[0.06] group-hover:bg-emerald-500/50 transition-colors" />
                
                <h2 className="text-xl font-bold text-zinc-100 mb-4 flex items-center gap-3 tracking-tight">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                    <Terminal size={14} className="text-emerald-500" />
                  </div>
                  {item.topic}
                </h2>
                
                <div className="callout-box bg-[#111113] border border-white/[0.06] rounded-2xl p-6 md:p-8">
                  <p className="section-prose text-zinc-300 text-[15px] leading-loose">
                    {item.content}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
