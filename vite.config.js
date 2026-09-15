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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactSsg(), rewriteSsgAssetUrls()],
  build: {
    manifest: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    css: true,
  },
});