/* ============================================================
   Morning View — the intervention-first CoS dashboard
   Cards represent the only signals worth pinging on. Layout
   is breathy; empty is the goal.
   ============================================================ */

function MorningView({ state = "healthy" }) {
  // ---------- Card data ----------
  const allCards = [
    {
      id: "video",
      verb: "DECIDE",
      ask: "Ship or kill the onboarding video.",
      signal: "Deferred 2×",
      context: "Eleanor wanted data; data is in. Mira's recommendation is kill. Last call delayed Tuesday.",
      meta: { owner: "Mira Singh", initiative: "Onboarding redesign", lastTouch: "3 days ago" },
    },
    {
      id: "dpa",
      verb: "DRAFT",
      ask: "Draft a one-pager on the EU launch DPA for Eleanor.",
      signal: "Needed by Thursday standup",
      context: "Two prospects are waiting. Adetola has the legal redlines; Eleanor will decide on the call.",
      meta: { owner: "Adetola O.", initiative: "EU launch", lastTouch: "yesterday" },
    },
    {
      id: "adetola",
      verb: "ASK",
      ask: "Check in with Adetola — they've gone quiet.",
      signal: "No update for 6 days · normally daily",
      context: "Adetola owns the EU launch and the migration. Both stalled at the same time. Worth a 15-min call before standup.",
      meta: { owner: "Adetola O.", initiative: "2 initiatives at risk", lastTouch: "6 days ago" },
    },
    {
      id: "kill-workshop",
      verb: "KILL",
      ask: "Kill the team-values workshop initiative.",
      signal: "No activity 47 days",
      context: "Started in Q1 by a person who left in March. No owner since. It is not coming back. Archive it.",
      meta: { owner: "(unassigned)", initiative: "Team-values workshop", lastTouch: "47 days ago" },
    },
    {
      id: "pg17",
      verb: "DECIDE",
      ask: "Resolve the PG 17 timing disagreement.",
      signal: "Jay and Tomás disagree in thread",
      context: "Jay wants stage by Aug 1; Tomás wants prod by Aug 15 directly. The data migration depends on the call.",
      meta: { owner: "Jay K. · Tomás D.", initiative: "Datastore migration to PG 17", lastTouch: "4 hours ago" },
    },
    {
      id: "soc2",
      verb: "APPROVE",
      ask: "Approve the SOC 2 evidence package.",
      signal: "Auditor needs it by EOD Friday",
      context: "Rae has assembled everything. The CoS sign-off unblocks the external auditor and the two enterprise deals tied to it.",
      meta: { owner: "Rae K.", initiative: "SOC 2 Type II audit", lastTouch: "this morning" },
    },
    {
      id: "readahead",
      verb: "DRAFT",
      ask: "Draft Monday's read-ahead for the leadership offsite.",
      signal: "3 days out · usually drafted 5 days out",
      context: "Eleanor is presenting H2 strategy. The exec team needs the prior decisions log and the open questions ahead of time.",
      meta: { owner: "Mira Singh", initiative: "Leadership offsite", lastTouch: "—" },
    },
    {
      id: "rae",
      verb: "ASK",
      ask: "Ask Rae for the pricing-test sample size.",
      signal: "Paused 4 days · no resolution date",
      context: "We paused the experiment for sample-size reasons. There is no date to resume. The growth summit is partly stuck on this.",
      meta: { owner: "Rae K.", initiative: "Pricing page A/B test", lastTouch: "4 days ago" },
    },
    {
      id: "board-note",
      verb: "DRAFT",
      ask: "Draft a note to the board on the slipped Q3 reliability date.",
      signal: "Slip not yet acknowledged externally",
      context: "Mobile push overhaul missed Jul 22. Board update goes out next week. Better the CoS frames it than they discover it.",
      meta: { owner: "Jay K.", initiative: "Mobile push notifications", lastTouch: "2 days ago" },
    },
  ];

  const SETS = {
    empty:       [],
    healthy:     ["video", "dpa", "adetola"],
    elevated:    ["video", "dpa", "adetola", "kill-workshop", "pg17"],
    overloaded:  ["video", "dpa", "adetola", "kill-workshop", "pg17", "soc2", "readahead", "rae", "board-note"],
  };

  const cardIds = SETS[state] ?? SETS.healthy;
  const cards = cardIds.map((id) => allCards.find((c) => c.id === id)).filter(Boolean);

  // Hard ceiling: never show more than 5 expanded cards.
  const VISIBLE_CAP = 5;
  const visible = cards.slice(0, VISIBLE_CAP);
  const hidden = cards.slice(VISIBLE_CAP);

  // ---------- Header copy by state ----------
  const today = new Date("2026-05-15T08:00:00");
  const dayLabel = today.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  let metaTitle, metaSub, metaTone;
  if (cards.length === 0) {
    metaTitle = "Nothing needs you today.";
    metaSub   = "The cadence is running. Use the time for the work the strategy deck has been promising.";
    metaTone  = "empty";
  } else if (cards.length <= 3) {
    metaTitle = `${cards.length} ${cards.length === 1 ? "thing needs" : "things need"} you this morning.`;
    metaSub   = "Cadence is healthy — these are the cards that earned a place.";
    metaTone  = "healthy";
  } else if (cards.length <= 6) {
    metaTitle = `${cards.length} things need you this morning.`;
    metaSub   = "That's more than usual. Worth a longer triage block today.";
    metaTone  = "elevated";
  } else {
    metaTitle = `${cards.length} things need you this morning.`;
    metaSub   = "The cadence has slipped, or last week's decisions weren't actually decisions.";
    metaTone  = "overloaded";
  }

  return (
    <div className="mv">
      <div className="mv__inner">
        <header className="mv__head">
          <div className="mv__date">Morning of {dayLabel}</div>
          <h1 className={`mv__title mv__title--${metaTone}`}>{metaTitle}</h1>
          <p className="mv__sub">{metaSub}</p>
        </header>

        {cards.length === 0 && <EmptyState />}

        {visible.length > 0 && (
          <div className="mv__cards">
            {visible.map((c) => (
              <InterventionCard key={c.id} card={c} />
            ))}
          </div>
        )}

        {hidden.length > 0 && (
          <div className="mv__overflow">
            <div className="mv__overflow-head">
              <i data-lucide="clock"></i>
              <span>+{hidden.length} more {hidden.length === 1 ? "thing needs" : "things need"} you</span>
            </div>
            <p className="mv__overflow-body">
              Block 30 minutes and triage them in order. We won't preview them here — the morning view stops at five.
            </p>
            <button className="mv-btn mv-btn--primary mv__overflow-cta">
              Open triage queue
              <i data-lucide="arrow-right"></i>
            </button>
          </div>
        )}

        {cards.length > 0 && <AmbientFoot />}
      </div>
    </div>
  );
}

