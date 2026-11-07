import { defineConfig } from 'astro/config';

/**
 * Publicación:
 * - Netlify, Cloudflare Pages o dominio propio → no hace falta configurar nada.
 * - GitHub Pages en una subcarpeta → define BASE_PATH=/nombre-del-repositorio
 *   (el workflow de .github/workflows/deploy.yml ya lo hace automáticamente).
 */
const rawBase = process.env.BASE_PATH ?? '/';
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}/`;

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.hernandezabogados.es',
  base,
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
});
