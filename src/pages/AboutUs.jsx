import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { members, supervisors } from '../data/projectData'

// 'images/x.png' => හරියටම public folder එකේ file එකට යන path එකක් හදනවා
function resolvePhoto(photo) {
  if (!photo) return ''
  if (photo.startsWith('http')) return photo
  return import.meta.env.BASE_URL + photo.replace(/^\/+/, '')
}

function Avatar({ name, photo }) {
  const [failed, setFailed] = useState(false)
  const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  const src = resolvePhoto(photo)

  if (!src || failed) return <div className="avatar">{initials}</div>

  return (
    <img
      className="avatar"
      src={src}
      alt={name}
      onError={() => setFailed(true)}
    />
  )
}

export default function AboutUs() {
  return (
    <>
      <PageHeader title="About Us" subtitle="The team behind the Safe Band research project" />
      <div className="container block">
        <h2 className="section-title">Group Members</h2>
        <div className="grid">
          {members.map((m) => (
            <div className="card person" key={m.name}>
              <Avatar name={m.name} photo={m.photo} />
              <h3>{m.name}</h3>
              <p className="muted">{m.id}</p>
              <p>{m.component}</p>
              <p><a href={`mailto:${m.email}`}>{m.email}</a></p>
              {m.info && <p className="muted">{m.info}</p>}
            </div>
          ))}
        </div>

        <h2 className="section-title">Supervisors</h2>
        <div className="grid">
          {supervisors.map((s) => (
            <div className="card person" key={s.name}>
              <Avatar name={s.name} photo={s.photo} />
              <h3>{s.name}</h3>
              <p>{s.role}</p>
              <p><a href={`mailto:${s.email}`}>{s.email}</a></p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}