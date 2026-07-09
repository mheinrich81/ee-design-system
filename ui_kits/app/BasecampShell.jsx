// BasecampShell.jsx — the app shell wrapped around each onboarding variant.
// Sidebar items progressively unlock as the user advances through Basecamp,
// matching the brand's "we install, then hand off" voice.

function BasecampSidebar({ tweaks, completedSteps }) {
  // Items map to the existing app's IA, but locked until Basecamp installs them.
  const items = [
    { icon: "tent",             label: "Basecamp",      active: true,                          tag: tweaks.state === "handoff" ? "DONE" : null },
    { icon: "layout-dashboard", label: "Morning view",  locked: tweaks.state !== "handoff" },
    { icon: "target",           label: "Initiatives",   count: completedSteps >= 1 ? 12 : null, locked: completedSteps < 1 },
    { icon: "check-square",     label: "Decisions",     count: completedSteps >= 3 ? 4 : null,  locked: completedSteps < 3 },
    { icon: "users",            label: "Operators",     count: completedSteps >= 2 ? 8 : null,  locked: completedSteps < 2 },
    { icon: "calendar",         label: "Cadence",       locked: completedSteps < 3 },
  ];
  const summits = [
    { color: "var(--summit-500)",    label: "Reliability",   count: 5 },
    { color: "var(--pine-500)",      label: "Growth",        count: 7 },
    { color: "var(--alpenglow-500)", label: "Foundations",   count: 3 },
  ];

  const pct = Math.round((completedSteps / 5) * 100);

  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__brand">
        <img src="../../assets/logo-mark.svg" alt="" />
        <div className="app-sidebar__brand-text">
          <div className="app-sidebar__org">Stoney Trail Co.</div>
          <div className="app-sidebar__plan">
            {tweaks.view === "client" ? "Operating cadence" : "Chief of staff · 6 execs"}
          </div>
        </div>
        <i data-lucide="chevrons-up-down" className="app-sidebar__brand-caret"></i>
      </div>

      <div className="bc-sidebar__phase">
        {tweaks.state === "handoff" ? "Engagement · wrapping up" : "Basecamp · setup"}
      </div>

      <div className="app-sidebar__search">
        <i data-lucide="search"></i>
        <input placeholder="Jump to…" />
        <kbd>⌘K</kbd>
      </div>

      <nav className="app-sidebar__nav">
        {items.map((it, i) => (
          <a href="#" key={i}
             className={[
               "app-navitem",
               it.active  ? "app-navitem--active" : "",
               it.locked  ? "app-navitem--locked" : "",
             ].join(" ").trim()}>
            <i data-lucide={it.icon}></i>
            <span>{it.label}</span>
            {it.tag && <span className="app-navitem__tag">{it.tag}</span>}
            {it.count != null && <span className="app-navitem__count">{it.count}</span>}
            {it.locked && !it.tag && <i data-lucide="lock" style={{ marginLeft: "auto", width: 12, height: 12, color: "var(--granite-400)" }}></i>}
          </a>
        ))}
      </nav>

      <div className="app-sidebar__section">
        <div className="app-sidebar__section-head">
          <span>Summits</span>
          <i data-lucide="plus"></i>
        </div>
        {summits.map((s, i) => (
          <a href="#" className="app-navitem" key={i}>
            <span className="app-navitem__dot" style={{ background: s.color }}></span>
            <span>{s.label}</span>
            <span className="app-navitem__count">{s.count}</span>
          </a>
        ))}
      </div>

      <div className="bc-sidebar__progress">
        <div className="bc-sidebar__progress-title">
          <span>Basecamp</span>
          <span>{pct}%</span>
        </div>
        <div className="bc-sidebar__progress-track">
          <div style={{ width: `${pct}%` }}></div>
        </div>
      </div>

      <div className="app-sidebar__foot">
        <a href="#" className="app-navitem">
          <i data-lucide="settings"></i>
          <span>Settings</span>
        </a>
        <a href="#" className="app-navitem">
          <i data-lucide="life-buoy"></i>
          <span>Basecamp guide</span>
        </a>
      </div>
    </aside>
  );
}

function BasecampTopBar({ variantLabel, tweaks, completedSteps }) {
  const totalSteps = 5;
  const remaining = totalSteps - completedSteps;
  return (
    <header className="app-topbar">
      <div className="app-topbar__crumbs">
        <span className="app-topbar__crumb">Stoney Trail Co.</span>
        <i data-lucide="chevron-right"></i>
        <span className="app-topbar__crumb app-topbar__crumb--current">
          Basecamp · {variantLabel}
        </span>
        {tweaks.state === "handoff" && (
          <span className="bc-state-tag bc-state-tag--pine" style={{ marginLeft: 12 }}>
            <i data-lucide="check" style={{ width: 11, height: 11, strokeWidth: 2.25 }}></i>
            Handing off
          </span>
        )}
      </div>
      <div className="app-topbar__actions">
        {tweaks.state !== "handoff" && (
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "var(--fg-3)",
            letterSpacing: "0.02em",
          }}>
            {remaining > 0 ? `${remaining} of ${totalSteps} steps remaining` : "Setup complete"}
          </span>
        )}
        <button className="app-iconbtn" title="Notifications">
          <i data-lucide="bell"></i>
          {completedSteps >= 2 && <span className="app-iconbtn__dot"></span>}
        </button>
        {tweaks.view === "operator" && (
          <button className="app-btn app-btn--ghost">
            <i data-lucide="message-square"></i>
            Invite operator
          </button>
        )}
        <button className="bc-verb-btn">
          {tweaks.state === "handoff" ? (
            <><i data-lucide="arrow-right"></i> Go to morning view</>
          ) : (
            <><i data-lucide="check"></i> Save &amp; continue</>
          )}
        </button>
        <div className="app-avatar app-avatar--me">MS</div>
      </div>
    </header>
  );
}

// Hand-off ribbon shown when state === "handoff" (engagement wrapping up).
function BasecampHandoffRibbon() {
  return (
    <div className="bc-handoff">
      <div className="bc-handoff__icon"><i data-lucide="map"></i></div>
      <div className="bc-handoff__main">
        <div className="bc-handoff__title">Basecamp is yours to run.</div>
        <div className="bc-handoff__sub">
          We've installed the cadence and named the operators. Mira owns it from Friday.
          The morning view goes live then — everything below is the snapshot we hand off.
        </div>
      </div>
      <button className="bc-verb-btn bc-verb-btn--ghost">
        <i data-lucide="download"></i>
        Export handoff doc
      </button>
    </div>
  );
}

window.BasecampSidebar = BasecampSidebar;
window.BasecampTopBar = BasecampTopBar;
window.BasecampHandoffRibbon = BasecampHandoffRibbon;
