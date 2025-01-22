'use client';

import { Text } from '../ui/Text';
import { Resume as resume } from '@/data/resume';
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
      <Text text={title} className='text-2xl' />
      <ul className='flex flex-wrap gap-2'>
        {resume.skills
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

// 경력 컴포넌트
export const AboutCarrer = () => {
  return resume.carrer.map((el) => (
    <li
      key={el.company}
      className='flex flex-col gap-4 rounded-lg bg-secondary p-6'
    >
      {/* Header */}
      <div className='flex flex-col gap-2'>
        <a target='_blank' href={el.link} className='flex cursor-pointer gap-2'>
          <img src={el.logo} alt='inDJ로고' className='w-8 rounded-lg' />
          <Text text={el.company} className='text-2xl font-bold' />
        </a>
        <div>
          <Text
            text={`${el.start} ~ ${el.end}`}
            className='text-sm text-slate-400'
          />
          <Text text={el.team} className='text-sm text-slate-400' />
        </div>
        <Text text={el.desc} />
      </div>
      <div className='flex flex-col gap-9'>
        <section className='flex flex-col gap-3'>
          {/* Point */}
          <h2 className='text-xl font-bold'>Description</h2>
          <ul className='flex flex-col gap-3'>
            {el.points.map((point, index) => (
              <li key={index} className='border-l-4 border-foreground pl-2'>
                {point}
              </li>
            ))}
          </ul>
        </section>
        {/* Skill */}
        <section className='flex flex-col gap-3'>
          <h2 className='text-xl font-bold'>Tech Stack</h2>
          <ul className='flex flex-wrap gap-3'>
            {el.skills.map((skill, index) => (
              <li className='rounded-lg bg-informative p-2' key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </li>
  ));
};

// 프로젝트 컴포넌트
export const AboutProject = () => {
  return;
};
