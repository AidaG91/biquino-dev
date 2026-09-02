# Tasks: Full Site Structure

**Input**: Design documents from `.specify/memory/specs/001-full-site-structure/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Yes — per constitution Principle VII and SC-008: Header, mobile menu, ContactForm, Footer, FAQ accordion require basic render/interaction tests.

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: Clean up existing codebase and prepare for new structure

- [x] T001 Remove materiales routes from `src/routes/AppRouter.jsx` (delete `/materiales` and `/materiales/:id` routes)
- [x] T002 [P] Delete `src/pages/MaterialsPage.jsx` and `src/pages/MaterialDetailPage.jsx`
- [x] T003 [P] Delete `src/data/materialsData.js`
- [x] T004 [P] Delete materiales-related SCSS modules from `src/styles/` (MaterialsPage.module.css, MaterialDetailPage.module.css)
- [x] T066 Migrate data imports: update `src/components/projectsSection/ProjectsSection.jsx` to import from `src/data/projectsData.js` (not `src/assets/data/`); create `src/data/servicesData.js` with schema from data-model.md (`{id, title, teaser, fullDescription, icon}`), update `src/components/servicesSection/ServicesSection.jsx` to import from it, verify both components render correctly, then delete `src/assets/data/projectsData.js` and `src/assets/data/servicesData.js`. DO NOT delete src/assets/data/ files until imports are verified working.
- [x] T067 Refactor Footer: move `src/components/Footer.jsx` → `src/components/footer/Footer.jsx`, move `src/styles/Footer.module.css` → `src/components/footer/Footer.module.scss` (convert to SCSS), update import in `src/App.jsx` to `./components/footer/Footer`
- [x] T068 Audit `src/components/sections/` (ProjectsSection.jsx, ProjectTab.jsx, CallToAction.jsx): confirm no active imports remain after T002 deletes MaterialsPage/MaterialDetailPage, then delete the entire `src/components/sections/` directory and `src/styles/CallToAction.module.css`
- [x] T005 Add Vitest and React Testing Library as dev dependencies (`npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom`)
- [x] T006 Configure Vitest in `vite.config.js` (add `test` field with `environment: "jsdom"`, `setupFiles`)
- [x] T007 [P] Create `src/test/setup.js` with `@testing-library/jest-dom` import

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Data files, shared infrastructure, and code-splitting setup that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T008 Create `src/data/servicesData.js` with 4 services (id, title, teaser, fullDescription) per data-model.md
- [x] T009 [P] Update `src/data/projectsData.js` with 3–6 project objects (id, title, description, image, alt, category)
- [x] T010 [P] Create `src/data/faqData.js` with FAQ items (id, question, answer)
- [x] T011 [P] Add missing breakpoints to `src/styles/abstracts/_variables.scss`: 320px, 1440px, and 2560px. The file currently only defines `$bp-tablet: 768px` and `$bp-desktop: 1024px`
- [x] T012 Set up route-level code-splitting in `src/routes/AppRouter.jsx` using `React.lazy()` + `<Suspense>`

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 — Landing Page Navigation (Priority: P1) 🎯 MVP

**Goal**: Visitor arrives at `/` and sees hero, services teaser, projects, and contact CTA

**Independent Test**: Load `/`, verify hero with CTA above fold, scroll through services and projects sections, confirm contact form is visible, test on 320px and 2560px viewports

### Implementation for User Story 1

- [x] T013 [P] [US1] Create/update `src/components/hero/Hero.jsx` — `<section>` with `aria-label="Presentación"`, `<h1>` value proposition, CTA button linking to `/contacto`
- [x] T014 [P] [US1] Create/update `src/components/hero/Hero.module.scss` — responsive layout, CTA styling
- [x] T015 [P] [US1] Create/update `src/components/servicesSection/ServicesSection.jsx` — reads from `servicesData.js`, renders 4 teaser cards in a grid, links to `/servicios`
- [x] T016 [P] [US1] Create/update `src/components/servicesSection/ServicesSection.module.scss` — responsive grid
- [x] T017 [P] [US1] Create/update `src/components/projectsSection/ProjectsSection.jsx` — reads from `projectsData.js`, renders project cards, links to `/proyectos`
- [x] T018 [P] [US1] Create/update `src/components/projectsSection/ProjectsSection.module.scss` — responsive grid
- [x] T019 [P] [US1] Verify existing `src/components/contactForm/ContactForm.jsx` is ready for use on landing page — confirm it exports a standalone component (not embedded in another page), accepts no required props, and renders name/email/phone/message fields with Netlify submission and toast feedback. If the component requires props or is coupled to another page, refactor to make it self-contained
- [x] T020 [P] [US1] Audit `src/components/contactForm/ContactForm.module.scss` — ensure form styles are self-contained (not dependent on parent page layout) and work within the LandingPage composition
- [x] T021 [US1] Compose `src/pages/LandingPage.jsx` — Hero + ServicesSection + ProjectsSection + ContactForm
- [x] T022 [P] [US1] Add React 19 native `<title>` and `<meta>` tags to `src/pages/LandingPage.jsx`

**Checkpoint**: Landing page fully functional and independently testable

---

## Phase 4: User Story 2 — Header & Mobile Navigation (Priority: P1)

**Goal**: Sticky header on all pages with accessible mobile hamburger menu

**Independent Test**: Navigate to any route, verify sticky header, test mobile menu open/close, verify keyboard navigation (Tab, Escape), check all links work

### Tests for User Story 2

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T023 [P] [US2] Test: Header renders with logo and nav links in `src/components/header/__tests__/Header.test.jsx`
- [x] T024 [P] [US2] Test: Mobile menu opens on hamburger click, closes on Escape in `src/components/header/__tests__/Header.test.jsx`

### Implementation for User Story 2

- [x] T025 [US2] Update `src/components/header/Header.jsx` — sticky positioning, logo linking to `/`, `<nav>` with `aria-label="Navegación principal"`, links: Inicio, Servicios, Proyectos, FAQ, Contacto
- [x] T026 [US2] Implement mobile menu using `<dialog>` element in `src/components/header/Header.jsx` — hamburger button with `aria-expanded`/`aria-controls`, `<dialog>` with focus trap and Escape handling
- [x] T027 [US2] Update `src/components/header/Header.module.scss` — sticky header, responsive nav, hamburger icon, mobile overlay
- [x] T028 [US2] Ensure mobile menu closes on route change and page scrolls to top in `src/components/header/Header.jsx` (use `useLocation` from react-router-dom)

**Checkpoint**: Header works on all viewports, keyboard-accessible, menu closes on navigation

---

## Phase 5: User Story 3 — Servicios Page (Priority: P2)

**Goal**: Full services listing page at `/servicios` with complete descriptions

**Independent Test**: Navigate to `/servicios`, verify all 4 services with full descriptions, test responsive layout, verify CTA links to `/contacto`

### Implementation for User Story 3

- [x] T029 [P] [US3] Create `src/pages/ServiciosPage.jsx` — reads from `servicesData.js`, renders each service with title, fullDescription, and CTA linking to `/contacto`
- [x] T030 [P] [US3] Create `src/pages/ServiciosPage.module.scss` — responsive layout, service cards
- [x] T031 [P] [US3] Add React 19 native `<title>` and `<meta>` tags to `src/pages/ServiciosPage.jsx`
- [x] T032 [US3] Add `/servicios` route to `src/routes/AppRouter.jsx`

**Checkpoint**: Servicios page accessible, responsive, and independently testable

---

## Phase 6: User Story 4 — Footer (Priority: P2)

**Goal**: Consistent footer with contact info, social links, and copyright on all pages

**Independent Test**: Scroll to footer on any page, verify all links work, check social icons have `aria-label`, confirm responsive stacking on mobile

### Tests for User Story 4

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T033 [P] [US4] Test: Footer renders with contact info, social links, and correct `rel="noopener noreferrer"` on external links in `src/components/footer/__tests__/Footer.test.jsx`

### Implementation for User Story 4

- [x] T034 [P] [US4] Create `src/components/footer/Footer.jsx` — `<footer>` element, contact info, social links with `rel="noopener noreferrer"` and `aria-label`, copyright with current year
- [x] T035 [P] [US4] Create `src/components/footer/Footer.module.scss` — responsive layout, stacking on mobile
- [x] T036 [US4] Add `<Footer />` to `src/App.jsx`

**Checkpoint**: Footer visible on all pages, accessible, responsive

---

## Phase 7: User Story 5 — FAQ Page (Priority: P2)

**Goal**: Accessible accordion FAQ page at `/faq`

**Independent Test**: Navigate to `/faq`, expand/collapse questions with click and keyboard (Enter/Space), verify arrow rotation, test mobile layout

### Tests for User Story 5

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T037 [P] [US5] Test: Accordion toggles on click, aria-expanded updates in `src/components/faqAccordion/__tests__/FaqAccordion.test.jsx`
- [x] T038 [P] [US5] Test: Accordion toggles on Enter/Space key in `src/components/faqAccordion/__tests__/FaqAccordion.test.jsx`

### Implementation for User Story 5

- [x] T039 [P] [US5] Create `src/components/faqAccordion/FaqAccordion.jsx` — WAI-ARIA accordion pattern: `<section>` with `<h3>` containing `<button>` trigger (`aria-expanded`, `aria-controls`), `<div>` panel with `role="region"` and matching `id`
- [x] T040 [P] [US5] Create `src/components/faqAccordion/FaqAccordion.module.scss` — accordion styling, arrow rotation
- [x] T041 [P] [US5] Create `src/pages/FaqPage.jsx` — reads from `faqData.js`, renders FaqAccordion, adds `<title>` and `<meta>` tags
- [x] T042 [US5] Add `/faq` route to `src/routes/AppRouter.jsx` (replace placeholder `<h1>FAQ</h1>`)

**Checkpoint**: FAQ page accessible, keyboard-navigable, independently testable

---

## Phase 8: User Story 6 — Contact Page & Form (Priority: P2)

**Goal**: Functional contact form with validation and Netlify Forms submission

**Independent Test**: Navigate to `/contacto`, fill form with valid/invalid data, submit, verify toast feedback, check Netlify submission

### Tests for User Story 6

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T043 [P] [US6] Test: Form shows errors for empty required fields in `src/components/contactForm/__tests__/ContactForm.test.jsx`
- [ ] T044 [P] [US6] Test: Form submits successfully and shows confirmation modal (not toast); test: form submission failure shows error toast via react-hot-toast in `src/components/contactForm/__tests__/ContactForm.test.jsx`

### Implementation for User Story 6

- [ ] T045 [US6] Audit `src/components/contactForm/ContactForm.jsx` for accessibility gaps — verify: (1) validation error messages are linked to inputs via `aria-describedby`, (2) focus moves to the first invalid field on submission error, (3) all form fields have visible labels (not just placeholders). Fix any gaps found
- [ ] T046 [US6] Update `src/pages/ContactPage.jsx` — compose ContactForm with page layout, add `<title>` and `<meta>` tags

**Checkpoint**: Contact form validates, submits, and shows feedback independently

---

## Phase 9: User Story 7 — Projects Gallery (Priority: P3)

**Goal**: Projects grid at `/proyectos` with cards showing images and titles

**Independent Test**: Navigate to `/proyectos`, verify project cards load, check image alt text, test responsive grid

### Implementation for User Story 7

- [ ] T047 [P] [US7] Update `src/pages/ProjectsPage.jsx` — reads from `projectsData.js`, renders grid of project cards with images and alt text
- [ ] T048 [P] [US7] Update `src/pages/ProjectsPage.module.scss` — responsive card grid (single column on mobile)
- [ ] T049 [P] [US7] Add React 19 native `<title>` and `<meta>` tags to `src/pages/ProjectsPage.jsx`

**Checkpoint**: Projects gallery responsive, images have alt text, independently testable

---

## Phase 10: User Story 8 — SEO & Meta Tags (Priority: P1)

**Goal**: Every page has unique title, description, OG tags, and sitemap/robots.txt

**Independent Test**: View page source for each route, verify unique `<title>`, `<meta description>`, OG tags, canonical URL; verify `sitemap.xml` and `robots.txt`

### Implementation for User Story 8

- [ ] T050 [P] [US8] Create `public/robots.txt` — `User-agent: *`, `Allow: /`, `Sitemap:` pointing to sitemap URL
- [ ] T051 [P] [US8] Create `public/sitemap.xml` — list all 5 routes (`/`, `/servicios`, `/faq`, `/contacto`, `/proyectos`) with `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
- [ ] T052 [US8] Audit all page components for React 19 native `<title>`, `<meta name="description">`, `og:title`, `og:description`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, and `<link rel="canonical">` — add any missing tags (Twitter Card tags required per constitution Principle IV)
- [ ] T053 [US8] Change `<html lang="en">` to `<html lang="es">` in `index.html` (constitution Principle I requires Spanish language declaration); verify if already set

