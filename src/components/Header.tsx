'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-effect shadow-lg'
          : 'bg-white/10 backdrop-blur-md'
      } border-b border-white/20`}
      role="banner"
    >
      <nav
        className="container mx-auto flex items-center justify-between py-4 px-6"
        role="navigation"
        aria-label="ניווט ראשי"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="MULTIBRAWN - דף הבית">
          <Image
            src="https://github.com/kfischi/MULTIBRAWN-V.1/raw/main/Gallery/לוגו2.png"
            alt="MULTIBRAWN לוגו"
            width={45}
            height={45}
            priority
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-2xl font-bold text-text-dark font-heading">
            MULTIBRAWN
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-text-dark hover:opacity-60 transition-opacity duration-300 font-medium"
          >
            דף הבית
          </Link>
          <Link
            href="/about"
            className="text-text-dark hover:opacity-60 transition-opacity duration-300 font-medium"
          >
            אודות
          </Link>
          <Link
            href="/gallery"
            className="text-text-dark hover:opacity-60 transition-opacity duration-300 font-medium"
          >
            גלריה
          </Link>
          <Link
            href="/tips"
            className="text-text-dark hover:opacity-60 transition-opacity duration-300 font-medium"
          >
            טיפים
          </Link>
          <Link
            href="/contact"
            className="btn-primary"
          >
            צור קשר
          </Link>
        </div>

        {/* Mobile Menu Button - Will add in next iteration */}
        <button
          className="md:hidden text-text-dark"
          aria-label="תפריט"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

