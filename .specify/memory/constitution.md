# Biquiño Constitution

## Core Principles

### I. Accessibility-First
All pages and components must meet WCAG 2.1 AA compliance. Semantic HTML is mandatory (use `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<button>` over `<div>`). All images require descriptive `alt` text. Interactive elements must be keyboard-navigable with visible focus indicators. Color contrast ratios must meet minimum thresholds (4.5:1 for text, 3:1 for large text). Page language must be declared (`<html lang="es">`) since the site is Spanish-only for now.

### II. Responsive Design
Every page must render correctly on viewports from 320px to 2560px. Mobile-first CSS approach using SCSS variables for breakpoints, defined once in `src/styles/abstracts/_variables.scss` and imported wherever needed — no ad-hoc breakpoint values in component files. Required breakpoints: 320px, 768px, 1024px, 1440px, 2560px. No fixed-width containers — use relative units (`%`, `rem`, `vw`). Touch targets must be at least 44x44px on mobile. Layouts must use CSS Grid or Flexbox — no float-based layouts.

### III. Clear Calls-to-Action
Every page must have a primary CTA visible above the fold. CTA buttons must use consistent styling with sufficient contrast and padding. CTA copy must be action-oriented and specific (e.g., "Solicita tu presupuesto gratis" not "Haz clic aquí"). Links to contact forms, WhatsApp, or booking must be easily accessible from any page.

### IV. SEO-Friendly
Every page must have a unique `<title>` and `<meta name="description">`. All pages must include proper Open Graph and Twitter Card meta tags. Use semantic heading hierarchy (`h1` → `h2` → `h3`), one `<h1>` per page. Images must use descriptive filenames and `alt` attributes. Generate a `sitemap.xml` and `robots.txt` for search engines.

### V. Performance & Core Web Vitals
Since SEO is a core principle, performance is treated as a ranking-relevant requirement, not an afterthought. Images must be sized appropriately for their container and use `loading="lazy"` for any content below the fold. Route-level code-splitting is required for any page not on the critical navigation path (`React.lazy` + `react-router-dom` lazy routes). No single JS chunk should exceed a reasonable size without a documented reason. Image optimization (WebP/AVIF, compression) is currently a manual step before committing assets — revisit this once there's a recurring need for an automated pipeline (e.g. `vite-imagetools`).

### VI. Maintainable Code
React components must follow a single-responsibility principle. Prefer functional components with hooks — no class components. CSS must use scoped styles (CSS Modules or SCSS with BEM naming). No inline styles except for truly dynamic values. Keep components under 200 lines; extract sub-components when larger. Shared SCSS partials (`_globals.scss`, `_reset.scss`, `_mixins.scss`, `_variables.scss`) live under `src/styles/` — this modularization is in progress; new components must use the modular partials, and old components should be migrated opportunistically rather than left importing legacy global styles.

### VII. Testing (Baseline)
The project currently has no automated tests. Going forward, testing is introduced incrementally rather than retrofitted all at once:
- New shared/reusable components (buttons, forms, layout primitives) must include at least a basic render/interaction test before being marked done.
- New business logic (validation, data transforms, hooks with non-trivial logic) must include a unit test.
- Full-page components and one-off marketing sections are exempt for now — visual/manual QA is acceptable until a testing setup exists.
- Toolchain: Vitest + React Testing Library (not yet installed — first task that touches this principle should add and configure them).
This principle will be tightened (e.g. required coverage thresholds, CI gate) once the baseline setup is in place.

## Tech Stack Constraints

- **Framework**: React 19.1 + Vite 7.1
- **Styling**: SCSS (`sass-embedded`) with CSS Modules or BEM, partials under `src/styles/`
- **Routing**: react-router-dom v7
- **Icons**: react-icons
- **Toasts**: react-hot-toast
- **Linting**: ESLint 9 with `react-hooks` and `react-refresh` plugins
- **Formatting**: Prettier
- **Testing**: Vitest + React Testing Library (to be added — see Principle VII)
- **Language**: Spanish only (`es`); no i18n scaffolding needed at this stage

## Quality Gates

- `npm run lint` must pass with zero errors before any commit
- `npm run build` must succeed with no errors; new warnings must be reviewed and either fixed or explicitly justified in the PR description (not silently ignored)
- `npm run format` must be run before committing
- No unused imports or variables
- All components must export a default or named export
- New shared components and non-trivial logic must include tests per Principle VII once the testing toolchain is in place

## Governance

This constitution is the source of truth for all development decisions. All PRs and code reviews must verify compliance with these principles. When principles conflict, priority order is: **accessibility > performance > simplicity > visual polish**. Amendments require updating this file with a description of the change and the rationale.

**Version**: 1.2.0 | **Ratified**: 2026-08-20 | **Last Amended**: 2026-08-20 (Principle II corrected: SCSS variables, not CSS custom properties, to match actual codebase)