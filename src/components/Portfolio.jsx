import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="work" className="portfolio">
      <div className="section-inner">
        <Reveal as="div" className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Portfolio projects</h2>
          <p className="section-heading__note">
            A set of self-directed sample covers designed to explore
            different genres — shown here as portfolio work rather than
            commissioned client projects.
          </p>
        </Reveal>

        <div className="portfolio__shelf-line" aria-hidden="true" />

        <div className="portfolio__grid">
          {projects.map((project, i) => (
            <Reveal as="div" key={project.id} delay={i * 70}>
              <ProjectCard
                project={project}
                index={i}
                onOpen={setActiveProject}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}
