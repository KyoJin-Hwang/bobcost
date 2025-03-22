import Link from 'next/link';

import Button from '../ui/Button';
import { Text } from '../ui/Text';
import { ResumeProject } from '@/config/types';
import { LinkIcon } from 'lucide-react';

const ProjectDetailTitle = ({ title }: { title: string }) => {
  // 올바른 문법
  return <Text text={title} className='text-2xl font-bold' />;
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
      <section className='flex flex-col gap-2'>
        <ProjectDetailTitle title={`⚙️ Tech Stack`} />
        <div className='flex gap-2'>
          {data.skill.map((item) => (
            <Button key={item.title} label={item.title} />
          ))}
        </div>
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
