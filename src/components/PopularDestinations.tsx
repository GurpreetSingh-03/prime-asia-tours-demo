'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

const destinations = [
  {
    id: 1,
    slug: 'dubai',
    title: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    subtitle: 'UAE',
  },
  {
    id: 2,
    slug: 'switzerland',
    title: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Europe',
  },
  {
    id: 3,
    slug: 'paris',
    title: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    subtitle: 'France',
  },
  {
    id: 4,
    slug: 'georgia',
    title: 'Georgia',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Caucasus',
  },
  {
    id: 5,
    slug: 'united-states',
    title: 'United States',
    image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80',
    subtitle: 'North America',
  },
  {
    id: 6,
    slug: 'morocco',
    title: 'Morocco',
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
    subtitle: 'North Africa',
  },
  {
    id: 7,
    slug: 'wiesbaden',
    title: 'Wiesbaden',
    image: 'https://images.unsplash.com/photo-1595844730298-b959547909fe?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Germany',
  },
];

export default function PopularDestinations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleEnquiryOpen = (title: string) => {
    setSelectedDest(title);
    setIsModalOpen(true);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -344 : 344; // Card width 320px + gap 24px = 344px
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-20 bg-white overflow-hidden text-left scroll-mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-brand-blue-600 uppercase mb-3">
            Top Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight relative">
            Popular{' '}
            <span className="relative inline-block">
              Destinations
              <span className="absolute bottom-[-6px] left-0 right-0 h-[3px] bg-brand-gold-500 rounded-full" />
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-550 mt-6 font-semibold">
            Discover amazing global holiday packages and visa details. Click any card to explore.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group/carousel">
          
          {/* Floating Left Navigation Button */}
          <button
            onClick={() => handleScroll('left')}
            className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-slate-700 hover:text-brand-blue-600 shadow-md border border-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 items-center justify-center cursor-pointer hover:bg-slate-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2]" />
          </button>

          {/* Floating Right Navigation Button */}
          <button
            onClick={() => handleScroll('right')}
            className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-slate-700 hover:text-brand-blue-600 shadow-md border border-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 items-center justify-center cursor-pointer hover:bg-slate-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 stroke-[2]" />
          </button>

          {/* Carousel Slider Row */}
          <div 
            ref={scrollRef}
            className="flex flex-row gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="shrink-0 w-[78vw] sm:w-[48vw] md:w-[320px] snap-center relative aspect-[3/4.2] min-h-[380px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg group cursor-pointer border border-slate-100/50 hover:scale-[1.02] transition-all duration-300 block"
              >
                {/* Image */}
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 48vw, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                />

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 group-hover:via-black/50 transition-all duration-500" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col items-start justify-end transform translate-y-1 group-hover:translate-y-0 transition-transform duration-350">
                  <span className="text-[9px] font-extrabold text-brand-gold-500 uppercase tracking-widest mb-2">
                    {dest.subtitle}
                  </span>
                  {/* Title */}
                  <h3 className="text-sm md:text-base font-extrabold text-white leading-tight">
                    {dest.title}
                  </h3>
                  
                  {/* Enquiry Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleEnquiryOpen(dest.title);
                    }}
                    className="mt-3.5 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-gold-500 hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </Link>
            ))}
          </div>
          
        </div>

        {/* Action Button Below Grid */}
        <div className="flex justify-center mt-6">
          <a
            href="/#destinations"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 hover:border-brand-blue-600 rounded-full text-sm font-bold text-slate-700 hover:text-brand-blue-600 bg-white transition-all duration-300 hover:scale-[1.03]"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Enquiry Modal Pop-up */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={selectedDest}
      />
    </section>
  );
}
