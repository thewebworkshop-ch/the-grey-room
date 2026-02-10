# Gestion des mises a jour

## 1. Mises a jour surveillees par Renovate

### 1.1 Automergees

PRs creees automatiquement par Renovate avec automerge active.
Gatees par le workflow **Confidence Check** (voir section 2).

| Type d'update                   | Delai avant ouverture PR | Exemples                                           |
| ------------------------------- | ------------------------ | -------------------------------------------------- |
| Dev dependencies - patch        | 7 jours                  | vitest, eslint, prettier, storybook...             |
| Dev dependencies - minor        | 7 jours                  | vitest, eslint, prettier, storybook...             |
| Production dependencies - patch | 14 jours                 | react, next, zod, prisma...                        |
| GitHub Actions (groupe)         | 7 jours                  | actions/checkout, gitleaks-action, trivy-action... |
| Docker (groupe)                 | 7 jours                  | Images Docker dans le Dockerfile                   |
| Node.js (groupe)                | 7 jours                  | Version Node dans package.json                     |
| Lock file maintenance           | Lundi avant 7h           | pnpm-lock.yaml                                     |

**Groupes de packages** (mergees ensemble dans une seule PR) :

| Groupe         | Packages                                           |
| -------------- | -------------------------------------------------- |
| react          | react, react-dom, @types/react, @types/react-dom   |
| prisma         | @prisma/\*\*, prisma                               |
| playwright     | @playwright/\*\*, playwright, @axe-core/playwright |
| next.js        | next, eslint-config-next                           |
| docker         | Toutes les images Docker                           |
| github-actions | Toutes les GitHub Actions                          |
| node           | Node.js                                            |

### 1.2 Alertes de securite / CVE

PRs creees **immediatement** (pas de schedule, pas de delai) avec automerge active.
Priorite maximale (`prPriority: 10`), elles passent devant toutes les autres PRs.
Label `security` ajoute automatiquement.

| Particularite            | Valeur                                                         |
| ------------------------ | -------------------------------------------------------------- |
| Schedule                 | A tout moment (ignore le schedule du lundi)                    |
| Delai avant ouverture PR | 0 jour                                                         |
| Automerge                | Oui                                                            |
| Priorite                 | 10 (maximale)                                                  |
| Gating Confidence Check  | MC >= High si badges, sinon attente 3 jours (voir section 2.3) |

### 1.3 Mergees manuellement

PRs qui ne sont PAS creees automatiquement. Elles apparaissent dans le **Dependency Dashboard** (issue GitHub) et ne creent une PR que lorsqu'on coche la case correspondante.

| Type d'update       | Delai avant apparition dans le Dashboard | Raison                                                           | Automerge |
| ------------------- | ---------------------------------------- | ---------------------------------------------------------------- | --------- |
| Major (toutes deps) | 14 jours                                 | Risque de breaking changes, laisser la communaute tester         | Non       |
| Production minor    | 7 jours                                  | Impact potentiel en prod, attendre que les badges se stabilisent | Non       |

Ces PRs restent d'abord dans la section **Pending Status Checks** du Dashboard (pendant le delai) puis passent dans **Pending Approval** une fois le delai ecoule. Cela permet d'avoir des badges Merge Confidence fiables au moment de la review manuelle.

---

## 2. Confidence Check (workflow de gating)

Fichier : `.github/workflows/confidence-check.yml`

Ce workflow s'execute sur chaque PR Renovate et decide si l'automerge est autorise.

### 2.1 PRs d'infrastructure (GitHub Actions, Docker, Node, Lockfile)

Passent toujours. La CI classique (tests, build, lint) valide ces changements.

### 2.2 PRs avec badges Merge Confidence

Renovate affiche des badges Merge Confidence (fournis par Mend) dans le body de chaque PR : Age, Adoption, Passing, Confidence.

