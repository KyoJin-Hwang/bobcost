import { Post, PostMatter } from '@/config/types';
import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const BASE_PATH = 'src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// Category folder name을 public name으로 변경 : dir_name -> Dir Name
export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ');

// 모든 MDX 파일 조회
export const getPostPaths = (mainCategory?: string, subCategory?: string) => {
  const main = mainCategory || '**';
  const sub = subCategory || '**';
  const mainPaths: string[] = sync(`${POSTS_PATH}/${main}/**/**/*.mdx`);
  const subPaths: string[] = sync(`${POSTS_PATH}/${main}/${sub}/**/*.mdx`);

  const postPaths = subPaths || mainPaths;

  return postPaths;
};

// MDX의 개요 파싱
// url, path, name, slug
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

// MDX detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);

  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const createdAt = dayjs(grayMatter.createdAt)
    .locale('ko')
    .format('YYYY년 MM월 DD일');
  const updatedAt = grayMatter.updatedAt
    ? dayjs(grayMatter.updatedAt).locale('ko').format('YYYY년 MM월 DD일')
    : null;

  const dateString = updatedAt || createdAt;

  return { ...grayMatter, dateString, content, readingMinutes };
};

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return {
    ...postAbstract,
    ...postDetail,
  };
};

// post를 날짜 최신순으로 정렬
const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => {
    const dateA = a.updatedAt || a.createdAt; // updatedAt 우선
    const dateB = b.updatedAt || b.createdAt; // updatedAt 우선
    return dateA > dateB ? -1 : 1; // 최신순 정렬
  });
};

// 모든 포스트 목록 조회. 블로그 메인 페이지에서 사용
export const getPostList = async (
  mainCategory?: string,
  subCategory?: string
): Promise<Post[]> => {
  const postPaths = getPostPaths(mainCategory, subCategory);
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );
  return postList;
};

// 정렬한 postList를 반납
export const getSortedPostList = async (category?: string) => {
  const postList = await getPostList(category);
  return sortPostList(postList);
};

// 사이트맵 함수
export const getSitemapPostList = async () => {
  const postList = await getPostList();
  const baseUrl = 'https://www.bobcost.kr';
  const sitemapPostList = postList.map(({ url }) => ({
    lastModified: new Date(),
    url: `${baseUrl}${url}`,
  }));
  return sitemapPostList;
};

// 글 갯수
export const getAllPostCount = async () => (await getPostList()).length;

// 카테고리 리스트
export const getCategoryList = () => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`);
  const cgList = cgPaths.map((p) => p.split(path.sep).slice(-1)?.[0]);
  return cgList;
};

export function generateStaticParams() {
  const categoryList = getCategoryList();
  const paramList = categoryList.map((category) => ({ category }));
  return paramList;
}
