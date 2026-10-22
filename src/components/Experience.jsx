import { Briefcase, History } from 'lucide-react'
import { earlierCareer, experience } from '../data/profile'
import Reveal from './ui/Reveal'
import Section from './ui/Section'
import { TagList } from './ui/Tag'

export default function Experience() {
  return (
    <Section id="experiencia" chapter="03" title="Experiência">
      <ol className="relative space-y-6 border-l border-line pl-6 sm:space-y-8 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.role}-${job.period}`} delay={i * 80} className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-6 -left-[calc(1.5rem+5px)] size-2.5 rounded-full ring-4 ring-bg sm:-left-[calc(2.5rem+5px)] ${
                job.current ? 'bg-accent' : 'bg-line'
              }`}
            />
            <article className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{job.role}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                    <Briefcase className="size-4 shrink-0" aria-hidden="true" />
                    <span className="font-medium text-fg">{job.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.place}</span>
                  </p>
                </div>
                <p
                  className={`shrink-0 font-mono text-xs sm:pt-1.5 sm:text-sm ${job.current ? 'text-accent' : 'text-muted'}`}
                >
                  {job.period}
                </p>
              </header>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted sm:text-base">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                    <span className="text-pretty">{b}</span>
                  </li>
                ))}
              </ul>
              <TagList items={job.tags} tone="accent" className="mt-5" label="Tecnologias" />
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-14">
        <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase">
          <History className="size-4" aria-hidden="true" />
          Antes da tecnologia
        </h3>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {earlierCareer.map((job) => (
            <li key={job.role} className="rounded-2xl border border-dashed border-line p-5">
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <p className="mt-2 font-semibold leading-snug">{job.role}</p>
              <p className="mt-1 text-sm text-accent">{job.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{job.detail}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
