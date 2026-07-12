'use client';

import { Hotel, Compass, Briefcase, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Hotel,
    title: 'Handpicked Hotels',
    description: 'Stay in the best hotels selected for comfort and convenience.',
  },
  {
    id: 2,
    icon: Compass,
    title: 'Expert Tour Guides',
    description: 'Our local experts ensure you get the most authentic experience.',
  },
  {
    id: 3,
    icon: Briefcase,
    title: 'Custom Packages',
    description: 'Personalized itineraries that fit your style and budget.',
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Secure Booking',
    description: 'Your booking is safe with our secure and trusted system.',
  },
];

export default function WhyTravelWithUs() {
  return (
    <section id="why-us" className="py-20 bg-[#fbfcfd] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headers */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-brand-blue-600 uppercase mb-3">
            Why Travel With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
            Travel Made Easy & Memorable
          </h2>
        </div>

        {/* 4 Feature Items Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="flex flex-col items-center text-center px-4 hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Blue Icon Circular container */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue-600 text-white shadow-md shadow-brand-blue-500/20 mb-5">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-brand-dark mb-2">
                  {feat.title}
                </h3>
                {/* Description */}
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
