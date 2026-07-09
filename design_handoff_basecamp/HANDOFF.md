# Handoff: Elevate Execution — Basecamp (CoS onboarding)

> A design system and a prototype, packaged for implementation in a real codebase.

## What's in this bundle

```
design_handoff_basecamp/
├── HANDOFF.md                  ← you are here
├── design-system/              ← the brand & token system (apply to everything)
│   ├── BRAND.md                — voice, content rules, visual foundations
│   ├── SKILL.md                — quick-reference cheat sheet
│   ├── tokens.css              — all design tokens (OKLCH colors, type, spacing, radii, shadows, motion)
│   └── assets/                 — logos, ridgeline motifs
└── prototype/                  ← what to build
    ├── basecamp.html           — the canvas: 3 onboarding variants side-by-side
    ├── basecamp.css            — all variant + dark/density/sidebar styles
    ├── basecamp-data.jsx       — seed data (operators, summits, steps, rituals, interview script)
    ├── HandoffBasecampShell.jsx       — sidebar + topbar (progressive-unlock onboarding shell)
    ├── HandoffBasecampTrailMap.jsx    — Variant A
    ├── HandoffBasecampCadenceBuilder.jsx — Variant B
    ├── HandoffBasecampWeekGrid.jsx    — Variant C
    ├── app-shell.css           — the app's persistent sidebar/topbar styles
    └── reference/              — context only: where Basecamp hands off to
        ├── HandoffMorningView.jsx     — the post-onboarding dashboard the CoS lands on
        ├── morning-view.css
        ├── HandoffSidebar.jsx · HandoffTopBar.jsx · HandoffCommandPalette.jsx
        └── SIGNALS.md          — signal model behind the morning view
```

---

## About the design files

The files in `prototype/` are **design references created as static HTML/JSX**, not production code to copy verbatim. They use inline Babel + React via CDN — convenient for a clickable preview, not a shipping stack.

**Your job:** recreate these designs in the target codebase using its existing framework, conventions, and component library. Pull tokens from `design-system/tokens.css`, copy the SVGs from `design-system/assets/`, and lift the layout/typography/copy verbatim from the prototype. Re-architect the React components to match the target codebase's patterns (TypeScript, styled-components/Tailwind/CSS modules, state management, etc.) — the JSX structure is a guide, not a contract.

**If the project has no codebase yet:** React + TypeScript + Vite is a reasonable default. Use CSS variables (the `tokens.css` file works as-is) and write component CSS in whatever fashion suits the project — Tailwind, CSS modules, or styled-components. The tokens file is plain CSS custom properties and is framework-agnostic.

---

## Fidelity

**High-fidelity.** Final colors, typography, spacing, radii, shadows, and copy are all decided. Recreate pixel-perfectly. The one exception is the **Tweaks panel** in the prototype — that's a designer affordance for toggling between variants and states; it should not ship.

---

## The product

**Elevate Execution** is positioned as a SaaS product for chiefs of staff at 100–800-person companies. The CoS sits next to the CEO, runs the operating cadence, prepares the leadership team for decisions, and writes the Monday read-ahead. They have too many tabs.

**Basecamp** is the first-run onboarding. It installs an operating cadence on day one. When complete, it hands off to the **Morning View** (in `prototype/reference/`) — a push-driven dashboard that surfaces only the things the CoS needs to intervene on.

**Voice (read `design-system/BRAND.md` in full):**
- Calm chief of staff. Direct verbs (*ship, embed, install, hand off, kill*). Never *crush, unleash, supercharge, empower*.
- Sentence case everywhere. No emoji. No exclamation marks.
- Numbers stay numbers ("3 owners", not "three").
- Specific time and money ("12 weeks", "$240k", not "a few months").
- Mountain metaphor used sparingly: **Summit** = top-level OKR. **Basecamp** = onboarding. **Approach** = a plan.

---

## The three variants

