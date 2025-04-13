import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Header: React.FC = () => {
  // Convert hex color to RGB for CSS filter
  const hexToRGB = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r} ${g} ${b}`;
  };

  return (
    <header className="bg-neutral-light shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/icon.svg"
              alt="ParkeShop Logo"
              width={32}
              height={32}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-accent-green">
              ParkeShop
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/b/parke-cesitleri" className="text-neutral-dark hover:text-accent-green">
              Parke Çeşitleri
            </Link>
            <Link href="/b/kurulum-diy" className="text-neutral-dark hover:text-accent-green">
              Kurulum & DIY
            </Link>
            <Link href="/b/bakim-temizlik" className="text-neutral-dark hover:text-accent-green">
              Bakım & Temizlik
            </Link>
            {/* <Link href="/b/trendler-ilham" className="text-neutral-dark hover:text-accent-green">
              Trendler & İlham
            </Link>
            <Link href="/b/fiyat-satinalma-rehberi" className="text-neutral-dark hover:text-accent-green">
              Fiyat & Satın Alma Rehberi
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 