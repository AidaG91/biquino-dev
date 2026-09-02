# Feature Specification: Full Site Structure

**Feature Branch**: `001-full-site-structure`

**Created**: 2026-08-20
**Last Updated**: 2026-08-20

**Status**: Draft

**Input**: User description: "Full site structure for Biquiño marketing website"

## Clarifications

### Session 2026-08-20

- Q: What services does Biquiño offer? → A: Four services: (1) Personalización de prendas y objetos, (2) Diseño técnico para producción, (3) Gestión de proyectos gráficos, (4) Webs y redes sociales — each with teaser and full description provided.
- Q: Should materiales routes be removed from the router? → A: Yes, remove materiales routes and components from the router to align with spec.
- Q: Is phone optional or required in the contact form? → A: Phone is optional (validation allows empty).
- Q: How many projects should be showcased at launch? → A: 3–6 projects (starter set, easy to expand).
- Q: Do you need a privacy policy or cookie consent at launch? → A: Yes, add both a privacy policy page and a cookie consent banner.

## User Scenarios & Testing

### User Story 1 - Landing Page Navigation (Priority: P1)

A visitor arrives at the site and immediately understands what Biquiño does, sees social proof, and can take action. The page loads fast, works on all devices, and is accessible to screen readers.

**Why this priority**: The landing page is the primary conversion funnel. Without it, no other page matters.

**Independent Test**: Load the page at `/`, verify hero loads with clear value proposition, scroll through sections, confirm CTA is visible and clickable, test on 320px and 2560px viewports.

**Acceptance Scenarios**:

1. **Given** a visitor lands on `/`, **When** the page loads, **Then** a hero section with a clear headline and primary CTA is visible above the fold
2. **Given** a visitor scrolls down, **When** they reach the services section, **Then** each service has a title, short description, and a link to the full `/servicios` page
3. **Given** a visitor scrolls to the projects section, **When** they view the projects, **Then** they can see project cards with images and navigate to the full projects page
4. **Given** a visitor wants to contact, **When** they reach the contact section, **Then** a form or CTA is visible and functional
5. **Given** a visitor uses a screen reader, **When** navigating the page, **Then** all sections are announced with proper headings and landmarks

---

### User Story 2 - Header & Mobile Navigation (Priority: P1)

A visitor can navigate to any page from a sticky header. On mobile, the navigation collapses into a hamburger menu that is keyboard-accessible and does not trap focus.

**Why this priority**: Navigation is the backbone of every other user journey. Must work perfectly on all devices.

**Independent Test**: Navigate to any route, verify header is sticky, test mobile menu open/close, verify all links work, check keyboard navigation (Tab, Escape).

**Acceptance Scenarios**:

1. **Given** a visitor is on any page, **When** they look at the top, **Then** a fixed header with logo and navigation links is visible
2. **Given** a visitor is on mobile (<768px), **When** they tap the hamburger icon, **Then** a slide-out or overlay menu opens with all navigation links
3. **Given** the mobile menu is open, **When** the visitor presses Escape or taps outside, **Then** the menu closes and focus returns to the hamburger button
4. **Given** a visitor navigates to a new page, **When** the route changes, **Then** the mobile menu closes automatically and the page scrolls to top

---

### User Story 3 - Servicios Page (Priority: P2)

A visitor wants a full picture of what Biquiño offers, beyond the short teaser on the landing page, and can browse a dedicated services page with complete descriptions.

**Why this priority**: The landing page only teases services; visitors evaluating the offer in detail need a page that doesn't compete for space with the rest of the funnel.

**Independent Test**: Navigate to `/servicios`, verify all services are listed with full descriptions, test responsive layout, verify each service links back to contact when relevant.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/servicios`, **When** the page loads, **Then** a list of all services is displayed, each with a title, full description, and (optionally) an icon or image
2. **Given** a visitor views a service, **When** they want to act on it, **Then** a CTA links to `/contacto`
3. **Given** a visitor is on mobile, **When** they view `/servicios`, **Then** services stack in a single column and remain readable

---

### User Story 4 - Footer & Legal Pages (Priority: P2)

A visitor can find essential information in the footer: contact details, social links, and a link to legal/privacy information. The footer is consistent across all pages.

**Why this priority**: Footer builds trust and provides secondary navigation for users who scroll to the bottom.

**Independent Test**: Scroll to footer on any page, verify all links work, check social icons have proper labels, confirm responsive behavior.

**Acceptance Scenarios**:

1. **Given** a visitor is on any page, **When** they scroll to the bottom, **Then** a footer with contact info, social links, and copyright is visible
2. **Given** a visitor clicks a social icon, **When** the link activates, **Then** it opens the correct profile in a new tab with `rel="noopener noreferrer"`
3. **Given** a visitor is on mobile, **When** they view the footer, **Then** content stacks vertically and remains readable

---

### User Story 5 - FAQ Page (Priority: P2)

A visitor can find answers to common questions about Biquiño's services using an accessible accordion pattern.

**Why this priority**: FAQ reduces support load and helps visitors self-serve information before contacting.

**Independent Test**: Navigate to `/faq`, expand/collapse questions, test keyboard navigation, verify mobile layout.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/faq`, **When** the page loads, **Then** a list of questions is displayed with expand/collapse controls
2. **Given** a visitor clicks a question, **When** the accordion expands, **Then** the answer is revealed and the arrow icon rotates
3. **Given** a visitor uses a keyboard, **When** they tab to a question and press Enter or Space, **Then** the accordion toggles
4. **Given** a visitor is on mobile, **When** they view the FAQ, **Then** questions are stacked and easy to tap