The prototype shows **3 design directions** for Basecamp on a single canvas. **Pick one** to ship; the others are exploration. My recommendation: ship **Variant C (Week grid)** — it expresses "we install the cadence" most directly, and the calendar metaphor is the densest, most novel surface.

### Variant A — Trail map
3-column expedition planner: vertical step list on the left, active step's form in the middle, a ridgeline visualization on the right that fills in with progress markers as the CoS advances. Most conventional. Primary verb per step ("Embed 4 operators", "Install Mondays").

### Variant B — Cadence builder
Interview-driven. The CoS answers one operator-style question at a time. Locked answers stack on the left as a decision log. The operating week assembles live as a mini calendar on the right. Primary action: **Lock answer**. Feels like Linear's onboarding more than Notion's.

### Variant C — Week grid *(recommended)*
A literal Mon–Fri 8a–6p calendar IS the canvas. Drag rituals from a left-rail library onto the grid. Owners panel on the right. Sticky bottom bar: **Lock the cadence**. Most operator-cockpit-dense.

---

## Shell (shared across all variants)

### Layout

```
┌──────────────────────────────────────────────────────────────────┐
│  Sidebar (248px)  │  Top bar (56px)                              │
│                   ├──────────────────────────────────────────────┤
│                   │                                              │
│                   │  Variant content (fills remainder)           │
│                   │                                              │
└───────────────────┴──────────────────────────────────────────────┘
```

- Page background: `var(--snow)` (off-white, never `#FFFFFF`)
- Sidebar background: `var(--granite-50)`
- Sidebar right border: `1px solid var(--granite-200)`
- Top bar bottom border: same

### Sidebar (`HandoffBasecampShell.jsx`)

A persistent left nav with **progressive unlock**. Sidebar items map to the future Morning View IA but are locked until the corresponding Basecamp step completes:

| Item | Icon (Lucide) | Locked until |
|---|---|---|
| Basecamp | `tent` | (always available, active in onboarding) |
| Morning view | `layout-dashboard` | After handoff |
| Initiatives | `target` | After step 1 (Summits) |
| Operators | `users` | After step 2 (Operators) |
| Cadence | `calendar` | After step 3 (Cadence) |
| Decisions | `check-square` | After step 4 (Signals) |

Locked items show a small lock icon (`lock`, 12px, `--granite-400`) at `opacity: 0.4`, `pointer-events: none`.

Below the nav: a **Summits section** (purple/pine/gold dots + counts) and a **Basecamp progress card** showing `{pct}%` and a track filled with `--summit-500`.

Brand block at the top: `logo-mark.svg` (32×32) + org name "Stoney Trail Co." (Bricolage Grotesque 14px, 600) + "Chief of staff · 6 execs" subtitle (Geist 11px, `--granite-500`).

### Top bar (`HandoffBasecampShell.jsx`)

`Stoney Trail Co. › Basecamp · {Variant name}` breadcrumb on the left. On the right: a mono-style step counter (`2 of 5 steps remaining`), a notifications bell with a small alpenglow dot (only past step 2), an **Invite operator** ghost button, the primary verb button (**Save & continue** during, **Go to morning view** at handoff), and the user avatar.

---

## Variant detail

### Variant A — Trail map (`HandoffBasecampTrailMap.jsx`)

**Grid:** `320px 1fr 320px`, gap `var(--bc-gap)` (16px cozy / 10 compact / 24 spacious), padded `var(--bc-pad-y) var(--bc-pad-x)`.

**Left column — step list.** Five steps in a vertical list. Each step is a 3-column subgrid: `28px 1fr auto` (index badge · title+sub · time).
- Index badge: 28×28, `--radius-md`, background `--granite-100`, border `--granite-200`.
- Active step: white card with `--elev-1`, active index badge becomes `--summit-500` w/ white text.
- Done step: index badge becomes `--pine-500` with a `check` icon, row at `opacity: 0.7`.
- Title: Geist 14px / 500. Sub: Geist 12px / `--granite-500`. Time: JetBrains Mono 10.5px / `--granite-500`.

