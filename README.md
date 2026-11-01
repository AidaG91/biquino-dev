# Biquiño Studio — web

Web de [Biquiño Studio](https://biquino.es), estudio de rotulación, impresión digital y personalización con sede en Verín (Ourense) que trabaja en toda España.

Sitio en español, hecho con React y Vite, prerenderizado como HTML estático y desplegado en Netlify.

## Requisitos

- Node.js 20.19 o superior (o 22.12+)
- npm

## Puesta en marcha

```bash
npm install
npm run dev
```

## Scripts

| Comando              | Qué hace                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------- |
| `npm run dev`        | Servidor de desarrollo                                                                    |
| `npm run build`      | Genera `dist/` con una página HTML por ruta, el `sitemap.xml` y la comprobación de la CSP |
| `npm run preview`    | Sirve `dist/` en local (abre las páginas con barra final: `/servicios/`)                  |
| `npm run lint`       | ESLint                                                                                    |
| `npm run format`     | Prettier                                                                                  |
| `npm test`           | Tests con Vitest                                                                          |
| `npm run test:watch` | Tests en modo observación                                                                 |

Antes de cada commit: `npm run lint`, `npm test` y `npm run build` sin errores.

## Tecnología

- **React 19** con **react-router-dom 7** (rutas con carga diferida)
- **Vite 8** con **vite-plugin-react-ssg**: cada ruta se genera como HTML estático y luego React la hidrata
- **@unhead/react** para título, descripción, Open Graph, canonical y datos estructurados en el HTML generado
- **SCSS Modules**, con variables y mixins compartidos en `src/styles/abstracts/`
- **lucide-react** (iconos) y **react-hot-toast** (avisos)
- **Vitest** y **Testing Library**
- **Netlify** (hosting y formularios)

## Estructura

```text
src/
├── components/     Componentes reutilizables (cabecera, pie, formulario, opciones de contacto, comparador antes/después…)
├── data/           Contenido de la web: servicios, proyectos, FAQ, datos de contacto y fotos
├── hooks/          useSeo, useContactForm, useLocalBusinessSchema
├── pages/          Una página por ruta
├── routes/         Rutas del navegador y layout común
├── styles/         Variables, mixins, reset y estilos globales
└── assets/         Iconos e imágenes
```

## Contenido

Los textos están en `src/data/`, no en los componentes:

- `contactInfo.js`: nombre, dirección, teléfono, WhatsApp (el mismo número), email, Instagram y horario. Es la única fuente de estos datos; la web (pie, `/contacto`, aviso de inauguración) y los datos estructurados de Google salen de aquí.
- `serviciosPageData.js` y `serviciosSubpagesData.js`: página de servicios y subpáginas `/servicios/<slug>`.
- `projectsData.js`: proyectos de la galería. El orden importa: los 3 primeros salen en la portada y los 5 primeros forman el mosaico de `/proyectos`.
- `servicesData.js`: tarjetas de ventajas de la portada (respuesta rápida, servicio integral…).
- `faqData.js`: preguntas frecuentes.

### Fotos de trabajos

Las fotos optimizadas están en `src/assets/images/trabajos/` y se cargan con `src/data/photos.js`. Cada foto `<slug>` tiene:

- `<slug>-480.webp` y `<slug>-960.webp`: recorte 4:3 para tarjetas (se usan con `srcset`).
- `<slug>-full.webp`: foto completa para el lightbox.
- Para un antes/después: `<slug>-antes-full.webp` y `<slug>-despues-full.webp`, del mismo tamaño y alineadas.

En los datos se usan con `photo("<slug>")`, `fullPhoto("<slug>")` y `beforeAfter("<slug>")`. Los originales sin optimizar se guardan en `fotos-originales/`, que no se sube al repositorio.

### Imagen para compartir (Open Graph)

Al compartir un enlace en WhatsApp, Instagram o redes sale `public/og-image.jpg` (1200×630: logo a la izquierda y foto del local a la derecha). `useSeo` añade las etiquetas `og:image` y `twitter:image` con la URL `https://biquino.es/og-image.jpg`. Si cambias la foto del local o el logo, hay que regenerar la imagen a mano; las redes guardan la previsualización en caché y tardan en actualizarla.

### Añadir un servicio

Añade la entrada en `serviciosSubpagesData.js` (la clave es el slug) y en `serviciosPageData.js`. La ruta, el HTML generado y el sitemap se crean solos.

Campos opcionales:

- `seoTitle` (en `serviciosSubpagesData.js`): título corto para la pestaña y Google. El título de la página es `<seoTitle o title> en toda España | Biquiño`; úsalo si el nombre del servicio hace que el título pase de unos 60 caracteres.
- `illustrative: true` (en el objeto `image`, por ejemplo `{ src, illustrative: true }`): marca una imagen generada con IA y muestra la etiqueta «Imagen ilustrativa». Quítalo al sustituirla por una foto real.

### Añadir una página

Añade la ruta en `src/routes/routesConfig.jsx` y en `react-ssg.config.ts` (en `routes` y en `paths`), y llama a `useSeo(título, descripción)` en la página.

## Formulario de contacto

Funciona con Netlify Forms. Netlify detecta el formulario por la copia oculta que hay en `index.html`; si añades o cambias un campo en `ContactForm`, cámbialo también allí. La protección antispam es un campo trampa (`bot-field`) más el filtro de Netlify.

## Despliegue

Las ramas de trabajo salen de `main` y se integran en `main`. Netlify construye y publica automáticamente la rama `main` según `netlify.toml`, que también define:

- Una página 404 real (estado 404) para cualquier URL que no exista.
- Caché larga para `/assets/*` y cabeceras de seguridad.
- La **Content-Security-Policy**. `script-src` no permite scripts en línea salvo los autorizados por hash. Si el build falla con «Inline scripts not allowed by the CSP», añade a `script-src` el hash que indica el mensaje, o evita el script en línea. Si la web empieza a cargar recursos de otro dominio (fuentes, mapas, iframes), hay que añadirlo a la directiva correspondiente.

## Modal de inauguración

Hasta el 7 de noviembre de 2026 a las 12:00 la web muestra un aviso con cuenta atrás (`src/components/inaugurationModal/`, textos y fecha en `src/data/inaugurationData.js`). Se abre una vez por navegador y deja de abrirse solo pasada la fecha. Después de la inauguración se puede retirar: quita `<InaugurationModal />` de `src/routes/SiteLayout.jsx` y borra el componente, `inaugurationData.js` y `src/utils/getTimeLeft.js`.