*Out of scope for this spec: search or category filtering on the FAQ. Simple accordion only.*

---

### User Story 6 - Contact Page & Form (Priority: P2)

A visitor can submit a contact inquiry. The form validates inputs, shows success/error feedback, and submits via Netlify Forms.

**Why this priority**: Contact form is the primary conversion mechanism for service inquiries.

**Independent Test**: Navigate to `/contacto`, fill form with valid/invalid data, submit, verify toast feedback, check Netlify submission.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/contacto`, **When** the page loads, **Then** a contact form with name, email, phone, and message fields is visible
2. **Given** a visitor submits the form with empty required fields, **When** validation runs, **Then** error messages appear and focus moves to the first invalid field
3. **Given** a visitor submits a valid form, **When** the submission succeeds, **Then** a success toast appears and the form resets
4. **Given** a visitor submits the form and the network fails, **When** the error is caught, **Then** an error toast appears with a retry suggestion

---

### User Story 7 - Projects Gallery (Priority: P3)

A visitor can browse completed projects in a grid or card layout.

**Why this priority**: Social proof through projects helps build trust but is less critical than core conversion flows.

**Independent Test**: Navigate to `/proyectos`, verify project cards load, check image alt text, test responsive grid.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/proyectos`, **When** the page loads, **Then** a grid of project cards is displayed
2. **Given** a visitor views a project card, **When** they examine it, **Then** the image has descriptive alt text and the title is visible
3. **Given** a visitor is on mobile, **When** they view the projects grid, **Then** cards stack in a single column

*Out of scope for this spec: a project detail view (`/proyectos/:id`). Cards are display-only for the MVP.*

---

### User Story 9 - Privacy Policy & Cookie Consent (Priority: P2)

A visitor can read a privacy policy explaining how their data is handled, and must accept or decline non-essential cookies before any tracking scripts run.

**Why this priority**: Legal compliance for sites collecting personal data via forms. Builds trust with visitors.

