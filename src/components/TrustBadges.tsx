'use client';

import { ShieldCheck, CalendarRange, Compass } from 'lucide-react';

const badges = [
  {
    id: 1,
    icon: ShieldCheck,
    title: 'Best Price Guarantee',
    description: 'Get the best prices',
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: 'Trusted Travel Guide',
    description: 'Experienced & professional',
  },
  {
    id: 3,
    icon: CalendarRange,
    title: 'Easy Booking',
    description: 'Book in just a few clicks',
  },
  {
    id: 4,
    icon: Compass,
    title: 'Local Experts',
    description: 'Deep local knowledge',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className="flex items-center gap-4 px-4 py-2 hover:scale-[1.02] transition-transform duration-200"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue-50 text-brand-blue-600 shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                {/* Text content */}
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-brand-dark leading-snug">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-slate-550 mt-0.5 font-medium">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
