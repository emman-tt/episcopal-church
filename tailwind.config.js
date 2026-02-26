/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom utilities go here
      clipPath: {
        'cloud': 'polygon(6% 32%, 49% 44%, 94% 33%, 94% 78%, 47% 71%, 5% 81%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-cloud': {
          'clip-path': 'polygon(6% 32%, 49% 44%, 94% 33%, 94% 78%, 47% 71%, 5% 81%)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}