**Center column — active step's form.** A 14px-radius card with `--elev-1` and `--granite-200` border.
- Head: pane eyebrow (mono 10.5px / `--summit-600` / uppercase / 0.08em tracking), title (Bricolage Grotesque 26px / 500), sub (Geist 13.5px / `--granite-600`), and a small **`Embed this step`** pill on the right using `bc-state-tag`.
- Body: when on step 2 (Operators), renders two operator groups — *Embedded in the cadence* (4 rows) and *Adjacent — gets the read-ahead, not the standup* (4 rows, opacity 0.72). Each row is a 4-column grid: `36px 1fr 160px 120px` (avatar · name+role · cadence select · initiatives count).
- Foot: `var(--granite-50)` background, with `⌘↵ to embed and advance` hint on the left and **Skip for now** + **Embed 4 operators →** buttons on the right.

**Right column — ridgeline visualization (the distinctive piece).** A 14px-radius card with three layered ridgelines drawn as inline SVG (paths in the file). Five markers absolute-positioned at percent coordinates, one per step. The active step pulses with an alpenglow halo (`@keyframes bc-pulse`, 2.4s, infinite). Done markers turn `--pine-500`. Below the ridge: pinned summits list (dot + name + count). Foot lines: `Engagement starts: Mon · May 18` / `We hand off: 12 weeks · Aug 10`.

### Variant B — Cadence builder (`HandoffBasecampCadenceBuilder.jsx`)

**Grid:** `300px 1fr 320px`.

**Left — locked decisions log.** Each locked answer is a 10px-radius white card with a pine-colored topic eyebrow + check icon, the original question (small grey), and the answer (Geist 13.5px / 500 / `--fg-1`). Pencil icon (`pencil`, hover-only) for edit. Empty state: a dashed-border granite-50 card explaining the pattern.

**Center — current question.** A larger card with three sections:
- **Meta strip** — "Question 5 of 9" eyebrow + Skip for now action.
- **Body** — eyebrow "Cadence design" (small mono purple), big question (Bricolage Grotesque 30px / 500, OPSZ 60), help text (Geist 14px / `--fg-2`), then an **answer block** (granite-50 bg, 12px radius, 16/18 padding) containing a textarea (Geist 16px) and a row of chips ("Picked up from this week") for quick-fill.
- **Foot** — `⌘↵ to lock · ↓ to defer` kbd hints + **Park this question** ghost + **Lock answer →** primary.

When state = handoff, the center pane swaps to a completion screen: "The cadence is yours from Monday." + three pine state tags ("7 rituals installed", "4 operators embedded", "3 summits locked") + an "Open morning view" CTA.

**Right — operating week emerging.** A 14px-radius card with:
- Mini-calendar grid (Mon–Fri, 5 columns, 220px tall, dashed-border granite columns). Events are positioned absolutely as small ritual chips (`.vb-mini-ritual`), color-coded summit/pine/gold.
- A "Rituals" mono eyebrow + checklist below (one row per planned ritual, `check` if on, `circle` if pending).

### Variant C — Week grid (`HandoffBasecampWeekGrid.jsx`) — *recommended*

**Grid:** `260px 1fr 280px`, two rows: `1fr auto` (the second row is the lock-the-cadence bar that spans all 3 columns).

**Left — ritual library.** A library of draggable ritual cards (`.vc-ritual`). Each card: a 4px-wide color bar on the left (summit/pine/gold), a mono "⋮⋮" grip indicator, the name (Geist 12.5px / 500), and meta line (`Mon 8:00 · 30m`). Placed rituals fade to `opacity: 0.45` and show a green check.

