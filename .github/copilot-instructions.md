# AI Coding Guidelines

## Stack & Architecture
- **Framework**: Next.js 16 app router + TypeScript, static personal site with MDX blog
- **Styling**: Tailwind v4 with custom CSS variables in `src/styles/`
- **Analytics**: Umami + Vercel Analytics/SpeedInsights (wired in root layout)
- **Package manager**: bun (see `bun.lockb`)

## Key Commands
```bash
bun dev          # Start dev server with Turbo
bun build        # Production build
bun lint         # ESLint
bun typecheck    # TypeScript check
bun format       # Prettier write
```

## Project Structure
| Path | Purpose |
|------|---------|
| `src/app/` | Next.js app router pages & routes |
| `src/posts/*.mdx` | Blog content (frontmatter: `title`, `publishedAt`, `summary`, optional `image`) |
| `src/components/` | React components (client components in `client/` subfolder) |
| `src/styles/` | CSS modules & custom properties |
| `src/config/site.ts` | Site metadata, nav items, social links |

## Content & Blog System
- **Adding posts**: Create `src/posts/{slug}.mdx` with frontmatter. Sitemap/RSS auto-update on build.
- **Frontmatter**: `title` (required), `publishedAt` (YYYY-MM-DD, required), `summary` (required), `image` (optional, for OG)
- **Data loading**: `getBlogPosts()` in `src/app/blog/utils.ts` uses Node fs—server components only
- **MDX components**: Custom heading anchors, `next/image` wrapper, syntax highlighting via sugar-high

## Styling Conventions
- Use CSS variables: `var(--color-text)`, `var(--color-accent)`, `var(--color-surface)`, etc.
- Tailwind arbitrary values: `text-(--color-text)`, `bg-(--color-surface)`
- Existing utility classes: `homepage-link`, `fade-in`, `fade-in-delay-{1-5}`, `stagger-children`, `hover-lift`
- Animations defined in `src/app/global.css`; tokens in `src/styles/variables.css`

## Component Patterns
- **Client components**: Use `"use client"` directive; place in `src/components/client/` if stateful
- **Section layout**: Use `<Section title="..." marker="§">` wrapper for homepage/experience sections
- **Links**: External links get `target="_blank" rel="noopener noreferrer"`; use `homepage-link` class for animated underlines
- **Stagger animations**: Set `style={{ "--stagger-index": n }}` on children inside `.stagger-children`
- **CalButton**: Embeds Cal.com scheduling via `@calcom/embed-react`; initializes on mount with dark theme
- **NerdyTime**: Cycles through 12 time formats (unix, binary, hex, roman, morse, etc.) on click; updates every second

## Navigation Updates
When adding new top-level pages:
1. Update `siteConfig.navItems` in `src/config/site.ts`
2. Update hardcoded links in `src/components/floating-nav.tsx`
3. Add route to `src/app/sitemap.ts` routes array

## SEO & Metadata
- Default metadata from `src/config/site.ts`; `baseUrl` from `src/app/sitemap.ts`
- OG images: Custom via `src/app/og/route.tsx` (pass `?title=...`) or frontmatter `image`
- JSON-LD: Use `<JsonLd data={{...}} />` component
- Mirror metadata shape from existing pages: `title`, `description`, `openGraph`, `twitter`, `alternates.canonical`

## Images
- Remote images require allowlist in `next.config.ts` (currently: `utfs.io`)
- Use `next/image` with `fill` + `sizes` for responsive images
- `ProfileImage` component shows shimmer loading state

## Key Files Reference
- Root layout: `src/app/layout.tsx` (fonts, analytics, nav, background)
- Site config: `src/config/site.ts` (name, links, navItems)
- Blog utils: `src/app/blog/utils.ts` (MDX parsing, date formatting)
- MDX renderer: `src/components/mdx.tsx` (custom components)
- RSS feed: `src/app/feed.xml/route.ts`
