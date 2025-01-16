'use client';

import { Text } from '../ui/Text';
import { Resume } from '@/data/resume';
import { useFadeInOut } from '@/hooks/useFadeInOut';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
}

interface Head extends Props {
  children: React.ReactNode;
}

interface AboutMe extends Props {
  desc: string;
}
interface Skill extends Props {
  category: string;
}

export const FadeInOutSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { ref, isVisible } = useFadeInOut();

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

export const AboutHeading = ({ title, children }: Head) => {
  return (
    <div className='flex items-end gap-2'>
      {children}
      <Text text={title} className='text-3xl font-bold' />
    </div>
  );
};

export const AboutMy = ({ title, desc }: AboutMe) => {
  return (
    <li>
      {title} : <span className='font-medium'>{desc}</span>
    </li>
  );
};

export const AboutSkill = ({ title, category }: Skill) => {
  return (
    <div className='flex flex-col flex-wrap items-start gap-3 pc:flex-row pc:items-center pc:gap-6'>
      <div className='min-w-[118px]'>
        <Text text={title} className='text-2xl' />
      </div>
      <ul className='flex flex-wrap gap-2'>
        {Resume.skills
          .filter((el) => el.category === category)
          .map((el) => (
            <li key={el.name}>
              <Text
                className={cn(
                  'rounded border-2 border-slate-400 px-2 py-1',
                  el.color
                )}
                text={el.name}
                fontSize={16}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
