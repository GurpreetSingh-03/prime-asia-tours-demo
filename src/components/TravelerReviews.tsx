'use client';

import Image from 'next/image';
import { getAssetUrl } from '@/utils/getAssetUrl';

const reviews = [
  {
    id: 1,
    text: 'The Bali trip was amazing! Everything was well planned and the experience was beyond our expectations.',
    name: 'Priya Sharma',
    location: 'Delhi, India',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 2,
    text: 'Excellent service and great support throughout the trip. Highly recommended!',
    name: 'Rahul Mehta',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 3,
    text: 'Our Maldives vacation was wonderful. The resort and the team were outstanding!',
    name: 'Ananya Iyer',
    location: 'Bangalore, India',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
  },
];

export default function TravelerReviews() {
  return (
    <section className="py-20 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headers */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-brand-blue-600 uppercase mb-3">
            Traveler Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
            What Our Travelers Say
          </h2>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl p-8 relative flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 text-left"
            >
              {/* Quote Mark Icon */}
              <div className="text-brand-blue-600 text-5xl font-serif leading-none absolute top-4 left-6 select-none opacity-20">
                “
              </div>

              {/* Review Text */}
              <p className="text-sm md:text-base text-slate-600 leading-relaxed italic mb-8 mt-4 relative z-10">
                {rev.text}
              </p>

              {/* Reviewer Meta info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-100">
                  <Image
                    src={getAssetUrl(rev.avatar)}
                    alt={rev.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-dark">{rev.name}</span>
                  <span className="text-xs text-slate-400 font-semibold">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Indicators (5 dots, 2nd is blue) */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="w-2.5 h-2.5 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors" aria-label="Slide 1" />
          <button className="w-2.5 h-2.5 rounded-full bg-brand-blue-600 transition-colors" aria-label="Slide 2" />
          <button className="w-2.5 h-2.5 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors" aria-label="Slide 3" />
          <button className="w-2.5 h-2.5 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors" aria-label="Slide 4" />
          <button className="w-2.5 h-2.5 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors" aria-label="Slide 5" />
        </div>

      </div>
    </section>
  );
}
