/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      black: '#000000',
      blue: '#1350c9',
      green: '#1f7600',
      'green-light': '#f3fff4',
      grey: '#a2a2a2',
      'grey-light': '#d4d4d4',
      red: '#d72828',
      'red-light': '#fff8f8',
      transparent: 'transparent',
      white: '#ffffff',
    },
    fontSize: {
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['24px', { lineHeight: '32px' }],
      xl: ['32px', { lineHeight: '48px' }],
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
    },
    extend: {},
  },
  plugins: [],
};
