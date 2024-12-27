'use client';

import Button from '@/components/Button';
import { HoverText, Text } from '@/components/Text';
import { Camera } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Header = () => {
  return (
    <header>
      <Text text='BOBcost' fontWeight='bold' />
      <HoverText text='Oreder' fontSize={42} />
      <Button label='hidasdasdasdasds'></Button>
    </header>
  );
};

export default Header;
