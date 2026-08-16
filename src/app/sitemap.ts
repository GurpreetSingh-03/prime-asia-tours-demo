import { MetadataRoute } from 'next';
import { destinationsData } from '@/data/destinations';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://primeasiatours.com';

  // Base static routes
  const staticRoutes = ['', '/about-us', '/contact-us', '/terms-conditions', '/privacy-policy'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic destination routes from keys in destinationsData dataset
  const destinationRoutes = Object.keys(destinationsData).map((slug) => ({
    url: `${baseUrl}/destinations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...destinationRoutes];
}
