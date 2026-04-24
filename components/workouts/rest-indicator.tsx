type RestIndicatorProps = {
  workoutNumber: number;
};

export function RestIndicator({ workoutNumber }: RestIndicatorProps) {
  // Rest de 1:00 entre Prova 3 e Prova 4
  let message: string | null = null;

  if (workoutNumber === 3) {
    message = "⏱️ Rest 1:00 antes da Prova 4";
  } else if (workoutNumber === 4) {
    message = "⏱️ Rest 1:00 após Prova 3";
  }

  if (!message) return null;

  return (
    <div className="border-l-4 border-l-theme-primary bg-theme-primary/10 px-6 py-4 my-6">
      <p className="text-center font-heading text-lg uppercase tracking-[0.12em] text-theme-primary">
        {message}
      </p>
    </div>
  );
}
