import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
      qualities: [100, 25, 50, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sujeitoprogramador.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
