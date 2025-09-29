/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // This is the crucial line to add.
  // It must match your repository name.
  basePath: '/tripsters-innov',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
