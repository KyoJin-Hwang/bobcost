import { getSortedPostList } from '@/lib/post';

type Props = {
  params: { category: string };
};

const Blog = async ({ params }: Props) => {
  const postList = await getSortedPostList(params.category);
  console.log(postList);
  return (
    <div className=''>
      <div>blog </div>
    </div>
  );
};

export default Blog;
