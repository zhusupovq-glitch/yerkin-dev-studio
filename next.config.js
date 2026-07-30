/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
};

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

module.exports = withNextIntl(nextConfig);
