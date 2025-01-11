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
    typography: {
      DEFAULT: {
        css: {
          'h2, h3, h4': {
            scrollMarginTop: '5rem',
          },
          p: {
            marginTop: '2rem',
            marginBottom: '2rem',
          },
          '.callout-contents > p': {
            margin: 0,
          },

          code: {
            counterReset: 'line',
          },

          // Inline code only
          ':not(pre) > code': {
            fontWeight: 'inherit',
            position: 'relative',
            bottom: 1,
            margin: '0 3px',
            color: '#eb5757',
            backgroundColor: 'rgba(135,131,120,0.15)',
            fontFamily:
              '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
            borderRadius: 3,
            padding: '0.2em 0.4em',
            overflowWrap: 'break-word',
          },

          'code::before': {
            content: 'none',
          },
          'code::after': {
            content: 'none',
          },

          'code[data-line-numbers] > [data-line]::before': {
            counterIncrement: 'line',
            content: 'counter(line)',

            /* Other styling */
            display: 'inline-block',
            width: '1rem',
            marginRight: '1.4rem',
            textAlign: 'right',
            color: 'lightgrey',
            fontSize: '0.75rem',
          },

          'code[data-line-numbers-max-digits="2"] > [data-line]::before': {
            width: '1rem',
          },

          'code[data-line-numbers-max-digits="3"] > [data-line]::before': {
            width: '2rem',
          },

          pre: {
            paddingRight: 0,
            paddingLeft: 0,
            color: 'var(--shiki-light)',
            backgroundColor: 'var(--shiki-light-bg)',
            border: '1px solid #e5e7eb',
          },

          '.dark pre': {
            backgroundColor: 'var(--shiki-dark-bg)',
            color: 'var(--shiki-dark)',
            border: '1px solid #374151',
          },

          'pre > code > span': {
            paddingLeft: '1.1rem',
            paddingRight: '1rem',
          },

          'pre code span': {
            color: 'var(--shiki-light)',
          },
          '.dark pre code span': {
            color: 'var(--shiki-dark)',
          },

          '[data-highlighted-line]': {
            backgroundColor: 'rgba(253, 224, 71, 0.2)',
          },

          '.project img': {
            marginTop: '0px !important',
          },

          '.project p,ul,li': {
            fontSize: 15,
          },

          u: {
            textUnderlineOffset: '4px',
            textDecorationThickness: 1,
            fontWeight: 600,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
