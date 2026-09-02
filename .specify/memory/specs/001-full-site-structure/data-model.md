# Data Model: Full Site Structure

**Date**: 2026-08-20 | **Branch**: `001-full-site-structure`

## Entities

### Service

Static data entity representing a Biquiño service offering.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique slug (e.g., `"personalizacion"`) |
| `title` | string | Yes | Display name (e.g., "Personalización de prendas y objetos") |
| `teaser` | string | Yes | Short description for landing page (~15 words) |
| `fullDescription` | string | Yes | Full description for `/servicios` page (~50 words) |
| `icon` | ReactNode | No | Optional icon from react-icons |

**Data file**: `src/data/servicesData.js` (array of 4 service objects)

**Validation**: All fields required. `teaser` and `fullDescription` must be non-empty strings.

---

### Project

Static data entity representing a completed project case study.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique slug |
| `title` | string | Yes | Display name |
| `description` | string | Yes | Brief description of the project |
| `image` | string | Yes | Path to image in `public/` or external URL |
| `alt` | string | Yes | Descriptive alt text for the image |
| `category` | string | Yes | Project category (e.g., "Equipaciones", "Rotulación") |

**Data file**: `src/data/projectsData.js` (exists; array of 3–6 project objects)

**Validation**: All fields required. `alt` must be descriptive (accessibility requirement).

---

### FaqItem

Static data entity for FAQ accordion content.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for `aria-controls` |
| `question` | string | Yes | The question text |
| `answer` | string | Yes | The answer text (may contain simple HTML for formatting) |

**Data file**: `src/data/faqData.js` (new; array of FAQ items)

**Validation**: All fields required. `id` must be unique across all FAQ items.

---

### ContactForm

Form payload submitted to Netlify Forms (not persisted client-side).

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | string | Yes | Non-empty, min 2 chars |
| `email` | string | Yes | Valid email format |
| `phone` | string | No | Optional; if provided, valid phone format |
| `message` | string | Yes | Non-empty, min 10 chars |

**Submission**: POST to Netlify Forms via `fetch()` with `application/x-www-form-urlencoded`.

**Component Props**: `ContactForm` accepts an optional `showInfoColumn` boolean (default `true`). When `true`, an info column with heading and contact details is displayed alongside the form (used on `/` and other pages). When `false`, only the form is shown (used on `/contacto` where the page layout provides its own heading). This supports FR-017 (contact form on every page).

---

### PageMeta

SEO metadata associated with each route.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Page title (unique per page) |
| `description` | string | Yes | Meta description (unique per page) |
| `ogImage` | string | Yes | Open Graph image path |
| `canonical` | string | Yes | Canonical URL |

**Implementation**: Each page component renders `<title>`, `<meta>`, and `<link>` tags directly in its JSX. React 19 hoists them to `<head>` automatically — no wrapper component needed.

## Relationships

```
Service ──(1:many)──> Page (landing shows teasers, servicios shows full)
Project ──(1:many)──> Page (landing shows cards, proyectos shows grid)
FaqItem ──(1:many)──> FaqPage
ContactForm ──(1:1)──> Netlify Forms (external)
PageMeta ──(1:1)──> Page (each route has unique meta)
```