function InterventionCard({ card }) {
  return (
    <article className="mv-card">
      <div className="mv-card__top">
        <span className={`mv-verb mv-verb--${card.verb.toLowerCase()}`}>{card.verb}</span>
        <span className="mv-card__signal">{card.signal}</span>
      </div>
      <h2 className="mv-card__ask">{card.ask}</h2>
      <p className="mv-card__context">{card.context}</p>
      {card.meta && (
        <dl className="mv-card__meta">
          <div className="mv-card__meta-row">
            <dt>Owner</dt>
            <dd>{card.meta.owner}</dd>
          </div>
          <div className="mv-card__meta-row">
            <dt>Initiative</dt>
            <dd>{card.meta.initiative}</dd>
          </div>
          <div className="mv-card__meta-row">
            <dt>Last touch</dt>
            <dd>{card.meta.lastTouch}</dd>
          </div>
        </dl>
      )}
      <div className="mv-card__actions">
        <button className="mv-btn mv-btn--primary">
          Do it now
          <i data-lucide="arrow-right"></i>
        </button>
        <button className="mv-btn mv-btn--ghost">Defer to tomorrow</button>
        <button className="mv-btn mv-btn--ghost mv-btn--danger">Escalate</button>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="mv-empty">
      <img src="../../assets/ridgeline.svg" alt="" className="mv-empty__ridge" />
      <div className="mv-empty__inner">
        <i data-lucide="mountain-snow" className="mv-empty__icon"></i>
        <div className="mv-empty__line">
          11 initiatives running quietly · last decision logged 2h ago · 0 owners overdue
        </div>
      </div>
    </div>
  );
}

function AmbientFoot() {
  return (
    <div className="mv-ambient">
      <span>11 initiatives running quietly</span>
      <span className="mv-ambient__dot"></span>
      <span>last decision logged 2h ago</span>
      <span className="mv-ambient__dot"></span>
      <span>0 owners overdue</span>
    </div>
  );
}

window.MorningView = MorningView;
