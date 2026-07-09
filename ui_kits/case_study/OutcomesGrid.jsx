function OutcomesGrid() {
  const outcomes = [
    { value: "62 days", label: "earlier than planned ship on the flagship platform" },
    { value: "4 → 0.5 hr", label: "of leadership time in status meetings, per week" },
    { value: "11 / 11", label: "initiatives on track or shipped by week 14" },
    { value: "$240k", label: "engagement fee · vs. $1.8M earlier reorg attempt" },
  ];
  return (
    <section className="cs-outcomes" data-screen-label="05 Outcomes">
      <div className="cs-section">
        <div className="ee-eyebrow">Outcomes</div>
        <h2 className="cs-section__title">What changed.</h2>
      </div>
      <div className="cs-outcomes__grid">
        {outcomes.map((o, i) => (
          <div className="cs-outcome" key={i}>
            <div className="cs-outcome__value">{o.value}</div>
            <div className="cs-outcome__label">{o.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.OutcomesGrid = OutcomesGrid;
