import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPublishedWorkouts } from "@/constants/workouts-data";

type WorkoutsNavProps = {
  currentNumber: number;
};

export function WorkoutsNav({ currentNumber }: WorkoutsNavProps) {
  const workouts = getPublishedWorkouts();
  const currentIndex = workouts.findIndex((w) => w.number === currentNumber);

  const previous = currentIndex > 0 ? workouts[currentIndex - 1] : null;
  const next =
    currentIndex < workouts.length - 1 ? workouts[currentIndex + 1] : null;

  return (
    <nav className="w-full border-t border-theme-border bg-black py-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4">
        {previous ? (
          <Link
            href={`/provas/${previous.slug}`}
            className="flex items-center gap-2 rounded-lg border border-theme-primary px-4 py-2 text-sm uppercase tracking-[0.12em] text-theme-primary transition-colors hover:bg-theme-primary hover:text-black"
          >
            <ChevronLeft className="size-4" />
            Prova {previous.number}
          </Link>
        ) : (
          <div />
        )}

        <span className="text-center text-sm uppercase tracking-[0.12em] text-foreground">
          Prova {currentNumber} de {workouts.length}
        </span>

        {next ? (
          <Link
            href={`/provas/${next.slug}`}
            className="flex items-center gap-2 rounded-lg border border-theme-primary px-4 py-2 text-sm uppercase tracking-[0.12em] text-theme-primary transition-colors hover:bg-theme-primary hover:text-black"
          >
            Prova {next.number}
            <ChevronRight className="size-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
