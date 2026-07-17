"use client";

export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Primary ambient glow */}
      <div
        className="absolute -top-[40%] left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5), transparent 70%)",
        }}
      />

      {/* Secondary glow - bottom right */}
      <div
        className="absolute -bottom-[20%] -right-[10%] h-[60vh] w-[50vw] rounded-full opacity-[0.02]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(161, 161, 170, 0.6), transparent 70%)",
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
