export default function ContactSection() {
  return (
    <section id="contact">
      <div className="sec-header">
        <span className="sec-num">03</span>
        <h2 className="sec-title">Contact</h2>
        <div className="sec-line"></div>
      </div>
      <div className="contact-grid">
        <div className="contact-left">
          <div className="contact-statement">Let's build something<br /><span className="red">worth</span> showing.</div>
          <div className="contact-sub">Open to frontend roles, AI-first projects,<br />and collaborations with a strong aesthetic.</div>
          <a className="contact-email" href="mailto:jhoncadavid.cv@gmail.com">jhoncadavid.cv@gmail.com</a>
          <div className="social-links">
            <a className="social-item" href="https://github.com/JhonCDeveloper" target="_blank" rel="noreferrer">
              <div className="social-name-wrap">
                <span className="social-name">GitHub</span>
                <span className="social-handle">@JhonCDeveloper</span>
              </div>
              <span className="social-arrow">↗</span>
            </a>
            <a className="social-item" href="https://linkedin.com/in/jhon-cadavid-dev" target="_blank" rel="noreferrer">
              <div className="social-name-wrap">
                <span className="social-name">LinkedIn</span>
                <span className="social-handle">/in/jhon-cadavid-dev</span>
              </div>
              <span className="social-arrow">↗</span>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input className="form-input" type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" placeholder="you@email.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-input form-textarea" placeholder="Tell me about your project..."></textarea>
          </div>
          <button className="send-btn">Send <span className="btn-arrow">→</span></button>
        </div>
      </div>
    </section>
  );
}
