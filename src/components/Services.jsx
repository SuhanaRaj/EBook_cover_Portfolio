import Reveal from './Reveal'

const SERVICES = [
  {
    label: 'Digital',
    title: 'eBook Cover Design',
    description:
      'Covers optimized to read clearly and stand out as a small thumbnail across Amazon, Apple Books, and other digital storefronts.',
  },
  {
    label: 'Amazon KDP',
    title: 'KDP Book Cover Design',
    description:
      'Full-specification covers built to KDP\u2019s trim sizes and file requirements, ready for upload without extra rework.',
  },
  {
    label: 'Print',
    title: 'Paperback & Print Covers',
    description:
      'Front, spine, and back layouts designed together, with bleed, margins, and spine width calculated for your exact page count.',
  },
  {
    label: 'By genre',
    title: 'Genre-Specific Cover Design',
    description:
      'Covers built around the visual language readers already expect from your genre — so the right audience recognizes it instantly.',
  },
  {
    label: 'Typographic',
    title: 'Typography & Minimalist Covers',
    description:
      'Type-led covers for when the strongest concept is a confident title treatment rather than a photographic scene.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-inner">
        <Reveal as="div" className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>What I can design for you</h2>
        </Reveal>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <Reveal
              as="article"
              className="service-card"
              key={service.title}
              delay={i * 60}
            >
              <p className="service-card__label">{service.label}</p>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
