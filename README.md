# Elevate Execution — Design System

> **Elevate Execution** is an operating consultancy. We embed with leadership teams for a fixed window — typically 12 weeks — and ship the work the strategy deck has been promising. We do not advise, deck, or workshop. We run the operating cadence alongside the client until the client can run it themselves.

The brand draws from the Canadian Rockies west of Calgary — the Three Sisters, Lake Louise, Mount Rundle, Banff — where altitude, granite, evergreen, and alpenglow meet. The design language is calm, confident, and slightly direct; it earns the word "elevate" without resorting to motivational-poster clichés.

## Sources & references

There were **no attached assets, codebases, or Figma files** for this project. The system was built from the brief:

> *"A simple design language with callbacks to the Rocky Mountains near Calgary, Alberta. Icons, open-source fonts, a complementary color scheme that includes hues of purple and green. If possible, include yellow but not if it looks cartoonish."*

If a brand bible, logo, or product surfaces exist elsewhere, drop them into the project and ask for a pass to align this system to them.

---

## Brand at a glance

| | |
|---|---|
| **Name** | Elevate Execution |
| **What we are** | An operating consultancy. Not a product. Not coaches. |
| **Tagline** | *Strategy descends. Execution ascends.* |
| **One-liner** | We embed with leadership teams and ship the work the strategy deck has been promising. |
| **Personality** | Grounded · direct · quietly ambitious |
| **Visual motif** | Layered mountain ridgelines · alpine palette · summit geometry |
| **Avoid** | Cartoon mascots, hustle clichés, neon gradients, motivational typography, soft hedging |

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This document — brand, content, visual, and iconography fundamentals |
| `SKILL.md` | Cross-compatible skill file for Claude Code / Claude Skills |
| `colors_and_type.css` | All design tokens — colors, type scales, spacing, radii, shadows |
| `assets/` | Logo, wordmark, mountain marks, icons, illustration motifs |
| `fonts/` | (External — loaded via Google Fonts; see Typography section) |
| `preview/` | Cards rendered in the Design System tab |
| `ui_kits/marketing/` | Marketing site — hero, services, outcomes, CTA, footer |
| `ui_kits/case_study/` | Case study page — the workhorse second surface for a consultancy |
| `ui_kits/app/` | **Exploratory.** A speculative SaaS surface for chiefs of staff at scaling companies |

---

## Content fundamentals

**Voice: a chief of staff who has read the doc.** We sound like the calmest, most direct person in the room — the one who knows where the bottleneck is and says so. We don't yell, we don't sloganeer, we don't promise transformation. We promise that the thing on the list gets done, and we name what's stopping it.

We lean **slightly more direct than polite** — polite enough to keep working with you, direct enough that you know what we actually think.

### Tone rules

- **Direct verbs over hedged verbs.** *We will ship. We installed. We killed four initiatives.* Not *We aim to help facilitate the alignment around...*
- **Calm verbs over hyped verbs.** *Ship, close, advance, resolve, agree, confirm, install, name, kill.* Not *crush, dominate, unleash, supercharge, 10x.*
- **Plain English over jargon.** *Make a decision* > *align on the path forward*. *Who's doing it?* > *DRI alignment.*
- **We say what we won't do.** "We do not advise, deck, or workshop." The negative space is part of the voice.
- **First person plural is the firm.** *We embed. We install. We hand off.* The reader is *you* or named directly ("your team").
- **No emoji** in marketing or client-facing surfaces. Emoji is allowed only in casual internal Slack-style contexts.
- **Case.** Sentence case everywhere — buttons, nav items, headings, table columns. Title Case only for the wordmark and proper nouns.
- **No exclamation marks.** Period. The voice never needs them.
- **Numbers stay numbers.** "3 owners", not "three owners". Spelled out only at the start of a sentence.
- **Time and money should be specific.** "12 weeks", "$240k", "four hours per week" — not "a few months", "significant savings", "reduced time".

### Vocabulary

| Use | Avoid |
|---|---|
| Initiative, goal, owner, decision, blocker, milestone, outcome, engagement | Mission, journey, hero, rockstar, ninja, warrior, partner-up |
| Embed, install, run, hand off, ship, kill, name | Empower, enable, transform, unleash, accelerate |
| Operator (us), team (you), engagement (the work) | Consultant, advisor, coach, expert, thought partner |
| Summit (top-level goal) · Basecamp (kickoff) · Approach (a plan) | Mountains-of-work metaphors used loosely |
| "Get it done" · "We did this" | "Crush it", "Make it happen", "We empowered them to…" |

