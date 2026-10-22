import { about, profile } from '../data/profile'
import Reveal from './ui/Reveal'
import Section from './ui/Section'

function highlightValue(value) {
  if (value === 'techYears') return `${Math.max(1, new Date().getFullYear() - profile.techSince)}+`
  return value
}

export default function About() {
  return (
    <Section id="sobre" chapter="01" title="Da sala de aula ao código">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
          {about.paragraphs.map((text, i) => (
            <Reveal as="p" key={i} delay={i * 80} className={i === 0 ? 'text-fg' : undefined}>
              {text}
            </Reveal>
          ))}
        </div>

        <ul className="grid grid-cols-1 gap-3 xs:grid-cols-3 lg:grid-cols-1 lg:gap-4">
          {about.highlights.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              delay={120 + i * 80}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 xs:flex-col xs:items-start xs:gap-1 xs:p-5 sm:p-6 lg:flex-row lg:items-center lg:gap-5"
            >
              <span className="min-w-20 font-display text-4xl font-semibold text-accent xs:min-w-0 sm:text-5xl lg:min-w-28">
                {highlightValue(item.value)}
              </span>
              <span className="text-sm leading-snug text-muted">{item.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
