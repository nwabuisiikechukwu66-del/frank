# frankoge.com — Portfolio Website

**Frank Kelechi Oge** · frankdotdev · Hackverse Software Solutions

A sharp, minimal, hackerish personal portfolio built with **Next.js 14**, **Tailwind CSS**, **JetBrains Mono**, and **Framer Motion** concepts. Light/dark mode, AI chatbot, full SEO, responsive across all devices.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS Variables |
| Fonts | JetBrains Mono + Space Grotesk |
| Icons | Phosphor Icons |
| Chatbot | Anthropic Claude API |
| Email | Resend (optional) |
| Deploy | Vercel (recommended) |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Then open `.env.local` and fill in your values:

```env
ANTHROPIC_API_KEY=your_anthropic_api_key_here
RESEND_API_KEY=your_resend_api_key_here        # optional, for contact form
NEXT_PUBLIC_SITE_URL=https://frankoge.com
```

### 3. Add your images

Place your photos in `public/images/`:

```
public/
  images/
    frank1.png   ← Used on About page hero
    frank2.png   ← Used on Home page hero + Philosophy
    frank3.png
    ...
    frank20.png  ← Gallery uses frank1.png → frank20.png
```

The gallery on the About page will auto-scroll these in two infinite rows.
If an image is missing it falls back to `frank1.png` or `frank2.png`.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, tech marquee, Stella AI feature, services, philosophy quote, CTA |
| `/about` | About — bio, journey timeline, tech stack, experience, education, image gallery |
| `/solutions` | Solutions — full services grid with features + stack per service |
| `/builds` | Builds — filterable project grid (featured + full list) |
| `/blog` | Blog — CMS-ready post listing (shows Medium fallback when empty) |
| `/philosophy` | Philosophy — Software as a Solution manifesto |
| `/contact` | Contact — form, availability status, all social links |

---

## CMS Integration (Blog)

The blog page at `src/components/BlogClient.tsx` is CMS-ready. To add posts:

```ts
// In src/components/BlogClient.tsx — replace the empty array:
const CMS_POSTS = [
  {
    slug: "your-post-slug",
    title: "Your Post Title",
    excerpt: "A short excerpt...",
    date: "2025-12-01",
    category: "AI/ML",
    readTime: "5 min read",
  },
  // Add more posts here, or connect to a headless CMS
];
```

For a headless CMS, fetch posts from your CMS in the `BlogPage` server component (`src/app/blog/page.tsx`) and pass them down as props.

---

## Chatbot

The floating AI assistant in the bottom-right corner is powered by Claude Haiku via `/api/chat`.

- Set `ANTHROPIC_API_KEY` in `.env.local`
- The chatbot has full context about Frank, his projects, skills, and philosophy
- To update the context, edit `FRANK_CONTEXT` in `src/app/api/chat/route.ts`
- To integrate an external chatbot widget instead, replace the `<ChatbotWidget />` import in `src/app/layout.tsx` with a `<script>` tag or iframe embed

---

## Contact Form Email

By default, form submissions are logged to the console. To enable real email delivery:

1. Sign up at [resend.com](https://resend.com) (free tier)
2. Add `RESEND_API_KEY` to `.env.local`
3. Uncomment the Resend block in `src/app/api/contact/route.ts`
4. Install Resend: `npm install resend`

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables on Vercel dashboard or:
vercel env add ANTHROPIC_API_KEY
vercel env add RESEND_API_KEY
```

---

## Customization Quick Reference

| What to change | Where |
|---|---|
| Name, bio, philosophy | `src/components/PhilosophyClient.tsx`, `AboutClient.tsx` |
| Projects list | `src/components/BuildsClient.tsx` → `PROJECTS` array |
| Services | `src/components/SolutionsClient.tsx` → `SERVICES` array |
| Social links | `src/components/Footer.tsx` + `ContactClient.tsx` |
| Chatbot context | `src/app/api/chat/route.ts` → `FRANK_CONTEXT` |
| Blog posts | `src/components/BlogClient.tsx` → `CMS_POSTS` array |
| SEO metadata | `src/app/layout.tsx` + each page's `metadata` export |
| Colors / theme | `src/app/globals.css` → CSS variables |
| Tech stack rows | `src/components/HomeClient.tsx` + `AboutClient.tsx` → `TECH_ROWS` |

---

## Structure

```
src/
  app/
    layout.tsx          ← Root layout, SEO metadata, fonts
    globals.css         ← Design system: CSS variables, animations, utilities
    page.tsx            ← Home
    about/page.tsx
    solutions/page.tsx
    builds/page.tsx
    blog/page.tsx
    philosophy/page.tsx
    contact/page.tsx
    not-found.tsx
    sitemap.ts          ← Auto-generated sitemap.xml
    robots.ts           ← robots.txt
    api/
      chat/route.ts     ← AI chatbot endpoint
      contact/route.ts  ← Contact form endpoint
  components/
    ThemeProvider.tsx   ← Dark/light mode context
    Navbar.tsx          ← Sticky nav with mobile menu
    Footer.tsx          ← Full footer with social links
    ChatbotWidget.tsx   ← Floating AI assistant
    Reveal.tsx          ← Scroll-triggered fade-in
    MarqueeRow.tsx      ← Infinite scrolling rows
    JsonLd.tsx          ← Structured data for SEO
    HomeClient.tsx      ← Home page (interactive)
    AboutClient.tsx     ← About page
    SolutionsClient.tsx ← Solutions page
    BuildsClient.tsx    ← Builds/projects page
    BlogClient.tsx      ← Blog page (CMS-ready)
    PhilosophyClient.tsx
    ContactClient.tsx
public/
  images/               ← Add frank1.png → frank20.png here
  site.webmanifest
  og-image.jpg          ← Add 1200×630 OG image
  favicon.ico
```

---

## License

Personal portfolio — Frank Kelechi Oge © 2026. All rights reserved.
