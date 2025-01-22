'use client';

import { createContext, useState } from 'react';

import { cn } from '@/lib/utils';

type AboutContextType = {
  headArray: { title: string; isVisible: boolean; top: number }[];
  setHeadArray: React.Dispatch<
    React.SetStateAction<{ title: string; isVisible: boolean; top: number }[]>
  >;
};

export const AboutContext = createContext<AboutContextType>({
  headArray: [],
  setHeadArray: () => {},
});

const AboutProvider = ({ children }: { children: React.ReactNode }) => {
  const [headArray, setHeadArray] = useState<
    { title: string; isVisible: boolean; top: number }[]
  >([]);

  const handleClick = (top: number) => {
    scrollTo({ behavior: 'smooth', top: top });
  };
  return (
    <AboutContext.Provider value={{ headArray, setHeadArray }}>
      <div className='relative mx-auto mt-header flex gap-12 px-5 pc:max-w-[1200px]'>
        <nav className='big:flex fixed left-10 top-[120px] z-50 hidden h-screen min-w-[120px]'>
          <ul className='flex flex-col gap-4'>
            {headArray.map((el, index) => (
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
    </AboutContext.Provider>
  );
};

export default AboutProvider;
