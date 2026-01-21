// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://greenfresh.co.id',

  // Memaksa URL tanpa slash (Contoh: /area/ -> /area)
  trailingSlash: 'never',

  // Mode SSR aktif
  output: 'server',

  build: {
    format: 'file' 
  },

  // Integrasi hanya React dan Tailwind
  integrations: [
    react(),
    tailwind(),
  ],

  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      cssCodeSplit: true,
    }
  },

  // Menggunakan adapter Vercel untuk SSR
  adapter: vercel(),
});