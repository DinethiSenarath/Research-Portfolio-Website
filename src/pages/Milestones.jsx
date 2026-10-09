import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { milestones } from '../data/projectData'

// අවසාන දිනය ගිහින් නම් 'done', නැත්නම් 'upcoming'
function getStatus(end) {
  return new Date(end + 'T23:59:59') < new Date() ? 'done' : 'upcoming'
}

export default function Milestones() {
  const [filter, setFilter] = useState('all')

  const list = milestones
    .map((m) => ({ ...m, status: getStatus(m.end) }))
    .filter((m) => filter === 'all' || m.status === filter)

  return (
    <>
      <PageHeader
        title="Project Milestones"
        subtitle="A structured roadmap guiding Safe Band from the initial proposal through to the final evaluation"
      />
      <div className="container block">
        <label htmlFor="milestone-filter" className="select-label">
          Show milestones:
        </label>
        <select
          id="milestone-filter"
          className="select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Assessments</option>
          <option value="done">Completed</option>
          <option value="upcoming">Upcoming</option>
        </select>

        <div className="timeline">
          {list.map((m) => (
            <div className={`tl-item ${m.status}`} key={m.id}>
              <span className="tl-dot" />
              <div className="tl-card">
                <div className="tl-top">
                  <span className="tl-date">{m.date}</span>
                  <span className={`tl-badge ${m.status}`}>
                    {m.status === 'done' ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
                <h3>{m.name}</h3>
                <p>{m.details}</p>
              </div>
            </div>
          ))}
          {list.length === 0 && <p className="muted">No milestones to show.</p>}
        </div>
      </div>
    </>
  )
}