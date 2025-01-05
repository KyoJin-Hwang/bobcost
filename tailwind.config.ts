import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        informative: {
          DEFAULT: 'var(--informative)',
          foreground: 'var(--informative-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
      },
      spacing: {
        header: '62px',
      },
    },
    screens: {
      //pc
      pc: '992px',
    },
  },
  plugins: [],
} satisfies Config;
