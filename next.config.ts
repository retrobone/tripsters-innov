// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this line to enable static site generation
  output: 'export',

  // Optional: If your repository is named 'tripsters-inno' and you are not using a custom domain,
  // you might need to add a basePath. This tells Next.js that your site will be served from a sub-path.
  // basePath: '/tripsters-inno', 

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
