import { promises as fs } from 'fs';
import path from 'path';
import { getAllBlogPosts, getBlogCategories } from './blog';

interface SitemapEntry {
  url: string;
  changefreq: string;
  priority: number;
  lastmod?: string;
}

export async function generateSitemapData(): Promise<SitemapEntry[]> {
  const baseUrl = 'https://parkeshop.com';
  const entries: SitemapEntry[] = [];

  // Add main pages
  entries.push(
    {
      url: `${baseUrl}/`,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changefreq: 'monthly',
      priority: 0.8,
    }
  );

  // Add blog categories and posts
  const categories = getBlogCategories();
  const posts = getAllBlogPosts();

  // Add category pages
  categories.forEach((category) => {
    entries.push({
      url: `${baseUrl}/b/${category.slug}`,
      changefreq: 'weekly',
      priority: 0.9,
    });
  });

  // Add individual blog posts
  posts.forEach((post) => {
    entries.push({
      url: `${baseUrl}${post.href}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    });
  });

  return entries;
}

export function generateSitemapXml(entries: SitemapEntry[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml;
} 