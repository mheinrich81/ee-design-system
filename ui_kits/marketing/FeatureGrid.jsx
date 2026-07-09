function FeatureGrid() {
  const features = [
    {
      icon: "compass",
      title: "Initiative diagnostic",
      body: "Two weeks. We map every in-flight initiative, owner, and decision, then tell you which ones are real and which ones are theatre.",
    },
    {
      icon: "git-branch",
      title: "Decision cadence",
      body: "We install the weekly rhythm — decisions logged, blockers escalated, owners named — and run it with your team until it sticks.",
    },
    {
      icon: "users",
      title: "Embedded operators",
      body: "Our operators sit inside your team for the engagement. They take notes, run reviews, and chase the work. They are not coaches.",
    },
    {
      icon: "alert-triangle",
      title: "Blocker triage",
      body: "When a milestone slips or an owner goes quiet, we name it that week — not at the quarterly review.",
    },
    {
      icon: "trending-up",
      title: "Outcome reviews",
      body: "Every six weeks we sit with leadership and read the metric the work was supposed to move. We do not grade on effort.",
    },
    {
      icon: "log-out",
      title: "Handoff, not lock-in",
      body: "Most engagements end at twelve weeks. We leave you the playbook, the cadence, and an operator on your team who runs it.",
    },
  ];
  return (
    <section className="ee-features" data-screen-label="02 Services">
      <div className="ee-section-head">
        <div className="ee-eyebrow">What we do</div>
        <h2 className="ee-section-head__title">An operating layer, installed.</h2>
        <p className="ee-section-head__sub">
          Six things we do in every engagement. We do not advise, deck, or workshop.
        </p>
      </div>
      <div className="ee-features__grid">
        {features.map((f, i) => (
          <article className="ee-feature" key={i}>
            <div className="ee-feature__icon">
              <i data-lucide={f.icon}></i>
            </div>
            <h3 className="ee-feature__title">{f.title}</h3>
            <p className="ee-feature__body">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
window.FeatureGrid = FeatureGrid;
