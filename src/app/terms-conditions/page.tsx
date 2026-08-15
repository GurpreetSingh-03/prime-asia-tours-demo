import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FileText, CheckCircle2, AlertCircle, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms & Conditions of Prime Asia Tourism LLC. Review our booking policies, cancellation rules, payment guidelines, and general traveler terms.",
  alternates: {
    canonical: "/terms-conditions"
  }
};

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#fafbfe]">
      {/* Sticky Header */}
      <Header />

      <main className="flex-grow pt-24 md:pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Title */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Legal Guidelines</span>
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-500 text-sm mt-3 font-medium">
              Last updated: August 15, 2026
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-10 text-left text-slate-650 leading-relaxed text-sm md:text-base space-y-8">
            
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-brand-blue-600 font-extrabold text-base md:text-lg">
                <CheckCircle2 className="w-5 h-5" />
                <h2>1. Acceptance of Terms</h2>
              </div>
              <p>
                Welcome to Prime Asia Tourism LLC (&quot;Prime Asia Tours&quot;). By accessing, browsing, or using our website (<a href="https://primeasiatours.com" className="text-brand-blue-600 font-bold hover:underline">https://primeasiatours.com</a>) and utilizing our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms &amp; Conditions. If you do not agree, please discontinue use immediately.
              </p>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-brand-blue-600 font-extrabold text-base md:text-lg">
                <CheckCircle2 className="w-5 h-5" />
                <h2>2. Booking &amp; Reservations</h2>
              </div>
              <p>
                When booking a tour or travel service with Prime Asia Tours:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-slate-600">
                <li>You must provide accurate, complete, and current information, including full names as per passport, email address, phone number, and passport details.</li>
                <li>All bookings are subject to availability and confirmation by our reservations team.</li>
                <li>Rates and availability are subject to change without prior notice until booking confirmation and deposit are finalized.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-brand-blue-600 font-extrabold text-base md:text-lg">
                <CheckCircle2 className="w-5 h-5" />
                <h2>3. Payment &amp; Currencies</h2>
              </div>
              <p>
                Payments can be made via credit card, wire transfer, or other secure gateways listed on our website. All transactions are securely processed. Rates are calculated in UAE Dirhams (AED) or US Dollars (USD) as specified during checkout. Deposits or full payments must be settled in accordance with the booking terms provided at confirmation.
              </p>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-brand-blue-600 font-extrabold text-base md:text-lg">
                <AlertCircle className="w-5 h-5" />
                <h2>4. Cancellation &amp; Refund Policy</h2>
              </div>
              <p>
                Cancellation requests must be submitted in writing to <a href="mailto:booking@primeasiatours.com" className="text-brand-blue-600 font-bold hover:underline">booking@primeasiatours.com</a>. Refund policies depend on the specific tour package, duration before departure, and terms enforced by third-party suppliers (airlines, hotels, local partners):
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-slate-600">
                <li>No-shows and cancellations made close to the departure date may result in a 100% cancellation fee.</li>
                <li>Confirmed visa application fees are non-refundable once submitted to immigration authorities.</li>
                <li>Refunds, where applicable, will be credited back through the original payment method, subject to processing delays.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-brand-blue-600 font-extrabold text-base md:text-lg">
                <ShieldAlert className="w-5 h-5" />
                <h2>5. Visa &amp; Travel Documentation</h2>
              </div>
              <p>
                It is the sole responsibility of the traveler to ensure they hold a valid passport (minimum 6 months validity from date of entry) and obtain correct entry visas for their destinations. Prime Asia Tours is not liable for entry denials, visa delays, or travel disruption resulting from missing or incorrect documentation.
              </p>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-brand-blue-600 font-extrabold text-base md:text-lg">
                <AlertCircle className="w-5 h-5" />
                <h2>6. Limitation of Liability</h2>
              </div>
              <p>
                Prime Asia Tours acts as an agent for hotels, airlines, transport providers, and other independent contractors. We are not liable for injury, damage, loss, accident, delay, or irregularity caused by default of these providers, or due to force majeure events (natural disasters, strikes, civil unrest).
              </p>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-brand-blue-600 font-extrabold text-base md:text-lg">
                <FileText className="w-5 h-5" />
                <h2>7. Governing Law</h2>
              </div>
              <p>
                These Terms &amp; Conditions are governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any dispute arising out of or in connection with this website shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
              </p>
            </section>

          </div>

        </div>
      </main>

      {/* Footer & WhatsApp Button */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
