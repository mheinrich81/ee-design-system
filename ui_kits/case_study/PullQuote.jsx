function PullQuote() {
  return (
    <section className="cs-quote" data-screen-label="04 Pull quote">
      <div className="cs-quote__inner">
        <i data-lucide="quote" className="cs-quote__mark"></i>
        <blockquote className="cs-quote__text">
          We hired them to advise. They ran the company for fourteen weeks instead, and now we know how to run it ourselves. Cheapest expensive thing we've ever bought.
        </blockquote>
        <div className="cs-quote__attr">
          <div className="app-avatar app-avatar--summit cs-quote__avatar">EW</div>
          <div>
            <div className="cs-quote__name">Eleanor Wachter</div>
            <div className="cs-quote__role">CEO, Foothills Labs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PullQuote = PullQuote;