### Sample copy

**Hero headline (marketing)**
> Strategy descends. Execution ascends.

**Hero subhead**
> We embed with your leadership team for 12 weeks and ship the work your strategy deck has been promising.

**Services intro**
> Six things we do in every engagement. We do not advise, deck, or workshop.

**CTA copy**
> Tell us what's stuck. We'll tell you within a week whether we can help, what an engagement would look like, and what it would cost. No proposal pitch.

**Case-study opener** (slightly more direct than marketing — reads like an after-action report)
> A 60-person bioscience team had a Series B and a roadmap. They did not have a way to know which initiatives were real. We embedded for 14 weeks, installed an operating cadence, and shipped the year's plan two months ahead of schedule.

**Discovery-call confirmation email**
> Subject: 30 minutes, Thursday at 2pm — Foothills Labs <> Elevate Execution
> Eleanor, looking forward to Thursday. We'll come with three questions and one observation. Read the deck you sent. Talk soon. — Mira

### Mountain metaphor — used sparingly

The mountain language earns its place at a few specific moments: a top-level OKR is a **Summit**. Onboarding is **Basecamp**. A multi-step plan is an **Approach**. We do **not** name every feature after geography. The metaphor should feel found, not forced.

---

## Visual foundations

### Palette

Two anchors and one accent. **Summit Purple** is the brand color — drawn from Rocky Mountain twilight, when the shadowed face of a peak turns deep violet. **Pine Green** is the second anchor — evergreen forest in the valleys below the treeline. **Alpenglow Gold** is the accent — that warm amber band that catches the high snow at sunrise. It is muted, almost terracotta-leaning, never lemon-bright.

Neutrals are warm-cool granite greys, never pure black. Backgrounds are off-white (`Snow`) — the brand never sits on `#FFFFFF`.

All color tokens, with full 50–950 scales, live in `colors_and_type.css`.

### Typography

| Role | Family | Source | Notes |
|---|---|---|---|
| Display / headings | **Space Grotesk** | Google Fonts (OFL) | Geometric grotesque. Hero titles and section heads; sharp counters read as summit geometry. |
| Body / UI | **Barlow Condensed** | Local files, OFL (`fonts/`) | Condensed humanist sans. Tall vertical rhythm; reliable at 14–18px. |
| Mono | **JetBrains Mono** | Google Fonts (OFL) | For metric values, IDs, code, keyboard hints. |

> **Type is locked.** Space Grotesk (display) + Barlow Condensed (body) + JetBrains Mono (mono) are the confirmed families and match the live-site tokens in `colors_and_type.css`. Earlier drafts substituted Bricolage Grotesque + Geist; those are superseded.

### Spacing & rhythm

A **4px base unit**. The full scale is 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128. Most layouts settle on multiples of 8 vertically and 4 horizontally.

### Backgrounds

- Default page background is **Snow** (warm off-white `oklch(98% 0.005 95)`). Never pure white.
- Dark surfaces use **Granite 950**, a near-black with a violet undertone.
- **Ridgeline motif** — a stylized SVG of layered mountain silhouettes (see `assets/ridgeline.svg`) — appears at the bottom of hero sections, footers, and empty states. It is one of the system's two sanctioned decorative motifs (the other is the **ascend/descend line**, `assets/ascend-descend.svg` — see Iconography → Brand glyphs). Use at 6–14% opacity over Snow, full color over Granite.
- No full-bleed photography by default. If photography appears, it is cool-toned, slightly desaturated alpine landscape — never people, never workplace stock.
- No gradients except: a single permitted **alpenglow gradient** (`Alpenglow 400 → Summit Purple 600`) used for one moment per page maximum — usually a hero KPI or a brand bar.

### Corner radii

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Inputs, chips, tags |
| `--radius-md` | 10px | Buttons, menu items |
| `--radius-lg` | 14px | Cards, modals |
| `--radius-xl` | 22px | Hero cards, illustration containers |
| `--radius-full` | 999px | Pills, avatars |

Cards lean slightly soft — 14px — not pill-rounded. Buttons are 10px.

### Borders

- Default border is `--border-1`: 1px solid `--granite-200` (`oklch(94% 0.005 270)`).
- Focused / active borders step up to `--summit-500`.
- We rarely use double borders. We never use dashed borders except for drop zones.

### Shadows

A two-tier elevation system. Shadows are colored — they carry a tiny amount of `Summit Purple` so elevation feels of-the-brand rather than generic grey.

| Token | Use |
|---|---|
| `--elev-1` | Subtle lift — cards at rest |
| `--elev-2` | Menus, popovers, hover state of cards |
| `--elev-3` | Modals, command palette |

