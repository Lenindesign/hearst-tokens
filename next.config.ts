import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
