// BasecampTrailMap.jsx — Variant A: 3-column expedition planner
// Left: vertical step list  ·  Center: active step form  ·  Right: ridgeline progress

function VariantA({ tweaks }) {
  const STATE_TO_ACTIVE = { empty: 0, mid: 1, handoff: 4 };
  const activeIdx = STATE_TO_ACTIVE[tweaks.state] ?? 1;
  const steps = BC_STEPS.map((s, i) => ({
    ...s,
    done: i < activeIdx || tweaks.state === "handoff",
    active: i === activeIdx && tweaks.state !== "handoff",
  }));
  const completed = steps.filter((s) => s.done).length;
  const current = steps[activeIdx] || steps[0];

  return (
    <>
      {tweaks.state === "handoff" && <BasecampHandoffRibbon />}
      <div className="va">
        <VAStepList steps={steps} />
        <VAPane step={current} steps={steps} tweaks={tweaks} />
        <VARail steps={steps} completed={completed} />
      </div>
    </>
  );
}

function VAStepList({ steps }) {
  return (
    <div className="va__steps">
      <div style={{
        fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500,
        letterSpacing: "-0.01em", padding: "4px 14px 12px",
        color: "var(--fg-1)",
      }}>
        The approach
      </div>
      {steps.map((s, i) => (
        <React.Fragment key={s.id}>
          <div
            className={[
              "va-step",
              s.active ? "va-step--active" : "",
              s.done ? "va-step--done" : "",
            ].join(" ").trim()}
          >
            <div className="va-step__index">
              {s.done ? <i data-lucide="check"></i> : i + 1}
            </div>
            <div>
              <div className="va-step__title">{s.title}</div>
              <div className="va-step__sub">{s.sub}</div>
            </div>
            <div className="va-step__time">{s.done ? "done" : s.time}</div>
          </div>
        </React.Fragment>
      ))}
      <div className="va-step__divider"></div>
      <div style={{
        padding: "4px 14px",
        fontFamily: "var(--font-mono)", fontSize: 10.5,
        color: "var(--fg-3)", letterSpacing: "0.02em",
      }}>
        Estimated 12 min remaining · we save as you go
      </div>
    </div>
  );
}

function VAPane({ step, tweaks }) {
  // We render the "Embed your operators" step's form by default — it's the
  // most representative dense onboarding moment.
  const body = step.id === "operators" ? <VAOperatorsForm /> :
               step.id === "summits"   ? <VASummitsForm /> :
                                         <VAOperatorsForm />;
  return (
    <div className="va__pane">
      <div className="va__pane-head">
        <div>
          <div className="va__pane-eyebrow">Step {BC_STEPS.findIndex((s) => s.id === step.id) + 1} · {step.id === "operators" ? "Operators" : step.id}</div>
          <h1 className="va__pane-title">{step.title}.</h1>
          <p className="va__pane-sub">
            {step.id === "operators"
              ? "Add the 5–8 people on your leadership team. Pick how often each one reports in — we'll watch for silence past that cadence and surface it as a signal, not a status."
              : "Each summit is a top-level outcome for the next 90 days. We will not show more than three at once."}
          </p>
        </div>
        <span className="bc-state-tag">
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "var(--summit-500)", display: "inline-block",
          }}></span>
          {step.verb} this step
        </span>
      </div>

      <div className="va__pane-body">
        {body}
      </div>

      <div className="va__pane-foot">
        <span className="va__pane-foot__note">
          ⌘↵ to {step.verb.toLowerCase()} and advance · esc to step back
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="bc-verb-btn bc-verb-btn--ghost">Skip for now</button>
          <button className="bc-verb-btn">
            {step.verb} 4 operators
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

function VAOperatorsForm() {
  // Show the 4 operators that count as "embedded" + 4 "outside the cadence"
  // — the split is part of the brand voice (we name what we won't do).
  const embedded = BC_OPERATORS.slice(0, 4);
  const adjacent = BC_OPERATORS.slice(4);
  return (
    <>
      <div className="va-divider-row">
        <span>Embedded in the cadence</span>
      </div>
      {embedded.map((op) => <VAOperatorRow key={op.name} op={op} />)}

      <div className="va-divider-row" style={{ marginTop: 12 }}>
        <span>Adjacent — gets the read-ahead, not the standup</span>
      </div>
      {adjacent.map((op) => <VAOperatorRow key={op.name} op={op} muted />)}
    </>
  );
}