**Center — the calendar.** A real Mon–Fri 8a–6p grid (10 hours × 5 days). The header strip shows day names + dates ("Mon · May 18"). The body has an hours rail (56px wide) and 5 day columns with a repeating gridline pattern (`repeating-linear-gradient`, 36px row height = `--vc-grid-hour-h`). Events (`.vc-event`):
- Position: `top = (start_h - 8) * 36px`, `height = (end_h - start_h) * 36px`.
- Inside each event: name (12px / 500), time + owner (mono 10px / 0.75 opacity).
- Ghost events (planned but not placed) use a dashed alpenglow border + animated background pulse (`@keyframes bc-ghost`).

**Right — owners.** Persistent leadership-team list. Each owner row: avatar (28×28) + name + role + mono ritual count ("2 rituals" with the digit bumped to `--summit-700`). Followed by a dashed-border tip card: *"Tip · drop a ritual onto an avatar to assign without dragging through the grid."*

**Bottom — Lock the cadence bar.** Spans all 3 columns. `--granite-950` background, `--snow` text. Three stats on the left (Rituals · Operators · Coverage), each: mono label (10px, uppercase, 0.08em) + display value (Bricolage Grotesque 22px / 500). 1px dividers between stats. On the right: a small mono line and the **Lock the cadence →** primary action — an **alpenglow-400** rounded button with granite-950 text (this is the one moment the alpenglow gradient is allowed per page).

---

## Tweaks (designer affordance — do not ship)

The Tweaks panel (`tweaks-panel.jsx`) is a designer tool for cycling through:
- **State**: empty / mid / handoff — the engagement phase
- **View**: operator (full CoS view) / client (read-only stripped view)
- **Theme**: light / dark
- **Sidebar**: expanded (248px) / icon-only (64px) / hidden (0px)
- **Density**: compact / cozy / spacious

The implementation logic for each of these is in `basecamp.css` under `.bc-artboard[data-...]` selectors — useful to read because it documents how density/sidebar/theme variants are derived from token rebinding.

Production should ship one configuration: **operator view, light + dark, expanded sidebar, cozy density.** Empty/mid/handoff are real engagement states the app must support — they should be driven by real data, not a tweak. Client view is a future surface; do not ship unless scoped.

---

## State

The prototype is mostly stateless. For implementation:

**Setup state (server-owned):**
- `summits[]` — top-level OKRs (max 3): `{id, name, color, pct, count}`
- `operators[]` — leadership team members: `{id, name, role, initials, color, cadence, owns}`
  - `cadence` is a free-text descriptor today ("Daily", "Mon · Thu", "Weekly"); a real model will need a structured cadence type.
- `rituals[]` — installed standing meetings: `{id, name, day(0-4), start, end, owner, color, recurrence}`
- `interviewAnswers[]` (Variant B only) — `{id, topic, question, answer, locked: boolean}`

**Onboarding progress:**
- `currentStep` (1–5): summits → operators → cadence → signals → readahead
- `completedSteps[]`
- `state`: `"empty" | "mid" | "handoff"` — derived from `completedSteps.length` (0 → empty, 1–4 → mid, 5 → handoff).

**Local interaction state:**
- Draft text inputs (`vb__answer` textarea)
- Selected chip in interview view
- Drag source/target in week grid (the real DnD impl, not faked)

---

## Interactions & motion

All motion uses the **Summit easing curve** + three durations from `tokens.css`:

```css
--ease-summit: cubic-bezier(0.2, 0.8, 0.2, 1);
--dur-micro:  120ms;   /* color/opacity */
--dur-base:   200ms;   /* default UI */
--dur-large:  320ms;   /* modals, page transitions */
```

**Rules:**
- Hover state: background steps to the next neutral (e.g. `--granite-50 → --granite-100`). Solid-color buttons darken by ~6% L in OKLCH. **Never opacity-only hover.**
- Press: `transform: scale(0.98)` over 80ms. Color does not change on press.
- Fades only. **No bounces. No spring animations.**
- Two custom animations in `basecamp.css`:
  - `@keyframes bc-pulse` — the alpenglow halo on the active ridgeline marker (Variant A), 2.4s infinite.
  - `@keyframes bc-ghost` — the dashed-border pulse on un-placed events (Variant C), 1.6s infinite.

