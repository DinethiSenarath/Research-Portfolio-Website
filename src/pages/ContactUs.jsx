import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { contact, project } from '../data/projectData'

const TO_EMAIL = 'safebandsrilanka@gmail.com'

export default function ContactUs() {
  const [subject, setSubject] = useState('Inquiry about the Safe Band research project')
  const [body, setBody] = useState(
    `Dear Safe Band Research Team,

I am writing to inquire about [your question / topic].

[Add your message here]

Thank you.

Kind regards,
[Your Name]
[Your Organization / Affiliation]`
  )
  const [copied, setCopied] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    const mailto = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${TO_EMAIL}\nSubject: ${subject}\n\n${body}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      alert('Copy failed. Please select the text and copy manually.')
    }
  }

  return (
    <>
      <PageHeader title="Get In Touch" subtitle={`Get in touch with the ${project.short} research team`} />
      <div className="container block two-col">
        <div className="panel">
          <h3>General Contacts</h3>
          <p>📧 <a href={`mailto:${TO_EMAIL}`}>{TO_EMAIL}</a></p>
          <p>📞 {contact.phone}</p>
          <p>📍 {contact.address}</p>
        </div>

        <form className="panel" onSubmit={sendEmail}>
          <h3>E-mail Template</h3>

          <label className="select-label" htmlFor="subj">Subject</label>
          <input
            id="subj"
            className="input"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <label className="select-label" htmlFor="msg">Message</label>
          <textarea
            id="msg"
            className="input"
            rows="10"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <div className="hero-actions">
            <button type="submit" className="btn btn-primary">Send Email</button>

          </div>
        </form>
      </div>
    </>
  )
}