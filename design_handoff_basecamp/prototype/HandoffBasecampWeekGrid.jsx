// BasecampWeekGrid.jsx — Variant C: a full Mon–Fri calendar is the canvas.
// Drag rituals from the left library onto the grid. Owners on the right.
// Sticky "Lock the cadence" bar at the bottom is the moment of commit.

function VariantC({ tweaks }) {
  return (
    <>
      {tweaks.state === "handoff" && <BasecampHandoffRibbon />}
      <div className="vc">
        <VCLibrary state={tweaks.state} />
        <VCCalendar state={tweaks.state} />
        <VCOwners />
        <VCFoot state={tweaks.state} />
      </div>
    </>
  );
}

// ----- Left: rituals library -----------------------------------------------

function VCLibrary({ state }) {
  return (
    <section className="vc__rail">
      <div className="vc__rail-head">
        <h2 className="vc__rail-title">Rituals</h2>
        <div className="vc__rail-sub">
          {state === "empty"
            ? "Drag any of these onto the week."
            : "Six installed. Two to go."}
        </div>
      </div>
      <div className="vc__rail-body">
        {BC_RITUALS.filter((r) => !r.dupOf).map((r) => {
          const placed = state === "empty" ? false : (r.placed || state === "handoff");
          return (
            <div
              key={r.name}
              className={[
                "vc-ritual",
                placed ? "vc-ritual--placed" : "",
                r.color === "pine" ? "vc-ritual--pine" :
                r.color === "gold" ? "vc-ritual--gold" : "",
              ].join(" ").trim()}
            >
              <span className="vc-ritual__color"></span>
              <span className="vc-ritual__grip">⋮⋮</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="vc-ritual__name">{r.name}</div>
                <div className="vc-ritual__meta">
                  {placed ? `installed · ${r.when.split("·")[0].trim()}` : r.when}
                </div>
              </div>
              {placed && (
                <i data-lucide="check" style={{
                  width: 14, height: 14, color: "var(--pine-600)", strokeWidth: 2,
                }}></i>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ----- Center: actual calendar grid ----------------------------------------

function VCCalendar({ state }) {
  const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const HOUR_H = 36;  // matches --vc-grid-hour-h
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const dayDates  = ["May 18", "May 19", "May 20", "May 21", "May 22"];

  const eventsForDay = (i) => {
    if (state === "empty") return [];
    return BC_RITUALS.filter((r) => r.day === i && (r.placed || state === "handoff" || r.ghost === false))
      .filter((r) => state === "handoff" || !r.ghost || r.placed)
      .map((r) => ({
        ...r,
        ghost: state !== "handoff" && r.ghost,
      }));
  };

  const fmt = (h) => {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    const suffix = hh >= 12 ? "p" : "a";
    const display = hh > 12 ? hh - 12 : hh;
    return mm === 0 ? `${display}${suffix}` : `${display}:${String(mm).padStart(2, "0")}${suffix}`;
  };

  return (
    <section className="vc__cal">
      <div className="vc__cal-head">
        <div className="vc__cal-head-cell vc__cal-head-cell--corner">
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 10,
            color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em",
          }}>
            Week 1
          </div>
          <div className="vc__cal-head-cell__date">of 12</div>
        </div>
        {dayLabels.map((d, i) => (
          <div className="vc__cal-head-cell" key={i}>
            <div>{d}</div>
            <div className="vc__cal-head-cell__date">{dayDates[i]}</div>
          </div>
        ))}
      </div>

      <div className="vc__cal-body">
        <div className="vc__cal-hours">
          {HOURS.map((h) => (
            <div className="vc__cal-hour" key={h}>{fmt(h)}</div>
          ))}
        </div>

        {dayLabels.map((_, i) => (
          <div className="vc__cal-day" key={i}>
            {eventsForDay(i).map((e, k) => {
              const top = (e.start - 8) * HOUR_H;
              const h   = Math.max(28, (e.end - e.start) * HOUR_H - 2);
              return (
                <div
                  key={k}
                  className={[
                    "vc-event",
                    e.color === "pine" ? "vc-event--pine" :
                    e.color === "gold" ? "vc-event--gold" : "",
                    e.ghost ? "vc-event--ghost" : "",
                  ].join(" ").trim()}
                  style={{ top, height: h }}
                >
                  <div className="vc-event__name">{e.name}</div>
                  <div className="vc-event__time">
                    {fmt(e.start)}–{fmt(e.end)} · {e.owner}
                  </div>
                </div>
              );
            })}
            {state === "empty" && i === 0 && (
              <div className="vc-event vc-event--ghost" style={{ top: 36, height: 28 }}>
                <div className="vc-event__name">Drop a ritual here →</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ----- Right: owners + assignment ------------------------------------------

function VCOwners() {
  return (
    <section className="vc__owners">
      <div className="vc__owners-head">
        <h2 className="vc__rail-title">Owners</h2>
        <div className="vc__rail-sub">Who runs each ritual</div>
      </div>
      <div className="vc__owners-body">
        {BC_OPERATORS.slice(0, 6).map((op) => {
          // Owners we've named for placed rituals get a non-zero count.
          const placedNames = BC_RITUALS.filter((r) => r.placed).map((r) => r.owner);
          const count = placedNames.filter((n) => op.name.startsWith(n)).length;
          return (
            <div className="vc-owner" key={op.name}>
              <div className={`app-avatar app-avatar--${op.color}`}>{op.initials}</div>
              <div>
                <div className="vc-owner__name">{op.name}</div>
                <div className="vc-owner__role">{op.role}</div>
              </div>
              <div className="vc-owner__count">
                <strong>{count}</strong>
                ritual{count === 1 ? "" : "s"}
              </div>
            </div>
          );
        })}

        <div style={{
          marginTop: 8,
          padding: "10px 12px",
          background: "var(--granite-50)",
          border: "1px dashed var(--granite-300)",
          borderRadius: 10,
          fontFamily: "var(--font-mono)", fontSize: 10.5,
          color: "var(--fg-3)", letterSpacing: "0.02em",
          lineHeight: 1.5,
        }}>
          Tip · drop a ritual onto an avatar to assign without dragging through the grid.
        </div>
      </div>
    </section>
  );
}

// ----- Bottom: lock the cadence --------------------------------------------

function VCFoot({ state }) {
  const stats = state === "empty"
    ? [{ l: "Rituals", v: "0" }, { l: "Operators", v: "0" }, { l: "Coverage", v: "—" }]
    : state === "handoff"
    ? [{ l: "Rituals", v: "8" }, { l: "Operators", v: "5" }, { l: "Coverage", v: "Mon–Fri" }]
    : [{ l: "Rituals", v: "6" }, { l: "Operators", v: "4" }, { l: "Coverage", v: "4 of 5 days" }];

  const cta = state === "empty"   ? "Lock starter cadence"
            : state === "handoff" ? "Open morning view"
            :                       "Lock the cadence";
  return (
    <div className="vc__foot">
      <div className="vc__foot-meta">
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            <div>
              <div className="vc__foot-stat-label">{s.l}</div>
              <div className="vc__foot-stat-value">{s.v}</div>
            </div>
            {i < stats.length - 1 && <div className="vc__foot-divider"></div>}
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: state === "handoff" ? "var(--fg-3)" : "oklch(70% 0.012 285)",
          letterSpacing: "0.02em",
        }}>
          {state === "handoff"
            ? "Cadence active · runs weekly"
            : "We will not show more than three summits at once"}
        </span>
        <button className="vc__foot-cta">
          {cta}
          <i data-lucide="arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

window.VariantC = VariantC;
