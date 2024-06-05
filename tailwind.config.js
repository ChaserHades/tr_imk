/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'navbrown': '#5F4628',
      },
      fontFamily: {
        'Arimo': ["Arimo"],
        'Fredoka': ["Fredoka"]
      }
    },
  },
  plugins: [],
}

