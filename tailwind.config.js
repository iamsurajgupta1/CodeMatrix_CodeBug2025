/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0B14',
          secondary: '#12131E',
          accent: '#1A1B26',
        },
      },
    },
  },
  plugins: [],
};