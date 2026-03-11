# Folder Structure — epoch-chrono (Astro)

## Visão geral

```text
epoch-chrono/
├── .mind/                        # contexto de projeto para Claude
│   ├── PROJECT_INSTRUCTIONS.md
│   ├── CONTENT_CONVENTIONS.md
│   ├── DESIGN_SYSTEM.md
│   ├── FOLDER_STRUCTURE.md
│   └── WRITING_WORKFLOW.md
│
├── .github/
│   └── workflows/
│       ├── ci.yml                # lint + build em PRs
│       └── deploy.yml            # deploy para Vercel em push main
│
├── backups-and-rollbacks/        # backups manuais (no .gitignore)
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── og/                       # imagens OG estáticas (fallback)
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── BaseLayout.astro
│   │   ├── blog/
│   │   │   ├── PostCard.astro
│   │   │   └── TagList.astro
│   │   ├── til/
│   │   │   └── TilCard.astro
│   │   └── common/
│   │       ├── SEO.astro         # head tags, OG, canonical, CF Analytics beacon
│   │       └── OGImage.astro     # geração de imagem OG
│   │
│   ├── content/
│   │   ├── blog/
│   │   │   └── YYYY-MM-DD-slug.md
│   │   ├── til/
│   │   │   └── YYYY-MM-DD-slug.md
│   │   ├── projects/
│   │   │   └── nome-projeto.md
│   │   └── config.ts             # Astro content collections schema
│   │
│   ├── layouts/
│   │   ├── BlogPost.astro
│   │   ├── TilPost.astro
│   │   └── Project.astro
│   │
│   ├── pages/
│   │   ├── index.astro           # landing / about
│   │   ├── now.astro             # /now page
│   │   ├── uses.astro            # /uses page
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── til/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── rss.xml.ts
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── utils/
│       ├── date.ts               # helpers de formatação de data BRT
│       └── content.ts            # helpers para content collections
│
├── bin/
│   └── new-post.fish             # script para criar novo post/TIL
│
├── .envrc                        # source_up + vars locais (no .gitignore)
├── .envrc.example
├── .pre-commit-config.yaml       # força best practices
├── .default-npm-packages         # mise default node packages
├── .default-python-packages      # mise default python packages
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## Content Collections Schema (src/content/config.ts)

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['pt-BR', 'en']).default('pt-BR'),
    draft: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    hero: z.object({
      image: z.string(),
      alt: z.string(),
    }).optional(),
    canonical: z.string().url().optional(),
  }),
});

const til = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'archived', 'wip']).default('active'),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog, til, projects };
```

---

## .envrc.example

```bash
# === Identidade === #
export SITE_DOMAIN='epoch-chrono.com'
export SITE_AUTHOR='Vitor Jr'
export EMAIL_AUTHOR='vitor@epoch-chrono.com'
export GITHUB_ORG='epoch-chrono-com'
export GITHUB_USER='epoch-chrono'
export GITHUB_REPO='https://github.com/epoch-chrono/epoch-chrono'


# === Deploy - Vercel === #
export VERCEL_API_TOKEN='vcp_...'
export VERCEL_PROJECT='epoch-chrono'

# === DNS - Cloudflare === #
export CLOUDFLARE_API_TOKEN='bELc...'
export CLOUDFLARE_ZONE_ID='f31...'
export CLOUDFLARE_ACCOUNT_ID='621...'

# === Analytics — Cloudflare Web Analytics === #
export PUBLIC_CF_ANALYTICS_TOKEN='bac...'  # preencher após ativar CF Web Analytics na zona

# === Newsletter - Buttondown === #
export BUTTONDOWN_API_KEY='9ec...'
export BUTTONDOWN_API='https://api.buttondown.email/v1'

# === Notion === #
export NOTION_API_TOKEN='ntn_19...'
export NOTION_BASE_PAGE='https://www.notion.so/epoch-chrono/epoch-chrono-com-site-3204...'

# === Github === #
export GITHUB_API_TOKEN='ghp_23...'

# === OnePassword === #
export SSH_AUTH_SOCK=''
```
