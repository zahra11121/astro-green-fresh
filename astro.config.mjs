// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://greenfresh.co.id',
  
  // Memaksa URL tanpa slash (Contoh: /area/ -> /area)
  trailingSlash: 'never',
  
  build: {
    format: 'file' 
  },

  // CATATAN: Redirect dipindah ke file public/_redirects agar tidak error getStaticPaths
  
  integrations: [
    react(),
    tailwind(), 
    sitemap({
      i18n: undefined,
      serialize(item) {
        if (item.url.endsWith('/') && item.url !== 'https://greenfresh.co.id/') {
          item.url = item.url.slice(0, -1);
        }

        const staticRoutes = ['/produk', '/gallery', '/about', '/kota', '/area'];
        const isStatic = staticRoutes.some(route => item.url.endsWith(route)) || item.url === 'https://greenfresh.co.id';
        
        if (isStatic) {
          item.priority = 1.0;
          // @ts-ignore
          item.changefreq = 'daily';
        }

        if (item.url.includes('/kota/') || item.url.includes('/area/')) {
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