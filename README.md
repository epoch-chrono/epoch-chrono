# epoch-chrono

Personal site — [epoch-chrono.com](https://epoch-chrono.com)

Blog, TIL, projects and notes by [Vitor Jr](https://epoch-chrono.com) — SRE & platform engineer.

## Stack

- **Framework:** [Astro v6](https://astro.build) (SSG)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Content:** Markdown / MDX — no CMS
- **Deploy:** [Vercel](https://vercel.com) (auto-deploy on push to `main`)
- **DNS:** [Cloudflare](https://cloudflare.com) (proxy off — DNS only)
- **Analytics:** Cloudflare Web Analytics (zero cookies)
- **Newsletter:** [Buttondown](https://buttondown.email)

## Development

```sh
# Install dependencies
pnpm install

# Start dev server at localhost:4321
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project structure

```text
src/
├── components/
│   ├── layout/     # BaseLayout, Header, Footer
│   ├── blog/       # PostCard, TagList
│   ├── til/        # TilCard
│   └── common/     # SEO
├── content/
│   ├── blog/       # YYYY-MM-DD-slug.md
│   ├── til/        # YYYY-MM-DD-slug.md
│   └── projects/   # project-name.md
├── content.config.ts   # Astro v6 content collections (glob loader)
├── layouts/        # BlogPost, TilPost, Project
├── pages/          # Routes
├── styles/         # global.css
├── utils/          # date.ts, content.ts
public/
├── assets/         # Static images (photos, etc.)
├── og/             # OpenGraph images
└── favicon.*       # favicon.svg, favicon.ico, favicon-512.png
```

## Content collections

| Collection | Path | Format |
| :--------- | :--- | :----- |
| blog | `src/content/blog/` | Markdown / MDX |
| til | `src/content/til/` | Markdown |
| projects | `src/content/projects/` | Markdown |

See [`.mind/CONTENT_CONVENTIONS.md`](.mind/CONTENT_CONVENTIONS.md) for frontmatter schema and writing conventions.

## Git flow

`main` is protected — never commit directly.

```sh
git checkout -b <type>/<description>
git add .
git cz
git push origin <branch>
gh pr create --title "..." --body "" --base main --head <branch>
gh pr merge <number> --merge --delete-branch
```

Commit types: `feat`, `fix`, `content`, `chore`, `docs`.

## License

Content (posts, notes) © Vitor Jr — all rights reserved.
Code (components, config) — [MIT](LICENSE).
