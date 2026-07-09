function LogoWall() {
  const logos = ["Bowmont Capital", "Foothills Labs", "Glacier Civic", "Cascade & Co", "Northpath", "Stoney Trail Group", "Banff Bioscience"];
  return (
    <section className="ee-logowall">
      <div className="ee-logowall__label">Operating teams we've worked with</div>
      <div className="ee-logowall__row">
        {logos.map((l, i) => (
          <span key={i} className="ee-logowall__item">{l}</span>
        ))}
      </div>
    </section>
  );
}
window.LogoWall = LogoWall;
