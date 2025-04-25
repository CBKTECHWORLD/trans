
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }

// tailwind.config.js
export const content = [
  './node_modules/preline/preline.js',
];
export const plugins = [
  require('preline/plugin'),
];

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    }
  }
}