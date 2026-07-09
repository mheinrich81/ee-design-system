function Hero() {
  return (
    <section className="ee-hero" data-screen-label="01 Hero">
      <div className="ee-hero__inner">
        <div className="ee-eyebrow">Operating consultancy · Calgary, AB</div>
        <h1 className="ee-hero__title">
          Strategy descends.<br />
          <em>Execution</em> ascends.
        </h1>
        <p className="ee-hero__lead">
          We embed with your leadership team for 12 weeks and ship the work your strategy deck has been promising.
        </p>
        <div className="ee-hero__cta">
          <a href="#" className="ee-btn ee-btn--primary ee-btn--lg">
            Book a discovery call
            <i data-lucide="arrow-right"></i>
          </a>
          <a href="#" className="ee-btn ee-btn--ghost ee-btn--lg">
            <i data-lucide="folder-open"></i>
            See recent engagements
          </a>
        </div>
        <div className="ee-hero__caption">
          <i data-lucide="mountain-snow"></i>
          Based in Calgary · operators across North America
        </div>
      </div>
      <img src="../../assets/ridgeline.svg" alt="" className="ee-hero__ridge" />
    </section>
  );
}
window.Hero = Hero;
