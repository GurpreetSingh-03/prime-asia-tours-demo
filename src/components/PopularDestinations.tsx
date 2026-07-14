'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

const destinations = [
  {
    id: 1,
    title: 'Burj Khalifa',
    image: '/images/Burj-khalifa.jpg',
  },
  {
    id: 2,
    title: 'Palm Jumeirah',
    image: '/images/Palm Jumeirah.jpg',
  },
  {
    id: 3,
    title: 'Burj Al Arab',
    image: '/images/Burj-al-arab.jpg',
  },
  {
    id: 4,
    title: 'Dubai Marina',
    image: '/images/Dubai Marina.jpg',
  },
  {
    id: 5,
    title: 'Dubai Mall & Fountain',
    image: '/images/Dubai Mall & Fountain.jpg',
  },
];

export default function PopularDestinations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');

  const handleEnquiryOpen = (title: string) => {
    setSelectedDest(title);
    setIsModalOpen(true);
  };

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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/5 group-hover:via-black/45 transition-all duration-500" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col items-start justify-end transform translate-y-1 group-hover:translate-y-0 transition-transform duration-350">
                {/* Title */}
                <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                  {dest.title}
                </h3>
                
                {/* Enquiry Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnquiryOpen(dest.title);
                  }}
                  className="mt-3 inline-flex items-center gap-1 text-[11px] md:text-xs font-extrabold uppercase tracking-wider text-brand-gold-500 hover:text-white transition-colors cursor-pointer group/btn"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
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

      {/* Enquiry Modal Pop-up */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={selectedDest}
      />
    </section>
  );
}
