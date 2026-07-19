'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
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
            className="object-cover select-none"
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent z-[1]" />

      {/* Left-aligned text */}
      <div className="absolute inset-0 z-[2] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-[1.15] tracking-tight">
              Your Journey <br />
              Starts Here
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/70 font-light leading-relaxed">
              Explore. Experience. Enjoy Dubai
            </p>
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-300 ${
              index === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
