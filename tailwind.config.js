/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    extend: {
      colors: {
        'black1': '#26292B',
        'black2': '#2E3239',
        'purple1': '#5F7ADB',
        'purple1': '#A2B2EE',
      },
      fontFamily: {
        'inria': "Inria",
        'poppins':'Poppins'
      }
    },
  },
  plugins: [],
}

