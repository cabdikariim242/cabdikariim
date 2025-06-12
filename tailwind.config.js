// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

 // tailwind.config.js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
    screens: {
      'xs': { 'max': '639px' }, // 👈 from 0 to 639px
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
}
