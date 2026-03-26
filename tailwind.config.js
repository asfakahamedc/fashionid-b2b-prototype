/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          400: '#333333',
          500: '#1f1f1f',
          800: '#121212',
          900: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#0ea5e9', // Electric Blue
          hover: '#0284c7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
