import CategoryList from './CategoryList';
import PostCard from './PostCard';
import {
  getAllPostCount,
  getCategoryDetailList,
  getSortedPostList,
} from '@/lib/post';

interface PostListProps {
  category?: string;
}

const PostListPage = async ({ category }: PostListProps) => {
  // lib/post에 있는 함수를 사용하여 병렬로 데이터 가져오기
  const [postList, categoryList, allPostCount] = await Promise.all([
    getSortedPostList(category),
    getCategoryDetailList(),
    getAllPostCount(),
  ]);

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
