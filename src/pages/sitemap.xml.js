// src/pages/sitemap.xml.js
import districtsData from '@/data/districts.json';
import { jabodetabekCities } from '@/data/cities';

const baseUrl = 'https://greenfresh.co.id';

export async function GET() {
  const lastMod = new Date().toISOString();

  // 1. Daftar Halaman Statis
  const staticPages = [
    '',
    '/produk',
    '/gallery',
    '/about',
    '/kota',
    '/area'
  ];

  // 2. Gabungkan rute statis, kota, dan area
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${route === '' ? '1.0' : '0.9'}</priority>
    </url>`)
    .join('')}
  ${jabodetabekCities
    .map((city) => `
    <url>
      <loc>${baseUrl}/kota/${city.slug}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`)
    .join('')}
  ${districtsData.districts
    .map((district) => `
    <url>
      <loc>${baseUrl}/area/${district.slug}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`)
    .join('')}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}