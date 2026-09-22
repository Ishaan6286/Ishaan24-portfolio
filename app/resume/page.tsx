"use client";

import { Download, FileText } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { skills, education, experiences, achievements, projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { SkillMap } from "@/components/ui/skill-map";
import Link from "next/link";

export default function ResumePage() {

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 no-print">
          <SectionHeader
            eyebrow="Curriculum Vitae"
            title="Resume"
            className="mb-0"
          />
          <Reveal delay={0.1}>
            <Button
              href="https://drive.google.com/file/d/1omQkxatvKXRQLXtL9wVX3hca6oMMA119/view?usp=drive_link"
              variant="primary"
              size="md"
              external
              className="w-full md:w-auto"
            >
              <Download size={16} />
              Download PDF
            </Button>
          </Reveal>
        </div>

        {/* Print-only header */}
        <div className="hidden print-only mb-8">
          <h1 className="text-3xl font-bold">Ishaan Singh Chawla</h1>
          <p className="text-sm text-gray-600">Software Engineer | 45ishaan@gmail.com | github.com/Ishaan6286</p>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* Main Content: Experience & Education */}
          <div className="lg:col-span-7 space-y-16">
            {/* Experience */}
            <section>
              <Reveal>
                <h2 className="text-2xl font-semibold text-zinc-100 border-b border-white/[0.06] pb-4 mb-8 flex items-center gap-2">
                  <FileText size={20} className="text-zinc-500" />
                  Experience
                </h2>
              </Reveal>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <Reveal key={exp.company} delay={0.1 + index * 0.1}>
                    <div className="relative pl-6 border-l border-white/[0.06]">
                      <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[1.5px] top-1.5 ring-4 ring-[#09090b]" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-zinc-200">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-medium text-zinc-500 bg-white/[0.03] px-2.5 py-1 rounded-md w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-zinc-400 font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Projects in Resume */}
            <section>
              <Reveal>
                <h2 className="text-2xl font-semibold text-zinc-100 border-b border-white/[0.06] pb-4 mb-8 flex items-center gap-2">
                  <FileText size={20} className="text-zinc-500" />
                  Key Projects
                </h2>
              </Reveal>
              
              <div className="space-y-12">
                {projects.slice(0, 3).map((project, idx) => (
                  <Reveal key={idx} delay={0.1 + idx * 0.1}>
                    <div className="relative pl-6 border-l border-white/[0.06]">
                      <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[1.5px] top-1.5 ring-4 ring-[#09090b]" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-zinc-200">
                          {project.name}
                        </h3>
                        <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
                          View Case Study →
                        </Link>
                      </div>
                      <p className="text-zinc-400 font-medium mb-3 text-sm">{project.tagline}</p>
                      <p className="text-sm text-zinc-500 leading-relaxed mb-4">{project.impact}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-white/[0.03] border border-white/[0.06] rounded text-[11px] text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <Reveal>
                <h2 className="text-2xl font-semibold text-zinc-100 border-b border-white/[0.06] pb-4 mb-8 flex items-center gap-2">
                  <FileText size={20} className="text-zinc-500" />
                  Education
                </h2>
              </Reveal>
              
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <Reveal key={idx} delay={0.1 + idx * 0.1}>
                    <div className="relative pl-6 border-l border-white/[0.06]">
                      <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[1.5px] top-1.5 ring-4 ring-[#09090b]" />
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-zinc-200">
                          {edu.institution}
                        </h3>
                        <span className="text-sm font-medium text-zinc-500 bg-white/[0.03] px-2.5 py-1 rounded-md w-fit shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm mb-2">{edu.degree}</p>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800/50 text-xs font-medium text-zinc-300">
                        <span className="text-zinc-500">{edu.gradeLabel}:</span>
                        {edu.grade}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Skills & Achievements */}
          <div className="lg:col-span-5 space-y-16">
            {/* Skills Explorer */}
            <section className="no-print">
              <Reveal>
                <h2 className="text-2xl font-semibold text-zinc-100 border-b border-white/[0.06] pb-4 mb-8">
                  Skills Explorer
                </h2>
                
                <SkillMap skills={skills} />
              </Reveal>
            </section>

            {/* Print-only skills */}
            <section className="hidden print-only">
              <h2 className="text-xl font-bold border-b pb-2 mb-4">Skills</h2>
              <div className="space-y-2">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <strong>{category}:</strong> {items.join(", ")}
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <Reveal>
                <h2 className="text-2xl font-semibold text-zinc-100 border-b border-white/[0.06] pb-4 mb-8">
                  Achievements
                </h2>
                
                <div className="space-y-6">
                  {achievements.map((ach, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors">
                          {ach.rank}
                        </span>
                        <div className="h-px flex-1 bg-white/[0.06]" />
                      </div>
                      <h3 className="text-sm font-semibold text-zinc-200 mb-1">
                        {ach.title}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
