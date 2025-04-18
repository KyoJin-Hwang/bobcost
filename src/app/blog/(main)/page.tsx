import { Metadata } from 'next';

import PostListPage from '@/components/post_list/PostListPage';
import { blogName, blogThumbnailURL } from '@/config/const';

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const title = `${blogName} 기술블로그`;

  return {
    title,
    openGraph: {
      title,
      images: [blogThumbnailURL],
    },
    twitter: {
      title,
      images: [blogThumbnailURL],
    },
  };
}

const Blog = async () => {
  return <PostListPage />;
};

export default Blog;
