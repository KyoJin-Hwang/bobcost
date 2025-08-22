import { Metadata } from 'next';

import FloatingButton from '@/components/common/tocbutton/FloatingButton';
import TocTop from '@/components/common/tocbutton/TableOfContentTop';
import Giscus from '@/components/post_detail/Giscus';
import { PostBody } from '@/components/post_detail/PostBody';
import { PostHeader } from '@/components/post_detail/PostHeader';
import TocSideBar from '@/components/post_detail/TableOfContentSidebar';
import { baseDomain } from '@/config/const';
import { getPostDetail, getPrevNextInSeries, parseToc } from '@/lib/post';
import Link from 'next/link';

interface Props {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await getPostDetail(category, slug);
  const title = `${post.title}`;
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
  const { prev, next } = await getPrevNextInSeries(post.categoryPath, post.slug);
  return (
    <div className='prose mx-auto w-full max-w-[850px] px-5 dark:prose-invert sm:px-6'>
      <PostHeader post={post} />
      <TocTop toc={toc} />
      <article className='relative'>
        <PostBody post={post} />
        <TocSideBar toc={toc} />
      </article>
      {(prev || next) && (
        <nav className='mt-10 grid gap-3 overflow-x-hidden sm:grid-cols-2'>
          {prev && (
            <Link
              href={prev.url}
              className='block min-w-0 rounded border p-4 text-sm hover:bg-accent'
              aria-label={`이전글: ${prev.title}`}
            >
              <div className='mb-1 text-xs text-muted-foreground'>이전글</div>
              <div className='truncate font-medium'>← {prev.title}</div>
            </Link>
          )}
          {next && (
            <Link
              href={next.url}
              className='block min-w-0 rounded border p-4 text-sm hover:bg-accent'
              aria-label={`다음글: ${next.title}`}
            >
              <div className='mb-1 text-xs text-muted-foreground text-right sm:text-left'>다음글</div>
              <div className='truncate text-right sm:text-left font-medium'>{next.title} →</div>
            </Link>
          )}
        </nav>
      )}
      <hr />
      <Giscus />
      <FloatingButton />
    </div>
  );
};

export default PostDetail;
