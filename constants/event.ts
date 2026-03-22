export const EVENT = {
  name: "PARDUS GAMES 2026",
  shortDate: "23 E 24 DE MAIO",
  fullDate: "23 e 24 de maio de 2026",
  cityState: "SESC · MOSSORÓ/RN",
  venue: "SESC Mossoró",
  city: "Mossoró",
  state: "Rio Grande do Norte",
  organizer: "Box Pardus",
  organizerInstagram: "@boxpardus",
  announcer: "Paul Klein",
  instagram: "@pardusgames",
  instagramLink: "https://instagram.com/pardusgames",
  registrationLink:
    "https://inscricoes.wodengage.games/eventos/pardus-games-2026",
  regulationLink: "/files/regulamento-pardus-games-2026.pdf",
  whatsappLink: "https://wa.me/+558488995994",
  eventDateISO: "2026-05-23T00:00:00.000-03:00",
} as const;

type EventCategory = {
  name: string;
  divisions: string[];
  featured?: boolean;
};

export const CATEGORIES: EventCategory[] = [
  {
    name: "Scaled",
    divisions: ["Trio Feminino", "Trio Masculino"],
  },
  {
    name: "Amador",
    divisions: ["Trio Feminino", "Trio Masculino"],
  },
  {
    name: "Intermediário",
    divisions: ["Trio Feminino", "Trio Masculino"],
  },
  {
    name: "RX",
    divisions: ["Trio Masculino", "Trio Misto"],
    featured: true,
  },
] as const;

