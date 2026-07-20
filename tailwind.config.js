/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#0065BD',
          light: '#38BDF8',
          dark: '#004380',
          glow: 'rgba(0, 101, 189, 0.35)',
        },
        scottishblue: {
          DEFAULT: '#0065BD',
          light: '#38BDF8',
          dark: '#004380',
          glow: 'rgba(0, 101, 189, 0.35)',
        },
        charcoal: {
          DEFAULT: '#0F1115',
          light: '#181B22',
          lighter: '#232732',
          card: 'rgba(24, 27, 34, 0.75)',
        },
        concrete: {
          DEFAULT: '#262930',
          light: '#3D424E',
          muted: '#8A92A3',
          border: '#333844',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(0, 101, 189, 0.35)',
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
