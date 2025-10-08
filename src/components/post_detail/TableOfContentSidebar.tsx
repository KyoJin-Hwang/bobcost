'use client';

import { useEffect, useRef, useState } from 'react';

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
  const listRef = useRef<HTMLUListElement>(null);
  const [showTopHint, setShowTopHint] = useState(false);
  const [showBottomHint, setShowBottomHint] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const updateShadows = () => {
      const hasTop = el.scrollTop > 0;
      const hasBottom = el.scrollTop + el.clientHeight < el.scrollHeight - 1;
      setShowTopHint(hasTop);
      setShowBottomHint(hasBottom);
    };

    updateShadows();
    el.addEventListener('scroll', updateShadows, { passive: true });
    window.addEventListener('resize', updateShadows);
    return () => {
      el.removeEventListener('scroll', updateShadows);
      window.removeEventListener('resize', updateShadows);
    };
  }, []);

  return (
    <aside className='not-prose absolute -top-[200px] left-full -mb-[100px] hidden h-[calc(100%+150px)] xl:block'>
      <div className='sticky bottom-0 top-[200px] z-10 ml-[5rem] mt-[200px] w-[220px]'>
        <div className='mb-4 px-2 py-2'>
          <div className='mb-1 font-bold'>On this page</div>
          <div className='relative'>
            {/* 상단/하단 스크롤 힌트 */}
            {showTopHint && (
              <div className='pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent dark:from-zinc-900' />
            )}
            {showBottomHint && (
              <div className='pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent dark:from-zinc-900' />
            )}

            <ul
              ref={listRef}
              className='max-h-[60vh] overflow-auto overscroll-contain pr-2 text-xs'
            >
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
                      isIntersecting &&
                        'border-l-2 border-pink-600 pl-2 font-medium text-pink-600',
                      'py-1 transition-all duration-200'
                    )}
                  >
                    <Link
                      href={item.link}
                      className={cn(
                        'transition-colors hover:text-pink-600',
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
        </div>
        <div className='flex gap-2'>
          <ScrollTop tooltip='맨 위로' />
          <ScrollToComment tooltip='댓글' />
          <CopyLinkButton tooltip='복사' />
        </div>
      </div>
    </aside>
  );
};

export default TableOfContent;
