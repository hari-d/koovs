/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['static.nike.com', 'https://cdn1.storehippo.com', 'cdn1.storehippo.com',
      'cdn2.storehippo.com', 'cdn4.storehippo.com'],
  },
};
