/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        sans: ["ygothic", "sans-serif"],
      },
      extend:{
        colors: {
          'primary' : '#1c9946',
          'secondary' :'#88ba46',
          'accent' : '#e2ef25',
        }
      }
  },
  plugins: [],
}
