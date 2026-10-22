import { useCallback, useState } from 'react'

// O tema inicial já foi aplicado por um script no index.html; aqui só lemos e alternamos.
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Sem armazenamento (aba privada etc.): o tema vale só para esta visita.
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
