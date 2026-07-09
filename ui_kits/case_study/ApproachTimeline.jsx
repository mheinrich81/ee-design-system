function ApproachTimeline() {
  const phases = [
    {
      tag: "Week 1–2",
      icon: "compass",
      title: "Diagnostic",
      body: "Interviewed every initiative owner. Built one map of the work. Labelled each initiative real, theatre, or zombie. Killed four.",
      kpi: "18 → 11 active initiatives",
    },
    {
      tag: "Week 3–6",
      icon: "git-branch",
      title: "Install the cadence",
      body: "Replaced the weekly status with a Friday decision log. Named one owner per initiative. Wrote the rule for what gets escalated and when.",
      kpi: "First decision shipped Friday of week 3",
    },
    {
      tag: "Week 7–12",
      icon: "users",
      title: "Embed and run",
      body: "Our two operators ran the cadence alongside the COO. We sat in the rooms, took the notes, chased the blockers, and stopped doing it ourselves once the team did.",
      kpi: "Operator handoff completed week 11",
    },
    {
      tag: "Week 13–14",
      icon: "log-out",
      title: "Handoff",
      body: "Wrote the playbook with the team. Trained a full-time Director of Operating Cadence. Left.",
      kpi: "Engagement closed on schedule",
    },
  ];
  return (
    <section className="cs-approach" data-screen-label="03 Approach">
      <div className="cs-section">
        <div className="ee-eyebrow">What we did</div>
        <h2 className="cs-section__title">Fourteen weeks. Four phases. One playbook.</h2>
      </div>
      <ol className="cs-timeline">
        {phases.map((p, i) => (
          <li className="cs-phase" key={i}>
            <div className="cs-phase__rail">
              <div className="cs-phase__rail-dot"><i data-lucide={p.icon}></i></div>
              {i < phases.length - 1 && <div className="cs-phase__rail-line"></div>}
            </div>
            <div className="cs-phase__main">
              <div className="cs-phase__tag">{p.tag}</div>
              <h3 className="cs-phase__title">{p.title}</h3>
              <p className="cs-phase__body">{p.body}</p>
              <div className="cs-phase__kpi">
                <i data-lucide="check"></i>
                {p.kpi}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
window.ApproachTimeline = ApproachTimeline;
