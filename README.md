# Portfólio · Luis Otávio Monteiro Garcia

Portfólio pessoal em **React + Vite + Tailwind CSS v4**: responsivo do celular de 320px ao monitor ultrawide, com tema claro/escuro e deploy como site estático no **Render**.

## Rodando localmente

Requer Node.js 20.19+ (ou 22.12+).

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # gera a pasta dist/
npm run preview        # serve o build em http://localhost:4173
npm run format         # formata o código com Prettier
npm run format:check   # só confere a formatação
```

## Onde editar o conteúdo

Todo o texto do site fica em [`src/data/profile.js`](src/data/profile.js): contatos, apresentação, skills, experiência, projetos, formação e cursos. Não é preciso mexer nos componentes para atualizar o portfólio.

| O quê                                           | Onde                             |
| ----------------------------------------------- | -------------------------------- |
| Textos, links, projetos                         | `src/data/profile.js`            |
| Foto e imagens                                  | `public/images/`                 |
| Currículo para download                         | `public/cv/`                     |
| Cores dos temas claro/escuro                    | variáveis em `src/index.css`     |
| Imagem de compartilhamento (WhatsApp, LinkedIn) | `public/og-image.jpg` (1200×630) |
| URL pública do site (meta tags)                 | `VITE_SITE_URL` em `.env`        |

Os repositórios públicos do GitHub (`D0mileitor`) entram sozinhos na seção **Outros projetos**: o site consulta a API do GitHub no navegador e mostra todo repositório próprio (não fork) que ainda não esteja listado. As estrelas do Maestrinho também vêm de lá.

## Deploy no Render

O repositório já traz um [`render.yaml`](render.yaml) que cria um **Static Site** (gratuito e sem "hibernar" como as instâncias web gratuitas).

1. No Render: **New → Blueprint**, escolha este repositório e confirme.
2. Quando o deploy terminar, confira se a URL gerada (ex.: `https://luis-otavio-portfolio.onrender.com`) é igual à de `VITE_SITE_URL` no [`.env`](.env). Se for diferente, atualize e faça um novo push.

Prefere configurar à mão? **New → Static Site** com:

- **Build Command:** `npm ci && npm run build`
- **Publish Directory:** `dist`
- **Environment:** `NODE_VERSION = 22.12.0`

Cada push na branch `main` publica uma nova versão automaticamente.

## Estrutura

```
public/
  cv/                  currículo em PDF para download
  images/              foto e capturas dos projetos (WebP)
  favicon.svg, apple-touch-icon.png, og-image.jpg, robots.txt
src/
  data/profile.js      todo o conteúdo do site
  components/          seções: Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
  components/ui/       peças reutilizáveis: Section, Reveal, Tag, ícones de marca
  hooks/               tema, animação ao rolar, seção ativa no menu, repositórios do GitHub
  index.css            Tailwind, tokens de cor dos temas e animações
  App.jsx, main.jsx    montagem da página
index.html             meta tags (SEO e compartilhamento) e script que aplica o tema antes de pintar
render.yaml            configuração do deploy no Render
```
