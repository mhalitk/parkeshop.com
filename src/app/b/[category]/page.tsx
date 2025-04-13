import React from 'react';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Hero from '@/components/Hero';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface CategoryPageProps {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
  };
}

interface CategoryMetadata {
  title: string;
  description: string;
  slug: string;
}

interface ArticleMetadata {
  title: string;
  description: string;
  date?: string;
  slug: string;
  href: string;
  tags?: string[];
}

const ARTICLES_PER_PAGE = 9;

const getCategoryData = (categorySlug: string): { categoryMeta: CategoryMetadata | null; articles: ArticleMetadata[] } => {
  const contentDir = path.join(process.cwd(), 'src/content/blog');
  const categoryDir = path.join(contentDir, categorySlug);

  let categoryMeta: CategoryMetadata | null = null;
  let articles: ArticleMetadata[] = [];

  try {
    if (!fs.existsSync(categoryDir) || !fs.lstatSync(categoryDir).isDirectory()) {
      return { categoryMeta: null, articles: [] };
    }

    const indexPath = path.join(categoryDir, 'index.json');
    if (fs.existsSync(indexPath)) {
      const indexContent = fs.readFileSync(indexPath, 'utf-8');
      categoryMeta = JSON.parse(indexContent) as CategoryMetadata;
    } else {
      return { categoryMeta: null, articles: [] };
    }

    const filenames = fs.readdirSync(categoryDir);
    articles = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(categoryDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        const slug = filename.replace(/\.md$/, '');

        return {
          title: data.title || 'Untitled',
          description: data.excerpt || '',
          date: data.date,
          slug: slug,
          href: `/b/${categorySlug}/${slug}`,
          tags: data.tags || [],
        } as ArticleMetadata;
      });
      
  } catch (error) {
    console.error(`Error reading category ${categorySlug}:`, error);
    return { categoryMeta: null, articles: [] };
  }

  return { categoryMeta, articles };
};

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const categorySlug = params.category;
  const { categoryMeta, articles } = getCategoryData(categorySlug);

  const currentPage = parseInt(searchParams?.page || '1', 10);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = articles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  if (!categoryMeta) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Kategori Bulunamadı</h1>
          <p className="text-xl text-gray-600">İstediğiniz '{categorySlug}' kategorisi mevcut değil.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero 
        title={categoryMeta.title}
        description={categoryMeta.description}
        showButton={false}
      />
      <section className="container py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Makaleler</h2>
        {paginatedArticles.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {paginatedArticles.map((article) => (
               <Card 
                 key={article.slug} 
                 title={article.title} 
                 description={article.description} 
                 href={article.href} 
                 tags={article.tags}
               />
             ))}
           </div>
         ) : (
          <p className="text-xl text-gray-600">Bu kategoride henüz makale bulunmamaktadır.</p>
         )
        }
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            {currentPage > 1 && (
              <a href={`/${categorySlug}?page=${currentPage - 1}`} className="px-4 py-2 border rounded hover:bg-gray-100">Önceki</a>
            )}
            {currentPage < totalPages && (
              <a href={`/${categorySlug}?page=${currentPage + 1}`} className="px-4 py-2 border rounded hover:bg-gray-100">Sonraki</a>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
} 