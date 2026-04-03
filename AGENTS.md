# Instruções para Agente de Código — Pardus Games 2026

## Objetivo

Implementar e evoluir o site oficial do Pardus Games 2026 mantendo identidade visual, performance e consistência de arquitetura.

## Dados oficiais do evento

- Nome: Pardus Games 2026
- Data: 23 e 24 de maio de 2026
- Local: SESC Mossoró/RN
- Organizador: Box Pardus (@boxpardus)
- Locutor oficial: Paul Klein
- Instagram: @pardusgames

## Arquitetura atual (obrigatória)

- Landing page: `app/(landing)/page.tsx`
- Seções da landing: `app/(landing)/_components/landing-sections.tsx`
- Componentes compartilhados: `components/`
- UI base: `components/ui/` (shadcn)
- Dados e constantes: `constants/`
- Tema global: `app/globals.css`
- Rotas de provas:
  - `app/provas/[slug]/page.tsx`
  - `app/provas/not-found.tsx`
  - Dados em `constants/workouts-data.ts`

## Padrões de nomenclatura

- Novos arquivos: inglês + kebab-case
  - Exemplo: `workout-hero.tsx`, `category-tabs.tsx`
- Componentes React: PascalCase em inglês
  - Exemplo: `WorkoutHero`, `CategoryTabs`
- Variáveis/funções: camelCase em inglês
- Não criar pasta `src/` neste projeto

## Regras visuais essenciais

- Usar tokens de tema, não hardcode de cor/fonte
  - Preferir: `bg-background`, `bg-card`, `border-border`, `text-foreground`, `bg-primary`, `text-primary-foreground`
- Fontes do tema
  - Headline: `font-heading`
  - Corpo: `font-sans`
- Estilo esportivo e direto
  - Alto contraste
  - Bordas discretas
  - Sem excesso de sombras

## Regras de implementação

- Mobile first
- Não quebrar a landing existente
- Componentes reutilizáveis antes de duplicar UI
- Slug sem dados publicados deve cair em `notFound()`
- Para nova prova publicada: adicionar objeto em `constants/workouts-data.ts`

## Conteúdo e idioma

- Textos públicos em PT-BR com acentuação correta
- Labels curtas e claras
- Evitar placeholders permanentes em produção

## Checklist rápido antes de finalizar

1. Rodar `npm run build`
2. Validar home + seção `#provas`
3. Validar `/provas/welcome`
4. Validar slug inválida em `/provas/[slug]`
5. Confirmar uso de tokens de tema e nomes de arquivos no padrão
