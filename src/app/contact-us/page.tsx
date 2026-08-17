import type { Metadata } from 'next';
import ContactUsClient from '@/components/ContactUsClient';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the Prime Asia Tourism LLC team in Dubai. Reach us via phone (+971 52 771 6690), email (info@primeasiatours.com), or visit our Bur Dubai office location map.",
  alternates: {
    canonical: "/contact-us"
  }
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
