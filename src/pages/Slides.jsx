import PageHeader from '../components/PageHeader'
import { slides } from '../data/projectData'

export default function Slides() {
  return (
    <>
      <PageHeader title="Slides of Past Presentations" subtitle="Presentation slides used at each stage of the project" />
      <div className="container block">
        <div className="grid">
          {slides.map((s) => (
            <div className="card" key={s.name}>
              <h3>🎞️ {s.name}</h3>
              <p><strong>Type:</strong> {s.type}</p>
              <p>{s.desc}</p>
              {s.url ? (
                <a className="btn btn-primary" href={s.url} target="_blank" rel="noreferrer">Open Slides</a>
              ) : (
                <p className="pending"><em>Will be available after the presentation</em></p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}