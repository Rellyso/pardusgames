export type RoundBlock = {
  description: string;
  exercises: string[];
};

export type Division = {
  name: string;
  rounds: RoundBlock[];
  notes?: string;
};

export type WorkoutCategory = {
  key: "scaled" | "amador" | "intermediario" | "rx";
  name: "SCALED" | "AMADOR" | "INTERMEDIÁRIO" | "RX";
  divisions: Division[];
};

export type CategoryFlow = {
  categoryKey: WorkoutCategory["key"];
  divisionName: string;
  heading: string;
  blocks: string[];
  rules?: string;
};

export type WorkoutStatus = "published" | "locked";

export type Workout = {
  slug: string;
  number: number;
  name: string;
  timeCap: string;
  status: WorkoutStatus;
  categories?: WorkoutCategory[];
  flowByCategory?: CategoryFlow[];
};

export const workouts: Workout[] = [
  {
    slug: "welcome",
    number: 1,
    name: "Welcome",
    timeCap: "For time 12'",
    status: "published",
    categories: [
      {
        key: "scaled",
        name: "SCALED",
        divisions: [
          {
            name: "MAS/FEM",
            rounds: [
              {
                description: "3 rounds",
                exercises: ["20 High Knees (Sincro 2)", "80 Single Unders"],
              },
              {
                description: "2 rounds",
                exercises: [
                  "20 One Db Snatch",
                  "20 High Knees (Sincro 2)",
                  "80 Single Unders",
                ],
              },
              {
                description: "1 round",
                exercises: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "20 High Knees (Sincro 2)",
                  "80 Single Unders",
                ],
              },
            ],
            notes: "Shuttle-Run: 7m = 1 rep",
          },
        ],
      },
      {
        key: "amador",
        name: "AMADOR",
        divisions: [
          {
            name: "MAS/FEM",
            rounds: [
              {
                description: "3 rounds",
                exercises: ["15 Leg Raises (Sincro 2)", "100 Single Unders"],
              },
              {
                description: "2 rounds",
                exercises: [
                  "20 One Db Snatch",
                  "15 Leg Raises (Sincro 2)",
                  "100 Single Unders",
                ],
              },
              {
                description: "1 round",
                exercises: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "15 Toes to Bar (1 atleta em hold)",
                  "100 Single Unders",
                ],
              },
            ],
            notes: "Shuttle-Run: 7m = 1 rep",
          },
        ],
      },
      {
        key: "intermediario",
        name: "INTERMEDIÁRIO",
        divisions: [
          {
            name: "MASCULINO",
            rounds: [
              {
                description: "3 rounds",
                exercises: ["15 Toes to Bar (Sincro 2)", "50 Double Unders"],
              },
              {
                description: "2 rounds",
                exercises: [
                  "20 One Db Snatch",
                  "15 Toes to Bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
              {
                description: "1 round",
                exercises: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "15 Toes to Bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
            ],
            notes: "Shuttle-Run: 7,5m = 1 rep",
          },
          {
            name: "FEMININO",
            rounds: [
              {
                description: "3 rounds",
                exercises: ["10 Toes to Bar (Sincro 2)", "50 Double Unders"],
              },
              {
                description: "2 rounds",
                exercises: [
                  "20 One Db Snatch",
                  "10 Toes to Bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
              {
                description: "1 round",
                exercises: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "10 Toes to Bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
            ],
            notes: "Shuttle-Run: 7m = 1 rep",
          },
        ],
      },
      {
        key: "rx",
        name: "RX",
        divisions: [
          {
            name: "MASCULINO",
            rounds: [
              {
                description: "3 rounds",
                exercises: ["20 Toes to Bar (Sincro 2)", "50 Double Unders"],
              },
              {
                description: "2 rounds",
                exercises: [
                  "20 One Db Snatch",
                  "20 Toes to Bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
              {
                description: "1 round",
                exercises: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "20 Toes to Bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
            ],
            notes: "Shuttle-Run: 7,5m = 1 rep",
          },
          {
            name: "MISTO",
            rounds: [
              {
                description: "3 rounds",
                exercises: ["20 Toes to Bar (Sincro 2)", "50 Double Unders"],
              },
              {
                description: "2 rounds",
                exercises: [
                  "20 One Db Snatch",
                  "20 Toes to Bar (Sincro 2)",
                  "75 Double Unders",
                ],
              },
              {
                description: "1 round",
                exercises: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "20 Toes to Bar (Sincro 2)",
                  "100 Double Unders",
                ],
              },
            ],
            notes: "Shuttle-Run: 7m = 1 rep",
          },
        ],
      },
    ],
    flowByCategory: [
      {
        categoryKey: "scaled",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA - SCALED MAS/FEM",
        blocks: [
          "20 High Knees (Sincro 2) e 80 Single Unders.",
          "20 One Dumbbell Snatch, 20 High Knees (Sincro 2) e 80 Single Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 20 High Knees (Sincro 2) e 80 Single Unders.",
        ],
        rules:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição, e cada 7 metros equivalem a 1 repetição. Os Single Unders e os Dumbbell Snatches podem ser divididos entre os atletas, conforme a estratégia da equipe. Nos High Knees, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização.",
      },
      {
        categoryKey: "amador",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA - AMADOR MAS/FEM",
        blocks: [
          "15 Leg Raises (Sincro 2) e 100 Single Unders.",
          "20 One Dumbbell Snatch, 15 Leg Raises (Sincro 2) e 100 Single Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 15 Toes to Bar (1 atleta suspenso na barra) e 100 Single Unders.",
        ],
        rules:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição, e cada 7 metros equivalem a 1 repetição. Os Single Unders e os Dumbbell Snatches podem ser divididos entre os atletas, conforme a estratégia da equipe. Nos Leg Raises, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização. No último bloco, os Toes to Bar não são sincronizados, porém, um atleta deve ficar suspenso na barra para validar as repetições de Toes to Bar.",
      },
      {
        categoryKey: "intermediario",
        divisionName: "MASCULINO",
        heading: "FLOW DA PROVA - INTERMEDIÁRIO MASCULINO",
        blocks: [
          "15 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 One Dumbbell Snatch, 15 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 15 Toes to Bar (Sincro 2) e 50 Double Unders.",
        ],
        rules:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição, e cada 7,5 metros equivalem a 1 repetição. Os Double Unders e os Dumbbell Snatches podem ser divididos entre os atletas, conforme a estratégia da equipe. Nos Toes to Bar, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização.",
      },
      {
        categoryKey: "intermediario",
        divisionName: "FEMININO",
        heading: "FLOW DA PROVA - INTERMEDIÁRIO FEMININO",
        blocks: [
          "10 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 One Dumbbell Snatch, 10 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 10 Toes to Bar (Sincro 2) e 50 Double Unders.",
        ],
        rules:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição, e cada 7 metros equivalem a 1 repetição. Os Double Unders e os Dumbbell Snatches podem ser divididos entre os atletas, conforme a estratégia da equipe. Em todos os blocos, os Toes to Bar devem ser executados de forma sincronizada em dupla.",
      },
      {
        categoryKey: "rx",
        divisionName: "MASCULINO",
        heading: "FLOW DA PROVA - RX MASCULINO",
        blocks: [
          "20 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 One Dumbbell Snatch, 20 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 20 Toes to Bar (Sincro 2) e 50 Double Unders.",
        ],
        rules:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição, e cada 7,5 metros equivalem a 1 repetição. Os Double Unders e os Dumbbell Snatches podem ser divididos entre os atletas, conforme a estratégia da equipe. Nos Toes to Bar, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização em todos os blocos.",
      },
      {
        categoryKey: "rx",
        divisionName: "MISTO",
        heading: "FLOW DA PROVA - RX MISTO",
        blocks: [
          "20 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 One Dumbbell Snatch, 20 Toes to Bar (Sincro 2) e 75 Double Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 20 Toes to Bar (Sincro 2) e 100 Double Unders.",
        ],
        rules:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição, e cada 7 metros equivalem a 1 repetição. Os Double Unders e os Dumbbell Snatches podem ser divididos entre os atletas, conforme a estratégia da equipe. Nos Toes to Bar, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização em todos os blocos.",
      },
    ],
  },
  {
    slug: "prova-2",
    number: 2,
    name: "Em breve",
    timeCap: "-",
    status: "locked",
  },
  {
    slug: "prova-3",
    number: 3,
    name: "Em breve",
    timeCap: "-",
    status: "locked",
  },
];

export function getWorkoutBySlug(slug: string) {
  return workouts.find((workout) => workout.slug === slug);
}

export function getPublishedWorkouts() {
  return workouts.filter((workout) => workout.status === "published");
}
