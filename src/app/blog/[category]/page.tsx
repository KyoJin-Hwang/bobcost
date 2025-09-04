import { Metadata } from 'next';

import PostListPage from '@/components/post_list/PostListPage';
import { baseDomain, blogName, blogThumbnailURL } from '@/config/const';
import { getCategoryList, getCategoryPublicName } from '@/lib/post';

type Props = Promise<{ category: string }>;

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const { category } = await params;
  const cg = getCategoryPublicName(category);
  const title = `${cg} | ${blogName}`;
  const url = `${baseDomain}/${category}`;

  return {
    title,
    openGraph: {
      title,
      url,
      images: [blogThumbnailURL],
    },
    twitter: {
      title,
      images: [blogThumbnailURL],
    },
  };
}

const CategoryPage = async ({ params }: { params: Props }) => {
  const { category } = await params;
  await getCategoryList();
  return <PostListPage category={category} />;
};

export default CategoryPage;
