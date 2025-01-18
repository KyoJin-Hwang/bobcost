import { useState } from 'react';

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
    else if (result.update) return 'Updated';
    else return 'hidden';
  };

  const lowerCase = post.group.toLowerCase();
  const postClassGroup = (group: string) => {
    return clsx('absolute font-bold right-2 top-2 rounded px-2 py-1', {
      'bg-html text-html-foreground': group === 'html',
      'bg-css text-css-foreground': group === 'css',
      'bg-js text-js-foreground': group === 'js',
      'bg-react text-react-foreground': group === 'react',
      'bg-nextjs text-nextjs-foreground': group === 'nextjs',
      'bg-ts text-ts-foreground': group === 'ts',
      'bg-zustand text-zustand-foreground': group === 'zustand',
    });
  };
  const postDateGroup = (status: string) => {
    return clsx(
      'absolute right-2 bottom-2 rounded px-2 py-1 flex items-center gap-2',
      {
        'bg-teal-500 ': status === 'New',
        'bg-orange-500 ': status === 'Updated',
        hidden: status === 'hidden',
      }
    );
  };
  return (
    <Link href={post.url} className='group relative z-0'>
      <li className='flex h-full flex-col gap-3 overflow-hidden rounded-md border hover:translate-y-[-5px] hover:shadow-xl dark:shadow-gray-500'>
        <div className='relative w-full overflow-hidden border-b'>
          <img
            className='cover transition-all duration-100 group-hover:scale-[1.2]'
            src={post.thumbnail}
            alt={`thumbnail for ${post.title}`}
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
            <div className='mb-3 mt-1 flex flex-col gap-1'>
              <h2 className='line-clamp-1 text-lg font-bold pc:text-xl'>
                {post.title}
              </h2>
              <Text text={post.desc} fontSize={14} className='line-clamp-1' />
            </div>
          </div>
          {/* 날짜, 글 시간 */}
          <div className='flex justify-between gap-3 text-sm text-gray-500 dark:text-gray-400'>
            <div className='flex items-center gap-1'>
              <CalendarDays className='w-3.5' />
              <span>{post.dateString}</span>
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
