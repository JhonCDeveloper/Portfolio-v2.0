export default function AboutSection() {
  return (
    <section id="about">
      <div className="sec-header">
        <h2 className="sec-title">About</h2>
        <div className="sec-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-left">
          <p className="about-bio">
            <strong>Frontend</strong> developer focused on <span className="red">AI integration</span>. Three years of self-taught software engineering, technical training at <strong>SENA</strong>, and intensive bootcamps at <strong>RIWI</strong>.<br /><br />
            I build interfaces with a strong visual aesthetic and attention to detail. My stack lives between React/Vite || TypeScript and FastAPI, layered with LLMs, RAG, and voice.
          </p>
          <div className="skill-group">
            <div className="skill-label">Frontend</div>
            <div className="skill-list">
              <span className="skill-item red">React</span>
              <span className="skill-item red">TypeScript</span>
              <span className="skill-item">Vite</span>
              <span className="skill-item">CSS / Tailwind</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-label">Backend & AI</div>
            <div className="skill-list">
              <span className="skill-item">FastAPI</span>
              <span className="skill-item">LangChain</span>
              <span className="skill-item">OpenAI</span>
              <span className="skill-item">FAISS</span>
              <span className="skill-item">RAG</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-label">Tools</div>
            <div className="skill-list">
              <span className="skill-item">Git / GitHub</span>
              <span className="skill-item">Scrum</span>
              <span className="skill-item">Python</span>
            </div>
          </div>
        </div>
        <div className="about-divider"></div>
        <div className="about-right">
          <div className="skill-label" style={{ marginBottom: "24px" }}>Experience</div>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-year">2025–26</div>
              <div className="tl-line-wrap"><div className="tl-dot"></div><div className="tl-stem"></div></div>
              <div className="tl-content">
                <div className="tl-role">AI Software Developer</div>
                <div className="tl-place">RIWI · Intensive Bootcamp</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-year">2024–2026</div>
              <div className="tl-line-wrap"><div className="tl-dot"></div><div className="tl-stem"></div></div>
              <div className="tl-content">
                <div className="tl-role">Software Analysis & Development</div>
                <div className="tl-place">SENA · In progress</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-year">2023–</div>
              <div className="tl-line-wrap"><div className="tl-dot"></div><div className="tl-stem"></div></div>
              <div className="tl-content">
                <div className="tl-role">Self-taught Learning</div>
                <div className="tl-place">Frontend · Algoritmos · AI tooling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
