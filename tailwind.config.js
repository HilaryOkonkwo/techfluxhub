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
          dark: '#071a4a',
          mid: '#1a2d5a',
          light: '#243870',
        },
        blue: {
          DEFAULT: '#1565c0',
          mid: '#1976d2',
          light: '#42a5f5',
          sky: '#bbdefb',
          pale: '#e3f2fd',
        },
        gauge: {
          blue: '#00d4ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(1.05)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        'hero': '100vh',
        'hero-mobile': '70vh',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
