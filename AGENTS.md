# Instruções para o Agente de Código — Site Pardus Games 2026

## Visão Geral

Construir o site oficial do **Pardus Games 2026**, campeonato de crosstraining em formato trio, organizado pelo Box Pardus. O site deve converter visitantes em inscritos e transmitir a identidade visual já consolidada do evento no Instagram (@pardusgames).

---

## Identidade Visual — Seguir com Rigor

### Paleta de cores

```css
--color-primary: #e5a800; /* Amarelo Pardus — CTA, destaques, bordas */
--color-primary-light: #ffd04d; /* Amarelo claro — hover, gradientes sutis */
--color-bg: #111111; /* Preto profundo — fundo hero e seções escuras */
--color-bg-alt: #1a1a1a; /* Preto médio — cards em fundo escuro */
--color-bg-light: #f5f5f0; /* Off-white — seções claras */
--color-text-light: #ffffff; /* Branco — texto sobre fundo escuro */
--color-text-dark: #111111; /* Preto — texto sobre fundo amarelo */
--color-muted: #888780; /* Cinza — textos secundários */
```

### Tipografia

- **Headline / Display**: fonte bold condensada — usar `Bebas Neue` (Google Fonts) ou `Anton`. Letras maiúsculas, tracking normal, peso máximo.
- **Subtítulos**: mesma família em tamanho menor, uppercase com letter-spacing aumentado.
- **Corpo**: `DM Sans` ou `Barlow` — clean, legível, sem serifas.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

### Estilo geral

- Fundo predominantemente **preto** com texto **branco**
- Elementos de destaque (botões, badges, sublinhados) em **amarelo #E5A800**
- Textos sobre amarelo devem ser **preto #111111**
- Sem gradientes complexos — flat design com alto contraste
- Sem sombras excessivas — limpo e direto
- Mascote (pantera/tigre) do logo Pardus pode ser referenciado como elemento decorativo quando houver imagem disponível

---

## Dados Reais do Evento

```
Nome:         Pardus Games 2026
Data:         23 e 24 de maio de 2026
Local:        SESC · Mossoró/RN
Organizador:  Box Pardus (@boxpardus)
Locutor:      Paul Klein (Locutor Oficial)
Formato:      Competição em trio (3 atletas por equipe)
Instagram:    @pardusgames
```

### Categorias

| Categoria     | Divisões disponíveis                        |
| ------------- | ------------------------------------------- |
| Scaled        | Trio Feminino · Trio Masculino              |
| Amador        | Trio Feminino · Trio Masculino              |
| Intermediário | Trio Feminino · Trio Masculino              |
| RX            | Trio Feminino · Trio Masculino · Trio Misto |

---

## Estrutura de Seções do Site

Implementar nesta ordem, de cima para baixo:

### 1. Hero (Essencial)

- Fundo preto com logo Pardus Games centralizado ou alinhado à esquerda
- Texto principal: `PARDUS GAMES 2026` em Bebas Neue, tamanho grande
- Subtexto em amarelo: `23 E 24 DE MAIO`
- Linha abaixo: `SESC · MOSSORÓ/RN` em branco, tamanho menor
- **Botão CTA primário**: `INSCREVA-SE AGORA` — fundo amarelo `#E5A800`, texto preto, sem border-radius exagerado (máximo 6px)
- **Botão CTA secundário**: `VER CATEGORIAS` — outline amarelo, texto amarelo, fundo transparente
- Opcional: contador regressivo (countdown) até 23 de maio de 2026

```
Layout sugerido:
[LOGO]
PARDUS GAMES 2026
━━━━━━━━━━━━━━━━━
23 E 24 DE MAIO · SESC MOSSORÓ/RN
[INSCREVA-SE AGORA]  [VER CATEGORIAS]
```

---

### 2. Categorias

- Título da seção: `CATEGORIAS` em Bebas Neue
- 4 cards lado a lado (grid responsivo — 2 colunas no mobile)
- Cada card tem:
  - Nome da categoria em destaque (ex: `RX`)
  - Lista das divisões (Trio Feminino / Masculino / Misto)
  - Card da categoria RX deve ter destaque visual extra (borda amarela ou badge "TOP")
- Fundo dos cards: `#1A1A1A` com borda sutil `0.5px solid #333`

```
[SCALED]         [AMADOR]       [INTERMEDIÁRIO]   [RX ★]
Trio Feminino    Trio Feminino   Trio Feminino     Trio Feminino
Trio Masculino   Trio Masculino  Trio Masculino    Trio Masculino
                                                   Trio Misto
```

---

### 3. Parâmetros / Regulamento

- Título: `PARÂMETROS`
- Componente accordion (expandir/recolher) por categoria
- Cada accordion contém: movimentos permitidos, pesos de referência, regras de pontuação
- Usar placeholder de conteúdo com indicação `[INSERIR PARÂMETROS REAIS]`
- Botão ao final: `BAIXAR REGULAMENTO COMPLETO (PDF)` — estilo outline amarelo

---

### 4. Staff / Equipe

- Título: `EQUIPE OFICIAL`
- Cards de profissionais:
  - **Paul Klein** — Locutor Oficial
  - Placeholders para: Head Judge, Organização, Fotógrafo oficial
