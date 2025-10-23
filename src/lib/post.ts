import { unstable_cache as nextUnstableCache } from 'next/cache';

import { CategoryDetail, HeadingItem, Post, PostMatter } from '@/config/types';
import dayjs from 'dayjs';
import fs from 'fs';
import GithubSlugger from 'github-slugger';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

// Helper function to use cache only in production
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customUnstableCache = <T extends (...args: any[]) => Promise<any>>(
  fn: T,
  keys?: string[],
  opts?: { revalidate?: number | false; tags?: string[] }
): T => {
  if (process.env.NODE_ENV === 'development') {
    return fn;
  }
  return nextUnstableCache(fn, keys, opts);
};

const BASE_PATH = 'src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// Converts a category directory name to a public-facing name (e.g., 'dir_name' -> 'Dir Name')
export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ');

// Retrieves all MDX file paths, optionally filtered by category
export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  return sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
};

// Parses the abstract information (URL, category, slug) from a post path
export const parsePostAbstract = (postPath: string) => {
  const normalizedPath = postPath.split(path.sep).join('/');
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [categoryPath, slug] = filePath.split('/');
  // 한글 카테고리명과 슬러그를 URL 인코딩
  const encodedCategory = encodeURIComponent(categoryPath);
  const encodedSlug = encodeURIComponent(slug);
  const url = `/blog/${encodedCategory}/${encodedSlug}`;
  const categoryPublicName = getCategoryPublicName(categoryPath);

  return { url, categoryPath, categoryPublicName, slug };
};

// Parses the full details of a post from its file path (no caching)
const parsePost = (postPath: string): Post => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;

  return {
    ...parsePostAbstract(postPath),
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
    readingMinutes: Math.ceil(readingTime(content).minutes),
    toc: parseToc(content),
  } as Post;
};

// Sorts a list of posts by creation date in descending order
const sortPostList = (postList: Post[]) => {
  return postList.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

// --- Cached Functions ---

// Retrieves a list of all posts, using cache in production
export const getPostList = customUnstableCache(
  async (category?: string): Promise<Post[]> => {
    const postPaths = getPostPaths(category);
    const postList = postPaths.map(parsePost);
    return postList.filter(
      (post) => post.look === 'on' || process.env.NODE_ENV !== 'production'
    );
  },
  ['posts']
);

// Retrieves a sorted list of posts
export const getSortedPostList = customUnstableCache(
  async (category?: string) => {
    // URL 디코딩 처리
    const decodedCategory = category ? decodeURIComponent(category) : undefined;
    const postList = await getPostList(decodedCategory);
    return sortPostList(postList);
  },
  ['sorted-posts']
);

// Retrieves the details for a single post
export const getPostDetail = customUnstableCache(
  async (category: string, slug: string) => {
    // URL 디코딩 처리 (카테고리와 슬러그 모두)
    const decodedCategory = decodeURIComponent(category);
    const decodedSlug = decodeURIComponent(slug);
    const filePath = `${POSTS_PATH}/${decodedCategory}/${decodedSlug}/content.mdx`;
    return parsePost(filePath);
  },
  ['post-detail']
);

// Finds the previous and next posts in the same series
export const getPrevNextInSeries = async (
  categoryPath: string,
  slug: string
) => {
  const posts = await getPostList(); // Uses the cached list
  const sameSeries = posts
    .filter((p) => p.categoryPath === categoryPath)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

  const index = sameSeries.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? sameSeries[index - 1] : undefined;
  const next =
    index < sameSeries.length - 1 ? sameSeries[index + 1] : undefined;

  return { prev, next, siblings: sameSeries };
};

// Generates a list of posts for the sitemap
export const getSitemapPostList = customUnstableCache(async () => {
  const postList = await getPostList();
  const baseUrl = 'https://www.bobcost.kr';
  return postList.map(({ url }) => ({
    lastModified: new Date(),
    url: `${baseUrl}${url}`,
  }));
}, ['sitemap']);

// Gets the total count of all posts
export const getAllPostCount = customUnstableCache(
  async () => (await getPostList()).length,
  ['post-count']
);

// Retrieves a list of all category directory names
export const getCategoryList = customUnstableCache(async (): Promise<
  string[]
> => {
  return sync(`${POSTS_PATH}/*`).map((p) => path.basename(p));
}, ['categories']);

// Retrieves detailed information for each category (name, count)
export const getCategoryDetailList = customUnstableCache(async () => {
  const postList = await getPostList();
  const result: Record<string, number> = {};

  for (const post of postList) {
    result[post.categoryPath] = (result[post.categoryPath] || 0) + 1;
  }

  return Object.entries(result).map(([category, count]) => ({
    dirName: category,
    publicName: getCategoryPublicName(category),
    count,
  })) as CategoryDetail[];
}, ['category-details']);

// Parses headings from post content to create a table of contents
export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(##|###)\s+(.*)$/gim;
  const headingList = content.match(regex);
  const slugger = new GithubSlugger();

  return (
    headingList?.map((headingLine: string) => {
      const indent = (headingLine.match(/#/g)?.length || 2) - 2;
      const text = headingLine.replace(/^(##|###)\s+/, '');
      const slug = slugger.slug(text);
      return { text, link: `#${slug}`, indent };
    }) || []
  );
};

// Finds the most recently created and updated posts
export const findLatestDates = customUnstableCache(
  async (data: Post[]) => {
    if (data.length === 0) {
      return { create: '/', update: '/' };
    }

    let latestCreated = data[0];
    let latestUpdated: Post | null = null;

    for (const post of data) {
      if (new Date(post.createdAt) > new Date(latestCreated.createdAt)) {
        latestCreated = post;
      }
      if (post.updatedAt) {
        if (
          !latestUpdated ||
          new Date(post.updatedAt) > new Date(latestUpdated.updatedAt!)
        ) {
          latestUpdated = post;
        }
      }
    }

    return {
      create: latestCreated.url,
      update: latestUpdated?.url || '/',
    };
  },
  ['latest-dates']
);
