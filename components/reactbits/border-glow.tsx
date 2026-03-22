"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BorderGlowProps = {
  children: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
};

export function BorderGlow({
  children,
  className,
  edgeSensitivity = 30,
  glowColor = "44 100% 45%",
  backgroundColor = "#1A1A1A",
  borderRadius = 8,
  glowRadius = 42,
  glowIntensity = 1,
}: BorderGlowProps) {
  const glowAlpha = Math.min(Math.max(glowIntensity, 0.1), 3);

  return (
    <div
      className={cn(
        "group relative overflow-hidden border border-theme-border",
        className,
      )}
      style={{ borderRadius, background: backgroundColor }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          borderRadius,
          background: `radial-gradient(circle ${glowRadius}px at 50% 0%, hsl(${glowColor} / ${glowAlpha}), transparent 72%), radial-gradient(circle ${glowRadius}px at 100% 50%, hsl(${glowColor} / ${glowAlpha}), transparent 72%), radial-gradient(circle ${glowRadius}px at 0% 50%, hsl(${glowColor} / ${glowAlpha}), transparent 72%), radial-gradient(circle ${glowRadius}px at 50% 100%, hsl(${glowColor} / ${glowAlpha}), transparent 72%)`,
          filter: `blur(${Math.max(edgeSensitivity / 6, 4)}px)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
