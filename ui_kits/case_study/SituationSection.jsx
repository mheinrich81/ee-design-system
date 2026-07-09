function SituationSection() {
  return (
    <section className="cs-situation" data-screen-label="02 Situation">
      <div className="cs-section">
        <div className="ee-eyebrow">The situation</div>
        <h2 className="cs-section__title">A roadmap nobody could read.</h2>
        <div className="cs-prose">
          <p>
            Foothills had just raised. The board deck named eighteen initiatives across four product lines. The team Slack named twenty-three. The all-hands deck named eleven. None of these lists agreed on owners, dates, or whether the work had even started.
          </p>
          <p>
            Status meetings ran four hours a week and produced colors, not decisions. The CEO knew which initiatives were "important." She did not know which were moving.
          </p>
          <div className="cs-pullstat">
            <div className="cs-pullstat__value">4 hr</div>
            <div className="cs-pullstat__label">of weekly leadership time spent in status meetings — before we arrived</div>
          </div>
          <p>
            We were brought in for a two-week diagnostic. The diagnostic became a fourteen-week engagement. The first thing we did was stop the status meeting.
          </p>
        </div>
      </div>
    </section>
  );
}
window.SituationSection = SituationSection;
