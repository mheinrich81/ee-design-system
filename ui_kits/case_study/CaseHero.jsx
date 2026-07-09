function CaseHero() {
  return (
    <section className="cs-hero" data-screen-label="01 Case hero">
      <div className="cs-hero__inner">
        <div className="cs-hero__copy">
          <div className="ee-eyebrow">Case study · 2025</div>
          <h1 className="cs-hero__client">Foothills Labs</h1>
          <p className="cs-hero__summary">
            A 60-person bioscience team had a Series B and a roadmap. They did not have a way to know which initiatives were real. We embedded for 14 weeks, installed an operating cadence, and shipped the year's plan two months ahead of schedule.
          </p>
          <div className="cs-hero__outcome">
            <div className="cs-hero__outcome-value">62 days</div>
            <div className="cs-hero__outcome-label">earlier than planned ship date on their flagship trial-tracking platform</div>
          </div>
        </div>
        <aside className="cs-scope">
          <div className="cs-scope__row">
            <div className="cs-scope__label">Client</div>
            <div className="cs-scope__value">Foothills Labs</div>
          </div>
          <div className="cs-scope__row">
            <div className="cs-scope__label">Sector</div>
            <div className="cs-scope__value">Bioscience · clinical trials</div>
          </div>
          <div className="cs-scope__row">
            <div className="cs-scope__label">Stage</div>
            <div className="cs-scope__value">Series B · 60 people</div>
          </div>
          <div className="cs-scope__row">
            <div className="cs-scope__label">Engagement</div>
            <div className="cs-scope__value">14 weeks · embedded</div>
          </div>
          <div className="cs-scope__row">
            <div className="cs-scope__label">Operators</div>
            <div className="cs-scope__owners">
              <div className="cs-scope__owner">
                <div className="app-avatar app-avatar--summit">MS</div>
                <span>Mira S.</span>
              </div>
              <div className="cs-scope__owner">
                <div className="app-avatar app-avatar--pine">AO</div>
                <span>Adetola O.</span>
              </div>
            </div>
          </div>
          <div className="cs-scope__row">
            <div className="cs-scope__label">Services</div>
            <div className="cs-scope__tags">
              <span className="cs-tag">Diagnostic</span>
              <span className="cs-tag">Decision cadence</span>
              <span className="cs-tag">Embedded ops</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
window.CaseHero = CaseHero;
