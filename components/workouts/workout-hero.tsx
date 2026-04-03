import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EVENT } from "@/constants/event";
import type { Workout } from "@/constants/workouts-data";
import { Button } from "@/components/ui/button";

type WorkoutHeroProps = {
  workout: Workout;
};

export function WorkoutHero({ workout }: WorkoutHeroProps) {
  return (
    <header className="border-b border-theme-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8 sm:pb-14 sm:pt-10">
        <Button asChild variant="ghost" className="mb-6 px-0 uppercase">
          <Link href="/#provas" className="inline-flex items-center gap-2">
            <ArrowLeft className="size-4" />
            Voltar para as provas
          </Link>
        </Button>

        <p className="font-heading text-3xl uppercase tracking-[0.12em] text-primary sm:text-4xl">
          Prova {workout.number}
        </p>
        <h1 className="mt-1 font-heading text-6xl uppercase leading-none text-foreground sm:text-8xl">
          {workout.name}
        </h1>

        <p className="mt-5 inline bg-primary px-3 py-1 font-heading text-xl uppercase leading-snug text-primary-foreground [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
          {workout.timeCap}
        </p>

        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-300 sm:text-base">
          {EVENT.fullDate} · {EVENT.cityState}
        </p>

        <div className="mt-6">
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href={EVENT.regulationLink} download>
              Baixar PDF completo
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
