import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, ArrowRight, Clock, Users, Layers, Zap, Info, Server, ShieldCheck, HelpCircle } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/portfolio-data";
import Link from "next/link";
import { ArchDiagram } from "@/components/ui/arch-diagram";
import { ProjectTimeline } from "@/components/ui/project-timeline";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Quick-stat metadata per project
const projectMeta: Record<string, { timeline: string; team: string; type: string; status: string }> = {
  runli: {
    timeline: "3 months",
    team: "Solo",
    type: "Full Stack · PWA",
    status: "Live",
  },
  nikkalink: {
    timeline: "2 months",
    team: "Solo",
    type: "SaaS · Full Stack",
    status: "Live",
  },
  pramanik: {
    timeline: "3 months",
    team: "Solo",
    type: "Enterprise AI",
    status: "Beta",
  },
  wanderwise: {
    timeline: "1.5 months",
    team: "Solo",
    type: "Full Stack",
    status: "Live",
  },
  fixion: {
    timeline: "2 months",
    team: "Solo",
    type: "AI · SaaS",
    status: "Live",
  },
};

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const projectIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const meta = projectMeta[project.slug];

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-container">

        {/* Back link */}
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300 mb-12"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>
        </Reveal>

        {/* Hero */}
        <header className="mb-12">
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-xl text-zinc-400 font-medium">
              {project.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={project.live} variant="primary" size="md" external>
                <ExternalLink size={16} />
                Live Demo
              </Button>
              <Button href={project.github} variant="secondary" size="md" external>
                <Github size={16} />
                View Source
              </Button>
            </div>
          </Reveal>
        </header>

        {/* Quick Stats */}
        {meta && (
          <Reveal delay={0.35}>
            <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="quick-stat">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
                  <Clock size={11} /> Timeline
                </span>
                <span className="text-sm font-medium text-zinc-300">{meta.timeline}</span>
              </div>
              <div className="quick-stat">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
                  <Users size={11} /> Team
                </span>
                <span className="text-sm font-medium text-zinc-300">{meta.team}</span>
              </div>
              <div className="quick-stat">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
                  <Layers size={11} /> Type
                </span>
                <span className="text-sm font-medium text-zinc-300">{meta.type}</span>
              </div>
              <div className="quick-stat">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
                  <Zap size={11} /> Status
                </span>
                <span className="text-sm font-medium text-emerald-400">{meta.status}</span>
              </div>
            </div>
          </Reveal>
        )}

        {/* Cover Image */}
        <Reveal delay={0.4} className="mb-16 md:mb-20">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900 shadow-2xl">
            <img
              src={project.coverImage}
              alt={`${project.name} project screenshot`}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-14">

            {/* Overview & Motivation */}
            <section className="space-y-10">
              <Reveal>
                <h2 className="text-xl font-semibold text-zinc-100 mb-4 tracking-tight">Overview</h2>
                <p className="section-prose">{project.overview}</p>
              </Reveal>
              
              <Reveal>
                <h2 className="text-xl font-semibold text-zinc-100 mb-4 tracking-tight">The Problem</h2>
                <div className="callout-box bg-red-500/5 border-red-500/10 !border-l-red-500/50">
                  <p className="section-prose text-zinc-300">
                    &ldquo;{project.problem}&rdquo;
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <h2 className="text-xl font-semibold text-zinc-100 mb-4 tracking-tight">Why I Built This</h2>
                <p className="section-prose">{project.whyBuilt}</p>
              </Reveal>
              
              <Reveal>
                <h2 className="text-xl font-semibold text-zinc-100 mb-6 tracking-tight">Project Goals</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-zinc-400 text-sm p-3 rounded-xl border border-white/[0.04] bg-white/[0.02]">
                      <ShieldCheck size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>

            <div className="divider" />

            {/* Architecture Deep Dive */}
            <section className="space-y-10">
              <Reveal>
                <h2 className="text-2xl font-bold text-zinc-100 mb-2 tracking-tight">System Architecture</h2>
                <p className="section-prose mb-8">{project.architecture}</p>
                
                <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
                  <ArchDiagram nodes={[
                    { label: "Client Application", sublabel: project.techStack[0], type: "client" },
                    { label: "API Gateway / Server", sublabel: "FastAPI / Node", type: "api" },
                    { label: "Business Logic", type: "logic" },
                    { label: "Primary Database", sublabel: "PostgreSQL / MongoDB", type: "db" },
                    { label: "External Services", sublabel: "AI APIs / Cloud", type: "cloud" }
                  ]} />
                </div>
              </Reveal>

              <div className="grid gap-8 sm:grid-cols-2">
                <Reveal>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-3 flex items-center gap-2">
                    <Server size={18} className="text-zinc-500" /> API Design
                  </h3>
                  <p className="section-prose text-sm">{project.apiDesign}</p>
                </Reveal>
                
                <Reveal>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-3 flex items-center gap-2">
                    <Layers size={18} className="text-zinc-500" /> Database Design
                  </h3>
                  <p className="section-prose text-sm">{project.dbDesign}</p>
                </Reveal>

                {project.aiIntegration && (
                  <Reveal className="sm:col-span-2">
                    <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6">
                      <h3 className="text-lg font-semibold text-zinc-100 mb-3 flex items-center gap-2">
                        <Zap size={18} className="text-indigo-400" /> AI Integration
                      </h3>
                      <p className="section-prose text-sm">{project.aiIntegration}</p>
                    </div>
                  </Reveal>
                )}
              </div>
            </section>

            <div className="divider" />

            {/* Engineering Decisions & Tech Choices */}
            <section className="space-y-10">
              <Reveal>
                <h2 className="text-2xl font-bold text-zinc-100 mb-6 tracking-tight">Engineering Decisions</h2>
                <StaggerReveal className="grid gap-4">
                  {project.engineeringDecisions.map((dec, i) => (
                    <StaggerItem key={i}>
                      <div className="rounded-xl border border-white/[0.06] bg-[#111113] p-5">
                        <h4 className="text-base font-semibold text-zinc-200 mb-2">{dec.decision}</h4>
                        <p className="section-prose text-sm">{dec.reasoning}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </Reveal>

              <Reveal>
                <h3 className="text-lg font-semibold text-zinc-100 mb-4 tracking-tight">Why This Tech Stack?</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.whyThisTech.map((item, i) => (
                    <div key={i} className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4 flex flex-col gap-2">
                      <span className="text-sm font-bold text-zinc-300">{item.tech}</span>
                      <p className="text-xs text-zinc-500 leading-relaxed">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <div className="divider" />

            {/* Timeline */}
            <section>
              <Reveal>
                <h2 className="text-xl font-semibold text-zinc-100 mb-6 tracking-tight">
                  Development Timeline
                </h2>
                <ProjectTimeline timeline={project.timeline} />
              </Reveal>
            </section>

            <div className="divider" />

            {/* Engineering Challenges */}
            <section>
              <Reveal>
                <h2 className="text-xl font-semibold text-zinc-100 mb-6 tracking-tight">
                  Challenges Faced
                </h2>
                <StaggerReveal className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <StaggerItem key={i}>
                      <div className="flex gap-4 rounded-xl border border-white/[0.06] bg-[#111113] p-4 hover:border-white/[0.10] transition-colors">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-bold text-zinc-500 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="section-prose text-sm">{challenge}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </Reveal>
            </section>

            <div className="divider" />

            {/* Lessons Learned */}
            <section>
              <Reveal>
                <h2 className="text-xl font-semibold text-zinc-100 mb-4 tracking-tight flex items-center gap-2">
                  <HelpCircle size={20} className="text-zinc-500" /> Lessons Learned
                </h2>
                <div className="rounded-2xl border border-white/[0.06] bg-[#111113] p-6 md:p-8">
                  <ul className="space-y-4">
                    {project.lessons.map((lesson, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* What's Next */}
            {project.future && project.future.length > 0 && (
              <section className="pt-8">
                <Reveal>
                  <h2 className="text-lg font-semibold text-zinc-100 mb-4 tracking-tight">
                    Future Improvements
                  </h2>
                  <ul className="space-y-2">
                    {project.future.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-zinc-500">
                        <ArrowRight size={14} className="shrink-0 text-zinc-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4">
            <Reveal>
              <div className="rounded-2xl border border-white/[0.06] bg-[#111113] p-6 sticky top-24 space-y-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag text-xs py-1 px-2.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="divider" />
                
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                    Deployment
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.deploymentArch}
                  </p>
                </div>

                <div className="divider" />
                
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                    Links
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 text-sm text-zinc-300 transition-colors hover:border-white/[0.1] hover:bg-white/[0.04]"
                    >
                      <span className="flex items-center gap-2">
                        <ExternalLink size={16} className="text-zinc-500" />
                        Live Demo
                      </span>
                      <ArrowRight size={14} className="text-zinc-600 group-hover:text-zinc-400" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 text-sm text-zinc-300 transition-colors hover:border-white/[0.1] hover:bg-white/[0.04]"
                    >
                      <span className="flex items-center gap-2">
                        <Github size={16} className="text-zinc-500" />
                        Repository
                      </span>
                      <ArrowRight size={14} className="text-zinc-600 group-hover:text-zinc-400" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Next/Prev Project Navigation */}
        <Reveal>
          <div className="mt-24 border-t border-white/[0.06] pt-12">
            <div className="grid grid-cols-2 gap-4">
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col items-start gap-2 rounded-2xl border border-white/[0.06] p-6 transition-colors hover:bg-white/[0.02]"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  ← Previous
                </span>
                <span className="text-base font-semibold text-zinc-400 group-hover:text-zinc-100 transition-colors">
                  {prevProject.name}
                </span>
              </Link>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col items-end text-right gap-2 rounded-2xl border border-white/[0.06] p-6 transition-colors hover:bg-white/[0.02]"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Next →
                </span>
                <span className="text-base font-semibold text-zinc-400 group-hover:text-zinc-100 transition-colors">
                  {nextProject.name}
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
