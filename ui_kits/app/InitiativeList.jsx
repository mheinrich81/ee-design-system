function InitiativeList() {
  const rows = [
    { name: "Q3 platform reliability",           summit: "Reliability",  owner: { i: "MS", c: "summit" },    status: "on-track", due: "Sep 30", progress: 62 },
    { name: "Onboarding redesign",               summit: "Growth",       owner: { i: "AO", c: "pine" },      status: "at-risk",  due: "Aug 12", progress: 34 },
    { name: "SOC 2 Type II audit",               summit: "Foundations",  owner: { i: "RK", c: "alpenglow" }, status: "on-track", due: "Oct 18", progress: 78 },
    { name: "Mobile push-notification overhaul", summit: "Growth",       owner: { i: "JK", c: "summit" },    status: "slipped",  due: "Jul 22", progress: 41 },
    { name: "Pricing page A/B test",             summit: "Growth",       owner: { i: "MS", c: "summit" },    status: "planned",  due: "Sep 04", progress: 0  },
    { name: "Datastore migration to PG 17",      summit: "Reliability",  owner: { i: "TD", c: "pine" },      status: "on-track", due: "Nov 11", progress: 22 },
  ];
  const statusMap = {
    "on-track": { label: "On track", c: "var(--pine-500)",      bg: "var(--pine-50)",       fg: "var(--pine-800)" },
    "at-risk":  { label: "At risk",  c: "var(--alpenglow-500)", bg: "var(--alpenglow-100)", fg: "var(--alpenglow-800)" },
    "slipped":  { label: "Slipped",  c: "var(--danger)",        bg: "var(--danger-bg)",     fg: "oklch(40% 0.180 28)" },
    "planned":  { label: "Planned",  c: "var(--summit-500)",    bg: "var(--summit-50)",     fg: "var(--summit-800)" },
  };
  const summitColor = {
    Reliability: "var(--summit-500)",
    Growth: "var(--pine-500)",
    Foundations: "var(--alpenglow-500)",
  };
  return (
    <section className="initiative-panel">
      <div className="panel-head">
        <div>
          <h3 className="panel-head__title">Initiatives</h3>
          <p className="panel-head__sub">12 in flight · 9 on track · 2 at risk · 1 slipped</p>
        </div>
        <div className="panel-head__tabs">
          <button className="app-tab app-tab--active">All</button>
          <button className="app-tab">Mine</button>
          <button className="app-tab">At risk</button>
          <button className="app-tab">Archived</button>
        </div>
      </div>
      <div className="initiative-table">
        <div className="initiative-table__head">
          <div>Initiative</div>
          <div>Summit</div>
          <div>Owner</div>
          <div>Status</div>
          <div>Due</div>
          <div>Progress</div>
        </div>
        {rows.map((r, i) => {
          const s = statusMap[r.status];
          return (
            <div className="initiative-row" key={i}>
              <div className="initiative-row__name">
                <i data-lucide="target" className="initiative-row__icon"></i>
                {r.name}
              </div>
              <div className="initiative-row__summit">
                <span className="initiative-row__dot" style={{ background: summitColor[r.summit] }}></span>
                {r.summit}
              </div>
              <div>
                <div className={`app-avatar app-avatar--${r.owner.c}`}>{r.owner.i}</div>
              </div>
              <div>
                <span className="initiative-row__pill" style={{ background: s.bg, color: s.fg }}>
                  <span className="initiative-row__dot" style={{ background: s.c }}></span>
                  {s.label}
                </span>
              </div>
              <div className="initiative-row__due">{r.due}</div>
              <div className="initiative-row__progress">
                <div className="initiative-row__bar"><div style={{ width: `${r.progress}%`, background: s.c }}></div></div>
                <span>{r.progress}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
window.InitiativeList = InitiativeList;