export const PARAMETERS = [
  {
    key: "scaled",
    title: "Scaled",
    rows: [
      { movement: "Clean and Jerk", female: "25KG", male: "35KG" },
      { movement: "Snatch", female: "20KG", male: "30KG" },
      { movement: "OHS", female: "20KG", male: "30KG" },
      { movement: "Thruster", female: "20KG", male: "30KG" },
      { movement: "Deadlift", female: "35KG", male: "40KG" },
      { movement: "DB", female: "10KG", male: "15KG" },
      { movement: "KB", female: "10KG", male: "16KG" },
      { movement: "Wall Ball", female: "8LBS", male: "14LBS" },
      { movement: "Pull-Ups", female: "Jump Pull-Up", male: "Pelo menos 1" },
      { movement: "Chest to Bar", female: "Não", male: "Não" },
      { movement: "BMU", female: "Não", male: "Não" },
      { movement: "RMU", female: "Não", male: "Não" },
      { movement: "Toes to Bar", female: "High Knees", male: "High Knees" },
      { movement: "Toes to Ring", female: "Não", male: "Pelo menos 1" },
      { movement: "HSPU", female: "Não", male: "Não" },
      { movement: "HSW", female: "Não", male: "Não" },
      { movement: "Single Under", female: "Sim", male: "Sim" },
      { movement: "Double Under", female: "Não", male: "Não" },
      { movement: "Pistol", female: "Não", male: "Não" },
      {
        movement: "Box Jump",
        female: "Step-Up (50CM)",
        male: "Step-Up (50CM)",
      },
    ],
  },
  {
    key: "amador",
    title: "Amador",
    rows: [
      { movement: "Clean and Jerk", female: "30KG", male: "40KG" },
      { movement: "Snatch", female: "25KG", male: "35KG" },
      { movement: "OHS", female: "25KG", male: "35KG" },
      { movement: "Thruster", female: "25KG", male: "35KG" },
      { movement: "Deadlift", female: "40KG", male: "50KG" },
      { movement: "DB", female: "12,5KG", male: "17,5KG" },
      { movement: "KB", female: "12KG", male: "16KG" },
      { movement: "Wall Ball", female: "14LBS", male: "14LBS" },
      { movement: "Pull-Ups", female: "Pelo menos 1", male: "Pelo menos 1" },
      { movement: "Chest to Bar", female: "Não", male: "Não" },
      { movement: "BMU", female: "Não", male: "Não" },
      { movement: "RMU", female: "Não", male: "Não" },
      { movement: "Toes to Bar", female: "Pelo menos 1", male: "Pelo menos 1" },
      {
        movement: "Toes to Ring",
        female: "Pelo menos 1",
        male: "Pelo menos 1",
      },
      { movement: "HSPU", female: "Pelo menos 1", male: "Pelo menos 1" },
      { movement: "HSW", female: "Não", male: "Não" },
      { movement: "Single Under", female: "Sim", male: "Sim" },
      { movement: "Double Under", female: "Não", male: "Não" },
      { movement: "Pistol", female: "Não", male: "Não" },
      { movement: "Box Jump", female: "50CM", male: "60CM" },
    ],
  },
  {
    key: "intermediario",
    title: "Intermediário",
    rows: [
      { movement: "Clean and Jerk", female: "35KG", male: "50KG" },
      { movement: "Snatch", female: "30KG", male: "40KG" },
      { movement: "OHS", female: "30KG", male: "40KG" },
      { movement: "Thruster", female: "30KG", male: "40KG" },
      { movement: "Deadlift", female: "45KG", male: "60KG" },
      { movement: "DB", female: "15KG", male: "22,5KG" },
      { movement: "KB", female: "16KG", male: "20KG" },
      { movement: "Wall Ball", female: "14LBS", male: "20LBS" },
      { movement: "Pull-Ups", female: "Sim", male: "Sim" },
      { movement: "Chest to Bar", female: "Pelo menos 1", male: "Sim" },
      { movement: "BMU", female: "Não", male: "Pelo menos 1" },
      { movement: "RMU", female: "Não", male: "Não" },
      { movement: "Toes to Bar", female: "Sim", male: "Sim" },
      { movement: "Toes to Ring", female: "Sim", male: "Sim" },
      { movement: "HSPU", female: "Sim", male: "Sim" },
      { movement: "HSW", female: "Não", male: "Pelo menos 1" },
      { movement: "Single Under", female: "Sim", male: "Sim" },
      { movement: "Double Under", female: "Sim", male: "Sim" },
      { movement: "Pistol", female: "Não", male: "Não" },
      { movement: "Box Jump", female: "50CM", male: "60CM" },
    ],
  },
  {
    key: "rx",
    title: "RX",
    rows: [
      { movement: "Clean and Jerk", female: "50KG", male: "60KG" },
      { movement: "Snatch", female: "40KG", male: "50KG" },
      { movement: "OHS", female: "40KG", male: "50KG" },
      { movement: "Thruster", female: "40KG", male: "50KG" },
      { movement: "Deadlift", female: "55KG", male: "70KG" },
      { movement: "DB", female: "15KG", male: "22,5KG" },
      { movement: "KB", female: "16KG", male: "20KG" },
      { movement: "Wall Ball", female: "14LBS", male: "20LBS" },
      { movement: "Pull-Ups", female: "Sim", male: "Sim" },
      { movement: "Chest to Bar", female: "Sim", male: "Sim" },
      { movement: "BMU", female: "Sim", male: "Sim" },
      { movement: "RMU", female: "Não obrigatório", male: "Sim" },
      { movement: "Toes to Bar", female: "Não obrigatório", male: "Sim" },
      { movement: "Toes to Ring", female: "Sim", male: "Sim" },
      { movement: "HSPU", female: "Sim", male: "Sim" },
      { movement: "HSW", female: "Sim", male: "Sim" },
      { movement: "Single Under", female: "Sim", male: "Sim" },
      { movement: "Double Under", female: "Sim", male: "Sim" },
      { movement: "Pistol", female: "Sim", male: "Sim" },
      { movement: "Box Jump", female: "60CM", male: "60CM" },
    ],
  },
] as const;

