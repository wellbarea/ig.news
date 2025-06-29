# 📰 ig.news

> Uma plataforma de notícias sobre o mundo React com sistema de assinaturas

ig.news é uma aplicação completa de newsletter com assinaturas pagas, desenvolvida com Next.js. Os usuários podem se inscrever para ter acesso a conteúdo exclusivo sobre o ecossistema React.

## ✨ Funcionalidades

- 🔐 **Autenticação com NextAuth.js** - Login integrado com GitHub
- 💳 **Pagamentos com Stripe** - Sistema de assinaturas mensais
- 📄 **CMS Headless** - Gestão de conteúdo com Prismic CMS
- 🗄️ **Banco de Dados** - FaunaDB para persistência de dados
- 🔒 **Conteúdo Restrito** - Preview de posts para não-assinantes
- 📱 **Design Responsivo** - Interface moderna e adaptável
- 🧪 **Testes Automatizados** - Cobertura de testes com Jest e Testing Library

## 🚀 Tecnologias

### Frontend

- **Next.js 12** - Framework React com SSR e SSG
- **TypeScript** - Tipagem estática
- **Sass** - Pré-processador CSS
- **React Icons** - Biblioteca de ícones

### Backend & Integrações

- **NextAuth.js** - Autenticação
- **Stripe** - Processamento de pagamentos
- **Prismic CMS** - Sistema de gerenciamento de conteúdo
- **FaunaDB** - Banco de dados serverless
- **Webhooks** - Integração com eventos do Stripe

### Testes

- **Jest** - Framework de testes
- **Testing Library** - Testes de componentes React
- **Babel Jest** - Transpilação para testes

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 14+
- npm ou yarn
- Contas configuradas:
  - [Stripe](https://stripe.com/)
  - [FaunaDB](https://fauna.com/)
  - [Prismic](https://prismic.io/)
  - [GitHub OAuth App](https://github.com/settings/applications/new)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd ig.news
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua-chave-secreta

# GitHub OAuth
GITHUB_CLIENT_ID=seu-github-client-id
GITHUB_CLIENT_SECRET=seu-github-client-secret

# FaunaDB
FAUNADB_KEY=sua-fauna-key

# Stripe
STRIPE_API_KEY=sua-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=sua-stripe-public-key
STRIPE_WEBHOOK_SECRET=seu-webhook-secret
STRIPE_SUCCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000/

# Prismic
PRISMIC_ENDPOINT=seu-prismic-endpoint
PRISMIC_ACCESS_TOKEN=seu-prismic-access-token
```

### 4. Configure o banco de dados (FaunaDB)

Crie as seguintes coleções no FaunaDB:

- `users`
- `subscriptions`

### 5. Execute a aplicação

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🧪 Testes

Execute os testes:

```bash
npm test
# ou
yarn test
```

Execute testes em modo watch:

```bash
npm test -- --watch
# ou
yarn test --watch
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ActiveLink/     # Link ativo na navegação
│   ├── Header/         # Cabeçalho da aplicação
│   ├── SignInButton/   # Botão de login/logout
│   └── SubscribeButton/ # Botão de assinatura
├── pages/              # Páginas da aplicação
│   ├── api/           # API Routes
│   │   ├── auth/      # Autenticação
│   │   ├── subscribe.ts # Endpoint de assinatura
│   │   └── webhooks.ts # Webhooks do Stripe
│   ├── posts/         # Páginas de posts
│   └── index.tsx      # Página inicial
├── services/          # Integrações externas
│   ├── api.ts        # Cliente Axios
│   ├── fauna.ts      # Cliente FaunaDB
│   ├── prismic.ts    # Cliente Prismic
│   └── stripe.ts     # Cliente Stripe
├── styles/           # Estilos globais
└── tests/           # Arquivos de teste
```

## 🔄 Fluxo da Aplicação

1. **Página Inicial**: Apresenta a proposta e botão de assinatura
2. **Autenticação**: Login via GitHub usando NextAuth.js
3. **Assinatura**: Processo de pagamento via Stripe
4. **Conteúdo**: Acesso aos posts completos para assinantes
5. **Preview**: Posts parciais para não-assinantes

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente
3. Deploy automático a partir do branch principal

### Outras Plataformas

```bash
npm run build
npm start
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Feito com ❤️ durante os estudos de desenvolvimento web moderno.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
