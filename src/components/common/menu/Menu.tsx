'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { menuListVariants } from './Menu.style';
import { Text } from '@/components/ui/Text';
import useResize from '@/hooks/useResize';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';

type MenuContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType>({
  open: false,
  setOpen: () => {},
});

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const isPc = useResize(992);

  useEffect(() => {
    if (isPc) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isPc]);
  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

const MenuList = () => {
  const menuArray = [
    { id: 1, name: '최신 생성 글', href: '' },
    { id: 2, name: '최신 수정 글', href: '' },
    { id: 3, name: '개발자 소개', href: 'about' },
  ];
  const { open } = useContext(MenuContext);

  return (
    <nav
      className={cn(
        menuListVariants({ visibility: open ? 'visible' : 'hidden' })
      )}
    >
      <ul className='flex h-full flex-col items-center gap-8 py-5 pc:flex-row pc:gap-4 pc:py-0'>
        {menuArray.map((el) => (
          <a
            key={el.id}
            href={el.href}
            className='transition-all duration-300 pc:rounded pc:px-2 pc:hover:bg-accent'
          >
            <Text
              className='border-b-2 border-b-[#121212] px-3 py-2 font-semibold dark:border-b-white pc:border-b-0'
              text={el.name}
            ></Text>
          </a>
        ))}
      </ul>
    </nav>
  );
};

const MenuToggle = () => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <button
      className='flex items-center gap-1 font-semibold pc:hidden'
      onClick={() => setOpen((el) => !el)}
    >
      {!open ? <MenuIcon /> : <XIcon />} 메뉴
    </button>
  );
};

const Menu = () => {
  return (
    <MenuProvider>
      <MenuList />
      <MenuToggle />
    </MenuProvider>
  );
};

export default Menu;
