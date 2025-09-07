import { Metadata } from 'next';
import Link from 'next/link';

import FloatingButton from '@/components/common/tocbutton/FloatingButton';
import TocTop from '@/components/common/tocbutton/TableOfContentTop';
import Giscus from '@/components/post_detail/Giscus';
import { PostBody } from '@/components/post_detail/PostBody';
import { PostHeader } from '@/components/post_detail/PostHeader';
import TocSideBar from '@/components/post_detail/TableOfContentSidebar';
import { baseDomain } from '@/config/const';
import { Post } from '@/config/types';
import { getCachedPostDetail, getCachedPostList } from '@/lib/post';

interface Props {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// ISR 설정으로 변경
export const dynamicParams = true;
export const revalidate = 3600; // 1시간 캐시

// 인기 글만 빌드 시 생성
export async function generateStaticParams() {
  const posts = await getCachedPostList();
  // 최신 5개 글만 빌드 시 생성 (나머지는 on-demand)
  return posts.slice(0, 5).map((post) => ({
    category: post.categoryPath,
    slug: post.slug,
  }));
}

// 메타데이터 생성 최적화
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;

  try {
    const post = await getCachedPostDetail(category, slug);
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
  } catch {
    // 포스트가 없을 경우 기본 메타데이터
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }
}

// 이전/다음 글 찾기 최적화된 함수
const findPrevNextOptimized = (
  allPosts: Post[],
  categoryPath: string,
  slug: string
) => {
  const sameSeries = allPosts.filter((p) => p.categoryPath === categoryPath);
  sameSeries.sort((a, b) => {
    const aTime = new Date(a.createdAt).getTime();
    const bTime = new Date(b.createdAt).getTime();
    return aTime - bTime;
  });

  const index = sameSeries.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? sameSeries[index - 1] : undefined;
  const next =
    index >= 0 && index < sameSeries.length - 1
      ? sameSeries[index + 1]
      : undefined;

  return { prev, next, siblings: sameSeries };
};

const PostDetail = async ({ params }: Props) => {
  const { category, slug } = await params;

  // 병렬로 필요한 데이터 한번에 로딩
  const [post, allPosts] = await Promise.all([
    getCachedPostDetail(category, slug),
    getCachedPostList(), // 이미 캐싱됨
  ]);

  // TOC는 이제 post 객체에 미리 포함됨 (1단계에서 개선)
  const toc = post.toc;

  // 전체 포스트 목록을 재호출하지 않고 메모리에서 계산
  const { prev, next } = findPrevNextOptimized(
    allPosts,
    post.categoryPath,
    post.slug
  );

  return (
    <div className='prose mx-auto w-full max-w-[850px] px-5 dark:prose-invert sm:px-6'>
      <PostHeader post={post} />
      <TocTop toc={toc ?? []} />
      <article className='relative'>
        <PostBody post={post} />
        <TocSideBar toc={toc ?? []} />
      </article>
      {(prev || next) && (
        <nav className='mt-10 grid gap-3 overflow-x-hidden sm:grid-cols-2'>
          {prev && (
            <Link
              href={prev.url}
              className='block min-w-0 rounded border p-4 text-sm hover:bg-accent'
              aria-label={`이전글: ${prev.title}`}
            >
              <div className='text-muted-foreground mb-1 text-xs'>이전글</div>
              <div className='truncate font-medium'>← {prev.title}</div>
            </Link>
          )}
          {next && (
            <Link
              href={next.url}
              className='block min-w-0 rounded border p-4 text-sm hover:bg-accent'
              aria-label={`다음글: ${next.title}`}
            >
              <div className='text-muted-foreground mb-1 text-right text-xs sm:text-left'>
                다음글
              </div>
              <div className='truncate text-right font-medium sm:text-left'>
                {next.title} →
              </div>
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
