// Todo o conteúdo do portfólio fica aqui. Para atualizar o site, edite este arquivo.

export const profile = {
  name: 'Luis Otávio Monteiro Garcia',
  shortName: 'Luis Otávio',
  role: 'Desenvolvedor Full Stack',
  location: 'Cuiabá, MT',
  photo: '/images/luis.webp',
  email: 'luisotaviomonteirogarcia@gmail.com',
  phones: [{ label: '(65) 99670-3357', whatsapp: '5565996703357' }],
  github: 'https://github.com/D0mileitor',
  githubUser: 'D0mileitor',
  linkedin: 'https://www.linkedin.com/in/luis-ot%C3%A1vio-monteiro-garcia-88b159268',
  cv: [{ label: 'Baixar currículo (PDF)', href: '/cv/curriculo-luis-otavio-monteiro-garcia.pdf' }],
  // Ano em que começou na área de tecnologia (usado para calcular "anos em tecnologia").
  techSince: 2023,
}

export const hero = {
  headline: 'Integro IA generativa a processos reais de empresa, do requisito ao deploy.',
  intro:
    'Python/Django, LangChain e RAG sobre MongoDB Atlas Vector Search. Na Agenda Assessoria, lidero o Agenda Connect, plataforma que usa LLMs (OpenAI e Claude) para analisar processos previdenciários e gerar resumos, pareceres, laudos e despachos.',
}

export const about = {
  paragraphs: [
    'Sou formado em História pela UNEMAT e dei aula na rede estadual de Mato Grosso antes de migrar para a tecnologia. Em 2023 entrei na Agenda Assessoria como Analista de Requisitos e, em 2024, passei a desenvolvedor full stack com foco em IA.',
    'Hoje sou líder técnico do Agenda Connect, que coloca LLMs da OpenAI e do Claude (Anthropic) para trabalhar sobre processos previdenciários reais, com Django, LangChain e RAG sobre MongoDB Atlas Vector Search. Atuo de ponta a ponta: requisitos, arquitetura, modelagem de dados, backend, frontend, testes e deploy.',
    'A experiência como analista de requisitos me ajuda a traduzir processos de negócio em automações com IA, e a sala de aula me deu a base de comunicação que uso para explicar essas soluções a públicos não técnicos. Tenho duas pós-graduações na área e inglês fluente (Cambridge FCE).',
  ],
  highlights: [
    { value: 'techYears', label: 'anos em tecnologia' },
    { value: '2', label: 'pós-graduações em TI' },
    { value: 'FCE', label: 'inglês fluente · Cambridge' },
  ],
}

