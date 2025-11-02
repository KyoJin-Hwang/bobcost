import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],

  // images: {
  //   remotePatterns: hostName.map((el) => ({
  //     protocol: 'https',
  //     hostname: el,
  //     pathname: '/**',
  //   })),
  // },

  // 한글 URL 라우팅 지원
  async rewrites() {
    return [];
  },
};

export default nextConfig;
