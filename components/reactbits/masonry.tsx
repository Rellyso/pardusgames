"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type MasonryItem = {
  id: string;
  img: string;
  url: string;
  height: number;
  title?: string;
};

type MasonryProps = {
  items: MasonryItem[];
  animateFrom?: "top" | "bottom" | "left" | "right" | "center" | "random";
  duration?: number;
  stagger?: number;
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  className?: string;
};

function initialTransform(
  direction: MasonryProps["animateFrom"],
  index: number,
) {
  if (direction === "top") return "translateY(-28px)";
  if (direction === "left") return "translateX(-24px)";
  if (direction === "right") return "translateX(24px)";
  if (direction === "center") return "scale(0.94)";
  if (direction === "random")
    return index % 2 === 0 ? "translateY(24px)" : "translateY(-24px)";
  return "translateY(28px)";
}

export function Masonry({
  items,
  animateFrom = "bottom",
  duration = 0.6,
  stagger = 0.05,
  scaleOnHover = true,
  hoverScale = 1.04,
  blurToFocus = true,
  colorShiftOnHover = false,
  className,
}: MasonryProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={cn("columns-2 gap-3 md:columns-3", className)}>
      {items.map((item, index) => (
        <article
          key={item.id}
          className="mb-3 break-inside-avoid overflow-hidden rounded-md border border-theme-border bg-[#121212]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : initialTransform(animateFrom, index),
            transition: `opacity ${duration}s ease, transform ${duration}s ease`,
            transitionDelay: `${index * stagger}s`,
            filter: blurToFocus && !mounted ? "blur(6px)" : "none",
          }}
        >
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative w-full" style={{ height: item.height }}>
              <Image
                src={item.img}
                alt={item.title ?? "Publicacao Pardus Games"}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className={cn(
                  "object-cover transition duration-500",
                  scaleOnHover && "group-hover:scale-105",
                )}
                style={{
                  transform: scaleOnHover
                    ? mounted
                      ? "scale(1)"
                      : `scale(${hoverScale})`
                    : undefined,
                }}
              />
              <div
                className={cn(
                  "absolute inset-0 transition duration-300",
                  colorShiftOnHover
                    ? "bg-linear-to-t from-theme-primary/30 to-transparent opacity-0 group-hover:opacity-100"
                    : "bg-black/0 group-hover:bg-black/35",
                )}
              />
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
