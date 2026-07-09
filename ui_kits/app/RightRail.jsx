function RightRail() {
  return (
    <aside className="app-rightrail">
      <div className="blockers">
        <div className="blockers__head">
          <div className="blockers__icon"><i data-lucide="alert-triangle"></i></div>
          <div>
            <div className="blockers__title">2 things need the CEO</div>
            <div className="blockers__sub">No one has answered for &gt; 48h</div>
          </div>
        </div>
        <div className="blockers__list">
          <div className="blockers__item">
            <span>EU launch — DPA pending</span>
            <button className="app-btn app-btn--xs">Brief</button>
          </div>
          <div className="blockers__item">
            <span>Onboarding video — ship or kill</span>
            <button className="app-btn app-btn--xs">Brief</button>
          </div>
        </div>
      </div>
      <DecisionFeed />
    </aside>
  );
}
window.RightRail = RightRail;
