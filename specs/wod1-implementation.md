# Prompt para Agente de Código — Página de Provas · Pardus Games 2026

## Contexto do projeto

O site **pardusgames.com.br** é feito em **Next.js + Tailwind CSS**. Já existe a página inicial (`/`) com seções âncora. Preciso adicionar uma **página dedicada para cada prova do campeonato**, acessível por rota própria e linkada a partir da home.

### Arquitetura obrigatória do projeto (seguir padrão já existente)

- A home está em `app/(landing)/page.tsx`
- As seções da home vivem em `app/(landing)/_components/landing-sections.tsx`
- Componentes compartilhados ficam em `components/`
- Constantes e dados ficam em `constants/`
- **Não criar pasta `src/`** para esta implementação
- Novos arquivos devem usar **inglês + kebab-case** (ex.: `workouts-data.ts`, `workout-header.tsx`)

---

## O que construir

### 1. Rota dinâmica de provas

Criar a rota `/provas/[slug]` no Next.js App Router (ou Pages Router, dependendo do que o projeto usa).

Exemplo de URLs:

- `/provas/welcome` → Prova 1 - Welcome
- `/provas/prova-2` → Prova 2 (futura)
- `/provas/prova-3` → Prova 3 (futura)

### 2. Arquivo de dados das provas

Criar o arquivo `constants/workouts-data.ts` com os dados das provas em formato estruturado. Usar a Prova 1 como exemplo completo:

```ts
export type Division = {
  nome: string; // ex: "MAS/FEM", "MASCULINO", "FEMININO", "MAS/MISTO"
  rounds: RoundBlock[];
  notes?: string;
};

export type RoundBlock = {
  descricao: string; // ex: "3 rounds", "2 Rounds", "1 Round"
  exercicios: string[]; // lista de exercícios daquele bloco
};

export type Category = {
  nome: "SCALED" | "AMADOR" | "INTERMEDIÁRIO" | "RX";
  divisoes: Division[];
};

export type Workout = {
  slug: string;
  numero: number;
  nome: string;
  subtitulo?: string;
  timeCap: string; // ex: "For time 12'"
  categorias: Category[];
  flowByCategory: CategoryFlow[];
};

export type CategoryFlow = {
  categoria: string; // ex: "SCALED – MAS/FEM"
  blocos: string[]; // cada bloco é um parágrafo do flow
  regras?: string; // parágrafo de regras específicas
};
```

Dados da **Prova 1 — "WELCOME"** para popular o arquivo:

