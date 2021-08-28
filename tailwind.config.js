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
    },
    screens: {
      xs: '470px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
