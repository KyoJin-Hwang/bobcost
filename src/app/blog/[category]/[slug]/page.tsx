import { Metadata } from 'next';

import { PostBody } from '@/components/post_detail/PostBody';
import { baseDomain } from '@/config/const';
import { getPostDetail, getPostPaths, parsePostAbstract } from '@/lib/post';

type Props = {
  params: { category: string; slug: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

const PostDetail = async ({ params: { category, slug } }: Props) => {
  const post = await getPostDetail(category, slug);
  return (
    <div className='prose dark:prose-invert sm:px-6 mx-auto w-full max-w-[750px] px-5'>
      <PostBody post={post} />
    </div>
  );
};

export default PostDetail;
