import { useState } from 'react';

import Link from 'next/link';

import Button from '../ui/Button';
import { Text } from '../ui/Text';
import { ResumeProject } from '@/config/types';
import { cn } from '@/lib/utils';
import { LinkIcon } from 'lucide-react';

const ProjectDetailTitle = ({ title }: { title: string }) => {
  // 올바른 문법
  return <Text text={title} className='text-2xl font-bold' />;
};
const ProjectDetail = ({ data }: { data: ResumeProject }) => {
  const [selectedDesc, setSelectedDesc] = useState<string | null>(null);

  const handleButtonClick = (desc: string) => {
    if (selectedDesc === desc) {
      setSelectedDesc(null);
    } else {
      setSelectedDesc(desc);
    }
  };

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
        <ProjectDetailTitle title={`📌 Summary`} />
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
      <section className='flex flex-col gap-2 overflow-hidden'>
        <ProjectDetailTitle title={`⚙️ Tech Stack`} />
        <div className='flex flex-wrap gap-2'>
          {data.skill.map((item) => (
            <Button
              variant={'hover'}
              key={item.title}
              label={item.title}
              className={cn(
                item.desc === selectedDesc
                  ? 'bg-foreground text-background'
                  : 'bg-background text-foreground',
                'hover:bg-foreground hover:text-background'
              )}
              onClick={() => handleButtonClick(item.desc)}
            />
          ))}
        </div>

        {selectedDesc && (
          <section className='mt-2'>
            <h3 className='text-xl font-semibold'>Description:</h3>
            <p>{selectedDesc}</p>
          </section>
        )}
      </section>

      {/* 백그라운드 */}
      <section className='flex flex-col gap-2'>
        <ProjectDetailTitle title={`🧐 BackGround`} />
      </section>

      {/* 학습 */}
      <section className='flex flex-col gap-2'>
        <ProjectDetailTitle title={`💡 Learning`} />
      </section>

      {/* 트러블 슈팅 */}
      {data.trouble && (
        <section className='flex flex-col gap-2'>
          <ProjectDetailTitle title={`🎯 Troubles Shooting`} />
        </section>
      )}

      {data.img && (
        <section>
          <ProjectDetailTitle title={`🖼️ Image`} />
        </section>
      )}
    </>
  );
};

export default ProjectDetail;
