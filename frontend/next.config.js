/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {},
  // Proxy API calls to the Express backend during development
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
