function Footer() {
  return (
    <footer className="ee-footer">
      <div className="ee-footer__inner">
        <div className="ee-footer__brand">
          <a href="#" className="ee-brand">
            <img src="../../assets/logo-mark.svg" alt="" className="ee-brand__mark" />
            <span className="ee-brand__word">Elevate <span className="ee-brand__sub">Execution</span></span>
          </a>
          <p className="ee-footer__tagline">
            Strategy descends. Execution ascends.<br />
            Built in Calgary, Alberta · Treaty 7 territory.
          </p>
        </div>
        <div className="ee-footer__cols">
          <div className="ee-footer__col">
            <div className="ee-footer__heading">Work with us</div>
            <a href="#">Services</a>
            <a href="#">Approach</a>
            <a href="#">Case studies</a>
            <a href="#">Pricing</a>
            <a href="#">Book a call</a>
          </div>
          <div className="ee-footer__col">
            <div className="ee-footer__heading">Firm</div>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className="ee-footer__col">
            <div className="ee-footer__heading">Field notes</div>
            <a href="#">Operator's field guide</a>
            <a href="#">Writing</a>
            <a href="#">Talks</a>
            <a href="#">Newsletter</a>
          </div>
        </div>
      </div>
      <div className="ee-footer__legal">
        <span>© Elevate Execution Inc.</span>
        <span>Privacy · Terms · DPA</span>
      </div>
      <img src="../../assets/ridgeline.svg" alt="" className="ee-footer__ridge" />
    </footer>
  );
}
window.Footer = Footer;