No inner shadows by default. No glow effects.

### Animation

- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` ("Summit easing") — a calm out-curve. Stored as `--ease-summit`.
- **Durations:** 120ms (micro — color/opacity), 200ms (default — most UI), 320ms (large — modals, page transitions). No animation longer than 400ms in the product.
- **Hover state:** background steps to the next neutral (e.g. `Granite 50 → Granite 100`); never opacity-only. Solid-color buttons darken by ~6% L in OKLCH.
- **Press state:** scale to 0.98 with the same easing, 80ms. Color does not change on press.
- **Fades only, no bounces.** No spring animations in product UI. The marketing site can use a single gentle parallax on the ridgeline.

### Layout rules

- Marketing pages: 1200px content max, 24px gutters, single sticky top nav (transparent → frosted on scroll).
- App: persistent left sidebar (240px), header (56px), content fills remaining viewport.
- The brand color is never the dominant surface — it appears as accent, focus ring, primary button, brand bar. Most of the screen is Snow or Granite-50.

### Transparency & blur

- Frosted navbar: `background: oklch(98% 0.005 95 / 0.72)` + `backdrop-filter: blur(14px)`.
- Modal scrims: Granite 950 at 40%, no blur.
- We do not use translucent cards stacked over photography. Restraint.

### Cards

- Background: Snow, or Granite-50 on Snow page.
- Border: 1px `--granite-200`.
- Radius: 14px (`--radius-lg`).
- Shadow: `--elev-1` at rest. `--elev-2` on hover for clickable cards.
- Padding: 24px default, 32px for hero cards.

### Protection gradients

When text sits on imagery, use a vertical Granite-950 → transparent gradient at 0–60% opacity, not a flat overlay. Use the **alpenglow gradient** only as an accent bar or KPI background — never as a text protection layer.

---

## Iconography

**Primary set: [Lucide](https://lucide.dev)** — loaded from CDN (`unpkg.com/lucide@latest`). Stroke-based, 1.5px stroke weight, 24px nominal size, rounded line caps. Lucide's geometry (sharp where it needs to be, soft at the joints) matches Bricolage Grotesque's display feel.

> **⚠️ Substitution flag:** No icon system was provided. Lucide is the substitution. If the brand has its own glyphs, replace and re-flag.

### Rules

- **Stroke weight:** 1.5px (Lucide default). Never bolder than 2px.
- **Size scale:** 16px (inline with body text), 20px (buttons), 24px (nav, default), 32px (feature blocks), 48px+ (illustration only).
- **Color:** inherits from text (`currentColor`). Never multi-color icons in UI.
- **No emoji** in product UI (see Content). Allowed in chat-style human surfaces only.
- **No Unicode symbol icons** (×, →, ✓) — always Lucide equivalents (`x`, `arrow-right`, `check`).

### Brand glyphs

Beyond Lucide, the system carries a small set of bespoke marks:

- `assets/logo.svg` — full wordmark
- `assets/logo-mark.svg` — square brand mark (three peaks)
- `assets/ridgeline.svg` — decorative horizon, used in hero/footer
- `assets/ridgeline-stacked.svg` — taller layered variant for empty states
- `assets/ascend-descend.svg` — the "strategy descends / execution ascends" motif: a Summit-purple line descending and a Pine-green line ascending, crossing at center, a dot at each origin. Use once per page as a hero accent beneath the headline. Do not redraw — reference it.

All bespoke marks live in `assets/`. Do not redraw them; reference them.

---

## Caveats & open questions

- **Fonts are locked.** Space Grotesk (display) + Barlow Condensed (body) + JetBrains Mono (mono), matching the live site. Bricolage Grotesque + Geist were earlier substitutions, now superseded.
- **Icons are Lucide via CDN.** Confirm or swap for a brand set.
- **Yellow.** The brief said yellow if it didn't look cartoonish — I landed on a muted alpenglow gold (`oklch(78% 0.13 75)`). It reads warm and grounded, not lemon-bright. Open to dialing it warmer (more terracotta) or cooler (more amber) on request.
- **Sample case study is fictional.** *Foothills Labs* and its CEO Eleanor Wachter are placeholder names. The structure (situation → approach → outcomes → quote → related) is reusable; swap real client names and metrics in.
- **Service taxonomy is a guess.** The six services listed on the marketing page (diagnostic, decision cadence, embedded operators, blocker triage, outcome reviews, handoff) match the brand brief but should be confirmed against the real engagement playbook.
