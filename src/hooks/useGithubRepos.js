import { useEffect, useState } from 'react'

const CACHE_TTL = 60 * 60 * 1000 // 1 hora: a API pública do GitHub permite 60 requisições/hora por IP.

function readCache(key) {
  try {
    const cached = JSON.parse(sessionStorage.getItem(key))
    if (cached && Date.now() - cached.at < CACHE_TTL) return cached.repos
  } catch {
    // Cache indisponível ou corrompido: busca de novo.
  }
  return null
}

function writeCache(key, repos) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), repos }))
  } catch {
    // Sem armazenamento: segue sem cache.
  }
}

// Busca os repositórios públicos do usuário. Se a API falhar, devolve lista vazia e o site segue normal.
export function useGithubRepos(user) {
  const key = `gh-repos:${user}`
  const [state, setState] = useState(() => {
    const repos = readCache(key)
    return { repos: repos || [], loading: !repos }
  })

  useEffect(() => {
    if (!state.loading) return
    const controller = new AbortController()

    fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`GitHub ${res.status}`))))
      .then((data) => {
        const repos = data.map((r) => ({
          name: r.name,
          description: r.description,
          url: r.html_url,
          homepage: r.homepage,
          language: r.language,
          stars: r.stargazers_count,
          fork: r.fork,
          archived: r.archived,
          topics: r.topics || [],
          pushedAt: r.pushed_at,
        }))
        writeCache(key, repos)
        setState({ repos, loading: false })
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ repos: [], loading: false })
      })

    return () => controller.abort()
  }, [key, user, state.loading])

  return state
}
