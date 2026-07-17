import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Ishaan6286",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ishaanchawla24/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:45ishaan@gmail.com",
    icon: Mail,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#09090b]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-0.5 text-lg font-semibold tracking-tight text-zinc-100"
            >
              ISC
              <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                .
              </span>
            </Link>
            <p className="max-w-xs text-sm text-zinc-500 leading-relaxed">
              Building scalable backend systems, AI-powered applications, and
              production-ready software.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.06] text-zinc-500 transition-all hover:border-white/[0.12] hover:text-zinc-300 hover:bg-white/[0.02]"
                  aria-label={link.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04]">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Ishaan Singh Chawla. Built with Next.js
            & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
