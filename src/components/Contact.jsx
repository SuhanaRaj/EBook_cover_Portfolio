import { useState } from 'react'
import Reveal from './Reveal'

const PROJECT_TYPES = [
  'eBook cover',
  'KDP cover',
  'Paperback / print cover',
  'Series / multiple covers',
  'Not sure yet',
]

const initialForm = {
  name: '',
  email: '',
  bookTitle: '',
  genre: '',
  projectType: PROJECT_TYPES[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend is connected yet — this only confirms the form works.
    // Wire this up to an email service or API route before going live.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-inner contact__grid">
        <Reveal as="div" className="contact__intro">
          <p className="eyebrow">Contact</p>
          <h2>Have a story that needs a cover?</h2>
          <p className="contact__sub">
            Let&rsquo;s create a cover that gives your book the first
            impression it deserves.
          </p>
        </Reveal>

        <Reveal as="div" delay={100} className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success" role="status">
              <h3>Thanks, {form.name.split(' ')[0] || 'there'}.</h3>
              <p>
                Your project details are ready to send. This form isn&rsquo;t
                connected to a live inbox yet — once it&rsquo;s wired up to an
                email service, messages sent here will reach me directly.
              </p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setForm(initialForm)
                  setSubmitted(false)
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="bookTitle">Book title</label>
                  <input
                    id="bookTitle"
                    name="bookTitle"
                    type="text"
                    value={form.bookTitle}
                    onChange={handleChange}
                  />
                </div>

                <div className="field">
                  <label htmlFor="genre">Genre</label>
                  <input
                    id="genre"
                    name="genre"
                    type="text"
                    value={form.genre}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="projectType">Project type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--primary btn--full">
                Start a Project
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
