import { ArrowRight, ChevronDown, Download, Mail } from 'lucide-react'
import { hero, profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'

const mainStack = ['Python', 'Django', 'LangChain', 'OpenAI', 'Claude', 'MongoDB Atlas', 'Docker']

const socials = [
  { href: profile.github, label: 'GitHub', Icon: GithubIcon },
  { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: 'E-mail', Icon: Mail },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-20"
    >
      {/* Fundo: grade suave + brilho dourado */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[min(60rem,140vw)] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
        <div className="order-2 lg:order-1">
          <h1
            className="hero-in font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-balance xs:text-5xl sm:text-6xl xl:text-7xl"
            style={{ '--d': '80ms' }}
          >
            {profile.name.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="text-muted">{profile.name.split(' ').slice(2).join(' ')}</span>
          </h1>

          <p
            className="hero-in mt-6 max-w-xl text-xl leading-snug font-medium text-pretty sm:text-2xl"
            style={{ '--d': '160ms' }}
          >
            <span className="text-accent">{profile.role}</span> · {hero.headline}
          </p>

          <p
            className="hero-in mt-4 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg"
            style={{ '--d': '220ms' }}
          >
            {hero.intro}
          </p>

          <div className="hero-in mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap" style={{ '--d': '280ms' }}>
            <a
              href="#projetos"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent-bg px-6 py-3.5 text-sm font-semibold text-accent-fg shadow-lg shadow-accent/10 transition-opacity hover:opacity-90"
            >
              Ver projetos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cv[0].href}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Download className="size-4" />
              Baixar currículo
            </a>
          </div>

          <div className="hero-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ '--d': '340ms' }}>
            <ul className="flex items-center gap-2" aria-label="Redes">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={label}
                    title={label}
                    className="grid size-11 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-mono text-xs leading-relaxed text-muted">
              <span className="sr-only">Stack principal: </span>
              {mainStack.join(' · ')}
            </p>
          </div>
        </div>

        <div className="hero-in order-1 flex justify-center lg:order-2 lg:justify-end" style={{ '--d': '120ms' }}>
          <div className="relative w-40 xs:w-48 sm:w-60 lg:w-full lg:max-w-sm max-lg:[@media(max-height:32rem)]:w-28">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-accent/50 sm:translate-x-4 sm:translate-y-4"
            />
            <img
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              width="854"
              height="854"
              fetchPriority="high"
              className="relative aspect-square w-full rounded-[2rem] object-cover shadow-2xl shadow-black/20 ring-1 ring-line"
            />
            <div className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-xl backdrop-blur sm:flex lg:-left-8 max-lg:[@media(max-height:32rem)]:hidden">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium">
                Liderando IA na <span className="text-accent">Agenda Assessoria</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent lg:[@media(min-height:44rem)]:block"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  )
}
