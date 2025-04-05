import { Metadata } from 'next';

import FloatingButton from '@/components/common/tocbutton/FloatingButton';
import TocTop from '@/components/common/tocbutton/TableOfContentTop';
import Giscus from '@/components/post_detail/Giscus';
import { PostBody } from '@/components/post_detail/PostBody';
import { PostHeader } from '@/components/post_detail/PostHeader';
import TocSideBar from '@/components/post_detail/TableOfContentSidebar';
import { baseDomain } from '@/config/const';
import { getPostDetail, parseToc } from '@/lib/post';

type Props = {
  params: { category: string; slug: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateMetadata({
  params: { category, slug },
}: Props): Promise<Metadata> {
  const post = await getPostDetail(category, slug);

  const title = `${post.title} | BOBcost`;
  const imageURL = `${baseDomain}${post.thumbnail}`;

  return {
    title,
    description: post.desc,

    openGraph: {
      title,
      description: post.desc,
      type: 'article',
      url: `${baseDomain}${post.url}`,
      images: [imageURL],
    },
    twitter: {
      title,
      description: post.desc,
      images: [imageURL],
    },
  };
}

const PostDetail = async ({ params }: Props) => {
  const { category, slug } = await params;
  const post = await getPostDetail(category, slug);
  const toc = parseToc(post.content);
  return (
    <div className='prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6'>
      <PostHeader post={post} />
      <TocTop toc={toc} />
      <article className='relative'>
        <PostBody post={post} />
        <TocSideBar toc={toc} />
      </article>
      <hr />
      <Giscus />
      <FloatingButton />
    </div>
  );
};

export default PostDetail;
