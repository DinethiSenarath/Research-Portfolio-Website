import PageHeader from '../components/PageHeader'
import { milestones } from '../data/projectData'

export default function Milestones() {
  return (
    <>
      <PageHeader
        title="Project Milestones"
        subtitle="A structured roadmap guiding Safe Band from the initial proposal through to the final evaluation"
      />
      <div className="container block">
        <div className="timeline">
          {milestones.map((m) => (
            <div className="tl-item" key={m.id}>
              <span className="tl-dot" />
              <div className="tl-card">
                <span className="tl-date">{m.date}</span>
                <h3>{m.name}</h3>
                <p>{m.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}