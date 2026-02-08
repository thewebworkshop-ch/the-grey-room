# Next.js Template

Production-ready Next.js template

## Tech Stack

| Category           | Technology                   |
| ------------------ | ---------------------------- |
| **Framework**      | Next.js, React, TypeScript   |
| **Styling**        | Tailwind CSS, shadcn/ui, CVA |
| **Database**       | Prisma ORM + PostgreSQL      |
| **Authentication** | NextAuth.js                  |
| **Forms**          | React Hook Form + Zod        |
| **Emails**         | Resend                       |
| **Environment**    | t3-oss/env                   |

## Quality & Testing

| Category           | Technology                      |
| ------------------ | ------------------------------- |
| **Unit Tests**     | Vitest + React Testing Library  |
| **E2E Tests**      | Playwright + axe-core           |
| **API Mocking**    | MSW (Mock Service Worker)       |
| **Component Docs** | Storybook                       |
| **Formatting**     | Prettier                        |
| **Linting**        | ESLint                          |
| **Git Hooks**      | Husky                           |
| **Coverage**       | Vitest (80% per-file threshold) |

## Git Hooks

| Hook           | Technology                                |
| -------------- | ----------------------------------------- |
| **Pre-commit** | Gitleaks + lint-staged + TypeScript check |
| **Commit-msg** | commitlint                                |
| **Pre-push**   | Unit tests + build verification           |

## Security & CI/CD

| Category               | Technology                        |
| ---------------------- | --------------------------------- |
| **CI/CD**              | GitHub Actions                    |
| **Secret Scanning**    | Gitleaks + GitHub Secret Scanning |
| **SCA**                | Trivy                             |
| **License Compliance** | Trivy                             |
| **Container Scanning** | Trivy                             |
| **IaC Scanning**       | Trivy                             |
| **SAST**               | Semgrep                           |
| **Dependency Updates** | Renovate + Dependabot Alerts      |
| **Security Headers**   | CSP, HSTS, X-Frame-Options        |

## Environment Variables

Environment variables are managed through Infisical and validated at runtime using `@t3-oss/env-nextjs`.

## Docker

Optimized production image using multi-stage build with Node.js on Debian slim. Validated against CIS Docker Benchmark.

<br>

© [The Web Workshop](https://thewebworkshop.ch)