**Drag-and-drop (Variant C, real implementation):**
- Ritual library → day column drops the event at the gridline-snapped time corresponding to the cursor's y-offset in the column.
- Drag preview: 8px-radius card with `--elev-2` shadow, follows the cursor.
- Drop indicator: a dashed alpenglow outline + the `bc-ghost` pulse at the snap-target position.
- Ritual → owner avatar (in the right rail) reassigns ownership without changing position.
- Press-and-drag (200ms hold) on a placed event to move it. Resize via top/bottom edge handles (8px hit zone).

---

## Design tokens — full reference

Use `design-system/tokens.css` directly. Highlights:

**Colors** (full 50–950 scales for each):
- `--summit-*` — brand purple (twilight on a peak). Core: `--summit-500 = oklch(54% 0.170 295)`.
- `--pine-*` — second anchor (evergreen forest). Core: `--pine-500 = oklch(52% 0.115 160)`.
- `--alpenglow-*` — accent gold (warm, never lemon-bright). Core: `--alpenglow-400 = oklch(78% 0.130 75)`.
- `--granite-*` — warm-neutral greys with a violet undertone.
- `--snow` — `oklch(98.5% 0.004 95)`. **Never use pure `#FFFFFF` for surfaces.** The brand sits on Snow.

**Semantic tokens** (consume these in components, not the raw scales):
`--bg-page`, `--bg-surface`, `--bg-subtle`, `--bg-muted`, `--bg-inverse`, `--fg-1` (primary), `--fg-2` (secondary), `--fg-3` (tertiary), `--brand`, `--accent`, `--highlight`, `--border-default`, `--border-strong`, `--border-focus`, `--success`, `--warning`, `--danger`, `--info`, plus matching `*-bg` variants.

**Type:**
- `--font-display` — Bricolage Grotesque (variable, OPSZ + weight). Display + headings.
- `--font-sans` — Geist (300–700). Body + UI.
- `--font-mono` — JetBrains Mono (400–600). Numbers, IDs, kbd, code, timestamps.
- Scale: 12 / 14 / 16 / 18 / 20 / 24 / 30 / 38 / 48 / 60 / 76 / 96 px.
- Tracking: tight `-0.02em`, snug `-0.01em`, normal `0`, wide `0.04em`, caps `0.08em`.
- Load via Google Fonts: `Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Geist:wght@300..700&family=JetBrains+Mono:wght@400..600`.

**Spacing** (4px base): 0 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128.

**Radii:** `--radius-sm: 6px`, `--radius-md: 10px`, `--radius-lg: 14px`, `--radius-xl: 22px`, `--radius-2xl: 32px`, `--radius-full: 999px`.
- Inputs/chips: `sm`. Buttons: `md`. Cards/modals: `lg`. Hero cards: `xl`. Pills/avatars: `full`.

**Elevation** (purple-tinted shadows, three steps): `--elev-1` (cards at rest), `--elev-2` (menus, hover), `--elev-3` (modals). `--ring-focus` for focused inputs.

---

## Iconography

