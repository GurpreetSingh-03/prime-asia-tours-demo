'use client';

import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function OfficeLocation() {
  const latitude = 25.256970;
  const longitude = 55.299119;
  
  const embedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  const directMapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-brand-blue-600 uppercase mb-3">
            Find Our Office
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight relative">
            Our Dubai{' '}
            <span className="relative inline-block">
              Office
              <span className="absolute bottom-[-6px] left-0 right-0 h-[3px] bg-brand-gold-500 rounded-full" />
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-550 mt-6 font-semibold">
            Drop by our office to plan your custom travel itinerary with our local experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Address details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">
              Prime Asia Tours &amp; Travel
            </h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-1">Office Address</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                    Al Fahidi Area, Bur Dubai,<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-1">Call/WhatsApp</h4>
                  <p className="text-xs md:text-sm text-slate-600 font-semibold">
                    <a href="tel:+971527716690" className="hover:text-brand-blue-600 transition-colors">
                      +971 52 771 6690
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-1">Email Addresses</h4>
                  <div className="flex flex-col gap-1 text-xs md:text-sm text-slate-655 font-semibold">
                    <a href="mailto:info@primeasiatours.com" className="hover:text-brand-blue-600 transition-colors">
                      General: info@primeasiatours.com
                    </a>
                    <a href="mailto:booking@primeasiatours.com" className="hover:text-brand-blue-600 transition-colors">
                      Bookings: booking@primeasiatours.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-1">Working Hours</h4>
                  <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
                    Monday – Saturday: 9:00 AM – 9:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Directions CTA Button */}
            <div className="mt-8">
              <a
                href={directMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs md:text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <span>Get Directions on Map</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Map Embed */}
          <div className="lg:col-span-7 w-full h-[320px] sm:h-[400px] md:h-[450px] relative rounded-3xl overflow-hidden shadow-xl border border-slate-100/60 bg-slate-100">
            <iframe
              title="Prime Asia Tours Dubai Office Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={embedUrl}
              className="w-full h-full select-none"
              style={{ border: 0 }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
