const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        metanoiaBeige: '#e4dcca',
        metanoiaBlack: '#272123',
        metanoiaYellow: '#ffc233',
      },
      zIndex: {
        '-10': '-10',
      },
      fontFamily: {
        dancingScript: "'Dancing Script', serif",
      },
      spacing: {
        '2/3': '66%',
        '3/2': '120%',
        '1/1': '100%',
      },
      maxHeight: {
        '8/10': '80%',
        '9/10': '90%',
      },
      maxWidth: {
        '8/10': '80%',
        '9/10': '90%',
      },
      minWidth: {
        '1/4': '25%',
      },
      width: {
        100: '28rem',
        101: '32rem',
      },
    },
    screens: {
      xs: '470px',
      ...defaultTheme.screens,
      '2xl': '1700px',
      '3xl': '2000px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
