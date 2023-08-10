/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#00A09C',
      },
      fontFamily: {
        'lora' : ['Lora, serif'],
        'inter' :['Inter, sans-serif'],
        'lato' :['Lato, sans-serif']
      }
      ,
    },
  },
  plugins: [],
}

