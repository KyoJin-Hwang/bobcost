'use client';

import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggle}
      className='group rounded-full border-black p-1.5 transition-colors duration-200 hover:bg-black dark:border-gray-200 dark:hover:bg-gray-200'
    >
      {theme === 'dark' ? (
        <SunIcon
          size={22}
          className='transition-colors duration-200 group-hover:fill-orange-400 group-hover:stroke-orange-400'
        />
      ) : (
        <MoonIcon
          size={22}
          className='transition-colors duration-200 group-hover:fill-yellow-400 group-hover:stroke-slate-500'
        />
      )}
    </button>
  );
};

export default ThemeSwitch;
