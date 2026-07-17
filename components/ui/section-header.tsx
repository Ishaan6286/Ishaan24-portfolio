import { Reveal } from "@/components/animations/reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""} ${className ?? ""}`}
    >
      <Reveal delay={0}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl lg:text-[2.75rem] leading-[1.15]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-base text-zinc-500 leading-relaxed md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
