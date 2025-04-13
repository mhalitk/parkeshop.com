import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-green text-neutral-light">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hakkımızda</h3>
            <p className="text-primary-light">
              Parke dünyasına dair her şey – stiller, kurulum ipuçları, bakım püf noktaları ve daha fazlası.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-light hover:text-accent-amber">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-light hover:text-accent-amber">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/b/parke-cesitleri" className="text-primary-light hover:text-accent-amber">
                  Parke Çeşitleri
                </Link>
              </li>
              <li>
                <Link href="/b/kurulum-diy" className="text-primary-light hover:text-accent-amber">
                  Kurulum & DIY
                </Link>
              </li>
              <li>
                <Link href="/b/bakim-temizlik" className="text-primary-light hover:text-accent-amber">
                  Bakım & Temizlik
                </Link>
              </li>
              {/* <li>
                <Link href="/b/trendler-ilham" className="text-primary-light hover:text-accent-amber">
                  Trendler & İlham
                </Link>
              </li>
              <li>
                <Link href="/b/fiyat-satina-rehberi" className="text-primary-light hover:text-accent-amber">
                  Fiyat & Satın Alma Rehberi
                </Link>
              </li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <p className="text-primary-light">
              Sorularınız mı var? Sizi dinlemekten mutluluk duyarız.
            </p>
            <Link 
              href="/contact" 
              className="mt-4 inline-block bg-accent-amber text-primary-dark px-4 py-2 rounded hover:bg-primary-light"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
        
        <div className="border-t border-primary-light mt-8 pt-8 text-center text-primary-light">
          <p>&copy; {new Date().getFullYear()} ParkeShop. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 