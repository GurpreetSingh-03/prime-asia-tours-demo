'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import { 
  Compass, 
  Users, 
  ThumbsUp, 
  ShieldCheck, 
  MapPin, 
  Globe, 
  Briefcase, 
  Headphones, 
  Phone, 
  MessageSquare,
  Plane,
  Award
} from 'lucide-react';
import { getAssetUrl } from '@/utils/getAssetUrl';

export default function AboutUsClient() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#f4f7fb]">
      {/* Sticky Header */}
      <Header />

      <main className="flex-grow pt-24 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Top Hero Banner */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl mb-12 bg-white border border-slate-100">
            
            {/* Background Image & Soft Blue Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={getAssetUrl('/images/about-us/hero-bg.jpg')}
                alt="Tropical Coast Background"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-100/95 via-sky-50/85 to-transparent lg:to-sky-50/20 z-[1]" />
            </div>

            {/* Grid Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px]">
              
              {/* Left Column: Heading & Subtext */}
              <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-brand-blue-600 text-xs md:text-sm font-extrabold shadow-sm mb-6 border border-brand-blue-100/50">
                  <MapPin className="w-4 h-4 text-brand-blue-600" />
                  <span>Your Journey, Our Passion</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a2b49] tracking-tight leading-[1.15] mb-4">
                  About<br />
                  <span className="text-brand-blue-600">Prime Asia Tourism</span>
                </h1>

                {/* Decorative Accent Arrow */}
                <div className="flex items-center gap-1.5 text-amber-500 mb-6">
                  <div className="w-10 h-0.5 bg-amber-500 rounded-full" />
                  <Compass className="w-4 h-4 text-amber-500 animate-spin-slow" />
                  <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="13 17 18 12 13 7" />
                    <polyline points="6 17 11 12 6 7" />
                  </svg>
                </div>

                {/* Subtext */}
                <p className="text-slate-650 text-sm md:text-base font-semibold leading-relaxed max-w-md">
                  We are a team of travel enthusiasts dedicated to creating unforgettable experiences across the globe. Your dream destination is just the beginning of our story together.
                </p>
              </div>

              {/* Right Column: Large Arched Image Mask & Floating Polaroid */}
              <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
                
                {/* Large Arch Masked Photo */}
                <div className="relative w-full max-w-md h-[320px] sm:h-[400px] lg:h-[440px] rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                  <Image
                    src={getAssetUrl('/images/about-us/hero-arched.jpg')}
                    alt="Traveler exploring mountains and crystal water"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Floating Polaroid Photo Frame */}
                <div className="absolute -bottom-6 left-4 sm:left-12 lg:left-0 transform -rotate-6 hover:rotate-0 transition-transform duration-300 shadow-2xl rounded-2xl border-4 border-white overflow-hidden w-36 sm:w-44 h-48 sm:h-56 z-20">
                  <Image
                    src={getAssetUrl('/images/about-us/burj-polaroid.jpg')}
                    alt="Dubai Burj Khalifa Sunset"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Dark Navy Curved Decorative Accent with Golden Airplane */}
                <div className="absolute -bottom-4 -right-4 bg-[#0d1b34] text-white px-5 py-3.5 rounded-3xl shadow-2xl hidden sm:flex items-center gap-3 border border-slate-700/60 z-20">
                  <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400">
                    <Plane className="w-4 h-4 transform rotate-45" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[11px] font-extrabold text-slate-300">Infinite Journeys</span>
                    <span className="block text-xs font-black text-amber-400">Crafted with Love</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Section 2: WHO WE ARE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-slate-100/80 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-6">
                <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={getAssetUrl('/images/about-us/who-we-are.jpg')}
                    alt="Group of travel enthusiasts"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Text & Feature Cards */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <span className="text-xs font-black text-brand-blue-600 tracking-wider uppercase mb-1">
                  WHO WE ARE
                </span>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1a2b49] leading-tight mb-4">
                  Explore the World with<br />
                  <span className="text-brand-blue-600">People Who Care</span>
                </h2>

                <p className="text-slate-600 font-semibold text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                  At Prime Asia Tourism, we believe travel is more than just visiting places—it's about creating memories that last a lifetime. From visa assistance to tailor-made holidays, we handle every detail so you can focus on the experience.
                </p>

                {/* 3 Feature Badges in a Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                  
                  {/* Item 1 */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50/80 border border-blue-100/60">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black text-[#1a2b49] leading-tight text-left">
                      Experienced Travel Experts
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50/80 border border-blue-100/60">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ThumbsUp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black text-[#1a2b49] leading-tight text-left">
                      Personalized Travel Plans
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50/80 border border-blue-100/60">
                    <div className="w-9 h-9 rounded-xl bg-brand-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black text-[#1a2b49] leading-tight text-left">
                      Trusted by Thousands
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Section 3: Statistics / Key Metrics Bar */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100/80 mb-12 relative overflow-hidden">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
              
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center p-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-100/70 text-brand-blue-600 flex items-center justify-center mb-3 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#1a2b49]">10+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Years of Experience</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-3 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#1a2b49]">25K+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Happy Travelers</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-100/70 text-amber-600 flex items-center justify-center mb-3 shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#1a2b49]">50+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Destinations</span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100/70 text-indigo-600 flex items-center justify-center mb-3 shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#1a2b49]">100%</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Commitment to You</span>
              </div>

            </div>

          </div>

          {/* Section 4: OUR PROMISE & Photo Grid */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-slate-100/80 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Our Promise */}
              <div className="lg:col-span-5 flex flex-col items-start text-left relative">
                <span className="text-xs font-black text-brand-blue-600 tracking-wider uppercase mb-1">
                  OUR PROMISE
                </span>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1a2b49] leading-tight mb-4">
                  Your Satisfaction,<br />
                  <span className="text-brand-blue-600">Our Priority</span>
                </h2>

                <p className="text-slate-600 font-semibold text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                  We promise honest guidance, transparent pricing, and 24/7 support throughout your journey. Because your trust is what takes us further.
                </p>

                {/* Stylized Handwritten Cursive Line */}
                <div className="relative pt-2 pb-4">
                  <span className="text-xl sm:text-2xl font-black text-brand-blue-600 italic tracking-wide font-serif">
                    Let’s make your<br />next adventure amazing!
                  </span>
                  <div className="w-36 h-1 bg-amber-400 rounded-full mt-2" />
                </div>

                {/* Flight Trail Arc */}
                <div className="hidden lg:block absolute -bottom-10 right-0 w-32 h-24 pointer-events-none">
                  <svg className="w-full h-full text-brand-blue-400 overflow-visible" viewBox="0 0 100 80" fill="none">
                    <path 
                      d="M 10 70 Q 50 10 90 40" 
                      stroke="#3b82f6" 
                      strokeWidth="2" 
                      strokeDasharray="4 4" 
                      opacity="0.6" 
                    />
                    <g transform="translate(85, 30) rotate(35)">
                      <Plane className="w-4 h-4 text-brand-blue-600 fill-brand-blue-600" />
                    </g>
                  </svg>
                </div>

              </div>

              {/* Right Column: Asymmetric Mosaic Photo Gallery */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                
                {/* Column 1: Stacked Images */}
                <div className="space-y-4">
                  {/* Top Image: Santorini */}
                  <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                    <Image
                      src={getAssetUrl('/images/about-us/grid-1.jpg')}
                      alt="Santorini Greece"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Bottom Row: 2 Small Side-by-Side Images */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                      <Image
                        src={getAssetUrl('/images/about-us/grid-3.jpg')}
                        alt="Maldives Resort"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                      <Image
                        src={getAssetUrl('/images/about-us/grid-4.jpg')}
                        alt="Bali Temple Gate"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Column 2: Single Tall Image (Eiffel Tower) */}
                <div className="relative w-full h-72 sm:h-full min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                  <Image
                    src={getAssetUrl('/images/about-us/grid-2.jpg')}
                    alt="Eiffel Tower Paris"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>

            </div>
          </div>

          {/* Section 5: Dark Navy 24/7 Contact Bar */}
          <div className="bg-[#132342] rounded-3xl p-6 sm:p-8 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            
            {/* Left Info */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0 shadow-inner">
                <Headphones className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  We’re Here for You, 24/7
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-semibold mt-0.5">
                  Have questions or need help planning your trip? Our travel experts are just a call away!
                </p>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="tel:+971558597360"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-brand-blue-400" />
                <span>+971 55 859 7360</span>
              </a>

              <a
                href={`https://wa.me/971558597360?text=${encodeURIComponent("Hello Prime Asia Tours! I would like to inquire about your holiday packages and travel services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </main>

      {/* Footer & WhatsApp Floating Button */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
