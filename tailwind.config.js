/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontSize: {
        '32px': '2rem',
        '22px': '22px',
      },
      width: {
        '200px': '12.5rem',
      },
      colors: {
        primary_dark: '#3f4246',
        secondary_dark: '#676767',
      },
      fontFamily: {
        sans: 'Graphik,ui-sans-serif,system-ui,sans-serif;',
      },
      margin: {
        1.5: '375rem',
      },
      padding: {
        '25px': '1.563rem',
        '156px': '9.75rem',
        '22px': '22px',
      },
      backgroundImage: {
        hero_background:
          'radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)',
        cta_background:
          'radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(127,208,231,0) 100%)',
      },
      letterSpacing: {
        '0.02rem': '0.02rem',
      },
      lineHeight: {
        '44px': '2.75rem',
      },
    },
  },
  plugins: [],
};
