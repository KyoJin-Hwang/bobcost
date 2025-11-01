import type { NextConfig } from 'next';

// const hostName = [''];

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],

  // images: {
  //   remotePatterns: hostName.map((el) => ({
  //     protocol: 'https',
  //     hostname: el,
  //     pathname: '/**',
  //   })),
  // },

  // 한글 URL 지원을 위한 설정
  experimental: {
    // URL 인코딩된 한글 경로 처리
    serverComponentsExternalPackages: [],
  },
  // 한글 URL 라우팅 지원
  async rewrites() {
    return [];
  },
};

export default nextConfig;
