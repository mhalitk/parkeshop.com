import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';

export default function AboutPage() {
  return (
    <Layout>
      <Hero 
        title="ParkeShop Hakkında"
        description="Parke zemin döşeme konusunda kapsamlı rehberiniz. Zemin ihtiyaçlarınız hakkında bilinçli kararlar vermenize yardımcı olacak uzman tavsiyeleri, pratik ipuçları ve güvenilir bilgiler sunmaya adanmış bir ekibiz."
        showButton={false}
      />
      <section className="container py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">ParkeShop Hakkında</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            ParkeShop'a hoş geldiniz, parke zemin döşeme konusunda kapsamlı rehberiniz. 
            Zemin ihtiyaçlarınız hakkında bilinçli kararlar vermenize yardımcı olacak 
            uzman tavsiyeleri, pratik ipuçları ve güvenilir bilgiler sunmaya adanmış bir ekibiz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Misyonumuz</h2>
          <p className="text-gray-600 mb-6">
            Misyonumuz, parke zemin dünyasını net, doğru ve pratik bilgiler sunarak 
            anlaşılır hale getirmektir. Herkesin yaşam tarzına ve bütçesine uygun, 
            güzel ve dayanıklı zeminlere sahip olmayı hak ettiğine inanıyoruz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ne Yapıyoruz?</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Farklı parke zemin türleri hakkında kapsamlı rehberler sunuyoruz</li>
            <li>Kurulum ve bakım konusunda uzman ipuçları paylaşıyoruz</li>
            <li>En son trendler ve yenilikler hakkında sizi güncel tutuyoruz</li>
            <li>İhtiyaçlarınıza uygun doğru zemin seçimi için pratik tavsiyeler veriyoruz</li>
            <li>Maliyetleri anlamanıza ve bütçe dostu kararlar vermenize yardımcı oluyoruz</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Değerlerimiz</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Doğruluk: İyi araştırılmış, doğrulanmış bilgiler sunuyoruz</li>
            <li>Şeffaflık: Kaynaklarımız ve önerilerimiz konusunda açık oluyoruz</li>
            <li>Pratiklik: Gerçek dünyada işe yarayan çözümlere odaklanıyoruz</li>
            <li>Erişilebilirlik: Karmaşık konuları anlaşılır hale getiriyoruz</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Not</h2>
            <p className="text-gray-600">
              ParkeShop bir bilgi rehber sitesidir, mağaza değildir. Doğrudan zemin satışı 
              yapmıyoruz, ancak zemin seçimlerinizde bilinçli kararlar vermenize yardımcı oluyoruz.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 