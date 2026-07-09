function Sidebar() {
  const items = [
    { icon: "layout-dashboard", label: "Overview", active: true },
    { icon: "target",           label: "Initiatives", count: 12 },
    { icon: "check-square",     label: "Decisions",   count: 4 },
    { icon: "file-text",        label: "Briefings",   count: 3 },
    { icon: "users",            label: "Owners",      count: 28 },
    { icon: "calendar",         label: "Cadence" },
  ];
  const summits = [
    { color: "var(--summit-500)",    label: "Reliability",   count: 5 },
    { color: "var(--pine-500)",      label: "Growth",        count: 7 },
    { color: "var(--alpenglow-500)", label: "Foundations",   count: 3 },
  ];
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__brand">
        <img src="../../assets/logo-mark.svg" alt="" />
        <div className="app-sidebar__brand-text">
          <div className="app-sidebar__org">Stoney Trail Co.</div>
          <div className="app-sidebar__plan">Chief of staff · 6 execs</div>
        </div>
        <i data-lucide="chevrons-up-down" className="app-sidebar__brand-caret"></i>
      </div>

      <div className="app-sidebar__search">
        <i data-lucide="search"></i>
        <input placeholder="Jump to…" />
        <kbd>⌘K</kbd>
      </div>

      <nav className="app-sidebar__nav">
        {items.map((it, i) => (
          <a href="#" className={`app-navitem ${it.active ? "app-navitem--active" : ""}`} key={i}>
            <i data-lucide={it.icon}></i>
            <span>{it.label}</span>
            {it.count !== undefined && <span className="app-navitem__count">{it.count}</span>}
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
window.Sidebar = Sidebar;
