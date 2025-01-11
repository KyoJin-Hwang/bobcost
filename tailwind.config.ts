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
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
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
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        html: {
          DEFAULT: 'var(--html)',
          foreground: 'var(--html-foreground)',
        },
        css: {
          DEFAULT: 'var(--css)',
          foreground: 'var(--css-foreground)',
        },
        js: {
          DEFAULT: 'var(--js)',
          foreground: 'var(--js-foreground)',
        },
        react: {
          DEFAULT: 'var(--react)',
          foreground: 'var(--react-foreground)',
        },
      },
      spacing: {
        header: '62px',
      },
      gridTemplateColumns: {
        listGrid: 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },

    screens: {
      //pc
      pc: '992px',
    },
  },
  plugins: [],
} satisfies Config;
