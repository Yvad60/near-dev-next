/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Graphik,ui-sans-serif,system-ui,sans-serif;',
      },
    },
  },
  plugins: [],
};
