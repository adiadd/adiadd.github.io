# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Dev server with Turbo
bun build        # Production build
bun lint         # ESLint
bun typecheck    # TypeScript check
bun format       # Prettier write
bun check-code   # Prettier check (CI)
```

## Architecture

Next.js 16 app router + TypeScript static personal site with MDX blog. Styling via Tailwind v4 with CSS variables supporting light/dark mode (via `prefers-color-scheme`). Analytics through Vercel Analytics + SpeedInsights.

### Key Directories

- `src/app/` — Next.js app router pages and API routes
- `src/components/` — React components (client components in `client/` subfolder with `"use client"` directive)
- `src/posts/` — MDX blog posts
- `src/styles/` — CSS variables, prose styles, utilities
- `src/config/site.ts` — Site name, social links, nav items

## Blog System

Create posts at `src/posts/{slug}.mdx` with frontmatter:

```yaml
---
title: "Post Title"
publishedAt: "YYYY-MM-DD"
summary: "One-line description"
image: "/optional-og.png"
---
```

Sitemap and RSS regenerate on build via `getBlogPosts()` in `src/app/blog/utils.ts`.

## Styling

**CSS Variables** (in `src/styles/variables.css`):

```css
var(--color-background)   var(--color-surface)    var(--color-text)
var(--color-accent)       var(--color-secondary)  var(--color-border)
var(--link-color)         var(--link-hover-color)
```

Use Tailwind arbitrary values: `text-(--color-text)`, `bg-(--color-surface)`

**Animation classes** (in `src/app/global.css`):

- `fade-in`, `fade-in-delay-{1-5}` — staggered entrance animations
- `stagger-children` — parent class; children need `style={{ "--stagger-index": n }}`
- `hover-lift` — subtle hover elevation
- `homepage-link` — animated gradient underline on hover

## Adding New Pages

1. Create route in `src/app/{route}/page.tsx`
2. Add to `siteConfig.navItems` in `src/config/site.ts`
3. Update `links` array in `src/components/floating-nav.tsx` (hardcoded for active state logic)
4. Add route to `routes` array in `src/app/sitemap.ts`

## SEO Metadata

Mirror existing pages' metadata structure with `openGraph`, `twitter`, and `alternates.canonical`. Use `<JsonLd data={{...}} />` for structured data. OG images via `src/app/og/route.tsx` accepting `?title=...` param.

## Design Philosophy

"The Soft Study" — warm academia meets clean engineering. Thoughtful, well-read, calm, technical yet approachable. Always desktop and mobile friendly.

## Development Philosophy

Always ultrathink and use parallel subagents as necessary
