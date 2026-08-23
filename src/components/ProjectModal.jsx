import { useEffect, useRef } from 'react'

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    closeBtnRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="modal-backdrop"
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={dialogRef}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          ref={closeBtnRef}
          aria-label="Close project"
        >
          &times;
        </button>

        <div className="modal__grid">
          <div className="modal__cover">
            <img
              src={project.cover}
              alt={`${project.title} — full book cover`}
            />
          </div>

          <div className="modal__details">
            <p className="eyebrow">{project.genre}</p>
            <h2 id="modal-title">{project.title}</h2>

            <dl className="modal__facts">
              <div>
                <dt>Design concept</dt>
                <dd>{project.description}</dd>
              </div>
              <div>
                <dt>Typography approach</dt>
                <dd>{project.typography}</dd>
              </div>
              <div>
                <dt>Design approach</dt>
                <dd>{project.approach}</dd>
              </div>
              <div>
                <dt>Color &amp; mood</dt>
                <dd>{project.mood}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
