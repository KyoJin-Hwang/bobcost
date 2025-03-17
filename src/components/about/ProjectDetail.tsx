import Link from 'next/link';

import { ResumeProject } from '@/config/types';
import { LinkIcon } from 'lucide-react';

const ProjectDetail = ({ data }: { data: ResumeProject }) => {
  return (
    <>
      <section className='font-semibol border-b-2 border-gray-400 pb-4 text-2xl'>
        {data.title}
      </section>
      <section>{`${data.start} ~ ${data.end} ( ${data.team} )`}</section>
      <section className='flex flex-col gap-2'>
        <p className='flex items-center gap-2 text-xl font-semibold'>
          <LinkIcon size={20} />
          DEPLOY URL
        </p>
        <p>
          <Link href={data.url} target='_blank' className='hover:text-blue-400'>
            {data.url}
          </Link>
        </p>
      </section>
      <section className='flex flex-col gap-2'>
        <p className='text-xl font-semibold'>📌 Summary</p>
        <p className='text-lg'>{data.summary.title}</p>
        <ul className='flex flex-col gap-2 pl-4'>
          {data.summary.devlop.map((el) => {
            return (
              <li className='list-disc' key={el}>
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
    </>
  );
};

export default ProjectDetail;
