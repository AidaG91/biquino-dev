# UI Contracts: Full Site Structure

**Date**: 2026-08-20 | **Branch**: `001-full-site-structure`

These contracts define the expected structure and behavior of each UI component from the consumer's perspective (page components consuming child components, and the router consuming pages).

---

## Contract: Header

**Component**: `src/components/header/Header.jsx`

**Props**: None (self-contained, reads route state from react-router)

**Rendered output**:
- `<header>` element with `position: sticky; top: 0`
- Logo (links to `/`)
- `<nav>` with links: Inicio, Servicios, Proyectos, FAQ, Contacto
- On mobile (<768px): hamburger button toggles `<dialog>` overlay menu
- On route change: mobile menu closes automatically

**Accessibility contract**:
- `<nav>` has `aria-label="Navegación principal"`
- Hamburger button has `aria-expanded` and `aria-controls`
- Mobile menu `<dialog>` handles Escape key and focus trap
- All links have visible focus indicator

---

## Contract: Footer

**Component**: `src/components/footer/Footer.jsx`

**Props**: None (self-contained)

**Rendered output**:
- `<footer>` element
- Contact info (email, phone)
- Social media links (open in new tab with `rel="noopener noreferrer"`)
- Copyright line with current year

**Accessibility contract**:
- Social links have `aria-label` describing action (e.g., "Abrir Instagram en nueva pestaña")
- Footer links have visible focus indicator

---

## Contract: Hero

**Component**: `src/components/hero/Hero.jsx`

**Props**: None (content hardcoded or from a data file)

**Rendered output**:
- `<section>` with `aria-label="Presentación"`
- `<h1>` with Biquiño value proposition
- Primary CTA button linking to `/contacto`

**Accessibility contract**:
- Single `<h1>` per page (this is it)
- CTA button is keyboard-focusable with visible focus

---

## Contract: ServicesSection

**Component**: `src/components/servicesSection/ServicesSection.jsx`

**Props**: None (reads from `servicesData.js`)

**Rendered output**:
- `<section>` with `aria-label="Servicios"`
- `<h2>` section title
- Grid of 4 service cards, each showing:
  - `<h3>` service title
  - `<p>` teaser description
  - Link to `/servicios`

**Accessibility contract**:
- Cards are keyboard-navigable
- Links have descriptive text (not "Leer más")

---

## Contract: ContactForm

**Component**: `src/components/contactForm/ContactForm.jsx`

**Props**: None (self-contained)

**Rendered output**:
- `<form>` with `name="contact"` and `data-netlify="true"`
- Fields: name (required), email (required), phone (optional), message (required)
- Submit button
- Error messages below invalid fields
- Toast notification on success/failure

**Accessibility contract**:
- All fields have `<label>` with `htmlFor`
- Error messages linked to fields via `aria-describedby`
- Submit button disabled during submission
- Focus moves to first invalid field on validation error

---

## Contract: FaqAccordion

**Component**: `src/components/faqAccordion/FaqAccordion.jsx`

**Props**:
- `items: Array<{ id: string, question: string, answer: string }>`

**Rendered output**:
- List of `<section>` elements, each containing:
  - `<h3>` with `<button>` trigger
  - `<div>` panel with answer content
- Arrow icon rotates on expand

**Accessibility contract**:
- Button has `aria-expanded="true/false"`
- Button has `aria-controls="faq-panel-{id}"`
- Panel has `id="faq-panel-{id}"` and `role="region"`
- Enter/Space toggles accordion
- Arrow keys navigate between accordion headers

---

## Contract: SEO (Native React 19)

**Implementation**: Each page component renders `<title>`, `<meta>`, and `<link>` tags directly in its JSX. React 19 hoists them to `<head>` automatically.

**Pattern** (inside each page component):
```jsx
<title>Biquiño — Servicios</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<link rel="canonical" href="..." />
```

**No wrapper component needed.** Each page declares its own meta tags inline at the top of its returned JSX.
