/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minicat01.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/cat/**',
      },
    ],
  },
};

export default nextConfig;
