import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';

export default function ContactPage() {
  return (
    <Layout>
      <Hero 
        title="İletişim"
        description="Parke zemin hakkında sorularınız mı var? Sizi dinlemekten mutluluk duyarız! Doğru zemin seçimi konusunda tavsiye almak, kurulum konusunda yardıma ihtiyaç duymak veya bizimle işbirliği yapmak isterseniz, lütfen bize ulaşın."
      />
      <section className="container py-12">
        <div className="prose prose-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bize Ulaşın</h2>
              <p className="text-gray-600 mb-4">
                Aşağıdaki formu doldurun, en kısa sürede size dönüş yapacağız.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bize Ulaşmanın Diğer Yolları</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">İşbirliği İçin</h3>
                  <p className="text-gray-600">
                    Bizimle işbirliği yapmak isteyen markalar veya müteahhitler için{' '}
                    <a href="mailto:isbirligi@parkeshop.com" className="text-blue-600 hover:text-blue-800">
                      isbirligi@parkeshop.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Basın İletişimi</h3>
                  <p className="text-gray-600">
                    Basın mensupları bize{' '}
                    <a href="mailto:basin@parkeshop.com" className="text-blue-600 hover:text-blue-800">
                      basin@parkeshop.com
                    </a>
                    adresinden ulaşabilir
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-700">
              Not: Tüm mesajlara 48 saat içinde yanıt vermeyi hedefliyoruz. Bu süre içinde bizden 
              yanıt alamadıysanız, lütfen spam klasörünüzü kontrol edin veya tekrar deneyin.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 