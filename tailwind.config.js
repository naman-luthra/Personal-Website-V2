/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'matte-black': {
          light: '#3D3D3D',
          DEFAULT:'#2b2b2b',
          dark:'#272727'
        },
        'mint-green': '#0fb',
        'react-blue': {
          light: '#65CEFF',
          DEFAULT: '#00A8F6'
        },
        'magenta': '#e31f71',
        'brinjal': '#8838b4',
        'bright-yellow': '#ffe240',
        'gray-dark': '#273444',
        'dark-blue': '#0057ff',
        'neon-red': '#ff3131',
      }
    },
  },
  plugins: [],
}
