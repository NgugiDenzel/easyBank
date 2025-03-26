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
      colors: {
        green: '#31CD78',   // Green
        bluel: '#2BB7D4', // Blue
        dark: '#2D314D',      // Dark Blue
        lightgreen: '#32D069',    // Light Green
        darkblue: '#2D314D',  // Dark Blue (Duplicate for clarity)
        limegreen: '#31D35C', // Lime Green
        brightcyan: '#2BB7DA' // Bright Cyan
      },
    },
  },
  plugins: [],
}

