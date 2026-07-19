'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const toursList = [
  {
    id: 1,
    title: 'AquaFun',
    image: '/images/aqua-fun.jpg',
  },
  {
    id: 2,
    title: 'Sheikh Zayed Grand Mosque',
    image: '/images/Sheikh Zayed Grand Mosque.jpg',
  },
  {
    id: 3,
    title: 'Deira Creekside',
    image: '/images/deira crrekside.jpg',
  },
  {
    id: 4,
    title: 'Kite Beach',
    image: '/images/Kite Beach.jpg',
  },
  {
    id: 5,
    title: 'Dubai Desert',
    image: '/images/Dubai Desert.jpeg',
  },
  {
    id: 6,
    title: 'Al Mamzar Beach Park',
    image: '/images/Al Mamzar Beach Park.jpg',
  },
];

export default function TourPackages() {
  return (
    <section id="tours" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-brand-blue-600 uppercase mb-3 block">
              Best Tour Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
              Exclusive Tour Packages
            </h2>
          </div>
          <div>
            <a
              href="#tours"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 hover:border-brand-blue-600 rounded-full text-sm font-bold text-slate-700 hover:text-brand-blue-600 bg-white transition-all duration-300 hover:scale-[1.03]"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 6-Card Custom Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 pb-8">
          {toursList.map((tour) => (
            <div
              key={tour.id}
              className="relative w-full group hover:scale-[1.01] transition-all duration-300"
            >
              {/* Landscape Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-md shadow-slate-100 border border-slate-100">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                />
              </div>

              {/* Overlapping White Circle */}
              <div className="absolute left-0 bottom-[-40px] w-[130px] h-[130px] md:w-[140px] md:h-[140px] rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-3 text-center border border-slate-50/50 group-hover:shadow-xl transition-shadow duration-300 z-10">
                <h3 className="font-sans text-xs md:text-sm font-bold text-brand-blue-600 leading-snug">
                  {tour.title}
                </h3>
                <span className="w-6 h-[1.5px] bg-brand-dark mt-2 opacity-80" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
