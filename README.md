# Next.js Professional Template

A production-ready Next.js template with enterprise-grade tooling, security, and developer experience.

[![CI](https://github.com/thewebworkshop-ch/nextjs-template/actions/workflows/ci.yml/badge.svg)](https://github.com/thewebworkshop-ch/nextjs-template/actions/workflows/ci.yml)
[![Build & E2E](https://github.com/thewebworkshop-ch/nextjs-template/actions/workflows/build-e2e.yml/badge.svg)](https://github.com/thewebworkshop-ch/nextjs-template/actions/workflows/build-e2e.yml)
[![codecov](https://codecov.io/gh/thewebworkshop-ch/nextjs-template/branch/main/graph/badge.svg)](https://codecov.io/gh/thewebworkshop-ch/nextjs-template)

## Tech Stack

| Category           | Technology                       |
| ------------------ | -------------------------------- |
| **Framework**      | Next.js 16, React 19, TypeScript |
| **Styling**        | Tailwind CSS 4, shadcn/ui, CVA   |
| **Database**       | Prisma ORM + PostgreSQL          |
| **Authentication** | NextAuth.js v4                   |
| **Forms**          | React Hook Form + Zod            |
| **Emails**         | Resend                           |
| **Environment**    | t3-oss/env (type-safe)           |

## Quality & Testing

| Category           | Technology                             |
| ------------------ | -------------------------------------- |
| **Unit Tests**     | Vitest + React Testing Library         |
| **E2E Tests**      | Playwright (Chromium, Firefox, WebKit) |
| **API Mocking**    | MSW (Mock Service Worker)              |
| **Component Docs** | Storybook                              |
| **Formatting**     | Prettier                               |
| **Linting**        | ESLint (flat config)                   |
| **Git Hooks**      | Husky + lint-staged + commitlint       |

## Security & CI/CD

| Category                   | Technology                 |
| -------------------------- | -------------------------- |
| **CI/CD**                  | GitHub Actions             |
| **Secret Scanning**        | Gitleaks                   |
| **Vulnerability Scanning** | Snyk, Dependabot           |
| **Dependency Updates**     | Renovate (auto-merge)      |
| **Code Coverage**          | Codecov                    |
| **Code Quality**           | DeepSource                 |
| **Security Headers**       | CSP, HSTS, X-Frame-Options |
| **Deployment**             | Docker multi-stage build   |

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm 10+
- Docker (for production builds)

### Installation

```bash
# Clone the repository
git clone git@github.com:thewebworkshop-ch/nextjs-template.git
cd nextjs-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Scripts

| Script               | Description               |
| -------------------- | ------------------------- |
| `pnpm dev`           | Start development server  |
| `pnpm build`         | Build for production      |
| `pnpm start`         | Start production server   |
| `pnpm lint`          | Run ESLint                |
| `pnpm format`        | Format code with Prettier |
| `pnpm format:check`  | Check code formatting     |
| `pnpm test`          | Run unit tests            |
| `pnpm test:ui`       | Run tests with UI         |
| `pnpm test:coverage` | Run tests with coverage   |
| `pnpm test:e2e`      | Run E2E tests             |
| `pnpm storybook`     | Start Storybook           |

## Project Structure

```
├── .github/              # GitHub Actions & Dependabot
├── .husky/               # Git hooks
├── .storybook/           # Storybook configuration
├── .vscode/              # VS Code settings
├── e2e/                  # E2E tests (Playwright)
├── prisma/               # Database schema
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   └── ...           # Pages
│   ├── components/       # React components
│   ├── lib/              # Utilities & services
│   ├── mocks/            # MSW handlers
│   ├── types/            # TypeScript types
│   └── env.ts            # Environment variables
├── Dockerfile            # Production Docker image
├── docker-compose.test.yml
└── ...config files
```

## Docker

Build and run the production image:

```bash
# Build
docker build -t nextjs-template .

# Run
docker run -p 3000:3000 nextjs-template
```

## Environment Variables

Environment variables are managed through [Infisical](https://infisical.com/) and validated at runtime using `@t3-oss/env-nextjs`.

Required variables:

- `DATABASE_URL` - PostgreSQL connection string
- `AUTH_SECRET` - NextAuth.js secret
- `RESEND_API_KEY` - Resend API key for emails

## License

Private - All rights reserved.

---

Built with care by [The Web Workshop](https://thewebworkshop.ch)