export const skills = [
  {
    title: 'IA e LLMs',
    icon: 'brain',
    items: [
      'OpenAI API',
      'Claude API',
      'LangChain',
      'Ollama',
      'RAG',
      'Embeddings',
      'Atlas Vector Search',
      'Busca semântica',
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['Python', 'Django', 'Django Channels', 'Daphne', 'WebSockets', 'Node.js', 'NestJS', 'C# / ASP.NET'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    items: ['JavaScript', 'TypeScript', 'React', 'Vue.js', 'Electron', 'HTML', 'CSS'],
  },
  {
    title: 'Dados',
    icon: 'database',
    items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'SQLite', 'Power BI'],
  },
  {
    title: 'Infra e qualidade',
    icon: 'wrench',
    items: ['Docker', 'AWS S3', 'Git', 'Gitflow', 'GitHub Actions', 'Vitest', 'Playwright'],
  },
  {
    title: 'Segurança e práticas',
    icon: 'shield',
    items: ['SSO Microsoft', 'Django-Allauth', 'Django-Axes', 'Clean Architecture', 'SCRUM', 'Requisitos'],
  },
]

export const experience = [
  {
    role: 'Desenvolvedor Full Stack (foco em IA)',
    company: 'Agenda Assessoria',
    place: 'Cuiabá, MT',
    period: '2024 — atual',
    current: true,
    bullets: [
      'Lidero tecnicamente o Agenda Connect, plataforma que recebe documentos e processos previdenciários do SISPREV e de outros sistemas e usa IA para gerar resumos, pareceres, laudos e despachos.',
      'Arquitetei e coloquei em produção a solução com Django, LangChain, PostgreSQL e MongoDB, integrando modelos da OpenAI e, mais recentemente, do Claude (Anthropic).',
      'Implementei o pipeline de RAG: documentos dos clientes e dados de servidores públicos vindos do SISPREV são divididos em trechos e indexados com embeddings no MongoDB Atlas Vector Search.',
      'Desenvolvi o chat em tempo real do assistente de IA (Django Channels, Daphne e WebSockets), que responde apenas com os dados de cada cliente; conversas no MongoDB e arquivos no AWS S3.',
      'Construí o Painel Agenda Censo (Django + SQL Server, SSO Microsoft e Power BI) e rotinas que sincronizam dados de APIs externas entre MongoDB e SQL Server.',
    ],
    tags: ['Python', 'Django', 'LangChain', 'OpenAI', 'Claude', 'MongoDB Atlas', 'PostgreSQL', 'WebSockets', 'AWS S3'],
  },
  {
    role: 'Analista de Requisitos',
    company: 'Agenda Assessoria',
    place: 'Cuiabá, MT',
    period: '2023 — 2024',
    bullets: [
      'Levantei e documentei requisitos de software, fazendo a ponte entre usuários e time de desenvolvimento.',
      'Dei suporte e manutenção a sistemas em .NET/C#, Node.js, Vue.js e MongoDB, incluindo o sistema legado ConsigPrev (NestJS, Vue.js e SQL Server).',
    ],
    tags: ['.NET', 'C#', 'Node.js', 'NestJS', 'Vue.js', 'MongoDB', 'SQL Server'],
  },
]

// Trajetória antes da tecnologia, exibida de forma compacta abaixo da experiência.
export const earlierCareer = [
  {
    role: 'Professor de História',
    company: 'SEDUC-MT',
    period: '2020 — 2022',
    detail: 'Escola Estadual Tancredo de Almeida Neves, Cuiabá.',
  },
  {
    role: 'Secretário Escolar',
    company: 'Prefeitura Municipal de Cáceres',
    period: '2019 — 2020',
    detail: 'Escola Municipal Raquel Ramão da Silva.',
  },
  {
    role: 'Estagiário Administrativo',
    company: 'UNEMAT',
    period: '2016 — 2018',
    detail: 'Pró-reitoria de Administração, Diretoria de Recrutamento e Seleção.',
  },
]

// Projeto em destaque, com imagens. `repo` é o nome no GitHub (usado para buscar estrelas ao vivo).
export const featuredProject = {
  name: 'Maestrinho',
  repo: 'Maestrinho',
  icon: '/images/maestrinho-icon.webp',
  tagline: 'Orquestre agentes de IA de código num canvas infinito.',
  description:
    'App desktop open source que orquestra agentes de IA de código (Claude Code, Codex, Gemini CLI e outros) num canvas. Os agentes trocam mensagens e revisam o trabalho uns dos outros, e cada conexão define o que cada agente pode acessar. 100% local, sem conta e sem telemetria.',
  highlights: [
    'CLI próprio (orq) para os agentes trocarem mensagens, lerem a tela uns dos outros e registrarem progresso em notas Markdown.',
    'Checkpoints git por turno e isolamento em git worktree, para voltar atrás e separar frentes de trabalho com segurança.',
    'API local com token por terminal: cada agente só acessa o que está conectado a ele.',
    'Cerca de 1.200 testes com Vitest, E2E com Playwright e CI no GitHub Actions.',
  ],
  stack: ['TypeScript', 'React', 'Electron', 'Vitest', 'Playwright', 'GitHub Actions'],
  meta: ['MIT', 'Windows · Linux', 'v0.2.6-beta'],
  url: 'https://github.com/D0mileitor/Maestrinho',
  images: [
    {
      src: '/images/maestrinho-canvas.webp',
      label: 'Canvas',
      alt: 'Canvas do Maestrinho com três terminais (líder, dev e revisor) conectados entre si e a uma nota de plano.',
    },
    {
      src: '/images/maestrinho-escritorio.webp',
      label: 'Escritório',
      alt: 'Visão Escritório do Maestrinho em pixel art: uma mesa por agente, tapetes entre os conectados e a nota como quadro.',
    },
  ],
}

// Projetos profissionais (código privado da empresa).
export const workProjects = [
  {
    name: 'Agenda Connect',
    kind: 'IA · LLMs e RAG',
    description:
      'Plataforma que recebe documentos e processos previdenciários do SISPREV e de outros sistemas e usa LLMs (OpenAI e Claude) para gerar resumos, pareceres, laudos e despachos. RAG com documentos dos clientes e dados de servidores públicos indexados no MongoDB Atlas Vector Search.',
    stack: ['Django', 'LangChain', 'OpenAI', 'Claude', 'MongoDB Atlas', 'PostgreSQL'],
  },
  {
    name: 'WebSocket Connect',
    kind: 'Backend · Tempo real',
    description:
      'Chat em tempo real do assistente de IA do Agenda Connect: recupera os trechos mais relevantes para cada pergunta e responde apenas com os dados daquele cliente. Conversas no MongoDB e arquivos no AWS S3.',
    stack: ['Django Channels', 'Daphne', 'WebSockets', 'MongoDB', 'AWS S3'],
  },
  {
    name: 'Painel Agenda Censo',
    kind: 'BI · Web',
    description:
      'Portal com cards dinâmicos vindos do banco e painéis Power BI embutidos, acessíveis só de dentro do site. Login com SSO Microsoft e Django-Allauth, e proteção contra força bruta com Django-Axes.',
    stack: ['Django', 'SQL Server', 'Power BI', 'SSO Microsoft', 'Django-Axes'],
  },
  {
    name: 'Django + MongoDB ETL',
    kind: 'Backend · Dados',
    description: 'Rotinas que extraem dados de APIs externas e sincronizam as bases entre MongoDB e SQL Server.',
    stack: ['Django', 'MongoDB', 'SQL Server', 'APIs REST'],
  },
  {
    name: 'ConsigPrev',
    kind: 'Manutenção · Equipe',
    description:
      'Suporte e manutenção do sistema legado junto à equipe: backend em NestJS, frontend em Vue.js e SQL Server.',
    stack: ['Node.js', 'NestJS', 'Vue.js', 'SQL Server'],
  },
]

// Outros projetos publicados (fora da empresa).
export const otherProjects = [
  {
    name: 'WebHuubs',
    kind: 'Web · Publicado',
    description: 'Sistema de gerenciamento de webhooks, publicado e acessível na web.',
    url: 'https://webhuubs.com.br',
    domain: 'webhuubs.com.br',
  },
]

// Contribuições em projetos open source de outras pessoas.
export const contributions = [
  {
    name: 'LLM-IA-RAG',
    upstream: 'theluffyrossa/LLM-IA-RAG',
    description:
      'Chatbot que responde sobre PDFs com RAG (Streamlit, Ollama/OpenAI, Qdrant) e gera fluxogramas. Minha contribuição: Dockerfile e docker-compose para rodar a aplicação isolada, com o Qdrant sempre ativo.',
    stack: ['Python', 'Docker', 'Qdrant', 'Streamlit'],
    url: 'https://github.com/D0mileitor/LLM-IA-RAG',
  },
]

export const education = [
  { year: '2024', title: 'Pós-graduação em Desenvolvimento Web Full Stack', school: 'Anhanguera', tech: true },
  { year: '2023', title: 'Pós-graduação em Análise e Desenvolvimento de Sistemas', school: 'Anhanguera', tech: true },
  { year: '2021', title: 'Pós-graduação em História da Guerra', school: 'FAVENI' },
  { year: '2018', title: 'Licenciatura Plena em História', school: 'UNEMAT' },
  { year: '2016', title: 'Inglês pós-avançado', school: 'CNA' },
  { year: '2013', title: 'Técnico em Segurança do Trabalho', school: 'SENAI' },
]

export const courses = [
  { title: 'Python Impressionador', school: 'Hashtag Treinamentos' },
  { title: 'Git do Básico ao Avançado', school: 'Udemy' },
  { title: 'Introdução ao JavaScript', school: 'Udemy' },
  { title: 'Administração de Recursos Humanos', school: 'IFSul' },
  { title: 'Introdução à Administração', school: 'IFSul' },
  { title: 'Cargos, Salários e Benefícios', school: 'IFSul' },
  { title: 'Recrutamento e Seleção', school: 'IFSul' },
]

export const languages = [
  { name: 'Português', level: 'Nativo', score: 5 },
  { name: 'Inglês', level: 'Fluente · FCE Cambridge', score: 4 },
]

export const nav = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
]
