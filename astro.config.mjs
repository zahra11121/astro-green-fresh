// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://greenfresh.co.id',
  
  // 1. MEMAKSA URL TANPA SLASH (Contoh: /area/ -> /area)
  // Ini mencegah 404 dan otomatis redirect ke versi tanpa slash
  trailingSlash: 'never',
  
  build: {
    format: 'file' 
  },

  // 2. SISTEM REDIRECT (Menangani pemindahan path)
  redirects: {
    // Redirect dari supplier-sayur ke city (tetap tanpa slash)
    '/supplier-sayur': '/city',
    '/supplier-sayur/[...slug]': '/city/[...slug]',
    
    // Jika ada request manual yang memaksa pakai slash di supplier-sayur
    '/supplier-sayur/': '/city',
  },

  integrations: [
    react(),
    tailwind(), 
    sitemap({
      i18n: undefined,
      serialize(item) {
        // Memastikan URL di sitemap benar-benar bersih tanpa trailing slash
        if (item.url.endsWith('/') && item.url !== 'https://greenfresh.co.id/') {
          item.url = item.url.slice(0, -1);
        }

        const staticRoutes = ['/produk', '/gallery', '/about', '/city', '/area'];
        const isStatic = staticRoutes.some(route => item.url.endsWith(route)) || item.url === 'https://greenfresh.co.id';
        
        if (isStatic) {
          item.priority = 1.0;
          // @ts-ignore
          item.changefreq = 'daily';
        }

        if (item.url.includes('/city/') || item.url.includes('/area/')) {
          item.priority = 0.8;
          // @ts-ignore
          item.changefreq = 'weekly';
        }

        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
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
});