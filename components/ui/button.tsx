import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-100 text-zinc-900 hover:bg-white font-medium",
  secondary:
    "bg-white/[0.06] text-zinc-200 hover:bg-white/[0.1] border border-white/[0.06] hover:border-white/[0.12]",
  ghost:
    "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]",
  outline:
    "border border-white/[0.1] text-zinc-300 hover:bg-white/[0.04] hover:border-white/[0.16]",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
  md: "px-4 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-6 py-3 text-sm rounded-xl gap-2",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;

  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
