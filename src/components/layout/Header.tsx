"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-neutral-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-neutral-dark transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-neutral-dark my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-neutral-dark transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
          
          {/* Desktop Navigation */}
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

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link 
              href="/b/parke-cesitleri" 
              className="text-neutral-dark hover:text-accent-green py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Parke Çeşitleri
            </Link>
            <Link 
              href="/b/kurulum-diy" 
              className="text-neutral-dark hover:text-accent-green py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Kurulum & DIY
            </Link>
            <Link 
              href="/b/bakim-temizlik" 
              className="text-neutral-dark hover:text-accent-green py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Bakım & Temizlik
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 