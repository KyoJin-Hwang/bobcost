import { cva } from 'class-variance-authority';

export const menuListVariants = cva(
  `pc:static pc:h-full top-header fixed left-0 block w-full transition-opacity h-screen bg-white dark:bg-[#121212] text-center
  `,
  {
    variants: {
      visibility: {
        visible: 'visible opacity-100',
        hidden: 'invisible opacity-0',
      },
    },
    defaultVariants: {
      visibility: 'hidden',
    },
  }
);
