# Quickstart Validation Guide

**Date**: 2026-08-20 | **Branch**: `001-full-site-structure`

## Prerequisites

- Node.js 18+ installed
- Run `npm install` from project root

## Validation Scenarios

### V1: Dev Server Starts

```bash
npm run dev
```

**Expected**: Vite dev server starts on `http://localhost:5173` without errors. Browser shows the landing page with Hero, Services, Projects, and Contact sections.

---

### V2: All Routes Load

Navigate to each route in the browser:

| Route | Expected |
|-------|----------|
| `/` | Landing page with hero, services teaser, projects, contact form |
| `/servicios` | Full services listing with 4 services and full descriptions |
| `/faq` | FAQ page with expandable accordion items |
| `/contacto` | Contact form with name, email, phone, message fields |
| `/proyectos` | Projects gallery with 3–6 cards in a grid |
| `/unknown-path` | 404 page with link back to home |

**Expected**: No blank pages, no console errors, correct content on each route.

---

### V3: Responsive Behavior

Resize browser or use DevTools device toolbar:

| Viewport | Expected |
|----------|----------|
| 320px | Single column, hamburger menu visible, all content readable |
| 768px | Tablet layout, navigation may be condensed |
| 1024px+ | Full desktop layout, all sections side-by-side where applicable |

**Expected**: No horizontal scroll, no overlapping elements, touch targets ≥44px on mobile.

---

### V4: Accessibility Checks

1. **Keyboard navigation**: Tab through the landing page. All links, buttons, and form fields receive visible focus.
2. **Screen reader**: Use browser's screen reader (or VoiceOver/NVDA). Verify:
   - Hero `<h1>` is announced
   - Navigation landmarks are announced
   - FAQ accordion buttons announce expanded/collapsed state
   - Form fields have associated labels
3. **Lighthouse Accessibility**: Run Lighthouse audit → score ≥95.

---

### V5: Contact Form Submission

1. Navigate to `/contacto`
2. Fill name, email, message (leave phone empty)
3. Click submit
4. **Expected**: Success toast appears, form resets
5. Test validation: submit with empty name → error message appears, focus moves to name field

---

### V6: SEO Meta Tags

View page source for each route and verify:

| Check | How |
|-------|-----|
| Unique `<title>` | `<head>` contains page-specific title |
| `<meta description>` | Non-empty, unique per page |
| OG tags | `og:title`, `og:description`, `og:image` present |
| `<html lang="es">` | Language attribute set |
| Canonical URL | `<link rel="canonical">` present |

---

### V7: Build & Lint

```bash
npm run lint
npm run build
npm run preview
```

**Expected**:
- `lint`: Zero errors
- `build`: Succeeds without errors; produces `dist/` folder
- `preview`: Static server starts, all routes work via client-side routing

---

### V8: Sitemap & Robots.txt

Open in browser:
- `http://localhost:5173/robots.txt` → Contains `User-agent: *`, `Allow: /`, `Sitemap:` URL
- `http://localhost:5173/sitemap.xml` → Valid XML with all 5 routes listed
