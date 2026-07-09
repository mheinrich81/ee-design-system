function TopBar() {
  return (
    <header className="app-topbar">
      <div className="app-topbar__crumbs">
        <span className="app-topbar__crumb">Workspace</span>
        <i data-lucide="chevron-right"></i>
        <span className="app-topbar__crumb app-topbar__crumb--current">Overview</span>
      </div>
      <div className="app-topbar__actions">
        <button className="app-iconbtn" title="Notifications">
          <i data-lucide="bell"></i>
          <span className="app-iconbtn__dot"></span>
        </button>
        <button className="app-btn app-btn--ghost">
          <i data-lucide="filter"></i>
          Filter
        </button>
        <button className="app-btn app-btn--primary">
          <i data-lucide="plus"></i>
          New initiative
        </button>
        <div className="app-avatar app-avatar--me">MS</div>
      </div>
    </header>
  );
}
window.TopBar = TopBar;
