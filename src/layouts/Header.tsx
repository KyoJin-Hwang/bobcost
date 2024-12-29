'use client';

import ThemeSwitch from './theme/Switch';
import Avatar from '@/components/common/avatar/Avatar';
import Menu from '@/components/common/menu/Menu';
import { Text } from '@/components/ui/Text';

const HeaderLeft = () => {
  return (
    <a href='/' aria-label='Home' className='group flex cursor-pointer gap-2'>
      <Avatar />
      <div className='flex flex-col justify-center'>
        <Text text='BOBcost' className='font-semibold' fontSize={16} />
        <Text text='Dev' className='font-semibold' fontSize={16} />
      </div>
    </a>
  );
};

const HeaderRight = () => {
  return (
    <div>
      <ThemeSwitch />
      <Menu />
    </div>
  );
};

const Header = () => {
  return (
    <header className='fixed left-0 top-0 z-10 flex w-full items-center justify-between border-b-2 border-b-[#121212] px-5 py-2.5 dark:border-b-white'>
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
};

export default Header;
