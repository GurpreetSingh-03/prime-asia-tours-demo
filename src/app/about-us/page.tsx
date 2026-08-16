import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import { Compass, ShieldCheck, Heart, Award } from 'lucide-react';
import { getAssetUrl } from '@/utils/getAssetUrl';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Prime Asia Tourism LLC. Discover our mission, our dedicated team of travel experts in Dubai, and our curated holiday services across the globe.",
  alternates: {
    canonical: "/about-us"
  }
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#fafbfe]">
      {/* Sticky Header */}
      <Header />

      <main className="flex-grow pt-24 md:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-brand-blue-600 text-xs font-bold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
              About Prime Asia Tourism
            </h1>
            <p className="text-slate-550 text-sm md:text-base mt-4 font-semibold max-w-xl mx-auto">
              Creating lasting memories and enriching lives through immersive, authentic travel experiences.
            </p>
          </div>

          {/* Intro Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
            <div className="md:col-span-6 space-y-6 text-slate-655 text-sm md:text-base text-left leading-relaxed">
              <h2 className="text-xl md:text-2xl font-extrabold text-brand-dark leading-tight">
                Your Gateway to Unforgettable Journeys
              </h2>
              <p>
                Welcome to Prime Asia Tourism, your gateway to unforgettable travel experiences. At Prime Asia, we believe that travel is not just about reaching a destination; it&apos;s about creating lasting memories and enriching your life through immersive cultural experiences.
              </p>
              <p className="font-semibold text-slate-700">
                Who We Are:
              </p>
              <p>
                Prime Asia Tourism is a passionate team of travel enthusiasts dedicated to curating exceptional journeys across Asia and beyond. With years of collective experience, our team understands the intricacies of travel, ensuring that every aspect of your trip is meticulously planned and executed.
              </p>
            </div>
            <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100/50">
              <Image
                src={getAssetUrl('/images/home-crousel-1.jpg')}
                alt="Dubai Tour Landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Trust Value Cards */}
          <div className="border-t border-slate-100 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
                Why Travel With Us
              </h2>
              <p className="text-slate-500 text-xs md:text-sm mt-2 font-medium">
                The core pillars that make our tours stand out
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white rounded-2xl p-6 border border-slate-100/70 shadow-sm text-left hover:scale-[1.02] transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue-600 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-sm md:text-base mb-2">Curated Itineraries</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
                  Meticulously planned journeys detailing top local tourist highlights and hidden culture gems.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100/70 shadow-sm text-left hover:scale-[1.02] transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-gold-600 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-sm md:text-base mb-2">Years of Experience</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
                  Our professional travel consultants handle transport, visas, hotel bookings, and packages.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100/70 shadow-sm text-left hover:scale-[1.02] transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-sm md:text-base mb-2">Safe &amp; Secure</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
                  Licensed operator providing 24/7 client support and secure online payment processing channels.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100/70 shadow-sm text-left hover:scale-[1.02] transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-sm md:text-base mb-2">Immersive Culture</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
                  Connecting you with local tour guides, traditional foods, activities, and local heritage sights.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer & WhatsApp Button */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
