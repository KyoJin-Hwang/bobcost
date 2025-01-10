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
  console.log(postList);
  return (
    <section className='mt-5 px-5'>
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
      <section className='grid-cols-listGrid mt-4 grid gap-x-2 gap-y-4'>
        {postList.map((post) => (
          <PostCard key={post.url + post.createdAt} post={post} />
        ))}
      </section>
    </section>
  );
};

export default PostListPage;
