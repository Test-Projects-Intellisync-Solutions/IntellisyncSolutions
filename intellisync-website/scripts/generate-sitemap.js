import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import matter from 'gray-matter';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site URL
const SITE_URL = 'https://intellisync.io';
const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content');
const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');

// Define route priorities and change frequencies
const ROUTE_CONFIG = {
  // Main pages
  '/': { priority: '1.0', changefreq: 'daily' },
  '/about': { priority: '0.9', changefreq: 'weekly' },
  '/products': { priority: '0.9', changefreq: 'weekly' },
  '/pricing': { priority: '0.8', changefreq: 'monthly' },
  '/promotions': { priority: '0.8', changefreq: 'weekly' },
  '/gptbuilder': { priority: '0.8', changefreq: 'weekly' },
  '/faq': { priority: '0.7', changefreq: 'monthly' },
  '/blog': { priority: '0.9', changefreq: 'weekly' },
  
  // About section
  '/about/how-we-work': { priority: '0.8', changefreq: 'monthly' },
  '/about/team': { priority: '0.8', changefreq: 'monthly' },
  '/about/mission': { priority: '0.8', changefreq: 'monthly' },
  
  // Products section
  '/products/ai-solutions': { priority: '0.8', changefreq: 'weekly' },
  '/products/technology': { priority: '0.8', changefreq: 'weekly' },
  '/products/case-studies': { priority: '0.7', changefreq: 'monthly' },
  '/products/case-studies/mnemosys': { priority: '0.8', changefreq: 'monthly' },
  
  // Legal pages
  '/terms': { priority: '0.3', changefreq: 'yearly' },
  '/privacy': { priority: '0.3', changefreq: 'yearly' },
  '/disclaimer': { priority: '0.3', changefreq: 'yearly' }
};

// Get all blog posts with frontmatter
async function getBlogPosts() {
  const blogDir = path.join(CONTENT_DIR, 'blog');
  const files = await glob('**/*.md', { cwd: blogDir });
  
  return Promise.all(
    files.map(async (file) => {
      const filePath = path.join(blogDir, file);
      const content = await fs.promises.readFile(filePath, 'utf8');
      const { data } = matter(content);
      
      // Generate slug from filename
      const slug = file.replace(/\.md$/, '');
      
      return {
        slug: `/blog/${slug}`,
        lastmod: data.updated || data.date || new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.7',
        images: data.images || [],
        title: data.title,
        date: data.date
      };
    })
  );
}

// Generate sitemap XML
const generateSitemap = async () => {
  const today = new Date().toISOString().split('T')[0];
  const blogPosts = await getBlogPosts();
  
  // Generate URL entries
  const urlEntries = [];
  
  // Add static routes with proper section organization
  // ========== MAIN PAGES ==========
  const mainPages = ['/', '/pricing', '/promotions', '/gptbuilder', '/faq', '/about', '/products'];
  mainPages.forEach(route => {
    const config = ROUTE_CONFIG[route] || { changefreq: 'weekly', priority: '0.8' };
    urlEntries.push({
      loc: route,
      lastmod: today,
      changefreq: config.changefreq,
      priority: config.priority,
      section: 'main'
    });
  });
  
  // ========== ABOUT PAGES ==========
  const aboutPages = ['/about/how-we-work', '/about/team', '/about/mission'];
  aboutPages.forEach(route => {
    const config = ROUTE_CONFIG[route] || { changefreq: 'monthly', priority: '0.8' };
    urlEntries.push({
      loc: route,
      lastmod: today,
      changefreq: config.changefreq,
      priority: config.priority,
      section: 'about'
    });
  });
  
  // ========== PRODUCTS PAGES ==========
  const productPages = [
    '/products/ai-solutions',
    '/products/technology',
    '/products/case-studies',
    '/products/case-studies/mnemosys'
  ];
  productPages.forEach(route => {
    const config = ROUTE_CONFIG[route] || { changefreq: 'weekly', priority: '0.8' };
    urlEntries.push({
      loc: route,
      lastmod: today,
      changefreq: config.changefreq,
      priority: config.priority,
      section: 'products'
    });
  });
  
  // Add blog index
  urlEntries.push({
    loc: '/blog',
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.9',
    section: 'blog'
  });
  
  // ========== LEGAL PAGES ==========
  const legalPages = ['/terms', '/privacy', '/disclaimer'];
  legalPages.forEach(route => {
    const config = ROUTE_CONFIG[route] || { changefreq: 'yearly', priority: '0.3' };
    urlEntries.push({
      loc: route,
      lastmod: today,
      changefreq: config.changefreq,
      priority: config.priority,
      section: 'legal'
    });
  });
  
  // Add blog posts
  blogPosts.forEach(post => {
    urlEntries.push({
      loc: post.slug,
      lastmod: post.lastmod,
      changefreq: post.changefreq,
      priority: post.priority,
      images: post.images,
      title: post.title,
      date: post.date
    });
  });
  
  // Generate XML
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Sitemap for ${SITE_URL}
  Structured for optimal LLM parsing, SEO, and GEO (GPT Engine Optimization).
  Includes priority tuning, semantic slugs, and lastmod frequency alignment.
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;
  
  const xmlFooter = '\n</urlset>';
  
  // Group entries by section
  const sections = {
    main: { title: 'MAIN PAGES', entries: [] },
    about: { title: 'ABOUT PAGES', entries: [] },
    products: { title: 'PRODUCTS PAGES', entries: [] },
    blog: { title: 'BLOG PAGES', entries: [] },
    legal: { title: 'LEGAL PAGES', entries: [] },
    other: { title: 'OTHER PAGES', entries: [] }
  };
  
  // Sort entries into sections
  urlEntries.forEach(entry => {
    const section = sections[entry.section] || sections.other;
    section.entries.push(entry);
  });
  
  // Generate XML nodes
  let urlNodes = [];
  
  // Add entries for each section
  Object.entries(sections).forEach(([sectionKey, section]) => {
    if (section.entries.length > 0) {
      // Add section comment
      urlNodes.push(`\n  <!-- ========== ${section.title} ========== -->`);
      
      // Add entries for this section
      section.entries.forEach(entry => {
        let node = `\n  <url>\n    <loc>${SITE_URL}${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>`;
    
    // Add images if available (for blog posts)
    if (entry.images && entry.images.length > 0) {
      entry.images.forEach(img => {
        node += `\n    <image:image>\n      <image:loc>${img.startsWith('http') ? img : `${SITE_URL}${img}`}</image:loc>\n    </image:image>`;
      });
    }
    
    // Add news metadata for blog posts
    if (entry.loc.startsWith('/blog/') && entry.title && entry.date) {
      node += `\n    <news:news>\n      <news:publication>\n        <news:name>Intellisync Insights</news:name>\n        <news:language>en</news:language>\n      </news:publication>\n      <news:publication_date>${entry.date}</news:publication_date>\n      <news:title><![CDATA[${entry.title}]]></news:title>\n    </news:news>`;
    }
    
        node += '\n  </url>';
        urlNodes.push(node);
      });
    }
  });
  
  const sitemapContent = xmlHeader + urlNodes.join('') + xmlFooter;

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
