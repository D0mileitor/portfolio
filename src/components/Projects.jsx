import { useState } from 'react'
import { ArrowUpRight, GitFork, Globe, Lock, Star } from 'lucide-react'
import { contributions, featuredProject, otherProjects, profile, workProjects } from '../data/profile'
import { useGithubRepos } from '../hooks/useGithubRepos'
import { GithubIcon } from './ui/BrandIcons'
import Reveal from './ui/Reveal'
import Section from './ui/Section'
import { TagList } from './ui/Tag'

function SubHeading({ children, note }) {
  return (
    <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
      <h3 className="font-display text-2xl font-semibold sm:text-3xl">{children}</h3>
      {note && <p className="text-sm text-muted">{note}</p>}
    </div>
  )
}

function Featured({ stars }) {
  const p = featuredProject
  const [shot, setShot] = useState(0)

  return (
    <Reveal as="article" className="rounded-3xl border border-line bg-surface p-3 sm:p-5 lg:p-7">
      {/* Celular: imagem → texto → destaques → stack. Desktop: imagem e destaques à esquerda, texto e stack à direita. */}
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-8">
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-line bg-bg">
            {p.images.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                aria-hidden={shot !== i}
                width="1600"
                height="960"
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
                  shot === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div role="group" aria-label="Capturas de tela" className="mt-3 flex gap-2">
            {p.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setShot(i)}
                aria-pressed={shot === i}
                className={`min-h-11 flex-1 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                  shot === i ? 'border-accent/50 bg-accent-soft text-accent' : 'border-line text-muted hover:text-fg'
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-2 sm:px-3 lg:col-start-2 lg:row-start-1 lg:px-0 lg:pt-1">
          <div className="flex items-center gap-4">
            <img src={p.icon} alt="" width="56" height="56" loading="lazy" className="size-12 rounded-xl sm:size-14" />
            <div className="min-w-0">
              <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Projeto em destaque</p>
              <h3 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">{p.name}</h3>
            </div>
          </div>

          <p className="mt-5 text-lg leading-snug font-medium text-pretty">{p.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted text-pretty sm:text-base">{p.description}</p>
        </div>

        <ul className="space-y-2.5 px-2 text-sm leading-relaxed text-muted sm:px-3 lg:col-start-1 lg:row-start-2 lg:px-1">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
              <span className="text-pretty">{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col px-2 pb-2 sm:px-3 sm:pb-3 lg:col-start-2 lg:row-start-2 lg:p-0">
          <TagList items={p.stack} tone="accent" label="Stack" />

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
            {p.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
            {stars > 0 && (
              <span className="inline-flex items-center gap-1">
                <Star className="size-3.5" aria-hidden="true" />
                {stars}
                <span className="sr-only">estrelas no GitHub</span>
              </span>
            )}
          </div>

          <div className="mt-auto pt-7">
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-bg px-5 py-3.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90 xs:w-auto"
            >
              <GithubIcon className="size-4" />
              Ver no GitHub
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Card({ title, kind, description, stack, footer, href, delay, className = '' }) {
  const Wrapper = href ? 'a' : 'div'
  return (
    <Reveal as="li" delay={delay} className={`h-full ${className}`}>
      <Wrapper
        {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
        className={`group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-colors sm:p-6 ${
          href ? 'hover:border-accent/50' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            {kind && <p className="font-mono text-xs text-accent">{kind}</p>}
            <h4 className="mt-1 font-display text-xl font-semibold break-words">{title}</h4>
          </div>
          {href && (
            <ArrowUpRight
              aria-hidden="true"
              className="size-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{description}</p>
        {stack?.length > 0 && <TagList items={stack} className="mt-5" label="Stack" />}
        {footer && <div className="mt-auto pt-5 font-mono text-xs text-muted">{footer}</div>}
      </Wrapper>
    </Reveal>
  )
}

export default function Projects() {
  const { repos } = useGithubRepos(profile.githubUser)
  const featuredRepo = repos.find((r) => r.name.toLowerCase() === featuredProject.repo.toLowerCase())

  // Repositórios próprios que ainda não aparecem acima entram aqui automaticamente.
  const shown = new Set([featuredProject.repo, ...contributions.map((c) => c.name)].map((n) => n.toLowerCase()))
  const moreRepos = repos.filter((r) => !r.fork && !r.archived && !shown.has(r.name.toLowerCase()))

  return (
    <Section
      id="projetos"
      chapter="04"
      title="Projetos"
      intro="Um projeto open source autoral, os sistemas que construo na empresa e outros projetos publicados."
      className="bg-surface-2/40"
    >
      <Featured stars={featuredRepo?.stars ?? 0} />

      <div className="mt-16 sm:mt-20">
        <SubHeading
          note={
            <span className="inline-flex items-center gap-1.5">
              <Lock className="size-3.5" aria-hidden="true" />
              Código privado da empresa
            </span>
          }
        >
          Na Agenda Assessoria
        </SubHeading>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {workProjects.map((p, i) => (
            <Card
              key={p.name}
              title={p.name}
              kind={p.kind}
              description={p.description}
              stack={p.stack}
              delay={(i % 3) * 80}
              // O primeiro (projeto principal) ocupa duas colunas: com 5 cards, a grade fecha sem buracos.
              className={i === 0 ? 'sm:col-span-2' : ''}
            />
          ))}
        </ul>
      </div>

      <div className="mt-16 sm:mt-20">
        <SubHeading note="">Outros projetos</SubHeading>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {otherProjects.map((p, i) => (
            <Card
              key={p.name}
              title={p.name}
              kind={p.kind}
              description={p.description}
              href={p.url}
              delay={(i % 3) * 80}
              footer={
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="size-3.5" aria-hidden="true" />
                  {p.domain}
                </span>
              }
            />
          ))}
          {moreRepos.map((r, i) => (
            <Card
              key={r.name}
              title={r.name}
              kind={r.language}
              description={r.description || 'Repositório público no GitHub.'}
              stack={r.topics.slice(0, 5)}
              href={r.homepage || r.url}
              delay={((otherProjects.length + i) % 3) * 80}
              footer={
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3.5" aria-hidden="true" /> {r.stars}
                </span>
              }
            />
          ))}
          {contributions.map((c, i) => (
            <Card
              key={c.name}
              title={c.name}
              kind="Contribuição"
              description={c.description}
              stack={c.stack}
              href={c.url}
              delay={((otherProjects.length + moreRepos.length + i) % 3) * 80}
              footer={
                <span className="inline-flex items-center gap-1.5">
                  <GitFork className="size-3.5" aria-hidden="true" />
                  fork de {c.upstream}
                </span>
              }
            />
          ))}
          <Reveal as="li" className="h-full">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full min-h-44 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line p-6 text-center transition-colors hover:border-accent/50"
            >
              <GithubIcon className="size-8 text-muted transition-colors group-hover:text-accent" />
              <span className="font-semibold">Ver perfil completo</span>
              <span className="font-mono text-xs text-muted">github.com/{profile.githubUser}</span>
            </a>
          </Reveal>
        </ul>
      </div>
    </Section>
  )
}
