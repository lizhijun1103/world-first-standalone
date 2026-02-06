/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force output to standalone to ensure correct file generation for Vercel
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minicat01.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/cat/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
