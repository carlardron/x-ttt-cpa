import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/game/:path*',
        destination: 'http://nginx/game/:path*',
      },
    ];
  },
};

export default nextConfig;
