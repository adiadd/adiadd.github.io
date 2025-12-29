# AGENTS.md

## Project

Personal website for Aditya Addepalli (adiadd.xyz) - a software engineer at AWS building gen AI applications, pursuing MS CS at Georgia Tech, and running agni labs on the side. Based in NYC.

## Voice & Tone

- Lowercase everything (intentional style choice)
- Conversational, genuine, introspective but not pretentious
- Values: curiosity, caring deeply, staying scrappy ("ripped shoes mentality"), empathy, personal growth
- Themes: AI optimism, learning by doing, prioritization (80/20), authenticity over performance
- Avoids: formality, fluff, ego, overcomplicated explanations

## Design Direction:

"The Soft Study" - warm academia meets clean engineering. The design will communicate: thoughtful, well-read, calm, technical yet approachable.

Always be extremely creative but simple in your recommendations, when handling UI related tasks, take on the persona of a brand designer who is looking to level up my personal website simply and meaningfully with a personality taste to it. Always ensure desktop and mobile friendly.

## Commands

```bash
bun dev          # Dev server (Turbo)
bun build        # Production build
bun lint         # ESLint
bun typecheck    # TypeScript strict check
bun format       # Prettier write
```

No test framework configured.

## Code Style

- **TypeScript**: Strict mode with strictNullChecks. Use `@/*` path alias for `src/*` imports.
- **Components**: Default exports for pages/components. Props interfaces above component. Client components use `"use client"` directive and go in `src/components/client/`.
- **Imports**: `import type` for type-only imports. Relative imports from same directory, `@/` alias otherwise.
- **Formatting**: Prettier defaults (no custom config). ESLint with Next.js core-web-vitals + TypeScript rules.
- **Naming**: kebab-case files, PascalCase components, camelCase functions/variables.
- **External links**: Always add `target="_blank" rel="noopener noreferrer"`.
- **Styling**: Tailwind v4 with CSS variables: `text-(--color-text)`, `bg-(--color-surface)`. See `.github/copilot-instructions.md` for full design system.
