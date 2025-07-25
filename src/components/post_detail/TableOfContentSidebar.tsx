'use client';

import Link from 'next/link';

import CopyLinkButton from '../common/tocbutton/CopyLinkButton';
import { ScrollToComment, ScrollTop } from '../common/tocbutton/ScrollButton';
import { HeadingItem } from '@/config/types';
import { useHeadingsObserver } from '@/hooks/useHeadingsObserver';
import { cn } from '@/lib/utils';

interface Props {
  toc: HeadingItem[];
}

const TableOfContent = ({ toc }: Props) => {
  const activeIdList = useHeadingsObserver('h2, h3');

  const cleanLink = (link: string) => {
    // 이모지 + 하이픈 + 나머지 문자열 매칭
    const match = link.match(/^#(\p{Emoji})-(.+)/u);

    if (match) {
      // match[2]는 이모지 뒤의 본문
      return `#-${match[2]}`;
    }

    return link;
  };
  return (
    <aside className='not-prose absolute -top-[200px] left-full -mb-[100px] hidden h-[calc(100%+150px)] xl:block'>
      <div className='sticky bottom-0 top-[200px] z-10 ml-[5rem] mt-[200px] w-[220px]'>
        <div className='mb-4 border-l px-4 py-2'>
          <div className='mb-1 font-bold'>On this page</div>
          <ul className='text-xs'>
            {toc.map((item) => {
              const isH3 = item.indent === 1;
              const isIntersecting = activeIdList.includes(item.link);
              return (
                <li
                  key={item.link}
                  className={cn(
                    isH3 && 'ml-4',
                    isIntersecting && 'font-medium text-pink-600',
                    'py-1 transition'
                  )}
                >
                  <Link href={cleanLink(item.link)}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='flex gap-2'>
          <ScrollTop />
          <ScrollToComment />
          <CopyLinkButton />
        </div>
      </div>
    </aside>
  );
};

export default TableOfContent;
