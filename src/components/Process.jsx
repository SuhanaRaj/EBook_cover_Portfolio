import Reveal from './Reveal'

const STEPS = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the book, genre, audience, and mood.',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Develop a visual direction and cover concept.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Combine imagery, typography, composition, and color.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'Make revisions and prepare the final cover for digital/print use.',
  },
]

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="section-inner">
        <Reveal as="div" className="section-heading section-heading--light">
          <p className="eyebrow">Design Process</p>
          <h2>How a cover comes together</h2>
        </Reveal>

        <ol className="process__list">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 90} className="process__step">
              <span className="process__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
