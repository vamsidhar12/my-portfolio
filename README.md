# Vamsidhar Reddy Poothi — Personal Portfolio

A responsive, interactive personal portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Shipped using [Claude Code](https://claude.ai/code).

🌐 **Live:** https://vamsidharreddy.vercel.app

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Language | TypeScript |
| Icons | Lucide React + inline SVGs |
| Images | Next.js `<Image>` (Credly CDN) |
| Contact form | Formspree |
| Deployment | Vercel |

---

## Sections

- **Hero** — Name, title, tagline, CTA buttons, social links, animated scroll indicator
- **About** — Profile photo, bio, production stats row, cloud certification badges
- **Skills** — Languages · Cloud & Infra · DevOps & Security · Databases
- **Projects** — Featured card grid with tech tags, GitHub and live demo links
- **Experience** — Alternating timeline: Microsoft → Paycom → TCS
- **Interests** — Icon grid with a fun quote
- **Contact** — Formspree-wired message form + social link cards

---

## File Structure

```
my-portfolio/
├── public/
│   └── image.jpeg              # Profile photo
│
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css         # Tailwind v4 import, dark mode variant, scrollbar styles
│   │   ├── layout.tsx          # Root layout — meta tags, anti-FOUC dark mode script
│   │   └── page.tsx            # Composes all sections
│   │
│   ├── components/
│   │   ├── About.tsx           # Photo, bio, stats row, certification badges
│   │   ├── Contact.tsx         # Formspree form + social link cards
│   │   ├── Experience.tsx      # Alternating timeline
│   │   ├── Footer.tsx          # Copyright + social icons
│   │   ├── Hero.tsx            # Full-screen landing with animations
│   │   ├── icons.tsx           # Inline SVG brand icons (GitHub, LinkedIn, LeetCode, X)
│   │   ├── Interests.tsx       # Icon grid + quote
│   │   ├── Navbar.tsx          # Sticky nav, mobile hamburger, dark mode toggle
│   │   ├── Projects.tsx        # Card grid with show-all toggle
│   │   ├── SectionWrapper.tsx  # Scroll-triggered fade-in wrapper + heading helpers
│   │   └── Skills.tsx          # Color-coded category cards with badge pills
│   │
│   ├── data/
│   │   └── portfolio.ts        # All content (personal info, skills, projects, experience)
│   │
│   └── hooks/
│       └── useDarkMode.ts      # Dark mode toggle with localStorage persistence
│
├── next.config.ts              # Allows images from images.credly.com
├── package.json
└── tsconfig.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
```

---

## Personalisation

All content lives in one file — **`src/data/portfolio.ts`**:

| Export | What it controls |
|---|---|
| `personal` | Name, title, tagline, bio, location, social links, resume URL |
| `stats` | Four production metric cards in the About section |
| `skills` | Categorised tech stack (Languages / Cloud & Infra / DevOps & Security / Databases) |
| `certifications` | Badge images, Credly/Microsoft credential links, in-progress status |
| `projects` | Title, description, tech tags, GitHub and live URLs |
| `experience` | Company, role, date range, bullet points |
| `interests` | Lucide icon name + label |

### Adding a profile photo
Drop your image at `public/image.jpeg`. The `About` component renders it automatically.

### Wiring up the contact form
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy the endpoint URL
3. In `src/components/Contact.tsx` replace the `FORMSPREE_URL` value with your endpoint

### Updating your resume
Host your PDF anywhere (GitHub raw, Google Drive, etc.) and update `resumeUrl` in `src/data/portfolio.ts`.

---

## Deployment

Hosted on **Vercel** at https://vamsidharreddy.vercel.app.

### First-time setup
```bash
# Install Vercel CLI
brew install vercel-cli        # macOS
# or: npm i -g vercel

# Link project to Vercel
vercel link

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Subsequent deploys
Every push to `main` on GitHub triggers an automatic production redeploy via the Vercel Git integration.

### Environment / config
| File | Purpose |
|---|---|
| `src/app/layout.tsx` | `BASE_URL` — update if the domain changes |
| `public/robots.txt` | Sitemap URL — update to match the live domain |
| `src/components/Contact.tsx` | `FORMSPREE_URL` — Formspree form endpoint |

---

## Dark Mode

Dark mode is class-based (`dark` on `<html>`). An inline script in `layout.tsx` reads `localStorage` before React hydrates, preventing any flash of the wrong theme. The user's preference is persisted across sessions.

---

## License

MIT
