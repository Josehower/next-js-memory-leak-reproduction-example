/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true,
    serverComponentsExternalPackages: ['autocannon'],
  },
};

module.exports = nextConfig;
