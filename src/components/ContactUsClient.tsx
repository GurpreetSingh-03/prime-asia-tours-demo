'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

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
    <div className="flex flex-col min-h-screen relative bg-[#fafbfe]">
      {/* Sticky Header */}
      <Header />

      <main className="flex-grow pt-24 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-brand-blue-600 text-xs font-bold mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>We are active 24/7</span>
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Contact Our Travel Experts
            </h1>
            <p className="text-slate-550 text-sm md:text-base mt-4 font-semibold max-w-xl mx-auto">
              Plan your tailor-made holiday, query tourist visas, or arrange bookings with Prime Asia Tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100/60 shadow-sm flex items-start gap-4 hover:scale-[1.01] transition-transform duration-300">
                <div className="p-4 rounded-xl bg-blue-50 text-brand-blue-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-dark text-base mb-1">Call / WhatsApp</h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">Speak directly with a holiday representative</p>
                  <a href="tel:+971558597360" className="text-sm md:text-base font-extrabold text-brand-blue-600 hover:text-brand-blue-800 transition-colors">
                    +971 55 859 7360
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100/60 shadow-sm flex items-start gap-4 hover:scale-[1.01] transition-transform duration-300">
                <div className="p-4 rounded-xl bg-amber-50 text-brand-gold-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-dark text-base mb-1">Email Correspondence</h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">General inquiries or direct booking reservations</p>
                  <div className="flex flex-col gap-1.5">
                    <a href="mailto:info@primeasiatours.com" className="text-sm font-bold text-brand-blue-600 hover:text-brand-blue-800 transition-colors">
                      info@primeasiatours.com
                    </a>
                    <a href="mailto:booking@primeasiatours.com" className="text-sm font-bold text-brand-blue-600 hover:text-brand-blue-800 transition-colors">
                      booking@primeasiatours.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100/60 shadow-sm flex items-start gap-4 hover:scale-[1.01] transition-transform duration-300">
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-dark text-base mb-1">Dubai Office Address</h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">Drop by to plan your package details in person</p>
                  <p className="text-sm text-slate-650 leading-relaxed font-semibold">
                    Office 304, 3rd Floor, Aura Xavier Building,<br />
                    Al Fahidi Street, Bur Dubai, Dubai, UAE
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 text-left h-full flex flex-col justify-center">
                
                {isSuccess ? (
                  <div className="text-center py-12 flex flex-col items-center justify-center animate-scale-up">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-brand-dark">
                      Thank You!
                    </h3>
                    <p className="text-slate-550 text-sm mt-3 font-semibold max-w-sm leading-relaxed">
                      Your message has been sent successfully. Our support consultants will reach out to you within 2-4 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-2.5 bg-brand-blue-600 text-white rounded-xl text-xs font-bold hover:bg-brand-blue-755 transition-colors cursor-pointer shadow-md"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl md:text-2xl font-extrabold text-brand-dark mb-2">
                      Send a Message
                    </h2>
                    <p className="text-xs md:text-sm text-slate-500 font-medium mb-6">
                      Fill out the form below to email our consultants directly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="name" className="text-xs font-extrabold text-brand-dark uppercase">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="px-4 py-2.5 bg-slate-550/5 border border-slate-150 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-sm font-semibold transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="email" className="text-xs font-extrabold text-brand-dark uppercase">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="px-4 py-2.5 bg-slate-550/5 border border-slate-150 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-sm font-semibold transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="phone" className="text-xs font-extrabold text-brand-dark uppercase">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 234 567 8900"
                            className="px-4 py-2.5 bg-slate-555/5 border border-slate-150 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-sm font-semibold transition-all"
                          />
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="subject" className="text-xs font-extrabold text-brand-dark uppercase">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Visa Query / Customized Tour Package"
                            className="px-4 py-2.5 bg-slate-555/5 border border-slate-150 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-sm font-semibold transition-all"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-extrabold text-brand-dark uppercase">Your Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your travel plans..."
                          className="px-4 py-2.5 bg-slate-555/5 border border-slate-150 rounded-xl focus:outline-none focus:border-brand-blue-500 text-slate-800 text-sm font-semibold transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-brand-blue-600 hover:bg-brand-blue-700 disabled:bg-slate-300 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer shadow-md mt-2 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}

              </div>
            </div>

          </div>

          {/* Bottom Full-Width Map Block */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 h-[380px] md:h-[480px] relative">
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
