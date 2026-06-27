export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="sec-header">
        <h2 className="sec-title">Projects</h2>
        <div className="sec-line"></div>
      </div>
      <div className="projects-grid">

        <a href="https://attackmind.onrender.com/" target="_blank" rel="noreferrer" className="proj-card" style={{ textDecoration: 'none' }}>
          <div className="proj-top">
            <span className="proj-arrow">↗</span>
          </div>
          <span className="featured-badge" style={{ opacity: 0 }}>—</span>
          <div className="proj-name">AttackMind</div>
          <div className="proj-desc">Cybersecurity project. Interactive Red Team simulator. Face real attack scenarios, compromise infrastructure, and think like an adversary without touching a single real system.</div>
          <div className="proj-tags">
            <span className="tag-pill">CyberSecurity</span>
          </div>
        </a>

        <a href="https://eventger-js-integrative-project-tesla.onrender.com/#/login" target="_blank" rel="noreferrer" className="proj-card" style={{ textDecoration: 'none' }}>
          <div className="proj-top">
            <span className="proj-arrow">↗</span>
          </div>
          <span className="featured-badge" style={{ opacity: 0 }}>—</span>
          <div className="proj-name">EventgerJS</div>
          <div className="proj-desc">EventgerJS is a modern event management system that centralizes event planning, user administration, and activity tracking through a responsive interface, secure authentication, and REST API integration.</div>
          <div className="proj-tags">
            <span className="tag-pill">JavaScript</span>
          </div>
        </a>

{/*         <div className="proj-card">
          <div className="proj-top">
            <span className="proj-arrow">↗</span>
          </div>
          <div className="proj-name">Nomad AI</div>
          <div className="proj-desc">Voice-enabled travel assistant. GPT-4o tool calling, RAG con FAISS, TTS. React/Vite frontend + FastAPI backend, desplegado en Railway.</div>
          <div className="proj-tags">
            <span className="tag-pill">React</span>
            <span className="tag-pill">TypeScript</span>
            <span className="tag-pill">FastAPI</span>
            <span className="tag-pill">GPT-4o</span>
            <span className="tag-pill">FAISS</span>
          </div>
        </div> */}

{/*         <div className="proj-card">
          <div className="proj-top">

            <span className="proj-arrow">↗</span>
          </div>
          <span className="featured-badge" style={{ opacity: 0 }}>—</span>
          <div className="proj-name">FinBot</div>
          <div className="proj-desc">Asistente financiero AI multilingüe. Tool calling, RAG, semantic caching, voz. Frontend inspirado en la estética de Linear.</div>
          <div className="proj-tags">
            <span className="tag-pill">LangChain</span>
            <span className="tag-pill">ElevenLabs</span>
            <span className="tag-pill">RAG</span>
          </div>
        </div> */}

        
      </div>
    </section>
  );
}
