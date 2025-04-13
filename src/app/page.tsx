import React from 'react';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Hero from '@/components/Hero';

const categories = [
  {
    title: 'Parke Çeşitleri',
    description: 'Farklı parke stillerini, malzemelerini ve görünümlerini keşfedin.',
    href: '/b/parke-cesitleri',
    tags: ['meşe', 'laminat', 'masif', 'desenler'],
  },
  {
    title: 'Kurulum & DIY',
    description: 'Parke döşemeyi öğrenin veya profesyonel kurulum için hazırlanın.',
    href: '/b/kurulum-diy',
    tags: ['DIY', 'kurulum', 'aletler', 'hazırlık'],
  },
  {
    title: 'Bakım & Temizlik',
    description: 'Parke zeminlerinizi düzgün bakım ile güzel tutun.',
    href: '/b/bakim-temizlik',
    tags: ['temizlik', 'bakım', 'koruma', 'ürünler'],
  },
  {
    title: 'Trendler & İlham',
    description: 'En son parke trendlerini keşfedin ve eviniz için ilham alın.',
    href: '/b/trendler-ilham',
    tags: ['trendler', 'ilham', 'tasarım', 'modern'],
  },
  {
    title: 'Fiyat & Satın Alma Rehberi',
    description: 'Parke maliyetleri ve farklı markalar hakkında bilgi edinin.',
    href: '/b/fiyat-satina-rehberi',
    tags: ['fiyatlar', 'markalar', 'karşılaştırma', 'bütçe'],
  },
];

const featuredArticles = [
  {
    title: 'Parke Nedir?',
    description: 'Parke zemin kaplama ve faydaları hakkında kapsamlı bir rehber.',
    href: '/articles/parke-nedir',
    tags: ['temel', 'giriş', 'faydalar'],
  },
  {
    title: 'Eviniz İçin Doğru Parkeyi Seçme',
    description: 'Mekanınız için mükemmel parke zemin seçimi konusunda uzman ipuçları.',
    href: '/articles/dogru-parke-secimi',
    tags: ['seçim', 'rehber', 'ipuçları'],
  },
];

export default function Home() {
  return (
    <Layout>
      <Hero 
        title="Parke Dünyasına Hoş Geldiniz"
        description="Zemin ihtiyaçlarınız için en iyi kararları vermenize yardımcı olacak stiller, kurulum ipuçları, bakım püf noktaları ve daha fazlasını keşfedin."
        showButton={true}
      />

      <div className="container py-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-700">
            Not: Bu bir rehber sitesidir, mağaza değildir. Parke zemin seçimlerinizde bilinçli kararlar 
            vermenize yardımcı olacak uzman tavsiyeleri ve bilgiler sunuyoruz.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Ana Kategoriler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.href} {...category} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Öne Çıkan Makaleler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.href} {...article} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
} 