```ts
export const workouts: Workout[] = [
  {
    slug: "welcome",
    numero: 1,
    nome: "Welcome",
    timeCap: "For time 12'",
    categorias: [
      {
        nome: "SCALED",
        divisoes: [
          {
            nome: "MAS/FEM",
            rounds: [
              {
                descricao: "3 rounds",
                exercicios: ["20 High Knees (Sincro 2)", "80 Single Unders"],
              },
              {
                descricao: "2 Rounds",
                exercicios: [
                  "20 One Db Snatch",
                  "20 High Knees (Sincro 2)",
                  "80 Single Unders",
                ],
              },
              {
                descricao: "1 Round",
                exercicios: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "20 High Knees (Sincro 2)",
                  "80 Single Unders",
                ],
              },
            ],
            observacoes: "Shuttle-Run: 7m = 1 rep",
          },
        ],
      },
      {
        nome: "AMADOR",
        divisoes: [
          {
            nome: "MAS/FEM",
            rounds: [
              {
                descricao: "3 rounds",
                exercicios: ["15 Leg Raises (Sincro 2)", "100 Single Unders"],
              },
              {
                descricao: "2 Rounds",
                exercicios: [
                  "20 One Db Snatch",
                  "15 Leg Raises (Sincro 2)",
                  "100 Single Unders",
                ],
              },
              {
                descricao: "1 Round",
                exercicios: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "15 Toes to bar (1 atleta em hold)",
                  "100 Single Unders",
                ],
              },
            ],
            observacoes: "Shuttle-Run: 7m = 1 rep",
          },
        ],
      },
      {
        nome: "INTERMEDIÁRIO",
        divisoes: [
          {
            nome: "MASCULINO",
            rounds: [
              {
                descricao: "3 rounds",
                exercicios: ["15 Toes to bar (Sincro 2)", "50 Double Unders"],
              },
              {
                descricao: "2 Rounds",
                exercicios: [
                  "20 One Db Snatch",
                  "15 Toes to bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
              {
                descricao: "1 Round",
                exercicios: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "15 Toes to bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
            ],
            observacoes: "Shuttle-Run: 7,5m = 1 rep",
          },
          {
            nome: "FEMININO",
            rounds: [
              {
                descricao: "3 rounds",
                exercicios: ["10 Toes to bar (Sincro 2)", "50 Double Unders"],
              },
              {
                descricao: "2 Rounds",
                exercicios: [
                  "20 One Db Snatch",
                  "10 Toes to bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
              {
                descricao: "1 Round",
                exercicios: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "10 Toes to bar (Sincro 2)",
                  "50 Double Unders",
                ],
              },
            ],
            observacoes: "Shuttle-Run: 7m = 1 rep",
          },
        ],
      },
      {
        nome: "RX",
        divisoes: [
          {
            nome: "MAS/MISTO",
            rounds: [
              {
                descricao: "3 rounds",
                exercicios: ["20 Toes to bar (Sincro 2)", "50 Double Unders"],
              },
              {
                descricao: "2 Rounds",
                exercicios: [
                  "20 One Db Snatch",
                  "20 Toes to bar (Sincro 2)",
                  "75 Double Unders",
                ],
              },
              {
                descricao: "1 Round",
                exercicios: [
                  "20 Shuttle-Run (Sincro 3)",
                  "20 One Db Snatch",
                  "20 Toes to bar (Sincro 2)",
                  "100 Double Unders",
                ],
              },
            ],
            observacoes: "Shuttle-Run: 7m = 1 rep",
          },
        ],
      },
    ],
    flowPorCategoria: [
      {
        categoria: "SCALED – MAS/FEM",
        blocos: [
          "20 High Knees (Sincro 2) e 80 Single Unders.",
          "20 One Dumbbell Snatch, 20 High Knees (Sincro 2) e 80 Single Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 20 High Knees (Sincro 2) e 80 Single Unders.",
        ],
        regras:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição e cada 7 metros equivalem a 1 repetição. Os Single Unders e os Dumbbell Snatches podem ser divididos entre os atletas conforme a estratégia da equipe. Nos High Knees, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização.",
      },
      {
        categoria: "AMADOR – MAS/FEM",
        blocos: [
          "15 Leg Raises (Sincro 2) e 100 Single Unders.",
          "20 One Dumbbell Snatch, 15 Leg Raises (Sincro 2) e 100 Single Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 15 Toes to Bar (1 atleta suspenso na barra) e 100 Single Unders.",
        ],
        regras:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição e cada 7 metros equivalem a 1 repetição. Os Single Unders e os Dumbbell Snatches podem ser divididos entre os atletas conforme a estratégia da equipe. Nos Leg Raises, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização. No último bloco, os Toes to Bar não são sincronizados, porém, um atleta deve ficar suspenso na barra para validar as repetições de toes to bar.",
      },
      {
        categoria: "INTERMEDIÁRIO – MASCULINO",
        blocos: [
          "15 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 One Dumbbell Snatch, 15 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 15 Toes to Bar (Sincro 2) e 50 Double Unders.",
        ],
        regras:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição e cada 7,5 metros equivalem a 1 repetição. Os Double Unders e os Dumbbell Snatches podem ser divididos entre os atletas conforme a estratégia da equipe. Nos Toes to Bar, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização.",
      },
      {
        categoria: "INTERMEDIÁRIO – FEMININO",
        blocos: [
          "10 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 One Dumbbell Snatch, 10 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 10 Toes to Bar (Sincro 2) e 50 Double Unders.",
        ],
        regras:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição e cada 7 metros equivalem a 1 repetição. Os Double Unders e os Dumbbell Snatches podem ser divididos entre os atletas conforme a estratégia da equipe. Em todos os blocos, os Toes to Bar devem ser executados de forma sincronizada em dupla.",
      },
      {
        categoria: "RX – MASCULINO",
        blocos: [
          "20 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 One Dumbbell Snatch, 20 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 20 Toes to Bar (Sincro 2) e 50 Double Unders.",
        ],
        regras:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição e cada 7,5 metros equivalem a 1 repetição. Os Double Unders e os Dumbbell Snatches podem ser divididos entre os atletas conforme a estratégia da equipe. Nos Toes to Bar, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização em todos os blocos.",
      },
      {
        categoria: "RX – MISTO",
        blocos: [
          "20 Toes to Bar (Sincro 2) e 50 Double Unders.",
          "20 One Dumbbell Snatch, 20 Toes to Bar (Sincro 2) e 75 Double Unders.",
          "20 Shuttle Runs (Sincro 3), 20 One Dumbbell Snatch, 20 Toes to Bar (Sincro 2) e 100 Double Unders.",
        ],
        regras:
          "No Shuttle Run, os três atletas devem se deslocar juntos a cada repetição e cada 7 metros equivalem a 1 repetição. Os Double Unders e os Dumbbell Snatches podem ser divididos entre os atletas conforme a estratégia da equipe. Nos Toes to Bar, dois atletas devem executar o movimento ao mesmo tempo, respeitando o padrão de sincronização em todos os blocos.",
      },
    ],
  },
];
```

