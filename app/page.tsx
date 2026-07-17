"use client";

import Link from "next/link";
import { Mail, Download, ArrowRight, Briefcase } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { motion } from "framer-motion";
import { RotatingText } from "@/components/animations/text-reveal";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/animations/reveal";
import { Counter } from "@/components/animations/counter";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Timeline } from "@/components/ui/timeline";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import {
  siteConfig,
  rotatingTitles,
  metrics,
  journeyMilestones,
  projects,
  experience,
  currently,
  lookingFor,
} from "@/lib/portfolio-data";
import { Terminal, Target, Code2, Cpu } from "lucide-react";

// Only feature the top 3 projects on the homepage
const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-screen items-center" aria-label="Introduction">
        {/* Hero gradient */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute left-1/2 top-0 h-[70vh] w-[120vw] -translate-x-1/2 -translate-y-1/4"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
            }}
          />
        </div>

        <div className="page-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-3xl">

            {/* Status badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-zinc-400">
                Open to full-time roles · Jul 2026
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {siteConfig.name}
            </motion.h1>

            {/* Rotating title */}
            <motion.div
              className="mt-4 text-lg font-medium text-zinc-400 sm:text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <RotatingText texts={rotatingTitles} className="text-zinc-300" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-5 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              I build scalable backend systems, AI-powered pipelines, and
              production-ready applications. Currently interning at{" "}
              <span className="text-zinc-400 font-medium">Hewlett Packard Enterprise</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton>
                <Button href="/projects" variant="primary" size="lg">
                  View My Work
                  <ArrowRight size={16} />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  href="https://drive.google.com/file/d/1_DJPUJifa2gWqZSFYVM-HNqqcIV4V_pW/view?usp=drive_link"
                  variant="secondary"
                  size="lg"
                  external
                >
                  <Download size={16} />
                  Resume
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/contact" variant="ghost" size="lg">
                  Contact
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Social row */}
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[
                { icon: Github, href: siteConfig.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.06] text-zinc-500 transition-all hover:border-white/[0.12] hover:text-zinc-300 hover:bg-white/[0.02]"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
              Scroll
            </span>
            <motion.div
              className="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── WHO I AM ─── */}
      <section className="section-spacing" aria-labelledby="about-heading">
        <div className="page-container">
          <SectionHeader
            eyebrow="Who I Am"
            title="Engineering with intention"
          />
          <div className="grid gap-12 md:grid-cols-5 md:gap-16">
            {/* Left: Story */}
            <div className="md:col-span-3">
              <Reveal>
                <div className="space-y-4 section-prose">
                  <p>
                    I&apos;m a Computer Science student at{" "}
                    <span className="text-zinc-200 font-medium">
                      Ramaiah Institute of Technology, Bangalore
                    </span>{" "}
                    specializing in AI & ML. I design and build software that is fast,
                    scalable, and purposeful — from backend data pipelines to
                    AI-powered applications.
                  </p>
                  <p>
                    My work spans the full engineering stack: distributed backend
                    services, RAG-based intelligence systems, and production-grade
                    full-stack applications. I care deeply about architecture, developer
                    experience, and writing software that stands up to real-world load.
                  </p>
                  <p>
                    Currently building an AI-assisted data quality and observability
                    platform at{" "}
                    <span className="text-zinc-200 font-medium">
                      Hewlett Packard Enterprise
                    </span>{" "}
                    as part of a 5-member engineering team.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: Metrics */}
            <div className="md:col-span-2">
              <StaggerReveal className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2">
                {metrics.map((metric) => (
                  <StaggerItem key={metric.label}>
                    <div className="quick-stat text-center">
                      <div className="text-2xl font-bold text-zinc-100 tabular-nums">
                        <Counter
                          target={metric.value}
                          decimals={metric.decimals}
                          suffix={metric.suffix}
                        />
                      </div>
                      <p className="text-xs font-medium text-zinc-500">
                        {metric.label}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="page-container"><div className="divider" /></div>

      {/* ─── HOW I GOT HERE ─── */}
      <section className="section-spacing" aria-labelledby="journey-heading">
        <div className="page-container">
          <SectionHeader
            eyebrow="How I Got Here"
            title="The engineering path"
            subtitle="Every milestone shaped how I think about building software."
          />
          <Timeline items={journeyMilestones} />
        </div>
      </section>

      <div className="page-container"><div className="divider" /></div>

      {/* ─── THINGS I'VE BUILT ─── */}
      <section className="section-spacing" aria-labelledby="projects-heading">
        <div className="page-container">
          <SectionHeader
            eyebrow="Things I&apos;ve Built"
            title="Selected work"
            subtitle="Production-grade systems built to solve real problems."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-10 text-center">
              <Button href="/projects" variant="ghost" size="md">
                View All Projects
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="page-container"><div className="divider" /></div>

      {/* ─── WHERE I'VE WORKED ─── */}
      <section className="section-spacing" aria-labelledby="experience-heading">
        <div className="page-container">
          <SectionHeader
            eyebrow="Where I&apos;ve Worked"
            title={experience.company}
          />
          <Reveal>
            <div className="rounded-2xl border border-white/[0.06] bg-[#111113] p-6 md:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={15} className="text-zinc-500" />
                    <h3 className="text-base font-semibold text-zinc-100">
                      {experience.role}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-500">
                    {experience.period} · {experience.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1 sm:mt-0">
                  {experience.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag text-[11px]">{tech}</span>
                  ))}
                </div>
              </div>
              <p className="section-prose text-sm mb-5">
                {experience.overview}
              </p>
              <Button href="/experience" variant="ghost" size="sm">
                Read Engineering Case Study
                <ArrowRight size={14} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="page-container"><div className="divider" /></div>

      {/* ─── CURRENTLY & LOOKING FOR ─── */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8">
            {/* Currently */}
            <Reveal>
              <div className="rounded-2xl border border-white/[0.06] bg-[#111113] p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                    <Terminal size={18} className="text-emerald-500" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100 tracking-tight">Currently</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5 flex items-center gap-1.5">
                      <Code2 size={12} /> Building
                    </h4>
                    <p className="text-sm font-medium text-zinc-300">{currently.building}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5 flex items-center gap-1.5">
                      <Cpu size={12} /> Learning
                    </h4>
                    <p className="text-sm font-medium text-zinc-300">{currently.learning}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5 flex items-center gap-1.5">
                      <Target size={12} /> Focus
                    </h4>
                    <p className="text-sm font-medium text-zinc-300">{currently.focus}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Looking For */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/[0.06] bg-[#111113] p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10">
                    <Briefcase size={18} className="text-indigo-400" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100 tracking-tight">What I&apos;m Looking For</h2>
                </div>
                
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  I&apos;m seeking full-time opportunities where I can solve complex engineering problems and scale production systems.
                </p>

                <div className="flex flex-wrap gap-2">
                  {lookingFor.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-300 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="page-container"><div className="divider" /></div>

      {/* ─── WHAT'S NEXT ─── */}
      <section className="section-spacing" aria-label="Call to action">
        <div className="page-container text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
              Let&apos;s build something
              <br />
              <span className="text-gradient">meaningful together.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-zinc-500 max-w-md mx-auto">
              Open to full-time software engineering roles and interesting
              technical collaborations.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton>
                <Button href={`mailto:${siteConfig.email}`} variant="primary" size="lg">
                  <Mail size={16} />
                  Get in Touch
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href={siteConfig.github} variant="secondary" size="lg" external>
                  <Github size={16} />
                  GitHub
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href={siteConfig.linkedin} variant="outline" size="lg" external>
                  <Linkedin size={16} />
                  LinkedIn
                </Button>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
