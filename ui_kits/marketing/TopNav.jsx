function TopNav() {
  return (
    <header className="ee-topnav">
      <div className="ee-topnav__inner">
        <a href="#" className="ee-brand">
          <img src="../../assets/logo-mark.svg" alt="" className="ee-brand__mark" />
          <span className="ee-brand__word">Elevate <span className="ee-brand__sub">Execution</span></span>
        </a>
        <nav className="ee-topnav__links">
          <a href="#">Services</a>
          <a href="#">Approach</a>
          <a href="#">Case studies</a>
          <a href="#">Team</a>
          <a href="#">Field notes</a>
        </nav>
        <div className="ee-topnav__cta">
          <a href="#" className="ee-btn ee-btn--primary ee-btn--sm">Book a discovery call</a>
        </div>
      </div>
    </header>
  );
}
window.TopNav = TopNav;