**Checkpoint**: All pages have unique meta tags, sitemap lists all routes, robots.txt allows crawling

---

## Phase 11: 404 Page

**Goal**: Styled 404 page for unknown routes

**Independent Test**: Navigate to `/unknown-path`, verify 404 message and link back to home

### Implementation

- [ ] T054 [P] Create `src/pages/NotFoundPage.jsx` — 404 message with link to `/`
- [ ] T055 [P] Create `src/pages/NotFoundPage.module.scss` — centered layout
- [ ] T056 Add `*` catch-all route to `src/routes/AppRouter.jsx` pointing to NotFoundPage

---

## Phase 12: Polish & Cross-Cutting Concerns

**Purpose**: Final quality checks and optimizations

- [ ] T057 Responsive audit: verify all pages at 320px, 768px, 1024px, 1440px, 2560px viewports
- [ ] T058 Accessibility audit: keyboard navigation through entire site, screen reader test, color contrast ratio verification (≥4.5:1 for normal text, ≥3:1 for large text per constitution Principle I), Lighthouse Accessibility ≥95
- [ ] T059 [P] Run `npm run lint` and fix any errors
- [ ] T060 [P] Run `npm run build` and verify no warnings
- [ ] T061 Run Lighthouse audits: Performance ≥90, Accessibility ≥95, SEO ≥90
- [ ] T062 Run quickstart.md validation scenarios V1–V8
- [ ] T063 Verify contact form submission completes in under 3 seconds under Chrome DevTools "Slow 3G" network throttling (SC-005)
- [ ] T064 Add image error handling: project and service images must show a placeholder or fallback via `onError` when the image fails to load (spec edge case: "images fail to load")
- [ ] T065 Add `<noscript>` message to `index.html` in Spanish, directing users to enable JavaScript or contact via email/phone (spec edge case: "JavaScript disabled")

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately. T066 (data migration) must complete before T008 (data file creation). T068 (sections cleanup) must complete after T002-T004 (materiales deletion) to avoid breaking imports.
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **US1 Landing Page (Phase 3)**: Depends on Foundational (needs servicesData, projectsData)
- **US2 Header (Phase 4)**: Depends on Foundational (needs routes defined) — can run parallel with US1
- **US3 Servicios (Phase 5)**: Depends on Foundational (needs servicesData)
- **US4 Footer (Phase 6)**: Depends on Foundational — can run parallel with US1–US3
- **US5 FAQ (Phase 7)**: Depends on Foundational (needs faqData)
- **US6 Contact (Phase 8)**: Depends on Foundational — can run parallel with US3–US5
- **US7 Projects (Phase 9)**: Depends on Foundational (needs projectsData)
- **US8 SEO (Phase 10)**: Depends on all pages existing (US1, US3, US5, US6, US7)
- **404 Page (Phase 11)**: Depends on Foundational
- **Polish (Phase 12)**: Depends on all user stories complete

