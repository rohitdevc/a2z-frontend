# A2Z Online Services — Frontend

The frontend application for the official **A2Z Online Services Pvt. Ltd.** website, presenting the company's services, projects, expertise, clients, awards, and corporate information.

- **Live Website:** https://www.a2zonlineservices.com/
- **Repository:** https://github.com/rohitdevc/a2z-frontend

## Overview

A2Z Online Services provides a corporate digital presence for its construction and real-estate management services. The website introduces the company, highlights its experience and expertise, and provides information for clients, prospective employees, and other stakeholders.

The frontend is built with Next.js and uses API-driven content for its homepage and shared website sections.

## Features

- **Corporate Homepage** — Homepage sliders, company introduction, and experience milestones.
- **Services** — Information about development management, facility management, fit-out management, project management, and residential leasing and resale.
- **Projects** — A dedicated section showcasing company projects.
- **Client Portfolio** — Displays client organizations and their brands.
- **Awards and Careers** — Dedicated sections for company recognition and career opportunities.
- **Corporate Information** — About, compliance, contact, and disclaimer pages.
- **Dynamic Content** — Retrieves homepage content, services, clients, banners, and metadata through API integrations.
- **SEO Support** — Dynamic metadata generation and configurable canonical and asset paths.
- **Responsive Interface** — Components styled with Tailwind CSS.
- **Interactive UI** — GSAP animations, Swiper sliders, and React icon components.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and application routing |
| React 19 | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Styling and responsive layouts |
| GSAP and `@gsap/react` | UI animations |
| Swiper | Sliders and carousels |
| React Icons | Interface icons |
| `html-react-parser` | HTML content rendering |
| `nl2br` | Newline formatting |
| Validator | String validation utilities |
| ESLint | Code quality checks |
| Docker | Containerized deployment |
| GitHub Actions | Deployment workflow automation |

## Getting Started

### Prerequisites

Install the following before starting development:

- Node.js 22 or a compatible supported version
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rohitdevc/a2z-frontend.git
cd a2z-frontend
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure environment variables

Create a `.env` file in the project root. Configure the values required by the application and its API services.

```dotenv
NEXT_PUBLIC_PATH=
BASEPATH_PREFIX=
ASSET_PREFIX=
API_DOMAIN_NAME=
```

**Configuration notes:**

- `NEXT_PUBLIC_PATH` — Public asset path used by the frontend.
- `BASEPATH_PREFIX` — Optional URL prefix for the application.
- `ASSET_PREFIX` — Optional prefix for static assets.
- `API_DOMAIN_NAME` — API domain used by the application.

The appropriate values depend on the deployment environment. Verify the API service modules and deployment configuration before running the application. Do not commit real credentials or sensitive tokens to version control.

### 4. Start the development server

```bash
npm run dev
```

Open the following URL in your browser:

http://localhost:2983

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server on port `2983` |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server on port `2983` |
| `npm run lint` | Runs ESLint |

## Project Structure

```text
a2z-frontend/
├── .github/
│   └── workflows/       # Deployment workflow
├── app/                 # Next.js routes and layouts
├── components/          # Reusable UI and page components
├── lib/                 # API services and shared utilities
├── public/              # Static assets
├── types/               # TypeScript types
├── Dockerfile            # Production Docker image
├── docker-compose.yml    # Docker Compose configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── package-lock.json     # npm dependency lockfile
├── postcss.config.mjs    # PostCSS configuration
├── eslint.config.mjs     # ESLint configuration
└── tsconfig.json         # TypeScript configuration
```

## Production Build

To build and run the application without Docker:

```bash
npm run build
npm run start
```

The production server listens on port `2983` by default.

## Docker Deployment

The project includes a multi-stage Dockerfile configured for Next.js standalone output and a Docker Compose service.

### Build and start

After configuring the required environment variables in `.env`, run:

```bash
docker compose up -d --build
```

### View logs

```bash
docker compose logs -f a2z-web
```

### Stop the application

```bash
docker compose down
```

The default Docker configuration:

- Uses Node.js 22 Alpine.
- Builds the application using `npm run build`.
- Runs the standalone Next.js server.
- Exposes port `2983`.
- Uses the container name `a2z-frontend`.
- Restarts the container automatically unless stopped.

Ensure the host port is available and the environment configuration matches the target deployment.

## Deployment Workflow

The repository contains a GitHub Actions workflow configured to deploy changes pushed to the `main` branch. It uses a self-hosted runner to update the existing production checkout.

Before relying on this workflow, ensure that:

- The self-hosted runner is securely configured and authorized.
- The deployment SSH key is kept outside the repository and has only the permissions it needs.
- Production changes are reviewed before merging into `main`.
- Environment variables and API configuration are maintained securely on the deployment server.

The workflow updates the production source checkout; the exact build or restart procedure should be coordinated with the server's existing deployment setup.

## Development Guidelines

- Follow the existing component and application structure.
- Keep API integration logic in the appropriate service modules.
- Use TypeScript types for component properties and API responses.
- Run `npm run lint` before submitting changes.
- Run `npm run build` to verify production compilation.
- Avoid committing `.env` files, credentials, generated build output, or private deployment keys.

## License

No explicit open-source license is documented here. Contact the repository owner for permission before redistributing or reusing the source code.

---

**Project:** A2Z Online Services Frontend  
**Production URL:** https://www.a2zonlineservices.com/  
**Framework:** Next.js · React · TypeScript · Tailwind CSS