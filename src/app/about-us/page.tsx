import type { Metadata } from 'next';
import AboutUsClient from '@/components/AboutUsClient';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Prime Asia Tourism LLC. Discover our mission, our dedicated team of travel experts in Dubai, and our curated holiday services across the globe.",
  alternates: {
    canonical: "/about-us"
  }
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}

