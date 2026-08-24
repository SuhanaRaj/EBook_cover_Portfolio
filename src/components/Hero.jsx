import { projects } from '../data/projects'

const heroCover = projects.find((p) => p.id === 'the-wealth-habit')

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Suhana Raj — Book Cover Designer</p>
          <h1 className="hero__headline">
            Book covers that make <em>stories</em> stand out.
          </h1>
          <p className="hero__sub">
            Professional eBook and KDP book cover design for authors and
            self-publishers.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let&rsquo;s Work Together
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__shelf" aria-hidden="true" />
          <figure className="hero__cover">
            <img
              src={heroCover.cover}
              alt={`${heroCover.title} — book cover design by Suhana Raj`}
              width="1023"
              height="1537"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
