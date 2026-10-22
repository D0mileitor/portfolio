import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './ui/BrandIcons'
import Reveal from './ui/Reveal'
import Section from './ui/Section'

function CopyEmail() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'E-mail copiado' : 'Copiar e-mail'}
      title="Copiar e-mail"
      className="grid size-12 shrink-0 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      {copied ? <Check className="size-5 text-accent" /> : <Copy className="size-5" />}
      <span className="sr-only" aria-live="polite">
        {copied ? 'E-mail copiado' : ''}
      </span>
    </button>
  )
}

const channels = [
  {
    label: 'WhatsApp',
    value: profile.phones[0].label,
    href: `https://wa.me/${profile.phones[0].whatsapp}`,
    Icon: WhatsappIcon,
  },
  { label: 'LinkedIn', value: 'Luis Otávio Garcia', href: profile.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', value: `@${profile.githubUser}`, href: profile.github, Icon: GithubIcon },
]

export default function Contact() {
  return (
    <Section
      id="contato"
      chapter="06"
      title="Vamos conversar?"
      intro="Quer falar sobre um projeto, uma vaga ou sobre Python, Django e IA aplicada? O jeito mais rápido de me encontrar é por e-mail ou WhatsApp."
      className="bg-surface-2/40"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-5">
        <Reveal className="flex flex-col rounded-3xl border border-line bg-surface p-5 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-accent uppercase">
              <Mail className="size-4" aria-hidden="true" />
              E-mail
            </p>
            <CopyEmail />
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 font-display text-base font-semibold [overflow-wrap:anywhere] transition-colors hover:text-accent xs:text-xl sm:text-2xl"
          >
            {/* <wbr> deixa a quebra de linha cair no @ quando o e-mail não cabe. */}
            {profile.email.split('@')[0]}@<wbr />
            {profile.email.split('@')[1]}
          </a>

          <div className="mt-8 border-t border-line pt-6 lg:mt-auto">
            <p className="text-sm text-muted">Prefere ler com calma? Baixe o currículo:</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              {profile.cv.map((cv, i) => (
                <a
                  key={cv.href}
                  href={cv.href}
                  download
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90 ${
                    i === 0 ? 'bg-accent-bg text-accent-fg' : 'border border-line hover:border-accent/50'
                  }`}
                >
                  <Download className="size-4" />
                  {cv.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4">
          {channels.map(({ label, value, href, Icon }, i) => (
            <Reveal as="li" key={label} delay={80 + i * 80}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-accent/50 sm:p-5"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-muted">{label}</span>
                  <span className="block truncate font-semibold">{value}</span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
