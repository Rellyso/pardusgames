import type { RoundBlock } from "@/constants/workouts-data";

type RoundsTimelineProps = {
  rounds: RoundBlock[];
};

function getNewExercises(currentBlock: RoundBlock, previousBlock?: RoundBlock) {
  const previous = new Set(previousBlock?.exercises ?? []);
  return currentBlock.exercises.map((exercise) => ({
    value: exercise,
    isNew: !previous.has(exercise),
  }));
}

export function RoundsTimeline({ rounds }: RoundsTimelineProps) {
  return (
    <div className="space-y-4">
      {rounds.map((round, index) => {
        const blockLabel = `Bloco ${index + 1}`;
        const exercises = getNewExercises(round, rounds[index - 1]);
        const roundKey = `${round.description}-${round.exercises.join("|")}`;

        return (
          <article
            key={roundKey}
            className="grid grid-cols-[auto_1fr] gap-3 sm:gap-4"
          >
            <div className="mt-1 flex flex-col items-center">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </span>
              {index < rounds.length - 1 ? (
                <span className="mt-2 h-full w-px bg-theme-border" />
              ) : null}
            </div>

            <div className="rounded-sm border border-border bg-card p-4 text-card-foreground">
              <p className="font-heading text-xl uppercase leading-none">
                {blockLabel}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-theme-primary">
                {round.description}
              </p>

              <ul className="mt-3 space-y-2">
                {exercises.map((exercise) => (
                  <li
                    key={exercise.value}
                    className="flex items-start gap-2 text-sm uppercase tracking-[0.06em] text-zinc-200"
                  >
                    <span
                      className={
                        exercise.isNew
                          ? "mt-1 inline-block size-2 shrink-0 rounded-full bg-primary"
                          : "mt-1 inline-block size-2 shrink-0 rounded-full bg-zinc-600"
                      }
                    />
                    <span>{exercise.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
