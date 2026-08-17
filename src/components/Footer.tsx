'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Image from 'next/image';
import { Logo } from './Header';
import { getAssetUrl } from '@/utils/getAssetUrl';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer id="contact" className="relative bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 overflow-hidden">
      
      {/* Animated Background Image Behind Footer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetUrl('/images/footer-bg.png')}
          alt="Footer Landscape Background"
          fill
          className="object-cover opacity-90 scale-105 animate-slow-pan"
        />
        {/* Soft, Transparent Black Shade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-955/50 to-slate-950/90 z-[1]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-900/60">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="mb-4 select-none cursor-pointer">
              <Image
                src={getAssetUrl('/images/logo.png')}
                alt="Prime Asia Tours"
                width={220}
                height={60}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6 max-w-xs font-semibold">
              We make travel simple, enjoyable and memorable. Explore the world with us!
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                className="w-8 h-8 rounded-full bg-slate-900/70 border border-slate-800 hover:bg-brand-blue-600 hover:text-white flex items-center justify-center text-slate-305 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="w-8 h-8 rounded-full bg-slate-900/70 border border-slate-800 hover:bg-brand-blue-600 hover:text-white flex items-center justify-center text-slate-305 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="w-8 h-8 rounded-full bg-slate-900/70 border border-slate-800 hover:bg-brand-blue-600 hover:text-white flex items-center justify-center text-slate-305 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                className="w-8 h-8 rounded-full bg-slate-900/70 border border-slate-800 hover:bg-brand-blue-600 hover:text-white flex items-center justify-center text-slate-305 transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.018 0 12 0 12s0 3.982.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.858.555 9.388.555 9.388.555s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.982 24 12 24 12s0-3.982-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-sm font-semibold text-slate-300">
              <li><a href="/#home" className="hover:text-brand-gold-500 transition-colors">Home</a></li>
              <li><a href="/#destinations" className="hover:text-brand-gold-500 transition-colors">Destinations</a></li>
              <li><a href="/#tours" className="hover:text-brand-gold-500 transition-colors">Tours</a></li>
              <li><a href="/about-us" className="hover:text-brand-gold-500 transition-colors">About Us</a></li>
              <li><a href="/contact-us" className="hover:text-brand-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Top Destinations
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-sm font-semibold text-slate-300">
              <li><a href="/destinations/dubai" className="hover:text-brand-gold-500 transition-colors">Dubai</a></li>
              <li><a href="/#destinations" className="hover:text-brand-gold-500 transition-colors">Thailand</a></li>
              <li><a href="/#destinations" className="hover:text-brand-gold-500 transition-colors">Maldives</a></li>
              <li><a href="/destinations/paris" className="hover:text-brand-gold-500 transition-colors">Paris, France</a></li>
              <li><a href="/destinations/switzerland" className="hover:text-brand-gold-500 transition-colors">Switzerland</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Support
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-sm font-semibold text-slate-300">
              <li><a href="/#faq" className="hover:text-brand-gold-500 transition-colors">FAQ</a></li>
              <li><a href="/#why-us" className="hover:text-brand-gold-500 transition-colors">Booking Guide</a></li>
              <li><a href="/terms-conditions" className="hover:text-brand-gold-500 transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="/privacy-policy" className="hover:text-brand-gold-500 transition-colors">Privacy Policy</a></li>
              <li><a href="/contact-us" className="hover:text-brand-gold-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="lg:col-span-2 text-left flex flex-col">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Newsletter
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4 font-medium">
              Subscribe to get updates on new tours and offers.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2 flex">
              <input
                type="email"
                required
                placeholder={subscribed ? 'Subscribed!' : 'Enter your email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                className="w-full text-xs font-semibold px-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl focus:outline-none focus:border-brand-blue-500 placeholder-slate-500 disabled:bg-emerald-950 disabled:text-emerald-400 disabled:border-emerald-900 transition-all text-slate-200"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 bottom-1 px-3 bg-brand-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-brand-blue-700 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center">
          <p className="text-xs md:text-sm font-semibold text-slate-400">
            © 2025 Prime Asia Tours. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
