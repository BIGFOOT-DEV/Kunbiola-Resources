/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':    '#374C3B',
        'accent':     '#D1A24E',
        'offwhite':   '#F7F7F7',
        'mint':       '#C0D7CA',
        'muted-green':'#6C9374',
        'btn-hover':  '#2E7D32',
      },
      fontFamily: {
        'righteous': ['Righteous', 'sans-serif'],
        'inter':     ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '20': '20px',
        '40': '40px',
      },
      boxShadow: {
        'card':   '0px 4px 4px 0px rgba(0,0,0,0.25)',
        'btn':    '0px 4px 2px rgba(0,0,0,0.25)',
        'footer-btn': '0px 6px 2px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}