function VAOperatorRow({ op, muted }) {
  return (
    <div className="va-op-row" style={muted ? { opacity: 0.72 } : null}>
      <div className={`app-avatar app-avatar--${op.color}`}>{op.initials}</div>
      <div>
        <div className="va-op-row__name">{op.name}</div>
        <div className="va-op-row__role">{op.role}</div>
      </div>
      <button className="va-op-row__select">
        <span>{op.cadence}</span>
        <i data-lucide="chevron-down"></i>
      </button>
      <div className="va-op-row__cadence">{op.owns} initiatives</div>
    </div>
  );
}

function VASummitsForm() {
  return (
    <>
      <div className="va-divider-row"><span>Top-level outcomes</span></div>
      {BC_SUMMITS.map((s) => (
        <div key={s.name} className="va-op-row" style={{
          gridTemplateColumns: "12px 1fr 100px 120px",
        }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color }}></span>
          <div>
            <div className="va-op-row__name">{s.name}</div>
            <div className="va-op-row__role">{s.count} initiatives mapped</div>
          </div>
          <div className="va-op-row__cadence">{s.pct}% locked</div>
          <button className="va-op-row__select">
            <span>Edit</span>
            <i data-lucide="chevron-right"></i>
          </button>
        </div>
      ))}
    </>
  );
}

// ----- Right rail: ridgeline visualization ----------------------------------

function VARail({ steps, completed }) {
  // Each step is a marker at a fixed x-percentage along the ridgeline.
  // y is hand-tuned to land each marker on a peak of the front ridge.
  const markers = [
    { x: 8,   y: 35 },   // 1 summits
    { x: 26,  y: 24 },   // 2 operators
    { x: 46,  y: 38 },   // 3 cadence
    { x: 66,  y: 22 },   // 4 signals
    { x: 88,  y: 32 },   // 5 read-ahead
  ];
  return (
    <div className="va__rail">
      <div className="va__rail-head">
        <span className="va__rail-title">Trail map</span>
        <span className="va__rail-tag">{completed}/5 done</span>
      </div>

      <div className="va__ridge">
        <svg viewBox="0 0 280 220" preserveAspectRatio="none" fill="none">
          {/* Three layered ridges, drawn fresh at the rail's aspect ratio */}
          <path d="M0 175 L 25 138 L 55 168 L 88 122 L 120 158 L 152 118 L 188 152 L 220 124 L 250 156 L 280 138 L 280 220 L 0 220 Z"
                fill="var(--summit-500)" opacity="0.16"></path>
          <path d="M0 200 L 22 168 L 50 188 L 78 148 L 108 180 L 138 142 L 168 178 L 198 138 L 228 174 L 256 150 L 280 174 L 280 220 L 0 220 Z"
                fill="var(--summit-600)" opacity="0.32"></path>
          <path d="M0 220 L 18 196 L 42 208 L 68 184 L 96 204 L 124 178 L 152 200 L 178 174 L 204 200 L 232 184 L 258 204 L 280 192 L 280 220 Z"
                fill="var(--granite-800)" opacity="0.62"></path>
          {/* faint dotted trail */}
          <path d="M 22 165 Q 80 130 145 145 Q 200 155 260 138"
                stroke="var(--granite-400)" strokeWidth="1" strokeDasharray="2 4"
                fill="none" opacity="0.7"></path>
        </svg>

        {markers.map((m, i) => {
          const s = steps[i];
          if (!s) return null;
          const klass = s.done ? "va__ridge-marker--done"
                      : s.active ? "va__ridge-marker--active"
                      : "";
          return (
            <div
              key={i}
              className={`va__ridge-marker ${klass}`}
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
            >
              <div className="va__ridge-marker-dot"></div>
              <div className="va__ridge-marker-label">{i + 1}</div>
            </div>
          );
        })}
      </div>

      <div className="va__rail-summit">
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 10,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--fg-3)", marginBottom: 4,
        }}>
          Pinned summits
        </div>
        {BC_SUMMITS.map((s) => (
          <div className="va__rail-summit-row" key={s.name}>
            <span className="va__rail-summit-row__dot" style={{ background: s.color }}></span>
            <span>{s.name}</span>
            <span className="va__rail-summit-row__count">{s.count}</span>
          </div>
        ))}
      </div>

      <div className="va__rail-foot">
        <div className="va__rail-foot-line">
          <span>Engagement starts</span>
          <span style={{ color: "var(--fg-1)" }}>Mon · May 18</span>
        </div>
        <div className="va__rail-foot-line" style={{ marginTop: 4 }}>
          <span>We hand off</span>
          <span style={{ color: "var(--fg-1)" }}>12 weeks · Aug 10</span>
        </div>
      </div>
    </div>
  );
}

window.VariantA = VariantA;
