const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
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
