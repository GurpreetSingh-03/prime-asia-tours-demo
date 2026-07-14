import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import PopularDestinations from '@/components/PopularDestinations';
import WhyTravelWithUs from '@/components/WhyTravelWithUs';
import TourPackages from '@/components/TourPackages';
import TravelerReviews from '@/components/TravelerReviews';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Sticky Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section & Booking Form */}
        <HeroSection />

        {/* Value Trust Badges */}
        <TrustBadges />

        {/* Popular Destinations (5 vertical cards) */}
        <PopularDestinations />

        {/* Value Propositions / Why Choose Us */}
        <WhyTravelWithUs />

        {/* Exclusive Tour Packages (3 horizontal cards) */}
        <TourPackages />

        {/* Traveler Reviews & Testimonials */}
        <TravelerReviews />
      </main>

      {/* Footer Block */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
