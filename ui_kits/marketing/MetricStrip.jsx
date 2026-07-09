function MetricStrip() {
  const stats = [
    { value: "12 wk", label: "median engagement — strategy deck to first shipped milestone" },
    { value: "87%",   label: "of engagements end with the client running the cadence themselves" },
    { value: "3.4×",  label: "fewer status meetings in client orgs by the end of an engagement" },
  ];
  return (
    <section className="ee-metricstrip" data-screen-label="03 Outcomes">
      <div className="ee-metricstrip__inner">
        {stats.map((s, i) => (
          <div className="ee-metric" key={i}>
            <div className="ee-metric__value">{s.value}</div>
            <div className="ee-metric__label">{s.label}</div>
          </div>
        ))}
      </div>
      <img src="../../assets/topo-motif.svg" alt="" className="ee-metricstrip__motif" />
    </section>
  );
}
window.MetricStrip = MetricStrip;
