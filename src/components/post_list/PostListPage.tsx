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
  const postList = await getSortedPostList(category);
  const categoryList = await getCategoryDetailList();
  const allPostCount = await getAllPostCount();
  return (
    <section className='mt-5 px-5 pb-[100px]'>
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
      <section className='mt-4 grid grid-cols-listGrid gap-x-2 gap-y-4'>
        {postList.map((post) => (
          <PostCard key={post.url + post.createdAt} post={post} />
        ))}
      </section>
    </section>
  );
};

export default PostListPage;
