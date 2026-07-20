'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Globe, Briefcase, Compass, MapPin } from 'lucide-react';

const slides = [
  { id: 1, src: '/images/home-crousel-1.jpg' },
  { id: 2, src: '/images/home-crousel-2.jpg' },
  { id: 3, src: '/images/home-crousel-3.jpg' },
  { id: 4, src: '/images/home-crousel-4.jpg' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full bg-[#0d1326] flex flex-col md:block">
      
      {/* 1. Image Carousel & Overlay Area */}
      <section className="relative w-full h-[62vh] min-h-[440px] md:h-screen overflow-hidden z-10">
        
        {/* Slides loop */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center select-none"
            />
          </div>
        ))}

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/55 via-black/25 to-transparent z-[1]" />

        {/* Text Overlay & Buttons (Left Aligned) */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-12 md:pt-0">
            <div className="max-w-xl text-left">
              
              <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Your Journey <br />
                Starts Here
              </h1>

              {/* Gold Accent Bar */}
              <div className="w-14 h-1.5 bg-brand-gold-500 rounded-full my-4" />

              <p className="text-[11px] sm:text-sm md:text-base text-white/90 font-medium leading-relaxed mb-6 md:mb-8">
                Explore. Experience. Enjoy Dubai
              </p>

              {/* Buttons Layout */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                
                {/* Explore Tours Button */}
                <a
                  href="#tours"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#324589] hover:bg-[#25346c] text-white text-xs md:text-sm font-bold rounded-full transition-colors shadow-lg cursor-pointer"
                >
                  <span>Explore Tours</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

              </div>

            </div>
          </div>
        </div>

        {/* Desktop floating trust badges pill (at the bottom-center) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full shadow-xl px-8 py-3.5 z-20 border border-slate-50/50 hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-brand-gold-500" />
            <span className="text-xs font-bold text-slate-700">Top Destinations</span>
          </div>
          <div className="w-px h-6 bg-slate-200" />
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-brand-gold-500" />
            <span className="text-xs font-bold text-slate-700">Carefully Planned Tours</span>
          </div>
          <div className="w-px h-6 bg-slate-200" />
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-brand-gold-500" />
            <span className="text-xs font-bold text-slate-700">Local Experts</span>
          </div>
        </div>

        {/* Desktop dots indicator (bottom-right) */}
        <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-2.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                index === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </section>

      {/* 2. Mobile Dark Blue Sub-Section */}
      <div className="relative z-20 md:hidden bg-[#0d1326] pt-2 pb-8 flex flex-col items-center text-center px-6">
        
        {/* Mobile floating trust badges card (overlaps top of this section and bottom of image) */}
        <div className="w-full max-w-md mx-auto -mt-8 mb-8 bg-white rounded-2xl shadow-xl p-4 grid grid-cols-3 gap-1 divide-x divide-slate-100 border border-slate-100/50">
          <div className="flex items-center justify-center gap-1.5 px-1">
            <Globe className="w-4 h-4 text-brand-gold-500 shrink-0" />
            <span className="text-[9px] font-extrabold text-slate-700 leading-tight text-left">Top <br /> Destinations</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 px-1.5">
            <Briefcase className="w-4 h-4 text-brand-gold-500 shrink-0" />
            <span className="text-[9px] font-extrabold text-slate-700 leading-tight text-left">Carefully <br /> Planned Tours</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 px-1">
            <Compass className="w-4 h-4 text-brand-gold-500 shrink-0" />
            <span className="text-[9px] font-extrabold text-slate-700 leading-tight text-left">Local <br /> Experts</span>
          </div>
        </div>

        {/* Yellow Map Pin */}
        <MapPin className="w-6 h-6 text-brand-gold-500 mb-2" />
        
        {/* Title */}
        <h2 className="text-white text-sm sm:text-base font-extrabold tracking-wide">
          Discover Amazing Places
        </h2>
        
        {/* Subtitle */}
        <p className="text-slate-400 text-[10px] sm:text-xs mt-1 font-semibold">
          Handpicked destinations for unforgettable memories.
        </p>

        {/* Mobile dots indicator */}
        <div className="flex items-center gap-2 mt-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                index === current ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
