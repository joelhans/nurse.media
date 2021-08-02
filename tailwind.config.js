const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './content/**/*.mdx',
      './pages/**/*.js',
      './src/components/**/*.js',
      './layouts/**/*.js',
      './lib/**/*.js',
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
        display: ['Geomanist', ...defaultTheme.fontFamily.sans],
        mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        orange: '#f27370',
        green: '#00a891',
        pink: '#9F5B82',
        purple: '#442b75',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#232128',
            a: {
              color: theme('colors.green'),
              fontWeight: '700',
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.purple'),
              },
            },
            h1: {
              fontSize: theme('text.2xl'),
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.purple'),
            },
            h3: {
              color: theme('colors.pink'),
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            code: {
              color: theme('colors.sea'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
    modifiers: ['md', 'lg', 'xl'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
