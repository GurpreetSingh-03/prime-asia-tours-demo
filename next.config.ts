import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/travel',
        destination: '/#destinations',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#tours',
        permanent: true,
      },
      {
        source: '/adventure',
        destination: '/#tours',
        permanent: true,
      },
      {
        source: '/lets-feel-a-your-trip',
        destination: '/#why-us',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
