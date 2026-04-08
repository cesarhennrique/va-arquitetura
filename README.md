# VA Arquitetura — Site Institucional

Site institucional desenvolvido para o escritório **VA Arquitetura**, com foco em design elegante, animações suaves e experiência mobile-first.

---

## ✨ Funcionalidades

- **Hero animado** com fade-in ao carregar a página
- **Portfólio com modal** — clique em qualquer projeto para ver fotos, descrição, área e ano
- **Galeria de imagens** com troca animada dentro do modal
- **Formulário de contato** integrado ao WhatsApp — ao enviar, abre conversa com mensagem pré-formatada
- **Animações de scroll** com Framer Motion em todas as seções
- **Menu hamburguer** no mobile com animação suave
- **Design responsivo** — funciona em desktop, tablet e celular
- **Scroll suave** entre seções via navbar

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18+ | Framework principal |
| TypeScript | 5+ | Tipagem estática |
| Tailwind CSS | 3 | Estilização |
| Framer Motion | latest | Animações |
| Vite | 5+ | Build tool |

---

## 📁 Estrutura de Pastas

```
va-arquitetura/
├── public/
│   └── images/               # Todas as imagens do site
│       ├── ambientesala1.jpeg
│       ├── ambientesala2.jpeg
│       ├── ambientesala3.jpeg
│       ├── ambientesala4.jpeg
│       ├── ambientesala5.jpeg
│       ├── ambientequarto1.jpeg
│       ├── ambientequarto2.jpeg
│       ├── ambientebanheiro.jpeg
│       ├── ceos1.jpeg
│       ├── ceos2.jpeg
│       └── logosemfundo.png
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Navegação fixa + menu mobile
│   │   ├── Hero.tsx           # Seção inicial com animação
│   │   ├── Portfolio.tsx      # Grid de projetos + modal
│   │   ├── Services.tsx       # Seção de serviços
│   │   ├── About.tsx          # Sobre o escritório + stats
│   │   ├── Contact.tsx        # Formulário → WhatsApp
│   │   └── Footer.tsx         # Rodapé
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # Hook de animação no scroll
│   ├── styles/
│   │   └── globals.css        # Fontes + reset + Tailwind
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

---

## 🎨 Design System

### Cores

| Variável | Hex | Uso |
|---|---|---|
| `va-green` | `#7a9070` | Cor principal da marca |
| `va-cream` | `#f5f1eb` | Fundo principal |
| `va-warm` | `#ede8e0` | Fundo secundário |
| `va-taupe` | `#9a9088` | Textos secundários |
| `va-dark` | `#2c2820` | Textos principais |
| `va-gold` | `#c9a96e` | Detalhes e acentos |

### Tipografia

| Fonte | Uso |
|---|---|
| **Cormorant Garamond** | Títulos e destaques |
| **Jost** | Corpo de texto e UI |

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/va-arquitetura.git

# 2. Entrar na pasta
cd va-arquitetura

# 3. Instalar dependências
npm install

# 4. Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build para produção

```bash
npm run build
```

---

## 📱 Seções do Site

| Seção | ID | Descrição |
|---|---|---|
| Hero | `#inicio` | Apresentação com foto e chamada |
| Portfólio | `#portfolio` | 6 projetos com modal detalhado |
| Serviços | `#servicos` | 3 serviços principais |
| Sobre | `#sobre` | Equipe + estatísticas |
| Contato | `#contato` | Formulário integrado ao WhatsApp |

---

## 📲 Configurar WhatsApp

No arquivo `src/components/Contact.tsx`, linha 13, troque o número pelo número real do escritório:

```tsx
const numero = '5581999999999' // DDI + DDD + número (sem espaços ou caracteres especiais)
```

Exemplo para Recife-PE: `558199999999`

---

## 🌐 Deploy

O site está publicado na **Vercel** com deploy automático a cada `git push` na branch `main`.

---

## 📸 Adicionando Novos Projetos

1. Adiciona as novas fotos na pasta `public/images/`
2. Abre `src/components/Portfolio.tsx`
3. Adiciona um novo objeto no array `projects`:

```tsx
{
  id: '07',
  name: 'Nome do Projeto',
  category: 'Residencial · Interiores',
  img: '/images/nomedafoto.jpeg',          // foto de capa
  images: [
    '/images/nomedafoto.jpeg',             // foto 1
    '/images/nomedafoto2.jpeg',            // foto 2
  ],
  description: 'Descrição do projeto...',
  area: '80m²',
  ano: '2025',
},
```

4. Atualiza o contador na linha do header: `06 projetos` → `07 projetos`

---

## 👩‍💻 Desenvolvido por Cesar Henrique

Projeto desenvolvido com React + TypeScript + Tailwind CSS.

**VA Arquitetura** — Recife, Pernambuco 🌿
