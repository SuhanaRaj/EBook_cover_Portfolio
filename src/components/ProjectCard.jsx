export default function ProjectCard({ project, onOpen, index }) {
  return (
    <article className="project-card" style={{ '--i': index }}>
      <button
        type="button"
        className="project-card__cover-btn"
        onClick={() => onOpen(project)}
        aria-label={`View project: ${project.title}`}
      >
        <span className="project-card__shadow" aria-hidden="true" />
        <img
          src={project.cover}
          alt={`${project.title} — ${project.genre} book cover`}
          loading="lazy"
        />
      </button>

      <div className="project-card__meta">
        <div className="project-card__heading">
          <h3>{project.title}</h3>
          <p className="project-card__genre">{project.genre}</p>
        </div>
        <p className="project-card__desc">{project.description}</p>
        <button
          type="button"
          className="project-card__link"
          onClick={() => onOpen(project)}
        >
          View Project
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </article>
  )
}
