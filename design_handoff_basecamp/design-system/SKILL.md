---
name: elevate-execution-design
description: Use this skill to generate well-branded interfaces and assets for Elevate Execution, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Elevate Execution — design skill

Elevate Execution is an **operating consultancy** based in Calgary. We embed with leadership teams for ~12 weeks and ship the work the strategy deck has been promising. We are not a product. We are not coaches. The brand draws on the Rocky Mountains west of Calgary — Summit Purple, Pine Green, Alpenglow Gold, Granite neutrals, on a Snow off-white page.

## How to use this skill

1. **Read `README.md` first** — it contains the brand voice, content rules, visual foundations, iconography approach, and the file index.
2. **Then explore:**
   - `colors_and_type.css` — every design token (colors, type, spacing, radii, shadows, motion).
   - `assets/` — logos (`logo.svg`, `logo-mark.svg`, `logo-mark-outline.svg`), `ridgeline.svg`, `ridgeline-stacked.svg`, `topo-motif.svg`, `ascend-descend.svg` (strategy-descends / execution-ascends hero motif).
   - `ui_kits/marketing/` — marketing site components + working `index.html`.
   - `ui_kits/case_study/` — case-study page components + working `index.html`.
   - `preview/` — small specimen cards illustrating each token cluster.

## When to copy vs. link

- **Visual artifacts (slides, mocks, throwaway prototypes):** copy the assets you need into the new project and link to a local copy of `colors_and_type.css`. Static HTML files only — no build steps.
- **Production code:** read the tokens and rules, replicate them in the host codebase's idiom (Tailwind config, design-tokens.json, CSS vars, whatever). Copy SVG assets and font references.

## Non-negotiables

- **Never use pure `#FFFFFF`.** The page background is Snow (`var(--snow)` = `oklch(98.5% 0.004 95)`).
- **Sentence case** everywhere except the wordmark and proper nouns.
- **No emoji** in client-facing surfaces. Lucide icons only.
- **The alpenglow gradient** (`var(--gradient-alpenglow)`) appears once per page maximum. Reserved for a single hero KPI band or accent moment.
- **Bricolage Grotesque** is for display + headings. **Geist** is for body + UI. **JetBrains Mono** is for numbers, code, kbd. Nothing else.
- **Voice = calm chief of staff, slightly direct.** Calm verbs (ship, close, install, hand off, kill). Never *crush*, *10x*, *unleash*, *empower*. Polite enough to keep working with you, direct enough that you know what we think.
- **We do not advise, deck, or workshop.** Anywhere this is implied in copy, name what we *do* instead: *embed, install, run, hand off.*

## Default invocation

If the user invokes this skill without context, ask:
- What surface are they designing? (marketing page, app screen, slide, asset?)
- Production code, or throwaway prototype/mock?
- Are there real assets to align to, or should you generate speculatively?

Then act as an expert designer for the brand and produce either a static HTML artifact or production code, per the brief above.
