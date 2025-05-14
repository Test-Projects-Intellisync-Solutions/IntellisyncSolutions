import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site URL
const SITE_URL = 'https://intellisyncsolutions.com';

// Define all your routes
const routes = [
  '/',
  '/about',
  '/products',
  '/pricing',
  '/promotions',
  '/gptbuilder',
  '/faq',
  '/terms',
  '/privacy',
  '/disclaimer'
  // Add any additional routes here
];

// Generate sitemap XML
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Ensure the public directory exists
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the sitemap file
  fs.writeFileSync(
    path.join(publicDir, 'sitemap.xml'),
    sitemapContent
  );

  console.log('Sitemap generated successfully!');
};

// Run the generator
generateSitemap();
