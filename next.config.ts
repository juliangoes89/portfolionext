import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL || 'juliangoes89.website'],
  }
};

export default nextConfig;
