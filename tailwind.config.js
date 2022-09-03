const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens:{
        'xs' : {'max' : '765px'},
        'md-max' : {'max' : '1023px'},
        'lg-max' : {'max' : '1279px'},
      },
      backgroundColor:{
        'dark' : '#242424'
      },
      textColor:{
        'dark' : '#242424'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
