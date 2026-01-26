// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
// Hapus atau komentari adapter Vercel Server jika tidak ingin SSR
// import vercel from '@astrojs/vercel'; 

export default defineConfig({
  site: 'https://greenfresh.co.id',

  // 1. UBAH KE STATIC
  // Ini akan menghasilkan file .html murni untuk setiap halaman
  output: 'static',

  // 2. Trailing Slash
  // Untuk statis, 'never' akan menghasilkan folder/index.html 
  // atau file.html tergantung build format
  trailingSlash: 'never',

  build: {
    // 'directory' menghasilkan struktur yang lebih rapi untuk SEO
    // contoh: greenfresh.co.id/produk/ (isinya produk/index.html)
    format: 'directory', 
    assets: '_assets'
  },

  integrations: [
    // Tambahkan 'experimentalReactChildren' jika butuh performa lebih
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
      // Mengurangi ukuran chunk untuk kecepatan loading mobile
      chunkSizeWarningLimit: 500,
    }
  },

});