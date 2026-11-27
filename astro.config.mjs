import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  markdown: { syntaxHighlight: false },
  build: {
    inlineStylesheets: "always",
  },
  security: {
    csp: {
      directives: ["form-action 'none'"],
    },
  },
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Manrope",
      cssVariable: "--manrope",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Manrope-VF.woff2"],
            weight: "400 800",
            style: "normal",
          },
        ],
      },
    },
  ],
  site: process.env.SITE_URL || "http://localhost:4321",
  integrations: [icon(), sitemap()],
});
