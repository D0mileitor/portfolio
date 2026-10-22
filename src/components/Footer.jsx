import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line pb-[max(2rem,env(safe-area-inset-bottom))] pt-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-center text-sm text-muted sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}
          <span className="hidden sm:inline"> · {profile.location}</span>
        </p>
        <a
          href="#inicio"
          className="no-print inline-flex min-h-11 items-center gap-2 rounded-xl px-3 transition-colors hover:text-accent"
        >
          Voltar ao topo
          <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  )
}
