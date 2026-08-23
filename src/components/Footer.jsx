const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div className="footer__mark">
          <span className="navbar__spine navbar__spine--light" aria-hidden="true" />
          <span>Suhana Raj</span>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer__meta">
          Book Cover Designer &middot; &copy; {YEAR} Suhana Raj
        </p>
      </div>
    </footer>
  )
}
