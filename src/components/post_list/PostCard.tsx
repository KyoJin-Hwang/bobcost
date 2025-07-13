import Image from 'next/image';
import Link from 'next/link';

import { Text } from '../ui/Text';
import { Post } from '@/config/types';
import { findLatestDates, getSortedPostList } from '@/lib/post';
import clsx from 'clsx';
import { CalendarDays, Clock3, Upload } from 'lucide-react';

interface Props {
  post: Post;
}

const PostCard = async ({ post }: Props) => {
  const posts = await getSortedPostList();
  const result = findLatestDates(posts);

  const dateStatus = () => {
    if (result.create === post.url) return 'New';
    else if (post.updatedAt) return 'Updated';
    else return 'hidden';
  };

  const lowerCase = post.group.toLowerCase();
  const groupStyleMap: Record<string, string> = {
    html: 'bg-html text-html-foreground',
    css: 'bg-css text-css-foreground',
    js: 'bg-js text-js-foreground',
    react: 'bg-react text-react-foreground',
    docker: 'bg-react text-react-foreground',
    next: 'bg-next text-next-foreground',
    ts: 'bg-ts text-ts-foreground',
    zustand: 'bg-zustand text-zustand-foreground',
    book: 'bg-book text-book-foreground',
  };

  const postClassGroup = (group: string) => {
    const style = groupStyleMap[group] || 'bg-next text-next-foreground';
    return clsx('absolute font-bold right-2 top-2 rounded px-2 py-1', style);
  };
  const postDateGroup = (status: string) => {
    return clsx(
      'absolute right-2 bottom-2 rounded px-2 py-1 flex items-center gap-2 text-background',
      {
        'bg-teal-500': status === 'New',
        'bg-orange-500': status === 'Updated',
        hidden: status === 'hidden',
      }
    );
  };
  return (
    <Link href={post.url} className='group relative z-0'>
      <li className='flex h-full flex-col gap-3 overflow-hidden rounded-md border transition-all duration-300 hover:translate-y-[-20px] hover:shadow-xl dark:shadow-gray-500'>
        <div className='relative h-[250px] w-full overflow-hidden border-b'>
          <Image
            className='h-full w-full object-cover transition-all duration-100 group-hover:scale-[1.2]'
            src={post.thumbnail}
            alt={`thumbnail for ${post.title}`}
            fill
            sizes='100vw'
            priority
          />
          <Text
            className={postClassGroup(lowerCase)}
            text={post.group}
            fontSize={14}
          />
          <Text className={postDateGroup(dateStatus())} fontSize={14}>
            <Upload size={14} /> {dateStatus()}
          </Text>
        </div>
        <div className='flex flex-1 flex-col justify-between p-4'>
          {/* 카테고리명, 포스트 제목 및 간략내용 */}
          <div>
            <div className='text-sm font-bold text-pink-600 pc:text-base'>
              {post.categoryPublicName}
            </div>
            <div className='mb-3 mt-2 flex flex-col gap-2'>
              <h2 className='line-clamp-1 text-lg font-bold transition-colors duration-300 ease-in-out group-hover:text-[#9fb883] dark:group-hover:text-[#e6eb00] pc:text-xl'>
                {post.title}
              </h2>
              <Text
                text={post.desc}
                className='line-clamp-2 text-sm transition-colors duration-300 ease-in-out group-hover:text-[#9fb883] dark:group-hover:text-[#e6eb00]'
              />
            </div>
          </div>
          {/* 날짜, 글 시간 */}
          <div className='flex justify-between gap-3 text-sm text-gray-500 dark:text-gray-400'>
            <div className='flex items-center gap-1'>
              <CalendarDays className='w-3.5' />
              <span>{post.createdDateString}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Clock3 className='w-3.5' />
              <span>{post.readingMinutes}분</span>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PostCard;
