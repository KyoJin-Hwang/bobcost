'use client';

import { Text } from '../ui/Text';
import { Resume } from '@/data/resume';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
}
interface Head extends Props {
  children: React.ReactNode;
  className?: string;
}
interface AboutMe extends Props {
  desc: string;
}
interface Interview {
  question: string;
  answer: string;
}
interface Skill extends Props {
  category: string;
}

// 컨텐츠 타이틀
export const AboutHeading = ({ title, children, className }: Head) => {
  return (
    <div
      className={cn(
        className,
        `flex items-end gap-2 self-center pc:self-start`
      )}
    >
      {children}
      <Text text={title} className='text-3xl font-bold' />
    </div>
  );
};

// 프로필 컴포넌트
export const AboutMy = ({ title, desc }: AboutMe) => {
  return (
    <li>
      {title} : <span className='font-medium'>{desc}</span>
    </li>
  );
};

// 인터뷰 컴포넌트

export const AboutInterview = ({ question, answer }: Interview) => {
  return (
    <div className='rounded-lg bg-secondary p-6'>
      <p className='pb-6 text-2xl font-bold'>Q. {question}</p>
      <p>{answer}</p>
    </div>
  );
};

// 스킬 컴포너트
export const AboutSkill = ({ title, category }: Skill) => {
  return (
    <div className='flex flex-col flex-wrap items-start gap-3'>
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
