import { unstable_cache } from 'next/cache';

import { CategoryDetail, HeadingItem, Post, PostMatter } from '@/config/types';
import dayjs from 'dayjs';
import fs from 'fs';
import GithubSlugger from 'github-slugger';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const BASE_PATH = 'src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 메모리 캐시
const postCache = new Map<string, Post>();
const postListCache = new Map<string, Post[]>();

// 파일 변경 감지를 위한 해시 생성
const getFileHash = (filePath: string): string => {
  try {
    const stats = fs.statSync(filePath);
    return `${filePath}-${stats.mtime.getTime()}-${stats.size}`;
  } catch {
    // 파일이 없으면 현재 시간 반환
    return `${filePath}-${Date.now()}`;
  }
};

// Category folder name을 public name으로 변경 : dir_name -> Dir Name
export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ');

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return postPaths;
};

// MDX의 개요 파싱
export const parsePostAbstract = (postPath: string) => {
  const normalizedPath = postPath.split(path.sep).join('/');
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [categoryPath, slug] = filePath.split('/');
  const url = `/blog/${categoryPath}/${slug}`;

  const categoryPublicName = getCategoryPublicName(categoryPath);
  return { url, categoryPath, categoryPublicName, slug };
};

// 캐싱된 MDX detail 파싱
const parsePostDetailCached = async (postPath: string) => {
  const fileHash = getFileHash(postPath);

  // 메모리 캐시 확인
  const cacheKey = `detail-${fileHash}`;
  if (postCache.has(cacheKey)) {
    return postCache.get(cacheKey)!;
  }

  // 파일 읽기 및 파싱
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);

  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);

  // TOC도 미리 계산 (성능 향상)
  const toc = parseToc(content);

  const postAbstract = parsePostAbstract(postPath);

  const result = {
    ...postAbstract,
    ...grayMatter,
    createdAt: grayMatter.createdAt,
    updatedAt: grayMatter.updatedAt,
    createdDateString: dayjs(grayMatter.createdAt)
      .locale('ko')
      .format('YYYY년 MM월 DD일'),
    updatedDateString: grayMatter.updatedAt
      ? dayjs(grayMatter.updatedAt).locale('ko').format('YYYY년 MM월 DD일')
      : '',
    content,
    readingMinutes,
    toc, // TOC 추가
  };

  // 캐시에 저장
  postCache.set(cacheKey, result as Post);

  return result;
};

// 캐싱된 MDX 파일 파싱
const parsePostCached = async (postPath: string): Promise<Post> => {
  const fileHash = getFileHash(postPath);

  // 메모리 캐시 확인
  if (postCache.has(fileHash)) {
    return postCache.get(fileHash)!;
  }

  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetailCached(postPath);

  const result = {
    ...postAbstract,
    ...postDetail,
  } as Post;

  // 캐시에 저장
  postCache.set(fileHash, result);

  return result;
};

// post를 날짜 최신순으로 정렬
const sortPostList = (postList: Post[]) => {
  return postList.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });
};

// 청크 단위 병렬 처리 함수
const processPostsInChunks = async (postPaths: string[], chunkSize = 10) => {
  const chunks = [];
  for (let i = 0; i < postPaths.length; i += chunkSize) {
    chunks.push(postPaths.slice(i, i + chunkSize));
  }

  const results: Post[] = [];
  for (const chunk of chunks) {
    const chunkPosts = await Promise.all(
      chunk.map((postPath) => parsePostCached(postPath))
    );
    results.push(...chunkPosts);
  }

  return results;
};

// Next.js 15 cache API를 사용한 포스트 목록 조회
export const getCachedPostList = unstable_cache(
  async (category?: string): Promise<Post[]> => {
    const cacheKey = `postlist-${category || 'all'}`;

    // 메모리 캐시 확인
    if (postListCache.has(cacheKey)) {
      const cached = postListCache.get(cacheKey)!;
      // 파일 변경 확인 (간단한 체크)
      const postPaths = getPostPaths(category);
      if (cached.length === postPaths.length) {
        return cached;
      }
    }

    const postPaths = getPostPaths(category);

    // 청크 단위로 병렬 처리
    const postList = await processPostsInChunks(postPaths);

    const filtered = postList.filter(
      (post) => post.look === 'on' || process.env.NODE_ENV !== 'production'
    );

    // 캐시에 저장
    postListCache.set(cacheKey, filtered);

    return filtered;
  }
);

