import { project } from '../data/projectData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p><strong>{project.short}</strong>: {project.title}</p>
        <p>{project.institute} · Research Project {project.year} · ID: {project.projectId}</p>
      </div>
    </footer>
  )
}