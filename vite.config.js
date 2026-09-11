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
      if (replacements.length === 0) return;

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