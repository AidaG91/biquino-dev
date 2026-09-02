# Feature Specification: Full Site Structure

**Feature Branch**: `001-full-site-structure`

**Created**: 2026-08-20
**Last Updated**: 2026-08-20

**Status**: Draft

**Input**: User description: "Full site structure for Biquiño marketing website"

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
4. **Given** a visitor scrolls through `/servicios`, **When** they reach the end of the content, **Then** the contact form is present on the page, consistent with every other page on the site

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
5. **Given** a visitor doesn't find their answer in the FAQ, **When** they scroll down, **Then** the contact form is present on the page as a fallback

*Out of scope for this spec: search or category filtering on the FAQ. Simple accordion only.*

---

### User Story 6 - Contact Page & Form (Priority: P2)

A visitor can submit a contact inquiry. The form validates inputs, shows success/error feedback, and submits via Netlify Forms.

**Why this priority**: Contact form is the primary conversion mechanism for service inquiries.

**Independent Test**: Navigate to `/contacto`, fill form with valid/invalid data, submit, verify success modal and error toast feedback, check Netlify submission.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/contacto`, **When** the page loads, **Then** a contact form with name, email, phone, and message fields is visible
2. **Given** a visitor submits the form with empty required fields, **When** validation runs, **Then** error messages appear and focus moves to the first invalid field
3. **Given** a visitor submits a valid form, **When** the submission succeeds, **Then** a confirmation modal appears and the form resets
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
4. **Given** a visitor is inspired by the projects shown, **When** they scroll past the grid, **Then** the contact form is present on the page

*Out of scope for this spec: a project detail view (`/proyectos/:id`). Cards are display-only for the MVP.*

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

## Requirements

### Functional Requirements

- **FR-001**: System MUST render 5 routes: `/`, `/servicios`, `/faq`, `/contacto`, `/proyectos`
- **FR-002**: System MUST display a sticky header with logo and navigation on all pages
- **FR-003**: System MUST display a footer with contact info, social links, and copyright on all pages
- **FR-004**: System MUST deliver contact form submissions to Biquiño via Netlify Forms
- **FR-005**: System MUST validate contact form inputs client-side before submission
- **FR-006**: System MUST show a confirmation modal on successful contact form submission and a toast notification on failure
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
- **FR-017**: System MUST display the contact form on every page (`/`, `/servicios`, `/faq`, `/contacto`, `/proyectos`), not only on the dedicated contact page, to minimize friction toward conversion

### Key Entities

- **Page**: A route with unique meta tags, a layout, and content sections
- **Component**: A reusable UI piece (Header, Footer, Hero, etc.) with scoped styles
- **Service**: An offering with title, description, and optional icon/image, shown both as a teaser on `/` and in full on `/servicios`
- **Project**: A case study with title, image, description, and category
- **Contact Submission**: A form payload sent to Netlify with name, email, phone, message

## Success Criteria

### Measurable Outcomes

- **SC-001**: Lighthouse Performance score ≥ 90 on all pages
- **SC-002**: Lighthouse Accessibility score ≥ 95 on all pages
- **SC-003**: Lighthouse SEO score ≥ 90 on all pages
- **SC-004**: All interactive elements reachable via keyboard alone
- **SC-005**: Contact form completes submission in under 3 seconds on 3G
- **SC-006**: All pages render correctly at 320px, 768px, 1024px, 1440px, 2560px viewports
- **SC-007**: LCP < 2.5s and CLS < 0.1 on the landing page under simulated 4G
- **SC-008**: Shared/reusable components (Header, mobile menu, contact form, Footer, FAQ accordion) have at least a basic render/interaction test, per the project constitution's testing baseline

## Assumptions

- Netlify Forms is used as the form handling backend for now — a pragmatic choice made because no alternative backend was set up; may be revisited later if requirements outgrow it (e.g. need for a database, custom email routing)
- The site is a static SPA — no server-side rendering required
- All content is in Spanish (Biquiño's primary audience)
- Images are optimized manually and served from `public/` or an external CDN; no automated image pipeline yet
- The site does not require authentication or user accounts
- Analytics (if needed) will be added separately via a script tag
- A dedicated project detail view (`/proyectos/:id`) is out of scope for this spec — the projects gallery is card-only
- A "materiales" section/page was considered but is not settled as part of the site's scope; it is excluded from this spec entirely and can be proposed as a separate feature once decided
- The contact form appearing on every page (not just `/contacto`) is an intentional design decision to reduce friction toward conversion — carried over from the original Figma design. Its necessity on every single page hasn't been fully validated by the team; if this changes, FR-017 and the affected acceptance scenarios should be revisited