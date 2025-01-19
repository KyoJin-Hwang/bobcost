'use client';

import { useContext, useEffect } from 'react';

import { AboutContext } from '../about/AboutProvider';
import { useFadeInOut } from '@/hooks/useFadeInOut';
import { cn } from '@/lib/utils';

// 애니메이션 Section
const FadeInOutSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useFadeInOut();

  const { setHeadArray } = useContext(AboutContext);

  useEffect(() => {
    const aboutMeText = ref.current?.querySelector('p.text-3xl')?.textContent;
    const aboutMeTop = ref.current?.offsetTop ?? 0;

    if (aboutMeText) {
      setHeadArray((prevArray) =>
        prevArray.some((el) => el.title === aboutMeText)
          ? prevArray.map((el) =>
              el.title === aboutMeText ? { ...el, isVisible } : el
            )
          : [...prevArray, { title: aboutMeText, isVisible, top: aboutMeTop }]
      );
    }
  }, [isVisible]);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transform transition-opacity',
        isVisible ? 'animate-fadeIn' : 'animate-fadeOut'
      )}
    >
      {children}
    </div>
  );
};

export default FadeInOutSection;
