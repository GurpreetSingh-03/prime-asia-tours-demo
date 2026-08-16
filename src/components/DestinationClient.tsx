'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Globe, Compass, Calendar, BookOpen, Clock, FileText, CheckCircle, ShieldAlert } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnquiryModal from '@/components/EnquiryModal';

interface Destination {
  title: string;
  subtitle: string;
  image: string;
  capital: string;
  language: string;
  currency: string;
  bestTime: string;
  description: string;
  highlights: { title: string; desc: string }[];
  visaInfo: {
    overview: string;
    processingTime: string;
    essentials: string[];
    contactNote: string;
  };
  gallery: string[];
}

interface DestinationClientProps {
  destination: Destination;
}

export default function DestinationClient({ destination }: DestinationClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen relative bg-[#fafbfe]">
      {/* Sticky Header */}
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        
        {/* Hero Section Banner */}
        <section className="relative w-full h-[45vh] min-h-[320px] md:h-[55vh] overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            priority
            className="object-cover object-center select-none"
          />
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25 z-[1]" />
          
          <div className="absolute inset-0 z-10 flex items-end pb-8 md:pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-brand-gold-500 uppercase mb-2 block animate-fade-in">
                Explore Destination
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-slide-up">
                {destination.title}
              </h1>
              <p className="text-sm md:text-lg text-white/90 font-medium max-w-2xl mt-3 animate-slide-up">
                {destination.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100/50 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-600 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Capital</span>
                <span className="text-sm font-bold text-slate-800">{destination.capital}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-600 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Language</span>
                <span className="text-sm font-bold text-slate-800">{destination.language}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-600 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Currency</span>
                <span className="text-sm font-bold text-slate-800">{destination.currency}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-600 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Best Time to Visit</span>
                <span className="text-sm font-bold text-slate-800">{destination.bestTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Details & CTA Column Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col justify-start text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4 relative inline-block">
                Destination Overview
                <span className="block w-12 h-[3px] bg-brand-gold-500 rounded-full mt-2" />
              </h2>
              <p className="text-slate-655 text-sm md:text-base leading-relaxed mb-8">
                {destination.description}
              </p>

              {/* Highlights List */}
              <h3 className="text-xl md:text-2xl font-extrabold text-brand-dark mb-6">
                Key Travel Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {destination.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
                  >
                    <div className="p-2.5 rounded-full bg-brand-blue-50 text-brand-blue-600 mb-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-brand-dark mb-2">{highlight.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{highlight.desc}</p>
                  </div>
                ))}
              </div>

              {/* Legal / Advertising Notice (Compliance with UAE regulations) */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3 mb-8">
                <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-500 leading-normal font-semibold">
                  <strong>Notice:</strong> Travel facts, visa parameters, and local guidelines detailed on this page are provided as generalized references. Actual rules vary by passport country, travel seasonality, and current official regulations. Verify requirements independently prior to final travel booking.
                </p>
              </div>
            </div>

            {/* Right Booking Sidebar Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-100/65 text-left">
                <span className="text-[10px] font-extrabold tracking-wider text-brand-gold-500 uppercase">
                  Plan Your Journey
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark mt-1 mb-4">
                  Custom Travel Package
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                  Let our local travel experts craft a tailored itinerary specifically for your trip budget and style.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Handpicked Accommodations</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Customizable Itineraries</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>24/7 Destination Support</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-blue-500/25 flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <span>Request Custom Quote</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-12 md:py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-2">
              Capture the Moments
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-semibold mb-8">
              A visual journey through the stunning landscapes and highlights of {destination.title}.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
              {destination.gallery.map((image, index) => (
                <div 
                  key={index} 
                  onClick={() => setLightboxImage(image)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300 group"
                >
                  <Image
                    src={image}
                    alt={`${destination.title} Gallery Landscape ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold px-4 py-2 bg-black/60 rounded-full backdrop-blur-sm shadow-md">
                      View Photo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Essentials & Visa Guidance Block */}
        <section className="bg-slate-50 border-t border-b border-slate-150/70 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-left">
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4 flex items-center gap-3.5">
                <FileText className="w-6 h-6 text-brand-blue-600" />
                <span>Travel Essentials &amp; Entry Guidance</span>
              </h3>
              
              <div className="bg-white rounded-2xl border border-slate-200/50 p-6 md:p-8 space-y-6 shadow-sm">
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-2">Overview &amp; Entry Guidance</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                    {destination.visaInfo.overview}
                  </p>
                </div>

                <hr className="border-slate-100" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-blue-600" />
                      <span>Assistance &amp; Timeline</span>
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 font-medium">
                      {destination.visaInfo.processingTime}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>General Travel Essentials</span>
                    </h4>
                    <ul className="space-y-1.5 list-disc pl-4">
                      {destination.visaInfo.essentials.map((item, index) => (
                        <li key={index} className="text-xs text-slate-600 font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contact Prompt Highlight Card */}
                <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-brand-blue-50 to-amber-50/50 border border-brand-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h5 className="text-xs sm:text-sm font-extrabold text-brand-dark flex items-center gap-2">
                      <span className="text-base">💡</span> Custom Visa &amp; Entry Details
                    </h5>
                    <p className="text-[11px] text-slate-600 font-medium max-w-lg leading-relaxed">
                      {destination.visaInfo.contactNote}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="shrink-0 px-4 py-2.5 bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold rounded-lg transition-all shadow-sm hover:scale-105 cursor-pointer"
                  >
                    Contact Travel Desk
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Block */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <WhatsAppButton />

      {/* Booking Form Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={destination.title}
      />

      {/* Lightbox Fullscreen Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-slate-300 text-3xl font-light w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </button>
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Enlarged Landscape Gallery View"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10 select-none animate-scale-up"
            />
          </div>
        </div>
      )}
    </div>
  );
}
