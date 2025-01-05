import { getPostList, getSortedPostList } from '@/lib/post';

const Blog = async () => {
  const test = await getSortedPostList('retrospect');
  const test2 = await getSortedPostList('frontend');
  return <div>blog</div>;
};

export default Blog;
