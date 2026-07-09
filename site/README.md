# Elevate Execution — Mike Heinrich

Static marketing site for Mike Heinrich's operating consultancy. No build step — plain HTML, CSS, and a little vanilla JS.

## Structure

```
site/
├── index.html          Marketing one-pager (3 hero directions via the Tweaks panel)
├── about.html          Bio, career timeline, principles, credentials
├── case-study.html     ATB Financial pandemic-delivery case study
├── site.css            Page styles (consumes the design tokens)
├── colors_and_type.css Design tokens — colors, type, spacing (snapshot of the design system)
├── site.js             Shared behaviour: sticky nav, icons, scroll reveal
├── assets/             Logo mark + ridgeline / topo SVG motifs
├── fonts/              Barlow Condensed (body) — self-hosted
└── _headers            Cloudflare Pages cache rules
```

Fonts and icons: Barlow Condensed is self-hosted in `fonts/`.
Space Grotesk (display), JetBrains Mono (mono), and Lucide icons load from Google Fonts / CDN (need internet at view time).

## Deploy to Cloudflare Pages (Git-connected — recommended)

1. Push this repo to GitHub (or GitLab).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Configure the build:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `site`
4. **Save and Deploy.** Every push to the production branch redeploys automatically.

> If you make this `site/` folder the repository root instead, set the output directory to `/` (or leave it blank).

## Deploy without Git (Wrangler CLI)

```bash
npm i -g wrangler
wrangler pages deploy site --project-name elevate-execution
```

## Local preview

Any static server works, e.g.:

```bash
npx serve site
```