**Independent Test**: Navigate to `/politica-de-privacidad`, verify content loads. Trigger cookie banner, accept/decline, verify consent state persists across page reloads.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/politica-de-privacidad`, **When** the page loads, **Then** a clear privacy policy is displayed explaining data collection, storage, and contact methods
2. **Given** a visitor first loads any page, **When** the cookie banner appears, **Then** they can accept or decline non-essential cookies
3. **Given** a visitor declines cookies, **When** they reload the page, **Then** the banner does not reappear and no tracking scripts execute
4. **Given** a visitor accepts cookies, **When** they reload the page, **Then** the banner does not reappear and consent is stored in `localStorage`
5. **Given** a visitor wants to change their preference, **When** they click a footer link, **Then** the cookie banner reappears

---

### User Story 8 - SEO & Meta Tags (Priority: P1)

Every page has unique meta tags, Open Graph data, and structured content for search engines.

**Why this priority**: SEO drives organic traffic. Without proper meta tags, the site is invisible to search engines.

**Independent Test**: View page source for each route, verify title, description, OG tags, canonical URL.

**Acceptance Scenarios**:

1. **Given** a visitor views the homepage source, **When** they check meta tags, **Then** a unique title and description exist with Biquiño branding
2. **Given** a social media bot crawls any page, **When** it reads OG tags, **Then** it finds title, description, and image for rich previews
3. **Given** a search engine indexes the site, **When** it reads the sitemap, **Then** all pages are listed with correct priorities

---

### Edge Cases

- What happens when a user navigates to an unknown route? → Show a styled 404 page with a link back to home
- What happens when the contact form submission fails? → Show error toast, preserve form data so user can retry
- What happens when images fail to load? → Show a placeholder or fallback with descriptive alt text
- What happens when JavaScript is disabled? → Show a `<noscript>` message directing users to enable JS or contact via email/phone
- What happens on very slow connections? → Ensure above-the-fold content loads first (no render-blocking resources)
- What happens when a visitor declines cookies? → No tracking scripts execute; consent state persists in localStorage
- What happens when localStorage is disabled? → Cookie banner reappears on every page load; default to declined

## Requirements

### Functional Requirements

- **FR-001**: System MUST render 6 routes: `/`, `/servicios`, `/faq`, `/contacto`, `/proyectos`, `/politica-de-privacidad`
- **FR-002**: System MUST display a sticky header with logo and navigation on all pages
- **FR-003**: System MUST display a footer with contact info, social links, and copyright on all pages
- **FR-004**: System MUST deliver contact form submissions to Biquiño via Netlify Forms
- **FR-005**: System MUST validate contact form inputs client-side before submission (name, email, message required; phone optional)
- **FR-006**: System MUST show toast notifications for form submission success/failure
- **FR-007**: System MUST close mobile menu on route change
- **FR-008**: System MUST scroll to top on route change
- **FR-009**: System MUST generate unique `<title>` and `<meta name="description">` for each page
- **FR-010**: System MUST include Open Graph meta tags on every page
- **FR-011**: System MUST provide a `sitemap.xml` with all routes
- **FR-012**: System MUST provide a `robots.txt` allowing search engine crawling
- **FR-013**: System MUST display a 404 page for unknown routes
- **FR-014**: System MUST support accordion FAQ with keyboard navigation
- **FR-015**: System MUST use semantic HTML throughout (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- **FR-016**: System MUST display all services with full descriptions on `/servicios`, separate from the shorter teaser on `/`
- **FR-017**: System MUST display a privacy policy on `/politica-de-privacidad` explaining data collection, storage, and contact methods
- **FR-018**: System MUST display a cookie consent banner on first visit, storing consent in `localStorage`, and re-showing if the visitor clicks a footer link to change preference
- **FR-019**: System MUST NOT execute non-essential tracking scripts until the visitor accepts cookies

### Key Entities

- **Page**: A route with unique meta tags, a layout, and content sections
- **Component**: A reusable UI piece (Header, Footer, Hero, etc.) with scoped styles
- **Service**: An offering with title, teaser description (short, for landing page), and full description (for `/servicios`). Shown as a teaser on `/` and in full on `/servicios`. The four services are:
  1. **Personalización de prendas y objetos** — Teaser: Marcaje textil y de objetos con acabados profesionales, duraderos y adaptados a cada material. / Full: Llevamos tu marca más allá del papel. Combinamos técnicas de marcaje de alta resistencia con un diseño adaptado a cada material — equipaciones deportivas, uniformes laborales o merchandising corporativo — para convertir productos cotidianos en herramientas de comunicación potentes y duraderas.
  2. **Diseño técnico para producción** — Teaser: Convertimos tu idea visual en archivos listos para imprimir, fabricar o rotular, sin sorpresas. / Full: El puente entre una idea visual y su ejecución perfecta. Desarrollamos identidades visuales y preparamos archivos complejos para impresión y rotulación, garantizando que cada diseño sea técnicamente viable además de visualmente impecable.
  3. **Gestión de proyectos gráficos** — Teaser: Coordinamos tu proyecto de principio a fin, sin que tengas que gestionar mil proveedores. / Full: Coordinamos todas las fases de producción, desde la conceptualización técnica hasta la entrega final. Supervisamos cada detalle para garantizar resultados impecables, optimizando tiempos y recursos en cada etapa.
  4. **Webs y redes sociales** — Teaser: Diseñamos y mantenemos tu web y redes para que tu comunicación no se pare nunca. / Full: Diseñamos y desarrollamos tu página web, y damos soporte continuo en redes sociales para negocios que necesitan estar siempre activos. Somos tu departamento creativo externo, cuidando cada publicación y actualización sin que tengas que pensar en ello.
- **Project**: A case study with title, image, description, and category
- **Contact Submission**: A form payload sent to Netlify with name, email, phone, message
- **Cookie Consent**: A boolean stored in `localStorage` indicating whether the visitor accepted or declined non-essential cookies
- **Privacy Policy**: A static content page at `/politica-de-privacidad` explaining data handling practices

## Success Criteria

### Measurable Outcomes

- **SC-001**: Lighthouse Performance score ≥ 90 on all pages
- **SC-002**: Lighthouse Accessibility score ≥ 95 on all pages
- **SC-003**: Lighthouse SEO score ≥ 90 on all pages
- **SC-004**: All interactive elements reachable via keyboard alone
- **SC-005**: Contact form completes submission in under 3 seconds on 3G
- **SC-006**: All pages render correctly at 320px, 768px, 1024px, 1440px, 2560px viewports
- **SC-007**: LCP < 2.5s and CLS < 0.1 on the landing page under simulated 4G
- **SC-008**: Shared/reusable components (Header, mobile menu, contact form, FAQ accordion) have at least a basic render/interaction test, per the project constitution's testing baseline

## Assumptions

- Netlify Forms is used as the form handling backend for now — a pragmatic choice made because no alternative backend was set up; may be revisited later if requirements outgrow it (e.g. need for a database, custom email routing)
- The site is a static SPA — no server-side rendering required
- All content is in Spanish (Biquiño's primary audience)
- Images are optimized manually and served from `public/` or an external CDN; no automated image pipeline yet
- The site does not require authentication or user accounts
- Analytics (if needed) will be added separately via a script tag
- A dedicated project detail view (`/proyectos/:id`) is out of scope for this spec — the projects gallery is card-only
- A "materiales" section/page was considered but is not settled as part of the site's scope; it is excluded from this spec entirely and can be proposed as a separate feature once decided