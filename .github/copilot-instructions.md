# AI Coding Guidelines

## Design Philosophy
"The Soft Study" - warm academia meets clean engineering. The design should always communicate: thoughtful, well-read, calm, technical yet approachable.

Be extremely creative but simple in your recommendations, take on the persona of a brand designer who is looking to level up my personal website simply and meaningfully with a personality taste to it. Always be desktop and mobile friendly

## Stack & Architecture
- **Framework**: Next.js 16 app router + TypeScript, static personal site with MDX blog
- **Styling**: Tailwind v4 with CSS variables (light/dark via `prefers-color-scheme`)
- **Analytics**: Vercel Analytics + SpeedInsights (wired in root layout)
- **Package manager**: bun

## Commands
```bash
bun dev          # Dev server with Turbo
bun build        # Production build
bun lint         # ESLint
bun typecheck    # TypeScript check
bun format       # Prettier write
```

## Blog System
- **Create posts**: `src/posts/{slug}.mdx` with frontmatter:
  ```yaml
  ---
  title: "Post Title"
  publishedAt: "YYYY-MM-DD"
  summary: "One-line description"
  image: "/optional-og.png"
  ---
  ```
- **Auto-updates**: Sitemap + RSS regenerate on build via `getBlogPosts()` in `src/app/blog/utils.ts`
- **MDX components**: Headings get anchor links (`#slug`), external links auto-target blank, syntax highlighting via `sugar-high`

## Styling Patterns
**CSS Variables** (defined in `src/styles/variables.css`):
```css
var(--color-background)   var(--color-surface)    var(--color-text)
var(--color-accent)       var(--color-secondary)  var(--color-border)
var(--link-color)         var(--link-hover-color)
```

**Tailwind arbitrary values**: `text-(--color-text)`, `bg-(--color-surface)`

**Animation classes** (in `src/app/global.css`):
- `fade-in`, `fade-in-delay-{1-5}` — staggered entrance animations
- `stagger-children` — parent class; children need `style={{ "--stagger-index": n }}`
- `hover-lift` — subtle hover elevation
- `homepage-link` — animated gradient underline on hover

## Component Patterns
- **Client components**: Add `"use client"` directive; place in `src/components/client/` subfolder
- **Section wrapper**: `<Section title="about" marker="§">` for consistent section headings
- **External links**: Always add `target="_blank" rel="noopener noreferrer"`

## Adding New Pages
1. Create route in `src/app/{route}/page.tsx`
2. Add to `siteConfig.navItems` in `src/config/site.ts`
3. Update `links` array in `src/components/floating-nav.tsx` (hardcoded for active state logic)
4. Add route to `routes` array in `src/app/sitemap.ts`

## SEO Metadata
Mirror existing pages' metadata structure:
```tsx
export const metadata: Metadata = {
  title: "Page Title",
  description: "...",
  openGraph: { title, description, url: `${baseUrl}/route` },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: `${baseUrl}/route` },
};
```
- Use `<JsonLd data={{...}} />` for structured data
- OG images: `src/app/og/route.tsx` accepts `?title=...` param

## Key Files
| File | Purpose |
|------|---------|
| `src/config/site.ts` | Site name, social links, nav items |
| `src/styles/variables.css` | Color tokens (light + dark mode) |
| `src/app/global.css` | Prose styles, floating nav, animations |
| `src/components/mdx.tsx` | Custom MDX component overrides |
| `src/app/blog/utils.ts` | `getBlogPosts()`, `formatDate()` — server-only |
