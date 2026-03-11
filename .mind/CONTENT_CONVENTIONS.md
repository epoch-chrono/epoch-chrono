# Content Conventions — epoch-chrono

## Tipos de conteúdo

| Tipo      | Diretório               | Cadência    | Tamanho           |
| --------- | ----------------------- | ----------- | ----------------- |
| Blog post | `src/content/blog/`     | mensal      | 800–3000 palavras |
| TIL       | `src/content/til/`      | semanal     | 100–400 palavras  |
| Project   | `src/content/projects/` | sob demanda | estruturado       |
| Note      | `src/content/notes/`    | livre       | qualquer          |

---

## Frontmatter — Blog Post

```yaml
---
title: "Título do post"
description: "Uma frase que resume o post (usada em SEO e OG)"
pubDate: 2024-01-15          # ISO 8601, timezone BRT implícita
updatedDate: 2024-01-20      # opcional
lang: "pt-BR"                # ou "en"
draft: true                  # nunca publicar sem mudar pra false explicitamente
tags:
  - sre
  - observability
  - postmortem
categories:
  - engineering               # ver lista de categorias abaixo
hero:
  image: "./hero.png"         # relativo ao post, opcional
  alt: "Descrição da imagem"
canonical: ""                 # se republicado de outro lugar
---
```

## Frontmatter — TIL

```yaml
---
title: "TIL: Como X faz Y"
pubDate: 2024-01-15
tags:
  - linux
  - fish
draft: false
---
```

## Frontmatter — Project

```yaml
---
title: "Nome do projeto"
description: "Uma linha"
status: "active"             # active | archived | wip
repo: "https://github.com/epoch-chrono/..."
demo: ""                     # URL de demo, opcional
tags:
  - golang
  - observability
featured: false
pubDate: 2024-01-15
---
```

---

## Categorias permitidas

```text
engineering       # posts técnicos gerais
sre               # site reliability, operações
platform          # platform engineering, developer experience
postmortem        # análise de incidentes
open-source       # projetos e contribuições OSS
career            # carreira, liderança, soft skills
tooling           # ferramentas, workflow, setup
opinion           # ponto de vista pessoal
```

## Tags — convenções

- Sempre lowercase, sem espaços (usar hífen)
- Específicas ao conteúdo, não ao tipo (não usar "post", "artigo")
- Máximo de 5 tags por conteúdo
- Exemplos: `kubernetes`, `aws`, `golang`, `observability`, `incident-management`, `fish-shell`, `astro`

---

## Nomes de arquivo

```text
# Blog
src/content/blog/YYYY-MM-DD-slug-do-post.md

# TIL
src/content/til/YYYY-MM-DD-slug-curto.md

# Projects
src/content/projects/nome-do-projeto.md
```

- Slug: lowercase, hífens, sem acentos, sem caracteres especiais
- Data no nome de arquivo é opcional para projects, obrigatória para blog e TIL

---

## Open Graph (OG)

- Gerado automaticamente por post a partir de `title` + `description`
- Imagem OG: gerada via componente Astro ou estática em `public/og/`
- Formato recomendado: 1200×630px

---

## RSS

- Feed gerado em `/rss.xml` (Astro built-in)
- Incluir todos os posts com `draft: false`
- Excluir TIL do feed principal; TIL tem feed próprio em `/til/rss.xml`
