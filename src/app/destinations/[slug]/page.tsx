import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { destinationsData } from '@/data/destinations';
import DestinationClient from '@/components/DestinationClient';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return Object.keys(destinationsData).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinationsData[slug];
  if (!destination) return {};

  return {
    title: `${destination.title} Tour Packages & Visas`,
    description: `Discover ${destination.title} with Prime Asia Tourism. ${destination.subtitle}. Explore Capital: ${destination.capital}, Best time to visit: ${destination.bestTime}. Book custom packages today.`,
    alternates: {
      canonical: `/destinations/${slug}`,
    },
    openGraph: {
      title: `${destination.title} Tour Packages & Visas | Prime Asia Tours`,
      description: `${destination.subtitle}. Explore our custom travel itineraries and visa assistance for ${destination.title}.`,
      images: [{ url: destination.image }],
    }
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinationsData[slug];

  if (!destination) {
    notFound();
  }

  return <DestinationClient destination={destination} />;
}
