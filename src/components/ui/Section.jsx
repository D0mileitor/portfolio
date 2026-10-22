import Reveal from './Reveal'

// Cada seção é um "capítulo": aceno à formação em História.
export default function Section({ id, chapter, title, intro, className = '', children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-page">
        <Reveal as="header" className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span>Cap. {chapter}</span>
            <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
          </p>
          <h2
            id={`${id}-title`}
            className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-muted text-pretty sm:text-lg">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
