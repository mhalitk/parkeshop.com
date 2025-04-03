import React from 'react';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Hero from '@/components/Hero';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// This would typically come from your CMS or content management system
const categoryContent = {
  types: {
    title: 'Parke Çeşitleri',
    description: 'Farklı parke stillerini, malzemelerini ve görünümlerini keşfedin.',
    articles: [
      {
        title: 'Laminat vs. Masif Parke',
        description: 'Laminat ve masif parke zeminlerin avantaj ve dezavantajlarını karşılaştırın.',
        href: '/articles/laminat-vs-masif',
        tags: ['karşılaştırma', 'malzemeler', 'dayanıklılık'],
      },
      {
        title: 'Şevron Parke Nedir?',
        description: 'Klasik şevron deseni ve modern uygulamaları hakkında bilgi edinin.',
        href: '/articles/sevron-parke',
        tags: ['desenler', 'tasarım', 'klasik'],
      },
    ],
  },
  installation: {
    title: 'Kurulum & DIY',
    description: 'Parke döşemeyi öğrenin veya profesyonel kurulum için hazırlanın.',
    articles: [
      {
        title: 'Laminat Parke Nasıl Döşenir?',
        description: 'Laminat parke döşeme adım adım rehberi.',
        href: '/articles/laminat-parke-doseme',
        tags: ['DIY', 'kurulum', 'rehber'],
      },
      {
        title: 'Parke Kurulumu İçin Hazırlık',
        description: 'Parke kurulumu için alanınızı hazırlamanın temel adımları.',
        href: '/articles/kurulum-hazirligi',
        tags: ['hazırlık', 'aletler', 'rehber'],
      },
    ],
  },
  // Add other categories here
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category;
  const content = categoryContent[category as keyof typeof categoryContent];

  if (!content) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Kategori Bulunamadı</h1>
          <p className="text-xl text-gray-600">İstediğiniz kategori mevcut değil.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero 
        title={content.title}
        description={content.description}
        showButton={false}
      />
      <section className="container py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Makaleler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.articles.map((article) => (
            <Card key={article.href} {...article} />
          ))}
        </div>
      </section>
    </Layout>
  );
} 