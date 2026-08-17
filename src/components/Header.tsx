'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, User, Search, MapPin } from 'lucide-react';
import Image from 'next/image';
import { destinationsData } from '@/data/destinations';
import { getAssetUrl } from '@/utils/getAssetUrl';

export function Logo() {
  return (
    <div className="flex items-center select-none cursor-pointer">
      <Image
        src={getAssetUrl('/images/logo.png')}
        alt="Prime Asia Tours"
        width={200}
        height={54}
        className="h-8 md:h-10 w-auto object-contain"
        priority
      />
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchMatches = searchQuery
    ? Object.values(destinationsData).filter((dest) =>
        dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : Object.values(destinationsData);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Destinations', href: '/#destinations' },
    { name: 'Tours', href: '/#tours' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${isScrolled
            ? 'translate-y-0 glass-effect shadow-sm py-1.5 md:py-3'
            : 'translate-y-0 md:-translate-y-full bg-white/95 md:bg-transparent py-1.5 md:py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 md:h-14">
            {/* Logo */}
            <a href="/#home" onClick={() => setActiveLink('Home')}>
              <Logo />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`font-sans text-[13px] font-medium transition-colors duration-200 relative py-1.5 ${isActive
                        ? `${isScrolled ? 'text-brand-blue-600' : 'text-white'} font-semibold`
                        : `${isScrolled ? 'text-slate-650 hover:text-brand-blue-600' : 'text-white/85 hover:text-white'}`
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className={`absolute bottom-0 left-1/4 right-1/4 h-[3px] rounded-full ${isScrolled ? 'bg-brand-blue-600' : 'bg-white'}`} />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+971527716690"
                className={`flex items-center gap-1.5 transition-colors text-xs font-semibold ${isScrolled ? 'text-slate-700 hover:text-brand-blue-600' : 'text-white/85 hover:text-white'
                  }`}
              >
                <Phone className={`w-3.5 h-3.5 ${isScrolled ? 'text-brand-blue-600' : 'text-white'}`} />
                <span>+971 52 771 6690</span>
              </a>
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setSearchQuery('');
                }}
                aria-label="Search Destinations"
                className="w-9 h-9 rounded-full bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-dark flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer shadow-md border border-brand-gold-600/20"
              >
                <Search className="w-4.5 h-4.5" />
              </button>
              <button
                aria-label="Profile"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105 ${isScrolled
                    ? 'border-slate-200 hover:border-brand-blue-600 hover:text-brand-blue-600 text-slate-650'
                    : 'border-white/30 hover:border-white hover:text-white text-white/85'
                  }`}
              >
                <User className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Search & Menu Toggle Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setSearchQuery('');
                }}
                className="w-9 h-9 rounded-full bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-dark flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer shadow-md border border-brand-gold-600/20 mr-1"
                aria-label="Search"
              >
                <Search className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 focus:outline-none text-slate-700 hover:text-slate-900 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Placed outside of header to prevent fixed position coordinate conflicts) */}
      <div
        className={`fixed inset-0 top-[52px] z-40 md:hidden bg-white transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
                className={`text-lg font-semibold transition-colors ${activeLink === link.name ? 'text-brand-blue-600' : 'text-slate-800 hover:text-brand-blue-600'
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
              href="tel:+971527716690"
              className="flex items-center gap-3 text-slate-800 text-base font-semibold"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Phone className="w-5 h-5" />
              </div>
              <span>+971 52 771 6690</span>
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
      {/* Search Overlay Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-start justify-center pt-20 md:pt-28 px-4">
          {/* Backdrop Closer */}
          <div className="absolute inset-0 cursor-default" onClick={() => setIsSearchOpen(false)} />
          
          {/* Search Box */}
          <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100/50 p-6 md:p-8 z-10 animate-scale-up text-left flex flex-col max-h-[85vh] md:max-h-[80vh]">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-extrabold tracking-wider text-brand-gold-500 uppercase">
                Search
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark leading-tight mt-1">
                Where to next?
              </h3>
            </div>

            {/* Input */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                autoFocus
                placeholder="Search country or city (e.g. Switzerland, Dubai...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-2xl text-sm placeholder-slate-450 focus:outline-none focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 bg-slate-50/50 font-semibold text-brand-dark"
              />
            </div>

            {/* Results */}
            <div className="flex flex-col flex-grow overflow-hidden">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-3 block shrink-0">
                {searchQuery ? 'Search Results' : 'Recommended Destinations'}
              </span>
              
              <div className="space-y-2.5 overflow-y-auto pr-1 flex-grow">
                {searchMatches.length > 0 ? (
                  searchMatches.map((dest) => (
                    <a
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-3.5 p-3 rounded-2xl border border-slate-100 hover:border-brand-blue-100 hover:bg-brand-blue-50/40 transition-all cursor-pointer group"
                    >
                      <div className="p-2.5 rounded-full bg-brand-blue-50 text-brand-blue-600 shrink-0 group-hover:bg-brand-blue-600 group-hover:text-white transition-colors">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-brand-dark group-hover:text-brand-blue-600 transition-colors">
                          {dest.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">
                          {dest.subtitle}
                        </span>
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="text-center py-8 text-sm text-slate-400 font-semibold italic">
                    No matching destinations found.
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
