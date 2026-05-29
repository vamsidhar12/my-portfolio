@AGENTS.md

# Portfolio — Claude Code Guide

## Project Overview

Personal portfolio for **Vamsidhar Reddy Poothi** built with Next.js 16, Tailwind CSS v4, Framer Motion 12, and TypeScript.

## Key Decisions & Gotchas

### Tailwind CSS v4
- Config is CSS-only — there is **no `tailwind.config.js`**
- Dark mode uses `@variant dark (&:where(.dark, .dark *))` in `globals.css`
- Use `bg-gradient-to-r` not `bg-linear-to-r` (v4 syntax differs in some utilities)

### Dark Mode
- Class-based: toggling `.dark` on `<html>` drives all `dark:` variants
- Anti-FOUC inline script in `layout.tsx` sets the class before React hydrates
- Persistence via `localStorage` in `src/hooks/useDarkMode.ts`

### Brand Icons
- Lucide React v1+ removed GitHub, LinkedIn, Twitter brand icons
- Use the inline SVG components in `src/components/icons.tsx` instead
- Available: `GithubIcon`, `LinkedinIcon`, `TwitterIcon`, `MailIcon`, `LeetcodeIcon`

### Framer Motion 12
- The `ease` property in `Transition` must be a cubic-bezier array `[n, n, n, n]`, not a plain string like `"easeOut"` — TypeScript will reject it
- Example: `{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }`

### External Images
- Credly badge images are allowed via `next.config.ts` (`images.credly.com` remote pattern)
- Add new external image domains there before using `<Image src="https://..."/>`

## All Content Lives in One File

**`src/data/portfolio.ts`** — edit this to update any text, links, or data on the site. Never hardcode personal info in components.

## Dev Server

```bash
npm run dev       # starts on http://localhost:3000
```

If port 3000 is taken, use `npm run dev -- --port 3001`.

## Commands

```bash
npm run dev       # development server
npm run build     # production build (run before PRs to catch errors)
npm run lint      # ESLint
npx tsc --noEmit  # type-check without emitting
```

## Component Map

| File | Responsibility |
|---|---|
| `src/data/portfolio.ts` | Single source of truth for all content |
| `src/hooks/useDarkMode.ts` | Dark mode toggle + localStorage |
| `src/components/SectionWrapper.tsx` | Scroll-triggered fade-in + `SectionHeading` / `SectionSubheading` helpers |
| `src/components/icons.tsx` | Inline SVG brand icons |
| `src/components/Navbar.tsx` | Sticky nav, mobile menu, dark toggle, resume link |
| `src/components/Hero.tsx` | Full-screen landing section |
| `src/components/About.tsx` | Photo, bio, stats row, certification badges |
| `src/components/Skills.tsx` | Color-coded skill category cards |
| `src/components/Projects.tsx` | Card grid with show-all toggle |
| `src/components/Experience.tsx` | Alternating timeline |
| `src/components/Interests.tsx` | Icon grid + quote |
| `src/components/Contact.tsx` | Formspree form + social links |
| `src/components/Footer.tsx` | Copyright + social icons |

## Contact Form

Uses Formspree. The endpoint URL is set as `FORMSPREE_URL` in `src/components/Contact.tsx`. To change the destination, replace that value with a new Formspree form endpoint.
