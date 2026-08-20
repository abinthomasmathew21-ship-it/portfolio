/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e1e7fe',
          200: '#c8d3fd',
          300: '#a1b4fa',
          400: '#738cf7',
          500: '#4f46e5', // premium indigo
          600: '#4338ca',
          700: '#3730a3',
          800: '#1f1a70',
          900: '#110e3b',
          950: '#07051f',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
