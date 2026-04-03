import { LockKeyhole, MoveRight } from "lucide-react";
import Link from "next/link";
import type { Workout } from "@/constants/workouts-data";
import { Button } from "@/components/ui/button";

type WorkoutCardProps = {
  workout: Workout;
};

export function WorkoutCard({ workout }: WorkoutCardProps) {
  const isLocked = workout.status === "locked";

  return (
    <article
      className={[
        "flex h-full flex-col rounded-md border p-4 sm:p-5",
        isLocked
          ? "border-theme-border bg-[#141414] opacity-80"
          : "border-primary/60 bg-card text-card-foreground",
      ].join(" ")}
    >
      <p className="text-xs uppercase tracking-[0.14em] text-theme-primary">
        Prova {workout.number}
      </p>
      <h3 className="mt-2 font-heading text-4xl uppercase leading-none sm:text-5xl">
        {workout.name}
      </h3>
      <p className="mt-4 text-sm uppercase tracking-[0.12em] text-zinc-300">
        {workout.timeCap}
      </p>

      <div className="mt-6">
        {isLocked ? (
          <span className="inline-flex items-center gap-2 rounded-sm border border-theme-border px-3 py-2 text-xs uppercase tracking-[0.12em] text-zinc-400">
            <LockKeyhole className="size-4" />
            Bloqueado
          </span>
        ) : (
          <Button asChild className="w-full sm:w-auto">
            <Link
              href={`/provas/${workout.slug}`}
              className="inline-flex items-center gap-2"
            >
              Ver detalhes
              <MoveRight className="size-4" />
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
}
