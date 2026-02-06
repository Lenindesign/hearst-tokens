import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-4345f0f77c424370b4354c6a404ac802.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
