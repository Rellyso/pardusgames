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
  nextSlug?: string;
  previousSlug?: string;
  restTime?: string;
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
    slug: "hybrid-style",
    number: 2,
    name: "Hybrid Style",
    timeCap: "For time 14'",
    status: "published",
    categories: [
      {
        key: "scaled",
        name: "SCALED",
        divisions: [
          {
            name: "FEMININO",
            rounds: [
              {
                description: "1ª volta",
                exercises: ["100m Sled Push (60kg)", "1 Volta Run (juntos)"],
              },
              {
                description: "2ª volta",
                exercises: [
                  "50m Burpee Broad Jump (Sincro 2)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "3ª volta",
                exercises: [
                  "50m Walking Lunge (Sincro 3)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "4ª volta",
                exercises: ["100m Sled Pull (60kg)", "1 Volta Run (juntos)"],
              },
            ],
            notes: "1 volta = 150m ao redor da arena",
          },
          {
            name: "MASCULINO",
            rounds: [
              {
                description: "1ª volta",
                exercises: ["100m Sled Push (70kg)", "1 Volta Run (juntos)"],
              },
              {
                description: "2ª volta",
                exercises: [
                  "50m Burpee Broad Jump (Sincro 2)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "3ª volta",
                exercises: [
                  "50m Walking Lunge (Sincro 3)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "4ª volta",
                exercises: ["100m Sled Pull (70kg)", "1 Volta Run (juntos)"],
              },
            ],
            notes: "1 volta = 150m ao redor da arena",
          },
        ],
      },
      {
        key: "amador",
        name: "AMADOR",
        divisions: [
          {
            name: "FEMININO",
            rounds: [
              {
                description: "1ª volta",
                exercises: ["100m Sled Push (70kg)", "1 Volta Run (juntos)"],
              },
              {
                description: "2ª volta",
                exercises: [
                  "50m Burpee Broad Jump (Sincro 2)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "3ª volta",
                exercises: [
                  "50m Walking Lunge (Sincro 3)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "4ª volta",
                exercises: ["100m Sled Pull (70kg)", "1 Volta Run (juntos)"],
              },
            ],
            notes: "1 volta = 150m ao redor da arena",
          },
          {
            name: "MASCULINO",
            rounds: [
              {
                description: "1ª volta",
                exercises: ["100m Sled Push (80kg)", "1 Volta Run (juntos)"],
              },
              {
                description: "2ª volta",
                exercises: [
                  "50m Burpee Broad Jump (Sincro 2)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "3ª volta",
                exercises: [
                  "50m Walking Lunge (Sincro 3)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "4ª volta",
                exercises: ["100m Sled Pull (80kg)", "1 Volta Run (juntos)"],
              },
            ],
            notes: "1 volta = 150m ao redor da arena",
          },
        ],
      },
      {
        key: "intermediario",
        name: "INTERMEDIÁRIO",
        divisions: [
          {
            name: "FEMININO",
            rounds: [
              {
                description: "1ª volta",
                exercises: ["100m Sled Push (80kg)", "1 Volta Run (juntos)"],
              },
              {
                description: "2ª volta",
                exercises: [
                  "50m Burpee Broad Jump (Sincro 2)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "3ª volta",
                exercises: [
                  "50m Walking Lunge (Sincro 3)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "4ª volta",
                exercises: ["100m Sled Pull (80kg)", "1 Volta Run (juntos)"],
              },
            ],
            notes: "1 volta = 150m ao redor da arena",
          },
          {
            name: "MASCULINO",
            rounds: [
              {
                description: "1ª volta",
                exercises: ["100m Sled Push (90kg)", "1 Volta Run (juntos)"],
              },
              {
                description: "2ª volta",
                exercises: [
                  "50m Burpee Broad Jump (Sincro 2)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "3ª volta",
                exercises: [
                  "50m Walking Lunge (Sincro 3)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "4ª volta",
                exercises: ["100m Sled Pull (90kg)", "1 Volta Run (juntos)"],
              },
            ],
            notes: "1 volta = 150m ao redor da arena",
          },
        ],
      },
      {
        key: "rx",
        name: "RX",
        divisions: [
          {
            name: "MASCULINO/MISTO",
            rounds: [
              {
                description: "1ª volta",
                exercises: ["100m Sled Push (100kg)", "1 Volta Run (juntos)"],
              },
              {
                description: "2ª volta",
                exercises: [
                  "50m Burpee Broad Jump (Sincro 2)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "3ª volta",
                exercises: [
                  "50m Walking Lunge (Sincro 3)",
                  "1 Volta Run (juntos)",
                ],
              },
              {
                description: "4ª volta",
                exercises: ["100m Sled Pull (100kg)", "1 Volta Run (juntos)"],
              },
            ],
            notes: "1 volta = 150m ao redor da arena",
          },
        ],
      },
    ],
    flowByCategory: [
      {
        categoryKey: "scaled",
        divisionName: "FEMININO",
        heading: "FLOW DA PROVA - SCALED FEMININO",
        blocks: [
          "100m Sled Push (60kg)",
          "1 Volta Run com os 3 atletas juntos",
          "50m Burpee Broad Jump sincronizados com 2 atletas",
          "50m Walking Lunge com 3 atletas sincronizados",
          "100m Sled Pull (60kg)",
        ],
        rules:
          "Corrida: Os 3 atletas devem estar juntos, segurando uma corda simultaneamente. Burpee Broad Jump: 2 atletas sincronizados enquanto o terceiro acompanha para fazer as trocas. Walking Lunge: 3 atletas sincronizados em fila, segurando uma corda. Sled: Estratégia livre de divisão entre atletas.",
      },
      {
        categoryKey: "scaled",
        divisionName: "MASCULINO",
        heading: "FLOW DA PROVA - SCALED MASCULINO",
        blocks: [
          "100m Sled Push (70kg)",
          "1 Volta Run com os 3 atletas juntos",
          "50m Burpee Broad Jump sincronizados com 2 atletas",
          "50m Walking Lunge com 3 atletas sincronizados",
          "100m Sled Pull (70kg)",
        ],
        rules:
          "Corrida: Os 3 atletas devem estar juntos, segurando uma corda simultaneamente. Burpee Broad Jump: 2 atletas sincronizados enquanto o terceiro acompanha para fazer as trocas. Walking Lunge: 3 atletas sincronizados em fila, segurando uma corda. Sled: Estratégia livre de divisão entre atletas.",
      },
      {
        categoryKey: "amador",
        divisionName: "FEMININO",
        heading: "FLOW DA PROVA - AMADOR FEMININO",
        blocks: [
          "100m Sled Push (70kg)",
          "1 Volta Run com os 3 atletas juntos",
          "50m Burpee Broad Jump sincronizados com 2 atletas",
          "50m Walking Lunge com 3 atletas sincronizados",
          "100m Sled Pull (70kg)",
        ],
        rules:
          "Corrida: Os 3 atletas devem estar juntos, segurando uma corda simultaneamente. Burpee Broad Jump: 2 atletas sincronizados enquanto o terceiro acompanha para fazer as trocas. Walking Lunge: 3 atletas sincronizados em fila, segurando uma corda. Sled: Estratégia livre de divisão entre atletas.",
      },
      {
        categoryKey: "amador",
        divisionName: "MASCULINO",
        heading: "FLOW DA PROVA - AMADOR MASCULINO",
        blocks: [
          "100m Sled Push (80kg)",
          "1 Volta Run com os 3 atletas juntos",
          "50m Burpee Broad Jump sincronizados com 2 atletas",
          "50m Walking Lunge com 3 atletas sincronizados",
          "100m Sled Pull (80kg)",
        ],
        rules:
          "Corrida: Os 3 atletas devem estar juntos, segurando uma corda simultaneamente. Burpee Broad Jump: 2 atletas sincronizados enquanto o terceiro acompanha para fazer as trocas. Walking Lunge: 3 atletas sincronizados em fila, segurando uma corda. Sled: Estratégia livre de divisão entre atletas.",
      },
      {
        categoryKey: "intermediario",
        divisionName: "FEMININO",
        heading: "FLOW DA PROVA - INTERMEDIÁRIO FEMININO",
        blocks: [
          "100m Sled Push (80kg)",
          "1 Volta Run com os 3 atletas juntos",
          "50m Burpee Broad Jump sincronizados com 2 atletas",
          "50m Walking Lunge com 3 atletas sincronizados",
          "100m Sled Pull (80kg)",
        ],
        rules:
          "Corrida: Os 3 atletas devem estar juntos, segurando uma corda simultaneamente. Burpee Broad Jump: 2 atletas sincronizados enquanto o terceiro acompanha para fazer as trocas. Walking Lunge: 3 atletas sincronizados em fila, segurando uma corda. Sled: Estratégia livre de divisão entre atletas.",
      },
      {
        categoryKey: "intermediario",
        divisionName: "MASCULINO",
        heading: "FLOW DA PROVA - INTERMEDIÁRIO MASCULINO",
        blocks: [
          "100m Sled Push (90kg)",
          "1 Volta Run com os 3 atletas juntos",
          "50m Burpee Broad Jump sincronizados com 2 atletas",
          "50m Walking Lunge com 3 atletas sincronizados",
          "100m Sled Pull (90kg)",
        ],
        rules:
          "Corrida: Os 3 atletas devem estar juntos, segurando uma corda simultaneamente. Burpee Broad Jump: 2 atletas sincronizados enquanto o terceiro acompanha para fazer as trocas. Walking Lunge: 3 atletas sincronizados em fila, segurando uma corda. Sled: Estratégia livre de divisão entre atletas.",
      },
      {
        categoryKey: "rx",
        divisionName: "MASCULINO/MISTO",
        heading: "FLOW DA PROVA - RX MASCULINO/MISTO",
        blocks: [
          "100m Sled Push (100kg)",
          "1 Volta Run com os 3 atletas juntos",
          "50m Burpee Broad Jump sincronizados com 2 atletas",
          "50m Walking Lunge com 3 atletas sincronizados",
          "100m Sled Pull (100kg)",
        ],
        rules:
          "Corrida: Os 3 atletas devem estar juntos, segurando uma corda simultaneamente. Burpee Broad Jump: 2 atletas sincronizados enquanto o terceiro acompanha para fazer as trocas. Walking Lunge: 3 atletas sincronizados em fila, segurando uma corda. Sled: Estratégia livre de divisão entre atletas.",
      },
    ],
  },
  {
    slug: "all-forces-to-9-problems-prova-3",
    number: 3,
    name: "All Forces to 9 Problems - Prova 3",
    timeCap: "For time 11'",
    status: "published",
    nextSlug: "all-forces-to-9-problems-prova-4",
    restTime: "1:00",
    categories: [
      {
        key: "scaled",
        name: "SCALED",
        divisions: [
          {
            name: "MAS/FEM",
            rounds: [
              {
                description: "9 rounds alternando A → B → C",
                exercises: [
                  "10 Wall Balls",
                  "5 Box Jump Over Step Down (Step Down obrigatório)",
                  "10 One DB Hang Clean and Jerk",
                ],
              },
            ],
            notes:
              "Cada atleta completa 3 rounds (total 9 rounds). A ordem de rotação é: A → B → C → A...",
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
                description: "9 rounds alternando A → B → C",
                exercises: [
                  "10 Wall Balls",
                  "5 Box Jump Over Step Down (Step Down obrigatório)",
                  "10 One DB Hang Clean and Jerk",
                ],
              },
            ],
            notes:
              "Cada atleta completa 3 rounds (total 9 rounds). A ordem de rotação é: A → B → C → A...",
          },
        ],
      },
      {
        key: "intermediario",
        name: "INTERMEDIÁRIO",
        divisions: [
          {
            name: "MAS/FEM",
            rounds: [
              {
                description: "9 rounds alternando A → B → C",
                exercises: [
                  "10 Wall Balls",
                  "5 Box Jump Over Step Down (Step Down obrigatório)",
                  "10 One DB Hang Clean and Jerk",
                ],
              },
            ],
            notes:
              "Cada atleta completa 3 rounds (total 9 rounds). A ordem de rotação é: A → B → C → A...",
          },
        ],
      },
      {
        key: "rx",
        name: "RX",
        divisions: [
          {
            name: "MAS/FEM",
            rounds: [
              {
                description: "9 rounds alternando A → B → C",
                exercises: [
                  "10 Wall Balls",
                  "5 Box Jump Over Step Down (Step Down obrigatório)",
                  "10 One DB Hang Clean and Jerk",
                ],
              },
            ],
            notes:
              "Cada atleta completa 3 rounds (total 9 rounds). A ordem de rotação é: A → B → C → A...",
          },
        ],
      },
    ],
    flowByCategory: [
      {
        categoryKey: "scaled",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA 3 - SCALED",
        blocks: [
          "9 rounds alternando entre atletas A, B e C, obrigatoriamente nessa ordem",
          "10 Wall Balls, 5 Box Jump Over Step Down (Step Down obrigatório), 10 One DB Hang Clean and Jerk",
          "Cada atleta completa 3 rounds (total 9 rounds para a equipe)",
          "O tempo é registrado ao final do último round ou ao atingir o time cap",
        ],
        rules:
          "Os atletas devem alternar na ordem A → B → C obrigatoriamente. O Step Down no Box Jump é obrigatório. O Box Jump Over Step Down significa saltar sobre a caixa e descer com um pé de cada vez (step down).",
      },
      {
        categoryKey: "amador",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA 3 - AMADOR",
        blocks: [
          "9 rounds alternando entre atletas A, B e C, obrigatoriamente nessa ordem",
          "10 Wall Balls, 5 Box Jump Over Step Down (Step Down obrigatório), 10 One DB Hang Clean and Jerk",
          "Cada atleta completa 3 rounds (total 9 rounds para a equipe)",
          "O tempo é registrado ao final do último round ou ao atingir o time cap",
        ],
        rules:
          "Os atletas devem alternar na ordem A → B → C obrigatoriamente. O Step Down no Box Jump é obrigatório. O Box Jump Over Step Down significa saltar sobre a caixa e descer com um pé de cada vez (step down).",
      },
      {
        categoryKey: "intermediario",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA 3 - INTERMEDIÁRIO",
        blocks: [
          "9 rounds alternando entre atletas A, B e C, obrigatoriamente nessa ordem",
          "10 Wall Balls, 5 Box Jump Over Step Down (Step Down obrigatório), 10 One DB Hang Clean and Jerk",
          "Cada atleta completa 3 rounds (total 9 rounds para a equipe)",
          "O tempo é registrado ao final do último round ou ao atingir o time cap",
        ],
        rules:
          "Os atletas devem alternar na ordem A → B → C obrigatoriamente. O Step Down no Box Jump é obrigatório. O Box Jump Over Step Down significa saltar sobre a caixa e descer com um pé de cada vez (step down).",
      },
      {
        categoryKey: "rx",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA 3 - RX",
        blocks: [
          "9 rounds alternando entre atletas A, B e C, obrigatoriamente nessa ordem",
          "10 Wall Balls, 5 Box Jump Over Step Down (Step Down obrigatório), 10 One DB Hang Clean and Jerk",
          "Cada atleta completa 3 rounds (total 9 rounds para a equipe)",
          "O tempo é registrado ao final do último round ou ao atingir o time cap",
        ],
        rules:
          "Os atletas devem alternar na ordem A → B → C obrigatoriamente. O Step Down no Box Jump é obrigatório. O Box Jump Over Step Down significa saltar sobre a caixa e descer com um pé de cada vez (step down).",
      },
    ],
  },
  {
    slug: "all-forces-to-9-problems-prova-4",
    number: 4,
    name: "All Forces to 9 Problems - Prova 4",
    timeCap: "AMRAP 6'",
    status: "published",
    previousSlug: "all-forces-to-9-problems-prova-3",
    categories: [
      {
        key: "scaled",
        name: "SCALED",
        divisions: [
          {
            name: "MAS/FEM",
            rounds: [
              {
                description: "Check-in",
                exercises: [
                  "6 Medball Box Step-Up Over",
                  "6 Burpees Over the Bar (Sincro 2)",
                ],
              },
              {
                description: "Complex - 1 atleta por vez",
                exercises: [
                  "1 Snatch",
                  "1 Hang Snatch",
                  "1, 2, 3... Hang Snatch (progressivo)",
                ],
              },
            ],
            notes:
              "Round 1: 1+1 | Round 2: 1+2 | Round 3: 1+3 ... e assim aumentando 1 rep a cada round",
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
                description: "Check-in",
                exercises: [
                  "6 Medball Box Step-Up Over",
                  "6 Burpees Over the Bar (Sincro 2)",
                ],
              },
              {
                description: "Complex - 1 atleta por vez",
                exercises: [
                  "1 Snatch",
                  "1 Hang Snatch",
                  "1, 2, 3... Hang Snatch (progressivo)",
                ],
              },
            ],
            notes:
              "Round 1: 1+1 | Round 2: 1+2 | Round 3: 1+3 ... e assim aumentando 1 rep a cada round",
          },
        ],
      },
      {
        key: "intermediario",
        name: "INTERMEDIÁRIO",
        divisions: [
          {
            name: "MAS/FEM",
            rounds: [
              {
                description: "Check-in",
                exercises: [
                  "6 Medball Box Step-Up Over",
                  "6 Burpees Over the Bar (Sincro 2)",
                ],
              },
              {
                description: "Complex - 1 atleta por vez",
                exercises: [
                  "1 Snatch",
                  "1 Hang Snatch",
                  "1 Overhead Squat",
                  "1, 1, 2 | 1, 1, 3 ... (progressivo)",
                ],
              },
            ],
            notes:
              "Round 1: 1+1+1 | Round 2: 1+1+2 | Round 3: 1+1+3 ... aumentando OHS a cada round",
          },
        ],
      },
      {
        key: "rx",
        name: "RX",
        divisions: [
          {
            name: "MAS/FEM",
            rounds: [
              {
                description: "Check-in",
                exercises: [
                  "6 Medball Box Step-Up Over",
                  "6 Burpees Over the Bar (Sincro 2)",
                ],
              },
              {
                description: "Complex - 1 atleta por vez",
                exercises: [
                  "1 Snatch",
                  "1 Hang Snatch",
                  "1 Overhead Squat",
                  "1, 1, 2 | 1, 1, 3 ... (progressivo)",
                ],
              },
            ],
            notes:
              "Round 1: 1+1+1 | Round 2: 1+1+2 | Round 3: 1+1+3 ... aumentando OHS a cada round",
          },
        ],
      },
    ],
    flowByCategory: [
      {
        categoryKey: "scaled",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA 4 - SCALED",
        blocks: [
          "AMRAP 6 minutos",
          "Check-in: 6 Medball Box Step-Up Over + 6 Burpees Over the Bar (Sincro 2)",
          "Depois, fazer rounds do complex: 1 Snatch + 1 Hang Snatch + Hang Snatch progressivo (1, 2, 3...)",
          "Apenas 1 atleta trabalha por vez no complex",
          "Equipe pode alternar livremente no Medball Box Step-Up Over",
          "2 Atletas obrigatoriamente no Burpees Over The Bar sincronizados",
        ],
        rules:
          "Score: Rounds + Repetições completadas. A carga é escolhida antes da Prova 3 e não pode ser alterada. Formato de progressão: Round 1 (1+1), Round 2 (1+2), Round 3 (1+3)...",
      },
      {
        categoryKey: "amador",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA 4 - AMADOR",
        blocks: [
          "AMRAP 6 minutos",
          "Check-in: 6 Medball Box Step-Up Over + 6 Burpees Over the Bar (Sincro 2)",
          "Depois, fazer rounds do complex: 1 Snatch + 1 Hang Snatch + Hang Snatch progressivo (1, 2, 3...)",
          "Apenas 1 atleta trabalha por vez no complex",
          "Equipe pode alternar livremente no Medball Box Step-Up Over",
          "2 Atletas obrigatoriamente no Burpees Over The Bar sincronizados",
        ],
        rules:
          "Score: Rounds + Repetições completadas. A carga é escolhida antes da Prova 3 e não pode ser alterada. Formato de progressão: Round 1 (1+1), Round 2 (1+2), Round 3 (1+3)...",
      },
      {
        categoryKey: "intermediario",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA 4 - INTERMEDIÁRIO",
        blocks: [
          "AMRAP 6 minutos",
          "Check-in: 6 Medball Box Step-Up Over + 6 Burpees Over the Bar (Sincro 2)",
          "Depois, fazer rounds do complex: 1 Snatch + 1 Hang Snatch + 1 Overhead Squat progressivo (1, 1, 2 / 1, 1, 3...)",
          "Apenas 1 atleta trabalha por vez no complex",
          "Equipe pode alternar livremente no Medball Box Step-Up Over",
          "2 Atletas obrigatoriamente no Burpees Over The Bar sincronizados",
        ],
        rules:
          "Score: Rounds + Repetições completadas. A carga é escolhida antes da Prova 3 e não pode ser alterada. Formato de progressão: Round 1 (1+1+1), Round 2 (1+1+2), Round 3 (1+1+3)...",
      },
      {
        categoryKey: "rx",
        divisionName: "MAS/FEM",
        heading: "FLOW DA PROVA 4 - RX",
        blocks: [
          "AMRAP 6 minutos",
          "Check-in: 6 Medball Box Step-Up Over + 6 Burpees Over the Bar (Sincro 2)",
          "Depois, fazer rounds do complex: 1 Snatch + 1 Hang Snatch + 1 Overhead Squat progressivo (1, 1, 2 / 1, 1, 3...)",
          "Apenas 1 atleta trabalha por vez no complex",
          "Equipe pode alternar livremente no Medball Box Step-Up Over",
          "2 Atletas obrigatoriamente no Burpees Over The Bar sincronizados",
        ],
        rules:
          "Score: Rounds + Repetições completadas. A carga é escolhida antes da Prova 3 e não pode ser alterada. Formato de progressão: Round 1 (1+1+1), Round 2 (1+1+2), Round 3 (1+1+3)...",
      },
    ],
  },
  {
    slug: "ascension",
    number: 5,
    name: "Ascension",
    timeCap: "For time 12'",
    status: "published",
    categories: [
      {
        key: "scaled",
        name: "SCALED",
        divisions: [
          {
            name: "FEMININO",
            rounds: [
              {
                description: "Bloco 1",
                exercises: [
                  "30 HRPU (1 atleta em Barbell Hold)",
                  "60 Deadlift (Sincro 2)",
                  "30 KB Swing",
                ],
              },
              {
                description: "Bloco 2",
                exercises: [
                  "30 HRPU (1 atleta em Barbell Hold)",
                  "40 Hang Power Clean (Sincro 2)",
                  "21 KB Swing",
                ],
              },
              {
                description: "Bloco 3",
                exercises: [
                  "30 HRPU (1 atleta em Barbell Hold)",
                  "20 DB Thruster (Sincro 2 - 1 DB Thruster + 1 Plate Thruster)",
                  "15 KB Swing",
                ],
              },
            ],
            notes:
              "No Thruster: 1 atleta executa DB Thruster, o outro executa Plate Thruster (sincronizados)",
          },
          {
            name: "MASCULINO",
            rounds: [
              {
                description: "Bloco 1",
                exercises: [
                  "30 HRPU (Hold na Barra com carga)",
                  "60 Deadlift (Sincro 2)",
                  "21 Pull-Up",
                ],
              },
              {
                description: "Bloco 2",
                exercises: [
                  "30 HRPU (Hold na Barra com carga)",
                  "40 Hang Power Clean (Sincro 2)",
                  "15 Pull-Up",
                ],
              },
              {
                description: "Bloco 3",
                exercises: [
                  "30 HRPU (Hold na Barra com carga)",
                  "20 DB Thruster (Sincro 2)",
                  "9 Pull-Up",
                ],
              },
            ],
            notes:
              "Hold: HRPU com Barbell Hold | Pull-Up com Dead Hang Hold (suspensão na rack)",
          },
        ],
      },
      {
        key: "amador",
        name: "AMADOR",
        divisions: [
          {
            name: "FEMININO",
            rounds: [
              {
                description: "Bloco 1",
                exercises: [
                  "30 HRPU (1 atleta em Barrell Hold)",
                  "60 Deadlift (Sincro 2)",
                  "15 Pull-Up",
                ],
              },
              {
                description: "Bloco 2",
                exercises: [
                  "30 HRPU (1 atleta em Barrell Hold)",
                  "40 Hang Power Clean (Sincro 2)",
                  "12 Pull-Up",
                ],
              },
              {
                description: "Bloco 3",
                exercises: [
                  "30 HSPU (1 atleta em Barrell Hold)",
                  "20 Thruster (Sincro 2)",
                  "9 Pull-Up",
                ],
              },
            ],
            notes:
              "Hold: HRPU e HSPU com Barrell Hold | Pull-Up com Dead Hang Hold",
          },
          {
            name: "MASCULINO",
            rounds: [
              {
                description: "Bloco 1",
                exercises: [
                  "30 HRPU (1 atleta em Barrell Hold)",
                  "60 Deadlift (Sincro 2)",
                  "30 Pull-Up",
                ],
              },
              {
                description: "Bloco 2",
                exercises: [
                  "30 HRPU (1 atleta em Barrell Hold)",
                  "40 Hang Power Clean (Sincro 2)",
                  "21 Pull-Up",
                ],
              },
              {
                description: "Bloco 3",
                exercises: [
                  "30 HSPU (1 atleta em Barrell Hold)",
                  "20 Thruster (Sincro 2)",
                  "15 Pull-Up",
                ],
              },
            ],
            notes:
              "Hold: HRPU e HSPU com Barrell Hold | Pull-Up com Dead Hang Hold",
          },
        ],
      },
      {
        key: "intermediario",
        name: "INTERMEDIÁRIO",
        divisions: [
          {
            name: "FEMININO",
            rounds: [
              {
                description: "Bloco 1",
                exercises: [
                  "30 HSPU (1 atleta em Barrell Hold)",
                  "60 Deadlift (Sincro 2)",
                  "30 Pull-Up",
                ],
              },
              {
                description: "Bloco 2",
                exercises: [
                  "30 HSPU (1 atleta em Barrell Hold)",
                  "40 Hang Power Clean",
                  "21 Chest to Bar",
                ],
              },
              {
                description: "Bloco 3",
                exercises: [
                  "30 HSPU (1 atleta em Barrell Hold)",
                  "20 Thruster",
                  "15 Chest to Bar",
                ],
              },
            ],
            notes: "Hold: HSPU com Barrell Hold | Pull-Up com Dead Hang Hold",
          },
          {
            name: "MASCULINO",
            rounds: [
              {
                description: "Bloco 1",
                exercises: [
                  "30 HSPU (1 atleta em Barrell Hold)",
                  "60 Deadlift",
                  "30 Pull-Up (Sincro 2)",
                ],
              },
              {
                description: "Bloco 2",
                exercises: [
                  "30 HSPU (1 atleta em Barrell Hold)",
                  "40 Hang Power Clean",
                  "21 Chest to Bar (Sincro 2)",
                ],
              },
              {
                description: "Bloco 3",
                exercises: [
                  "30m Handstand Walking (1 atleta em Barrell Hold)",
                  "20 Thruster",
                  "15 Bar Muscle Up",
                ],
              },
            ],
            notes: "Hold: HSPU com Barrell Hold | Pull-Up com Dead Hang Hold",
          },
        ],
      },
      {
        key: "rx",
        name: "RX",
        divisions: [
          {
            name: "MASCULINO/MISTO",
            rounds: [
              {
                description: "Bloco 1",
                exercises: [
                  "30 Strict HSPU (1 atleta em Barrell Hold)",
                  "60 Deadlift (Sincro 2)",
                  "30 Chest to Bar (Sincro 2)",
                ],
              },
              {
                description: "Bloco 2",
                exercises: [
                  "30 Kipping HSPU (1 atleta em Barrell Hold)",
                  "40 Hang Power Clean",
                  "21 Bar Muscle Up (Sincro 2)",
                ],
              },
              {
                description: "Bloco 3",
                exercises: [
                  "30m Handstand Walking (1 atleta em Barrell Hold)",
                  "20 Thruster",
                  "15 Ring Muscle Up / Bar Muscle Up (Sincro 2 - 1 RMU + 1 BMU)",
                ],
              },
            ],
            notes:
              "Hold: HSPU com Barrell Hold. No último bloco do Bloco 3, os movimentos sincronizados são distintos: 1 atleta executa RMU e o outro executa BMU, seguindo padrões de sincronia.",
          },
        ],
      },
    ],
    flowByCategory: [
      {
        categoryKey: "scaled",
        divisionName: "FEMININO",
        heading: "FLOW DA PROVA - SCALED FEMININO",
        blocks: [
          "Bloco 1: 30 HRPU (1 em Hold) + 60 Deadlift (Sincro 2) + 30 KB Swing",
          "Bloco 2: 30 HRPU (1 em Hold) + 40 Hang Power Clean (Sincro 2) + 21 KB Swing",
          "Bloco 3: 30 HRPU (1 em Hold) + 20 DB Thruster (Sincro 2) + 15 KB Swing",
        ],
        rules:
          "HRPU: 1 atleta em Barrell Hold enquanto os outros trabalham. No Thruster: 1 atleta DB Thruster + 1 Plate Thruster (sincronizados). Deadlift e Hang Power Clean: Sincro 2 (2 atletas executando simultaneamente).",
      },
      {
        categoryKey: "scaled",
        divisionName: "MASCULINO",
        heading: "FLOW DA PROVA - SCALED MASCULINO",
        blocks: [
          "Bloco 1: 30 HRPU (Hold) + 60 Deadlift (Sincro 2) + 21 Pull-Up",
          "Bloco 2: 30 HRPU (Hold) + 40 Hang Power Clean (Sincro 2) + 15 Pull-Up",
          "Bloco 3: 30 HRPU (Hold) + 20 DB Thruster (Sincro 2) + 9 Pull-Up",
        ],
        rules:
          "HRPU: Hold na Barra com carga. Pull-Up: Dead Hang Hold (suspensão na rack). Deadlift e Hang Power Clean: Sincro 2.",
      },
      {
        categoryKey: "amador",
        divisionName: "FEMININO",
        heading: "FLOW DA PROVA - AMADOR FEMININO",
        blocks: [
          "Bloco 1: 30 HRPU (Hold) + 60 Deadlift (Sincro 2) + 15 Pull-Up",
          "Bloco 2: 30 HRPU (Hold) + 40 Hang Power Clean (Sincro 2) + 12 Pull-Up",
          "Bloco 3: 30 HSPU (Hold) + 20 Thruster (Sincro 2) + 9 Pull-Up",
        ],
        rules:
          "HRPU e HSPU: Hold na Barra (Barrell Hold). Pull-Up: Dead Hang Hold (suspensão na rack).",
      },
      {
        categoryKey: "amador",
        divisionName: "MASCULINO",
        heading: "FLOW DA PROVA - AMADOR MASCULINO",
        blocks: [
          "Bloco 1: 30 HRPU (Hold) + 60 Deadlift (Sincro 2) + 30 Pull-Up",
          "Bloco 2: 30 HRPU (Hold) + 40 Hang Power Clean (Sincro 2) + 21 Pull-Up",
          "Bloco 3: 30 HSPU (Hold) + 20 Thruster (Sincro 2) + 15 Pull-Up",
        ],
        rules:
          "HRPU e HSPU: Hold na Barra (Barrell Hold). Pull-Up: Dead Hang Hold (suspensão na rack).",
      },
      {
        categoryKey: "intermediario",
        divisionName: "FEMININO",
        heading: "FLOW DA PROVA - INTERMEDIÁRIO FEMININO",
        blocks: [
          "Bloco 1: 30 HSPU (Hold) + 60 Deadlift (Sincro 2) + 30 Pull-Up",
          "Bloco 2: 30 HSPU (Hold) + 40 Hang Power Clean + 21 Chest to Bar",
          "Bloco 3: 30 HSPU (Hold) + 20 Thruster + 15 Chest to Bar",
        ],
        rules:
          "HSPU: Hold na Barra (Barrell Hold). Pull-Up: Dead Hang Hold (suspensão na rack).",
      },
      {
        categoryKey: "intermediario",
        divisionName: "MASCULINO",
        heading: "FLOW DA PROVA - INTERMEDIÁRIO MASCULINO",
        blocks: [
          "Bloco 1: 30 HSPU (Hold) + 60 Deadlift + 30 Pull-Up (Sincro 2)",
          "Bloco 2: 30 HSPU (Hold) + 40 Hang Power Clean + 21 Chest to Bar (Sincro 2)",
          "Bloco 3: 30m Handstand Walking (Hold) + 20 Thruster + 15 Bar Muscle Up",
        ],
        rules:
          "HSPU: Hold na Barra (Barrell Hold). Pull-Up: Dead Hang Hold (suspensão na rack).",
      },
      {
        categoryKey: "rx",
        divisionName: "MASCULINO/MISTO",
        heading: "FLOW DA PROVA - RX MASCULINO/MISTO",
        blocks: [
          "Bloco 1: 30 Strict HSPU (Hold) + 60 Deadlift (Sincro 2) + 30 Chest to Bar (Sincro 2)",
          "Bloco 2: 30 Kipping HSPU (Hold) + 40 Hang Power Clean + 21 Bar Muscle Up (Sincro 2)",
          "Bloco 3: 30m Handstand Walking (Hold) + 20 Thruster + 15 RMU/BMU (Sincro 2 - 1 RMU + 1 BMU)",
        ],
        rules:
          "HSPU: Hold na Barra (Barrell Hold). No Bloco 3, os movimentos sincronizados são distintos: 1 atleta executa Ring Muscle Up (RMU) e o outro executa Bar Muscle Up (BMU), seguindo padrões de sincronia.",
      },
    ],
  },
];

export function getWorkoutBySlug(slug: string) {
  return workouts.find((workout) => workout.slug === slug);
}

export function getPublishedWorkouts() {
  return workouts.filter((workout) => workout.status === "published");
}
