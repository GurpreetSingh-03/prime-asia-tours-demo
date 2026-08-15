'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Can we stay one day extra after our tourist visa expires?",
      answer: "No. Overstaying your visa by even one day is illegal and will result in automatic fines from immigration authorities, potential legal difficulties at airport customs, or future travel blacklists. Always ensure you renew your visa or exit the country before your visa's final expiration date."
    },
    {
      question: "How long does it take to process a tourist visa?",
      answer: "Standard visa processing typically takes 3 to 5 working days. However, immigration processing times are subject to embassy workloads and local public holidays. We highly recommend submitting your application at least 15 days before your scheduled travel date."
    },
    {
      question: "What documents do I need to prepare for a holiday booking?",
      answer: "For most packages, you must provide a high-resolution color copy of your passport biodata page (valid for at least 6 months beyond travel dates) and a recent passport-sized photograph with a white background. Additional documents like bank statements or proof of residency may be needed depending on the destination."
    },
    {
      question: "Are international flights included in your listed package prices?",
      answer: "Our featured package prices focus on visa assistance, hotel accommodations, airport transfers, and guided sightseeing tours. This allows you to choose your own flights or utilize air miles. However, our team can gladly secure return flights for you and bundle them into a customized quotation."
    },
    {
      question: "How can I customize a tour itinerary for my family or group?",
      answer: "We specialize in fully custom journeys! Simply click the 'Request Custom Quote' button or contact us directly on WhatsApp. Share your preferred travel dates, group size, budget style, and destinations of interest, and our travel specialists will build a tailor-made proposal for you free of charge."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100 scroll-mt-16 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-brand-blue-600 uppercase mb-3">
            Support Center
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight relative">
            Frequently Asked{' '}
            <span className="relative inline-block">
              Questions
              <span className="absolute bottom-[-6px] left-0 right-0 h-[3px] bg-brand-gold-500 rounded-full" />
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-550 mt-6 font-semibold">
            Quickly find answers to common queries regarding visas, customized bookings, and travel guidelines.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-blue-200 bg-brand-blue-50/20 shadow-md shadow-brand-blue-500/5'
                    : 'border-slate-200/70 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-brand-blue-600' : 'text-slate-400'}`} />
                    <span className="text-sm md:text-base font-bold text-brand-dark leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-blue-600' : ''
                    }`}
                  />
                </button>
                
                {/* Answer Box */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 py-5 text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
                    {faq.answer}
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
