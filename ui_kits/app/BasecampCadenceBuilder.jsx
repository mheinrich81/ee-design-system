// BasecampCadenceBuilder.jsx — Variant B: interview-driven onboarding.
// The CoS answers one operator-style question at a time. Locked answers
// stack on the left (decision-log feel). The operating week assembles
// live in the right pane.

function VariantB({ tweaks }) {
  const STATE_TO_COUNT = { empty: 0, mid: 4, handoff: 9 };
  const lockedCount = STATE_TO_COUNT[tweaks.state] ?? 4;

  return (
    <>
      {tweaks.state === "handoff" && <BasecampHandoffRibbon />}
      <div className="vb">
        <VBLog locked={BC_INTERVIEW.locked.slice(0, Math.min(lockedCount, BC_INTERVIEW.locked.length))}
               total={BC_INTERVIEW.locked.length + 1 + BC_INTERVIEW.next.length} />
        <VBCenter state={tweaks.state} />
        <VBPreview state={tweaks.state} />
      </div>
    </>
  );
}

// ----- Left: locked decisions log ------------------------------------------

function VBLog({ locked, total }) {
  return (
    <div className="vb__log">
      <div className="vb__log-head">
        <span className="vb__log-title">Locked decisions</span>
        <span className="vb__log-count">{locked.length} of {total}</span>
      </div>

      {locked.length === 0 && (
        <div style={{
          padding: "32px 16px",
          fontFamily: "var(--font-sans)",
          fontSize: 12.5,
          color: "var(--fg-3)",
          textAlign: "center",
          background: "var(--granite-50)",
          border: "1px dashed var(--granite-300)",
          borderRadius: 10,
          lineHeight: 1.5,
        }}>
          Nothing locked yet. Each answer becomes a decision on the right when you
          confirm it — and a row in the operating week.
        </div>
      )}

      {locked.map((entry, i) => (
        <article className="vb-locked" key={i}>
          <button className="vb-locked__edit" aria-label="Edit">
            <i data-lucide="pencil"></i>
          </button>
          <div className="vb-locked__topic">
            <i data-lucide="check"></i>
            {entry.topic}
          </div>
          <div className="vb-locked__q">{entry.q}</div>
          <div className="vb-locked__a">{entry.a}</div>
        </article>
      ))}
    </div>
  );
}

// ----- Center: current question --------------------------------------------

