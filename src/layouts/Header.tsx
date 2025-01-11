'use client';

import ThemeSwitch from './theme/Switch';
import Avatar from '@/components/common/avatar/Avatar';
import Menu from '@/components/common/menu/Menu';
import { Text } from '@/components/ui/Text';

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

const Header = () => {
  return (
    <header
      className={`fixed left-0 top-0 z-50 h-header w-full border-b-2 border-b-[#121212] bg-white dark:border-b-white dark:bg-[#121212]`}
    >
      <div className='flex h-full items-center justify-between px-5 py-2.5'>
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
