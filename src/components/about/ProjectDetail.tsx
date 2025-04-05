import { useEffect, useState } from 'react';

import Link from 'next/link';

import { Text } from '../ui/Text';
import { ResumeProject } from '@/config/types';
import { LinkIcon } from 'lucide-react';

type DetailDropdownDataT = {
  title: string;
  desc: string;
}[];

const DetailTitle = ({ title }: { title: string }) => {
  // 올바른 문법
  return <Text text={title} className='text-2xl font-bold' />;
};

const DetailDropdown = ({
  data,
  emoji,
  defaultOpen = false,
}: {
  data: DetailDropdownDataT;
  emoji?: string;
  defaultOpen?: boolean;
}) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const handleToggle = (index: number) => {
    setOpenIndexes((prevIndexes) => {
      const newIndexes = new Set(prevIndexes);
      if (newIndexes.has(index)) {
        newIndexes.delete(index);
      } else {
        newIndexes.add(index);
      }
      return newIndexes;
    });
  };
  useEffect(() => {
    if (defaultOpen) {
      setOpenIndexes(new Set(data.map((_, idx) => idx)));
    } else {
      setOpenIndexes(new Set());
    }
  }, [data, defaultOpen]);
  return (
    <div className='flex flex-col gap-2'>
      {data.map((item, index) => (
        <div key={item.title}>
          <div
            onClick={() => handleToggle(index)}
            className='flex w-full cursor-pointer gap-1 bg-gray-200 p-2 text-left font-semibold dark:bg-gray-400'
          >
            <p>{emoji ? emoji : openIndexes.has(index) ? '▼' : '▶'}</p>
            <p>{item.title}</p>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndexes.has(index) ? 'p-3 opacity-100' : 'max-h-0 opacity-0'
            } text-sm`}
          >
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProjectDetail = ({ data }: { data: ResumeProject }) => {
  return (
    <>
      <section className='border-b-2 border-gray-400 pb-4 text-2xl font-semibold'>
        {data.title}
      </section>
      <section className='text-sm'>{`${data.start} ~ ${data.end} ( ${data.team} )`}</section>

      {/* 배포URL */}
      <section className='flex flex-col gap-2'>
        <p className='flex items-center gap-2 text-2xl font-bold'>
          <LinkIcon size={26} />
          Deploy URL
        </p>
        <p>
          <Link href={data.url} target='_blank' className='hover:text-blue-400'>
            {data.url}
          </Link>
        </p>
      </section>

      {/* 요약 */}
      <section className='flex flex-col gap-5'>
        <DetailTitle title={`📌 Summary`} />
        <p className='text-base font-semibold'>{data.summary.title}</p>
        <ul className='flex flex-col gap-2 pl-4'>
          {data.summary.devlop.map((el) => {
            return (
              <li className='list-disc font-light' key={el}>
                {el}
              </li>
            );
          })}
        </ul>
        <blockquote className='mb-4 border-l-8 border-[#6c757d] text-[#6c757d]'>
          <p className='pl-3 text-gray-500 dark:text-gray-300'>
            {data.summary.point}
          </p>
        </blockquote>
      </section>

      {/* 스킬 */}
      <section className='flex flex-col gap-2'>
        <DetailTitle title={`⚙️ Tech Stack`} />
        <DetailDropdown data={data.skill} />
      </section>

      {/* 백그라운드 */}
      <section className='flex flex-col gap-2'>
        <DetailTitle title={`🧐 BackGround`} />
        <p className='whitespace-pre-line'>{data.background}</p>
      </section>

      {/* 학습 */}
      <section className='flex flex-col gap-2'>
        <DetailTitle title={`💡 Learning`} />
        <p className='whitespace-pre-line'>{data.learning}</p>
      </section>

      {/* 트러블 슈팅 */}
      {data.trouble && (
        <section className='flex flex-col gap-2'>
          <DetailTitle title={`🎯 Troubles Shooting`} />
          <DetailDropdown data={data.trouble} emoji='🔥' defaultOpen />
        </section>
      )}
    </>
  );
};

export default ProjectDetail;
