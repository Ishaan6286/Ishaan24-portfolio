import type { Metadata } from "next";
import { Briefcase, Calendar, MapPin, ArrowRight, Server, Database, Cpu } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/animations/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { experience } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "My engineering journey and professional experience at Hewlett Packard Enterprise.",
};

// Categorize technologies for the sidebar
const techCategories = [
  {
    label: "Backend",
    icon: Server,
    techs: ["FastAPI", "Python", "SQLAlchemy"],
  },
  {
    label: "Databases",
    icon: Database,
    techs: ["PostgreSQL", "Redis"],
  },
  {
    label: "AI & ML",
    icon: Cpu,
    techs: ["Gemini API", "Groq API"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-container">
        <SectionHeader
          eyebrow="Professional"
          title="Experience"
          subtitle="Engineering case study from my professional internship."
        />

        <div className="mt-16">
          <Reveal>
            <div className="rounded-3xl border border-white/[0.06] bg-[#111113] overflow-hidden">

              {/* Case Study Header */}
              <div className="border-b border-white/[0.06] p-8 md:p-12 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      Case Study
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
                      {experience.company}
                    </h2>
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={14} className="text-zinc-600" />
                        {experience.role}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-zinc-600" />
                        {experience.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-zinc-600" />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="flex flex-wrap gap-3 md:flex-shrink-0">
                    <div className="quick-stat">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600">Duration</span>
                      <span className="text-sm font-medium text-zinc-300">5 months</span>
                    </div>
                    <div className="quick-stat">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600">Team</span>
                      <span className="text-sm font-medium text-zinc-300">5 Engineers</span>
                    </div>
                    <div className="quick-stat">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600">Status</span>
                      <span className="text-sm font-medium text-emerald-400">Completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 md:p-12 grid gap-14 lg:grid-cols-12">
                <div className="lg:col-span-8 space-y-12">

                  {/* Overview */}
                  <section>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-4 tracking-tight">Overview</h3>
                    <p className="section-prose">{experience.overview}</p>
                  </section>

                  <div className="divider" />

                  {/* The Problem — callout */}
                  <section>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-4 tracking-tight">The Problem</h3>
                    <div className="callout-box">
                      <p className="section-prose italic text-zinc-300">
                        &ldquo;{experience.problem}&rdquo;
                      </p>
                    </div>
                  </section>

                  <div className="divider" />

                  {/* Architecture */}
                  <section>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-4 tracking-tight">
                      Architecture & Implementation
                    </h3>
                    <p className="section-prose">{experience.architecture}</p>

                    {/* Simple architecture visual */}
                    <div className="mt-6 rounded-2xl border border-white/[0.06] bg-[#0d0d0f] p-6 font-mono">
                      <p className="text-[11px] uppercase tracking-widest text-zinc-600 mb-4">System Architecture</p>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="rounded border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-zinc-300">FastAPI Microservices</span>
                          <span className="text-zinc-600">→</span>
                          <span className="rounded border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-zinc-300">PostgreSQL</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-zinc-300">Redis Queue</span>
                          <span className="text-zinc-600">→</span>
                          <span className="rounded border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-zinc-300">Async Alert Engine</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-zinc-300">Schema Analyzer</span>
                          <span className="text-zinc-600">→</span>
                          <span className="rounded border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-zinc-300">Gemini / Groq APIs</span>
                          <span className="text-zinc-600">→</span>
                          <span className="rounded border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-zinc-300">Validation Rules</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div className="divider" />

                  {/* Key Responsibilities — process steps */}
                  <section>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-6 tracking-tight">
                      What I Built
                    </h3>
                    <StaggerReveal className="space-y-3">
                      {experience.responsibilities.map((resp, i) => (
                        <StaggerItem key={i}>
                          <div className="flex gap-4 rounded-xl border border-white/[0.06] bg-[#0d0d0f] p-4 hover:border-white/[0.10] transition-colors">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-bold text-zinc-500 mt-0.5">
                              {i + 1}
                            </div>
                            <p className="section-prose text-sm">{resp}</p>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerReveal>
                  </section>

                  <div className="divider" />

                  {/* Impact & Results — bold statements */}
                  <section>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-5 tracking-tight">
                      Impact & Results
                    </h3>
                    <div className="space-y-3">
                      {experience.results.map((result, i) => (
                        <div key={i} className="impact-statement">
                          <ArrowRight size={15} className="mt-0.5 shrink-0 text-zinc-500" />
                          <span className="text-sm font-medium text-zinc-200 leading-relaxed">{result}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Sidebar — Technologies categorized */}
                <aside className="lg:col-span-4">
                  <div className="rounded-2xl border border-white/[0.06] bg-[#09090b] p-6 sticky top-24 space-y-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Technologies Used
                    </h3>
                    {techCategories.map(({ label, icon: Icon, techs }) => (
                      <div key={label}>
                        <div className="flex items-center gap-1.5 mb-2">
                          <Icon size={12} className="text-zinc-600" />
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
                            {label}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {techs.map((tech) => (
                            <span key={tech} className="tech-tag text-xs py-1 px-2.5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
