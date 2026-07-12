'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center select-none cursor-pointer">
      <Image
        src="/images/logo.png"
        alt="ExploreX"
        width={140}
        height={38}
        className="h-9 w-auto object-contain"
        priority
      />
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Tours', href: '#tours' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-sm py-3'
          : 'bg-white/95 md:bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" onClick={() => setActiveLink('Home')}>
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`font-sans text-[15px] font-medium transition-colors duration-200 relative py-2 ${
                    isActive ? 'text-brand-blue-600 font-semibold' : 'text-slate-650 hover:text-brand-blue-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/4 right-1/4 h-[3px] bg-brand-blue-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+12345678900"
              className="flex items-center gap-2 text-slate-700 hover:text-brand-blue-600 transition-colors text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-brand-blue-600" />
              <span>+1 234 567 8900</span>
            </a>
            <button
              aria-label="Profile"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-brand-blue-600 hover:text-brand-blue-600 flex items-center justify-center text-slate-650 transition-all duration-200 hover:scale-105"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 top-[80px] z-40 md:hidden bg-white transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-6 py-8 gap-6 border-t border-slate-100">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-lg font-semibold transition-colors ${
                  activeLink === link.name ? 'text-brand-blue-600' : 'text-slate-800 hover:text-brand-blue-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <hr className="border-slate-100" />

          {/* Mobile Actions */}
          <div className="flex flex-col gap-6 mt-4">
            <a
              href="tel:+12345678900"
              className="flex items-center gap-3 text-slate-800 text-base font-semibold"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Phone className="w-5 h-5" />
              </div>
              <span>+1 234 567 8900</span>
            </a>
            <button
              className="w-full py-3 border border-slate-200 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="w-5 h-5" />
              My Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