- **MC >= High** : le check passe, l'automerge peut se faire
- **MC < High** (Low ou Neutral) : le check echoue, l'automerge est bloque. Le check se relancera a chaque mise a jour de la PR par Renovate et mergera des que le MC monte a High ou plus.

### 2.3 PRs sans badges Merge Confidence

Certains packages ne sont pas suivis par Mend et n'ont donc pas de badges.

- **PR de securite (CVE)** : Attente de 3 jours pour laisser la communaute tester le fix. Si apres 3 jours toujours pas de badges, le check passe.
- **PR classique** : Le check passe directement. Le `minimumReleaseAge` de 7 ou 14 jours a deja assure un delai suffisant avant l'ouverture de la PR.

### 2.4 Badges affiches dans les PRs

Chaque PR Renovate affiche :

- **Merge Confidence** (Age, Adoption, Passing, Confidence) - utilise pour le gating
- **OpenSSF Scorecard** - informatif uniquement, mesure les pratiques de securite du projet source

---

## 3. Mises a jour NON surveillees par Renovate

### 3.1 Dans le projet

| Element                  | Fichier                          | Mise a jour                                                                                   |
| ------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------- |
| Node.js (version exacte) | `.nvmrc`                         | Manuelle, a garder en sync avec `package.json` et le `Dockerfile`                             |
| pnpm (packageManager)    | `package.json`                   | Manuelle (`pnpm add -g pnpm`)                                                                 |
| Semgrep                  | `.github/workflows/security.yml` | Utilise `semgrep/semgrep:latest`, se met a jour automatiquement mais sans controle de version |

### 3.2 Sur le systeme (WSL)

| Element        | Verification       | Mise a jour                                 |
| -------------- | ------------------ | ------------------------------------------- |
| Gitleaks (CLI) | `gitleaks version` | Manuelle (utilise dans `.husky/pre-commit`) |
| Node.js (nvm)  | `node --version`   | `nvm install <version>` (suivre `.nvmrc`)   |
| pnpm           | `pnpm --version`   | `pnpm add -g pnpm`                          |

---

## 4. Parametres cles de la config Renovate

| Parametre                      | Valeur                         | Effet                                                    |
| ------------------------------ | ------------------------------ | -------------------------------------------------------- |
| `schedule`                     | Lundi avant 7h (Europe/Zurich) | Renovate ne cree des PRs que le lundi matin              |
| `prConcurrentLimit`            | 5                              | Maximum 5 PRs ouvertes simultanement                     |
| `rebaseWhen`                   | `behind-base-branch`           | Rebase automatique quand main avance                     |
| `platformAutomerge`            | true                           | Utilise l'automerge natif de GitHub                      |
| `automerge`                    | true                           | Automerge active par defaut                              |
| `ignoreUnstable`               | true                           | Ignore les versions pre-release                          |
| `vulnerabilityAlerts.schedule` | `at any time`                  | Les alertes CVE ne suivent pas le schedule du lundi      |
| `prPriority` (securite)        | 10                             | Les PRs de securite passent en premier (via packageRule) |

---

## 5. Resume visuel du flux

```
Nouvelle version disponible
        |
        v
  minimumReleaseAge atteint ?
  (7j defaut, 14j prod patch/majors, 7j prod minor, 0j securite)
        |
       Non --> Attendre
        |
       Oui
        |
        v
  Dashboard approval requis ?
  (Majors, Prod minor)
        |
       Oui --> Attendre validation manuelle dans le Dashboard
        |
       Non --> PR creee automatiquement
                    |
                    v
              CI passe ? (lint, tests, build, e2e)
                    |
                   Non --> PR bloquee
                    |
                   Oui
                    |
                    v
              Confidence Check passe ?
              - Infrastructure : toujours OK
              - Badges MC >= High : OK
              - Badges MC < High : bloque (re-check auto)
              - Pas de badges + securite : attendre 3j
              - Pas de badges + classique : OK
                    |
                   Non --> PR bloquee (re-check a chaque update)
                    |
                   Oui --> AUTOMERGE
```
