# Web app UI kit — Elevate Execution (exploratory)

> **Status: speculative.** This is an early visual exploration of a SaaS product that could support chiefs of staff at scaling companies (Series B+). The consultancy is the company today; this kit is a "what if we built a tool" sketch.

## Who it's for

A chief of staff at a 100–800 person company. They sit next to the CEO. They run the operating cadence, prep the leadership team for decisions, chase the work between teams, and write the read-ahead for every Monday. They have too many tabs.

## What this surface shows

A dashboard view of the CoS's week:

- **Sidebar** — workspace, jump-to-search, navigation between Overview / Initiatives / Decisions / Briefings / Owners / Calendar, and a "Summits" list (top-level goals)
- **Top bar** — breadcrumbs, notifications, filter, "New initiative" primary action, the CoS's avatar
- **KPI strip** — four cards showing the state of the operating cadence
- **Initiative table** — what's in flight, who owns it, status, due date, progress
- **Right rail** — open decisions needing the CEO + a feed of decisions just made
- **Command palette** — `⌘K` opens a fast-action palette (the CoS's primary input surface)

## Files

| File | What's in it |
|---|---|
| `index.html` | App shell + dashboard view |
| `Sidebar.jsx` | 248px persistent left nav |
| `TopBar.jsx` | 56px header |
| `KPICards.jsx` | 4-up KPI row |
| `InitiativeList.jsx` | Initiative table with status, owner, due, progress |
| `DecisionFeed.jsx` | Feed of recorded decisions |
| `RightRail.jsx` | Open decisions ("needs CEO") + DecisionFeed |
| `CommandPalette.jsx` | Cmd-K palette |
| `styles.css` | Local app styles, anchored to root tokens |

## Open questions for the product

- Is the unit "initiative" or "workstream" or "OKR"? CoSs use all three; pick one.
- Where does the CEO live in the model — as a person, a role, or *the* default audience?
- What's the briefing surface? Read-aheads are 60% of the job and aren't in this kit yet.
- Mobile? CoSs read on phones at 7am. Worth designing for.

