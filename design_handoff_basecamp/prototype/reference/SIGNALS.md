# Signal model — CoS morning view

This document explains what counts as a signal worth pinging the chief of staff for, and what "full" means.

## Premise

Every unit of work has a default state of *fine*. A unit only becomes a **signal** when it crosses a threshold. Otherwise the dashboard is just a project tracker repainted purple.

## Signal thresholds

| Unit | Default | Signal threshold |
|---|---|---|
| **Question** | Open questions are normal | Open ≥ 3 days **AND** blocks ≥ 1 shipped-by-date initiative |
| **Decision** | Decisions in flight are normal | Deferred ≥ 2× **OR** principals disagree in thread **OR** CEO owns and > 48h |
| **Person** | Quiet owners are normal | Past 2× their typical update cadence **AND** owns a non-paused initiative |
| **Date** | Date moves are normal | Moved ≥ 2× **OR** slip cascades downstream **OR** milestone passed unacknowledged |

## Card verbs

Each surfaced card carries exactly one verb. The verb signals the category of intervention required.

| Verb | Means |
|---|---|
| **DRAFT** | Write something — a brief, a note, a message |
| **DECIDE** | A call only the CoS or the principal can make |
| **ASK** | Ping a named person with a specific question |
| **APPROVE** | Sign off on something already complete |
| **KILL** | End something that should not still exist |

## What "full" means

A push-driven morning view has a hard ceiling on how loud it can be, otherwise it becomes another inbox.

| Card count | Label | Meta line |
|---|---|---|
| 0 | Empty | "Nothing needs you today. The cadence is running." |
| 1–3 | Healthy | "{n} things need you this morning." |
| 4–6 | Elevated | "{n} things need you. That's more than usual." |
| 7+ | Overloaded | "The cadence has slipped, or last week's decisions weren't actually decisions." (collapses past card 5) |

**The system never shows more than 5 expanded cards.** Card 6+ collapses into "+{n} more — block 30 minutes" with the overloaded meta line.

## Cooldown

A card vanishes from the morning view after either:
1. The CoS takes action on it (**Do** / **Defer to tomorrow** / **Hand off**)
2. It escalates further (new dependency, new slip, more overdue) — this brings it back

Without cooldown, the same item nags every morning and the view loses trust.

## Open questions

- **Defer to tomorrow** vs **Defer to Friday** — should the CoS be allowed to push something a full week, or only one day at a time? Long defers hide problems; tight defers may be annoying.
- **What if there's an over-50-day stuck item?** Eventually overdue items must escalate to a different surface (a weekly review, not the morning view). TBD where.
- **Who can override the cooldown?** Probably the CEO — if the CEO replies with "I'm waiting on this", it should jump back into the CoS's view that morning.
