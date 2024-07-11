/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        halo: '#4B50E6',
        hola: '#F55DF3'
      },
      fontFamily: {
        'lato': ['"Lato"','sans-serif'],
        'kanit': ['"Kanit"','sans-serif'],
      },
    },
  },
  plugins: [],
}

