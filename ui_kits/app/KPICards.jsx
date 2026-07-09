function KPICards() {
  const kpis = [
    { label: "Initiatives in flight",     value: "12", delta: "+2 this wk",    deltaDir: "up",      spark: [5,6,6,7,8,9,10,11,12] },
    { label: "On track",                  value: "9",  delta: "75% of total",  deltaDir: "neutral", tint: "pine" },
    { label: "Needs the CEO this week",   value: "4",  delta: "2 over 48h",    deltaDir: "warn",    tint: "alpenglow" },
    { label: "Decisions logged · 30d",    value: "47", delta: "+8 vs prev",    deltaDir: "up",      tint: "summit" },
  ];

  function Spark({ data }) {
    if (!data) return null;
    const max = Math.max(...data); const min = Math.min(...data);
    const w = 80, h = 28;
    const pts = data.map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / Math.max(max - min, 1)) * h;
      return `${x},${y}`;
    }).join(" ");
    return (
      <svg width={w} height={h} className="kpi__spark" viewBox={`0 0 ${w} ${h}`}>
        <polyline points={pts} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <div className="kpi-grid">
      {kpis.map((k, i) => (
        <div className={`kpi kpi--${k.tint || ""}`} key={i}>
          <div className="kpi__label">{k.label}</div>
          <div className="kpi__row">
            <div className="kpi__value">{k.value}</div>
            <Spark data={k.spark} />
          </div>
          <div className={`kpi__delta kpi__delta--${k.deltaDir}`}>{k.delta}</div>
        </div>
      ))}
    </div>
  );
}
window.KPICards = KPICards;
