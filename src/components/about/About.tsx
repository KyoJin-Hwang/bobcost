'use client';

import { useContext } from 'react';

import Link from 'next/link';

import { Text } from '../ui/Text';
import { AboutContextModal, AboutContextProject } from './AboutProvider';
import { ResumeProject } from '@/config/types';
import { Resume as resume } from '@/data/resume';
import { cn } from '@/lib/utils';
import { BookOpenIcon, Image } from 'lucide-react';

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
    <div className='rounded-lg bg-secondary p-6 shadow-[0_0_0.5rem] shadow-gray-400'>
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
      className='flex flex-col gap-4 rounded-lg bg-secondary p-6 shadow-[0_0_0.5rem] shadow-gray-400'
    >
      {/* Header */}
      <div className='flex flex-col gap-2'>
        <a target='_blank' href={el.link} className='flex cursor-pointer gap-2'>
          <img src={el.logo} alt='회사로고' className='w-8 rounded-lg' />
          <Text
            text={el.company}
            className='text-2xl font-bold transition-all duration-300 hover:bg-foreground hover:text-background'
          />
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
      {/* Detail */}
      <div className='flex flex-col gap-9'>
        {/* Description */}
        <section className='flex flex-col gap-3'>
          <h2 className='text-xl font-bold'>Description</h2>
          <ul className='flex flex-col gap-3'>
            {el.points.map((point, index) => (
              <li key={index} className='border-l-4 border-foreground pl-2'>
                {point}
              </li>
            ))}
          </ul>
        </section>
        {/* Tech Stack */}
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
  const contextProject = useContext(AboutContextProject);
  const contextModal = useContext(AboutContextModal);

  // null 체크: contextProject가 null일 경우 오류를 방지
  if (!contextProject) {
    throw new Error('AboutContextProject must be used within an AboutProvider');
  }

  const { setProject } = contextProject;
  const { modal, setModal } = contextModal;

  const ProjectClick = (item: ResumeProject) => {
    setModal(() => !modal);
    return setProject(item);
  };
  return resume.project.map((item) => (
    <li
      key={item.title}
      className='w-full translate-y-0 rounded-lg bg-secondary p-8 shadow-[0_0_0.5rem] shadow-gray-400'
    >
      <Text
        text={item.title}
        className='mb-2 inline-block rounded-lg bg-informative px-4 py-2 font-bold'
      />
      <Text text={`${item.start} ~ ${item.end}`} className='text-foreground' />
      <Text
        text={`${item.team}`}
        className='mb-2 border-b-[1px] border-b-slate-400 pb-2 text-slate-400'
      />
      <Text text={item.summary.title} className='mb-3 font-bold' />
      <ul className='mb-2 list-disc px-4 font-normal'>
        {item.summary.devlop.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
      <Link
        className='group relative mb-2 inline-block overflow-hidden border-l-4 border-l-foreground pl-3 pr-3'
        href={item.url}
        target='_blank'
      >
        <span className='absolute inset-0 -translate-x-full bg-foreground opacity-0 duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'></span>
        <span className='relative group-hover:text-background'>{item.url}</span>
      </Link>
      <ul className='flex flex-wrap gap-3'>
        {item.skill.map((el) => (
          <li className='rounded-lg bg-warning px-2 py-1' key={el}>
            {el}
          </li>
        ))}
      </ul>
      <div className='flex gap-4'>
        <button
          onClick={() => ProjectClick(item)}
          className='mt-4 flex gap-2 rounded-md border-2 p-2 font-bold transition-all duration-300 hover:bg-gray-500'
        >
          <BookOpenIcon />
          README
        </button>
        <button className='mt-4 flex gap-2 rounded-md border-2 p-2 font-bold transition-all duration-300 hover:bg-gray-500'>
          <Image />
          이미지
        </button>
      </div>
    </li>
  ));
};
