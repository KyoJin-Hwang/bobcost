import { getPostList, getSortedPostList } from '@/lib/post';

type Props = {
  params: { category: string };
};

const Blog = async ({ params }: Props) => {
  return (
    <div className=''>
      <div>blog </div>
    </div>
  );
};

export default Blog;
