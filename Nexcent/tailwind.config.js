/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:'1320px'
      },
      colors:{
        primary_color:'#4CAF4F',
        secondary_color:'#4D4D4D',
        third_color:'#717171',
        forth_color:'#F5F7FA',
        footer_bg:'#263238'
      },
      dropShadow:{
        shadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
