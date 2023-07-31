/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
  images: {
    domains: [
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'uploadthing.com',
      'arena-cdn-g.imgix.net',
      'a.espncdn.com',
      'a4.espncdn.com',
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
