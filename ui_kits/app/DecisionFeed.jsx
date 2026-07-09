function DecisionFeed() {
  const decisions = [
    { who: "MS", c: "summit",    title: "Ship onboarding v3 without the video tour",    time: "12 min ago",  body: "Owner: Mira · Rationale: data shows the tour increases drop-off at step 2." },
    { who: "AO", c: "pine",      title: "Defer EU launch to Q4",                         time: "2 hr ago",    body: "Owner: Adetola · Rationale: DPA review still open with two prospects." },
    { who: "RK", c: "alpenglow", title: "Pause pricing experiment",                      time: "Yesterday",   body: "Owner: Rae · Rationale: sample size insufficient at current traffic." },
    { who: "JK", c: "summit",    title: "Adopt postgres 17 in stage by Aug 1",           time: "2 days ago",  body: "Owner: Jay · Rationale: dependency for the data migration milestone." },
  ];
  return (
    <div className="decisions">
      <div className="decisions__head">
        <h4 className="decisions__title">Recent decisions</h4>
        <a href="#" className="decisions__all">View all</a>
      </div>
      {decisions.map((d, i) => (
        <article className="decision" key={i}>
          <div className={`app-avatar app-avatar--${d.c}`}>{d.who}</div>
          <div className="decision__main">
            <div className="decision__title">{d.title}</div>
            <div className="decision__body">{d.body}</div>
            <div className="decision__meta">
              <i data-lucide="check-square"></i>
              <span>Recorded · {d.time}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
window.DecisionFeed = DecisionFeed;
