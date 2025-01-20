'use client';

import {
  ForwardRefExoticComponent,
  RefAttributes,
  useContext,
  useEffect,
} from 'react';

import { AboutContext } from '../about/AboutProvider';
import { useFadeInOut } from '@/hooks/useFadeInOut';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

// 애니메이션 Section
const FadeInOutSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
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
      <section className={cn(className, 'flex flex-col gap-4')}>
        {children}
      </section>
    </div>
  );
};

export default FadeInOutSection;