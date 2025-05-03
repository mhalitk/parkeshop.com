import { generateSitemapData, generateSitemapXml } from '@/lib/sitemap';
import { NextResponse } from 'next/server';

export async function GET() {
  const entries = await generateSitemapData();
  const xml = generateSitemapXml(entries);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 