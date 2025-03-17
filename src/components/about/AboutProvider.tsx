'use client';

import { createContext, useState } from 'react';

import { ResumeProject } from '@/config/types';
import { cn } from '@/lib/utils';

type AboutContextType = {
  headArray: { title: string; isVisible: boolean; top: number }[];
  setHeadArray: React.Dispatch<
    React.SetStateAction<{ title: string; isVisible: boolean; top: number }[]>
  >;
};

type AboutContextProject = {
  project: ResumeProject | null;
  setProject: React.Dispatch<React.SetStateAction<ResumeProject | null>>;
};

type AboutContextModalType = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AboutContext = createContext<AboutContextType | null>(null);

export const AboutContextModal = createContext<AboutContextModalType>({
  modal: false,
  setModal: () => {},
});

export const AboutContextProject = createContext<
  AboutContextProject | undefined
>(undefined);

const AboutProvider = ({ children }: { children: React.ReactNode }) => {
  const [headArray, setHeadArray] = useState<
    { title: string; isVisible: boolean; top: number }[]
  >([]);
  const [modal, setModal] = useState<boolean>(false);
  const [project, setProject] = useState<ResumeProject | null>(null);

  const handleClick = (top: number) => {
    scrollTo({ behavior: 'smooth', top: top });
  };

  return (
    <AboutContext.Provider value={{ headArray, setHeadArray }}>
      <AboutContextModal.Provider value={{ modal, setModal }}>
        <AboutContextProject.Provider value={{ project, setProject }}>
          <div className='relative mx-auto mt-header flex gap-12 px-5 pc:max-w-[1200px]'>
            <nav className='fixed left-10 top-[120px] z-50 hidden h-screen min-w-[120px] big:flex'>
              <ul className='flex flex-col gap-4'>
                {headArray.map((el) => (
                  <li
                    key={el.title}
                    className={cn(
                      el.isVisible ? 'text-pink-600' : '',
                      `cursor-pointer text-2xl font-bold transition-all`
                    )}
                    onClick={() => handleClick(el.top)}
                  >
                    {el.title}
                  </li>
                ))}
              </ul>
            </nav>
            <div className='flex w-full flex-col gap-16'>{children}</div>
          </div>
        </AboutContextProject.Provider>
      </AboutContextModal.Provider>
    </AboutContext.Provider>
  );
};

export default AboutProvider;
