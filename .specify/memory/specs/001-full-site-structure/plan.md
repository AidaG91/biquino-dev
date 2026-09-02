# Implementation Plan: Full Site Structure

**Branch**: `001-full-site-structure` | **Date**: 2026-08-20 | **Spec**: `.specify/memory/specs/001-full-site-structure/spec.md`

**Input**: Feature specification from `.specify/memory/specs/001-full-site-structure/spec.md`

## Summary

Build the complete marketing website for Biquiño: 5 routes (landing, servicios, faq, contacto, proyectos), responsive header/footer, accessible components, SEO meta tags, and sitemap/robots.txt. The site is a static React SPA deployed to Netlify.

## Technical Context

**Language/Version**: JavaScript (JSX) with React 19.1

**Primary Dependencies**: react 19.1, react-dom 19.1, react-router-dom 7.9, react-icons 5.5, react-hot-toast 2.6

**Storage**: Netlify Forms for contact submissions

**Testing**: Vitest + React Testing Library (to be added per constitution Principle VII)

**Target Platform**: Modern browsers (Chrome, Firefox, Safari, Edge); responsive 320px–2560px

**Project Type**: Static SPA (single-page application)

**Performance Goals**: Lighthouse ≥90 Performance, ≥95 Accessibility, ≥90 SEO; LCP < 2.5s, CLS < 0.1

**Constraints**: No SSR; Spanish-only; manual image optimization; Netlify Forms backend

**Scale/Scope**: 5 routes, ~15 reusable components, 4 services, 3–6 projects

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Accessibility-First | PASS | Semantic HTML, keyboard nav, screen reader support defined in spec |
| II. Responsive Design | PASS | Mobile-first, 320px–2560px, CSS Grid/Flexbox, no floats |
| III. Clear CTAs | PASS | Primary CTA above fold on every page, action-oriented copy |
| IV. SEO-Friendly | PASS | Unique meta tags, OG tags, sitemap.xml, robots.txt |
| V. Performance & Core Web Vitals | PASS | Lazy loading, route-level code-splitting, LCP/CLS targets |
| VI. Maintainable Code | PASS | Functional components, scoped CSS, single-responsibility |
| VII. Testing (Baseline) | PASS | Header, mobile menu, ContactForm, FAQ accordion to have basic tests |

**Gate Result**: PASS — no violations to justify.

## Project Structure

### Documentation (this feature)

```text
.specify/memory/specs/001-full-site-structure/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (UI contracts)
└── tasks.md             # Phase 2 output (/speckit.tasks — NOT created here)
```

### Source Code (repository root)

```text
src/
├── App.jsx                          # Root component (Toaster, Header, main, Footer)
├── main.jsx                         # Entry point
├── index.css                        # Global styles import
├── assets/                          # Static assets (images, icons)
│   └── data/                        # DEPRECATED — migrate imports to src/data/ then delete
├── components/
│   ├── header/                      # Header.jsx + Header.module.scss
│   ├── footer/                      # Footer.jsx + Footer.module.scss (REFACTORED — was flat in components/)
│   ├── hero/                        # Hero.jsx + Hero.module.scss
│   ├── contactForm/                 # ContactForm.jsx + ContactForm.module.scss
│   ├── servicesSection/             # ServicesSection.jsx + ServicesSection.module.scss
│   ├── projectsSection/             # ProjectsSection.jsx + ProjectsSection.module.scss
│   └── faqAccordion/                # FAQ accordion component (NEW)
├── data/
│   ├── servicesData.js              # Service entities with teaser + full descriptions (NEW)
│   ├── projectsData.js              # Project entities (exists with correct schema)
│   └── faqData.js                   # FAQ questions and answers (NEW)
├── hooks/
├── pages/
│   ├── LandingPage.jsx              # Hero + ServicesSection + ProjectsSection + ContactForm
│   ├── ServiciosPage.jsx            # Full services listing (NEW, replaces MaterialsPage)
│   ├── ContactPage.jsx              # Contact form page
│   ├── ProjectsPage.jsx             # Projects gallery
│   ├── FaqPage.jsx                  # FAQ accordion page (NEW, replaces placeholder)
│   └── NotFoundPage.jsx             # 404 page (NEW)
├── routes/
│   └── AppRouter.jsx                # Route definitions (update: remove materiales, add new routes)
├── styles/
│   ├── abstracts/
│   │   ├── _mixins.scss             # Responsive mixins (exists)
│   │   └── _variables.scss          # Breakpoints, colors, typography (exists)
│   ├── base/
│   │   ├── _globals.scss            # Global styles (exists)
│   │   └── _reset.scss              # CSS reset (exists)
│   └── main.scss                    # SCSS entry point (exists)
└── public/
    ├── robots.txt                   # SEO (NEW)
    └── sitemap.xml                  # SEO (NEW)
```

**Removed**: `src/components/sections/` — orphaned legacy directory (empty ProjectsSection.jsx stub, unused ProjectTab.jsx, CallToAction.jsx only used by materiales pages being deleted in Phase 1).

**Structure Decision**: Single-project SPA. Existing component/page structure is extended — no architectural changes needed. New components follow the established pattern: `ComponentName.jsx` + `ComponentName.module.scss` colocated in a directory under `src/components/`. The legacy `src/components/sections/` directory is removed (orphaned). The legacy `src/assets/data/` files are migrated to `src/data/` and deleted (import source mismatch fix). `Footer.jsx` is refactored from flat `src/components/Footer.jsx` to colocated `src/components/footer/Footer.jsx` + `Footer.module.scss`.

## Complexity Tracking

> No constitution violations — complexity tracking not needed.
