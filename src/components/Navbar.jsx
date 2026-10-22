import { useEffect, useState } from 'react'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { nav, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'

// 'inicio' (hero) entra na lista para nenhum link ficar ativo quando se volta ao topo.
const sectionIds = ['inicio', ...nav.map((item) => item.id)]

function Monogram() {
  return (
    <span
      aria-hidden="true"
      className="grid size-9 shrink-0 place-items-center rounded-xl border border-accent/40 bg-accent-soft font-display text-sm font-bold text-accent"
    >
      LO
    </span>
  )
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={isDark ? 'Tema claro' : 'Tema escuro'}
      className="grid size-11 place-items-center rounded-xl text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menu mobile: trava a rolagem do fundo, fecha com Esc e ao voltar para tela grande.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const desktop = window.matchMedia('(min-width: 64rem)')
    const onResize = () => desktop.matches && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <>
      <header
        className={`no-print fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          solid ? 'border-b border-line bg-bg/85 backdrop-blur-lg' : 'border-b border-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <nav aria-label="Principal" className="container-page flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="flex min-w-0 items-center gap-3 rounded-xl" onClick={() => setOpen(false)}>
            <Monogram />
            <span className="truncate font-display text-base font-semibold tracking-tight">{profile.shortName}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'location' : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active === item.id ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 ${
                      active === item.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <a
              href={profile.cv[0].href}
              download
              className="hidden items-center gap-2 rounded-xl bg-accent-bg px-4 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90 sm:inline-flex"
            >
              <Download className="size-4" />
              Currículo
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="grid size-11 place-items-center rounded-xl text-fg transition-colors hover:bg-surface-2 lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile/tablet. Fica fora do <header>: o backdrop-filter dele prenderia este painel fixo dentro dos 64px do header. */}
      <div
        id="menu-mobile"
        inert={!open}
        className={`no-print fixed inset-x-0 bottom-0 z-40 overflow-y-auto overscroll-contain bg-bg transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        style={{ top: 'calc(4rem + env(safe-area-inset-top))' }}
      >
        <div className="container-page flex min-h-full flex-col pt-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li
                key={item.id}
                className={`border-b border-line transition-[opacity,transform] duration-500 ${
                  open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-4 py-4 font-display text-2xl font-semibold sm:text-3xl ${
                    active === item.id ? 'text-accent' : 'text-fg'
                  }`}
                >
                  <span className="font-mono text-xs font-normal text-muted">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-8 xs:flex-row">
            {profile.cv.map((cv, i) => (
              <a
                key={cv.href}
                href={cv.href}
                download
                onClick={() => setOpen(false)}
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${
                  i === 0 ? 'bg-accent-bg text-accent-fg' : 'border border-line text-fg'
                }`}
              >
                <Download className="size-4" />
                {cv.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
