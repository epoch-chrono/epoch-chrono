# Design System — epoch-chrono

## Identidade Visual

Inspirado na nave Epoch de Chrono Trigger (SNES, 1995).
Tom geral: site técnico, terminal-like, denso — mas com personalidade.
Não é pixel art, mas carrega a essência cromática do jogo.

---

## Paleta de Cores

Extraída da nave Epoch: casco azul-cobalto, motores ciano elétrico,
sombras índigo, acentos dourado âmbar.

### Base (Dark Mode — padrão)

```css
/* Fundos */
--color-bg-base:      #0a0e1a;  /* quase preto, azul profundo */
--color-bg-surface:   #0f1629;  /* cards, blocos de código */
--color-bg-elevated:  #162040;  /* hover, nav ativa */

/* Texto */
--color-text-primary:   #e8edf7;  /* branco levemente azulado */
--color-text-secondary: #8fa3c8;  /* subtítulos, metadata */
--color-text-muted:     #4a607f;  /* datas, placeholders */

/* Acento principal — ciano Epoch */
--color-accent:         #00c8e0;  /* links, highlights, foco */
--color-accent-dim:     #0090a8;  /* hover do acento */
--color-accent-glow:    #00c8e030; /* glow sutil em borders */

/* Acento secundário — dourado âmbar */
--color-gold:           #f0a830;  /* badges especiais, featured */
--color-gold-dim:       #b07820;

/* Roxo índigo — sombras e gradientes */
--color-indigo:         #2d1b6e;  /* gradientes de fundo */
--color-indigo-bright:  #6b4fc8;  /* tags, categorias */

/* Semânticas */
--color-success:  #00e896;
--color-warning:  #f0a830;  /* mesmo que gold */
--color-error:    #e84060;
--color-border:   #1e2d4a;
```

### Light Mode

```css
--color-bg-base:      #f4f7fd;
--color-bg-surface:   #ffffff;
--color-bg-elevated:  #e8edf7;

--color-text-primary:   #0a0e1a;
--color-text-secondary: #3a4f6e;
--color-text-muted:     #7a95b8;

--color-accent:         #0080a0;  /* ciano mais escuro pra contraste */
--color-accent-dim:     #005870;
--color-accent-glow:    #00c8e020;

--color-gold:           #c07820;
--color-indigo-bright:  #5040b0;

--color-border:         #c8d8ee;
```

---

## Tipografia

```css
/* Fontes */
--font-sans:  'Inter', system-ui, sans-serif;       /* corpo, UI */
--font-mono:  'JetBrains Mono', 'Fira Code', monospace; /* código, terminal */
--font-display: 'Inter', sans-serif;               /* headings (sem serif) */
```

Instalar via `@fontsource`:

```bash
pnpm add @fontsource/inter @fontsource/jetbrains-mono
```

### Escala tipográfica (rem base = 16px)

| Token       | Valor    | Uso                         |
| ----------- | -------- | --------------------------- |
| `text-xs`   | 0.75rem  | metadata, datas, labels     |
| `text-sm`   | 0.875rem | tags, captions, footer      |
| `text-base` | 1rem     | corpo de texto              |
| `text-lg`   | 1.125rem | lead paragraph              |
| `text-xl`   | 1.25rem  | h4, card title              |
| `text-2xl`  | 1.5rem   | h3                          |
| `text-3xl`  | 1.875rem | h2                          |
| `text-4xl`  | 2.25rem  | h1, hero title              |
| `text-5xl`  | 3rem     | display (home hero somente) |

### Regras

- Headings: `font-sans`, `font-semibold`, letter-spacing `-0.02em`
- Corpo: `font-sans`, `font-normal`, `leading-relaxed` (1.65)
- Código inline: `font-mono`, `text-accent`, bg `color-bg-surface`
- Blocos de código: `font-mono`, `text-sm`, sem serifa

---

## Espaçamento

Seguir escala Tailwind (base 4px). Não criar escala customizada.
Usar preferencialmente: `4, 6, 8, 12, 16, 24, 32, 48, 64`.

---

## Componentes Recorrentes

### Post Card (blog / TIL)

```text
┌─────────────────────────────────────┐
│ [categoria]  [tag] [tag]            │  ← text-xs, color-indigo-bright
│                                     │
│  Título do post em font-semibold    │  ← text-xl, text-primary
│  Descrição curta em text-secondary  │  ← text-sm, 2 linhas max
│                                     │
│  15 jan 2024  ·  5 min leitura      │  ← text-xs, text-muted
└─────────────────────────────────────┘
border: 1px solid color-border
bg: color-bg-surface
hover: border-color → color-accent, bg → color-bg-elevated
```

### Tag Badge

```text
bg: color-bg-elevated
text: color-accent (dark) / color-accent-dim (light)
border: 1px solid color-border
border-radius: 4px
padding: 2px 8px
font: text-xs, font-mono
```

### Status Badge (projects)

```text
active  → bg: color-success/10, text: color-success, border: color-success/30
wip     → bg: color-gold/10,    text: color-gold,    border: color-gold/30
archived→ bg: color-muted/10,   text: color-muted,   border: color-muted/30
```

### Bloco de código

- Tema: baseado em **Tokyo Night** ou **Night Owl** (já dark, alinha com paleta)
- Shiki para syntax highlighting no Astro
- Border-left: 3px solid color-accent nos blocos de terminal/bash

---

## Ícone / Favicon — Nave Epoch

Vetor SVG minimalista da silhueta da Epoch (não pixel art).
Proporção: 1:1 (funciona em 16×16 até 512×512).

Elementos visuais chave da Epoch a preservar no SVG:

- Casco principal: forma aerodinâmica com "asas" laterais
- Cockpit: bolha translúcida superior
- Motores: dois pontos de luz ciano na traseira
- Cor dominante: `#0a2a6e` (azul-cobalto escuro)
- Acentos: `#00c8e0` (ciano) nos motores e bordas

Arquivo: `public/favicon.svg`
Também gerar: `public/favicon.ico` (16×16, 32×32) para compatibilidade.

---

## Dark/Light Toggle

- Implementar via classe `.dark` no `<html>` (padrão Tailwind dark mode)
- Preferência salva em `localStorage` com chave `epoch-theme`
- Default: respeitar `prefers-color-scheme` do sistema na primeira visita

```astro
<!-- ThemeToggle.astro -->
<!-- Ícone: lua (dark) / sol (light) — linha fina, sem preenchimento -->
```

---

## Referências Visuais

- Nave Epoch (Chrono Trigger SNES) — paleta e identidade
- Terminal/CLI aesthetic — densidade, monospace, estrutura
- Sites de referência de conteúdo técnico: brandur.org (densidade), overreacted.io (foco no texto)
