'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { destinationsData } from '@/data/destinations';
import { getAssetUrl } from '@/utils/getAssetUrl';

export default function HeroSection() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [travelers, setTravelers] = useState('2 Adults, 1 Child');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = Object.values(destinationsData).filter((dest) =>
    dest.title.toLowerCase().includes(destination.toLowerCase()) ||
    dest.keywords.some((kw) => kw.toLowerCase().includes(destination.toLowerCase()))
  );

  const message = `Hello Prime Asia Tours, I would like to make an enquiry.

Here are my trip details:
📍 Destination: ${destination || 'Not specified'}
📅 Check-in Date: ${checkIn || 'Not specified'}
📅 Check-out Date: ${checkOut || 'Not specified'}
👥 Travelers: ${travelers || 'Not specified'}`;

  const whatsappUrl = `https://wa.me/971558597360?text=${encodeURIComponent(message)}`;

  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 bg-gradient-to-b from-blue-50/40 via-white to-white overflow-hidden">
      {/* Background soft blue decoration circle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-blue-50/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-brand-blue-600 uppercase mb-4">
              Explore the World
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-extrabold text-brand-dark leading-[1.1] tracking-tight mb-6">
              Explore. Dream. <br />
              <span className="text-brand-blue-600 bg-gradient-to-r from-brand-blue-700 to-brand-blue-500 bg-clip-text text-transparent">Discover.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Find the best tours and travel packages around the world at unbeatable prices.
            </p>
            <div>
              <a
                href="#tours"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-blue-500/25 hover:shadow-xl hover:translate-x-0.5"
              >
                <span>Explore Tours</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            {/* Custom Leaf/Capsule Styled Image Container */}
            <div className="relative w-[340px] h-[400px] sm:w-[420px] sm:h-[480px] md:w-[480px] md:h-[540px] overflow-hidden rounded-[180px_180px_40px_180px] border-[12px] border-white shadow-2xl shadow-slate-200">
              <Image
                src={getAssetUrl('/images/Dubai-main-image.jpg')}
                alt="Dubai, UAE"
                fill
                priority
                className="object-cover object-center select-none scale-105 hover:scale-100 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>

        {/* Floating Search Bar Form (Overlaps the bottom of the section) */}
        <div className="mt-16 lg:mt-24 relative z-20 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl lg:rounded-full border border-slate-100 shadow-xl shadow-slate-100/80 p-5 md:p-6 lg:p-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-2">

            {/* Destination Column */}
            <div className="flex items-center gap-3.5 px-4 flex-1">
              <div className="p-2.5 rounded-full bg-brand-blue-50 text-brand-blue-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-grow relative">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Destination</span>
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="text-sm font-semibold text-brand-dark focus:outline-none placeholder-slate-700 bg-transparent w-full mt-0.5"
                />

                {/* Autocomplete suggestions */}
                {showSuggestions && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 cursor-default"
                      onClick={() => setShowSuggestions(false)}
                    />
                    <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 py-2 max-h-60 overflow-y-auto">
                      {suggestions.length > 0 ? (
                        suggestions.map((dest) => (
                          <button
                            key={dest.slug}
                            type="button"
                            onClick={() => {
                              setDestination(dest.title);
                              setShowSuggestions(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-xs md:text-sm text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue-600 transition-colors flex items-center gap-2 cursor-pointer font-bold"
                          >
                            <MapPin className="w-4 h-4 text-brand-blue-500 shrink-0" />
                            <span>{dest.title}</span>
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-xs md:text-sm text-slate-400 font-semibold italic text-center">
                          No destinations found
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="hidden lg:block w-px h-10 bg-slate-100" />

            {/* Check In Column */}
            <div className="flex items-center gap-3.5 px-4 flex-1">
              <div className="p-2.5 rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Check In</span>
                <input
                  type="text"
                  placeholder="Select date"
                  value={checkIn}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = 'text';
                  }}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="text-sm font-semibold text-brand-dark focus:outline-none placeholder-slate-700 bg-transparent w-full mt-0.5"
                />
              </div>
            </div>

            <div className="hidden lg:block w-px h-10 bg-slate-100" />

            {/* Check Out Column */}
            <div className="flex items-center gap-3.5 px-4 flex-1">
              <div className="p-2.5 rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Check Out</span>
                <input
                  type="text"
                  placeholder="Select date"
                  value={checkOut}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = 'text';
                  }}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="text-sm font-semibold text-brand-dark focus:outline-none placeholder-slate-700 bg-transparent w-full mt-0.5"
                />
              </div>
            </div>

            <div className="hidden lg:block w-px h-10 bg-slate-100" />

            {/* Travelers Column */}
            <div className="flex items-center gap-3.5 px-4 flex-1">
              <div className="p-2.5 rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Travelers</span>
                <input
                  type="text"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  placeholder="2 Adults, 1 Child"
                  className="text-sm font-semibold text-brand-dark focus:outline-none placeholder-slate-700 bg-transparent w-full mt-0.5"
                />
              </div>
            </div>

            {/* Search Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:ml-4 px-8 py-4 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold rounded-2xl lg:rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-blue-600/20 cursor-pointer text-center"
            >
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
