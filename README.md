# Biquiño Studio — Marketing Website

A Spanish-language marketing site built with React and Vite for **Biquiño Studio**, a printing and signage business (vinyl graphics, custom materials, full-service design-to-installation). The original visual design and copy come from the business owner; this repo is the front-end implementation.

This is a real client project (built for a family member's business) that I'm also using as a portfolio piece, so the notes below cover both "how to run this" and "how it's built and why."

## Tech stack

- **React 19** + **Vite 7**
- **SCSS** (`sass-embedded`), organized as global abstracts/base partials plus component-scoped `.module.scss` files colocated with their components
- **react-router-dom v7** for routing
- **react-hot-toast** for form feedback, **react-icons** for iconography
- **ESLint 9** + **Prettier** for linting/formatting
- **Netlify Forms** for the contact form backend (no custom API, no cookies, no analytics — deliberate choice to avoid needing a privacy policy)
- Deployed as a static SPA on **Netlify** (see `public/_redirects`)

## Getting started

Requires Node.js (built and tested on Node 22).

```bash
npm install
npm run dev       # start the dev server with HMR
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # ESLint
npm run format     # Prettier --write
```

No environment variables are currently required to run the project locally.

## Project structure

```
src/
├── assets/          # images, icons, and static data colocated with the landing sections
├── components/      # header, hero, services, projects, contact form, footer
├── data/            # content for the materials pages
├── hooks/           # e.g. useContactForm
├── pages/           # one component per route
├── routes/          # AppRouter.jsx — route definitions
└── styles/          # global SCSS: abstracts (variables/mixins), base (reset/globals)
```

## Routes

| Path              | Page                | Notes                              |
| ----------------- | -------------------- | ----------------------------------- |
| `/`                | `LandingPage`         | Hero, services, projects, contact form |
| `/proyectos`       | `ProjectsPage`        | Project gallery                     |
| `/contacto`        | `ContactPage`         | Contact form                        |
| `/faq`             | —                     | Placeholder, not yet implemented    |

`/materiales` and `/materiales/:id` still exist in the router and codebase but are **out of scope** for the current version and pending removal — don't treat them as active functionality.

## Current status / known limitations

- The "Proyectos" section on the landing page currently renders placeholder/mock content, not real Biquiño Studio work — pending real project photos and copy.
- `/faq` is a stub route, not yet built out.
- `/materiales` routes and pages are legacy and scheduled for removal (see above).

## Development notes

This project was built iteratively using a spec-driven workflow (spec → plan → tasks → implementation) with AI-assisted tooling. A few conventions worth knowing if you're reading the code:

- Five explicit responsive breakpoints (320 / 768 / 1024 / 1440 / 2560px) defined in `src/styles/abstracts/_variables.scss` — layout uses SCSS variables, not CSS custom properties.
- Component-level styles live next to their component (`Component.module.scss`), not centralized in `src/styles/`.
- Code comments, where present, are in English.

The `.opencode/` and `.specify/` directories (AI tooling / spec-kit workflow artifacts) are intentionally excluded from version control via `.gitignore` — they're local development scaffolding, not part of the shipped application.

## License

Private project built for Biquiño Studio. Shared publicly for portfolio purposes; not licensed for reuse.
