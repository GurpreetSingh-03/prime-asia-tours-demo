'use client';

import { useState, useEffect } from 'react';
import { X, User, Mail, Phone, Calendar, Send, CheckCircle2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: string;
}

export default function EnquiryModal({ isOpen, onClose, destination }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = `Hello Prime Asia Tours, I would like to request a custom travel quote.

Here are my details:
📍 Destination of Interest: ${destination}
👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📅 Proposed Travel Date: ${formData.travelDate}
💬 Message/Requests: ${formData.message || 'None'}`;

    const whatsappUrl = `https://wa.me/971527716690?text=${encodeURIComponent(messageText)}`;
    
    // Open WhatsApp pre-filled chat in a new tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        travelDate: '',
        message: '',
      });
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop blur overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100/50 overflow-hidden z-10 animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="p-8 md:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 shadow-md shadow-emerald-500/10">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
              Enquiry Submitted!
            </h3>
            <p className="text-xs md:text-sm text-slate-500 max-w-xs mb-8 leading-relaxed">
              Thank you for enquiring about **{destination}**. Our travel experts will get in touch with you shortly with a custom itinerary proposal.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form Screen */
          <div className="p-6 md:p-8">
            <div className="text-left mb-6">
              <span className="text-[10px] font-extrabold tracking-wider text-brand-gold-500 uppercase">
                Quick Enquiry
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark leading-tight mt-1">
                Plan Your Trip to
              </h3>
              <p className="text-sm font-bold text-brand-blue-600 mt-0.5">
                {destination}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 bg-slate-50/50"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 bg-slate-50/50"
                      placeholder="name@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 bg-slate-50/50"
                      placeholder="+971..."
                    />
                  </div>
                </div>
              </div>

              {/* Travel Date */}
              <div className="flex flex-col">
                <label htmlFor="travelDate" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
                  Proposed Travel Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    name="travelDate"
                    id="travelDate"
                    required
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
                  Message / Special Requests
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 bg-slate-50/50"
                  placeholder="Specify traveler count, budget, or other preferences..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 bg-brand-blue-600 hover:bg-brand-blue-700 disabled:bg-brand-blue-500/50 text-white font-bold rounded-xl transition-all duration-300 shadow-md shadow-brand-blue-500/10 flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