export const STAFF = [
  {
    name: "Paul Klein",
    role: "Locutor Oficial",
    image: "/assets/images/staff/paul.png",
  },
  {
    name: "Roberta Fernandes",
    role: "Organizadora/Head Coach",
    image: "/assets/images/staff/roberta.jpeg",
  },
  {
    name: "Isabelle Goes",
    role: "Organizadora",
    image: "/assets/images/staff/isabelle.jpeg",
  },
  {
    name: "Layo Lano",
    role: "Head Judge",
    image: "/assets/images/staff/layo.jpeg",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Grande evento!!! Veio para ficar. Parabéns a todos 🙌",
    name: "gutemberg_oliveiira",
    category: "Atleta pardusgames 2024",
  },
  {
    quote: "Massa .. Parabéns pelo campeonato foi um grande evento 🔥🔥",
    name: "gildeonbezerra",
    category: "Atleta pardusgames 2024",
  },
  {
    quote: "Evento lindo e super organizado, foi ótimo participar! 🔥😍",
    name: "monica.beatriz14",
    category: "Atleta pardusgames 2024",
  },
  {
    quote:
      "evento super organizado sem nenhuma intercorrência; só tende a crescer 👏👏",
    name: "p_davirb",
    category: "Atleta pardusgames 2024",
  },
  {
    quote:
      "Por mais eventos BEM ORGANIZADOS como esse, viu!!! Parabéns, pessoal! Vocês foram IMPECÁVEIS! 👏👏👏",
    name: "thaissafferreira",
    category: "Atleta pardusgames 2024",
  },
  {
    quote:
      "Parabéns pelo evento, realmente merece outras edições, tudo impecável.",
    name: "ary_anobre",
    category: "Atleta pardusgames 2024",
  },
] as const;

export const SPONSORS = [
  "BOX PARDUS",
  "PATROCINADOR 01",
  "PATROCINADOR 02",
  "PATROCINADOR 03",
  "PATROCINADOR 04",
] as const;

export const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    title: "Publicação 01",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-2",
    title: "Publicação 02",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-3",
    title: "Publicação 03",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-4",
    title: "Publicação 04",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-5",
    title: "Publicação 05",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-6",
    title: "Publicação 06",
    link: "https://instagram.com/pardusgames",
  },
] as const;

export const WHO_WE_ARE = {
  title: "Quem Somos",
  intro:
    "O Pardus Games nasceu de uma ideia simples, mas extremamente necessária: levar para Mossoró/RN um evento esportivo com alto padrão de qualidade, organização e respeito aos atletas.",
  paragraphs: [
    "A iniciativa surgiu a partir das ideias de suas idealizadoras, Isabelle Gois e Roberta Fernandes, parceiras de longa data e apaixonadas pelo esporte. Com experiências vividas em grandes competições, decidiram enxergar o esporte por um novo ângulo: o da organização de um evento que realmente atendesse às expectativas de quem vive o dia a dia do atleta e suas particularidades.",
    "Assim nasceu o Pardus Games, um evento idealizado por atletas, para atletas.",
    "A primeira edição, realizada em 2024, foi um marco para a cidade. O evento se destacou pela pontualidade, organização, respeito ao público e aos competidores, além de proporcionar uma experiência leve, dinâmica e memorável. O retorno foi imediato: reconhecimento da comunidade e a certeza de que Mossoró estava pronta para um novo nível de competição.",
    "Para 2026, o Pardus Games dá um passo ainda mais ousado. O evento evolui em estrutura, alcance e credibilidade, sendo realizado no SESC Mossoró, um dos principais espaços esportivos da região. Além disso, conta com o apoio de grandes parceiros que acreditam no desenvolvimento do esporte, elevando ainda mais o padrão de entrega e fortalecendo a comunidade fitness local.",
    "Mais do que uma competição, o Pardus Games é uma experiência.",
  ],
  founders: ["Isabelle Gois", "Roberta Fernandes"],
} as const;
