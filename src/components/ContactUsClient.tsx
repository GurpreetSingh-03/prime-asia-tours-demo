'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import { 
  Headphones, 
  User, 
  Mail, 
  Phone, 
  Tag, 
  Pencil, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Plane 
} from 'lucide-react';
import { getAssetUrl } from '@/utils/getAssetUrl';

export default function ContactUsClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  const embedUrl = 'https://maps.google.com/maps?q=25.25697,55.299119&z=15&output=embed';

  return (
    <div className="flex flex-col min-h-screen relative bg-[#f4f7fb]">
      {/* Sticky Header */}
      <Header />

      <main className="flex-grow pt-24 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Hero & Form Block */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl mb-12 border border-slate-100 bg-white">
            
            {/* Background Image & Soft Blue Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={getAssetUrl('/images/contact-us/main.jpg')}
                alt="Tropical Beach Background"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Soft Gradient Shading for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-100/90 via-sky-50/80 to-transparent lg:to-sky-50/20 z-[1]" />
            </div>

            {/* Hero & Form Grid Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading & Subtext */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-brand-blue-600 text-xs md:text-sm font-extrabold shadow-sm mb-6 border border-brand-blue-100/50">
                  <Headphones className="w-4 h-4 text-brand-blue-600" />
                  <span>We're Here for You</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a2b49] tracking-tight leading-[1.15] mb-4">
                  Let’s Plan Your<br />
                  <span className="text-brand-blue-600">Next Adventure</span>
                </h1>

                {/* Decorative Accent Arrow */}
                <div className="flex items-center gap-1 text-brand-blue-500 mb-6">
                  <div className="w-10 h-0.5 bg-brand-blue-500 rounded-full" />
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="13 17 18 12 13 7" />
                    <polyline points="6 17 11 12 6 7" />
                  </svg>
                </div>

                {/* Subtext */}
                <p className="text-slate-650 text-sm md:text-base font-semibold leading-relaxed max-w-md">
                  Reach out to our travel experts and let us craft your perfect holiday tailored to your dreams.
                </p>
              </div>

              {/* Right Column: Send Us a Message Card */}
              <div className="lg:col-span-7 relative">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-100/80 text-left relative z-10">
                  
                  {/* Airmail Stamp Decorative Icon */}
                  <div className="absolute top-6 right-6 pointer-events-none opacity-20">
                    <svg className="w-16 h-16 text-brand-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                      <circle cx="50" cy="50" r="45" strokeDasharray="6 4" />
                      <circle cx="50" cy="50" r="38" />
                      <path d="M30 50 C40 35, 60 65, 70 50" strokeWidth="2" />
                      <path d="M30 58 C40 43, 60 73, 70 58" strokeWidth="2" />
                    </svg>
                  </div>

                  {isSuccess ? (
                    <div className="text-center py-12 flex flex-col items-center justify-center animate-scale-up">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-brand-dark">
                        Thank You!
                      </h3>
                      <p className="text-slate-550 text-sm mt-3 font-semibold max-w-sm leading-relaxed">
                        Your message has been sent successfully. Our travel specialists will get back to you shortly.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="mt-8 px-6 py-2.5 bg-brand-blue-600 text-white rounded-xl text-xs font-bold hover:bg-brand-blue-700 transition-colors cursor-pointer shadow-md"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl sm:text-3xl font-black text-[#1a2b49] mb-1">
                        Send Us a Message
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6">
                        Fill out the form below and our travel specialist will get back to you shortly.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        
                        {/* Grid Row 1: Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Full Name */}
                          <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-[11px] font-black text-slate-700 tracking-wider uppercase">
                              Full Name
                            </label>
                            <div className="relative">
                              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-xs sm:text-sm font-semibold transition-all"
                              />
                            </div>
                          </div>

                          {/* Email Address */}
                          <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-[11px] font-black text-slate-700 tracking-wider uppercase">
                              Email Address
                            </label>
                            <div className="relative">
                              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-xs sm:text-sm font-semibold transition-all"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Grid Row 2: Phone & Subject */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Phone Number */}
                          <div className="flex flex-col gap-1">
                            <label htmlFor="phone" className="text-[11px] font-black text-slate-700 tracking-wider uppercase">
                              Phone Number
                            </label>
                            <div className="relative">
                              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your Phone"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-xs sm:text-sm font-semibold transition-all"
                              />
                            </div>
                          </div>

                          {/* Subject */}
                          <div className="flex flex-col gap-1">
                            <label htmlFor="subject" className="text-[11px] font-black text-slate-700 tracking-wider uppercase">
                              Subject
                            </label>
                            <div className="relative">
                              <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Trip / Visa / Inquiry"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-xs sm:text-sm font-semibold transition-all"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Message Area */}
                        <div className="flex flex-col gap-1">
                          <label htmlFor="message" className="text-[11px] font-black text-slate-700 tracking-wider uppercase">
                            Your Message
                          </label>
                          <div className="relative">
                            <Pencil className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                            <textarea
                              id="message"
                              name="message"
                              required
                              rows={3}
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your travel plans..."
                              className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-xs sm:text-sm font-semibold transition-all resize-none"
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 bg-brand-blue-600 hover:bg-brand-blue-700 disabled:bg-slate-300 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-blue-500/25 transition-all cursor-pointer shadow-md mt-2 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}

                </div>

                {/* Floating Suitcase Image overlapping the card */}
                <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 md:-bottom-12 md:-right-12 w-32 sm:w-44 lg:w-56 pointer-events-none z-20 drop-shadow-2xl">
                  <Image
                    src={getAssetUrl('/images/contact-us/suitcase.png')}
                    alt="Travel Suitcase & Tropical Leaves"
                    width={240}
                    height={240}
                    className="w-full h-auto object-contain"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Card: Get In Touch & Photo Gallery */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-slate-100/80 mb-16 relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              
              {/* Left Column: Get In Touch Details */}
              <div className="lg:col-span-4 flex flex-col items-start text-left relative z-10">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#1a2b49]">
                    Get In Touch
                  </h2>
                  <div className="w-10 h-1 bg-brand-blue-600 rounded-full mt-1.5" />
                </div>

                {/* Contact List */}
                <div className="flex flex-col gap-5 w-full">
                  
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100/70 text-brand-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#1a2b49] text-[10px] sm:text-xs uppercase tracking-wider">Call / WhatsApp</h4>
                      <a href="tel:+971527716690" className="text-sm sm:text-base font-bold text-slate-700 hover:text-brand-blue-600 transition-colors">
                        +971 52 771 6690
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#1a2b49] text-[10px] sm:text-xs uppercase tracking-wider">Email Us</h4>
                      <a href="mailto:info@primeasiatourism.com" className="text-sm sm:text-base font-bold text-slate-700 hover:text-brand-blue-600 transition-colors block">
                        info@primeasiatourism.com
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100/70 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#1a2b49] text-[10px] sm:text-xs uppercase tracking-wider">Our Office</h4>
                      <p className="text-sm sm:text-base font-bold text-slate-700">
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Center Flight Trail Decorative Line with Seamless Airplane Icon */}
              <div className="hidden lg:flex lg:col-span-3 items-center justify-center relative h-36 px-2 pointer-events-none select-none">
                <svg className="w-full h-full text-brand-blue-500 overflow-visible" viewBox="0 0 200 100" fill="none">
                  {/* Curved Dotted Trail Ascending Up-Right */}
                  <path 
                    d="M 10 75 Q 90 20 155 35" 
                    stroke="#3b82f6" 
                    strokeWidth="2.5" 
                    strokeDasharray="6 6" 
                    strokeLinecap="round"
                    opacity="0.75" 
                  />
                  {/* Airplane Icon - nose pointing up-right, tail connected cleanly to the dashed line */}
                  <g transform="translate(150, 18) scale(1.1) rotate(-5)">
                    <path 
                      d="M17.8 19.2 16 11l3.5-3.5C20.1 6.9 20.5 5 19.1 3.6c-1.4-1.4-3.3-1-3.9.6L11.7 7.7 3.5 5.9c-.6-.1-1.2.1-1.5.6l-1 1.5c-.3.5-.2 1.2.3 1.5l5.2 3.6-3.1 3.1-2.2-.6c-.4-.1-.9.1-1.1.5l-.6 1c-.2.4-.1.9.2 1.2l3 3 3 3c.3.3.8.4 1.2.2l1-.6c.4-.2.6-.7.5-1.1l-.6-2.2 3.1-3.1 3.6 5.2c.3.5 1 .6 1.5.3l1.5-1c.5-.3.7-.9.6-1.5z" 
                      fill="#2563eb"
                      stroke="#1d4ed8"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              </div>

              {/* Right Column: 3 Tilted Destination Cards (Unclipped) */}
              <div className="lg:col-span-5 flex items-center justify-center gap-3 sm:gap-4 py-6">
                
                {/* Photo 1: Dubai Burj Khalifa */}
                <div className="relative w-28 sm:w-36 md:w-40 h-40 sm:h-48 md:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform -rotate-4 hover:rotate-0 transition-transform duration-300 shrink-0">
                  <Image
                    src={getAssetUrl('/images/Burj-khalifa.jpg')}
                    alt="Dubai Burj Khalifa"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Photo 2: Santorini */}
                <div className="relative w-28 sm:w-36 md:w-40 h-40 sm:h-48 md:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-0 hover:rotate-0 transition-transform duration-300 shrink-0 z-10">
                  <Image
                    src={getAssetUrl('/images/santorini.jpg')}
                    alt="Santorini Greece"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Photo 3: Tropical Island / Boat */}
                <div className="relative w-28 sm:w-36 md:w-40 h-40 sm:h-48 md:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-4 hover:rotate-0 transition-transform duration-300 shrink-0">
                  <Image
                    src={getAssetUrl('/images/contact-us/main.jpg')}
                    alt="Tropical Travel Experience"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* Full-Width Map Block */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-[380px] md:h-[480px] relative">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dubai Office Map"
              className="absolute inset-0 z-0"
            />
          </div>

        </div>
      </main>

      {/* Footer & WhatsApp Button */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

