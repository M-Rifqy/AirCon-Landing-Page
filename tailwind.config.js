/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron'],
        quicksand: ['Quicksand'],
        meaCulpa: ['Mea Culpa'],
        play: ['Play'],
        montserrat: ['Montserrat']
      }
    },
  },
  plugins: [],
}
