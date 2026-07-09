# Consuming the Elevate Execution Design System

This repository is the **single source of truth** for the Elevate Execution brand:
design tokens (`colors_and_type.css`), brand assets (`assets/`), fonts (`fonts/`),
and the written brand/voice rules (`README.md`, `BRAND.md`).

Consumers (the marketing website, the app, anything else) **reference this repo** —
they do not keep their own forked copies. That's how the brand stays consistent
across surfaces.

---

## Versioning

Every meaningful change is tagged with semver:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Consumers pin a specific tag and upgrade deliberately. A token change should never
reach a live surface by surprise — it reaches it when that surface bumps its pin.

- **Patch** (`v1.0.x`) — token value tweaks, asset fixes, doc edits.
- **Minor** (`v1.x.0`) — new tokens, new assets, additive changes.
- **Major** (`vx.0.0`) — renamed/removed tokens or anything that breaks a consumer.

---

## Attach to a consumer as a git submodule

From inside the consumer repo (e.g. the website):

```bash
git submodule add https://github.com/<you>/ee-design-system.git design-system
cd design-system && git checkout v1.0.0 && cd ..
git add . && git commit -m "Add design system v1.0.0 as submodule"
```

Then reference the shared files by their path inside the submodule. For a static
site, point the stylesheet link at the system's token file:

```html
<link rel="stylesheet" href="design-system/site/colors_and_type.css">
```

Fonts and assets resolve relative to that CSS file, so they come along automatically.
Reference brand marks the same way: `design-system/assets/ascend-descend.svg`.

**Cloning a consumer** that uses the submodule:

```bash
git clone --recurse-submodules <consumer-repo-url>
# or, if already cloned:
git submodule update --init --recursive
```

**Bumping to a new version** in a consumer:

```bash
cd design-system && git fetch && git checkout v1.1.0 && cd ..
git add design-system && git commit -m "Bump design system to v1.1.0"
```

---

## Attach to an app with a build step

An app with a bundler (Vite, Next, etc.) can either use the submodule approach
above, or install this repo directly as a git dependency — no npm registry needed:

```bash
npm install github:<you>/ee-design-system#v1.0.0
```

Import the token CSS once at the app root, and the CSS custom properties
(`--summit-500`, `--font-display`, `--radius-lg`, …) are available everywhere.
The React implementations in `ui_kits/app/` are reference components built on those
tokens — copy or adapt them per app; the tokens are the contract, the components are not.

---

## What lives where

| Path | Shared contract? |
|---|---|
| `colors_and_type.css` / `site/colors_and_type.css` | **Yes** — the token contract |
| `assets/` | **Yes** — brand marks and motifs |
| `fonts/` | **Yes** — licensed font files |
| `README.md` / `BRAND.md` | **Yes** — voice + visual rules |
| `ui_kits/` | Reference only — adapt per surface |
| `preview/` | Internal — token specimen cards |
