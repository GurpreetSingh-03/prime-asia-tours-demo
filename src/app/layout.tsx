import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { getAssetUrl } from "@/utils/getAssetUrl";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primeasiatours.com"),
  title: {
    default: "Prime Asia Tours | Premium Tours, Holidays & Visa Services in Dubai",
    template: "%s | Prime Asia Tours"
  },
  description: "Prime Asia Tours is Dubai's leading travel agency. We specialize in custom tour packages, visa services, hotel reservations, and custom holiday planning to Paris, Switzerland, USA, Wiesbaden, Georgia, Morocco, and Dubai.",
  keywords: ["Prime Asia Tours", "Prime Asia Tourism", "Dubai Travel Agency", "Visa Services Dubai", "Dubai Tour Operator", "Switzerland Tours", "Paris Holiday Packages", "Dubai Safari Tours", "Georgia Monasteries Travel", "Rhine River Wiesbaden", "United States Custom Trips"],
  authors: [{ name: "Prime Asia Tours" }],
  creator: "Prime Asia Tours",
  publisher: "Prime Asia Tours",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" }
    ],
    shortcut: ["/images/favicon.png"],
    apple: ["/images/favicon.png"],
  },
  openGraph: {
    title: "Prime Asia Tours | Premium Tours, Holidays & Visa Services in Dubai",
    description: "Dubai's leading tour operator and travel agency. Discover custom holiday itineraries to Dubai, Paris, Switzerland, Georgia, USA, Wiesbaden, and Morocco with Prime Asia Tourism.",
    url: "https://primeasiatours.com",
    siteName: "Prime Asia Tours",
    images: [
      {
        url: "/images/home-crousel-1.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Asia Tours Dubai Office Travel Banner"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Asia Tours | Premium Tours & Holidays in Dubai",
    description: "Plan customized global holiday packages and visa services with Prime Asia Tourism LLC.",
    images: ["/images/home-crousel-1.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://primeasiatours.com/#agency",
    "name": "Prime Asia Tourism LLC",
    "alternateName": "Prime Asia Tours",
    "url": "https://primeasiatours.com",
    "logo": "https://primeasiatours.com/images/logo.png",
    "image": "https://primeasiatours.com/images/home-crousel-1.jpg",
    "description": "Prime Asia Tourism LLC is a leading travel agency in Dubai specializing in customized holiday planning, tourist visa processing, hotel reservations, and excursions.",
    "telephone": "+971558597360",
    "email": ["info@primeasiatours.com", "booking@primeasiatours.com"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office 304, 3rd Floor, Aura Xavier Building, Al Fahidi Street, Bur Dubai",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.256970,
      "longitude": 55.299119
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://facebook.com",
      "https://instagram.com",
      "https://twitter.com",
      "https://pinterest.com"
    ]
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href={getAssetUrl('/images/favicon.png')} />
        <link rel="shortcut icon" href={getAssetUrl('/images/favicon.png')} />
        <link rel="apple-touch-icon" href={getAssetUrl('/images/favicon.png')} />
        <style dangerouslySetInnerHTML={{ __html: `
          @media (min-width: 1536px) { html { zoom: 1.1; } }
          @media (min-width: 1920px) { html { zoom: 1.2; } }
          @media (min-width: 2560px) { html { zoom: 1.35; } }
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fafbfe] text-slate-900">{children}</body>
    </html>
  );
}
