# sahilsharma.dev

My personal website built with React Router v7, Tailwind CSS v4, and MDX. Deployed on Cloudflare Pages.

## Stack

- **Framework**: React Router v7 (SSR)
- **Styling**: Tailwind CSS v4
- **Content**: MDX (blog posts)
- **Deployment**: Cloudflare Pages
- **Package Manager**: pnpm

## Local Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Adding Blog Posts

Create a new `.mdx` file in `app/content/blog/` with this frontmatter:

```yaml
---
title: "Your Post Title"
date: "2025-01-01"
description: "Short description"
tags: ["React", "TypeScript"]
readTime: "5 min read"
published: true
---
```

## Deployment

Deploys automatically to Cloudflare Pages on push to `main`.

### First-time Cloudflare Pages setup

1. Go to [Cloudflare dashboard](https://dash.cloudflare.com/) → Workers & Pages → Create application → Pages
2. Connect to GitHub, select `sahilsharma2408/personal-website`
3. Build settings:
   - Build command: `pnpm build`
   - Build output directory: `build/client`
4. Add GitHub secrets (`Settings → Secrets → Actions`):
   - `CLOUDFLARE_API_TOKEN` — Cloudflare dashboard → My Profile → API Tokens → Create Token (use "Edit Cloudflare Workers" template)
   - `CLOUDFLARE_ACCOUNT_ID` — Cloudflare dashboard right sidebar
