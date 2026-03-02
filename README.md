# Next.js Template

Production-ready Next.js template

## Tech Stack

| Category           | Technology                                |
| ------------------ | ----------------------------------------- |
| **Framework**      | Next.js, React, TypeScript                |
| **Styling**        | Tailwind CSS, shadcn/ui, CVA              |
| **Database**       | Prisma ORM + PostgreSQL                   |
| **Authentication** | NextAuth.js                               |
| **Forms**          | React Hook Form + Zod                     |
| **Emails**         | Resend                                    |
| **Env Variables**  | Infisical + t3-oss/env                    |
| **Docker**         | Multi-stage build, Node.js on Debian slim |

## Quality & Testing

| Category           | Technology                     |
| ------------------ | ------------------------------ |
| **Unit Tests**     | Vitest + React Testing Library |
| **E2E Tests**      | Playwright + axe-core          |
| **API Mocking**    | MSW (Mock Service Worker)      |
| **Component Docs** | Storybook                      |
| **Formatting**     | Prettier                       |
| **Linting**        | ESLint                         |
| **Git Hooks**      | Husky                          |
| **Coverage**       | 80% per-file threshold         |

## Git Hooks

| Hook           | Technology                                |
| -------------- | ----------------------------------------- |
| **Pre-commit** | Gitleaks + lint-staged + TypeScript check |
| **Commit-msg** | commitlint                                |
| **Pre-push**   | Unit tests + build verification           |

## Security & CI/CD

| Category               | Technology                          |
| ---------------------- | ----------------------------------- |
| **CI/CD**              | GitHub Actions                      |
| **Secret Scanning**    | Gitleaks + GitHub Secret Protection |
| **SCA**                | Trivy + Semgrep                     |
| **License Compliance** | Trivy                               |
| **CIS Docker**         | Trivy                               |
| **IaC Scanning**       | Trivy                               |
| **SAST**               | Semgrep                             |
| **Dependency Updates** | Renovate + Dependabot Alerts        |
| **Security Headers**   | CSP, HSTS, X-Frame-Options          |

<br>

© [The Web Workshop](https://thewebworkshop.ch)