// 기존 함수들을 캐싱 버전으로 교체
export const getPostList = getCachedPostList;

export const getSortedPostList = unstable_cache(async (category?: string) => {
  const postList = await getCachedPostList(category);
  return sortPostList(postList);
});

// 캐싱된 포스트 상세 조회
export const getCachedPostDetail = unstable_cache(
  async (category: string, slug: string) => {
    const filePath = `${POSTS_PATH}/${category}/${slug}/content.mdx`;
    return await parsePostCached(filePath);
  }
);

export const getPostDetail = getCachedPostDetail;

// 최적화된 이전/다음 글 찾기 (전체 목록 재조회하지 않음)
export const getPrevNextInSeries = async (
  categoryPath: string,
  slug: string
) => {
  // 이미 로드된 전체 포스트 목록 사용
  const posts = await getCachedPostList();

  const sameSeries = posts.filter((p) => p.categoryPath === categoryPath);
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

// 캐싱된 사이트맵 함수
export const getSitemapPostList = unstable_cache(async () => {
  const postList = await getCachedPostList();
  const baseUrl = 'https://www.bobcost.kr';
  return postList.map(({ url }) => ({
    lastModified: new Date(),
    url: `${baseUrl}${url}`,
  }));
});

// 캐싱된 포스트 카운트
export const getAllPostCount = unstable_cache(
  async () => (await getCachedPostList()).length
);

// 캐싱된 카테고리 리스트
export const getCategoryList = unstable_cache(async (): Promise<string[]> => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`);
  return cgPaths.map((p) => p.split(path.sep).slice(-1)?.[0]);
});

// 최적화된 카테고리 상세 정보 (한 번의 포스트 로딩으로 계산)
export const getCategoryDetailList = unstable_cache(async () => {
  const postList = await getCachedPostList();
  const result: { [key: string]: number } = {};

  for (const post of postList) {
    if (post.look === 'off' && process.env.NODE_ENV === 'production') {
      continue;
    }
    const category = post.categoryPath;
    result[category] = (result[category] || 0) + 1;
  }

  const detailList: CategoryDetail[] = Object.entries(result).map(
    ([category, count]) => ({
      dirName: category,
      publicName: getCategoryPublicName(category),
      count,
    })
  );

  return detailList;
});

// TOC 파싱 (변경 없음)
export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(##|###)\s+(.*)$/gim;
  const headingList = content.match(regex);
  const slugger = new GithubSlugger();

  return (
    headingList?.map((headingLine: string) => {
      const indent = (headingLine.match(/#/g)?.length || 2) - 2;
      const text = headingLine.replace(/^(##|###)\s+/, '');
      const slug = slugger.slug(text);
      return {
        text,
        link: `#${slug}`,
        indent,
      } as HeadingItem;
    }) || []
  );
};

// 최적화된 최신 날짜 찾기 함수
export const findLatestDates = unstable_cache(async (data: Post[]) => {
  if (data.length === 0) {
    return { create: '/', update: '/' };
  }

  let latestCreated = data[0];
  let latestUpdated: Post | null = null;
  let minUpdateDiff = Infinity;
  const now = new Date().getTime();

  for (const post of data) {
    const currentCreatedTime = new Date(post.createdAt).getTime();
    const latestCreatedTime = new Date(latestCreated.createdAt).getTime();

    if (currentCreatedTime > latestCreatedTime) {
      latestCreated = post;
    }

    if (post.updatedAt) {
      const updateTime = new Date(post.updatedAt).getTime();
      const diff = Math.abs(updateTime - now);

      if (diff < minUpdateDiff) {
        minUpdateDiff = diff;
        latestUpdated = post;
      }
    }
  }

  return {
    create: latestCreated.url,
    update: latestUpdated?.url || '/',
  };
});

// 캐시 초기화 함수 (개발 중 필요시 사용)
export const clearPostCache = () => {
  postCache.clear();
  postListCache.clear();
};