---

## Design e UX da página `/provas/[slug]`

### Identidade visual — manter fiel ao site atual

- Fundo: usar token de tema (`bg-background`)
- Cor primária / destaque: usar token de tema (`bg-primary`, `text-primary`, `ring-ring`, `text-primary-foreground`)
- Cards e superfícies: usar tokens semânticos (`bg-card`, `text-card-foreground`, `border-border`)
- Cor de borda de destaque Pardus: usar token customizado (`border-theme-border`, `text-theme-primary`, `bg-theme-primary` quando fizer sentido)
- Fonte headline: usar família do tema (`font-heading`)
- Fonte corpo: usar família do tema (`font-sans`)
- Sem border-radius excessivo — estilo esportivo limpo

### Estrutura da página (de cima para baixo)

#### A. Header da prova

```
┌─────────────────────────────────────────────┐
│  ← Voltar para o início    [PARDUS GAMES]   │
│                                             │
│  PROVA 1                                    │
│  ████████████████████                       │
│  WELCOME                                    │
│  ████████████████████                       │
│  For time 12' · 23 e 24 de maio · SESC RN  │
└─────────────────────────────────────────────┘
```

- Texto "PROVA 1" com `font-heading`, tamanho grande, usando cor do tema (`text-primary`)
- Subtítulo "WELCOME" em branco, ainda maior
- Tag `FOR TIME 12'` com estilo retângulo de fundo (técnica `display:inline` + `box-decoration-break:clone`)
- Botão `← Voltar` discreto no canto superior esquerdo

#### B. Tabs de categoria (sticky no scroll mobile)

```
[ SCALED ] [ AMADOR ] [ INTERMEDIÁRIO ] [ RX ]
```

- 4 tabs horizontais
- Tab ativa: `bg-primary text-primary-foreground`
- Tab inativa: `border border-primary text-primary bg-transparent`
- No mobile: scroll horizontal nas tabs
- Ao clicar, faz scroll suave até a seção correspondente (ou troca conteúdo via state)
- **Implementar como scroll spy**: conforme o usuário scrolla, a tab ativa muda automaticamente

#### C. Cards de categoria (um por categoria, na ordem: Scaled → Amador → Intermediário → RX)

Cada card contém:

**C.1 — Cabeçalho do card**

```
┌─────────────────────────────────┐
│  SCALED                         │
│  MAS / FEM                      │
└─────────────────────────────────┘
```

- Nome da categoria em `font-heading` grande
- Badge com a divisão (ex: `MAS/FEM`) usando tokens (`bg-primary text-primary-foreground`)
- Se a categoria tiver mais de uma divisão (ex: Intermediário tem Masculino e Feminino), mostrar um sub-tab interno ou accordion para alternar

**C.2 — Blocos de rounds (progressão visual)**