- Cada card: foto (placeholder circular), nome em bold, função em amarelo
- Fundo da seção: branco/off-white para contrastar com seções escuras

---

### 5. Galeria — Edição Anterior

- Título: `PARDUS GAMES 2024`
- Grid de fotos em mosaico (3 colunas desktop, 2 mobile)
- Placeholders com aspect-ratio 1:1 e 4:3 alternados
- Hover: leve zoom com overlay escuro e ícone de expandir
- Botão abaixo: `VER MAIS FOTOS` linkando para o Instagram @pardusgames

---

### 6. Depoimentos de Atletas

- Título: `O QUE DIZEM OS ATLETAS`
- Fundo preto, texto branco
- 2–3 cards de depoimento com:
  - Foto do atleta (placeholder circular)
  - Frase em destaque entre aspas — ex: _"Não participo de competições porque tenho medo do que vão falar"_
  - Nome e categoria do atleta
- Estilo editorial — fonte grande para a citação, recuo lateral

---

### 7. Patrocinadores

- Título: `APOIO E REALIZAÇÃO`
- Linha de logos:
  - **Box Pardus** em destaque (organizador principal — logo maior)
  - Demais patrocinadores em logos menores abaixo
- Fundo cinza escuro `#1A1A1A`
- Placeholders com retângulos cinza onde irão os logos

---

### 8. Local

- Título: `ONDE VAI ACONTECER`
- Informações:
  ```
  SESC Mossoró
  Mossoró · Rio Grande do Norte
  23 e 24 de maio de 2026
  ```
- Mapa incorporado (Google Maps embed) ou placeholder visual de mapa
- Card lateral com: endereço, como chegar, dica de hospedagem para atletas de fora

---

### 9. Footer

- Logo Pardus Games menor
- Links: Categorias · Parâmetros · Inscrições · Contato
- Ícone do Instagram linkando para @pardusgames
- Texto: `© 2026 Pardus Games · Organizado pelo Box Pardus`
- Fundo: `#111111`, texto: `#888780`

---

## Componentes e Comportamentos

### Botão primário (CTA)

```css
.btn-primary {
  background: #e5a800;
  color: #111111;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px 32px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
}
.btn-primary:hover {
  background: #ffd04d;
}
```

### Botão outline

```css
.btn-outline {
  background: transparent;
  color: #e5a800;
  border: 1.5px solid #e5a800;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 13px 32px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-outline:hover {
  background: #e5a800;
  color: #111111;
}
```

### Badge de categoria

```css
.badge-rx {
  background: #e5a800;
  color: #111111;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 3px;
}
```

### Navbar

- Fundo: `#111111` com `border-bottom: 1px solid #222`
- Logo à esquerda
- Links: Categorias · Parâmetros · Galeria · Contato — cor `#888780`, hover `#FFFFFF`
- Botão `INSCRIÇÕES` à direita — amarelo, estilo `.btn-primary` menor
- Sticky no scroll (position: fixed top)
- No mobile: hamburger menu

### Countdown (opcional, mas recomendado no hero)

- Mostrar dias, horas, minutos, segundos até 23/05/2026 00:00
- Estilo: números grandes em Bebas Neue, label abaixo em Barlow pequeno
- Cor: número em branco, label em `#E5A800`

```js
// Target: 23 de maio de 2026
const eventDate = new Date("2026-05-23T00:00:00");
```

---

## Responsividade

| Breakpoint          | Comportamento                                     |
| ------------------- | ------------------------------------------------- |
| Desktop (≥1024px)   | Layout completo, grid 4 colunas para categorias   |
| Tablet (768–1023px) | Grid 2 colunas, hero com menos padding            |
| Mobile (<768px)     | Stack vertical, botões full-width, hamburger menu |

---

## Stack Técnica Sugerida

- **HTML/CSS/JS puro** — sem dependências pesadas (preferível para facilidade de deploy)
- Ou **React + Tailwind** se o agente preferir
- Google Fonts para tipografia
- Sem bibliotecas de UI prontas (Bootstrap, Material) — manter identidade própria
- Imagens: usar placeholders com `background: #1A1A1A` e bordas `#333` até receberem assets reais

---

## O Que NÃO Fazer

- ❌ Não usar fundo branco no hero — é preto
- ❌ Não usar vermelho — a cor de destaque é amarelo `#E5A800`
- ❌ Não usar fontes genéricas como Inter, Roboto ou Arial para headlines
- ❌ Não usar border-radius grandes (>8px) nos botões — visual mais seco/atlético
- ❌ Não criar categorias individuais — o formato é SEMPRE trio (3 atletas)
- ❌ Não inventar datas ou locais — usar apenas os dados confirmados acima
- ❌ Não usar gradientes coloridos — flat design com alto contraste

---

## Referência Visual

O visual de referência é o perfil @pardusgames no Instagram:

- Posts com fundo preto + amarelo ouro + tipografia condensada bold
- Fotos de atletas em ação com overlay escuro e texto por cima
- Logo com pantera/mascote em círculo com gradiente dourado na borda
- Estilo esportivo, direto, sem elementos decorativos desnecessários

---

_Instruções geradas com base na análise do perfil @pardusgames no Instagram — Pardus Games 2026._
