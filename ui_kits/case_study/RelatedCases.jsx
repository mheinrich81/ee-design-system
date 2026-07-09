function RelatedCases() {
  const related = [
    { client: "Bowmont Capital",  sector: "Private equity",  duration: "10 weeks", note: "Replaced three quarterly reviews with a monthly decision log across the portfolio." },
    { client: "Glacier Civic",     sector: "Municipal gov",  duration: "16 weeks", note: "Stood up an interdepartmental operating cadence for a $40M infrastructure programme." },
  ];
  return (
    <section className="cs-related" data-screen-label="06 Related">
      <div className="cs-section">
        <div className="ee-eyebrow">More work</div>
        <h2 className="cs-section__title">Related engagements.</h2>
      </div>
      <div className="cs-related__grid">
        {related.map((r, i) => (
          <a href="#" className="cs-related__card" key={i}>
            <div className="cs-related__head">
              <div className="cs-related__client">{r.client}</div>
              <i data-lucide="arrow-up-right"></i>
            </div>
            <div className="cs-related__meta">
              <span>{r.sector}</span>
              <span className="cs-related__dot"></span>
              <span>{r.duration}</span>
            </div>
            <p className="cs-related__note">{r.note}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
window.RelatedCases = RelatedCases;
