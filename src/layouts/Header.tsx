'use client';

import ThemeSwitch from './theme/Switch';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';

const HeaderLeft = () => {
  return (
    <div className='flex gap-2'>
      <Avatar />
      <div className='flex flex-col'>
        <Text text='BOBcost' fontWeight='bold' fontSize={20} />
        <Text text='Dev' fontWeight='bold' fontSize={20} />
      </div>
    </div>
  );
};

const HeaderRight = () => {
  return <ThemeSwitch />;
};

const Header = () => {
  return (
    <header className='flex items-center justify-between border-b-2 border-b-[#121212] px-5 py-2.5 dark:border-b-white'>
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
};

export default Header;
