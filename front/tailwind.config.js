/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
         'primary-color': '#FFFFFF', //blanc
         'secondary-color' :'#F5F5DC', //beige
         'text-color' : '#000000', //noir

      },
    },
  },
  plugins: [],
}