### User Story Dependencies

- **US1 (P1)**: After Foundational — no dependencies on other stories
- **US2 (P1)**: After Foundational — no dependencies on other stories
- **US3 (P2)**: After Foundational — independent
- **US4 (P2)**: After Foundational — independent
- **US5 (P2)**: After Foundational — independent
- **US6 (P2)**: After Foundational — independent
- **US7 (P3)**: After Foundational — independent
- **US8 (P1)**: After US1, US3, US5, US6, US7 (needs all pages to add meta tags)

### Parallel Opportunities

- Phase 1: T002, T003, T004 can run in parallel; T066 and T067 can run in parallel after T004; T068 runs after T002-T004 (must confirm CallToAction imports removed)
- Phase 2: T009, T010, T011 can run in parallel
- Phase 3: T013–T020 can run in parallel (different component files)
- Phase 4: T023, T024 (tests) can run in parallel
- Phase 5: T029, T030, T031 can run in parallel
- Phase 7: T037, T038 (tests) can run in parallel; T039, T040 can run in parallel
- Phase 8: T043, T044 (tests) can run in parallel
- Phase 10: T050, T051 can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all component tasks together (different files):
Task: "Create Hero component in src/components/hero/Hero.jsx"
Task: "Create Hero styles in src/components/hero/Hero.module.scss"
Task: "Create ServicesSection in src/components/servicesSection/ServicesSection.jsx"
Task: "Create ServicesSection styles in src/components/servicesSection/ServicesSection.module.scss"
Task: "Create ProjectsSection in src/components/projectsSection/ProjectsSection.jsx"
Task: "Create ProjectsSection styles in src/components/projectsSection/ProjectsSection.module.scss"
Task: "Create ContactForm in src/components/contactForm/ContactForm.jsx"
Task: "Create ContactForm styles in src/components/contactForm/ContactForm.module.scss"
```

---

## Implementation Strategy

### MVP First (US1 + US2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: US1 (Landing Page)
4. Complete Phase 4: US2 (Header & Navigation)
5. **STOP and VALIDATE**: Test landing page with header independently
6. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. US1 + US2 → Landing page with navigation (MVP!)
3. US3 + US4 + US5 + US6 → All P2 pages complete
4. US7 → Projects gallery
5. US8 → SEO meta tags on all pages
6. Polish → Final quality checks

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: US1 (Landing) + US2 (Header)
   - Developer B: US3 (Servicios) + US4 (Footer)
   - Developer C: US5 (FAQ) + US6 (Contact)
3. After P2 pages: US7 (Projects) + US8 (SEO)
4. Final: Polish together

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Tests are written FIRST (TDD) for Header, mobile menu, ContactForm, FAQ accordion
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- React 19 native `<title>`/`<meta>` — no Helmet wrapper needed
- Phone field is optional in contact form (per clarification)
