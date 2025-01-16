'use client';

import { useContext } from 'react';
import { createContext } from 'react';

import ThemeSwitch from './theme/Switch';
import ScrollProgressBar from '@/components/common/ScrollProgressBar';
import Avatar from '@/components/common/avatar/Avatar';
import Menu from '@/components/common/menu/Menu';
import { Text } from '@/components/ui/Text';

type HeaderContextProps = {
  update: string;
  create: string;
};

export const HeaderContext = createContext<HeaderContextProps>({
  update: '/',
  create: '/',
});

const HeaderLeft = () => {
  return (
    <a href='/' className='group flex cursor-pointer gap-2'>
      <Avatar />
      <div className='flex flex-col justify-center'>
        <Text
          text='BOBcost'
          className='text-base font-semibold'
          fontSize={16}
        />
        <Text text='Dev' className='font-semibold' fontSize={16} />
      </div>
    </a>
  );
};

const HeaderRight = () => {
  return (
    <div className='flex items-center gap-4'>
      <ThemeSwitch />
      <Menu />
    </div>
  );
};
const Header = ({ update, create }: HeaderContextProps) => {
  return (
    <HeaderContext.Provider value={{ update, create }}>
      <header
        className={`fixed left-0 top-0 z-50 h-header w-full border-b-2 border-b-[#121212] bg-white dark:border-b-white dark:bg-[#121212]`}
      >
        <div className='flex h-full items-center justify-between px-5 py-2.5'>
          <HeaderLeft />
          <HeaderRight />
        </div>

        <ScrollProgressBar />
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
