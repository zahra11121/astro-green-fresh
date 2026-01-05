/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#052c17', // Hijau gelap Green Fresh
        'brand-lime': '#bef264',  // Hijau terang aksen
      }
    },
  },
  plugins: [],
}