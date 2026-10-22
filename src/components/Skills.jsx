import { Brain, Database, LayoutTemplate, Server, ShieldCheck, Wrench } from 'lucide-react'
import { skills } from '../data/profile'
import Reveal from './ui/Reveal'
import Section from './ui/Section'
import { TagList } from './ui/Tag'

const icons = {
  server: Server,
  brain: Brain,
  layout: LayoutTemplate,
  database: Database,
  wrench: Wrench,
  shield: ShieldCheck,
}

export default function Skills() {
  return (
    <Section
      id="skills"
      chapter="02"
      title="Ferramentas do ofício"
      intro="O que uso no dia a dia para levar um sistema da conversa com o cliente até produção."
      className="bg-surface-2/40"
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {skills.map((group, i) => {
          const Icon = icons[group.icon]
          return (
            <Reveal
              as="li"
              key={group.title}
              delay={(i % 3) * 80}
              className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/40 sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              </div>
              <TagList items={group.items} label={group.title} />
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
