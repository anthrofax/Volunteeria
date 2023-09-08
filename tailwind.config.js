/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html", "**/*.html",  "./node_modules/flowbite/**/*.js", './node_modules/preline/**/*.js'],
  theme: {
    extend: {
      colors: {
        'black1': '#26292B',
        'black2': '#2E3239',
        'black3': '#2C2F32',
        'purple1': '#5F7ADB',
        'purple2': '#A2B2EE',
        'palewhite': '#CACACA',
        'white2': '#F3F5FA',
      },
      fontFamily: {
        'inria': "Inria",
        'poppins':'Poppins'
      },
      screens: {
        'phone': '320px',
        // => @media (min-width: 320px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
]
}