Mostrar a progressão dos 3 blocos de rounds em forma de **linha do tempo vertical** ou **cards numerados**:

```
  ○──────────────────────────────
  │  BLOCO 1
  │  3 rounds
  │  ┌──────────────────────┐
  │  │ 20 High Knees        │  ← item
  │  │   (Sincro 2)         │
  │  │ 80 Single Unders     │  ← item
  │  └──────────────────────┘
  │
  ○──────────────────────────────
  │  BLOCO 2
  │  2 Rounds
  │  ┌──────────────────────┐
  │  │ 20 One Db Snatch     │
  │  │ 20 High Knees        │
  │  │ 80 Single Unders     │
  │  └──────────────────────┘
  │
  ○──────────────────────────────
     BLOCO 3 (completo)
     1 Round
     ...
```

- Cada bloco tem um número/marcador em amarelo na timeline
- Exercícios novos que aparecem naquele bloco (em relação ao anterior) devem ter um destaque visual sutil — por exemplo, uma bolinha amarela à esquerda do item
- Card do bloco: usar tokens (`bg-card border border-border`)
- Cada exercício numa linha, usando `font-sans` (evitar fonte hardcoded)

**C.3 — Observação final da categoria**

```
⚡ Shuttle-Run: 7m = 1 rep
```

- Badge pequeno com cor primária do tema (`bg-primary text-primary-foreground`) e ícone/símbolo

**C.4 — Accordion "Flow da Prova"**

Abaixo dos blocos, um accordion colapsável com o flow textual:

```
▼ FLOW DA PROVA — SCALED MAS/FEM

  [BLOCO 1]
  20 High Knees (Sincro 2) e 80 Single Unders.

  [BLOCO 2]
  20 One Dumbbell Snatch, 20 High Knees...

  [BLOCO 3]
  20 Shuttle Runs (Sincro 3), 20 One Dumbbell...

  ───
  📋 Regras de sincronização:
  No Shuttle Run, os três atletas devem se deslocar...
```

#### D. Navegação entre provas (footer da página)

```
┌──────────────────────────────────────────┐
│  ← PROVA ANTERIOR     PRÓXIMA PROVA →   │
│  (desabilitado na P1) (Prova 2 quando   │
│                        disponível)       │
└──────────────────────────────────────────┘
```

---

## Integração com a Home (`/`)

### Adicionar seção "Provas" na home

Inserir uma nova seção na página inicial entre "Parâmetros" e "Equipe Oficial" (ou após Parâmetros), com âncora `#provas`:

```
## PROVAS

Cards horizontais (scroll no mobile):

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  PROVA 1        │  │  PROVA 2        │  │  PROVA 3        │
│  WELCOME        │  │  EM BREVE       │  │  EM BREVE       │
│                 │  │                 │  │                 │
│  For time 12'   │  │  —              │  │  —              │
│                 │  │                 │  │                 │
│ [VER DETALHES]  │  │  🔒 Bloqueado   │  │  🔒 Bloqueado   │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

- Card da Prova 1: ativo, clicável, link para `/provas/welcome`
- Cards de provas futuras: estado "em breve" — aparência mais escura, sem link
- Botão do card ativo: usar variação primária do tema (`bg-primary text-primary-foreground`) com texto `→ Ver detalhes`
- Adicionar "Provas" no menu de navegação da navbar (link âncora `#provas` na home)

---

## Comportamento de compartilhamento

- A URL `/provas/welcome` é compartilhável diretamente
- Adicionar `<head>` com Open Graph tags para preview ao compartilhar no WhatsApp/Instagram:

