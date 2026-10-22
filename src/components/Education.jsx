import { BookOpen, GraduationCap, Languages } from 'lucide-react'
import { courses, education, languages } from '../data/profile'
import Reveal from './ui/Reveal'
import Section from './ui/Section'

function BlockTitle({ Icon, children }) {
  return (
    <h3 className="mb-5 flex items-center gap-2.5 font-display text-xl font-semibold">
      <Icon className="size-5 text-accent" aria-hidden="true" />
      {children}
    </h3>
  )
}

function Dots({ score, max = 5 }) {
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={`size-2 rounded-full ${i < score ? 'bg-accent' : 'bg-line'}`} />
      ))}
    </span>
  )
}

export default function Education() {
  return (
    <Section id="formacao" chapter="05" title="Formação">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <BlockTitle Icon={GraduationCap}>Acadêmica</BlockTitle>
          <ol className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
            {education.map((e) => (
              <li key={e.title} className="flex gap-4 p-4 sm:gap-6 sm:p-5">
                <span className="w-11 shrink-0 pt-0.5 font-mono text-sm text-muted">{e.year}</span>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug text-pretty">
                    {e.title}
                    {e.tech && (
                      <span className="ml-2 inline-block rounded-full bg-accent-soft px-2 py-0.5 align-middle font-mono text-[0.65rem] font-medium text-accent">
                        TI
                      </span>
                    )}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{e.school}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="space-y-12">
          <Reveal delay={80}>
            <BlockTitle Icon={Languages}>Idiomas</BlockTitle>
            <ul className="grid grid-cols-1 gap-3 xs:grid-cols-2 lg:grid-cols-1">
              {languages.map((l) => (
                <li key={l.name} className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold">{l.name}</span>
                    <Dots score={l.score} />
                  </div>
                  <p className="mt-1 text-sm text-muted">{l.level}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <BlockTitle Icon={BookOpen}>Cursos complementares</BlockTitle>
            <ul className="space-y-3">
              {courses.map((c) => (
                <li key={c.title} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 text-sm">
                  <span className="font-medium">{c.title}</span>
                  <span className="font-mono text-xs text-muted">{c.school}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
