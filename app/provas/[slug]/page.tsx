import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategorySection } from "@/components/workouts/category-section";
import { CategoryTabs } from "@/components/workouts/category-tabs";
import { WorkoutHero } from "@/components/workouts/workout-hero";
import {
  getPublishedWorkouts,
  getWorkoutBySlug,
} from "@/constants/workouts-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedWorkouts().map((workout) => ({ slug: workout.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const workout = getWorkoutBySlug(slug);

  if (!workout || workout.status !== "published") {
    return {
      title: "Prova não encontrada | Pardus Games 2026",
      description: "A prova solicitada não está disponível.",
    };
  }

  return {
    title: `Prova ${workout.number} - ${workout.name} | Pardus Games 2026`,
    description: `Confira os detalhes da prova ${workout.number}: categorias, rounds e regras de sincronização.`,
    openGraph: {
      title: `Prova ${workout.number} - ${workout.name} | Pardus Games 2026`,
      description:
        "Veja os WODs completos por categoria: Scaled, Amador, Intermediário e RX.",
      url: `https://pardusgames.com.br/provas/${workout.slug}`,
      siteName: "Pardus Games 2026",
      images: [{ url: "https://pardusgames.com.br/og-image.png" }],
    },
  };
}

function getCategoryId(categoryKey: string) {
  return `category-${categoryKey}`;
}

export default async function WorkoutPage({ params }: PageProps) {
  const { slug } = await params;
  const workout = getWorkoutBySlug(slug);

  if (!workout || workout.status !== "published" || !workout.categories) {
    notFound();
  }

  const categoryTabs = workout.categories.map((category) => ({
    id: getCategoryId(category.key),
    label: category.name,
  }));

  return (
    <main className="min-h-screen bg-background">
      <WorkoutHero workout={workout} />

      <CategoryTabs categories={categoryTabs} />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:py-10">
        {workout.categories.map((category) => (
          <CategorySection
            key={category.key}
            category={category}
            categoryId={getCategoryId(category.key)}
            flows={workout.flowByCategory ?? []}
          />
        ))}
      </div>
    </main>
  );
}
