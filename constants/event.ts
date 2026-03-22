export const EVENT = {
  name: "PARDUS GAMES 2026",
  shortDate: "23 E 24 DE MAIO",
  fullDate: "23 e 24 de maio de 2026",
  cityState: "SESC · MOSSORO/RN",
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
    name: "Intermediario",
    divisions: ["Trio Feminino", "Trio Masculino"],
  },
  {
    name: "RX",
    divisions: ["Trio Feminino", "Trio Masculino", "Trio Misto"],
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
      { movement: "RMU", female: "Não obrigatorio", male: "Sim" },
      { movement: "Toes to Bar", female: "Não obrigatorio", male: "Sim" },
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
  },
  {
    name: "[Nome a confirmar]",
    role: "Head Judge",
  },
  {
    name: "[Nome a confirmar]",
    role: "Organizacao",
  },
  {
    name: "[Nome a confirmar]",
    role: "Fotografo Oficial",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Não participo de competicoes porque tenho medo do que vao falar.",
    name: "Atleta Pardus",
    category: "Scaled",
  },
  {
    quote:
      "No Pardus eu descobri que competir e sobre coragem, nao sobre perfeicao.",
    name: "Atleta Convidada",
    category: "Intermediario",
  },
  {
    quote: "Energia absurda, estrutura forte e clima de time do inicio ao fim.",
    name: "Atleta RX",
    category: "RX",
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
    title: "Publicacao 01",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-2",
    title: "Publicacao 02",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-3",
    title: "Publicacao 03",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-4",
    title: "Publicacao 04",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-5",
    title: "Publicacao 05",
    link: "https://instagram.com/pardusgames",
  },
  {
    id: "post-6",
    title: "Publicacao 06",
    link: "https://instagram.com/pardusgames",
  },
] as const;
