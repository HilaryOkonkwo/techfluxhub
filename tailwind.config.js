/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1b40',
          dark:    '#071a4a',
          mid:     '#1a2d5a',
          light:   '#243870',
        },
        blue: {
          DEFAULT: '#1565c0',
          mid:     '#1976d2',
          light:   '#42a5f5',
          sky:     '#bbdefb',
          pale:    '#e3f2fd',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
    },
  plugins: [],
}

