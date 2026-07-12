'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Bali, Indonesia',
    price: '$499',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&h=750&q=80',
  },
  {
    id: 2,
    title: 'Phuket, Thailand',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=500&h=750&q=80',
  },
  {
    id: 3,
    title: 'Cappadocia, Turkey',
    price: '$699',
    image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=500&h=750&q=80',
  },
  {
    id: 4,
    title: 'Paris, France',
    price: '$799',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&h=750&q=80',
  },
  {
    id: 5,
    title: 'Maldives',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&h=750&q=80',
  },
];

export default function PopularDestinations() {
  return (
    <section id="destinations" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
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
          <p className="text-sm md:text-base text-slate-500 mt-6 font-medium">
            Discover amazing places at exclusive deals
          </p>
        </div>

        {/* 5-Card Grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto pb-4 scrollbar-thin">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="relative aspect-[3/4.2] min-h-[340px] rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-slate-100/50"
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 group-hover:via-black/45 transition-all duration-500" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end transform translate-y-1 group-hover:translate-y-0 transition-transform duration-350">
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                  {dest.title}
                </h3>
                {/* Price */}
                <div className="text-xs md:text-sm text-slate-200 mt-1.5 font-semibold">
                  From <span className="text-white font-extrabold">{dest.price}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Action Button Below Grid */}
        <div className="flex justify-center mt-12">
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 hover:border-brand-blue-600 rounded-full text-sm font-bold text-slate-700 hover:text-brand-blue-600 bg-white transition-all duration-300 hover:scale-[1.03]"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
