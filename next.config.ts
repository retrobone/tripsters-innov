// File: retrobone/tripsters-innov/tripsters-innov-25d0006c070fe2f6384c93b56a848a48898dcf98/next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tells Next.js to create a static export
  output: 'export',

  // Tells Next.js the site will be in a subfolder
  basePath: '/tripsters-innov',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
