import CategoryList from './CategoryList';
import PostCard from './PostCard';
import { CategoryDetail, Post } from '@/config/types';
import { getCachedPostList } from '@/lib/post';

interface PostListProps {
  category?: string;
}

// 포스트 목록에서 카테고리 정보 계산하는 함수
const calculateCategoryDetails = (posts: Post[]): CategoryDetail[] => {
  const result: { [key: string]: number } = {};

  for (const post of posts) {
    if (post.look === 'off' && process.env.NODE_ENV === 'production') {
      continue;
    }
    const category = post.categoryPath;
    result[category] = (result[category] || 0) + 1;
  }

  return Object.entries(result).map(([category, count]) => ({
    dirName: category,
    publicName: category
      .split('_')
      .map((token) => token[0].toUpperCase() + token.slice(1))
      .join(' '),
    count,
  }));
};

// 포스트 정렬 함수
const sortPosts = (posts: Post[]) => {
  return posts.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA; // 최신순
  });
};

const PostListPage = async ({ category }: PostListProps) => {
  // 한 번만 전체 포스트 목록을 가져옴
  const allPosts = await getCachedPostList();

  // 메모리에서 필요한 데이터들을 계산
  const postList = category
    ? sortPosts(allPosts.filter((post) => post.categoryPath === category))
    : sortPosts(allPosts);

  const categoryList = calculateCategoryDetails(allPosts);
  const allPostCount = allPosts.length;

  return (
    <section className='mt-5 px-5 pb-[100px]'>
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
      <section className='mt-8 grid grid-cols-listGrid gap-x-6 gap-y-8'>
        {postList.map((post) => (
          <PostCard key={post.url + post.createdAt} post={post} />
        ))}
      </section>
    </section>
  );
};

export default PostListPage;
