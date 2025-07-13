import { CategoryDetail, HeadingItem, Post, PostMatter } from '@/config/types';
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
export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
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
  // 글 예상 읽기 시간
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const createdAt = dayjs(grayMatter.createdAt)
    .locale('ko')
    .format('YYYY년 MM월 DD일');
  const updatedAt = dayjs(grayMatter.updatedAt)
    .locale('ko')
    .format('YYYY년 MM월 DD일');

  const createdDateString = createdAt;
  const updatedDateString = updatedAt;

  return {
    ...grayMatter,
    createdDateString,
    updatedDateString,
    content,
    readingMinutes,
  };
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
    const dateA = a.createdAt;
    const dateB = b.createdAt;
    return dateA > dateB ? -1 : 1; // 최신순 정렬
  });
};

// 모든 포스트 목록 조회. 블로그 메인 페이지에서 사용
export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category);
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );
  const filtered = postList.filter(
    (post) => post.look === 'on' || process.env.NODE_ENV !== 'production'
  );
  return filtered;
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

// 글 전체 갯수
export const getAllPostCount = async () => (await getPostList()).length;

// 카테고리 리스트
export const getCategoryList = () => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`);
  const cgList = cgPaths.map((p) => p.split(path.sep).slice(-1)?.[0]);
  return cgList;
};

// 카테고리 글 전체 갯수
export const getCategoryDetailList = async () => {
  const postList = await getPostList();
  const result: { [key: string]: number } = {};
  for (const post of postList) {
    if (post.look === 'off' && process.env.NODE_ENV === 'production') {
      continue;
    }
    const category = post.categoryPath;

    if (result[category]) {
      result[category] += 1;
    } else {
      result[category] = 1;
    }
  }
  const detailList: CategoryDetail[] = Object.entries(result).map(
    ([category, count]) => ({
      dirName: category,
      publicName: getCategoryPublicName(category),
      count,
    })
  );
  return detailList;
};

// 글 상세 페이지 내용 조회
export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}/content.mdx`;
  const detail = await parsePost(filePath);
  return detail;
};

export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(##|###) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace('##', '').replace('#', ''),
      link:
        '#' +
        heading
          .replace('# ', '')
          .replace('#', '')
          .replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
          .replace('?', ''),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  );
};

// 최근 생성글 및 수정글 url 반환함수
export const findLatestDates = (data: Post[]) => {
  const today = new Date().getTime();

  // 가장 가까운 updatedAt의 차이값 계산
  const closestDiff = Math.min(
    ...data
      .filter((post) => post.updatedAt)
      .map((post) => Math.abs(new Date(post.updatedAt!).getTime() - today))
  );
  const latestUpdated = data.filter(
    (post) =>
      post.updatedAt &&
      Math.abs(new Date(post.updatedAt!).getTime() - today) === closestDiff
  );

  return {
    create: data[0].url,
    update: latestUpdated[0]?.url || '/',
  };
};
