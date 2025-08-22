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
  const activeIdList = useHeadingsObserver('section');
  
  return (
    <aside className='not-prose absolute -top-[200px] left-full -mb-[100px] hidden h-[calc(100%+150px)] xl:block'>
      <div className='sticky bottom-0 top-[200px] z-10 ml-[5rem] mt-[200px] w-[220px]'>
        <div className='mb-4 px-2 py-2'>
          <div className='mb-1 font-bold'>On this page</div>
          <ul className='text-xs'>
            {toc.map((item) => {
              const isH3 = item.indent === 1;
              // section ID와 TOC 링크를 매칭
              const sectionId = `section-${item.link.replace('#', '')}`;
              const isIntersecting = activeIdList.includes(`#${sectionId}`);
              
              return (
                <li
                  key={item.link}
                  className={cn(
                    isH3 && 'ml-4',
                    isIntersecting && 'font-medium text-pink-600 border-l-2 border-pink-600 pl-2',
                    'py-1 transition-all duration-200'
                  )}
                >
                  <Link 
                    href={item.link}
                    className={cn(
                      'hover:text-pink-600 transition-colors',
                      isIntersecting && 'text-pink-600'
                    )}
                  >
                    {item.text}
                  </Link>
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