**[Lucide](https://lucide.dev)** for all UI icons. Stroke-based, **1.5px stroke weight** (Lucide default, never bolder than 2px). Sizes:
- 16px inline with body text
- 20px inside buttons
- 24px nav default
- 32px feature blocks
- 48+px illustration only

`color: currentColor`. Never multi-color. **No emoji** in product UI. **No Unicode symbol icons** (×, →, ✓) — always use Lucide equivalents (`x`, `arrow-right`, `check`).

Brand glyphs (in `design-system/assets/`):
- `logo.svg` — full wordmark
- `logo-mark.svg` — the three-peaks brand mark (use at 32×32 in the sidebar)
- `ridgeline.svg` / `ridgeline-stacked.svg` — decorative horizon for hero/footer/empty states. Use at 6–14% opacity over Snow, full color over Granite.
- `ascend-descend.svg` — the strategy-descends / execution-ascends motif (Summit-purple and Pine-green lines crossing). One per page, hero accent beneath the headline.
- `topo-motif.svg` — topographic-map texture

---

## Dark mode

The prototype implements dark mode via **token rebinding under `[data-theme="dark"]`** rather than a separate stylesheet — see the top of `basecamp.css`. The granite scale flips (50 ↔ 900), `--snow` becomes near-black with a violet undertone, and `--summit-*` brightens by ~20% L. Brand chroma stays consistent.

Reuse this approach: do not write parallel dark styles per component. Re-alias the semantic tokens once at the root and let everything inherit.

---

## Layout rules (from BRAND.md)

- **App shell:** persistent left sidebar 248px (collapsed 64px), header 56px, content fills the rest.
- **Cards:** 14px radius, 24px padding default (32px hero), 1px `--granite-200` border, `--elev-1` at rest, `--elev-2` on hover for clickable cards. **No translucent cards stacked over photography.**
- **Frosted navbar:** `background: oklch(98% 0.005 95 / 0.72)` + `backdrop-filter: blur(14px)`.
- **Modal scrims:** `--granite-950` at 40% opacity, no blur.
- **The brand color is never the dominant surface** — it appears as accent, focus ring, primary button, brand bar. Most of the screen is Snow or `--granite-50`.

---

## Don't

- Don't use `#FFFFFF` for page backgrounds. Use `var(--snow)`.
- Don't use the alpenglow gradient more than once per page.
- Don't use emoji in product copy.
- Don't introduce new fonts. Bricolage / Geist / JetBrains Mono only.
- Don't recreate the design canvas / `design-canvas.jsx` / Tweaks panel in production. They are designer tools.
- Don't add filler — extra dashboard widgets, decorative icons, mascots, motivational copy. The system's voice is *direct* and *restrained*.

---

## Open questions (worth resolving before shipping)

1. **Unit naming.** The existing app kit asks whether the unit of work is "initiative", "workstream", or "OKR". Basecamp uses **summit / approach / ritual / decision**. The Morning View uses **initiative**. Pick one vocabulary and align both surfaces.
2. **Handoff state.** The prototype shows Basecamp wrapping into the Morning View via a topbar tag + CTA. Decide whether `handoff` is a transient state (a single confirmation screen) or persistent (a Basecamp page you can return to).
3. **Client view.** I included a stripped sidebar variant for the `view=client` tweak, but a real client onboarding probably needs its own flow. Out of scope unless explicitly requested.
4. **Drag-and-drop on touch.** Variant C's interaction needs a touch-friendly alternative for tablets/iPads. A "tap to add → time picker" fallback works.
5. **Real cadence model.** "Daily / Mon · Thu / Weekly" is free-text in the prototype. Production needs a structured recurrence type (rrule, day-of-week, time-of-day, time-zone).

---

## Recommended implementation order

1. **Set up tokens** — drop `tokens.css` in and verify all CSS custom properties resolve. Wire dark mode via `[data-theme="dark"]` re-aliasing (copy from `basecamp.css`).
2. **Build the shell** — sidebar (`HandoffBasecampShell.jsx` → `Sidebar.tsx`), topbar, with progressive-unlock logic driven by `completedSteps`.
3. **Pick the variant** — recommend Variant C (Week grid). Build the calendar grid + ritual library + owners list + Lock-the-cadence bar.
4. **Wire state** — onboarding progress, real ritual storage, drag-and-drop.
5. **Hand off to Morning View** — when step 5 completes, transition to `/morning` and unlock all sidebar items.
6. **Dark mode QA** — every component should render correctly under `[data-theme="dark"]` without extra rules.
