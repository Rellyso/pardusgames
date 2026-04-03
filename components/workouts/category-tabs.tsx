"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type CategoryTabItem = {
  id: string;
  label: string;
};

type CategoryTabsProps = {
  categories: CategoryTabItem[];
};

export function CategoryTabs({ categories }: CategoryTabsProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");

  const sectionIds = useMemo(
    () => categories.map((category) => category.id),
    [categories],
  );

  useEffect(() => {
    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) =>
              entryB.intersectionRatio - entryA.intersectionRatio,
          );

        if (visibleEntries[0]?.target.id) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  if (!categories.length) return null;

  return (
    <div className="sticky top-20 z-30 border-y border-theme-border bg-black/95 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 py-3">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => {
              const target = document.getElementById(category.id);
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                setActiveId(category.id);
              }
            }}
            className={cn(
              "shrink-0 rounded-sm border px-4 py-2 font-heading text-lg uppercase tracking-[0.08em] transition-colors",
              activeId === category.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
            )}
          >
            {category.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
