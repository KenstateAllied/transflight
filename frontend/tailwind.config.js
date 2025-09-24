/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#4263eb",
        secondary:"#63e6be",
      },
  
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

