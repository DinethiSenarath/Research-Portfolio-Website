import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { documents } from '../data/projectData'

export default function Documents() {
  const [filter, setFilter] = useState('all')

  // සියලු types වලින් unique list එකක්
  const types = [...new Set(documents.flatMap((g) => g.items.map((d) => d.type)))]

  // filter එකට ගැලපෙන documents විතරක්
  const groups = documents
    .map((g) => ({
      ...g,
      items: g.items.filter((d) => filter === 'all' || d.type === filter),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <>
      <PageHeader
        title="Research Documents"
        subtitle="Download official research deliverables and supporting materials"
      />

      <div className="container block">
        <div className="doc-filter">
          <label htmlFor="doc-filter" className="select-label">FILTER BY TYPE:</label>
          <select
            id="doc-filter"
            className="select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Deliverables</option>
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {groups.map((g, i) => (
          <section className="doc-group" key={g.group}>
            <h2 className="doc-group-title">
              <span className="doc-dash" />
              {String(i + 1).padStart(2, '0')}. {g.group}
            </h2>

            <div className="doc-grid">
              {g.items.map((d) => (
                <div className="doc-card" key={d.name}>
                  <span className="doc-type">{d.type}</span>
                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>

                  <div className="doc-footer">
                    <span className="doc-size">{d.url ? 'PDF' : 'Not uploaded yet'}</span>

                    {d.url ? (
                      <a
                        className="doc-btn"
                        href={d.url}
                        download={d.url.split('/').pop()}
                      >
                        ⬇ Download
                      </a>
                    ) : (
                      <span className="doc-btn disabled">Pending</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {groups.length === 0 && <p className="muted">No documents found.</p>}
      </div>
    </>
  )
}