```tsx
// Em app/provas/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const prova = provas.find((p) => p.slug === params.slug);
  return {
    title: `Prova ${prova.numero} — ${prova.nome} | Pardus Games 2026`,
    description: `Confira todos os detalhes da ${prova.nome}: exercícios por categoria, rounds e regras de sincronização.`,
    openGraph: {
      title: `Prova ${prova.numero} — ${prova.nome} | Pardus Games 2026`,
      description: `Veja os WODs completos por categoria: Scaled, Amador, Intermediário e RX.`,
      url: `https://pardusgames.com.br/provas/${prova.slug}`,
      siteName: "Pardus Games 2026",
      images: [{ url: "https://pardusgames.com.br/og-image.png" }],
    },
  };
}
```

---

## Estrutura de arquivos a criar/modificar

```
app/
├── (landing)/
│   ├── page.tsx                            ← NÃO MOVER
│   └── _components/
│       └── landing-sections.tsx            ← MODIFICAR — adicionar seção #provas
│
├── provas/
│   └── [slug]/
│       ├── page.tsx                        ← CRIAR — página da prova
│       └── _components/
│           ├── workout-header.tsx          ← CRIAR
│           ├── category-tabs.tsx           ← CRIAR
│           ├── rounds-timeline.tsx         ← CRIAR
│           └── flow-accordion.tsx          ← CRIAR
│
components/
└── workout-card.tsx                        ← CRIAR — card de prova reutilizável

constants/
└── workouts-data.ts                        ← CRIAR — dados de todas as provas
```

### Convenções de nomenclatura

- Arquivos: sempre em kebab-case e inglês (`category-tabs.tsx`)
- Componentes React: PascalCase em inglês (`CategoryTabs`)
- Tipos e interfaces: PascalCase em inglês (`Workout`, `CategoryFlow`)
- Variáveis e arrays: camelCase em inglês (`workouts`, `activeCategory`)

---

## Classes Tailwind principais a usar

```tsx
// Fundo principal
className="bg-background"

// Card de bloco
className="bg-card text-card-foreground border border-border rounded-sm p-4"

// Tab ativa
className="bg-primary text-primary-foreground font-bold"

// Tab inativa
className="border border-primary text-primary bg-transparent"

// Texto com retângulo de fundo (estilo Pardus)
className="inline bg-primary text-primary-foreground px-3 leading-snug
           [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"

// Badge de divisão
className="inline-block bg-primary text-primary-foreground text-xs font-bold
           uppercase tracking-widest px-2 py-1"

// Headline da prova
className="font-heading text-6xl md:text-8xl text-foreground leading-none"

// Número da prova
className="font-heading text-2xl text-primary tracking-widest uppercase"

// Exercício na lista
className="font-sans text-foreground text-base uppercase tracking-wide"

// Marcador novo exercício (highlight)
className="w-2 h-2 rounded-full bg-primary inline-block mr-2 flex-shrink-0"
```

---

## Regras de implementação

1. **Não quebrar o site existente** — a home deve continuar funcionando normalmente
2. **Mobile first** — tabs de categoria com scroll horizontal no mobile, timeline vertical funcional em telas pequenas
3. **Escalável** — a estrutura de dados deve suportar adicionar novas provas apenas inserindo um novo objeto no array `workouts` em `constants/workouts-data.ts`, sem precisar criar novos componentes
4. **Estado de prova bloqueada** — provas sem dados devem mostrar card "EM BREVE" na home e redirecionar para a home caso alguém acesse a URL diretamente
5. **Scroll spy nas tabs** — usar `IntersectionObserver` para ativar a tab conforme o usuário scrolla pelas seções de categoria
6. **generateStaticParams** — implementar para as slugs existentes gerarem rotas estáticas no build:

```tsx
export async function generateStaticParams() {
  return workouts.map((workout) => ({ slug: workout.slug }));
}
```

---

## O que NÃO fazer

- ❌ Não usar tabelas HTML para mostrar os exercícios — usar listas e cards
- ❌ Não colocar todas as categorias em colunas side-by-side no mobile — empilhar verticalmente
- ❌ Não hardcodar cores com hex nas classes/componentes (usar tokens do tema: `primary`, `background`, `card`, `border`, etc.)
- ❌ Não usar border-radius maior que `4px` nos cards de exercício — estilo esportivo reto
- ❌ Não criar uma página estática por prova — usar rota dinâmica `[slug]` com dados em `constants/workouts-data.ts`
- ❌ Não criar arquivos em português ou fora do padrão kebab-case

---

_Prompt gerado com base na análise do PDF "Prova 1 — Welcome" e do site pardusgames.com.br_
_Stack confirmada: Next.js + Tailwind CSS_
