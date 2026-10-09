import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import {
  literature, researchGap, researchProblem, objectives,
  methodology, technologies, results,
} from '../data/projectData'

const tabs = [
  'Literature Survey', 'Research Gap', 'Research Problem',
  'Objectives', 'Methodology', 'Technologies Used', 'Results',
]

export default function Domain() {
  const [active, setActive] = useState(tabs[0])

  return (
    <>
      <PageHeader title="Domain" subtitle="The background, problem, methodology and findings of the research" />
      <div className="container block">
        <div className="tabs">
          {tabs.map((t) => (
            <button key={t} className={t === active ? 'tab active' : 'tab'} onClick={() => setActive(t)}>
              {t}
            </button>
          ))}
        </div>

        {active === 'Literature Survey' && (
          <div>
            {literature.map((l) => (
              <div className="panel" key={l.title}>
                <h3>{l.title}</h3>
                <ul>{l.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
        )}

        {active === 'Research Gap' && (
          <div className="panel">
            <h3>Research Gap</h3>
            <ul>{researchGap.map((g) => <li key={g}>{g}</li>)}</ul>
          </div>
        )}

        {active === 'Research Problem' && (
          <div className="panel">
            <h3>Research Problem</h3>
            <p className="highlight">{researchProblem.statement}</p>
            <h4>Background</h4>
            <ul>{researchProblem.background.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        )}

        {active === 'Objectives' && (
          <div>
            <div className="panel">
              <h3>Main Objective</h3>
              <p>{objectives.main}</p>
            </div>
            <div className="panel">
              <h3>Specific Objectives</h3>
              <ol>{objectives.specific.map((o) => <li key={o}>{o}</li>)}</ol>
            </div>
          </div>
        )}

        {active === 'Methodology' && (
          <div>
            <div className="panel">
              <h3>Overall Approach</h3>
              <p>{methodology.intro}</p>
            </div>
            {methodology.items.map((m) => (
              <div className="panel" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <ol className="steps">{m.steps.map((s) => <li key={s}>{s}</li>)}</ol>
              </div>
            ))}
            <div className="panel">
              <h3>Validation</h3>
              <p>{methodology.validation}</p>
            </div>
          </div>
        )}

        {active === 'Technologies Used' && (
          <div className="grid">
            {technologies.map((t) => (
              <div className="card" key={t.group}>
                <h3>{t.group}</h3>
                <div className="chips">{t.items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>
        )}

        {active === 'Results' && (
          <div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Component</th><th>Data</th><th>Outcome</th><th>Note</th></tr>
                </thead>
                <tbody>
                  {results.rows.map((r) => (
                    <tr key={r.comp}>
                      <td><strong>{r.comp}</strong></td><td>{r.data}</td><td>{r.outcome}</td><td>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="panel">
              <h3>Discussion</h3>
              <ul>{results.discussion.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}