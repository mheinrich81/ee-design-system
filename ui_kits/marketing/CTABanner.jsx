function CTABanner() {
  return (
    <section className="ee-cta">
      <div className="ee-cta__card">
        <div className="ee-cta__copy">
          <div className="ee-eyebrow ee-eyebrow--invert">Discovery call · 30 minutes</div>
          <h2 className="ee-cta__title">Stop describing the work. Start moving it.</h2>
          <p className="ee-cta__body">
            Tell us what's stuck. We'll tell you within a week whether we can help, what an engagement would look like, and what it would cost. No proposal pitch.
          </p>
        </div>
        <div className="ee-cta__actions">
          <a href="#" className="ee-btn ee-btn--alpenglow ee-btn--lg">
            Book a discovery call
            <i data-lucide="arrow-right"></i>
          </a>
          <a href="#" className="ee-link ee-link--invert">Or email us directly</a>
        </div>
      </div>
    </section>
  );
}
window.CTABanner = CTABanner;
