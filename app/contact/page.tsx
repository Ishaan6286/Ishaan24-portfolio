import type { Metadata } from "next";
import { Mail, ArrowRight, Copy } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { Reveal } from "@/components/animations/reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { siteConfig } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center pt-24 pb-20">
      <div className="page-container w-full max-w-4xl">
        <Reveal>
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl md:text-7xl">
              Let&apos;s build something
              <br />
              <span className="text-gradient">meaningful.</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-zinc-400 leading-relaxed">
              I&apos;m currently open to full-time Software Engineering roles and interesting collaborations. Feel free to reach out.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 md:mt-24">
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/[0.06] bg-[#111113] p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.02]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.06] bg-[#09090b] text-zinc-400 group-hover:text-zinc-100 group-hover:scale-110 transition-all duration-300">
                <Mail size={20} />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-zinc-200">Email</div>
                <div className="mt-1 text-xs text-zinc-500">45ishaan@gmail.com</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/[0.06] bg-[#111113] p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.02]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.06] bg-[#09090b] text-zinc-400 group-hover:text-zinc-100 group-hover:scale-110 transition-all duration-300">
                <Linkedin size={20} />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-zinc-200">LinkedIn</div>
                <div className="mt-1 text-xs text-zinc-500">Connect with me</div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/[0.06] bg-[#111113] p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.02]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.06] bg-[#09090b] text-zinc-400 group-hover:text-zinc-100 group-hover:scale-110 transition-all duration-300">
                <Github size={20} />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-zinc-200">GitHub</div>
                <div className="mt-1 text-xs text-zinc-500">View my code</div>
              </div>
            </a>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
