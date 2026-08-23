import Reveal from './Reveal'

const POINTS = [
  {
    title: 'Genre-aware design',
    description:
      'Every cover starts with what readers in your genre already recognize and respond to.',
  },
  {
    title: 'Clean and professional typography',
    description:
      'Type treatments chosen for legibility at thumbnail size, not just visual flair.',
  },
  {
    title: 'Strong visual storytelling',
    description:
      'Imagery and composition chosen to reflect your book\u2019s tone before a reader opens the first page.',
  },
  {
    title: 'Clear communication and revisions',
    description:
      'A straightforward process with room for feedback, so the final cover feels like yours.',
  },
]

export default function WhyWorkWithMe() {
  return (
    <section className="why">
      <div className="section-inner">
        <Reveal as="div" className="section-heading">
          <p className="eyebrow">Why Work With Me</p>
          <h2>What you can expect</h2>
        </Reveal>

        <div className="why__grid">
          {POINTS.map((point, i) => (
            <Reveal as="div" key={point.title} delay={i * 70} className="why__item">
              <span className="why__mark" aria-hidden="true" />
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
