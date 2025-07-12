'use client';

import { useContext, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '../ui/Button';
import { Text } from '../ui/Text';
import {
  AboutContextModal,
  AboutContextProject,
  ModalContentType,
} from './AboutProvider';
import { ResumeProject } from '@/config/types';
import { Resume as resume } from '@/data/resume';
import { cn } from '@/lib/utils';
import { BookOpenIcon, Image as LucideImage } from 'lucide-react';

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
                  'rounded border-2 border-slate-400 px-2 py-2',
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
          <Image
            src={el.logo}
            alt='회사로고'
            width={32}
            height={32}
            className='rounded-lg'
          />
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
  const { modal, setModal, setModalContent } = contextModal;

  const projectClick = (item: ResumeProject, type: ModalContentType) => {
    setModal(() => !modal);
    setModalContent(type);
    return setProject(item);
  };

  const [selectedType, setSelectedType] = useState(0);
  const projectFilter = (type: number) => {
    setSelectedType(type);
  };

  const titleColor = (itemKey: number) => {
    if (itemKey === 1) return `bg-kyo-green`;
    else if (itemKey === 2) return `bg-kyo-blue`;
    else if (itemKey === 3) return `bg-kyo-red`;
    else return ``;
  };

  const projectTypes = [
    { type: 0, label: '전체', color: `bg-warning ` },
    { type: 1, label: '개인', color: 'bg-kyo-green' },
    { type: 2, label: '팀', color: 'bg-kyo-blue' },
    // { type: 3, label: '기업', color: 'bg-kyo-red' },
  ];
  return (
    <div className='flex flex-col gap-5'>
      <section className='flex gap-4'>
        {projectTypes.map((item) => (
          <Button
            key={item.type}
            variant='hover'
            label={item.label}
            className={` ${selectedType === item.type ? `outline outline-2 ${item.color}` : ``}`}
            size='project'
            onClick={() => projectFilter(item.type)}
          />
        ))}
      </section>
      <ul className='grid grid-cols-1 gap-8 pc:grid-cols-2'>
        {resume.project
          .filter((item) => selectedType === 0 || item.type === selectedType)
          .map((item) => (
            <li
              key={item.title}
              className='w-full translate-y-0 rounded-lg bg-secondary p-8 shadow-[0_0_0.5rem] shadow-gray-400'
            >
              <Text
                text={item.title}
                className={cn(
                  titleColor(item.type),
                  'mb-2 inline-block rounded-lg px-4 py-2 font-bold'
                )}
              />
              <Text
                text={`${item.start} ~ ${item.end}`}
                className='text-foreground'
              />
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
                <span className='relative group-hover:text-background'>
                  {item.url}
                </span>
              </Link>

              {/* 스킬 */}
              <ul className='flex flex-wrap gap-3'>
                {item.skill.map((el) => (
                  <li
                    className='rounded-lg bg-warning px-2 py-1'
                    key={el.title}
                  >
                    {el.title}
                  </li>
                ))}
              </ul>
              {/* Readme, 이미지 */}
              <div className='flex gap-4'>
                <button
                  aria-label='리드미버튼'
                  onClick={() => projectClick(item, 'readme')}
                  className='mt-4 flex gap-2 rounded-md border-2 p-2 font-bold transition-all duration-300 hover:bg-foreground hover:text-background'
                >
                  <BookOpenIcon />
                  README
                </button>
                {item.img && (
                  <button
                    aria-label='이미지버튼'
                    onClick={() => projectClick(item, 'image')}
                    className='mt-4 flex gap-2 rounded-md border-2 p-2 font-bold transition-all duration-300 hover:bg-foreground hover:text-background'
                  >
                    <LucideImage />
                    이미지
                  </button>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
