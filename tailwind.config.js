/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      width: {
        '96': '24rem', 
        '100': '500px', 
      },
      color:{
        primary:{
        darkblue:'#2d314d',
        limegreen:'#31d35c',
        brightcyan:'#2bb7da',

        },
        
  
      },
    },
  },
  plugins: [],
}

