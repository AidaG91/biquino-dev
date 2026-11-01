import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactSsg from "vite-plugin-react-ssg";

function rewriteSsgAssetUrls() {
  let root;
  let outDir;
  return {
    name: "biquino-rewrite-ssg-assets",
    apply: "build",
    configResolved(config) {
      root = config.root;
      outDir = config.build.outDir;
    },
    async closeBundle() {
      const distDir = path.resolve(root, outDir);
      const manifestPath = path.join(distDir, ".vite", "manifest.json");
      if (!fs.existsSync(manifestPath)) return;

      const entries = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const replacements = [];
      for (const [key, value] of Object.entries(entries)) {
        if (!key.startsWith("src/assets/") || typeof value.file !== "string") continue;
        replacements.push([`/${key}`, `/${value.file}`]);
      }

      const FONT_URLS = [
        "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        "https://use.typekit.net/ydn5jcq.css",
      ];

      function fixHead(html) {
        let out = html;
        out = out.replace(/<html[^>]*>/i, '<html lang="es">');
        for (const url of FONT_URLS) {
          const esc = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          out = out.replace(
            new RegExp(`<link rel="stylesheet" href="${esc}"\\s*/?>`, "g"),
            "",
          );
          const asyncLink = `<link rel="stylesheet" href="${url}" media="print" onload="this.media='all'" />`;
          const preload = new RegExp(`(<link rel="preload" as="style" href="${esc}"[^>]*>\\s*)`);
          if (preload.test(out)) out = out.replace(preload, `$1${asyncLink}\n`);
          else out = out.replace(/<head([^>]*)>/, `<head$1>\n${asyncLink}`);
        }
        out = out.replace(
          /<head([^>]*)>/,
          `<head$1>\n<noscript>${FONT_URLS.map((u) => `<link rel="stylesheet" href="${u}" />`).join("")}</noscript>`,
        );
        out = out.replace(/<noscript>\s*<\/noscript>/g, "");
        return out;
      }

      function walk(dir) {
        for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
          const p = path.join(dir, d.name);
          if (d.isDirectory()) walk(p);
          else if (p.endsWith(".html")) rewrite(p);
        }
      }

      function rewrite(file) {
        let html = fs.readFileSync(file, "utf8");
        let changed = false;
        for (const [from, to] of replacements) {
          if (html.includes(from)) {
            html = html.split(from).join(to);
            changed = true;
          }
        }
        const fixed = fixHead(html);
        if (fixed !== html) {
          html = fixed;
          changed = true;
        }
        if (changed) fs.writeFileSync(file, html);
      }

      walk(distDir);
    },
  };
}

function generateSitemap({ origin, exclude = [] }) {
  let root;
  let outDir;
  return {
    name: "biquino-generate-sitemap",
    apply: "build",
    configResolved(config) {
      root = config.root;
      outDir = config.build.outDir;
    },
    async closeBundle() {
      const distDir = path.resolve(root, outDir);
      const routes = [];

      function walk(dir) {
        for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
          const p = path.join(dir, d.name);
          if (d.isDirectory()) walk(p);
          else if (d.name === "index.html") {
            const rel = path.relative(distDir, path.dirname(p)).split(path.sep).join("/");
            routes.push(rel ? `/${rel}` : "/");
          }
        }
      }

      walk(distDir);
      const urls = routes
        .filter((route) => !exclude.includes(route))
        .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)))
        .map((route) => `  <url>\n    <loc>${origin}${route}</loc>\n  </url>`)
        .join("\n");

      fs.writeFileSync(
        path.join(distDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
    },
  };
}

// Falla el build si el HTML generado contiene scripts en línea o manejadores
// (onload=…) cuyo hash no está en el script-src de netlify.toml.
function checkCspHashes() {
  let root;
  let outDir;
  return {
    name: "biquino-check-csp-hashes",
    apply: "build",
    configResolved(config) {
      root = config.root;
      outDir = config.build.outDir;
    },
    async closeBundle() {
      const netlifyToml = fs.readFileSync(path.resolve(root, "netlify.toml"), "utf8");
      const scriptSrc = netlifyToml.match(/script-src ([^;]*);/)?.[1] ?? "";
      const allowed = new Set(scriptSrc.match(/'sha256-[^']+'/g) ?? []);
      const hash = (code) =>
        `'sha256-${crypto.createHash("sha256").update(code).digest("base64")}'`;

      const missing = new Map();
      function walk(dir) {
        for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
          const p = path.join(dir, d.name);
          if (d.isDirectory()) walk(p);
          else if (p.endsWith(".html")) {
            const html = fs.readFileSync(p, "utf8");
            const inline = [
              ...[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]),
              ...[...html.matchAll(/\son[a-z]+="([^"]*)"/g)].map((m) => m[1]),
            ];
            for (const code of inline) {
              const h = hash(code);
              if (!allowed.has(h)) missing.set(h, code.slice(0, 80));
            }
          }
        }
      }

      walk(path.resolve(root, outDir));
      if (missing.size > 0) {
        const list = [...missing].map(([h, code]) => `  ${h}  ←  ${code}`).join("\n");
        throw new Error(
          `Inline scripts not allowed by the CSP in netlify.toml. Add these hashes to script-src:\n${list}`,
        );
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactSsg(),
    rewriteSsgAssetUrls(),
    generateSitemap({ origin: "https://biquino.es", exclude: ["/404"] }),
    checkCspHashes(),
  ],
  build: {
    manifest: true,
    // Un solo CSS: el HTML prerenderizado enlaza solo el CSS de entrada, así que
    // el de las páginas lazy llegaría tarde y desplazaría todo el layout (CLS).
    cssCodeSplit: false,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    css: true,
  },
});