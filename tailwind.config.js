/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/*.jsx', './src/icons/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['BebasNeue', 'sans-serif'],
      },
      colors: {
        mo5: {
          primary: '#3490dc',
          secondary: '#e84855',
          accent: '#1f6dad',
          danger: '#e3342f',
          text: '#000000',
          bg: '#ffffff',
          tipeee: '#d84759',
        },
      },
    },
  },
  plugins: [],
};
