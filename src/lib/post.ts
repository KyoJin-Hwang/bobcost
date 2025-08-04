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
  
  // Date 객체 유지 (시간 정보 포함)
  const createdAt = grayMatter.createdAt;
  const updatedAt = grayMatter.updatedAt;
  
  // 표시용 문자열 변환
  const createdDateString = dayjs(createdAt).locale('ko').format('YYYY년 MM월 DD일');
  const updatedDateString = updatedAt 
    ? dayjs(updatedAt).locale('ko').format('YYYY년 MM월 DD일')
    : '';

  return {
    ...grayMatter,
    createdAt,
    updatedAt,
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

// post를 날짜 최신순으로 정렬 (시간까지 포함)
const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA; // 최신순 정렬 (내림차순)
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

// 최근 생성글 및 수정글 url 반환함수 (성능 최적화 및 동일 날짜 처리)
export const findLatestDates = (data: Post[]) => {
  if (data.length === 0) {
    return { create: '/', update: '/' };
  }

  // 성능 최적화: 한 번의 순회로 최신 생성글과 수정글 모두 찾기
  let latestCreated = data[0];
  let latestUpdated: Post | null = null;
  let minUpdateDiff = Infinity;

  const now = new Date().getTime();

  for (const post of data) {
    // 최신 생성글 찾기 (시간까지 포함하여 정확한 비교)
    const currentCreatedTime = new Date(post.createdAt).getTime();
    const latestCreatedTime = new Date(latestCreated.createdAt).getTime();
    
    if (currentCreatedTime > latestCreatedTime) {
      latestCreated = post;
    }

    // 최신 수정글 찾기 (updatedAt이 있는 경우만)
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
};
