/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        foodpanda: {
          primary: '#D70F64',
          hover: '#E21B70',
          light: '#F70757',
        }
      }
    },
  },
  plugins: [],
}
