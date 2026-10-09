import { Link } from 'react-router-dom'
import { project, intro, stats, components } from '../data/projectData'
import heroBg from '../assets/hero-bg.jpg'

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="badge">Research Project : R26-IT-057  {project.year} · SLIIT</span>
          <h1>{project.title}</h1>
          <p className="hero-tag">{project.tagline}</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/domain">Explore the Research</Link>
            <Link className="btn btn-outline" to="/documents">View Documents</Link>
          </div>
        </div>
      </section>

      {/* ===== Introduction + Vision + Mission ===== */}
      <section className="container block">
        <p className="eyebrow">01 · INTRODUCTION</p>
        <h2 className="intro-heading">{intro.heading}</h2>
        <div className="intro-line" />

        <div className="intro-grid">
          <div className="intro-text">
            {intro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="vm-col">
            <div className="vm-card">
              <div className="vm-icon">👁️</div>
              <div>
                <h3>Vision</h3>
                <p>{intro.vision}</p>
              </div>
            </div>

            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <div>
                <h3>Mission</h3>
                <p>{intro.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container block">
        <h2 className="section-title">Abstract</h2>
        <p className="lead">{project.abstract}</p>
      </section>

      <section className="stats-wrap">
        <div className="container stats">
          {stats.map((s) => (
            <div className="stat" key={s.value}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container block">
        <h2 className="section-title">Four Research Components</h2>
        <div className="grid">
          {components.map((c) => (
            <div className="card" key={c.no}>
              <div className="card-no">{c.no}</div>
              <h3>{c.name}</h3>
              <p>{c.summary}</p>
              <p className="card-result"><strong>Result:</strong> {c.result}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container block">
        <h2 className="section-title">Explore</h2>
        <div className="grid grid-3">
          <Link to="/domain" className="card link-card"><h3>Domain</h3><p>Literature survey, research gap, problem, objectives, methodology and technologies.</p></Link>
          <Link to="/milestones" className="card link-card"><h3>Milestones</h3><p>All project assessments and their timeline.</p></Link>
          <Link to="/documents" className="card link-card"><h3>Documents</h3><p>Charter, proposal, checklists and final reports.</p></Link>
        </div>
      </section>
    </>
  )
}