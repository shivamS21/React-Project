/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FFEAAE',
        gray: '#5A5959',
        purple: '#5F00D9',
        red: '#D01C28',
      }
    },
  },
  plugins: [],
}