function VBCenter({ state }) {
  const isHandoff = state === "handoff";
  const data = BC_INTERVIEW.current;
  const [draft, setDraft] = React.useState("");
  const [selectedChip, setSelectedChip] = React.useState(null);

  if (isHandoff) {
    return (
      <div className="vb__center">
        <div className="vb__center-meta">
          <span className="vb__center-step">Interview complete</span>
          <span className="vb__center-skip">9 of 9 locked</span>
        </div>
        <div className="vb__center-body" style={{ padding: "56px 32px 32px" }}>
          <div className="vb__q-eyebrow">Handoff</div>
          <h1 className="vb__q">The cadence is yours from Monday.</h1>
          <p className="vb__q-help">
            We installed seven rituals and named four operators. Mira owns
            Monday read-aheads and Friday close-outs. Adetola and Rae each
            own their weekly review. Decisions are logged the morning of
            standup; nothing carries past Friday.
          </p>
          <div style={{
            display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8,
          }}>
            <span className="bc-state-tag bc-state-tag--pine">7 rituals installed</span>
            <span className="bc-state-tag bc-state-tag--pine">4 operators embedded</span>
            <span className="bc-state-tag bc-state-tag--pine">3 summits locked</span>
            <span className="bc-state-tag">Morning view ready</span>
          </div>
        </div>
        <div className="vb__center-foot">
          <span className="vb__center-foot__hint">Engagement runs through Aug 10</span>
          <button className="bc-verb-btn">
            <i data-lucide="arrow-right"></i>
            Open morning view
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="vb__center">
      <div className="vb__center-meta">
        <span className="vb__center-step">{data.eyebrow}</span>
        <button className="vb__center-skip">
          Skip for now
          <i data-lucide="arrow-right"></i>
        </button>
      </div>

      <div className="vb__center-body">
        <div className="vb__q-eyebrow">Cadence design</div>
        <h1 className="vb__q">{data.q}</h1>
        <p className="vb__q-help">{data.help}</p>

        <div className="vb__answer">
          <textarea
            placeholder="Type the decision, the people who keep deferring it, and why it costs to defer it another week."
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={4}
          />
          <div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 9.5,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--fg-3)", marginBottom: 6,
            }}>
              Picked up from this week
            </div>
            <div className="vb__answer-chips">
              {data.chips.map((c) => (
                <button
                  key={c}
                  className={`vb-chip ${selectedChip === c ? "vb-chip--on" : ""}`}
                  onClick={() => {
                    setSelectedChip(c);
                    setDraft((d) => d ? d : c);
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 10.5,
          color: "var(--fg-3)", letterSpacing: "0.02em",
        }}>
          Next: {BC_INTERVIEW.next.map((n) => n.topic).join(" · ")}
        </div>
      </div>

      <div className="vb__center-foot">
        <span className="vb__center-foot__hint">
          <kbd>⌘↵</kbd> to lock · <kbd>↓</kbd> to defer
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="bc-verb-btn bc-verb-btn--ghost">Park this question</button>
          <button className="bc-verb-btn">
            Lock answer
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

// ----- Right: operating week assembling live -------------------------------

function VBPreview({ state }) {
  const isHandoff = state === "handoff";
  const items = isHandoff
    ? BC_CADENCE_PREVIEW.map((p) => ({ ...p, on: true }))
    : BC_CADENCE_PREVIEW;

  return (
    <div className="vb__preview">
      <div className="vb__preview-head">
        <span className="vb__preview-title">Operating week — emerging</span>
        <span className="vb__preview-tag">{isHandoff ? "Locked" : "Drafting"}</span>
      </div>

      <VBMiniWeek state={state} />

      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 10,
        letterSpacing: "0.06em", textTransform: "uppercase",
        color: "var(--fg-3)", paddingTop: 4,
      }}>
        Rituals
      </div>

      <div className="vb__preview-list">
        {items.map((p) => (
          <div className={`vb__preview-item ${p.on ? "" : "vb__preview-item--pending"}`} key={p.name}>
            <i data-lucide={p.on ? "check" : "circle"}></i>
            <span>{p.name}</span>
            <span className="vb__preview-item__cad">{p.cad}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VBMiniWeek({ state }) {
  const days = ["M", "T", "W", "T", "F"];
  // Hand-picked event placements — represented as percent-of-day band.
  const events = state === "empty" ? [] : [
    { d: 0, top: 8,  h: 10, name: "Read-ahead", color: "summit" },
    { d: 0, top: 22, h: 8,  name: "Standup",    color: "summit" },
    { d: 1, top: 30, h: 12, name: "Eng sync",   color: "pine" },
    { d: 2, top: 22, h: 8,  name: "Standup",    color: "summit" },
    { d: 3, top: 40, h: 14, name: "Growth",     color: "pine" },
    { d: 4, top: 78, h: 8,  name: "Close-out",  color: "summit" },
  ];
  const handoffExtras = [
    { d: 1, top: 16, h: 8, name: "1:1 EW",  color: "gold" },
    { d: 4, top: 18, h: 10, name: "Triage", color: "gold" },
  ];
  const all = state === "handoff" ? [...events, ...handoffExtras] : events;
  return (
    <div className="vb-mini-week">
      {days.map((d, i) => (
        <div className="vb-mini-day" key={i}>
          <div className="vb-mini-day__h">{d}</div>
          <div className="vb-mini-day__col">
            {all.filter((e) => e.d === i).map((e, k) => (
              <div
                key={k}
                className={`vb-mini-ritual vb-mini-ritual--${e.color}`}
                style={{
                  position: "absolute",
                  top: `${(e.top / 100) * 100}%`,
                  height: `${(e.h / 100) * 100}%`,
                  left: 4, right: 4,
                  display: "flex", alignItems: "center",
                }}
              >
                {e.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

window.VariantB = VariantB;
