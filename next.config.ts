import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages serves this repo from /Portfolio-Website; dev stays at the root.
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '',
  images: { unoptimized: true },
};

export default nextConfig;
