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
    <section className='mx-auto mt-12 w-full max-w-[950px] px-4'>
      <section>
        <ul className='md:grid-cols-2 lg:gap-12 grid grid-cols-1 gap-8'></ul>
      </section>
    </section>
  );
};

export default PostListPage;
