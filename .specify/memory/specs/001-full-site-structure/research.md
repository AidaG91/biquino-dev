# Research: Full Site Structure

**Date**: 2026-08-20 | **Branch**: `001-full-site-structure`

## R1: Route-Level Code-Splitting in React Router v7

**Decision**: Use `React.lazy()` + `<Suspense>` with dynamic `import()` for route components.

**Rationale**: Constitution Principle V requires route-level code-splitting. React Router v7 supports this natively via lazy routes. The `React.lazy()` pattern is the standard approach — no extra dependencies needed.

**Alternatives considered**:
- `@loadable/component` — heavier, not needed for this use case
- Vite's built-in chunk splitting via `rollupOptions` — works at build level but doesn't give route-level granularity without manual configuration

**Pattern**:
```jsx
const ServiciosPage = React.lazy(() => import("../pages/ServiciosPage"));
// Wrap in <Suspense fallback={<Loading />}> in AppRouter
```

---

## R2: SEO Meta Tags in SPA

**Decision**: Use React 19's native support for `<title>`, `<meta>`, and `<link>` elements rendered directly in component JSX. React automatically hoists them to the document `<head>`.

**Rationale**: React 19 allows any component to render `<title>`, `<meta>`, and `<link>` tags directly in its JSX — React hoists them to `<head>` automatically. No provider wrapping, no external dependency. Each page component declares its own meta tags inline.

**Alternatives considered**:
- `react-helmet-async` — unnecessary dependency given native support; requires `<HelmetProvider>` wrapping the app
- Manual `document.title` updates in `useEffect` — works for title only, doesn't handle meta/OG tags cleanly
- Vite plugin for HTML injection — static only, can't vary per route in SPA

---

## R3: Netlify Forms in SPA

**Decision**: Use the hidden `<form>` pattern already in `index.html` with `fetch()` for form submission.

**Rationale**: Netlify Forms detects `<form>` tags with `data-netlify="true"` at build time. The existing hidden form in `index.html` already has this. For SPA submission, use `fetch()` with `FormData` to POST to the same path — Netlify intercepts it server-side.

**Pattern**:
```js
const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const response = await fetch(form.action, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString(),
  });
  if (response.ok) toast.success("¡Mensaje enviado!");
  else toast.error("Error al enviar. Inténtalo de nuevo.");
};
```

**Note**: The hidden form must include a `form-name` attribute matching the `name` attribute.

---

## R4: SCSS Modules with Vite

**Decision**: Continue using CSS Modules (`.module.scss`) colocated with components.

**Rationale**: The project already uses this pattern (Header.module.scss, ContactPage.module.css). Vite supports CSS Modules natively — no configuration needed. Scoped styles prevent naming collisions.

**Convention**: Use BEM-like class names within modules for clarity (e.g., `.header__nav`, `.header__logo`).

---

## R5: Accordion Accessibility Pattern (WAI-ARIA)

**Decision**: Implement WAI-ARIA Accordion pattern with `aria-expanded`, `aria-controls`, and keyboard support.

**Rationale**: Constitution Principle I requires WCAG 2.1 AA compliance. The WAI-ARIA Authoring Practices define a clear accordion pattern with:
- `<button>` as accordion trigger (not `<div>`)
- `aria-expanded="true/false"` on trigger
- `aria-controls="panel-id"` linking trigger to panel
- `id="panel-id"` on panel
- Enter/Space to toggle
- Optional: Arrow keys to navigate between headers

**Pattern**: Each FAQ item is a `<section>` with a `<h3>` containing a `<button>` trigger, and a `<div>` panel with `role="region"`.

---

## R6: Mobile Menu Accessibility

**Decision**: Use `<dialog>` element or `aria-hidden` + focus trap for mobile menu.

**Rationale**: Constitution Principle I requires keyboard navigation without focus trapping. The `<dialog>` element provides built-in focus trapping and Escape handling. Alternatively, a manual focus trap with `aria-hidden` on background content works.

**Recommendation**: Use `<dialog>` element — it's semantic, accessible, and handles Escape/focus natively. Supported in all modern browsers.

---

## R7: Sitemap & Robots.txt for SPA

**Decision**: Create static `sitemap.xml` and `robots.txt` in `public/`.

**Rationale**: For a static SPA with 5 pages, a manually maintained sitemap is sufficient. No dynamic generation needed. Place in `public/` so Vite copies them to the build output.

**Pattern**:
- `public/robots.txt`: Allow all, point to sitemap
- `public/sitemap.xml`: List all routes with `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
