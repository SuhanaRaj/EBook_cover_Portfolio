import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner about__grid">
        <Reveal as="div" className="about__label-col">
          <p className="eyebrow">About</p>
          <span className="about__quote-mark" aria-hidden="true">
            &ldquo;
          </span>
        </Reveal>

        <Reveal as="div" delay={80} className="about__text-col">
          <p className="about__lede">
            I&rsquo;m Suhana Raj, an emerging freelance book cover designer
            focused on creating visually compelling covers that communicate a
            book&rsquo;s genre, mood, and story at first glance.
          </p>
          <p className="about__body">
            I enjoy combining strong typography, imagery, composition, and
            visual storytelling to create covers that look professional both
            on a bookshelf and as a small online thumbnail.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
